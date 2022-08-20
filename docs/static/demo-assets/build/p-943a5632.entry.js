import{r as t,h as n,H as e,g as o}from"./p-4ea5094b.js";import{l as i}from"./p-0b85b8da.js";import{l as r}from"./p-febc2359.js";import"./p-0d86e690.js";function l(t){return t.split("-")[0]}function s(t){return t.split("-")[1]}function a(t){return["top","bottom"].includes(l(t))?"x":"y"}function c(t){return"y"===t?"height":"width"}function u(t,n,e){let{reference:o,floating:i}=t;const r=o.x+o.width/2-i.width/2,u=o.y+o.height/2-i.height/2,f=a(n),d=c(f),p=o[d]/2-i[d]/2,h="x"===f;let m;switch(l(n)){case"top":m={x:r,y:o.y-i.height};break;case"bottom":m={x:r,y:o.y+o.height};break;case"right":m={x:o.x+o.width,y:u};break;case"left":m={x:o.x-i.width,y:u};break;default:m={x:o.x,y:o.y}}switch(s(n)){case"start":m[f]-=p*(e&&h?-1:1);break;case"end":m[f]+=p*(e&&h?-1:1)}return m}function f(t){return"number"!=typeof t?function(t){return{top:0,right:0,bottom:0,left:0,...t}}(t):{top:t,right:t,bottom:t,left:t}}function d(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}async function p(t,n){var e;void 0===n&&(n={});const{x:o,y:i,platform:r,rects:l,elements:s,strategy:a}=t,{boundary:c="clippingAncestors",rootBoundary:u="viewport",elementContext:p="floating",altBoundary:h=!1,padding:m=0}=n,g=f(m),y=s[h?"floating"===p?"reference":"floating":p],x=d(await r.getClippingRect({element:null==(e=await(null==r.isElement?void 0:r.isElement(y)))||e?y:y.contextElement||await(null==r.getDocumentElement?void 0:r.getDocumentElement(s.floating)),boundary:c,rootBoundary:u,strategy:a})),v=d(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({rect:"floating"===p?{...l.floating,x:o,y:i}:l.reference,offsetParent:await(null==r.getOffsetParent?void 0:r.getOffsetParent(s.floating)),strategy:a}):l[p]);return{top:x.top-v.top+g.top,bottom:v.bottom-x.bottom+g.bottom,left:x.left-v.left+g.left,right:v.right-x.right+g.right}}const h=Math.min,m=Math.max;function g(t,n,e){return m(t,h(n,e))}const y={left:"right",right:"left",bottom:"top",top:"bottom"};function x(t){return t.replace(/left|right|bottom|top/g,(t=>y[t]))}const v={start:"end",end:"start"};function b(t){return t.replace(/start|end/g,(t=>v[t]))}const w=function(t){return void 0===t&&(t={}),{name:"flip",options:t,async fn(n){var e;const{placement:o,middlewareData:i,rects:r,initialPlacement:u,platform:f,elements:d}=n,{mainAxis:h=!0,crossAxis:m=!0,fallbackPlacements:g,fallbackStrategy:y="bestFit",flipAlignment:v=!0,...w}=t,A=l(o),R=[u,...g||(A!==u&&v?function(t){const n=x(t);return[b(t),n,b(n)]}(u):[x(u)])],k=await p(n,w),P=[];let T=(null==(e=i.flip)?void 0:e.overflows)||[];if(h&&P.push(k[A]),m){const{main:t,cross:n}=function(t,n,e){void 0===e&&(e=!1);const o=s(t),i=a(t),r=c(i);let l="x"===i?o===(e?"end":"start")?"right":"left":"start"===o?"bottom":"top";return n.reference[r]>n.floating[r]&&(l=x(l)),{main:l,cross:x(l)}}(o,r,await(null==f.isRTL?void 0:f.isRTL(d.floating)));P.push(k[t],k[n])}if(T=[...T,{placement:o,overflows:P}],!P.every((t=>t<=0))){var j,D;const t=(null!=(j=null==(D=i.flip)?void 0:D.index)?j:0)+1,n=R[t];if(n)return{data:{index:t,overflows:T},reset:{placement:n}};let e="bottom";switch(y){case"bestFit":{var L;const t=null==(L=T.map((t=>[t,t.overflows.filter((t=>t>0)).reduce(((t,n)=>t+n),0)])).sort(((t,n)=>t[1]-n[1]))[0])?void 0:L[0].placement;t&&(e=t);break}case"initialPlacement":e=u}if(o!==e)return{reset:{placement:e}}}return{}}}};function A(t){return t&&t.document&&t.location&&t.alert&&t.setInterval}function R(t){if(null==t)return window;if(!A(t)){const n=t.ownerDocument;return n&&n.defaultView||window}return t}function k(t){return R(t).getComputedStyle(t)}function P(t){return A(t)?"":t?(t.nodeName||"").toLowerCase():""}function T(){const t=navigator.userAgentData;return null!=t&&t.brands?t.brands.map((t=>t.brand+"/"+t.version)).join(" "):navigator.userAgent}function j(t){return t instanceof R(t).HTMLElement}function D(t){return t instanceof R(t).Element}function L(t){return"undefined"!=typeof ShadowRoot&&(t instanceof R(t).ShadowRoot||t instanceof ShadowRoot)}function O(t){const{overflow:n,overflowX:e,overflowY:o}=k(t);return/auto|scroll|overlay|hidden/.test(n+o+e)}function M(t){return["table","td","th"].includes(P(t))}function B(t){const n=/firefox/i.test(T()),e=k(t);return"none"!==e.transform||"none"!==e.perspective||"paint"===e.contain||["transform","perspective"].includes(e.willChange)||n&&"filter"===e.willChange||n&&!!e.filter&&"none"!==e.filter}function F(){return!/^((?!chrome|android).)*safari/i.test(T())}const S=Math.min,$=Math.max,z=Math.round;function C(t,n,e){var o,i,r,l;void 0===n&&(n=!1),void 0===e&&(e=!1);const s=t.getBoundingClientRect();let a=1,c=1;n&&j(t)&&(a=t.offsetWidth>0&&z(s.width)/t.offsetWidth||1,c=t.offsetHeight>0&&z(s.height)/t.offsetHeight||1);const u=D(t)?R(t):window,f=!F()&&e,d=(s.left+(f&&null!=(o=null==(i=u.visualViewport)?void 0:i.offsetLeft)?o:0))/a,p=(s.top+(f&&null!=(r=null==(l=u.visualViewport)?void 0:l.offsetTop)?r:0))/c,h=s.width/a,m=s.height/c;return{width:h,height:m,top:p,right:d+h,bottom:p+m,left:d,x:d,y:p}}function E(t){return(n=t,(n instanceof R(n).Node?t.ownerDocument:t.document)||window.document).documentElement;var n}function q(t){return D(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function H(t){return C(E(t)).left+q(t).scrollLeft}function V(t,n,e){const o=j(n),i=E(n),r=C(t,o&&function(t){const n=C(t);return z(n.width)!==t.offsetWidth||z(n.height)!==t.offsetHeight}(n),"fixed"===e);let l={scrollLeft:0,scrollTop:0};const s={x:0,y:0};if(o||!o&&"fixed"!==e)if(("body"!==P(n)||O(i))&&(l=q(n)),j(n)){const t=C(n,!0);s.x=t.x+n.clientLeft,s.y=t.y+n.clientTop}else i&&(s.x=H(i));return{x:r.left+l.scrollLeft-s.x,y:r.top+l.scrollTop-s.y,width:r.width,height:r.height}}function W(t){return"html"===P(t)?t:t.assignedSlot||t.parentNode||(L(t)?t.host:null)||E(t)}function X(t){return j(t)&&"fixed"!==k(t).position?function(t){let{offsetParent:n}=t,e=t,o=!1;for(;e&&e!==n;){const{assignedSlot:t}=e;if(t){let i=t.offsetParent;if("contents"===k(t).display){const n=t.hasAttribute("style"),o=t.style.display;t.style.display=k(e).display,i=t.offsetParent,t.style.display=o,n||t.removeAttribute("style")}e=t,n!==i&&(n=i,o=!0)}else if(L(e)&&e.host&&o)break;e=L(e)&&e.host||e.parentNode}return n}(t):null}function Y(t){const n=R(t);let e=X(t);for(;e&&M(e)&&"static"===k(e).position;)e=X(e);return e&&("html"===P(e)||"body"===P(e)&&"static"===k(e).position&&!B(e))?n:e||function(t){let n=W(t);for(L(n)&&(n=n.host);j(n)&&!["html","body"].includes(P(n));){if(B(n))return n;{const t=n.parentNode;n=L(t)?t.host:t}}return null}(t)||n}function _(t){if(j(t))return{width:t.offsetWidth,height:t.offsetHeight};const n=C(t);return{width:n.width,height:n.height}}function G(t){const n=W(t);return["html","body","#document"].includes(P(n))?t.ownerDocument.body:j(n)&&O(n)?n:G(n)}function I(t,n){var e;void 0===n&&(n=[]);const o=G(t),i=o===(null==(e=t.ownerDocument)?void 0:e.body),r=R(o),l=i?[r].concat(r.visualViewport||[],O(o)?o:[]):o,s=n.concat(l);return i?s:s.concat(I(l))}function J(t,n,e){return"viewport"===n?d(function(t,n){const e=R(t),o=E(t),i=e.visualViewport;let r=o.clientWidth,l=o.clientHeight,s=0,a=0;if(i){r=i.width,l=i.height;const t=F();(t||!t&&"fixed"===n)&&(s=i.offsetLeft,a=i.offsetTop)}return{width:r,height:l,x:s,y:a}}(t,e)):D(n)?function(t,n){const e=C(t,!1,"fixed"===n),o=e.top+t.clientTop,i=e.left+t.clientLeft;return{top:o,left:i,x:i,y:o,right:i+t.clientWidth,bottom:o+t.clientHeight,width:t.clientWidth,height:t.clientHeight}}(n,e):d(function(t){var n;const e=E(t),o=q(t),i=null==(n=t.ownerDocument)?void 0:n.body,r=$(e.scrollWidth,e.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0),l=$(e.scrollHeight,e.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0);let s=-o.scrollLeft+H(t);const a=-o.scrollTop;return"rtl"===k(i||e).direction&&(s+=$(e.clientWidth,i?i.clientWidth:0)-r),{width:r,height:l,x:s,y:a}}(E(t)))}function K(t){const n=I(t),e=["absolute","fixed"].includes(k(t).position)&&j(t)?Y(t):t;return D(e)?n.filter((t=>D(t)&&function(t,n){const e=null==n.getRootNode?void 0:n.getRootNode();if(t.contains(n))return!0;if(e&&L(e)){let e=n;do{if(e&&t===e)return!0;e=e.parentNode||e.host}while(e)}return!1}(t,e)&&"body"!==P(t))):[]}const N={getClippingRect:function(t){let{element:n,boundary:e,rootBoundary:o,strategy:i}=t;const r=[..."clippingAncestors"===e?K(n):[].concat(e),o],l=r.reduce(((t,e)=>{const o=J(n,e,i);return t.top=$(o.top,t.top),t.right=S(o.right,t.right),t.bottom=S(o.bottom,t.bottom),t.left=$(o.left,t.left),t}),J(n,r[0],i));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}},convertOffsetParentRelativeRectToViewportRelativeRect:function(t){let{rect:n,offsetParent:e,strategy:o}=t;const i=j(e),r=E(e);if(e===r)return n;let l={scrollLeft:0,scrollTop:0};const s={x:0,y:0};if((i||!i&&"fixed"!==o)&&(("body"!==P(e)||O(r))&&(l=q(e)),j(e))){const t=C(e,!0);s.x=t.x+e.clientLeft,s.y=t.y+e.clientTop}return{...n,x:n.x-l.scrollLeft+s.x,y:n.y-l.scrollTop+s.y}},isElement:D,getDimensions:_,getOffsetParent:Y,getDocumentElement:E,getElementRects:t=>{let{reference:n,floating:e,strategy:o}=t;return{reference:V(n,Y(e),o),floating:{..._(e),x:0,y:0}}},getClientRects:t=>Array.from(t.getClientRects()),isRTL:t=>"rtl"===k(t).direction},Q=class{constructor(n){t(this,n),this.arrow=!1,this.inline=!1,this.placement="top",this.isActive=!1,this.debouncedDetermineMouseOut=r(this.determineMouseOut,150)}componentWillLoad(){this.el.id||(this.el.id=i("go-tooltip-")),this.triggerEl=document.querySelector(`#${this.triggerId}`)}componentDidLoad(){this.triggerEl&&(this.triggerEl.setAttribute("aria-describedby",this.el.id),this.triggerEl.addEventListener("mouseenter",(()=>this.showTooltip())),document.addEventListener("mousemove",(t=>this.debouncedDetermineMouseOut(t))),this.triggerEl.addEventListener("focusin",(()=>this.showTooltip())),this.triggerEl.addEventListener("focusout",(()=>this.hideTooltip())),this.arrowEl=this.el.querySelector(".tooltip-tail"),this.initialiseTooltip(this.triggerEl,this.el,this.arrowEl),function(t,n,e,o){void 0===o&&(o={});const{ancestorScroll:i=!0,ancestorResize:r=!0,elementResize:l=!0,animationFrame:s=!1}=o,a=i&&!s,c=r&&!s;(a||c?[...D(t)?I(t):[],...I(n)]:[]).forEach((t=>{a&&t.addEventListener("scroll",e,{passive:!0}),c&&t.addEventListener("resize",e)}));let u,f=null;if(l){let o=!0;f=new ResizeObserver((()=>{o||e(),o=!1})),D(t)&&!s&&f.observe(t),f.observe(n)}let d=s?C(t):null;s&&function n(){const o=C(t);!d||o.x===d.x&&o.y===d.y&&o.width===d.width&&o.height===d.height||e(),d=o,u=requestAnimationFrame(n)}(),e()}(this.triggerEl,this.el,r((()=>this.initialiseTooltip(this.triggerEl,this.el,this.arrowEl)),300),{animationFrame:!0}),document.addEventListener("keydown",(t=>{"Escape"===t.key&&this.hideTooltip()})))}initialiseTooltip(t,n,e){console.log("initialiseTooltip");let o=[(i=8,void 0===i&&(i=0),{name:"offset",options:i,async fn(t){const{x:n,y:e}=t,o=await async function(t,n){const{placement:e,platform:o,elements:i}=t,r=await(null==o.isRTL?void 0:o.isRTL(i.floating)),c=l(e),u=s(e),f="x"===a(e),d=["left","top"].includes(c)?-1:1,p=r&&f?-1:1,h="function"==typeof n?n(t):n;let{mainAxis:m,crossAxis:g,alignmentAxis:y}="number"==typeof h?{mainAxis:h,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...h};return u&&"number"==typeof y&&(g="end"===u?-1*y:y),f?{x:g*p,y:m*d}:{x:m*d,y:g*p}}(t,i);return{x:n+o.x,y:e+o.y,data:o}}}),w(),(void 0===r&&(r={}),{name:"shift",options:r,async fn(t){const{x:n,y:e,placement:o}=t,{mainAxis:i=!0,crossAxis:s=!1,limiter:c={fn:t=>{let{x:n,y:e}=t;return{x:n,y:e}}},...u}=r,f={x:n,y:e},d=await p(t,u),h=a(l(o)),m="x"===h?"y":"x";let y=f[h],x=f[m];i&&(y=g(y+d["y"===h?"top":"left"],y,y-d["y"===h?"bottom":"right"])),s&&(x=g(x+d["y"===m?"top":"left"],x,x-d["y"===m?"bottom":"right"]));const v=c.fn({...t,[h]:y,[m]:x});return{...v,data:{x:v.x-n,y:v.y-e}}}})];var i,r;this.arrow&&o.push((t=>({name:"arrow",options:t,async fn(n){const{element:e,padding:o=0}=null!=t?t:{},{x:i,y:r,placement:l,rects:u,platform:d}=n;if(null==e)return{};const p=f(o),h={x:i,y:r},m=a(l),y=s(l),x=c(m),v=await d.getDimensions(e),b="y"===m?"top":"left",w="y"===m?"bottom":"right",A=u.reference[x]+u.reference[m]-h[m]-u.floating[x],R=h[m]-u.reference[m],k=await(null==d.getOffsetParent?void 0:d.getOffsetParent(e));let P=k?"y"===m?k.clientHeight||0:k.clientWidth||0:0;0===P&&(P=u.floating[x]);const T=p[b],j=P-v[x]-p[w],D=P/2-v[x]/2+(A/2-R/2),L=g(T,D,j);return{[m]:h[m]-(("start"===y?p[b]:p[w])>0&&D!==L&&u.reference[x]<=u.floating[x]?D<T?T-D:j-D:0),data:{[m]:L,centerOffset:D-L}}}}))({element:e})),this.inline&&o.push(function(t){return void 0===t&&(t={}),{name:"inline",options:t,async fn(n){var e;const{placement:o,elements:i,rects:r,platform:s,strategy:c}=n,{padding:u=2,x:p,y:g}=t,y=d(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({rect:r.reference,offsetParent:await(null==s.getOffsetParent?void 0:s.getOffsetParent(i.floating)),strategy:c}):r.reference),x=null!=(e=await(null==s.getClientRects?void 0:s.getClientRects(i.reference)))?e:[],v=f(u),b=await s.getElementRects({reference:{getBoundingClientRect:function(){var t;if(2===x.length&&x[0].left>x[1].right&&null!=p&&null!=g)return null!=(t=x.find((t=>p>t.left-v.left&&p<t.right+v.right&&g>t.top-v.top&&g<t.bottom+v.bottom)))?t:y;if(x.length>=2){if("x"===a(o)){const t=x[0],n=x[x.length-1],e="top"===l(o),i=t.top,r=n.bottom,s=e?t.left:n.left,a=e?t.right:n.right;return{top:i,bottom:r,left:s,right:a,width:a-s,height:r-i,x:s,y:i}}const t="left"===l(o),n=m(...x.map((t=>t.right))),e=h(...x.map((t=>t.left))),i=x.filter((o=>t?o.left===e:o.right===n)),r=i[0].top,s=i[i.length-1].bottom;return{top:r,bottom:s,left:e,right:n,width:n-e,height:s-r,x:e,y:r}}return y}},floating:i.floating,strategy:c});return r.reference.x!==b.reference.x||r.reference.y!==b.reference.y||r.reference.width!==b.reference.width||r.reference.height!==b.reference.height?{reset:{rects:b}}:{}}}}()),((t,n,e)=>(async(t,n,e)=>{const{placement:o="bottom",strategy:i="absolute",middleware:r=[],platform:l}=e,s=await(null==l.isRTL?void 0:l.isRTL(n));let a=await l.getElementRects({reference:t,floating:n,strategy:i}),{x:c,y:f}=u(a,o,s),d=o,p={},h=0;for(let e=0;e<r.length;e++){const{name:m,fn:g}=r[e],{x:y,y:x,data:v,reset:b}=await g({x:c,y:f,initialPlacement:o,placement:d,strategy:i,middlewareData:p,rects:a,platform:l,elements:{reference:t,floating:n}});c=null!=y?y:c,f=null!=x?x:f,p={...p,[m]:{...p[m],...v}},b&&h<=50&&(h++,"object"==typeof b&&(b.placement&&(d=b.placement),b.rects&&(a=!0===b.rects?await l.getElementRects({reference:t,floating:n,strategy:i}):b.rects),({x:c,y:f}=u(a,d,s))),e=-1)}return{x:c,y:f,placement:d,strategy:i,middlewareData:p}})(t,n,{platform:N,...e}))(t,n,{strategy:"fixed",placement:this.placement,middleware:o}).then((({x:t,y:n,placement:o,middlewareData:i})=>{if(Object.assign(this.el.style,{left:`${t}px`,top:`${n}px`}),this.arrow){const{x:t,y:n}=i.arrow,r={top:"bottom",right:"left",bottom:"top",left:"right"}[o.split("-")[0]];Object.assign(e.style,{left:null!=t?`${t}px`:"",top:null!=n?`${n}px`:"",right:"",bottom:"",[r]:"-3px"})}}))}showTooltip(){this.isActive=!0}hideTooltip(){this.isActive=!1}determineMouseOut(t){if(!this.isActive)return;const{x:n,y:e}=t,{left:o,top:i,right:r,bottom:l}=this.el.getBoundingClientRect(),{left:s,top:a,right:c,bottom:u}=this.triggerEl.getBoundingClientRect();(n<o||n>r||e<i||e>l)&&(n<s||n>c||e<a||e>u)&&this.hideTooltip()}render(){const{isActive:t,arrow:o}=this;return n(e,{role:"tooltip",class:{"is-active":t},"aria-hidden":t?"false":"true"},n("slot",null),o?n("div",{class:"tooltip-tail"}):null)}get el(){return o(this)}};Q.style="go-tooltip{--tooltip-bg-color:var(--go-color-primary-800);--tooltip-fg-color:var(--go-color-lightest);--tooltip-padding:0.5rem;--tooltip-radius:var(--radius-2);transition:opacity var(--go-duration-normal) var(--go-timing-function), visibility var(--go-duration-normal) var(--go-timing-function);position:fixed;display:block;visibility:hidden;opacity:0;background-color:var(--tooltip-bg-color);color:var(--tooltip-fg-color);padding:var(--tooltip-padding);border-radius:var(--tooltip-radius);box-shadow:var(--shadow-1);pointer-events:none}@media (prefers-reduced-motion: reduce){go-tooltip{transition-duration:0s}}go-tooltip.is-active{visibility:visible;opacity:1;pointer-events:inherit}go-tooltip .tooltip-tail{position:absolute;background:var(--tooltip-bg-color);width:6px;width:0.375rem;height:6px;height:0.375rem;transform:rotate(45deg)}";export{Q as go_tooltip}