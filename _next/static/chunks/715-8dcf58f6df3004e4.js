(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[715],{834:function(e,t,r){"use strict";var n=r(5893);t.Z=function(e){return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("h1",{className:"flex flex-col text-primary-900 text-5xl font-bold p-1",children:e.children})})}},1641:function(e,t,r){"use strict";var n=r(5893),o=(r(7294),r(1664)),a=r(9008),l=function(e){var t=e.text,r=e.link;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.default,{href:"/"+r,children:(0,n.jsx)("a",{className:"mx-1 px-1",children:t})})," ","|"," "]})};t.Z=function(e){var t=e.children,r=e.title,o=void 0===r?"This is the default title":r;return(0,n.jsxs)("div",{className:"text-center flex flex-col w-full ",children:[(0,n.jsxs)(a.default,{children:[(0,n.jsx)("title",{children:o}),(0,n.jsx)("meta",{charSet:"utf-8"}),(0,n.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"})]}),(0,n.jsx)("header",{className:"text-xl",children:(0,n.jsxs)("nav",{className:"px-1",children:[(0,n.jsx)(l,{link:"",text:"Home"}),(0,n.jsx)(l,{link:"blog",text:"Blog"}),(0,n.jsx)(l,{link:"about",text:"About"}),(0,n.jsx)(l,{link:"computer-science",text:"Computer Science"}),(0,n.jsx)(l,{link:"math",text:"Mathematics"}),(0,n.jsx)(l,{link:"contact",text:"Contact me"})]})}),(0,n.jsx)("div",{className:"center bg-primary-200 mx-200 text-center min-h-screen p-3xl ",children:t}),(0,n.jsxs)("footer",{children:[(0,n.jsx)("hr",{}),(0,n.jsxs)("span",{children:["\u24b8 all rights reserved Atticus Kuhn ",(new Date).getFullYear()]})]})]})}},8418:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],l=!0,i=!1;try{for(r=r.call(e);!(l=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);l=!0);}catch(c){i=!0,o=c}finally{try{l||null==r.return||r.return()}finally{if(i)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=void 0;var a,l=(a=r(7294))&&a.__esModule?a:{default:a},i=r(6273),c=r(387),u=r(7190);var s={};function f(e,t,r,n){if(e&&i.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;s[t+"%"+r+(o?"%"+o:"")]=!0}}var d=function(e){var t,r=!1!==e.prefetch,n=c.useRouter(),a=l.default.useMemo((function(){var t=o(i.resolveHref(n,e.href,!0),2),r=t[0],a=t[1];return{href:r,as:e.as?i.resolveHref(n,e.as):a||r}}),[n,e.href,e.as]),d=a.href,p=a.as,h=e.children,v=e.replace,y=e.shallow,m=e.scroll,x=e.locale;"string"===typeof h&&(h=l.default.createElement("a",null,h));var b=(t=l.default.Children.only(h))&&"object"===typeof t&&t.ref,g=o(u.useIntersection({rootMargin:"200px"}),2),j=g[0],w=g[1],k=l.default.useCallback((function(e){j(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,j]);l.default.useEffect((function(){var e=w&&r&&i.isLocalURL(d),t="undefined"!==typeof x?x:n&&n.locale,o=s[d+"%"+p+(t?"%"+t:"")];e&&!o&&f(n,d,p,{locale:t})}),[p,d,w,x,r,n]);var A={ref:k,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,o,a,l,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(r))&&(e.preventDefault(),null==l&&n.indexOf("#")>=0&&(l=!1),t[o?"replace":"push"](r,n,{shallow:a,locale:c,scroll:l}))}(e,n,d,p,v,y,m,x)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),i.isLocalURL(d)&&f(n,d,p,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var M="undefined"!==typeof x?x:n&&n.locale,C=n&&n.isLocaleDomain&&i.getDomainLocale(p,M,n&&n.locales,n&&n.domainLocales);A.href=C||i.addBasePath(i.addLocale(p,M,n&&n.defaultLocale))}return l.default.cloneElement(t,A)};t.default=d},7190:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],l=!0,i=!1;try{for(r=r.call(e);!(l=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);l=!0);}catch(c){i=!0,o=c}finally{try{l||null==r.return||r.return()}finally{if(i)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,r=e.disabled||!i,n=a.useRef(),u=o(a.useState(!1),2),s=u[0],f=u[1],d=a.useCallback((function(e){n.current&&(n.current(),n.current=void 0),r||s||e&&e.tagName&&(n.current=function(e,t,r){var n=function(e){var t=e.rootMargin||"",r=c.get(t);if(r)return r;var n=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return c.set(t,r={id:t,observer:o,elements:n}),r}(r),o=n.id,a=n.observer,l=n.elements;return l.set(e,t),a.observe(e),function(){l.delete(e),a.unobserve(e),0===l.size&&(a.disconnect(),c.delete(o))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[r,t,s]);return a.useEffect((function(){if(!i&&!s){var e=l.requestIdleCallback((function(){return f(!0)}));return function(){return l.cancelIdleCallback(e)}}}),[s]),[d,s]};var a=r(7294),l=r(9311),i="undefined"!==typeof IntersectionObserver;var c=new Map},9008:function(e,t,r){e.exports=r(5443)},1664:function(e,t,r){e.exports=r(8418)}}]);