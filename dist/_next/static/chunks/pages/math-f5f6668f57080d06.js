(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[646],{4624:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/math",function(){return r(8410)}])},3344:function(e,t,r){"use strict";var n=r(5893),i=r(1664);r(7294);t.Z=function(e){return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(i.default,{href:e.link,children:(0,n.jsx)("a",{children:(0,n.jsxs)("div",{className:"p-sm m-base flex flex-col bg-primary-100 rounded m-lg pop max-w-xl min-h-full ",children:[(0,n.jsx)("img",{className:"p-sm mx-auto m-0 block sm:h-7/12 sm:w-7/12 h-full w-full",src:e.image}),(0,n.jsx)("div",{className:"font-bold",children:e.title}),(0,n.jsx)("div",{className:"text-primary-300 text-xs",children:e.description})]})})})})}},834:function(e,t,r){"use strict";r.d(t,{p:function(){return l}});var n=r(5893);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){i(e,t,r[t])}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=function(e){var t=e.children,r=e.size,i=void 0===r?"5xl":r;return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("h1",{className:"flex flex-col text-primary-900 text-".concat(i," font-bold p-1"),children:t})})},l=function(e){var t=e.size,r=void 0===t?"3xl":t,i=o(e,["size"]);return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(s,a({size:r},i))})};t.Z=s},1641:function(e,t,r){"use strict";var n=r(5893),i=(r(7294),r(1664)),a=function(e){var t=e.text,r=e.link;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.default,{href:"/"+r,children:(0,n.jsx)("a",{className:"mx-1 px-1",children:t})})," ","|"," "]})};t.Z=function(e){var t=e.children;return(0,n.jsxs)("div",{className:"text-center flex flex-col w-full bg-primary-100 text-primary-800",children:[(0,n.jsx)("header",{className:"text-xl",children:(0,n.jsxs)("nav",{className:"px-1",children:[(0,n.jsx)(a,{link:"",text:"Home"}),(0,n.jsx)(a,{link:"blog",text:"Blog"}),(0,n.jsx)(a,{link:"projects",text:"My Projects"}),(0,n.jsx)(a,{link:"about",text:"About"}),(0,n.jsx)(a,{link:"computer-science",text:"Computer Science"}),(0,n.jsx)(a,{link:"math",text:"Mathematics"}),(0,n.jsx)(a,{link:"contact",text:"Contact me"})]})}),(0,n.jsx)("div",{className:"center bg-primary-200 mx-200 text-center min-h-screen p-3xl ",children:t}),(0,n.jsxs)("footer",{children:[(0,n.jsx)("hr",{}),(0,n.jsxs)("span",{children:["\u24b8 all rights reserved Atticus Kuhn ",(new Date).getFullYear()]})]})]})}},1159:function(e,t,r){"use strict";var n=r(5893),i=r(1664);r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){a(e,t,r[t])}))}return e}t.Z=function(e){return(0,n.jsx)(i.default,{href:e.href,children:(0,n.jsx)("a",o({},e,{className:"pop rounded bg-primary-300 p-1 m-1 hover:bg-primary-100",children:e.children}))})}},8418:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,i,a=[],o=!0,s=!1;try{for(r=r.call(e);!(o=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);o=!0);}catch(l){s=!0,i=l}finally{try{o||null==r.return||r.return()}finally{if(s)throw i}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=void 0;var a,o=(a=r(7294))&&a.__esModule?a:{default:a},s=r(6273),l=r(387),c=r(7190);var u={};function f(e,t,r,n){if(e&&s.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var i=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;u[t+"%"+r+(i?"%"+i:"")]=!0}}var p=function(e){var t,r=!1!==e.prefetch,n=l.useRouter(),a=o.default.useMemo((function(){var t=i(s.resolveHref(n,e.href,!0),2),r=t[0],a=t[1];return{href:r,as:e.as?s.resolveHref(n,e.as):a||r}}),[n,e.href,e.as]),p=a.href,m=a.as,d=e.children,h=e.replace,g=e.shallow,y=e.scroll,b=e.locale;"string"===typeof d&&(d=o.default.createElement("a",null,d));var x=(t=o.default.Children.only(d))&&"object"===typeof t&&t.ref,v=i(c.useIntersection({rootMargin:"200px"}),2),j=v[0],w=v[1],O=o.default.useCallback((function(e){j(e),x&&("function"===typeof x?x(e):"object"===typeof x&&(x.current=e))}),[x,j]);o.default.useEffect((function(){var e=w&&r&&s.isLocalURL(p),t="undefined"!==typeof b?b:n&&n.locale,i=u[p+"%"+m+(t?"%"+t:"")];e&&!i&&f(n,p,m,{locale:t})}),[m,p,w,b,r,n]);var k={ref:O,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,i,a,o,l){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&s.isLocalURL(r))&&(e.preventDefault(),null==o&&n.indexOf("#")>=0&&(o=!1),t[i?"replace":"push"](r,n,{shallow:a,locale:l,scroll:o}))}(e,n,p,m,h,g,y,b)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),s.isLocalURL(p)&&f(n,p,m,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var A="undefined"!==typeof b?b:n&&n.locale,C=n&&n.isLocaleDomain&&s.getDomainLocale(m,A,n&&n.locales,n&&n.domainLocales);k.href=C||s.addBasePath(s.addLocale(m,A,n&&n.defaultLocale))}return o.default.cloneElement(t,k)};t.default=p},7190:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,i,a=[],o=!0,s=!1;try{for(r=r.call(e);!(o=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);o=!0);}catch(l){s=!0,i=l}finally{try{o||null==r.return||r.return()}finally{if(s)throw i}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,r=e.disabled||!s,n=a.useRef(),c=i(a.useState(!1),2),u=c[0],f=c[1],p=a.useCallback((function(e){n.current&&(n.current(),n.current=void 0),r||u||e&&e.tagName&&(n.current=function(e,t,r){var n=function(e){var t=e.rootMargin||"",r=l.get(t);if(r)return r;var n=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return l.set(t,r={id:t,observer:i,elements:n}),r}(r),i=n.id,a=n.observer,o=n.elements;return o.set(e,t),a.observe(e),function(){o.delete(e),a.unobserve(e),0===o.size&&(a.disconnect(),l.delete(i))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[r,t,u]);return a.useEffect((function(){if(!s&&!u){var e=o.requestIdleCallback((function(){return f(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[u]),[p,u]};var a=r(7294),o=r(9311),s="undefined"!==typeof IntersectionObserver;var l=new Map},8410:function(e,t,r){"use strict";r.r(t);var n=r(5893),i=r(2962),a=(r(7294),r(3344)),o=r(834),s=r(1641),l=r(1159);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var u=[{image:"/images/fsm.png",description:"on Automata Theory, Generating Functions, and Finite State Machines",link:"/papers/atticus-automata.pdf",title:"Automata Thoery"},{image:"/images/Matris.png",description:"Applications of the Perron Frobenius Theorem",link:"/papers/atticus-perronfrobenius.pdf",title:"Perron Frobenius Theorem"},{image:"/images/main.webp",description:"Error correcting codes as they are used, and on their derivations",link:"/papers/atticus-codes.pdf",title:"Error Correcting Codes"},{image:"/images/cube.jpg",description:"A new kind of geometry, and how constructions work in it.",link:"/papers/atticus-projective.pdf",title:"Real Projective Geometry"},{image:"/images/bool.png",description:"An introduction to Boolean Algrebras and the Stone Theorem.",link:"/papers/atticus-boolalgs.pdf",title:"Boolean Algebras"},{image:"/images/img_355.jpg",description:"How continued fractions are used in irrationality proofs",link:"/papers/atticus-contfrac.pdf",title:"Continued Fractions"},{image:"/images/Elliptic-Curve-Cryptography.png",description:"The application of ellpiptic curves to cryptography (ECC)",link:"/papers/atticus-ec.pdf",title:"Elliptic Curves In Cryptography"},{image:"/images/maxresdefault.jpg",description:"What is the impact of the most famous conjecture: the Riemann Hypothesis",link:"/papers/atticus-rh.pdf",title:"Consequences of the Riemann Hypothesis"}],f=function(e){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.p,{size:"lg",children:e.title}),(0,n.jsx)("div",{className:"fl my-lg",children:e.left?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("img",{className:"sm:h-4/12 sm:w-4/12 h-full w-full",src:e.image}),(0,n.jsx)("div",{className:"p-xl",children:e.text})]}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"p-xl",children:e.text}),(0,n.jsx)("img",{className:"sm:h-4/12 sm:w-4/12 h-full w-full",src:e.image})]})})]})};t.default=function(){return(0,n.jsxs)(s.Z,{children:[(0,n.jsx)(i.PB,{title:"math",description:"I love math"}),(0,n.jsx)(o.Z,{children:"Math: my Biggest Passion"}),(0,n.jsx)("div",{children:"For many years, I haev been passionate about mathematics. I have entered into some math competetions, and I study math outside of school. What I love most about it is it's intriguing and wonderful nature"}),(0,n.jsx)(o.p,{children:"My Favorite Areas of Math"}),(0,n.jsx)(f,{title:"Complex Analysis",image:"/images/complex-analysis.png",text:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.Z,{href:"TODO",children:"Complex analysis is one of my favorite areas of mathematics"})," . It is truly beautiful and wonderfully marries complex numbers with calculus. So many of the theorems of real analysis gain new light in complex analysis"]})}),(0,n.jsx)(f,{title:"Type Theory",image:"/images/type-theory.png",text:(0,n.jsxs)(n.Fragment,{children:["Type theory solidified my understanding of the relationship between computers and mathematics, and how mathematics can directly be applied to computer science. By having computers ",(0,n.jsx)(l.Z,{href:"/blog/pftb",children:" execute proofs using type theory"}),", I gained a new appreciation for rigor of proofs"]}),left:!0}),(0,n.jsx)(f,{title:"Abstract Algebra",image:"/images/a2_graph.png",text:"Abstract Algebra demonstrated to me that mathematics is all about abstraction. I now see groups everywhere, from vectors to the complex numbers, and I feel I can now look at the world of mathematics through new sunglasses, of seeing everything in the lens of a group."}),(0,n.jsx)(o.p,{children:" Read My Papers"}),(0,n.jsx)("div",{className:"grid grid-cols-4 gap-4",children:u.map((function(e){return(0,n.jsx)(a.Z,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){c(e,t,r[t])}))}return e}({},e))}))})]})}},1664:function(e,t,r){e.exports=r(8418)}},function(e){e.O(0,[774,888,179],(function(){return t=4624,e(e.s=t);var t}));var t=e.O();_N_E=t}]);