/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { Breakpoints, ColorVariants, INavItem } from "./types";
import { BoxiconVariants, FontAwesomeVariants, MaterialIconVariants } from "./components/go-icon/go-icon";
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
          * If set, the button will take up the full width of its parent If block="{breakpoint}" is set, the button will take up the full width for the specified breakpoint. e.g. a `block="mobile"` button will display full width on mobile devices. If block="all", the button will take full width on all devices.
         */
        "block"?: Breakpoints;
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
          * Outline style with filled background
         */
        "outlineFill"?: boolean;
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
        /**
          * If specified, buttons within group will be full width on smaller devices and auto-width going forward. e.g. having `block="tablet"` will make all buttons in group take up full width on mobile and tablet sizes and auto-width on larger devices.
         */
        "block"?: Breakpoints;
        /**
          * No gap between buttons.
         */
        "connected"?: boolean;
    }
    interface GoCard {
        /**
          * Subtitle of the card
         */
        "cardSubtitle"?: string;
        /**
          * Title of the card
         */
        "cardTitle"?: string;
        /**
          * For cards that link to destinations, one card can only link to one destination. Note: The link (`a` tag) will be applied to the card-title element, so if you don't have a `card-title` prop, you will need to manually add the `a` tag in one of the slots provided.
         */
        "href"?: string;
        /**
          * Position of featured media in the card
         */
        "mediaPosition": | 'top'
    | 'left'
    | 'right'
    | 'bottom'
    | 'start' // responsive top left
    | 'end';
        /**
          * when href is present, `target` attribute to be applied to the card link
         */
        "target"?: '_blank' | '_self' | '_parent' | '_top';
    }
    interface GoDialog {
        /**
          * If this dialog is active
         */
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
        /**
          * Accessible role of the dialog, can be dialog or alertdialog
         */
        "role": 'dialog' | 'alertdialog';
    }
    interface GoFooter {
        /**
          * Dark theme footer
         */
        "dark"?: boolean;
        /**
          * Navigation links to be displayed.
         */
        "links": INavItem[] | string;
        /**
          * Number of navigation columns
         */
        "navCols"?: number;
        /**
          * Number of navigation columns for desktop and up
         */
        "navColsDesktop"?: number;
        /**
          * Number of navigation columns for tablet and up
         */
        "navColsTablet"?: number;
        /**
          * Label for navigation
         */
        "navLabel"?: string;
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
        /**
          * Controls at which breakpoint the mobile menu (go-nav-drawer) becomes main nav menu (go-main-nav)
         */
        "breakpoint": Breakpoints;
    }
    interface GoIcon {
        /**
          * Color of the icon,  supports CSS units and variables. Default: `currentColor`
         */
        "color"?: string;
        /**
          * Mark this icon to be hidden from screen reader
         */
        "decorative": boolean;
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
    interface GoLink {
        "expandClickableArea"?: boolean;
        /**
          * The `href` of the link.
         */
        "href": string;
        /**
          * The `target` of the link.
         */
        "target"?: '_blank' | '_self' | '_parent' | '_top';
    }
    interface GoMainNav {
        /**
          * Initialise the menu
          * @param items menu items to be rendered
         */
        "init": (newItems: INavItem[] | string) => Promise<void>;
        /**
          * Navigation items to be rendered if provided, slot content will not be rendered.
         */
        "items"?: INavItem[] | string;
    }
    interface GoNavDrawer {
        "active": boolean;
        "close": () => Promise<void>;
        /**
          * Initialise the menu
          * @param items menu items to be rendered
         */
        "init": (newItems: INavItem[] | string) => Promise<void>;
        /**
          * Navigation items to be rendered
         */
        "items"?: INavItem[] | string;
        "label": string;
        "open": () => Promise<void>;
        /**
          * Position where the navigation should appear from
         */
        "position"?: 'left' | 'right';
        "toggle": () => Promise<void>;
    }
    interface GoNavLink {
        /**
          * full width
         */
        "block": boolean;
        /**
          * navigation item
         */
        "item": INavItem;
        /**
          * show arrow at the end of the link
         */
        "showArrow": boolean;
    }
    interface GoNavList {
        /**
          * Make the list full width
         */
        "block": boolean;
        /**
          * Heading text
         */
        "heading": string;
        /**
          * Heading navigation item
         */
        "headingItem": INavItem | string;
        /**
          * list of navigation items to be displayed
         */
        "items": INavItem[] | string;
    }
    interface GoOverlay {
        "active": boolean;
        "close": () => Promise<void>;
        "open": () => Promise<void>;
        /**
          * If persistent, the overlay will not be closed when the user clicks outside of it or presses the escape key.
         */
        "persistent": boolean;
    }
    interface GoSearchBar {
        "closeSearchForm": () => Promise<void>;
        "openSearchForm": () => Promise<void>;
    }
    interface GoSkipLink {
        /**
          * Tell skip link which element to focus (supports any query selector)
         */
        "target"?: string;
    }
    interface GoTab {
        /**
          * If this tab is currently active if multiple `go-tab` are active in the same `go-tabs`, first one is active.
         */
        "active": boolean;
        "label": string;
        /**
          * id for the tab panel element If not provided, a unique id will be generated.
         */
        "panelId"?: string;
        /**
          * `id` for the tab button element. If not provided, a unique id will be generated.
         */
        "tabId"?: string;
    }
    interface GoTabs {
        /**
          * Provides a label that describes the purpose of the set of tabs.
         */
        "tabGroupLabel"?: string;
        /**
          * Set tabs orientation to vertical
         */
        "vertical": boolean;
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
    interface HTMLGoCardElement extends Components.GoCard, HTMLStencilElement {
    }
    var HTMLGoCardElement: {
        prototype: HTMLGoCardElement;
        new (): HTMLGoCardElement;
    };
    interface HTMLGoDialogElement extends Components.GoDialog, HTMLStencilElement {
    }
    var HTMLGoDialogElement: {
        prototype: HTMLGoDialogElement;
        new (): HTMLGoDialogElement;
    };
    interface HTMLGoFooterElement extends Components.GoFooter, HTMLStencilElement {
    }
    var HTMLGoFooterElement: {
        prototype: HTMLGoFooterElement;
        new (): HTMLGoFooterElement;
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
    interface HTMLGoLinkElement extends Components.GoLink, HTMLStencilElement {
    }
    var HTMLGoLinkElement: {
        prototype: HTMLGoLinkElement;
        new (): HTMLGoLinkElement;
    };
    interface HTMLGoMainNavElement extends Components.GoMainNav, HTMLStencilElement {
    }
    var HTMLGoMainNavElement: {
        prototype: HTMLGoMainNavElement;
        new (): HTMLGoMainNavElement;
    };
    interface HTMLGoNavDrawerElement extends Components.GoNavDrawer, HTMLStencilElement {
    }
    var HTMLGoNavDrawerElement: {
        prototype: HTMLGoNavDrawerElement;
        new (): HTMLGoNavDrawerElement;
    };
    interface HTMLGoNavLinkElement extends Components.GoNavLink, HTMLStencilElement {
    }
    var HTMLGoNavLinkElement: {
        prototype: HTMLGoNavLinkElement;
        new (): HTMLGoNavLinkElement;
    };
    interface HTMLGoNavListElement extends Components.GoNavList, HTMLStencilElement {
    }
    var HTMLGoNavListElement: {
        prototype: HTMLGoNavListElement;
        new (): HTMLGoNavListElement;
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
    interface HTMLGoSkipLinkElement extends Components.GoSkipLink, HTMLStencilElement {
    }
    var HTMLGoSkipLinkElement: {
        prototype: HTMLGoSkipLinkElement;
        new (): HTMLGoSkipLinkElement;
    };
    interface HTMLGoTabElement extends Components.GoTab, HTMLStencilElement {
    }
    var HTMLGoTabElement: {
        prototype: HTMLGoTabElement;
        new (): HTMLGoTabElement;
    };
    interface HTMLGoTabsElement extends Components.GoTabs, HTMLStencilElement {
    }
    var HTMLGoTabsElement: {
        prototype: HTMLGoTabsElement;
        new (): HTMLGoTabsElement;
    };
    interface HTMLElementTagNameMap {
        "go-accordion": HTMLGoAccordionElement;
        "go-accordion-item": HTMLGoAccordionItemElement;
        "go-button": HTMLGoButtonElement;
        "go-button-group": HTMLGoButtonGroupElement;
        "go-card": HTMLGoCardElement;
        "go-dialog": HTMLGoDialogElement;
        "go-footer": HTMLGoFooterElement;
        "go-gov-au-logo": HTMLGoGovAuLogoElement;
        "go-header-bar": HTMLGoHeaderBarElement;
        "go-icon": HTMLGoIconElement;
        "go-link": HTMLGoLinkElement;
        "go-main-nav": HTMLGoMainNavElement;
        "go-nav-drawer": HTMLGoNavDrawerElement;
        "go-nav-link": HTMLGoNavLinkElement;
        "go-nav-list": HTMLGoNavListElement;
        "go-overlay": HTMLGoOverlayElement;
        "go-search-bar": HTMLGoSearchBarElement;
        "go-skip-link": HTMLGoSkipLinkElement;
        "go-tab": HTMLGoTabElement;
        "go-tabs": HTMLGoTabsElement;
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
          * If set, the button will take up the full width of its parent If block="{breakpoint}" is set, the button will take up the full width for the specified breakpoint. e.g. a `block="mobile"` button will display full width on mobile devices. If block="all", the button will take full width on all devices.
         */
        "block"?: Breakpoints;
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
          * Outline style with filled background
         */
        "outlineFill"?: boolean;
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
        /**
          * If specified, buttons within group will be full width on smaller devices and auto-width going forward. e.g. having `block="tablet"` will make all buttons in group take up full width on mobile and tablet sizes and auto-width on larger devices.
         */
        "block"?: Breakpoints;
        /**
          * No gap between buttons.
         */
        "connected"?: boolean;
    }
    interface GoCard {
        /**
          * Subtitle of the card
         */
        "cardSubtitle"?: string;
        /**
          * Title of the card
         */
        "cardTitle"?: string;
        /**
          * For cards that link to destinations, one card can only link to one destination. Note: The link (`a` tag) will be applied to the card-title element, so if you don't have a `card-title` prop, you will need to manually add the `a` tag in one of the slots provided.
         */
        "href"?: string;
        /**
          * Position of featured media in the card
         */
        "mediaPosition"?: | 'top'
    | 'left'
    | 'right'
    | 'bottom'
    | 'start' // responsive top left
    | 'end';
        /**
          * when href is present, `target` attribute to be applied to the card link
         */
        "target"?: '_blank' | '_self' | '_parent' | '_top';
    }
    interface GoDialog {
        /**
          * If this dialog is active
         */
        "active"?: boolean;
        /**
          * Heading of the overlay content
         */
        "heading"?: string;
        /**
          * If persistent, the overlay will not be closed when the user clicks outside of it or presses the escape key.
         */
        "persistent"?: boolean;
        /**
          * Accessible role of the dialog, can be dialog or alertdialog
         */
        "role"?: 'dialog' | 'alertdialog';
    }
    interface GoFooter {
        /**
          * Dark theme footer
         */
        "dark"?: boolean;
        /**
          * Navigation links to be displayed.
         */
        "links"?: INavItem[] | string;
        /**
          * Number of navigation columns
         */
        "navCols"?: number;
        /**
          * Number of navigation columns for desktop and up
         */
        "navColsDesktop"?: number;
        /**
          * Number of navigation columns for tablet and up
         */
        "navColsTablet"?: number;
        /**
          * Label for navigation
         */
        "navLabel"?: string;
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
        /**
          * Controls at which breakpoint the mobile menu (go-nav-drawer) becomes main nav menu (go-main-nav)
         */
        "breakpoint"?: Breakpoints;
    }
    interface GoIcon {
        /**
          * Color of the icon,  supports CSS units and variables. Default: `currentColor`
         */
        "color"?: string;
        /**
          * Mark this icon to be hidden from screen reader
         */
        "decorative"?: boolean;
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
    interface GoLink {
        "expandClickableArea"?: boolean;
        /**
          * The `href` of the link.
         */
        "href"?: string;
        /**
          * The `target` of the link.
         */
        "target"?: '_blank' | '_self' | '_parent' | '_top';
    }
    interface GoMainNav {
        /**
          * Navigation items to be rendered if provided, slot content will not be rendered.
         */
        "items"?: INavItem[] | string;
        "onNavigate"?: (event: CustomEvent<any>) => void;
    }
    interface GoNavDrawer {
        "active"?: boolean;
        /**
          * Navigation items to be rendered
         */
        "items"?: INavItem[] | string;
        "label"?: string;
        /**
          * Emitted when the nav drawer is closed
         */
        "onClose"?: (event: CustomEvent<void>) => void;
        /**
          * Emitted when the nav drawer is opened
         */
        "onOpen"?: (event: CustomEvent<void>) => void;
        /**
          * Position where the navigation should appear from
         */
        "position"?: 'left' | 'right';
    }
    interface GoNavLink {
        /**
          * full width
         */
        "block"?: boolean;
        /**
          * navigation item
         */
        "item"?: INavItem;
        "onNavigate"?: (event: CustomEvent<any>) => void;
        /**
          * show arrow at the end of the link
         */
        "showArrow"?: boolean;
    }
    interface GoNavList {
        /**
          * Make the list full width
         */
        "block"?: boolean;
        /**
          * Heading text
         */
        "heading"?: string;
        /**
          * Heading navigation item
         */
        "headingItem"?: INavItem | string;
        /**
          * list of navigation items to be displayed
         */
        "items"?: INavItem[] | string;
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
    }
    interface GoSearchBar {
    }
    interface GoSkipLink {
        /**
          * Tell skip link which element to focus (supports any query selector)
         */
        "target"?: string;
    }
    interface GoTab {
        /**
          * If this tab is currently active if multiple `go-tab` are active in the same `go-tabs`, first one is active.
         */
        "active"?: boolean;
        "label"?: string;
        /**
          * id for the tab panel element If not provided, a unique id will be generated.
         */
        "panelId"?: string;
        /**
          * `id` for the tab button element. If not provided, a unique id will be generated.
         */
        "tabId"?: string;
    }
    interface GoTabs {
        /**
          * Provides a label that describes the purpose of the set of tabs.
         */
        "tabGroupLabel"?: string;
        /**
          * Set tabs orientation to vertical
         */
        "vertical"?: boolean;
    }
    interface IntrinsicElements {
        "go-accordion": GoAccordion;
        "go-accordion-item": GoAccordionItem;
        "go-button": GoButton;
        "go-button-group": GoButtonGroup;
        "go-card": GoCard;
        "go-dialog": GoDialog;
        "go-footer": GoFooter;
        "go-gov-au-logo": GoGovAuLogo;
        "go-header-bar": GoHeaderBar;
        "go-icon": GoIcon;
        "go-link": GoLink;
        "go-main-nav": GoMainNav;
        "go-nav-drawer": GoNavDrawer;
        "go-nav-link": GoNavLink;
        "go-nav-list": GoNavList;
        "go-overlay": GoOverlay;
        "go-search-bar": GoSearchBar;
        "go-skip-link": GoSkipLink;
        "go-tab": GoTab;
        "go-tabs": GoTabs;
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
            "go-card": LocalJSX.GoCard & JSXBase.HTMLAttributes<HTMLGoCardElement>;
            "go-dialog": LocalJSX.GoDialog & JSXBase.HTMLAttributes<HTMLGoDialogElement>;
            "go-footer": LocalJSX.GoFooter & JSXBase.HTMLAttributes<HTMLGoFooterElement>;
            "go-gov-au-logo": LocalJSX.GoGovAuLogo & JSXBase.HTMLAttributes<HTMLGoGovAuLogoElement>;
            "go-header-bar": LocalJSX.GoHeaderBar & JSXBase.HTMLAttributes<HTMLGoHeaderBarElement>;
            "go-icon": LocalJSX.GoIcon & JSXBase.HTMLAttributes<HTMLGoIconElement>;
            "go-link": LocalJSX.GoLink & JSXBase.HTMLAttributes<HTMLGoLinkElement>;
            "go-main-nav": LocalJSX.GoMainNav & JSXBase.HTMLAttributes<HTMLGoMainNavElement>;
            "go-nav-drawer": LocalJSX.GoNavDrawer & JSXBase.HTMLAttributes<HTMLGoNavDrawerElement>;
            "go-nav-link": LocalJSX.GoNavLink & JSXBase.HTMLAttributes<HTMLGoNavLinkElement>;
            "go-nav-list": LocalJSX.GoNavList & JSXBase.HTMLAttributes<HTMLGoNavListElement>;
            "go-overlay": LocalJSX.GoOverlay & JSXBase.HTMLAttributes<HTMLGoOverlayElement>;
            "go-search-bar": LocalJSX.GoSearchBar & JSXBase.HTMLAttributes<HTMLGoSearchBarElement>;
            "go-skip-link": LocalJSX.GoSkipLink & JSXBase.HTMLAttributes<HTMLGoSkipLinkElement>;
            "go-tab": LocalJSX.GoTab & JSXBase.HTMLAttributes<HTMLGoTabElement>;
            "go-tabs": LocalJSX.GoTabs & JSXBase.HTMLAttributes<HTMLGoTabsElement>;
        }
    }
}
