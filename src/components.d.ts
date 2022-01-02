/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { Breakpoints, ColorVariants } from "./types";
import { BoxiconVariants, FontAwesomeVariants, MaterialIconVariants } from "./components/go-icon/go-icon";
import { INavItem } from "./components/go-main-nav/go-main-nav";
export namespace Components {
    interface GoAccordion {
        /**
          * If multiple `<go-accordion-item>`s can open at the same time
         */
        "multiple"?: boolean;
    }
    interface GoAccordionItem {
        /**
          * If the accordion item should be opened by default
         */
        "active"?: boolean;
        /**
          * If expanded height should be automatically calculated. If set, the `--go-accordion-item-body-max-height` CSS variable will be set automatically to the content height
         */
        "autoHeight"?: boolean;
        /**
          * Closes the accordion item
         */
        "close": () => Promise<void>;
        /**
          * Focus on header control
         */
        "focusOnControl": () => Promise<void>;
        /**
          * Heading text. This will be overwritten by `heading` slot
         */
        "heading"?: string;
        /**
          * The HTML tag to be applied to the heading text. This will be overwritten by `heading` slot
         */
        "headingTag"?: string;
        /**
          * Opens the accordion item.
         */
        "open": () => Promise<void>;
        /**
          * Toggle open state of accordion item
         */
        "toggle": () => Promise<void>;
    }
    interface GoButton {
        /**
          * If set, the button will take up the full width of its parent If block="{breakpoint}" is set, the button will take up the full width for the specified breakpoint. e.g. a `block="mobile"` button will display full width on mobile devices.
         */
        "block"?: Breakpoints | '';
        /**
          * Color variants
         */
        "color"?: ColorVariants;
        /**
          * Reduce inner gaps and outer paddings
         */
        "compact"?: boolean;
        /**
          * If this button is disabled
         */
        "disabled"?: boolean;
        /**
          * If `flat` is set, the button will have no shadow and will be filled with the background color of the selected variant
         */
        "flat"?: boolean;
        /**
          * If the button has an href, it will be rendered as an anchor tag
         */
        "href"?: string;
        /**
          * Circle shaped icon only button that has min size of 40px for touch devices
         */
        "icon"?: boolean;
        /**
          * If `outline` is true, the button will have a border based on selected variant
          * @see  `variant` property
         */
        "outline"?: boolean;
        /**
          * If button should have pill-shaped corners
         */
        "round"?: boolean;
        /**
          * Stack elements inside the button
         */
        "stack"?: boolean;
        /**
          * Html type of the button
         */
        "type": 'submit' | 'reset' | 'button';
    }
    interface GoButtonGroup {
    }
    interface GoDialog {
        "active": boolean;
        "close": () => Promise<void>;
        /**
          * Heading of the overlay content
         */
        "heading"?: string;
        "open": () => Promise<void>;
        /**
          * If persistent, the overlay will not be closed when the user clicks outside of it or presses the escape key.
         */
        "persistent": boolean;
    }
    interface GoGovAuLogo {
        /**
          * Set height of the logo group. Slots will be scaled to this height. Width is set to auto to avoid image distortion.
         */
        "height": string;
        /**
          * If href is provided, logo will be wrapped inside an anchor (`a`) tag. By default, all attributes except `class` and `style` are passed through to the anchor tag.
         */
        "href"?: string;
    }
    interface GoHeaderBar {
    }
    interface GoIcon {
        /**
          * Color of the icon,  supports CSS units and variables. Default: `currentColor`
         */
        "color"?: string;
        /**
          * Specify the icon set being referenced. Icon font CSS files must be included in the page.
         */
        "iconSet": MaterialIconVariants | FontAwesomeVariants | BoxiconVariants;
        /**
          * Name of the icon
         */
        "name": string;
        /**
          * Size of the icon, supports CSS units and variables. Default: 1.5em for material icons, 1em for other icon sets.
         */
        "size"?: string;
    }
    interface GoMainNav {
        /**
          * Navigation items to be rendered
         */
        "items": INavItem[];
    }
    interface GoOverlay {
        "active": boolean;
        "close": () => Promise<void>;
        "open": () => Promise<void>;
        /**
          * If persistent, the overlay will not be closed when the user clicks outside of it or presses the escape key.
         */
        "persistent": boolean;
        "theme": 'light' | 'dark';
        /**
          * Type of this overlay, can be dialog or alertdialog
         */
        "type": 'dialog' | 'alertdialog';
    }
    interface GoSearchBar {
        "closeSearchForm": () => Promise<void>;
        "openSearchForm": () => Promise<void>;
    }
}
declare global {
    interface HTMLGoAccordionElement extends Components.GoAccordion, HTMLStencilElement {
    }
    var HTMLGoAccordionElement: {
        prototype: HTMLGoAccordionElement;
        new (): HTMLGoAccordionElement;
    };
    interface HTMLGoAccordionItemElement extends Components.GoAccordionItem, HTMLStencilElement {
    }
    var HTMLGoAccordionItemElement: {
        prototype: HTMLGoAccordionItemElement;
        new (): HTMLGoAccordionItemElement;
    };
    interface HTMLGoButtonElement extends Components.GoButton, HTMLStencilElement {
    }
    var HTMLGoButtonElement: {
        prototype: HTMLGoButtonElement;
        new (): HTMLGoButtonElement;
    };
    interface HTMLGoButtonGroupElement extends Components.GoButtonGroup, HTMLStencilElement {
    }
    var HTMLGoButtonGroupElement: {
        prototype: HTMLGoButtonGroupElement;
        new (): HTMLGoButtonGroupElement;
    };
    interface HTMLGoDialogElement extends Components.GoDialog, HTMLStencilElement {
    }
    var HTMLGoDialogElement: {
        prototype: HTMLGoDialogElement;
        new (): HTMLGoDialogElement;
    };
    interface HTMLGoGovAuLogoElement extends Components.GoGovAuLogo, HTMLStencilElement {
    }
    var HTMLGoGovAuLogoElement: {
        prototype: HTMLGoGovAuLogoElement;
        new (): HTMLGoGovAuLogoElement;
    };
    interface HTMLGoHeaderBarElement extends Components.GoHeaderBar, HTMLStencilElement {
    }
    var HTMLGoHeaderBarElement: {
        prototype: HTMLGoHeaderBarElement;
        new (): HTMLGoHeaderBarElement;
    };
    interface HTMLGoIconElement extends Components.GoIcon, HTMLStencilElement {
    }
    var HTMLGoIconElement: {
        prototype: HTMLGoIconElement;
        new (): HTMLGoIconElement;
    };
    interface HTMLGoMainNavElement extends Components.GoMainNav, HTMLStencilElement {
    }
    var HTMLGoMainNavElement: {
        prototype: HTMLGoMainNavElement;
        new (): HTMLGoMainNavElement;
    };
    interface HTMLGoOverlayElement extends Components.GoOverlay, HTMLStencilElement {
    }
    var HTMLGoOverlayElement: {
        prototype: HTMLGoOverlayElement;
        new (): HTMLGoOverlayElement;
    };
    interface HTMLGoSearchBarElement extends Components.GoSearchBar, HTMLStencilElement {
    }
    var HTMLGoSearchBarElement: {
        prototype: HTMLGoSearchBarElement;
        new (): HTMLGoSearchBarElement;
    };
    interface HTMLElementTagNameMap {
        "go-accordion": HTMLGoAccordionElement;
        "go-accordion-item": HTMLGoAccordionItemElement;
        "go-button": HTMLGoButtonElement;
        "go-button-group": HTMLGoButtonGroupElement;
        "go-dialog": HTMLGoDialogElement;
        "go-gov-au-logo": HTMLGoGovAuLogoElement;
        "go-header-bar": HTMLGoHeaderBarElement;
        "go-icon": HTMLGoIconElement;
        "go-main-nav": HTMLGoMainNavElement;
        "go-overlay": HTMLGoOverlayElement;
        "go-search-bar": HTMLGoSearchBarElement;
    }
}
declare namespace LocalJSX {
    interface GoAccordion {
        /**
          * If multiple `<go-accordion-item>`s can open at the same time
         */
        "multiple"?: boolean;
    }
    interface GoAccordionItem {
        /**
          * If the accordion item should be opened by default
         */
        "active"?: boolean;
        /**
          * If expanded height should be automatically calculated. If set, the `--go-accordion-item-body-max-height` CSS variable will be set automatically to the content height
         */
        "autoHeight"?: boolean;
        /**
          * Heading text. This will be overwritten by `heading` slot
         */
        "heading"?: string;
        /**
          * The HTML tag to be applied to the heading text. This will be overwritten by `heading` slot
         */
        "headingTag"?: string;
        /**
          * Emitted when accordion item has closed
         */
        "onClosed"?: (event: CustomEvent<any>) => void;
        /**
          * Emitted when accordion item started closing
         */
        "onClosing"?: (event: CustomEvent<any>) => void;
        /**
          * Emitted when accordion item has opened
         */
        "onOpened"?: (event: CustomEvent<any>) => void;
        /**
          * Emitted when accordion item started opening
         */
        "onOpening"?: (event: CustomEvent<any>) => void;
    }
    interface GoButton {
        /**
          * If set, the button will take up the full width of its parent If block="{breakpoint}" is set, the button will take up the full width for the specified breakpoint. e.g. a `block="mobile"` button will display full width on mobile devices.
         */
        "block"?: Breakpoints | '';
        /**
          * Color variants
         */
        "color"?: ColorVariants;
        /**
          * Reduce inner gaps and outer paddings
         */
        "compact"?: boolean;
        /**
          * If this button is disabled
         */
        "disabled"?: boolean;
        /**
          * If `flat` is set, the button will have no shadow and will be filled with the background color of the selected variant
         */
        "flat"?: boolean;
        /**
          * If the button has an href, it will be rendered as an anchor tag
         */
        "href"?: string;
        /**
          * Circle shaped icon only button that has min size of 40px for touch devices
         */
        "icon"?: boolean;
        /**
          * If `outline` is true, the button will have a border based on selected variant
          * @see  `variant` property
         */
        "outline"?: boolean;
        /**
          * If button should have pill-shaped corners
         */
        "round"?: boolean;
        /**
          * Stack elements inside the button
         */
        "stack"?: boolean;
        /**
          * Html type of the button
         */
        "type"?: 'submit' | 'reset' | 'button';
    }
    interface GoButtonGroup {
    }
    interface GoDialog {
        "active"?: boolean;
        /**
          * Heading of the overlay content
         */
        "heading"?: string;
        /**
          * If persistent, the overlay will not be closed when the user clicks outside of it or presses the escape key.
         */
        "persistent"?: boolean;
    }
    interface GoGovAuLogo {
        /**
          * Set height of the logo group. Slots will be scaled to this height. Width is set to auto to avoid image distortion.
         */
        "height"?: string;
        /**
          * If href is provided, logo will be wrapped inside an anchor (`a`) tag. By default, all attributes except `class` and `style` are passed through to the anchor tag.
         */
        "href"?: string;
    }
    interface GoHeaderBar {
    }
    interface GoIcon {
        /**
          * Color of the icon,  supports CSS units and variables. Default: `currentColor`
         */
        "color"?: string;
        /**
          * Specify the icon set being referenced. Icon font CSS files must be included in the page.
         */
        "iconSet"?: MaterialIconVariants | FontAwesomeVariants | BoxiconVariants;
        /**
          * Name of the icon
         */
        "name"?: string;
        /**
          * Size of the icon, supports CSS units and variables. Default: 1.5em for material icons, 1em for other icon sets.
         */
        "size"?: string;
    }
    interface GoMainNav {
        /**
          * Navigation items to be rendered
         */
        "items"?: INavItem[];
    }
    interface GoOverlay {
        "active"?: boolean;
        /**
          * Emitted when the overlay is closed
         */
        "onOverlayClose"?: (event: CustomEvent<void>) => void;
        /**
          * Emitted when the overlay is opened
         */
        "onOverlayOpen"?: (event: CustomEvent<void>) => void;
        /**
          * If persistent, the overlay will not be closed when the user clicks outside of it or presses the escape key.
         */
        "persistent"?: boolean;
        "theme"?: 'light' | 'dark';
        /**
          * Type of this overlay, can be dialog or alertdialog
         */
        "type"?: 'dialog' | 'alertdialog';
    }
    interface GoSearchBar {
    }
    interface IntrinsicElements {
        "go-accordion": GoAccordion;
        "go-accordion-item": GoAccordionItem;
        "go-button": GoButton;
        "go-button-group": GoButtonGroup;
        "go-dialog": GoDialog;
        "go-gov-au-logo": GoGovAuLogo;
        "go-header-bar": GoHeaderBar;
        "go-icon": GoIcon;
        "go-main-nav": GoMainNav;
        "go-overlay": GoOverlay;
        "go-search-bar": GoSearchBar;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "go-accordion": LocalJSX.GoAccordion & JSXBase.HTMLAttributes<HTMLGoAccordionElement>;
            "go-accordion-item": LocalJSX.GoAccordionItem & JSXBase.HTMLAttributes<HTMLGoAccordionItemElement>;
            "go-button": LocalJSX.GoButton & JSXBase.HTMLAttributes<HTMLGoButtonElement>;
            "go-button-group": LocalJSX.GoButtonGroup & JSXBase.HTMLAttributes<HTMLGoButtonGroupElement>;
            "go-dialog": LocalJSX.GoDialog & JSXBase.HTMLAttributes<HTMLGoDialogElement>;
            "go-gov-au-logo": LocalJSX.GoGovAuLogo & JSXBase.HTMLAttributes<HTMLGoGovAuLogoElement>;
            "go-header-bar": LocalJSX.GoHeaderBar & JSXBase.HTMLAttributes<HTMLGoHeaderBarElement>;
            "go-icon": LocalJSX.GoIcon & JSXBase.HTMLAttributes<HTMLGoIconElement>;
            "go-main-nav": LocalJSX.GoMainNav & JSXBase.HTMLAttributes<HTMLGoMainNavElement>;
            "go-overlay": LocalJSX.GoOverlay & JSXBase.HTMLAttributes<HTMLGoOverlayElement>;
            "go-search-bar": LocalJSX.GoSearchBar & JSXBase.HTMLAttributes<HTMLGoSearchBarElement>;
        }
    }
}
