import{r as o,h as r,H as e,g as i}from"./p-4ea5094b.js";import{s as a}from"./p-8815d042.js";const t=class{constructor(r){o(this,r),this.multiple=!1}componentWillLoad(){this.items=Array.from(this.el.children),this.multiple||(this.activeItem=a(this.el,"go-accordion-item[active]")[0],this.activeItem&&this.activeItem.open(),this.closeNonActive())}openHandler(o){o.stopPropagation(),this.multiple||(this.activeItem=o.target,this.closeNonActive())}closeNonActive(){this.items.forEach((o=>{o.isSameNode(this.activeItem)||o.close()}))}render(){return r(e,null,r("slot",null))}get el(){return i(this)}};t.style="go-accordion{--heading-padding-x:1rem;--heading-padding-y:var(--go-size--1);--panel-padding-x:1rem;--panel-padding-y:1rem;--panel-max-height:100vh;--heading-text-color:var(--go-color-text, #333);--heading-bg-color:var(--go-color-neutral-100);--heading-font-size:var(--go-size-0, 1rem);--heading-font-weight:700;--panel-bg-color:var(--go-color-bg);--heading-border-bottom:var(--go-border-thin) solid var(--go-color-border);--heading-bg-color-hover:var(--go-color-neutral-200);--heading-fg-color-hover:var(--go-color-text);--heading-radius:var(--radius-2)}";export{t as go_accordion}