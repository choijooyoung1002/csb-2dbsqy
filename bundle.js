var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(t,e){t.appendChild(e)}function l(t,e,n){t.insertBefore(e,n||null)}function c(t){t.parentNode.removeChild(t)}function a(t){return document.createElement(t)}function d(t){return document.createTextNode(t)}function u(){return d(" ")}function p(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function f(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function h(t,e,n,o){null===n?t.style.removeProperty(e):t.style.setProperty(e,n,o?"important":"")}let g;function b(t){g=t}const m=[],v=[],w=[],y=[],$=Promise.resolve();let x=!1;function j(t){w.push(t)}const k=new Set;let O=0;function S(){const t=g;do{for(;O<m.length;){const t=m[O];O++,b(t),_(t.$$)}for(b(null),m.length=0,O=0;v.length;)v.pop()();for(let t=0;t<w.length;t+=1){const e=w[t];k.has(e)||(k.add(e),e())}w.length=0}while(m.length);for(;y.length;)y.pop()();x=!1,k.clear(),b(t)}function _(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(j)}}const E=new Set;let M;function A(t,e){t&&t.i&&(E.delete(t),t.i(e))}function C(t,e,n,o){if(t&&t.o){if(E.has(t))return;E.add(t),M.c.push(()=>{E.delete(t),o&&(n&&t.d(1),o())}),t.o(e)}else o&&o()}function L(t){t&&t.c()}function B(t,n,s,i){const{fragment:l,on_mount:c,on_destroy:a,after_update:d}=t.$$;l&&l.m(n,s),i||j(()=>{const n=c.map(e).filter(r);a?a.push(...n):o(n),t.$$.on_mount=[]}),d.forEach(j)}function P(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function z(t,e){-1===t.$$.dirty[0]&&(m.push(t),x||(x=!0,$.then(S)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function T(e,r,s,i,l,a,d,u=[-1]){const p=g;b(e);const f=e.$$={fragment:null,ctx:null,props:a,update:t,not_equal:l,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(r.context||(p?p.$$.context:[])),callbacks:n(),dirty:u,skip_bound:!1,root:r.target||p.$$.root};d&&d(f.root);let h=!1;if(f.ctx=s?s(e,r.props||{},(t,n,...o)=>{const r=o.length?o[0]:n;return f.ctx&&l(f.ctx[t],f.ctx[t]=r)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](r),h&&z(e,t)),n}):[],f.update(),h=!0,o(f.before_update),f.fragment=!!i&&i(f.ctx),r.target){if(r.hydrate){const t=(m=r.target,Array.from(m.childNodes));f.fragment&&f.fragment.l(t),t.forEach(c)}else f.fragment&&f.fragment.c();r.intro&&A(e.$$.fragment),B(e,r.target,r.anchor,r.customElement),S()}var m;b(p)}class H{$destroy(){P(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function D(e){let n,o,r;return{c(){n=a("div"),o=u(),(r=a("nav")).innerHTML='<svg id="logo" data-name="레이어 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1705.43 473.31" class="svelte-kj0pgj"><g id="_레이어_1-2" data-name="레이어 1" class="svelte-kj0pgj"><g class="svelte-kj0pgj"><path d="M117.28,426.47c-33.74-5.02-67.47-2.15-100.49,4.31-30.15,6.46-14.36,21.53,5.74,20.1,15.07-.72,30.86-2.87,45.94-3.59,16.51-1.44,33.74-2.15,50.24-3.59,4.31,0,8.61-2.87,12.92-5.02-1.44-10.05-7.9-11.48-14.36-12.2Z" class="svelte-kj0pgj"></path><path d="M410.84,198.93c-2.15,44.5-34.45,144.99-73.21,189.49-20.82,24.4-42.35,31.58-40.2-20.1,.72-18.66,4.31-36.61,6.46-55.27,1.44-12.2-4.31-18.66-17.23-20.1-9.33-1.44-14.36,3.59-20.1,10.05-17.23,23.69-35.17,46.66-53.83,69.62-34.45,47.37,12.92-110.54,33.02-114.13-1.44-12.92-7.18-17.23-17.23-18.66-11.48-1.44-14.36,7.18-19.38,14.36-23.69,35.17-66.75,142.12-31.58,162.93,10.77,6.46,22.25,5.74,32.3-2.87,8.61-7.9,16.51-16.51,24.4-25.84,10.05-10.77,19.38-22.97,31.58-37.32,.72,12.92,0,22.25,1.44,31.58,2.87,17.23,7.18,33.74,25.84,40.2,19.38,7.9,36.61,3.59,50.96-10.77,51.68-51.68,75.37-119.15,89.72-193.8,3.59-18.66-2.87-22.97-22.97-19.38Z" class="svelte-kj0pgj"></path><path d="M540.75,196.06c-16.51-15.07-20.82-15.07-30.86,.72-8.61,15.07-30.15,43.78,1.44,47.37,10.05-17.23,19.38-31.58,29.43-48.09Z" class="svelte-kj0pgj"></path><path d="M1662.59,3.7c-5.74,3.59-13.64,6.46-18.66,11.48-17.94,16.51-36.61,33.02-51.68,51.68-40.91,50.96-71.78,107.67-96.9,166.52-7.18,17.23-20.1,27.28-36.61,33.02-4.31,1.44-8.61,1.44-17.23,2.87,5.02,7.18,7.18,12.92,11.48,15.79,5.02,2.87,12.2,3.59,17.23,5.74-3.58,15.5-8.25,30.56-12.57,45.43-24.17,14.41-54.45,32.12-77.15,45.73-10.77,5.74-21.53,10.77-36.61,10.05,5.74-54.55,39.48-91.88,68.91-135.66-28.71-18.66-55.99-33.74-89-17.23-9.33,5.02-18.66,9.33-27.28,15.79-29.27,21.18-54.22,47.22-74.84,77.66-.87,.64-1.76,1.31-2.66,2.01-29.43,22.25-34.45,26.56-63.16,48.81-35.17,24.4-25.84-7.9-15.79-32.3,14.36-35.17,29.43-70.34,43.78-105.51,3.59-9.33,7.18-17.94,7.9-27.28,.72-5.74-4.31-14.36-9.33-17.94-5.02-2.87-13.64-3.59-20.1-1.44-5.74,2.15-10.77,7.18-15.07,12.2-31.58,35.17-100.49,130.63-140.68,147.86,1.44-10.77,3.59-22.25,5.74-33.02,2.15-12.2,5.02-24.4,7.18-36.61,2.15-9.33-1.44-17.23-10.05-22.25-9.33-4.31-17.23-4.31-25.12,2.15-15.79,15.79-33.74,30.15-53.12,47.37,13.64-26.56,27.99-53.83,42.35-81.11-13.64-15.79-18.66-15.79-30.15-2.15-4.31,5.02-7.9,10.77-10.77,16.51-13.75,27.07-27.24,54.4-40.63,81.68-.33,.28-.66,.57-.99,.86-25.12,21.53-118.43,92.59-89.72,21.53,7.18-17.94,12.2-37.32,17.94-56.7,3.59-12.92-.72-20.82-12.2-26.56-10.05-5.74-18.66-1.44-25.84,5.02-15.07,11.48-29.43,23.69-43.78,35.17,4.31-17.94,12.2-33.74,19.38-49.53,6.46-13.64,16.51-23.69,27.99-33.02,20.82-15.07,40.91-31.58,60.29-48.09,33.02-27.99,64.6-58.86,89-94.75,8.61-12.2,15.79-26.56,19.38-41.63,5.02-20.82-13.64-37.32-34.45-30.86-7.9,2.15-15.79,5.74-21.53,10.77-15.07,12.2-29.43,24.4-43.07,38.04-26.13,26.6-49.21,55.63-69.86,86.49-4.27-.36-8.61-.36-12.67-.36l-101.92-3.59c22.25-38.76,45.22-73.21,72.5-103.36-12.92-19.38-18.66-20.82-30.15-5.74-23.69,30.15-45.94,61.01-66.75,92.59-8.61,12.92-17.23,17.23-31.58,16.51-44.5-2.15-205.28-2.87-249.07-4.31-7.9,0-15.79,1.44-23.69,2.15,1.44,17.23,12.2,23.69,22.97,30.15,2.15,1.44,8.61,1.44,10.05-.72,7.18-11.48,17.23-6.46,27.28-6.46,22.25,0,162.22,.72,185.19,.72,10.05,.72,20.1,0,33.74,0-5.74,11.48-8.61,18.66-12.92,25.12-22.25,42.35-43.78,84.7-63.88,134.94-.05,.11-.09,.22-.14,.33-1.38,1.01-2.96,2.35-4.88,3.97-23.69,20.1-22.25,17.94-47.37,38.04-28.71,21.53-45.94,41.63-30.15-10.77,7.9-29.43,19.38-58.14,43.78-81.11-14.36-17.94-24.4-19.38-38.76-3.59-2.87,4.31-6.46,8.61-8.61,12.92-15.79,29.43-25.84,60.29-28.71,94.03-2.15,25.12,19.38,50.96,46.66,26.56,26.22-22.69,38.63-32.28,56.14-47.92-38.2,118.35,13.81,165.11,124.73,43.62h-.72l1.57-1.57c-2.43,5.56-4.87,11.11-7.32,16.64,19.38,21.53,28.71,22.25,38.04,1.44,20.1-44.5,57.42-73.21,91.88-105.51-3.59,17.94-9.33,34.45-12.2,51.68-5.02,27.28,7.9,53.12,35.89,46.66,23.07-4.51,47.89-24.09,70.3-42.58-2.86,5.83-5.72,11.65-8.58,17.46-2.15,4.31-3.59,9.33-5.02,14.36-2.87,10.05,.72,17.23,10.77,21.53,10.77,5.02,15.07,3.59,25.12-8.61,27.99-35.17,52.4-74.65,87.57-105.51-.72,7.18-.72,10.77-.72,14.36-1.44,8.61-2.87,17.23-3.59,25.84,0,14.36,5.74,25.84,18.66,32.3,12.92,7.18,24.4,4.31,35.17-4.31,10.05-7.9,20.82-16.51,29.43-26.56,20.1-23.69,40.2-48.81,59.58-73.21,16.51-16.51,25.12-25.12,12.92,2.15-8.61,22.25-17.94,43.78-25.12,66.04-4.31,12.92-7.18,27.28-7.18,40.91,0,22.97,22.97,38.04,44.5,30.86,10.05-3.59,20.82-9.33,28.71-15.79,8.44-7.45,16.37-14.64,24.29-21.72,.17,7.41,4.7,13.36,11.59,18.13,12.2,7.18,25.12,9.33,38.04,1.44,10.77-7.18,21.53-14.36,32.3-22.25,11.48-8.61,22.25-17.94,36.61-29.43-1.44,6.46-2.15,9.33-2.87,12.2-5.74,33.74,14.36,55.99,48.81,52.4,11.48-1.44,22.97-5.74,33.02-11.48,17.34-10.6,34.69-21.85,52.03-33.31-.38,1.77-.74,3.54-1.07,5.32-4.31,20.82-8.61,42.35-5.74,63.88,2.87,30.86,30.15,43.78,58.86,28.71,15.07-8.61,31.58-19.38,43.07-32.3,36.61-35.89,46.66-48.81,83.26-83.98,17.23-16.51,2.87-39.48-14.36-19.38-36.61,43.07-51.68,56.7-96.9,92.59-20.82,16.51-50.24,43.78-45.94,1.44,6.46-55.27,25.84-107.67,47.37-159.35,2.87-6.46,9.33-12.2,14.36-17.23,26.56-24.4,53.83-48.81,78.96-73.93,30.86-30.15,58.14-63.16,79.67-101.21,6.46-11.48,10.77-25.84,13.64-38.76,4.31-17.94-20.1-41.63-42.35-28.71ZM926.17,37.43c-2.15,30.86-66.75,105.51-113.41,130.63,30.86-48.81,64.6-95.46,113.41-130.63Zm-231.12,219.64l-25.84,12.92c-4.31,2.87-7.9,5.02-12.2,7.9,11.48,16.51,12.2,16.51,26.56,12.2,7.18-2.15,14.36-5.02,25.12-8.61-9.45,21.5-18.45,42.4-27.28,62.92-10.5,16-22.82,30.81-37.31,44.75-87.57,82.54-120.59,77.52-72.5-49.53,21.53-54.55,48.81-106.95,76.08-157.19,5.74-11.48,12.92-13.64,24.4-13.64,32.81,.58,65.63,.69,98.81,.71-6.12,9.89-12.03,19.95-17.71,30.15-14.36,25.84-32.3,44.5-58.14,57.42Zm544.77,114.13c22.97-57.42,92.59-118.43,134.94-117-43.07,42.35-84.7,81.83-134.94,117Zm315.82-179.44c13.64-50.96,83.98-144.27,126.33-165.81-28.71,68.91-76.08,116.28-126.33,165.81Z" class="svelte-kj0pgj"></path></g></g></svg> \n\t<div id="menu" class="svelte-kj0pgj"><ul class="svelte-kj0pgj"><a href="#aa" class="svelte-kj0pgj"><li class="accent svelte-kj0pgj">wildlife</li></a> \n\t\t<li class="svelte-kj0pgj">farm animal</li> \n\t\t<li class="svelte-kj0pgj">zoo animal</li> \n\t\t<li class="svelte-kj0pgj">laboratory animal</li></ul></div>',p(n,"id","bar"),p(n,"class","svelte-kj0pgj"),p(r,"class","svelte-kj0pgj")},m(t,e){l(t,n,e),l(t,o,e),l(t,r,e)},p:t,i:t,o:t,d(t){t&&c(n),t&&c(o),t&&c(r)}}}class Z extends H{constructor(t){super(),T(this,t,null,D,s,{})}}function V(e){let n,o,r,s,g,b,m,v,w,y,$;return{c(){n=a("section"),o=a("div"),r=a("h3"),s=d("Chapter "),g=d(e[2]),b=u(),m=a("h1"),v=d(e[0]),w=u(),y=a("h2"),$=d(e[1]),p(r,"class","svelte-20j3x"),p(m,"class","svelte-20j3x"),p(y,"class","svelte-20j3x"),p(o,"id","wrapper"),p(o,"class","svelte-20j3x"),p(n,"id",e[0]),h(n,"background","url("+e[3]+") no-repeat center"),h(n,"background-size","cover"),h(n,"background-attachment","fixed"),p(n,"class","svelte-20j3x")},m(t,e){l(t,n,e),i(n,o),i(o,r),i(r,s),i(r,g),i(o,b),i(o,m),i(m,v),i(o,w),i(o,y),i(y,$)},p(t,[e]){4&e&&f(g,t[2]),1&e&&f(v,t[0]),2&e&&f($,t[1]),1&e&&p(n,"id",t[0]),8&e&&h(n,"background","url("+t[3]+") no-repeat center")},i:t,o:t,d(t){t&&c(n)}}}function R(t,e,n){let{title:o,description:r,no:s,image:i}=e;return t.$$set=(t=>{"title"in t&&n(0,o=t.title),"description"in t&&n(1,r=t.description),"no"in t&&n(2,s=t.no),"image"in t&&n(3,i=t.image)}),[o,r,s,i]}class F extends H{constructor(t){super(),T(this,t,R,V,s,{title:0,description:1,no:2,image:3})}}function I(t,e){if(rt(t))for(let n=0;n<t.length&&!1!==e(t[n],n,t);n++);else t&&I(Object.keys(t),n=>e(t[n],n,t));return t}function N(t,e){const n=Q(e);if(nt(e)||n){let o=n?"":{};if(t){const r=window.getComputedStyle(t,null);o=n?de(t,r,e):e.reduce((e,n)=>(e[n]=de(t,r,n),e),o)}return o}t&&I(ht(e),n=>ue(t,n,e[n]))}const W=(t,e)=>{const{o:n,u:o,_:r}=t;let s,i=n;const l=(t,e)=>{const n=i,l=t,c=e||(o?!o(n,l):n!==l);return(c||r)&&(i=l,s=n),[i,c,s]};return[e?t=>l(e(i,s),t):l,t=>[i,!!t,s]]},Y=Node.ELEMENT_NODE,{toString:K,hasOwnProperty:G}=Object.prototype,q=t=>void 0===t,X=t=>null===t,J=t=>q(t)||X(t)?`${t}`:K.call(t).replace(/^\[object (.+)\]$/,"$1").toLowerCase(),U=t=>"number"==typeof t,Q=t=>"string"==typeof t,tt=t=>"boolean"==typeof t,et=t=>"function"==typeof t,nt=t=>Array.isArray(t),ot=t=>"object"==typeof t&&!nt(t)&&!X(t),rt=t=>{const e=!!t&&t.length,n=U(e)&&e>-1&&e%1==0;return!!(nt(t)||!et(t)&&n)&&(!(e>0&&ot(t))||e-1 in t)},st=t=>{if(!t||!ot(t)||"object"!==J(t))return!1;let e;const n="constructor",o=t[n],r=o&&o.prototype,s=G.call(t,n),i=r&&G.call(r,"isPrototypeOf");if(o&&!s&&!i)return!1;for(e in t);return q(e)||G.call(t,e)},it=t=>{const e=HTMLElement;return!!t&&(e?t instanceof e:t.nodeType===Y)},lt=t=>{const e=Element;return!!t&&(e?t instanceof e:t.nodeType===Y)},ct=(t,e,n)=>t.indexOf(e,n),at=(t,e,n)=>(n||Q(e)||!rt(e)?t.push(e):Array.prototype.push.apply(t,e),t),dt=t=>{const e=Array.from,n=[];return e&&t?e(t):(t instanceof Set?t.forEach(t=>{at(n,t)}):I(t,t=>{at(n,t)}),n)},ut=t=>!!t&&0===t.length,pt=(t,e,n)=>{I(t,t=>t&&t.apply(void 0,e||[])),!n&&(t.length=0)},ft=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),ht=t=>t?Object.keys(t):[],gt=(t,e,n,o,r,s,i)=>{const l=[e,n,o,r,s,i];return"object"==typeof t&&!X(t)||et(t)||(t={}),I(l,e=>{I(ht(e),n=>{const o=e[n];if(t===o)return!0;const r=nt(o);if(o&&(st(o)||r)){const e=t[n];let s=e;r&&!nt(e)?s=[]:r||st(e)||(s={}),t[n]=gt(s,o)}else t[n]=o})}),t},bt=t=>{for(const e in t)return!1;return!0},mt=(t,e,n,o)=>{if(q(o))return n?n[t]:e;n&&(Q(o)||U(o))&&(n[t]=o)},vt=(t,e,n)=>{if(q(n))return t?t.getAttribute(e):null;t&&t.setAttribute(e,n)},wt=(t,e,n,o)=>{if(n){const r=vt(t,e)||"",s=new Set(r.split(" "));s[o?"add":"delete"](n),vt(t,e,dt(s).join(" ").trim())}},yt=(t,e)=>{t&&t.removeAttribute(e)},$t=(t,e)=>mt("scrollLeft",0,t,e),xt=(t,e)=>mt("scrollTop",0,t,e),jt=Element.prototype,kt=(t,e)=>{const n=[],o=e?lt(e)?e:null:document;return o?at(n,o.querySelectorAll(t)):n},Ot=(t,e)=>{if(lt(t)){return(jt.matches||jt.msMatchesSelector).call(t,e)}return!1},St=t=>t?dt(t.childNodes):[],_t=t=>t?t.parentElement:null,Et=(t,e)=>{if(lt(t)){const n=jt.closest;if(n)return n.call(t,e);do{if(Ot(t,e))return t;t=_t(t)}while(t)}return null},Mt=(t,e,n)=>{const o=t&&Et(t,e),r=t&&((t,e)=>{const n=e?lt(e)?e:null:document;return n?n.querySelector(t):null})(n,o),s=Et(r,e)===o;return!(!o||!r)&&(o===t||r===t||s&&Et(Et(t,n),e)!==o)},At=(t,e,n)=>{if(n&&t){let o,r=e;rt(n)?(o=document.createDocumentFragment(),I(n,t=>{t===r&&(r=t.previousSibling),o.appendChild(t)})):o=n,e&&(r?r!==e&&(r=r.nextSibling):r=t.firstChild),t.insertBefore(o,r||null)}},Ct=(t,e)=>{At(t,null,e)},Lt=(t,e)=>{At(_t(t),t&&t.nextSibling,e)},Bt=t=>{if(rt(t))I(dt(t),t=>Bt(t));else if(t){const e=_t(t);e&&e.removeChild(t)}},Pt=t=>{const e=document.createElement("div");return t&&vt(e,"class",t),e},zt=t=>{const e=Pt();return e.innerHTML=t.trim(),I(St(e),t=>Bt(t))},Tt=t=>t.charAt(0).toUpperCase()+t.slice(1),Ht=["-webkit-","-moz-","-o-","-ms-"],Dt=["WebKit","Moz","O","MS","webkit","moz","o","ms"],Zt={},Vt={},Rt=t=>{let e=Vt[t];if(ft(Vt,t))return e;const n=Tt(t),o=(()=>Pt().style)();return I(Ht,r=>{const s=r.replace(/-/g,""),i=[t,r+t,s+n,Tt(s)+n];return!(e=i.find(t=>void 0!==o[t]))}),Vt[t]=e||""},Ft=t=>{let e=Zt[t]||window[t];return ft(Zt,t)?e:(I(Dt,n=>!(e=e||window[n+Tt(t)])),Zt[t]=e,e)},It=Ft("MutationObserver"),Nt=Ft("IntersectionObserver"),Wt=Ft("ResizeObserver"),Yt=Ft("cancelAnimationFrame"),Kt=Ft("requestAnimationFrame"),Gt=window.setTimeout,qt=window.clearTimeout,Xt=/[^\x20\t\r\n\f]+/g,Jt=(t,e,n)=>{const o=t&&t.classList;let r,s=0,i=!1;if(o&&e&&Q(e)){const t=e.match(Xt)||[];for(i=t.length>0;r=t[s++];)i=!!n(o,r)&&i}return i},Ut=(t,e)=>{Jt(t,e,(t,e)=>t.remove(e))},Qt=(t,e)=>(Jt(t,e,(t,e)=>t.add(e)),Ut.bind(0,t,e)),te=(t,e,n,o)=>{if(t&&e){let r=!0;return I(n,n=>{(o?o(t[n]):t[n])!==(o?o(e[n]):e[n])&&(r=!1)}),r}return!1},ee=(t,e)=>te(t,e,["w","h"]),ne=(t,e)=>te(t,e,["x","y"]),oe=(t,e)=>te(t,e,["t","r","b","l"]),re=(t,e,n)=>te(t,e,["width","height"],n&&(t=>Math.round(t))),se=()=>{},ie=t=>{let e;const n=t?Gt:Kt,o=t?qt:Yt;return[r=>{o(e),e=n(r,et(t)?t():t)},()=>o(e)]},le=(t,e)=>{let n,o,r,s=se;const{g:i,v:l,p:c}=e||{},a=function(e){s(),qt(n),n=o=void 0,s=se,t.apply(this,e)},d=t=>c&&o?c(o,t):t,u=()=>{s!==se&&a(d(r)||r)},p=function(){const t=dt(arguments),e=et(i)?i():i;if(U(e)&&e>=0){const i=et(l)?l():l,c=U(i)&&i>=0,p=e>0?Gt:Kt,f=e>0?qt:Yt,h=d(t)||t,g=a.bind(0,h);s();const b=p(g,e);s=(()=>f(b)),c&&!n&&(n=Gt(u,i)),o=r=h}else a(t)};return p.m=u,p},ce={opacity:1,zindex:1},ae=(t,e)=>{const n=e?parseFloat(t):parseInt(t,10);return n==n?n:0},de=(t,e,n)=>null!=e?e[n]||e.getPropertyValue(n):t.style[n],ue=(t,e,n)=>{try{const{style:o}=t;q(o[e])?o.setProperty(e,n):o[e]=((t,e)=>!ce[t.toLowerCase()]&&U(e)?`${e}px`:e)(e,n)}catch(t){}},pe=t=>"rtl"===N(t,"direction"),fe=(t,e,n)=>{const o=e?`${e}-`:"",r=n?`-${n}`:"",s=`${o}top${r}`,i=`${o}right${r}`,l=`${o}bottom${r}`,c=`${o}left${r}`,a=N(t,[s,i,l,c]);return{t:ae(a[s]),r:ae(a[i]),b:ae(a[l]),l:ae(a[c])}},{round:he}=Math,ge={w:0,h:0},be=t=>t?{w:t.offsetWidth,h:t.offsetHeight}:ge,me=t=>t?{w:t.clientWidth,h:t.clientHeight}:ge,ve=t=>t?{w:t.scrollWidth,h:t.scrollHeight}:ge,we=t=>{const e=parseFloat(N(t,"height"))||0,n=parseFloat(N(t,"width"))||0;return{w:n-he(n),h:e-he(e)}},ye=t=>t.getBoundingClientRect();let $e;const xe=t=>t.split(" "),je=(t,e,n,o)=>{var r;const s=(()=>{if(q($e)){$e=!1;try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get(){$e=!0}}))}catch(t){}}return $e})(),i=null!=(r=s&&o&&o.S)?r:s,l=o&&o.$||!1,c=o&&o.C||!1,a=[],d=s?{passive:i,capture:l}:l;return I(xe(e),e=>{const o=c?r=>{t.removeEventListener(e,o,l),n&&n(r)}:n;at(a,((t,e,n,o)=>{I(xe(e),e=>{t.removeEventListener(e,n,o)})}).bind(null,t,e,o,l)),t.addEventListener(e,o,d)}),pt.bind(0,a)},ke=t=>t.stopPropagation(),Oe=t=>t.preventDefault(),Se={x:0,y:0},_e=t=>{const e=t?ye(t):0;return e?{x:e.left+window.pageYOffset,y:e.top+window.pageXOffset}:Se},Ee=(t,e)=>{I(nt(e)?e:[e],t)},Me=t=>{const e=new Map,n=(t,n)=>{if(t){const o=e.get(t);Ee(t=>{o&&o[t?"delete":"clear"](t)},n)}else e.forEach(t=>{t.clear()}),e.clear()},o=(t,o)=>{const r=e.get(t)||new Set;return e.set(t,r),Ee(t=>{t&&r.add(t)},o),n.bind(0,t,o)};return I(ht(t),e=>{o(e,t[e])}),[o,n,(t,n)=>{const o=e.get(t);I(dt(o),t=>{n&&!ut(n)?t.apply(0,n):t()})}]},Ae=t=>JSON.stringify(t,(t,e)=>{if(et(e))throw new Error;return e}),Ce={paddingAbsolute:!1,showNativeOverlaidScrollbars:!1,update:{elementEvents:[["img","load"]],debounce:[0,33],attributes:null,ignoreMutation:null},overflow:{x:"scroll",y:"scroll"},scrollbars:{theme:"os-theme-dark",visibility:"auto",autoHide:"never",autoHideDelay:1300,dragScroll:!0,clickScroll:!1,pointers:["mouse","touch","pen"]}},Le=(t,e)=>{const n={};return I(ht(e).concat(ht(t)),o=>{const r=t[o],s=e[o];if(ot(r)&&ot(s))gt(n[o]={},Le(r,s));else if(ft(e,o)&&s!==r){let t=!0;if(nt(r)||nt(s))try{Ae(r)===Ae(s)&&(t=!1)}catch(t){}t&&(n[o]=s)}}),n},Be="os-environment",Pe=`${Be}-flexbox-glue`,ze=`${Pe}-max`,Te="data-overlayscrollbars",He=`${Te}-overflow-x`,De=`${Te}-overflow-y`,Ze="overflowVisible",Ve="updating",Re="os-viewport",Fe=`${Re}-arrange`,Ie=`${Re}-scrollbar-hidden`,Ne="os-overflow-visible",We="os-size-observer",Ye=`${We}-appear`,Ke=`${We}-listener`,Ge="os-scrollbar",qe=`${Ge}-rtl`,Xe=`${Ge}-horizontal`,Je=`${Ge}-vertical`,Ue=`${Ge}-track`,Qe=`${Ge}-handle`,tn=`${Ge}-visible`,en=`${Ge}-cornerless`,nn=`${Ge}-transitionless`,on=`${Ge}-interaction`,rn=`${Ge}-unusable`,sn=`${Ge}-auto-hidden`,ln=`${Ge}-wheel`,cn=`${Ue}-interactive`,an=`${Qe}-interactive`,dn={},un=()=>dn,pn="__osScrollbarsHidingPlugin";let fn;const hn=(t,e,n,o)=>{Ct(t,e);const r=me(e),s=be(e),i=we(n);return o&&Bt(e),{x:s.h-r.h+i.h,y:s.w-r.w+i.w}},gn=(t,e)=>{const n="hidden";N(t,{overflowX:n,overflowY:n,direction:"rtl"}),$t(t,0);const o=_e(t),r=_e(e);$t(t,-999);const s=_e(e);return{i:o.x===r.x,n:r.x!==s.x}},bn=(t,e)=>{const n=Qt(t,Pe),o=ye(t),r=ye(e),s=re(r,o,!0),i=Qt(t,ze),l=ye(t),c=ye(e),a=re(c,l,!0);return n(),i(),s&&a},mn=()=>{const{body:t}=document,e=zt(`<div class="${Be}"><div></div></div>`)[0],n=e.firstChild,[o,,r]=Me(),[s,i]=W({o:hn(t,e,n),u:ne},hn.bind(0,t,e,n,!0)),[l]=i(),c=(t=>{let e=!1;const n=Qt(t,Ie);try{e="none"===N(t,Rt("scrollbar-width"))||"none"===window.getComputedStyle(t,"::-webkit-scrollbar").getPropertyValue("display")}catch(t){}return n(),e})(e),a={x:0===l.x,y:0===l.y},d={elements:{host:null,padding:!c,viewport:t=>c&&t===t.ownerDocument.body&&t,content:!1},scrollbars:{slot:!0},cancel:{nativeScrollbarsOverlaid:!1,body:null}},u=gt({},Ce),p={k:l,I:a,A:c,L:"-1"===N(e,"zIndex"),B:gn(e,n),V:bn(e,n),Y:t=>o("_",t),j:gt.bind(0,{},d),q(t){gt(d,t)},F:gt.bind(0,{},u),G(t){gt(u,t)},N:gt({},d),X:gt({},u)};if(yt(e,"style"),Bt(e),!(c||a.x&&a.y)){let t;window.addEventListener("resize",()=>{const e=un()[pn];(t=t||e&&e.R())&&t(p,s,r.bind(0,"_"))})}return p},vn=()=>(fn||(fn=mn()),fn),wn=(t,e)=>et(t)?t.apply(0,e):t,yn=(t,e,n,o)=>{const r=q(o)?n:o,s=wn(r,t);return!!s&&(it(s)?s:e())},$n=new WeakMap,xn=t=>$n.get(t),jn=(t,e)=>t?e.split(".").reduce((t,e)=>t&&ft(t,e)?t[e]:void 0,t):void 0,kn=(t,e,n)=>o=>[jn(t,o),n||void 0!==jn(e,o)],On=t=>{let e=t;return[()=>e,t=>{e=gt({},e,t)}]},Sn="tabindex",_n=Pt.bind(0,""),En=t=>{Ct(_t(t),St(t)),Bt(t)},Mn=t=>{const e=vn(),{j:n,A:o}=e,r=un()[pn],s=r&&r.T,{elements:i}=n(),{host:l,viewport:c,padding:a,content:d}=i,u=it(t),p=u?{}:t,{elements:f}=p,{host:h,padding:g,viewport:b,content:m}=f||{},v=u?t:p.target,w=Ot(v,"textarea"),y=v.ownerDocument,$=v===y.body,x=y.defaultView,j=((t,e,n,o)=>{const r=q(o)?n:o;return wn(r,t)||e()}).bind(0,[v]),k=yn.bind(0,[v]),O=j(_n,c,b),S=O===v,_=S&&$,E=y.activeElement,M=!S&&x.top===x&&E===v,A={W:v,J:w?j(_n,l,h):v,K:O,Z:!S&&k(_n,a,g),tt:!S&&k(_n,d,m),nt:!S&&!o&&s&&s(e),ot:_?y.documentElement:O,st:_?y:O,et:x,ct:y,rt:w,U:$,lt:u,it:S,ut:(t,e)=>S?((t,e,n)=>{const o=vt(t,e)||"";return new Set(o.split(" ")).has(n)})(O,Te,e):((t,e)=>Jt(t,e,(t,e)=>t.contains(e)))(O,t),ft:(t,e,n)=>S?wt(O,Te,e,n):(n?Qt:Ut)(O,t)},C=ht(A).reduce((t,e)=>{const n=A[e];return at(t,!(!n||_t(n))&&n)},[]),L=t=>t?ct(C,t)>-1:null,{W:B,J:P,Z:z,K:T,tt:H,nt:D}=A,Z=[],V=w&&L(P);let R=w?B:St([H,T,z,P,B].find(t=>!1===L(t)));const F=H||T;return[A,()=>{const t=((t,e)=>(vt(t,Te,e),yt.bind(0,t,Te)))(P,S?"viewport":"host"),e=Qt(z,"os-padding"),n=Qt(T,!S&&Re),r=Qt(H,"os-content"),s=$?Qt(_t(v),Ie):se;if(V&&(Lt(B,P),at(Z,()=>{Lt(P,B),Bt(P)})),Ct(F,R),Ct(P,z),Ct(z||P,!S&&T),Ct(T,H),at(Z,()=>{s(),t(),yt(T,He),yt(T,De),L(H)&&En(H),L(T)&&En(T),L(z)&&En(z),e(),n(),r()}),o&&!S&&at(Z,Ut.bind(0,T,Ie)),D&&(((t,e)=>{At(_t(t),t,e)})(T,D),at(Z,Bt.bind(0,D))),M){const t=vt(T,Sn);vt(T,Sn,"-1"),T.focus();const e=je(y,"pointerdown keydown",()=>{t?vt(T,Sn,t):yt(T,Sn),e()})}else E&&E.focus&&E.focus();R=0},pt.bind(0,Z)]},An=(t,e)=>{const{tt:n}=t,[o]=e;return t=>{const{V:e}=vn(),{dt:r}=o(),{_t:s}=t,i=(n||!e)&&s;return i&&N(n,{height:r?"":"100%"}),{ht:i,gt:i}}},Cn=(t,e)=>{const[n,o]=e,{J:r,Z:s,K:i,it:l}=t,[c,a]=W({u:oe,o:fe()},fe.bind(0,r,"padding",""));return(t,e,r)=>{let[d,u]=a(r);const{A:p,V:f}=vn(),{vt:h}=n(),{ht:g,gt:b,wt:m}=t,[v,w]=e("paddingAbsolute");(g||u||!f&&b)&&([d,u]=c(r));const y=!l&&(w||m||u);if(y){const t=!v||!s&&!p,e=d.r+d.l,n=d.t+d.b,r={marginRight:t&&!h?-e:0,marginBottom:t?-n:0,marginLeft:t&&h?-e:0,top:t?-d.t:0,right:t?h?-d.r:"auto":0,left:t?h?"auto":-d.l:0,width:t?`calc(100% + ${e}px)`:""},l={paddingTop:t?d.t:0,paddingRight:t?d.r:0,paddingBottom:t?d.b:0,paddingLeft:t?d.l:0};N(s||i,r),N(i,l),o({Z:d,bt:!t,P:s?l:gt({},r,l)})}return{yt:y}}},{max:Ln}=Math,Bn=Ln.bind(0,0),Pn="visible",zn={u:ee,o:{w:0,h:0}},Tn={u:ne,o:{x:"hidden",y:"hidden"}},Hn=(t,e,n)=>n?Qt(t,e):Ut(t,e),Dn=t=>0===t.indexOf(Pn),Zn=(t,e)=>{const[n,o]=e,{J:r,Z:s,K:i,nt:l,it:c,ft:a,U:d,et:u}=t,{k:p,V:f,A:h,I:g}=vn(),b=un()[pn],m=!c&&!h&&(g.x||g.y),v=d&&c,[w,y]=W(zn,we.bind(0,i)),[$,x]=W(zn,ve.bind(0,i)),[j,k]=W(zn),[O,S]=W(zn),[_]=W(Tn),E=(t,e)=>{if(N(i,{height:""}),e){const{bt:e,Z:o}=n(),{St:s,D:l}=t,c=we(r),a=me(r),d="content-box"===N(i,"boxSizing"),u=e||d?o.b+o.t:0,p=!(g.x&&d);N(i,{height:a.h+c.h+(s.x&&p?l.x:0)-u})}},M=(t,e)=>{const n=h||t?0:42,o=(t,o,r)=>{const s=N(i,t),l="scroll"===(e?e[t]:s);return[s,l,l&&!h?o?n:r:0,o&&!!n]},[r,s,l,c]=o("overflowX",g.x,p.x),[a,d,u,f]=o("overflowY",g.y,p.y);return{xt:{x:r,y:a},St:{x:s,y:d},D:{x:l,y:u},M:{x:c,y:f}}},A=(t,e,o,r)=>{const{D:s,M:i}=t,{x:l,y:c}=i,{x:a,y:d}=s,{P:u}=n(),p=e?"marginLeft":"marginRight",f=e?"paddingLeft":"paddingRight",h=u[p],g=u.marginBottom,b=u[f],m=u.paddingBottom;r.width=`calc(100% + ${d+-1*h}px)`,r[p]=-d+h,r.marginBottom=-a+g,o&&(r[f]=b+(c?d:0),r.paddingBottom=m+(l?a:0))},[C,L]=b?b.H(m,f,i,l,n,M,A):[()=>m,()=>[se]];return(t,e,l)=>{const{ht:d,$t:p,gt:b,yt:m,_t:B,wt:P}=t,{dt:z,vt:T}=n(),[H,D]=e("showNativeOverlaidScrollbars"),[Z,V]=e("overflow"),R=H&&g.x&&g.y,F=!c&&!f&&(d||b||p||D||B),I=Dn(Z.x),W=Dn(Z.y),Y=I||W;let K,G=y(l),q=x(l),X=k(l),J=S(l);if(D&&h&&a(Ie,"scrollbarHidden",!R),F&&(K=M(R),E(K,z)),d||m||b||P||D){Y&&a(Ne,Ze,!1);const[t,e]=L(R,T,K),[n,o]=G=w(l),[r,s]=q=$(l),c=me(i);let d=r,p=c;t(),(s||o||D)&&e&&!R&&C(e,r,n,T)&&(p=me(i),d=ve(i));const f={w:Bn(Ln(r.w,d.w)+n.w),h:Bn(Ln(r.h,d.h)+n.h)},h={w:Bn(v?u.innerWidth:p.w+Bn(c.w-r.w)+n.w),h:Bn(v?u.innerHeight:p.h+Bn(c.h-r.h)+n.h)};J=O(h),X=j(((t,e)=>{const n=window.devicePixelRatio%1!=0?1:0,o={w:Bn(t.w-e.w),h:Bn(t.h-e.h)};return{w:o.w>n?o.w:0,h:o.h>n?o.h:0}})(f,h),l)}const[U,Q]=J,[tt,et]=X,[nt,ot]=q,[rt,st]=G,it={x:tt.w>0,y:tt.h>0},lt=I&&W&&(it.x||it.y)||I&&it.x&&!it.y||W&&it.y&&!it.x;if(m||P||st||ot||Q||et||V||D||F){const t={marginRight:0,marginBottom:0,marginLeft:0,width:"",overflowY:"",overflowX:""},e=((t,e,n,o)=>{const r=(t,e)=>{const n=Dn(t),o=e&&n&&t.replace(`${Pn}-`,"")||"";return[e&&!n?t:"",Dn(o)?"hidden":o]},[s,i]=r(n.x,e.x),[l,c]=r(n.y,e.y);return o.overflowX=i&&l?i:s,o.overflowY=c&&s?c:l,M(t,o)})(R,it,Z,t),n=C(e,nt,rt,T);c||A(e,T,n,t),F&&E(e,z),c?(vt(r,He,t.overflowX),vt(r,De,t.overflowY)):N(i,t)}wt(r,Te,Ze,lt),Hn(s,Ne,lt),!c&&Hn(i,Ne,Y);const[ct,at]=_(M(R).xt);return o({xt:ct,Ct:{x:U.w,y:U.h},Ot:{x:tt.w,y:tt.h},Tt:it}),{Et:at,At:Q,zt:et}}},Vn=(t,e,n)=>{const o={},r=e||{};return I(ht(t).concat(ht(r)),e=>{const s=t[e],i=r[e];o[e]=!!(n||s||i)}),o},Rn=3333333,Fn=t=>t&&(t.height||t.width),In=(t,e,n)=>{const{It:o=!1,Lt:r=!1}=n||{},s=un().__osSizeObserverPlugin,{B:i}=vn(),l=zt(`<div class="${We}"><div class="${Ke}"></div></div>`)[0],c=l.firstChild,a=pe.bind(0,t),[d]=W({o:void 0,_:!0,u:(t,e)=>!(!t||!Fn(t)&&Fn(e))}),u=t=>{const n=nt(t)&&t.length>0&&ot(t[0]),r=!n&&tt(t[0]);let s=!1,c=!1,a=!0;if(n){const[e,,n]=d(t.pop().contentRect),o=Fn(e);c=!Fn(n)&&o,a=!(s=!n||!o)}else r?[,a]=t:c=!0===t;if(o&&a){const e=r?t[0]:pe(l);$t(l,e?i.n?-Rn:i.i?0:Rn:Rn),xt(l,Rn)}s||e({ht:!r,Ht:r?t:void 0,Lt:!!c})},p=[];let f=!!r&&u;return[()=>{pt(p),Bt(l)},()=>{if(Wt){const t=new Wt(u);t.observe(c),at(p,()=>{t.disconnect()})}else if(s){const[t,e]=s.O(c,u,r);f=t,at(p,e)}if(o){const[t]=W({o:!a()},a);at(p,je(l,"scroll",e=>{const n=t(),[o,r]=n;r&&(Ut(c,"ltr rtl"),Qt(c,o?"rtl":"ltr"),u(n)),ke(e)}))}f&&(Qt(l,Ye),at(p,je(l,"animationstart",f,{C:!!Wt}))),Ct(t,l)}]},Nn=(t,e)=>{let n;const o=Pt("os-trinsic-observer"),r=[],[s]=W({o:!1}),i=(t,n)=>{if(t){const o=s((t=>0===t.h||t.isIntersecting||t.intersectionRatio>0)(t)),[,r]=o;if(r)return!n&&e(o),[o]}},l=(t,e)=>{if(t&&t.length>0)return i(t.pop(),e)};return[()=>{pt(r),Bt(o)},()=>{if(Nt)(n=new Nt(t=>l(t),{root:t})).observe(o),at(r,()=>{n.disconnect()});else{const t=()=>{const t=be(o);i(t)},[e,n]=In(o,t);at(r,e),n(),t()}Ct(t,o)},()=>{if(n)return l(n.takeRecords(),!0)}]},Wn=(t,e,n,o)=>{let r=!1;const{Pt:s,Dt:i,Mt:l,Rt:c,kt:a,Bt:d}=o||{},u=le(()=>{r&&n(!0)},{g:33,v:99}),[p,f]=((t,e,n)=>{let o,r=!1;const s=s=>{n&&I(n.reduce((e,n)=>{if(n){const o=n[0],r=n[1],i=r&&o&&(s?s(o):kt(o,t));i&&i.length&&r&&Q(r)&&at(e,[i,r.trim()],!0)}return e},[]),t=>I(t[0],n=>{const s=t[1],i=o.get(n);if(i){const t=i[0],e=i[1];t===s&&e()}const l=je(n,s,t=>{r?(l(),o.delete(n)):e(t)});o.set(n,[s,l])}))};return n&&(o=new WeakMap,s()),[()=>{r=!0},s]})(t,u,l),h=i||[],g=(s||[]).concat(h),b=(r,s)=>{const i=a||se,l=d||se,u=[],p=[];let g=!1,b=!1,m=!1;return I(r,n=>{const{attributeName:r,target:s,type:a,oldValue:d,addedNodes:f}=n,v="attributes"===a,w="childList"===a,y=t===s,$=v&&Q(r)?vt(s,r):0,x=0!==$&&d!==$,j=ct(h,r)>-1&&x;if(e&&!y){const e=!v,a=v&&j,u=a&&c&&Ot(s,c),h=(u?!i(s,r,d,$):e||a)&&!l(n,!!u,t,o);at(p,f),b=b||h,m=m||w}!e&&y&&x&&!i(s,r,d,$)&&(at(u,r),g=g||j)}),m&&!ut(p)&&f(t=>p.reduce((e,n)=>(at(e,kt(t,n)),Ot(n,t)?at(e,n):e),[])),e?(!s&&b&&n(!1),[!1]):!ut(u)||g?(!s&&n(u,g),[u,g]):void 0},m=new It(t=>b(t));return m.observe(t,{attributes:!0,attributeOldValue:!0,attributeFilter:g,subtree:e,childList:e,characterData:e}),r=!0,[()=>{r&&(p(),m.disconnect(),r=!1)},()=>{if(r){u.m();const t=m.takeRecords();return!ut(t)&&b(t,!0)}}]},Yn=`[${Te}]`,Kn=`.${Re}`,Gn=["tabindex"],qn=["wrap","cols","rows"],Xn=["id","class","style","open"],Jn=(t,e,n)=>{let o,r,s;const[,i]=e,{J:l,K:c,tt:a,rt:d,it:u,ut:p,ft:f}=t,{V:h}=vn(),[g]=W({u:ee,o:{w:0,h:0}},()=>{const t=p(Ne,Ze),e=p(Fe,""),n=e&&$t(c),o=e&&xt(c);f(Ne,Ze),f(Fe,""),f("",Ve,!0);const r=ve(a),s=ve(c),i=we(c);return f(Ne,Ze,t),f(Fe,"",e),f("",Ve),$t(c,n),xt(c,o),{w:s.w+r.w+i.w,h:s.h+r.h+i.h}}),b=d?qn:Xn.concat(qn),m=le(n,{g:()=>o,v:()=>r,p(t,e){const[n]=t,[o]=e;return[ht(n).concat(ht(o)).reduce((t,e)=>(t[e]=n[e]||o[e],t),{})]}}),v=t=>{I(t||Gn,t=>{if(ct(Gn,t)>-1){const e=vt(l,t);Q(e)?vt(c,t,e):yt(c,t)}})},w=(t,e)=>{const[o,r]=t,s={_t:r};return i({dt:o}),!e&&n(s),s},y=({ht:t,Ht:e,Lt:o})=>{const r=!t||o?n:m;let s=!1;if(e){const[t,n]=e;s=n,i({vt:t})}r({ht:t,wt:s})},$=(t,e)=>{const[,o]=g(),r={gt:o};return o&&!e&&(t?n:m)(r),r},x=(t,e,n)=>{const o={$t:e};return e?!n&&m(o):u||v(t),o},[j,k,O]=a||!h?Nn(l,w):[se,se,se],[S,_]=u?[se,se]:In(l,y,{Lt:!0,It:!0}),[E,M]=Wn(l,!1,x,{Dt:Xn,Pt:Xn.concat(Gn)}),A=u&&Wt&&new Wt(y.bind(0,{ht:!0}));return A&&A.observe(l),v(),[()=>{j(),S(),s&&s[0](),A&&A.disconnect(),E()},()=>{_(),k()},()=>{const t={},e=M(),n=O(),o=s&&s[1]();return e&&gt(t,x.apply(0,at(e,!0))),n&&gt(t,w.apply(0,at(n,!0))),o&&gt(t,$.apply(0,at(o,!0))),t},t=>{const[e]=t("update.ignoreMutation"),[n,i]=t("update.attributes"),[l,d]=t("update.elementEvents"),[p,f]=t("update.debounce"),h=t=>et(e)&&e(t);if((d||i)&&(s&&(s[1](),s[0]()),s=Wn(a||c,!0,$,{Dt:b.concat(n||[]),Pt:b.concat(n||[]),Mt:l,Rt:Yn,Bt:(t,e)=>{const{target:n,attributeName:o}=t;return!(e||!o||u)&&Mt(n,Yn,Kn)||!!Et(n,`.${Ge}`)||!!h(t)}})),f)if(m.m(),nt(p)){const t=p[0],e=p[1];o=U(t)&&t,r=U(e)&&e}else U(p)?(o=p,r=!1):(o=!1,r=!1)}]},Un={x:0,y:0},Qn={Z:{t:0,r:0,b:0,l:0},bt:!1,P:{marginRight:0,marginBottom:0,marginLeft:0,paddingTop:0,paddingRight:0,paddingBottom:0,paddingLeft:0},Ct:Un,Ot:Un,xt:{x:"hidden",y:"hidden"},Tt:{x:!1,y:!1},dt:!1,vt:!1},to=(t,e)=>{const n=kn(e,{}),o=On(Qn),[r,s,i]=Me(),[l]=o,[c,a,d]=Mn(t),u=((t,e)=>{const{W:n,K:o,ft:r,it:s}=t,{A:i,I:l,V:c}=vn(),a=!i&&(l.x||l.y),d=[An(t,e),Cn(t,e),Zn(t,e)];return(t,e,i)=>{const l=Vn(gt({ht:!1,yt:!1,wt:!1,_t:!1,At:!1,zt:!1,Et:!1,$t:!1,gt:!1},e),{},i),u=a||!c,p=u&&$t(o),f=u&&xt(o);r("",Ve,!0);let h=l;return I(d,e=>{h=Vn(h,e(h,t,!!i)||{},i)}),$t(o,p),xt(o,f),r("",Ve),s||($t(n,0),xt(n,0)),h}})(c,o),p=(t,e,n)=>{(ht(t).some(e=>t[e])||!bt(e)||n)&&i("u",[t,e,n])},[f,h,g,b]=Jn(c,o,t=>{p(u(n,t),{},!1)}),m=l.bind(0);return m.Vt=(t=>{r("u",t)}),m.Yt=(()=>{const{W:t,K:e}=c,n=$t(t),o=xt(t);h(),a(),$t(e,n),xt(e,o)}),m.jt=c,[(t,n)=>{const o=kn(e,t,n);b(o),p(u(o,g(),n),t,!!n)},m,()=>{s(),f(),d()}]},{round:eo,max:no,sign:oo}=Math,ro=()=>performance.now(),so=(t,e,n,o)=>{let r=0;const s=ro(),i=()=>{const l=ro(),c=l-s>=n,a=1-(no(0,s+n-l)/n||0),d=c||1===a;o((e-t)*a+t,d),r=d?0:Kt(i)};return i(),()=>Yt(r)},io=(t,e)=>je(t,"mousedown",je.bind(0,e,"click",ke,{C:!0,$:!0}),{$:!0}),lo=(t,e,n,o,r,s)=>{const{B:i}=vn(),{qt:l,Ft:c,Gt:a}=n,d=`scroll${s?"Left":"Top"}`,u=`client${s?"X":"Y"}`,p=s?"width":"height",f=s?"left":"top",h=s?"w":"h",g=s?"x":"y",b=(t,e)=>t[f]-e[f],m=(t,e)=>n=>{const{Ot:u}=r(),p=be(c)[h]-be(l)[h],f=e*n/p*u[g],b=pe(a)&&s?i.n||i.i?1:-1:1;o[d]=t+f*b};return je(c,"pointerdown",n=>{const r=Et(n.target,`.${Qe}`)===l;if(((t,e,n)=>{const o=e.scrollbars,{button:r,isPrimary:s,pointerType:i}=t,{pointers:l}=o;return 0===r&&s&&o[n?"dragScroll":"clickScroll"]&&(l||[]).includes(i)})(n,t,r)){const t=!r&&n.shiftKey,s=m(o[d]||0,1/(t=>{const{width:e,height:n}=ye(t),{w:o,h:r}=be(t);return{x:eo(e)/o||1,y:eo(n)/r||1}})(o)[g]),i=n[u],a=ye(l),h=ye(c),v=a[p],w=b(a,h)+v/2,y=i-h[f],$=r?0:y-w,x=[je(e,"selectstart",t=>Oe(t),{S:!1}),je(c,"pointermove",e=>{const n=e[u]-i;(r||t)&&s($+n)})];if(t)s($);else if(!r){let t=0,e=se;const n=o=>{e=so(o,o+v*oo($),133,(o,r)=>{s(o);const i=b(ye(l),h);if(r&&!(y>=i&&y<=i+v)){if(t)n(o);else{const t=setTimeout(()=>{n(o)},222);e=(()=>{clearTimeout(t)})}t++}})};n(0),at(x,()=>e())}je(c,"pointerup",t=>{pt(x),c.releasePointerCapture(t.pointerId)},{C:!0}),c.setPointerCapture(n.pointerId)}})},{min:co,max:ao,abs:uo,round:po}=Math,fo=(t,e,n,o)=>{if(o){const t=n?"x":"y",{Ot:e,Ct:r}=o,s=r[t],i=e[t];return ao(0,co(1,s/(s+i)))}const r=n?"w":"h",s=be(t)[r],i=be(e)[r];return ao(0,co(1,s/i))},ho=(t,e,n)=>{const{j:o}=vn(),{scrollbars:r}=o(),{slot:s}=r,{ct:i,W:l,J:c,K:a,lt:d,ot:u}=e,{scrollbars:p}=d?{}:t,{slot:f}=p||{},h=yn([l,c,a],()=>c,s,f),g=(t,e,n)=>{const o=n?Qt:Ut;I(t,t=>{o(t.Gt,e)})},b=(t,e)=>{I(t,t=>{const[n,o]=e(t);N(n,o)})},m=(t,e,n)=>{b(t,t=>{const{qt:o,Ft:r}=t;return[o,{[n?"width":"height"]:`${(100*fo(o,r,n,e)).toFixed(3)}%`}]})},v=(t,e,n)=>{const o=n?"X":"Y";b(t,t=>{const{qt:r,Ft:s,Gt:i}=t,l=((t,e,n,o,r,s)=>{const{B:i}=vn(),l=s?"x":"y",c=s?"Left":"Top",{Ot:a}=o,d=po(a[l]),u=uo(n[`scroll${c}`]),p=s&&r,f=i.i?u:d-u,h=co(1,(p?f:u)/d),g=fo(t,e,s);return 1/g*(1-g)*h})(r,s,u,e,pe(i),n);return[r,{transform:l==l?`translate${o}(${(100*l).toFixed(3)}%)`:""}]})},w=[],y=[],$=[],x=(t,e,n)=>{const o=tt(n),r=!o||!n;(!o||n)&&g(y,t,e),r&&g($,t,e)},j=t=>{const e=t?Xe:Je,o=t?y:$,r=ut(o)?nn:"",s=Pt(`${Ge} ${e} ${r}`),l=Pt(Ue),a=Pt(Qe),d={Gt:s,Ft:l,qt:a};return Ct(s,l),Ct(l,a),at(o,d),at(w,[Bt.bind(0,s),n(d,x,i,c,u,t)]),d},k=j.bind(0,!0),O=j.bind(0,!1);return k(),O(),[{Nt:t=>{m(y,t,!0),m($,t)},Xt:t=>{v(y,t,!0),v($,t)},Ut:x,Wt:{Jt:y,Kt:k,Zt:b.bind(0,y)},Qt:{Jt:$,Kt:O,Zt:b.bind(0,$)}},()=>{Ct(h,y[0].Gt),Ct(h,$[0].Gt),Gt(()=>{x(nn)},300)},pt.bind(0,w)]},go=(t,e,n)=>{let o,r,s,i,l,c=0;const a=On({}),[d]=a,[u,p]=ie(),[f,h]=ie(),[g,b]=ie(100),[m,v]=ie(100),[w,y]=ie(()=>c),[$,x,j]=ho(t,n.jt,((t,e)=>(n,o,r,s,i,l)=>{const{Gt:c}=n,[a,d]=ie(333),u=!!i.scrollBy;let p=!0;return pt.bind(0,[je(c,"pointerenter",()=>{o(on,!0)}),je(c,"pointerleave pointercancel",()=>{o(on)}),je(c,"wheel",t=>{const{deltaX:e,deltaY:n,deltaMode:r}=t;u&&p&&0===r&&_t(c)===s&&i.scrollBy({left:e,top:n,behavior:"smooth"}),p=!1,o(ln,!0),a(()=>{p=!0,o(ln)}),Oe(t)},{S:!1,$:!0}),io(c,r),lo(t,r,n,i,e,l),d])})(e,n)),{J:k,K:O,ot:S,st:_,it:E,U:M}=n.jt,{Wt:A,Qt:C,Ut:L,Nt:B,Xt:P}=$,{Zt:z}=A,{Zt:T}=C,H=t=>{const{Gt:e}=t,n=E&&!M&&_t(e)===O&&e;return[n,{transform:n?`translate(${$t(S)}px, ${xt(S)}px)`:""}]},D=(t,e)=>{if(y(),t)L(sn);else{const t=()=>L(sn,!0);c>0&&!e?w(t):t()}},Z=()=>{(i=r)&&D(!0)},V=[b,y,v,h,p,j,je(k,"pointerover",Z,{C:!0}),je(k,"pointerenter",Z),je(k,"pointerleave",()=>{i=!1,r&&D(!1)}),je(k,"pointermove",()=>{o&&u(()=>{b(),D(!0),m(()=>{o&&D(!1)})})}),je(_,"scroll",()=>{f(()=>{P(n()),s&&D(!0),g(()=>{s&&!i&&D(!1)})}),E&&z(H),E&&T(H)})],R=d.bind(0);return R.jt=$,R.Yt=x,[(t,i,a)=>{const{At:d,zt:u,Et:p,wt:f}=a,h=kn(e,t,i),g=n(),{Ot:b,xt:m,vt:v}=g,[w,y]=h("scrollbars.theme"),[$,x]=h("scrollbars.visibility"),[j,k]=h("scrollbars.autoHide"),[O]=h("scrollbars.autoHideDelay"),[S,_]=h("scrollbars.dragScroll"),[E,A]=h("scrollbars.clickScroll"),C=d||u||f||i,z=p||x||i,T=(t,e)=>{const n="visible"===$||"auto"===$&&"scroll"===t;return L(tn,n,e),n};if(c=O,y&&(L(l),L(w,!0),l=w),k&&(o="move"===j,r="leave"===j,D(!(s="never"!==j),!0)),_&&L(an,S),A&&L(cn,E),z){const t=T(m.x,!0),e=T(m.y,!1);L(en,!(t&&e))}C&&(B(g),P(g),L(rn,!b.x,!0),L(rn,!b.y,!1),L(qe,v&&!M))},R,pt.bind(0,V)]},bo=(t,e,n)=>{const{F:o,Y:r}=vn(),s=un(),i=it(t),l=i?t:t.target,c=xn(l);if(e&&!c){let c=!1;const a=s.__osOptionsValidationPlugin,d=t=>{const e=t||{},n=a&&a.O;return n?n(e,!0):e},u=gt({},o(),d(e)),[p,f,h]=Me(n),[g,b,m]=to(t,u),[v,w,y]=go(t,u,b),$=(t,e)=>{g(t,!!e)},x=r($.bind(0,{},!0)),j=t=>{(t=>{$n.delete(t)})(l),x(),y(),m(),c=!0,h("destroyed",[k,!!t]),f()},k={options(t){if(t){const e=Le(u,d(t));bt(e)||(gt(u,e),$(e))}return gt({},u)},on:p,off:(t,e)=>{t&&e&&f(t,e)},state(){const{Ct:t,Ot:e,xt:n,Tt:o,Z:r,bt:s,vt:i}=b();return gt({},{overflowEdge:t,overflowAmount:e,overflowStyle:n,hasOverflow:o,padding:r,paddingAbsolute:s,directionRTL:i,destroyed:c})},elements(){const{W:t,J:e,Z:n,K:o,tt:r,ot:s,st:i}=b.jt,{Wt:l,Qt:c}=w.jt,a=t=>{const{qt:e,Ft:n,Gt:o}=t;return{scrollbar:o,track:n,handle:e}},d=t=>{const{Jt:e,Kt:n}=t,o=a(e[0]);return gt({},o,{clone:()=>{const t=a(n());return v({},!0,{}),t}})};return gt({},{target:t,host:e,padding:n||o,viewport:o,content:r||o,scrollOffsetElement:s,scrollEventElement:i,scrollbarHorizontal:d(l),scrollbarVertical:d(c)})},update:t=>($({},t),k),destroy:j.bind(0)};return b.Vt((t,e,n)=>{v(e,n,t)}),I(ht(s),t=>{const e=s[t];et(e)&&e(bo,k)}),((t,e)=>{const{nativeScrollbarsOverlaid:n,body:o}=t||{},{U:r}=e,{j:s,I:i,A:l}=vn(),{nativeScrollbarsOverlaid:c,body:a}=s().cancel,d=null!=n?n:c,u=q(o)?a:o,p=(i.x||i.y)&&d,f=r&&(X(u)?!l:u);return!!p||!!f})(!i&&t.cancel,b.jt)?(j(!0),k):(b.Yt(),w.Yt(),((t,e)=>{$n.set(t,e)})(l,k),h("initialized",[k]),b.Vt((t,e,n)=>{const{ht:o,wt:r,_t:s,At:i,zt:l,Et:c,gt:a,$t:d}=t;h("updated",[k,{updateHints:{sizeChanged:o,directionChanged:r,heightIntrinsicChanged:s,overflowEdgeChanged:i,overflowAmountChanged:l,overflowStyleChanged:c,contentMutation:a,hostMutation:d},changedOptions:e,force:n}])}),k.update(!0))}return c};function mo(e){let n,o,r,s,d,f,h,g;return n=new Z({props:{accent:"1"}}),h=new F({props:{image:"https://images.unsplash.com/photo-1425082661705-1834bfd09dca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",no:"1",title:"주제",description:"내용",class:"scroll-area"}}),{c(){L(n.$$.fragment),o=u(),r=a("main"),s=a("div"),(d=a("div")).innerHTML='<article class="svelte-wsc82y"><h1 class="svelte-wsc82y">지속가능한 세상에서 동물과 공존한다는 것</h1> \n    <h3 class="svelte-wsc82y">인간중심주의에서 벗어나기</h3></article> \n  <img src="bg.avif" alt="" class="svelte-wsc82y"/>',f=u(),L(h.$$.fragment),p(d,"id","intro"),p(d,"class","scroll-area svelte-wsc82y"),p(s,"class","scroll-container svelte-wsc82y"),p(r,"id","wrapper"),p(r,"class","svelte-wsc82y")},m(t,e){B(n,t,e),l(t,o,e),l(t,r,e),i(r,s),i(s,d),i(s,f),B(h,s,null),g=!0},p:t,i(t){g||(A(n.$$.fragment,t),A(h.$$.fragment,t),g=!0)},o(t){C(n.$$.fragment,t),C(h.$$.fragment,t),g=!1},d(t){P(n,t),t&&c(o),t&&c(r),P(h)}}}function vo(t){bo(document.querySelector(".scroll-container"),{});return[]}bo.plugin=(t=>{I(nt(t)?t:[t],t=>{const e=ht(t)[0];dn[e]=t[e]})}),bo.valid=(t=>{const e=t&&t.elements,n=et(e)&&e();return st(n)&&!!xn(n.target)}),bo.env=(()=>{const{k:t,I:e,A:n,B:o,V:r,L:s,N:i,X:l,j:c,q:a,F:d,G:u}=vn();return gt({},{scrollbarsSize:t,scrollbarsOverlaid:e,scrollbarsHiding:n,rtlScrollBehavior:o,flexboxGlue:r,cssCustomProperties:s,staticDefaultInitialization:i,staticDefaultOptions:l,getDefaultInitialization:c,setDefaultInitialization:a,getDefaultOptions:d,setDefaultOptions:u})});return new class extends H{constructor(t){super(),T(this,t,vo,mo,s,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
