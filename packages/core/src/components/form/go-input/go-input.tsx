import { Component, h, Element, Prop } from '@stencil/core';
import { InputProps, InputType } from '../../../interfaces';
import { hasSlot, inheritComponentAttrs } from '../../../utils/helper';
import { uniqueId } from 'lodash-es';
import { fieldSlotNames } from '../../../utils';
@Component({
  tag: 'go-input',
  shadow: false,
})
export class GoInput implements InputProps {
  @Element() el: HTMLElement;
  /**
   * Type of this input field
   * `go-input` support only the types that is considered "single-line of text"
   * For other types, check other form components.
   */
  @Prop() type?: InputType = 'text';

  /**
   * DOM id for label
   */
  @Prop() labelId?: string;

  /**
   * DOM id for prefix
   */
  @Prop() prefixId?: string;

  /**
   * DOM id for suffix
   */
  @Prop() suffixId?: string;
  /**
   * DOM id for hint message
   */
  @Prop() hintId?: string;

  /**
   * DOM id for error
   */
  @Prop() errorId?: string;

  /**
   * Name of the input field
   */
  @Prop() name: string;

  /**
   * Label of the input field
   */
  @Prop() label: string;

  /**
   * If the input is disabled
   */
  @Prop() disabled?: boolean;
  /**
   * Hint message for the input
   */
  @Prop() hint?: string;
  /**
   * Error state of input, text provided will be shown as error message
   */
  @Prop() error?: boolean | string;
  /**
   * If this input is read-only
   */
  @Prop() readonly?: boolean;

  /**
   * Value of the input field
   */
  @Prop() value?: string;

  prefix = 'go-input-';
  attrs: any;
  hasNamedSlot: { [key: string]: boolean } = {};
  id = uniqueId(this.prefix);
  componentWillLoad() {
    this.attrs = inheritComponentAttrs(this, ['value', 'error']);
    fieldSlotNames.forEach((slotName) => {
      this.hasNamedSlot[slotName] = hasSlot(this.el, slotName);
    });
  }

  render() {
    const { prefix, value, id, error, attrs } = this;
    return (
      <go-field controlId={id} idPrefix={prefix} error={error} {...attrs}>
        {fieldSlotNames.map((slotName) => {
          if (this.hasNamedSlot[slotName]) {
            return (
              <template slot={slotName}>
                <slot name={slotName}></slot>
              </template>
            );
          }
        })}
        <input class="control" id={id} {...attrs} value={value} />
      </go-field>
    );
  }
}
