/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { IProp } from "./components/demo-playground/prop.type";
import { INavItem } from "@go-ui/core/dist/types/interfaces";
import { ISlot } from "./components/demo-playground/slot.type";
export namespace Components {
    interface AppFooter {
    }
    interface AppHeader {
        "activePath": string;
        "inline": boolean;
    }
    interface AppRoot {
    }
    interface CodeBlock {
        "code": string;
        "language": string;
    }
    interface CopyCodeBtn {
        "code": string;
    }
    interface DemoFrame {
        /**
          * custom code to be injected into demo frame
         */
        "code": string;
        "component": string;
        "demo": string;
        "hideSource": boolean;
    }
    interface GoDemoBox {
        /**
          * custom code to be injected into demo frame
         */
        "code": string;
        /**
          * Custom head html inside iframe
         */
        "head": string;
        "hideSource": boolean;
    }
    interface PageDocs {
        "params": {
    [param: string]: string;
  };
    }
    interface PageHome {
    }
    interface PageNotfound {
    }
    interface PageStandard {
        "params": {
    [param: string]: string;
  };
    }
    interface PageTransition {
        "activePath": string;
    }
    interface PropsPanel {
        "debug": boolean;
        "values": IProp[];
    }
    interface SeoTags {
        "description": string;
        "image": string;
        "pageTitle": string;
    }
    interface SidebarLayout {
        "editUrl"?: string;
        "result": string;
        "sidebarItems": INavItem[];
    }
    interface SlotsPanel {
        "debug": boolean;
        "values": ISlot[];
    }
    interface WcOutput {
        "usage": string;
    }
    interface WcPlayground {
        "block": boolean;
        "code": string;
        "props": IProp[] | string;
        "slots": ISlot[] | string;
        /**
          * query selector for the component to apply props to
         */
        "tag": string;
    }
}
export interface CopyCodeBtnCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLCopyCodeBtnElement;
}
export interface PropsPanelCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLPropsPanelElement;
}
export interface SlotsPanelCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLSlotsPanelElement;
}
export interface WcPlaygroundCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLWcPlaygroundElement;
}
declare global {
    interface HTMLAppFooterElement extends Components.AppFooter, HTMLStencilElement {
    }
    var HTMLAppFooterElement: {
        prototype: HTMLAppFooterElement;
        new (): HTMLAppFooterElement;
    };
    interface HTMLAppHeaderElement extends Components.AppHeader, HTMLStencilElement {
    }
    var HTMLAppHeaderElement: {
        prototype: HTMLAppHeaderElement;
        new (): HTMLAppHeaderElement;
    };
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLCodeBlockElement extends Components.CodeBlock, HTMLStencilElement {
    }
    var HTMLCodeBlockElement: {
        prototype: HTMLCodeBlockElement;
        new (): HTMLCodeBlockElement;
    };
    interface HTMLCopyCodeBtnElement extends Components.CopyCodeBtn, HTMLStencilElement {
    }
    var HTMLCopyCodeBtnElement: {
        prototype: HTMLCopyCodeBtnElement;
        new (): HTMLCopyCodeBtnElement;
    };
    interface HTMLDemoFrameElement extends Components.DemoFrame, HTMLStencilElement {
    }
    var HTMLDemoFrameElement: {
        prototype: HTMLDemoFrameElement;
        new (): HTMLDemoFrameElement;
    };
    interface HTMLGoDemoBoxElement extends Components.GoDemoBox, HTMLStencilElement {
    }
    var HTMLGoDemoBoxElement: {
        prototype: HTMLGoDemoBoxElement;
        new (): HTMLGoDemoBoxElement;
    };
    interface HTMLPageDocsElement extends Components.PageDocs, HTMLStencilElement {
    }
    var HTMLPageDocsElement: {
        prototype: HTMLPageDocsElement;
        new (): HTMLPageDocsElement;
    };
    interface HTMLPageHomeElement extends Components.PageHome, HTMLStencilElement {
    }
    var HTMLPageHomeElement: {
        prototype: HTMLPageHomeElement;
        new (): HTMLPageHomeElement;
    };
    interface HTMLPageNotfoundElement extends Components.PageNotfound, HTMLStencilElement {
    }
    var HTMLPageNotfoundElement: {
        prototype: HTMLPageNotfoundElement;
        new (): HTMLPageNotfoundElement;
    };
    interface HTMLPageStandardElement extends Components.PageStandard, HTMLStencilElement {
    }
    var HTMLPageStandardElement: {
        prototype: HTMLPageStandardElement;
        new (): HTMLPageStandardElement;
    };
    interface HTMLPageTransitionElement extends Components.PageTransition, HTMLStencilElement {
    }
    var HTMLPageTransitionElement: {
        prototype: HTMLPageTransitionElement;
        new (): HTMLPageTransitionElement;
    };
    interface HTMLPropsPanelElement extends Components.PropsPanel, HTMLStencilElement {
    }
    var HTMLPropsPanelElement: {
        prototype: HTMLPropsPanelElement;
        new (): HTMLPropsPanelElement;
    };
    interface HTMLSeoTagsElement extends Components.SeoTags, HTMLStencilElement {
    }
    var HTMLSeoTagsElement: {
        prototype: HTMLSeoTagsElement;
        new (): HTMLSeoTagsElement;
    };
    interface HTMLSidebarLayoutElement extends Components.SidebarLayout, HTMLStencilElement {
    }
    var HTMLSidebarLayoutElement: {
        prototype: HTMLSidebarLayoutElement;
        new (): HTMLSidebarLayoutElement;
    };
    interface HTMLSlotsPanelElement extends Components.SlotsPanel, HTMLStencilElement {
    }
    var HTMLSlotsPanelElement: {
        prototype: HTMLSlotsPanelElement;
        new (): HTMLSlotsPanelElement;
    };
    interface HTMLWcOutputElement extends Components.WcOutput, HTMLStencilElement {
    }
    var HTMLWcOutputElement: {
        prototype: HTMLWcOutputElement;
        new (): HTMLWcOutputElement;
    };
    interface HTMLWcPlaygroundElement extends Components.WcPlayground, HTMLStencilElement {
    }
    var HTMLWcPlaygroundElement: {
        prototype: HTMLWcPlaygroundElement;
        new (): HTMLWcPlaygroundElement;
    };
    interface HTMLElementTagNameMap {
        "app-footer": HTMLAppFooterElement;
        "app-header": HTMLAppHeaderElement;
        "app-root": HTMLAppRootElement;
        "code-block": HTMLCodeBlockElement;
        "copy-code-btn": HTMLCopyCodeBtnElement;
        "demo-frame": HTMLDemoFrameElement;
        "go-demo-box": HTMLGoDemoBoxElement;
        "page-docs": HTMLPageDocsElement;
        "page-home": HTMLPageHomeElement;
        "page-notfound": HTMLPageNotfoundElement;
        "page-standard": HTMLPageStandardElement;
        "page-transition": HTMLPageTransitionElement;
        "props-panel": HTMLPropsPanelElement;
        "seo-tags": HTMLSeoTagsElement;
        "sidebar-layout": HTMLSidebarLayoutElement;
        "slots-panel": HTMLSlotsPanelElement;
        "wc-output": HTMLWcOutputElement;
        "wc-playground": HTMLWcPlaygroundElement;
    }
}
declare namespace LocalJSX {
    interface AppFooter {
    }
    interface AppHeader {
        "activePath"?: string;
        "inline"?: boolean;
    }
    interface AppRoot {
    }
    interface CodeBlock {
        "code"?: string;
        "language"?: string;
    }
    interface CopyCodeBtn {
        "code"?: string;
        "onCopyCode"?: (event: CopyCodeBtnCustomEvent<any>) => void;
    }
    interface DemoFrame {
        /**
          * custom code to be injected into demo frame
         */
        "code"?: string;
        "component"?: string;
        "demo"?: string;
        "hideSource"?: boolean;
    }
    interface GoDemoBox {
        /**
          * custom code to be injected into demo frame
         */
        "code"?: string;
        /**
          * Custom head html inside iframe
         */
        "head"?: string;
        "hideSource"?: boolean;
    }
    interface PageDocs {
        "params"?: {
    [param: string]: string;
  };
    }
    interface PageHome {
    }
    interface PageNotfound {
    }
    interface PageStandard {
        "params"?: {
    [param: string]: string;
  };
    }
    interface PageTransition {
        "activePath"?: string;
    }
    interface PropsPanel {
        "debug"?: boolean;
        "onPropChange"?: (event: PropsPanelCustomEvent<IProp[]>) => void;
        "values"?: IProp[];
    }
    interface SeoTags {
        "description"?: string;
        "image"?: string;
        "pageTitle"?: string;
    }
    interface SidebarLayout {
        "editUrl"?: string;
        "result"?: string;
        "sidebarItems"?: INavItem[];
    }
    interface SlotsPanel {
        "debug"?: boolean;
        "onSlotDisplayChange"?: (event: SlotsPanelCustomEvent<ISlot[]>) => void;
        "values"?: ISlot[];
    }
    interface WcOutput {
        "usage"?: string;
    }
    interface WcPlayground {
        "block"?: boolean;
        "code"?: string;
        "onLoaded"?: (event: WcPlaygroundCustomEvent<HTMLElement>) => void;
        "props"?: IProp[] | string;
        "slots"?: ISlot[] | string;
        /**
          * query selector for the component to apply props to
         */
        "tag"?: string;
    }
    interface IntrinsicElements {
        "app-footer": AppFooter;
        "app-header": AppHeader;
        "app-root": AppRoot;
        "code-block": CodeBlock;
        "copy-code-btn": CopyCodeBtn;
        "demo-frame": DemoFrame;
        "go-demo-box": GoDemoBox;
        "page-docs": PageDocs;
        "page-home": PageHome;
        "page-notfound": PageNotfound;
        "page-standard": PageStandard;
        "page-transition": PageTransition;
        "props-panel": PropsPanel;
        "seo-tags": SeoTags;
        "sidebar-layout": SidebarLayout;
        "slots-panel": SlotsPanel;
        "wc-output": WcOutput;
        "wc-playground": WcPlayground;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-footer": LocalJSX.AppFooter & JSXBase.HTMLAttributes<HTMLAppFooterElement>;
            "app-header": LocalJSX.AppHeader & JSXBase.HTMLAttributes<HTMLAppHeaderElement>;
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
            "code-block": LocalJSX.CodeBlock & JSXBase.HTMLAttributes<HTMLCodeBlockElement>;
            "copy-code-btn": LocalJSX.CopyCodeBtn & JSXBase.HTMLAttributes<HTMLCopyCodeBtnElement>;
            "demo-frame": LocalJSX.DemoFrame & JSXBase.HTMLAttributes<HTMLDemoFrameElement>;
            "go-demo-box": LocalJSX.GoDemoBox & JSXBase.HTMLAttributes<HTMLGoDemoBoxElement>;
            "page-docs": LocalJSX.PageDocs & JSXBase.HTMLAttributes<HTMLPageDocsElement>;
            "page-home": LocalJSX.PageHome & JSXBase.HTMLAttributes<HTMLPageHomeElement>;
            "page-notfound": LocalJSX.PageNotfound & JSXBase.HTMLAttributes<HTMLPageNotfoundElement>;
            "page-standard": LocalJSX.PageStandard & JSXBase.HTMLAttributes<HTMLPageStandardElement>;
            "page-transition": LocalJSX.PageTransition & JSXBase.HTMLAttributes<HTMLPageTransitionElement>;
            "props-panel": LocalJSX.PropsPanel & JSXBase.HTMLAttributes<HTMLPropsPanelElement>;
            "seo-tags": LocalJSX.SeoTags & JSXBase.HTMLAttributes<HTMLSeoTagsElement>;
            "sidebar-layout": LocalJSX.SidebarLayout & JSXBase.HTMLAttributes<HTMLSidebarLayoutElement>;
            "slots-panel": LocalJSX.SlotsPanel & JSXBase.HTMLAttributes<HTMLSlotsPanelElement>;
            "wc-output": LocalJSX.WcOutput & JSXBase.HTMLAttributes<HTMLWcOutputElement>;
            "wc-playground": LocalJSX.WcPlayground & JSXBase.HTMLAttributes<HTMLWcPlaygroundElement>;
        }
    }
}
