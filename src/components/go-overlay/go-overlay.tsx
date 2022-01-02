import { Component, Host, h, Element, Prop, Method, Event, EventEmitter, Watch } from '@stencil/core';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { getFocusableChildren, inheritAttributes } from '../../utils/helper';
@Component({
  tag: 'go-overlay',
  styleUrl: 'go-overlay.scss',
  shadow: false,
})
export class GoOverlay {
  @Element() el: HTMLElement;

  @Prop({ reflect: true, mutable: true }) active: boolean = false;
  /**
   * Type of this overlay, can be dialog or alertdialog
   */
  @Prop() type: 'dialog' | 'alertdialog' = 'dialog';

  /**
   * If persistent, the overlay will not be closed when the user clicks outside of it or presses the escape key.
   */
  @Prop() persistent: boolean = false;

  // for trapping focus
  firstFocusableEl: HTMLElement;
  lastFocusableEl: HTMLElement;

  // keep track of the element that triggered the overlay
  originator: HTMLElement;

  // for detecting click outside
  bgEl: HTMLElement;

  // Store attributes inherited from the host element
  private inheritedAttrs = {};
  componentWillLoad() {
    this.inheritedAttrs = inheritAttributes(this.el, ['class', 'style'], false);
    // move this.el to the end of the body
    const body = document.querySelector('body');
    body.appendChild(this.el);
  }

  componentDidLoad() {
    const focusableChildren = getFocusableChildren(this.el);
    this.firstFocusableEl = focusableChildren[0];
    this.lastFocusableEl = focusableChildren[focusableChildren.length - 1];
    // trap focus inside overlay
    this.lastFocusableEl?.addEventListener('keydown', (e: KeyboardEvent) => {
      if (this.active) {
        if (e.code === 'Tab' && !e.shiftKey) {
          e.preventDefault();
          this.firstFocusableEl?.focus();
        }
      }
    });
    this.firstFocusableEl?.addEventListener('keydown', (e: KeyboardEvent) => {
      if (this.active) {
        if (e.code === 'Tab' && e.shiftKey) {
          e.preventDefault();
          this.lastFocusableEl?.focus();
        }
      }
    });

    // close overlay on click outside
    if (!this.persistent) {
      this.el.addEventListener('click', (e: MouseEvent) => {
        if (this.active) {
          if (e.target === this.bgEl) {
            this.close();
          }
        }
      });
    }
  }

  /**
   * Emitted when the overlay is opened
   */
  @Event({
    eventName: 'overlayOpen',
    cancelable: true,
    bubbles: true,
  })
  openEvent: EventEmitter<void>;

  /**
   * Emitted when the overlay is closed
   */
  @Event({
    eventName: 'overlayClose',
    cancelable: true,
    bubbles: true,
  })
  closeEvent: EventEmitter<void>;

  @Method()
  async close() {
    this.closeEvent.emit();
    enableBodyScroll(this.el);
    this.active = false;
    this.originator?.focus();
    this.el.style.visibility = 'hidden';
  }

  @Method()
  async open() {
    this.originator = document.activeElement as HTMLElement;
    this.openEvent.emit();
    disableBodyScroll(this.el);
    this.el.style.visibility = 'visible';
    this.active = true;

    // close overlay on escape
    if (!this.persistent) {
      document.addEventListener('keydown', (e: KeyboardEvent) => {
        if (this.active) {
          if (e.code === 'Escape') {
            this.close();
          }
        }
      });
    }

    // focus on first focusable element on next tick
    this.firstFocusableEl?.focus();
  }

  @Watch('active')
  watchActiveHandler(newValue: boolean): void {
    if (newValue) {
      this.open();
      return;
    }
    this.close();
  }

  render() {
    const { active, inheritedAttrs } = this;
    return (
      <Host class={{ active }} {...inheritedAttrs}>
        <div class="overlay-bg" ref={(el) => (this.bgEl = el)}></div>
        <div class="overlay-content">
          <slot></slot>
        </div>
      </Host>
    );
  }
}
