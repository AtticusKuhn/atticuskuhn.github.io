(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[521],{4613:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return r(4228)}])},570:function(e,t,r){"use strict";var n=r(5893),o=r(1664);r(7294);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){c(e,t,r[t])}))}return e}t.Z=function(e){var t="bg-button w-fit p-3 rounded m-2 text-center text-primary-300 duration-75";return"link"in e?(0,n.jsx)(o.default,{href:e.link,children:(0,n.jsx)("a",a({},e,{className:t+e.style+" pop",children:e.children}))}):(0,n.jsx)("button",a({},e,{className:t+e.style+" duration-200 hover:bg-primary-700",onClick:e.onClickFunc,children:e.children}))}},834:function(e,t,r){"use strict";r.d(t,{p:function(){return l}});var n=r(5893);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){o(e,t,r[t])}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=function(e){var t=e.children,r=e.size,o=void 0===r?"4xl":r;return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("h1",{className:"flex flex-col text-primary-900 text-".concat(o," font-bold p-1"),children:t})})},l=function(e){var t=e.size,r=void 0===t?"xl":t,o=a(e,["size"]);return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(i,c({size:r},o))})};t.Z=i},1641:function(e,t,r){"use strict";var n=r(5893),o=r(7294),c=r(1664),a=r(570),i=function(e){var t=e.text,r=e.link;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(c.default,{href:"/"+r,children:(0,n.jsx)("a",{className:"mx-1 px-1",children:t})})," ","|"," "]})},l=function(){return(0,n.jsxs)("footer",{children:[(0,n.jsx)("hr",{}),(0,n.jsxs)("span",{children:["\u24b8 all rights reserved Atticus Kuhn ",(new Date).getFullYear()]})]})};t.Z=function(e){var t=e.children,r=(0,o.useState)("light"),c=r[0],u=r[1];(0,o.useEffect)((function(){var e=localStorage.getItem("mode");e&&u(e)}),[]);return(0,n.jsx)("div",{className:c,children:(0,n.jsxs)("div",{className:"text-center flex flex-col w-full  bg-primary-100 text-primary-800",children:[(0,n.jsx)("header",{className:"text-xl",children:(0,n.jsxs)("nav",{className:"px-1",children:[(0,n.jsx)(i,{link:"",text:"Home"}),(0,n.jsx)(i,{link:"blog",text:"Blog"}),(0,n.jsx)(i,{link:"projects",text:"My Projects"}),(0,n.jsx)(i,{link:"about",text:"About"}),(0,n.jsx)(i,{link:"computer-science",text:"Computer Science"}),(0,n.jsx)(i,{link:"math",text:"Mathematics"}),(0,n.jsx)(i,{link:"contact",text:"Contact me"}),(0,n.jsx)(a.Z,{className:"p-0",onClickFunc:function(){var e="dark"===c?"light":"dark";u(e),localStorage.setItem("mode",e)},children:c})]})}),(0,n.jsx)("div",{className:"center bg-primary-200 mx-200 text-center min-h-screen p-3xl ",children:t}),(0,n.jsx)(l,{})]})})}},1159:function(e,t,r){"use strict";var n=r(5893),o=r(1664);r(7294);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){c(e,t,r[t])}))}return e}t.Z=function(e){return(0,n.jsx)(o.default,{href:e.href,children:(0,n.jsx)("a",a({},e,{className:"pop rounded bg-primary-300 p-1 m-1 hover:bg-primary-100",children:e.children}))})}},8418:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,c=[],a=!0,i=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(c.push(n.value),!t||c.length!==t);a=!0);}catch(l){i=!0,o=l}finally{try{a||null==r.return||r.return()}finally{if(i)throw o}}return c}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=void 0;var c,a=(c=r(7294))&&c.__esModule?c:{default:c},i=r(6273),l=r(387),u=r(7190);var s={};function f(e,t,r,n){if(e&&i.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;s[t+"%"+r+(o?"%"+o:"")]=!0}}var d=function(e){var t,r=!1!==e.prefetch,n=l.useRouter(),c=a.default.useMemo((function(){var t=o(i.resolveHref(n,e.href,!0),2),r=t[0],c=t[1];return{href:r,as:e.as?i.resolveHref(n,e.as):c||r}}),[n,e.href,e.as]),d=c.href,p=c.as,h=e.children,y=e.replace,m=e.shallow,b=e.scroll,v=e.locale;"string"===typeof h&&(h=a.default.createElement("a",null,h));var x=(t=a.default.Children.only(h))&&"object"===typeof t&&t.ref,j=o(u.useIntersection({rootMargin:"200px"}),2),g=j[0],O=j[1],w=a.default.useCallback((function(e){g(e),x&&("function"===typeof x?x(e):"object"===typeof x&&(x.current=e))}),[x,g]);a.default.useEffect((function(){var e=O&&r&&i.isLocalURL(d),t="undefined"!==typeof v?v:n&&n.locale,o=s[d+"%"+p+(t?"%"+t:"")];e&&!o&&f(n,d,p,{locale:t})}),[p,d,O,v,r,n]);var k={ref:w,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,o,c,a,l){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(r))&&(e.preventDefault(),null==a&&n.indexOf("#")>=0&&(a=!1),t[o?"replace":"push"](r,n,{shallow:c,locale:l,scroll:a}))}(e,n,d,p,y,m,b,v)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),i.isLocalURL(d)&&f(n,d,p,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var S="undefined"!==typeof v?v:n&&n.locale,E=n&&n.isLocaleDomain&&i.getDomainLocale(p,S,n&&n.locales,n&&n.domainLocales);k.href=E||i.addBasePath(i.addLocale(p,S,n&&n.defaultLocale))}return a.default.cloneElement(t,k)};t.default=d},7190:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,c=[],a=!0,i=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(c.push(n.value),!t||c.length!==t);a=!0);}catch(l){i=!0,o=l}finally{try{a||null==r.return||r.return()}finally{if(i)throw o}}return c}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,r=e.disabled||!i,n=c.useRef(),u=o(c.useState(!1),2),s=u[0],f=u[1],d=c.useCallback((function(e){n.current&&(n.current(),n.current=void 0),r||s||e&&e.tagName&&(n.current=function(e,t,r){var n=function(e){var t=e.rootMargin||"",r=l.get(t);if(r)return r;var n=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return l.set(t,r={id:t,observer:o,elements:n}),r}(r),o=n.id,c=n.observer,a=n.elements;return a.set(e,t),c.observe(e),function(){a.delete(e),c.unobserve(e),0===a.size&&(c.disconnect(),l.delete(o))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[r,t,s]);return c.useEffect((function(){if(!i&&!s){var e=a.requestIdleCallback((function(){return f(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[s]),[d,s]};var c=r(7294),a=r(9311),i="undefined"!==typeof IntersectionObserver;var l=new Map},4228:function(e,t,r){"use strict";r.r(t);var n=r(5893),o=r(2962),c=(r(7294),r(834)),a=r(1641),i=r(1159);t.default=function(){return(0,n.jsxs)(a.Z,{children:[(0,n.jsx)(o.PB,{title:"About Me",description:"Learn all about me"}),(0,n.jsx)(c.Z,{children:"About Me"}),(0,n.jsxs)("div",{className:"text-left mx-4xl",children:[(0,n.jsx)("p",{className:"my-3xl",children:"Hi, I'm Atticus Kuhn, currently a student studying. My passions are computer science and mathematics. Feel free to check out my site to learn more about me."}),(0,n.jsxs)("p",{children:["Please see my ",(0,n.jsx)(i.Z,{href:"https://www.linkedin.com/in/atticus-kuhn-a15170230/",children:"LinkedIn"})," to contact me."]})]})]})}},1664:function(e,t,r){e.exports=r(8418)}},function(e){e.O(0,[774,888,179],(function(){return t=4613,e(e.s=t);var t}));var t=e.O();_N_E=t}]);