function e(){}function t(e){return e()}function n(){return Object.create(null)}function o(e){e.forEach(t)}function r(e){return"function"==typeof e}function u(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function i(e){e.parentNode.removeChild(e)}function s(e,t,n,o){return e.addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)}function c(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}let a;function d(e){a=e}function f(e){(function(){if(!a)throw new Error("Function called outside component initialization");return a})().$$.on_mount.push(e)}const l=[],p=[],m=[],h=[],$=Promise.resolve();let y=!1;function g(e){m.push(e)}let v=!1;const b=new Set;function x(){if(!v){v=!0;do{for(let e=0;e<l.length;e+=1){const t=l[e];d(t),_(t.$$)}for(d(null),l.length=0;p.length;)p.pop()();for(let e=0;e<m.length;e+=1){const t=m[e];b.has(t)||(b.add(t),t())}m.length=0}while(l.length);for(;h.length;)h.pop()();y=!1,v=!1,b.clear()}}function _(e){if(null!==e.fragment){e.update(),o(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(g)}}const k=new Set;function w(e,t){-1===e.$$.dirty[0]&&(l.push(e),y||(y=!0,$.then(x)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function E(u,s,c,f,l,p,m,h=[-1]){const $=a;d(u);const y=u.$$={fragment:null,ctx:null,props:p,update:e,not_equal:l,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map($?$.$$.context:s.context||[]),callbacks:n(),dirty:h,skip_bound:!1,root:s.target||$.$$.root};m&&m(y.root);let v=!1;if(y.ctx=c?c(u,s.props||{},((e,t,...n)=>{const o=n.length?n[0]:t;return y.ctx&&l(y.ctx[e],y.ctx[e]=o)&&(!y.skip_bound&&y.bound[e]&&y.bound[e](o),v&&w(u,e)),t})):[],y.update(),v=!0,o(y.before_update),y.fragment=!!f&&f(y.ctx),s.target){if(s.hydrate){const e=function(e){return Array.from(e.childNodes)}(s.target);y.fragment&&y.fragment.l(e),e.forEach(i)}else y.fragment&&y.fragment.c();s.intro&&((b=u.$$.fragment)&&b.i&&(k.delete(b),b.i(_))),function(e,n,u,i){const{fragment:s,on_mount:c,on_destroy:a,after_update:d}=e.$$;s&&s.m(n,u),i||g((()=>{const n=c.map(t).filter(r);a?a.push(...n):o(n),e.$$.on_mount=[]})),d.forEach(g)}(u,s.target,s.anchor,s.customElement),x()}var b,_;d($)}"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;var O,j=(function(e,t){var n,o,r;n=t,o=function(e){var t={exports:{}};return e(t,t.exports),t.exports}((function(e,t){!function(e){function t(e){return 0===e.length?[]:e.split(/\s+/)}function n(e,n){var o=t(e);return-1===o.indexOf(n)?(o.push(n),o.join(" ")):e}function o(e,n){var o=t(e),r=t(n);return(o=o.filter((function(e){return-1==r.indexOf(e)}))).join(" ")}function r(e,n){return t(e).indexOf(n)>-1}var u=Object.freeze({__proto__:null,split:t,add:n,remove:o,has:r});e.add=n,e.has=r,e.remove=o,e.split=t,e.state=u,Object.defineProperty(e,"__esModule",{value:!0})}(t)})),r="default hover",n.keyboard=function(e,t,n){if(o.has(t,"disabled"))return t;if(e.keyCode!==n)return t;switch(e.type){case"keydown":t=o.add(t,"active");break;case"keyup":t=o.remove(t,"active")}return t},n.mouse=function(e,t){if(o.has(t,"disabled"))return t;switch(e.type){case"mouseenter":t=o.remove(t,r),t=o.add(t,"hover");break;case"mouseleave":t=o.remove(t,r),t=o.add(t,"default");break;case"mousedown":t=o.add(t,"active");break;case"mouseup":t=o.remove(t,"active")}return t},Object.defineProperty(n,"__esModule",{value:!0})}(O={exports:{}},O.exports),O.exports);function A(t){let n,r,u,a,d;return{c(){var e,o;e="span",n=document.createElement(e),o=t[1],r=document.createTextNode(o),c(n,"class",u="px-4 py-2 rounded-lg text-white font-bold m-2 "+t[0]+" _D9W0 svelte-5gdv6s")},m(e,o){!function(e,t,n){e.insertBefore(t,n||null)}(e,n,o),function(e,t){e.appendChild(t)}(n,r),a||(d=[s(n,"mouseenter",t[2]),s(n,"mouseleave",t[2]),s(n,"mousedown",t[2]),s(n,"mouseup",t[2])],a=!0)},p(e,[t]){2&t&&function(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}(r,e[1]),1&t&&u!==(u="px-4 py-2 rounded-lg text-white font-bold m-2 "+e[0]+" _D9W0 svelte-5gdv6s")&&c(n,"class",u)},i:e,o:e,d(e){e&&i(n),a=!1,o(d)}}}function L(e,t,n){let{text:o}=t,{keycode:r}=t,{state:u="default"}=t;function i(e){n(0,u=j.keyboard(e,u,r))}return f((()=>{document.addEventListener("keydown",i),document.addEventListener("keyup",i)})),e.$$set=e=>{"text"in e&&n(1,o=e.text),"keycode"in e&&n(3,r=e.keycode),"state"in e&&n(0,u=e.state)},[u,o,function(e){n(0,u=j.mouse(e,u))},r]}class T extends class{$destroy(){!function(e,t){const n=e.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}{constructor(e){super(),E(this,e,L,A,u,{text:1,keycode:3,state:0})}}export{T as Button};
//# sourceMappingURL=mod.js.map
