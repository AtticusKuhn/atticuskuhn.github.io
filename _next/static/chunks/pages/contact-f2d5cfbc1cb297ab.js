(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[335],{3038:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contact",function(){return n(5210)}])},570:function(e,t,n){"use strict";var r=n(5893),i=n(1664);n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}t.Z=function(e){var t=function(e){return"bg-button w-fit p-3 rounded m-2 text-center text-primary-300 duration-75 ".concat(e," disabled:hover:bg-parimary-200 disabled:cursor-not-allowed")};return"link"in e?(0,r.jsx)(i.default,{href:e.link,children:(0,r.jsx)("a",a({},e,{className:t(e.className+" pop"),children:e.children}))}):(0,r.jsx)("button",a({},e,{className:t(e.className+" duration-200 hover:bg-primary-700"),onClick:e.onClickFunc,children:e.children}))}},834:function(e,t,n){"use strict";n.d(t,{p:function(){return l}});var r=n(5893);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){i(e,t,n[t])}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=function(e){var t=e.children,n=e.size,i=void 0===n?"4xl":n;return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("h1",{className:"flex flex-col text-primary-900 text-".concat(i," font-bold p-1"),children:t})})},l=function(e){var t=e.size,n=void 0===t?"xl":t,i=a(e,["size"]);return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(c,o({size:n},i))})};t.Z=c},1641:function(e,t,n){"use strict";var r=n(5893),i=n(7294),o=n(1664),a=n(570),c=n(1159),l=function(e){var t=e.text,n=e.link;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.default,{href:"/"+n,children:(0,r.jsx)("a",{className:"mx-1 px-1",children:t})})," ","|"," "]})},u=function(){return(0,r.jsxs)("footer",{children:[(0,r.jsx)("hr",{}),(0,r.jsxs)("span",{children:[(0,r.jsx)(c.Z,{href:"/rss.xml",children:"RSS feed"})," |",(0,r.jsx)(c.Z,{href:"/atom.xml",children:"atom feed"})," |",(0,r.jsx)(c.Z,{href:"/rss.json",children:"JSON feed"})," | MIT License ",(0,r.jsx)(c.Z,{href:"https://atticuskuhn.github.io",children:"Atticus Kuhn"})," ",(new Date).getFullYear()]})]})};t.Z=function(e){var t=e.children,n=(0,i.useState)("light"),o=n[0],c=n[1];(0,i.useEffect)((function(){var e=localStorage.getItem("mode");e&&c(e)}),[]);return(0,r.jsx)("div",{className:o,children:(0,r.jsxs)("div",{className:"text-center flex flex-col w-full  bg-primary-100 text-primary-800",children:[(0,r.jsx)("header",{className:"text-xl",children:(0,r.jsxs)("nav",{className:"px-1",children:[(0,r.jsx)(l,{link:"",text:"Home"}),(0,r.jsx)(l,{link:"blog",text:"Blog"}),(0,r.jsx)(l,{link:"projects",text:"My Projects"}),(0,r.jsx)(l,{link:"about",text:"About"}),(0,r.jsx)(l,{link:"computer-science",text:"Computer Science"}),(0,r.jsx)(l,{link:"math",text:"Mathematics"}),(0,r.jsx)(l,{link:"contact",text:"Contact me"}),(0,r.jsx)(a.Z,{onClickFunc:function(){var e="dark"===o?"light":"dark";c(e),localStorage.setItem("mode",e)},children:o})]})}),(0,r.jsx)("div",{className:"center bg-primary-200 mx-200 text-center min-h-screen p-3xl ",children:t}),(0,r.jsx)(u,{})]})})}},1159:function(e,t,n){"use strict";var r=n(5893),i=n(1664);n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}t.Z=function(e){return(0,r.jsx)(i.default,{href:e.href,children:(0,r.jsx)("a",a({},e,{className:"pop rounded bg-primary-300 p-1 m-1 hover:bg-primary-100",children:e.children}))})}},8418:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);a=!0);}catch(l){c=!0,i=l}finally{try{a||null==n.return||n.return()}finally{if(c)throw i}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=void 0;var o,a=(o=n(7294))&&o.__esModule?o:{default:o},c=n(6273),l=n(387),u=n(7190);var s={};function f(e,t,n,r){if(e&&c.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var i=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;s[t+"%"+n+(i?"%"+i:"")]=!0}}var d=function(e){var t,n=!1!==e.prefetch,r=l.useRouter(),o=a.default.useMemo((function(){var t=i(c.resolveHref(r,e.href,!0),2),n=t[0],o=t[1];return{href:n,as:e.as?c.resolveHref(r,e.as):o||n}}),[r,e.href,e.as]),d=o.href,m=o.as,p=e.children,h=e.replace,y=e.shallow,b=e.scroll,v=e.locale;"string"===typeof p&&(p=a.default.createElement("a",null,p));var g=(t=a.default.Children.only(p))&&"object"===typeof t&&t.ref,x=i(u.useIntersection({rootMargin:"200px"}),2),j=x[0],w=x[1],k=a.default.useCallback((function(e){j(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,j]);a.default.useEffect((function(){var e=w&&n&&c.isLocalURL(d),t="undefined"!==typeof v?v:r&&r.locale,i=s[d+"%"+m+(t?"%"+t:"")];e&&!i&&f(r,d,m,{locale:t})}),[m,d,w,v,n,r]);var O={ref:k,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,i,o,a,l){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&c.isLocalURL(n))&&(e.preventDefault(),null==a&&r.indexOf("#")>=0&&(a=!1),t[i?"replace":"push"](n,r,{shallow:o,locale:l,scroll:a}))}(e,r,d,m,h,y,b,v)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),c.isLocalURL(d)&&f(r,d,m,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var S="undefined"!==typeof v?v:r&&r.locale,N=r&&r.isLocaleDomain&&c.getDomainLocale(m,S,r&&r.locales,r&&r.domainLocales);O.href=N||c.addBasePath(c.addLocale(m,S,r&&r.defaultLocale))}return a.default.cloneElement(t,O)};t.default=d},7190:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);a=!0);}catch(l){c=!0,i=l}finally{try{a||null==n.return||n.return()}finally{if(c)throw i}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!c,r=o.useRef(),u=i(o.useState(!1),2),s=u[0],f=u[1],d=o.useCallback((function(e){r.current&&(r.current(),r.current=void 0),n||s||e&&e.tagName&&(r.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=l.get(t);if(n)return n;var r=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return l.set(t,n={id:t,observer:i,elements:r}),n}(n),i=r.id,o=r.observer,a=r.elements;return a.set(e,t),o.observe(e),function(){a.delete(e),o.unobserve(e),0===a.size&&(o.disconnect(),l.delete(i))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[n,t,s]);return o.useEffect((function(){if(!c&&!s){var e=a.requestIdleCallback((function(){return f(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[s]),[d,s]};var o=n(7294),a=n(9311),c="undefined"!==typeof IntersectionObserver;var l=new Map},5210:function(e,t,n){"use strict";n.r(t);var r=n(5893),i=n(2962),o=n(1664),a=(n(7294),n(834)),c=n(1641),l=function(e){var t=e.name,n=e.image,i=e.link,a=e.pf;return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"bg-primary-100 rounded p-sm m-sm fl w-6/12 mx-auto",children:[(0,r.jsx)(o.default,{href:i,children:(0,r.jsx)("a",{className:"bg-primary-100 pop w-full h-6/12 p-3xl sm:w-3/12 sm:h-3/12 mx-auto sm:mx-sm",children:(0,r.jsx)("img",{className:"w-full h-6/12 inline-block",src:n})})}),(0,r.jsxs)("div",{className:"m-auto",children:[a,": ",t]})]})})};t.default=function(){return(0,r.jsxs)(c.Z,{children:[(0,r.jsx)(i.PB,{title:"contact me",description:"I want to get in touch with you"}),(0,r.jsx)(a.Z,{children:"Let's get in touch"}),(0,r.jsx)("p",{children:"Feel free to reach out to me for any programming, or mathematical enquiries"}),(0,r.jsxs)("div",{children:[(0,r.jsx)(l,{image:"/images/linkedin.png",pf:"LinkedIn",link:"https://www.linkedin.com/in/atticus-kuhn-a15170230/",name:"Atticus Kuhn"}),(0,r.jsx)(l,{image:"/images/github.png",pf:"Github",link:"https://github.com/AtticusKuhn",name:"AtticusKuhn"}),(0,r.jsx)(l,{image:"/images/repl.png",pf:"Repl",link:"https://replit.com/@AtticusKuhn",name:"@AtticusKuhn"}),(0,r.jsx)(l,{image:"/images/mail-512.png",pf:"Email",link:"mailto:atticusmkuhn@gmail.com",name:"atticusmkuhn@gmail.com"})]})]})}},1664:function(e,t,n){e.exports=n(8418)}},function(e){e.O(0,[774,888,179],(function(){return t=3038,e(e.s=t);var t}));var t=e.O();_N_E=t}]);