(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[333],{570:function(e,t,r){"use strict";var n=r(5893),o=r(1664);r(7294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){l(e,t,r[t])}))}return e}t.Z=function(e){var t=function(e){return"bg-button w-fit p-3 rounded m-2 text-center text-primary-300 duration-75 ".concat(e," disabled:hover:bg-parimary-200 disabled:cursor-not-allowed")};return"link"in e?(0,n.jsx)(o.default,{href:e.link,children:(0,n.jsx)("a",a({},e,{className:t(e.className+" pop"),children:e.children}))}):(0,n.jsx)("button",a({},e,{className:t(e.className+" duration-200 hover:bg-primary-700"),onClick:e.onClickFunc,children:e.children}))}},834:function(e,t,r){"use strict";r.d(t,{p:function(){return i}});var n=r(5893);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){o(e,t,r[t])}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=function(e){var t=e.children,r=e.size,o=void 0===r?"4xl":r;return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("h1",{className:"flex flex-col text-primary-900 text-".concat(o," font-bold p-1"),children:t})})},i=function(e){var t=e.size,r=void 0===t?"xl":t,o=a(e,["size"]);return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(c,l({size:r},o))})};t.Z=c},3034:function(e,t,r){"use strict";r.d(t,{G:function(){return i}});var n=r(5893),o=r(7294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){l(e,t,r[t])}))}return e}var c=function(e){return(0,n.jsx)("input",a({},e,{className:"w-5/12 h-full p-tiny bg-primary-300 active:bg-primary-500 focus:outline-none text-primary-100 border-primary-400 rounded m-sm"}))};function i(e){var t=(0,o.useState)(e.value||""),r=t[0],l=t[1];return[r,(0,n.jsx)(c,a({value:r,onChange:function(e){return l(e.target.value)}},e))]}},1641:function(e,t,r){"use strict";var n=r(5893),o=r(7294),l=r(1664),a=r(570),c=r(1159),i=function(e){var t=e.text,r=e.link;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.default,{href:"/"+r,children:(0,n.jsx)("a",{className:"mx-1 px-1",children:t})})," ","|"," "]})},u=function(){return(0,n.jsxs)("footer",{children:[(0,n.jsx)("hr",{}),(0,n.jsxs)("span",{children:["\u24b8 all rights reserved ",(0,n.jsx)(c.Z,{href:"https://atticuskuhn.github.io",children:"Atticus Kuhn"})," ",(new Date).getFullYear()]})]})};t.Z=function(e){var t=e.children,r=(0,o.useState)("light"),l=r[0],c=r[1];(0,o.useEffect)((function(){var e=localStorage.getItem("mode");e&&c(e)}),[]);return(0,n.jsx)("div",{className:l,children:(0,n.jsxs)("div",{className:"text-center flex flex-col w-full  bg-primary-100 text-primary-800",children:[(0,n.jsx)("header",{className:"text-xl",children:(0,n.jsxs)("nav",{className:"px-1",children:[(0,n.jsx)(i,{link:"",text:"Home"}),(0,n.jsx)(i,{link:"blog",text:"Blog"}),(0,n.jsx)(i,{link:"projects",text:"My Projects"}),(0,n.jsx)(i,{link:"about",text:"About"}),(0,n.jsx)(i,{link:"computer-science",text:"Computer Science"}),(0,n.jsx)(i,{link:"math",text:"Mathematics"}),(0,n.jsx)(i,{link:"contact",text:"Contact me"}),(0,n.jsx)(a.Z,{onClickFunc:function(){var e="dark"===l?"light":"dark";c(e),localStorage.setItem("mode",e)},children:l})]})}),(0,n.jsx)("div",{className:"center bg-primary-200 mx-200 text-center min-h-screen p-3xl ",children:t}),(0,n.jsx)(u,{})]})})}},1159:function(e,t,r){"use strict";var n=r(5893),o=r(1664);r(7294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){l(e,t,r[t])}))}return e}t.Z=function(e){return(0,n.jsx)(o.default,{href:e.href,children:(0,n.jsx)("a",a({},e,{className:"pop rounded bg-primary-300 p-1 m-1 hover:bg-primary-100",children:e.children}))})}},920:function(e,t,r){"use strict";var n=r(5893),o=r(1664);r(7294);t.Z=function(e){var t=e.link,r=e.title,l=e.image,a=e.date,c=e.description;return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(o.default,{href:t,children:(0,n.jsx)("a",{className:"rounded bg-primary-100 m-8 p-xl w-full flex flex-row sm:flex-col w-12/12 sm:w-5/12 mx-auto pop ",children:(0,n.jsxs)("div",{className:"flex flex-col sm:flex-row w-full h-full",children:[(0,n.jsx)("img",{alt:r,className:"m-0 block sm:h-6/12 sm:w-6/12 h-full w-full",src:l}),(0,n.jsxs)("div",{className:"m-xl",children:[(0,n.jsx)("div",{className:"text-blog text-xl",children:r}),(0,n.jsx)("div",{className:"text-primary-300 text-sm",children:new Date(a).toLocaleDateString("en-US")}),(0,n.jsx)("div",{className:"text-primary-300 text-sm",children:c})]})]})})})})}},8418:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,l=[],a=!0,c=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(l.push(n.value),!t||l.length!==t);a=!0);}catch(i){c=!0,o=i}finally{try{a||null==r.return||r.return()}finally{if(c)throw o}}return l}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=void 0;var l,a=(l=r(7294))&&l.__esModule?l:{default:l},c=r(6273),i=r(387),u=r(7190);var s={};function f(e,t,r,n){if(e&&c.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;s[t+"%"+r+(o?"%"+o:"")]=!0}}var d=function(e){var t,r=!1!==e.prefetch,n=i.useRouter(),l=a.default.useMemo((function(){var t=o(c.resolveHref(n,e.href,!0),2),r=t[0],l=t[1];return{href:r,as:e.as?c.resolveHref(n,e.as):l||r}}),[n,e.href,e.as]),d=l.href,p=l.as,m=e.children,h=e.replace,y=e.shallow,b=e.scroll,v=e.locale;"string"===typeof m&&(m=a.default.createElement("a",null,m));var x=(t=a.default.Children.only(m))&&"object"===typeof t&&t.ref,g=o(u.useIntersection({rootMargin:"200px"}),2),j=g[0],w=g[1],O=a.default.useCallback((function(e){j(e),x&&("function"===typeof x?x(e):"object"===typeof x&&(x.current=e))}),[x,j]);a.default.useEffect((function(){var e=w&&r&&c.isLocalURL(d),t="undefined"!==typeof v?v:n&&n.locale,o=s[d+"%"+p+(t?"%"+t:"")];e&&!o&&f(n,d,p,{locale:t})}),[p,d,w,v,r,n]);var k={ref:O,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,o,l,a,i){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&c.isLocalURL(r))&&(e.preventDefault(),null==a&&n.indexOf("#")>=0&&(a=!1),t[o?"replace":"push"](r,n,{shallow:l,locale:i,scroll:a}))}(e,n,d,p,h,y,b,v)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),c.isLocalURL(d)&&f(n,d,p,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var S="undefined"!==typeof v?v:n&&n.locale,N=n&&n.isLocaleDomain&&c.getDomainLocale(p,S,n&&n.locales,n&&n.domainLocales);k.href=N||c.addBasePath(c.addLocale(p,S,n&&n.defaultLocale))}return a.default.cloneElement(t,k)};t.default=d},7190:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,l=[],a=!0,c=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(l.push(n.value),!t||l.length!==t);a=!0);}catch(i){c=!0,o=i}finally{try{a||null==r.return||r.return()}finally{if(c)throw o}}return l}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,r=e.disabled||!c,n=l.useRef(),u=o(l.useState(!1),2),s=u[0],f=u[1],d=l.useCallback((function(e){n.current&&(n.current(),n.current=void 0),r||s||e&&e.tagName&&(n.current=function(e,t,r){var n=function(e){var t=e.rootMargin||"",r=i.get(t);if(r)return r;var n=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return i.set(t,r={id:t,observer:o,elements:n}),r}(r),o=n.id,l=n.observer,a=n.elements;return a.set(e,t),l.observe(e),function(){a.delete(e),l.unobserve(e),0===a.size&&(l.disconnect(),i.delete(o))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[r,t,s]);return l.useEffect((function(){if(!c&&!s){var e=a.requestIdleCallback((function(){return f(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[s]),[d,s]};var l=r(7294),a=r(9311),c="undefined"!==typeof IntersectionObserver;var i=new Map},1664:function(e,t,r){e.exports=r(8418)}}]);