(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[875],{537:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/computer-science",function(){return r(6526)}])},834:function(e,t,r){"use strict";r.d(t,{p:function(){return c}});var n=r(5893);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){a(e,t,r[t])}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=function(e){var t=e.children,r=e.size,a=void 0===r?"5xl":r;return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("h1",{className:"flex flex-col text-primary-900 text-".concat(a," font-bold p-1"),children:t})})},c=function(e){var t=e.size,r=void 0===t?"3xl":t,a=i(e,["size"]);return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(l,o({size:r},a))})};t.Z=l},1641:function(e,t,r){"use strict";var n=r(5893),a=(r(7294),r(1664)),o=r(9008),i=function(e){var t=e.text,r=e.link;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.default,{href:"/"+r,children:(0,n.jsx)("a",{className:"mx-1 px-1",children:t})})," ","|"," "]})};t.Z=function(e){var t=e.children,r=e.title,a=void 0===r?"This is the default title":r;return(0,n.jsxs)("div",{className:"text-center flex flex-col w-full bg-primary-100 text-primary-800",children:[(0,n.jsxs)(o.default,{children:[(0,n.jsx)("title",{children:a}),(0,n.jsx)("meta",{charSet:"utf-8"}),(0,n.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"})]}),(0,n.jsx)("header",{className:"text-xl",children:(0,n.jsxs)("nav",{className:"px-1",children:[(0,n.jsx)(i,{link:"",text:"Home"}),(0,n.jsx)(i,{link:"blog",text:"Blog"}),(0,n.jsx)(i,{link:"projects",text:"My Projects"}),(0,n.jsx)(i,{link:"about",text:"About"}),(0,n.jsx)(i,{link:"computer-science",text:"Computer Science"}),(0,n.jsx)(i,{link:"math",text:"Mathematics"}),(0,n.jsx)(i,{link:"contact",text:"Contact me"})]})}),(0,n.jsx)("div",{className:"center bg-primary-200 mx-200 text-center min-h-screen p-3xl ",children:t}),(0,n.jsxs)("footer",{children:[(0,n.jsx)("hr",{}),(0,n.jsxs)("span",{children:["\u24b8 all rights reserved Atticus Kuhn ",(new Date).getFullYear()]})]})]})}},1159:function(e,t,r){"use strict";var n=r(5893),a=r(1664);r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){o(e,t,r[t])}))}return e}t.Z=function(e){return(0,n.jsx)(a.default,{href:e.href,children:(0,n.jsx)("a",i({},e,{className:"pop rounded bg-primary-300 p-1 m-1 hover:bg-primary-100",children:e.children}))})}},8418:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o=[],i=!0,l=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);i=!0);}catch(c){l=!0,a=c}finally{try{i||null==r.return||r.return()}finally{if(l)throw a}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=void 0;var o,i=(o=r(7294))&&o.__esModule?o:{default:o},l=r(6273),c=r(387),s=r(7190);var u={};function f(e,t,r,n){if(e&&l.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var a=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;u[t+"%"+r+(a?"%"+a:"")]=!0}}var d=function(e){var t,r=!1!==e.prefetch,n=c.useRouter(),o=i.default.useMemo((function(){var t=a(l.resolveHref(n,e.href,!0),2),r=t[0],o=t[1];return{href:r,as:e.as?l.resolveHref(n,e.as):o||r}}),[n,e.href,e.as]),d=o.href,h=o.as,p=e.children,m=e.replace,v=e.shallow,y=e.scroll,g=e.locale;"string"===typeof p&&(p=i.default.createElement("a",null,p));var x=(t=i.default.Children.only(p))&&"object"===typeof t&&t.ref,b=a(s.useIntersection({rootMargin:"200px"}),2),j=b[0],w=b[1],O=i.default.useCallback((function(e){j(e),x&&("function"===typeof x?x(e):"object"===typeof x&&(x.current=e))}),[x,j]);i.default.useEffect((function(){var e=w&&r&&l.isLocalURL(d),t="undefined"!==typeof g?g:n&&n.locale,a=u[d+"%"+h+(t?"%"+t:"")];e&&!a&&f(n,d,h,{locale:t})}),[h,d,w,g,r,n]);var k={ref:O,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,a,o,i,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(r))&&(e.preventDefault(),null==i&&n.indexOf("#")>=0&&(i=!1),t[a?"replace":"push"](r,n,{shallow:o,locale:c,scroll:i}))}(e,n,d,h,m,v,y,g)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),l.isLocalURL(d)&&f(n,d,h,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var I="undefined"!==typeof g?g:n&&n.locale,N=n&&n.isLocaleDomain&&l.getDomainLocale(h,I,n&&n.locales,n&&n.domainLocales);k.href=N||l.addBasePath(l.addLocale(h,I,n&&n.defaultLocale))}return i.default.cloneElement(t,k)};t.default=d},7190:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o=[],i=!0,l=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);i=!0);}catch(c){l=!0,a=c}finally{try{i||null==r.return||r.return()}finally{if(l)throw a}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,r=e.disabled||!l,n=o.useRef(),s=a(o.useState(!1),2),u=s[0],f=s[1],d=o.useCallback((function(e){n.current&&(n.current(),n.current=void 0),r||u||e&&e.tagName&&(n.current=function(e,t,r){var n=function(e){var t=e.rootMargin||"",r=c.get(t);if(r)return r;var n=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return c.set(t,r={id:t,observer:a,elements:n}),r}(r),a=n.id,o=n.observer,i=n.elements;return i.set(e,t),o.observe(e),function(){i.delete(e),o.unobserve(e),0===i.size&&(o.disconnect(),c.delete(a))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[r,t,u]);return o.useEffect((function(){if(!l&&!u){var e=i.requestIdleCallback((function(){return f(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[u]),[d,u]};var o=r(7294),i=r(9311),l="undefined"!==typeof IntersectionObserver;var c=new Map},6526:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return f}});var n=r(5893),a=r(7294),o=r(834),i=r(1641),l=r(1159);var c=Object.entries({javascript:"Javascript was the first language I learned, and it's still my favorite language. I like how I can use it on both the frontend and the backend.",python:"Python was a language that taught me how to write ergonomic and elegant code. I first entered data sicence and machine learning with python, and well written pyython code can read like english.",haskell:"haskell was my introduction to functional programming. It revealed to me how mathematmical programming could be.",imba:"Imba was a frontend language that inspired me to take more pride in frontend design.",php:"Php is a fun language which I love because of how easy it makes web development",idris:"Agda is a wonderful language which feels like a playground of mathematics. It perfectly synthesises the two disparate areas of theorem proving and programming into a cohesive and interactive experience.",react:"React was my first introduction to a javascript framework. It flipped my head on what I thought was possible using javascript, and led to an entire paradigm shift. ",typescript:"typescript added types to javascript, already my favorite language. The type system is very flexible, and even supports dependent types. I",prolog:"Prolog is a very elegant language that first taught me the meaning of declarative programming. Prolog programs simply express rules in a similar syntax to logic, which makes the meaning apparant. "}),s=function(){var e,t=(0,a.useState)(0),r=t[0],o=t[1];return(0,a.useEffect)((function(){var e=setInterval((function(){o((r+1)%c.length)}),3e3);return function(){return clearInterval(e)}}),[r]),(0,n.jsxs)("div",{children:[(0,n.jsx)("h2",{className:"text-3xl",children:"Technologies I've Used (and what I learned from each one)"}),(0,n.jsxs)("div",{className:"fl",children:[(0,n.jsx)("div",{className:"grid grid-rows-3 grid-flow-col gap-xl w-6/12 m-auto",children:c.map((function(e,t){return(0,n.jsx)("div",{className:"cursor-pointer\t bg-cover hover:bg-contain duration-1000 bg-primary-".concat(t===r?"100":"500"," m-auto"),children:(0,n.jsx)("img",{onClick:function(){return o(t)},className:" min-w-full mx-auto",src:"/images/techs/"+e[0]+".png"})},t)}))}),(0,n.jsxs)("div",{className:"w-full m-auto",children:[(0,n.jsx)("h1",{className:"font-bold text-4xl",children:(e=c[r][0],e.charAt(0).toUpperCase()+e.slice(1))}),(0,n.jsx)("div",{className:"w-full sm:p-xl p-base",children:c[r][1]})]})]})]})},u=function(){return(0,n.jsxs)("div",{children:[(0,n.jsx)(o.Z,{children:"I Teach Computer Science"}),(0,n.jsxs)("div",{className:"fl",children:[(0,n.jsxs)("div",{className:"m-xl",children:["Due to my love of computer science, I also enjoy teaching people computer science. For three years, I have been teaching eager students as a founding member of the ",(0,n.jsx)(l.Z,{href:"https://www.palypython.com",children:"Paly Python Club"}),". I have also made several ",(0,n.jsx)(l.Z,{href:"https://www.youtube.com/watch?v=G4ZOOrkdy3g",children:"educational youtube videos"})," in order to spread knowlege of computer science"]}),(0,n.jsx)("div",{className:"bg-cover",children:(0,n.jsx)("img",{src:"/images/workshop.jpg"})})]})]})},f=function(){return(0,n.jsxs)(i.Z,{children:[(0,n.jsx)(o.Z,{children:"My Love of Computer Science"}),(0,n.jsx)(s,{}),(0,n.jsx)(u,{})]})}},9008:function(e,t,r){e.exports=r(5443)},1664:function(e,t,r){e.exports=r(8418)}},function(e){e.O(0,[774,888,179],(function(){return t=537,e(e.s=t);var t}));var t=e.O();_N_E=t}]);