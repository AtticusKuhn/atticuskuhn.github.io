(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[709],{834:function(e,t,r){"use strict";r.d(t,{p:function(){return c}});var n=r(5893);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){l(e,t,r[t])}))}return e}function a(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var i=function(e){var t=e.children,r=e.size,l=void 0===r?"5xl":r;return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("h1",{className:"flex flex-col text-primary-900 text-".concat(l," font-bold p-1"),children:t})})},c=function(e){var t=e.size,r=void 0===t?"3xl":t,l=a(e,["size"]);return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(i,o({size:r},l))})};t.Z=i},1641:function(e,t,r){"use strict";var n=r(5893),l=(r(7294),r(1664)),o=function(e){var t=e.text,r=e.link;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.default,{href:"/"+r,children:(0,n.jsx)("a",{className:"mx-1 px-1",children:t})})," ","|"," "]})};t.Z=function(e){var t=e.children;return(0,n.jsxs)("div",{className:"text-center flex flex-col w-full bg-primary-100 text-primary-800",children:[(0,n.jsx)("header",{className:"text-xl",children:(0,n.jsxs)("nav",{className:"px-1",children:[(0,n.jsx)(o,{link:"",text:"Home"}),(0,n.jsx)(o,{link:"blog",text:"Blog"}),(0,n.jsx)(o,{link:"projects",text:"My Projects"}),(0,n.jsx)(o,{link:"about",text:"About"}),(0,n.jsx)(o,{link:"computer-science",text:"Computer Science"}),(0,n.jsx)(o,{link:"math",text:"Mathematics"}),(0,n.jsx)(o,{link:"contact",text:"Contact me"})]})}),(0,n.jsx)("div",{className:"center bg-primary-200 mx-200 text-center min-h-screen p-3xl ",children:t}),(0,n.jsxs)("footer",{children:[(0,n.jsx)("hr",{}),(0,n.jsxs)("span",{children:["\u24b8 all rights reserved Atticus Kuhn ",(new Date).getFullYear()]})]})]})}},920:function(e,t,r){"use strict";var n=r(5893),l=r(1664);r(7294);t.Z=function(e){var t=e.link,r=e.title,o=e.image,a=e.date,i=e.description;return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(l.default,{href:t,children:(0,n.jsx)("a",{className:"rounded bg-primary-100 m-8 p-xl w-full flex flex-row sm:flex-col w-5/12 mx-auto pop ",children:(0,n.jsxs)("div",{className:"flex flex-col sm:flex-row w-full h-full",children:[(0,n.jsx)("img",{className:"m-0 block sm:h-6/12 sm:w-6/12 h-full w-full",src:o}),(0,n.jsxs)("div",{className:"m-xl",children:[(0,n.jsx)("div",{className:"text-blog text-xl",children:r}),(0,n.jsx)("div",{className:"text-primary-300 text-sm",children:new Date(a).toLocaleDateString("en-US")}),(0,n.jsx)("div",{className:"text-primary-300 text-sm",children:i})]})]})})})})}},8418:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,l,o=[],a=!0,i=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);a=!0);}catch(c){i=!0,l=c}finally{try{a||null==r.return||r.return()}finally{if(i)throw l}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=void 0;var o,a=(o=r(7294))&&o.__esModule?o:{default:o},i=r(6273),c=r(387),u=r(7190);var s={};function f(e,t,r,n){if(e&&i.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var l=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;s[t+"%"+r+(l?"%"+l:"")]=!0}}var d=function(e){var t,r=!1!==e.prefetch,n=c.useRouter(),o=a.default.useMemo((function(){var t=l(i.resolveHref(n,e.href,!0),2),r=t[0],o=t[1];return{href:r,as:e.as?i.resolveHref(n,e.as):o||r}}),[n,e.href,e.as]),d=o.href,p=o.as,m=e.children,h=e.replace,x=e.shallow,v=e.scroll,y=e.locale;"string"===typeof m&&(m=a.default.createElement("a",null,m));var b=(t=a.default.Children.only(m))&&"object"===typeof t&&t.ref,g=l(u.useIntersection({rootMargin:"200px"}),2),j=g[0],w=g[1],O=a.default.useCallback((function(e){j(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,j]);a.default.useEffect((function(){var e=w&&r&&i.isLocalURL(d),t="undefined"!==typeof y?y:n&&n.locale,l=s[d+"%"+p+(t?"%"+t:"")];e&&!l&&f(n,d,p,{locale:t})}),[p,d,w,y,r,n]);var k={ref:O,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,l,o,a,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(r))&&(e.preventDefault(),null==a&&n.indexOf("#")>=0&&(a=!1),t[l?"replace":"push"](r,n,{shallow:o,locale:c,scroll:a}))}(e,n,d,p,h,x,v,y)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),i.isLocalURL(d)&&f(n,d,p,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var S="undefined"!==typeof y?y:n&&n.locale,N=n&&n.isLocaleDomain&&i.getDomainLocale(p,S,n&&n.locales,n&&n.domainLocales);k.href=N||i.addBasePath(i.addLocale(p,S,n&&n.defaultLocale))}return a.default.cloneElement(t,k)};t.default=d},7190:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,l,o=[],a=!0,i=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);a=!0);}catch(c){i=!0,l=c}finally{try{a||null==r.return||r.return()}finally{if(i)throw l}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,r=e.disabled||!i,n=o.useRef(),u=l(o.useState(!1),2),s=u[0],f=u[1],d=o.useCallback((function(e){n.current&&(n.current(),n.current=void 0),r||s||e&&e.tagName&&(n.current=function(e,t,r){var n=function(e){var t=e.rootMargin||"",r=c.get(t);if(r)return r;var n=new Map,l=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return c.set(t,r={id:t,observer:l,elements:n}),r}(r),l=n.id,o=n.observer,a=n.elements;return a.set(e,t),o.observe(e),function(){a.delete(e),o.unobserve(e),0===a.size&&(o.disconnect(),c.delete(l))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[r,t,s]);return o.useEffect((function(){if(!i&&!s){var e=a.requestIdleCallback((function(){return f(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[s]),[d,s]};var o=r(7294),a=r(9311),i="undefined"!==typeof IntersectionObserver;var c=new Map},1664:function(e,t,r){e.exports=r(8418)}}]);