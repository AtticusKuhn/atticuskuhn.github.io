(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[647],{6438:function(e,s,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/resume",function(){return r(1665)}])},834:function(e,s,r){"use strict";r.d(s,{p:function(){return a}});var n=r(5893);function t(e,s,r){return s in e?Object.defineProperty(e,s,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[s]=r,e}function i(e){for(var s=1;s<arguments.length;s++){var r=null!=arguments[s]?arguments[s]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(s){t(e,s,r[s])}))}return e}function l(e,s){if(null==e)return{};var r,n,t=function(e,s){if(null==e)return{};var r,n,t={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],s.indexOf(r)>=0||(t[r]=e[r]);return t}(e,s);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],s.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var c=function(e){var s=e.children,r=e.size,t=void 0===r?"5xl":r;return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("h1",{className:"flex flex-col text-primary-900 text-".concat(t," font-bold p-1"),children:s})})},a=function(e){var s=e.size,r=void 0===s?"3xl":s,t=l(e,["size"]);return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(c,i({size:r},t))})};s.Z=c},1641:function(e,s,r){"use strict";var n=r(5893),t=(r(7294),r(1664)),i=function(e){var s=e.text,r=e.link;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.default,{href:"/"+r,children:(0,n.jsx)("a",{className:"mx-1 px-1",children:s})})," ","|"," "]})};s.Z=function(e){var s=e.children;return(0,n.jsxs)("div",{className:"text-center flex flex-col w-full bg-primary-100 text-primary-800",children:[(0,n.jsx)("header",{className:"text-xl",children:(0,n.jsxs)("nav",{className:"px-1",children:[(0,n.jsx)(i,{link:"",text:"Home"}),(0,n.jsx)(i,{link:"blog",text:"Blog"}),(0,n.jsx)(i,{link:"projects",text:"My Projects"}),(0,n.jsx)(i,{link:"about",text:"About"}),(0,n.jsx)(i,{link:"computer-science",text:"Computer Science"}),(0,n.jsx)(i,{link:"math",text:"Mathematics"}),(0,n.jsx)(i,{link:"contact",text:"Contact me"})]})}),(0,n.jsx)("div",{className:"center bg-primary-200 mx-200 text-center min-h-screen p-3xl ",children:s}),(0,n.jsxs)("footer",{children:[(0,n.jsx)("hr",{}),(0,n.jsxs)("span",{children:["\u24b8 all rights reserved Atticus Kuhn ",(new Date).getFullYear()]})]})]})}},8418:function(e,s,r){"use strict";function n(e,s){(null==s||s>e.length)&&(s=e.length);for(var r=0,n=new Array(s);r<s;r++)n[r]=e[r];return n}function t(e,s){return function(e){if(Array.isArray(e))return e}(e)||function(e,s){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,t,i=[],l=!0,c=!1;try{for(r=r.call(e);!(l=(n=r.next()).done)&&(i.push(n.value),!s||i.length!==s);l=!0);}catch(a){c=!0,t=a}finally{try{l||null==r.return||r.return()}finally{if(c)throw t}}return i}}(e,s)||function(e,s){if(!e)return;if("string"===typeof e)return n(e,s);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,s)}(e,s)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}s.default=void 0;var i,l=(i=r(7294))&&i.__esModule?i:{default:i},c=r(6273),a=r(387),o=r(7190);var h={};function d(e,s,r,n){if(e&&c.isLocalURL(s)){e.prefetch(s,r,n).catch((function(e){0}));var t=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;h[s+"%"+r+(t?"%"+t:"")]=!0}}var u=function(e){var s,r=!1!==e.prefetch,n=a.useRouter(),i=l.default.useMemo((function(){var s=t(c.resolveHref(n,e.href,!0),2),r=s[0],i=s[1];return{href:r,as:e.as?c.resolveHref(n,e.as):i||r}}),[n,e.href,e.as]),u=i.href,p=i.as,x=e.children,j=e.replace,f=e.shallow,m=e.scroll,w=e.locale;"string"===typeof x&&(x=l.default.createElement("a",null,x));var g=(s=l.default.Children.only(x))&&"object"===typeof s&&s.ref,y=t(o.useIntersection({rootMargin:"200px"}),2),v=y[0],A=y[1],b=l.default.useCallback((function(e){v(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,v]);l.default.useEffect((function(){var e=A&&r&&c.isLocalURL(u),s="undefined"!==typeof w?w:n&&n.locale,t=h[u+"%"+p+(s?"%"+s:"")];e&&!t&&d(n,u,p,{locale:s})}),[p,u,A,w,r,n]);var O={ref:b,onClick:function(e){s.props&&"function"===typeof s.props.onClick&&s.props.onClick(e),e.defaultPrevented||function(e,s,r,n,t,i,l,a){("A"!==e.currentTarget.nodeName||!function(e){var s=e.currentTarget.target;return s&&"_self"!==s||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&c.isLocalURL(r))&&(e.preventDefault(),null==l&&n.indexOf("#")>=0&&(l=!1),s[t?"replace":"push"](r,n,{shallow:i,locale:a,scroll:l}))}(e,n,u,p,j,f,m,w)},onMouseEnter:function(e){s.props&&"function"===typeof s.props.onMouseEnter&&s.props.onMouseEnter(e),c.isLocalURL(u)&&d(n,u,p,{priority:!0})}};if(e.passHref||"a"===s.type&&!("href"in s.props)){var C="undefined"!==typeof w?w:n&&n.locale,D=n&&n.isLocaleDomain&&c.getDomainLocale(p,C,n&&n.locales,n&&n.domainLocales);O.href=D||c.addBasePath(c.addLocale(p,C,n&&n.defaultLocale))}return l.default.cloneElement(s,O)};s.default=u},7190:function(e,s,r){"use strict";function n(e,s){(null==s||s>e.length)&&(s=e.length);for(var r=0,n=new Array(s);r<s;r++)n[r]=e[r];return n}function t(e,s){return function(e){if(Array.isArray(e))return e}(e)||function(e,s){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,t,i=[],l=!0,c=!1;try{for(r=r.call(e);!(l=(n=r.next()).done)&&(i.push(n.value),!s||i.length!==s);l=!0);}catch(a){c=!0,t=a}finally{try{l||null==r.return||r.return()}finally{if(c)throw t}}return i}}(e,s)||function(e,s){if(!e)return;if("string"===typeof e)return n(e,s);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,s)}(e,s)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(s,"__esModule",{value:!0}),s.useIntersection=function(e){var s=e.rootMargin,r=e.disabled||!c,n=i.useRef(),o=t(i.useState(!1),2),h=o[0],d=o[1],u=i.useCallback((function(e){n.current&&(n.current(),n.current=void 0),r||h||e&&e.tagName&&(n.current=function(e,s,r){var n=function(e){var s=e.rootMargin||"",r=a.get(s);if(r)return r;var n=new Map,t=new IntersectionObserver((function(e){e.forEach((function(e){var s=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;s&&r&&s(r)}))}),e);return a.set(s,r={id:s,observer:t,elements:n}),r}(r),t=n.id,i=n.observer,l=n.elements;return l.set(e,s),i.observe(e),function(){l.delete(e),i.unobserve(e),0===l.size&&(i.disconnect(),a.delete(t))}}(e,(function(e){return e&&d(e)}),{rootMargin:s}))}),[r,s,h]);return i.useEffect((function(){if(!c&&!h){var e=l.requestIdleCallback((function(){return d(!0)}));return function(){return l.cancelIdleCallback(e)}}}),[h]),[u,h]};var i=r(7294),l=r(9311),c="undefined"!==typeof IntersectionObserver;var a=new Map},1665:function(e,s,r){"use strict";r.r(s);var n=r(5893),t=r(2962),i=(r(7294),r(834)),l=r(1641);s.default=function(){return(0,n.jsxs)(l.Z,{children:[(0,n.jsx)(t.PB,{title:"my resum\xe9",description:"my greatest accomplisments summarized"}),(0,n.jsx)(i.Z,{children:"My Resume"}),(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{children:(0,n.jsx)("p",{children:(0,n.jsx)("span",{})})}),(0,n.jsx)("p",{children:(0,n.jsx)("span",{children:"A T T I C U S \xa0 M. \xa0K U H N"})}),(0,n.jsxs)("p",{children:[(0,n.jsx)("span",{children:"\xa0 \xa0 \xa0 \xa0 "}),(0,n.jsx)("span",{children:"Palo Alto, CA 94301 \xa0 \xa0 \xa0 \xa0 \xa0 650.223.1945 \xa0 \xa0 \xa0 "}),(0,n.jsx)("span",{children:(0,n.jsx)("a",{href:"mailto:eulerthedestoyer@gmail.com",children:"eulerthedestoyer@gmail.com"})})]}),(0,n.jsx)("p",{children:(0,n.jsx)("span",{})}),(0,n.jsxs)("h2",{children:[(0,n.jsx)("span",{children:"EDUCATION"}),(0,n.jsx)("span",{children:"\xa0"})]}),(0,n.jsx)("p",{children:(0,n.jsx)("span",{})}),(0,n.jsxs)("p",{children:[(0,n.jsx)("span",{children:(0,n.jsx)("a",{href:"https://www.google.com/url?q=https://www.paly.net/&sa=D&source=editors&ust=1642612856520531&usg=AOvVaw3D9gH_PFrHORJIVCk_1y8R",children:"Palo Alto High School"})}),(0,n.jsx)("span",{children:", Palo Alto, CA - Junior (Age 17)"}),(0,n.jsx)("span",{children:"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"}),(0,n.jsx)("span",{children:"Graduate"}),(0,n.jsx)("span",{children:"\xa0"}),(0,n.jsx)("span",{children:"2023 "})]}),(0,n.jsxs)("ul",{children:[(0,n.jsxs)("li",{children:[(0,n.jsx)("span",{children:"GPA "}),(0,n.jsx)("span",{children:"4.2"}),(0,n.jsx)("span",{children:"\xa0(current)"})]}),(0,n.jsx)("li",{children:(0,n.jsx)("span",{children:"4 AP Classes (Chemistry, Math, English, French)"})}),(0,n.jsx)("li",{children:(0,n.jsx)("span",{children:"SAT - 1560 / PSAT - 1490"})})]}),(0,n.jsx)("p",{children:(0,n.jsx)("span",{})}),(0,n.jsx)("p",{children:(0,n.jsx)("span",{children:"College-Level Courses"})}),(0,n.jsx)("p",{children:(0,n.jsx)("span",{})}),(0,n.jsxs)("p",{children:[(0,n.jsx)("span",{children:(0,n.jsx)("a",{href:"https://www.google.com/url?q=https://collegeofsanmateo.edu/&sa=D&source=editors&ust=1642612856522678&usg=AOvVaw1LsonIW113TLq550tla7CR",children:"College of San Mateo, CA"})}),(0,n.jsx)("span",{children:"\xa0"})]}),(0,n.jsxs)("ul",{children:[(0,n.jsxs)("li",{children:[(0,n.jsx)("span",{children:"Macroeconomics - "}),(0,n.jsx)("span",{children:"Grade A"}),(0,n.jsx)("span",{children:"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"}),(0,n.jsx)("span",{children:"Summer 2021"})]}),(0,n.jsxs)("li",{children:[(0,n.jsx)("span",{children:"Microeconomics - "}),(0,n.jsx)("span",{children:"Grade A-"}),(0,n.jsx)("span",{children:"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"}),(0,n.jsx)("span",{children:"Summer 2020"})]})]}),(0,n.jsx)("p",{children:(0,n.jsx)("span",{})}),(0,n.jsxs)("p",{children:[(0,n.jsx)("span",{children:(0,n.jsx)("a",{href:"https://www.google.com/url?q=https://eulercircle.com/&sa=D&source=editors&ust=1642612856524402&usg=AOvVaw264D5drQHjbFqAmrCSPSku",children:"Euler Math Circl"})}),(0,n.jsx)("span",{children:"e Papers"}),(0,n.jsx)("span",{children:"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"}),(0,n.jsx)("span",{children:"2019 - today"})]}),(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:(0,n.jsx)("span",{children:(0,n.jsx)("a",{href:"https://www.google.com/url?q=http://simonrs.com/eulercircle/genfuns/atticus-automata.pdf&sa=D&source=editors&ust=1642612856525147&usg=AOvVaw3K1P_DH3v8YtG4_ec3Z3je",children:"Automata Theory & Generating Functions"})})}),(0,n.jsx)("li",{children:(0,n.jsx)("span",{children:(0,n.jsx)("a",{href:"https://www.google.com/url?q=http://simonrs.com/eulercircle/markovchains/atticus-perronfrobenius.pdf&sa=D&source=editors&ust=1642612856525701&usg=AOvVaw2jd_JIDPVSjHFVDozYFcyM",children:"Perron Frobenius Theorem"})})}),(0,n.jsx)("li",{children:(0,n.jsx)("span",{children:(0,n.jsx)("a",{href:"https://www.google.com/url?q=http://simonrs.com/eulercircle/pftb2020/atticus-codes.pdf&sa=D&source=editors&ust=1642612856526259&usg=AOvVaw2W_zncTVOxCfIAEOLU5ciy",children:"Error Correcting Codes"})})}),(0,n.jsx)("li",{children:(0,n.jsx)("span",{children:(0,n.jsx)("a",{href:"https://www.google.com/url?q=http://simonrs.com/eulercircle/rtag2020/atticus-projective.pdf&sa=D&source=editors&ust=1642612856526684&usg=AOvVaw2UY7K3uCqGOlMSA4xg9gN_",children:"Real Projective Geometry"})})}),(0,n.jsx)("li",{children:(0,n.jsx)("span",{children:(0,n.jsx)("a",{href:"https://www.google.com/url?q=http://simonrs.com/eulercircle/algebra2020/atticus-boolalgs.pdf&sa=D&source=editors&ust=1642612856527083&usg=AOvVaw30tG0Ix_dOz-B2LExAbOeE",children:"Boolean Algebra"})})}),(0,n.jsx)("li",{children:(0,n.jsx)("span",{children:(0,n.jsx)("a",{href:"https://www.google.com/url?q=http://simonrs.com/eulercircle/infiniteseries/atticus-contfrac.pdf&sa=D&source=editors&ust=1642612856527507&usg=AOvVaw3yhcLuWYMgM_MN2I_NHUQ2",children:"Infinite Series Continued Fractions"})})}),(0,n.jsx)("li",{children:(0,n.jsx)("span",{children:(0,n.jsx)("a",{href:"https://www.google.com/url?q=http://simonrs.com/eulercircle/crypto2019/atticus-ec.pdf&sa=D&source=editors&ust=1642612856527901&usg=AOvVaw2_qAn4f7ftKXNpIZ1v01Ew",children:"Elliptic Curves in Cryptography"})})}),(0,n.jsx)("li",{children:(0,n.jsx)("span",{children:(0,n.jsx)("a",{href:"https://www.google.com/url?q=http://simonrs.com/eulercircle/complexanalysis2021/atticus-rh.pdf&sa=D&source=editors&ust=1642612856528335&usg=AOvVaw3n9c9GMcBFFued3nCjwHV4",children:"Consequences of the Riemann Hypothesis"})})}),(0,n.jsx)("li",{children:(0,n.jsx)("span",{children:"Combinatorics Hyperplane Arrangements"})})]}),(0,n.jsx)("p",{children:(0,n.jsx)("span",{})}),(0,n.jsx)("p",{children:(0,n.jsx)("span",{children:"Competitions"})}),(0,n.jsx)("p",{children:(0,n.jsx)("span",{})}),(0,n.jsx)("p",{children:(0,n.jsx)("span",{children:(0,n.jsx)("a",{href:"https://www.google.com/url?q=https://www.maa.org/math-competitions/about-amc&sa=D&source=editors&ust=1642612856529400&usg=AOvVaw3d1dGf2ThgXu-FIiHJFhYO",children:"American Mathematics Competition"})})}),(0,n.jsxs)("ul",{children:[(0,n.jsxs)("li",{children:[(0,n.jsx)("span",{children:"Participated in American Invitational Mathematics Exam (AIME)\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"}),(0,n.jsx)("span",{children:"2021"})]}),(0,n.jsxs)("li",{children:[(0,n.jsx)("span",{children:"AMC 12 - Honor Roll ("}),(0,n.jsx)("span",{children:"Top 5%"}),(0,n.jsx)("span",{children:")\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"}),(0,n.jsx)("span",{children:"2020"})]}),(0,n.jsxs)("li",{children:[(0,n.jsx)("span",{children:"AMC 8 - Honor Roll ("}),(0,n.jsx)("span",{children:"Top 5%"}),(0,n.jsx)("span",{children:")\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"}),(0,n.jsx)("span",{children:"2018"})]})]}),(0,n.jsx)("p",{children:(0,n.jsx)("span",{})}),(0,n.jsxs)("p",{children:[(0,n.jsx)("span",{children:(0,n.jsx)("a",{href:"https://www.google.com/url?q=https://www.soinc.org/&sa=D&source=editors&ust=1642612856531024&usg=AOvVaw1j1P5046y6WOfo9-_zkZfa",children:"Science Olympiad Team"})}),(0,n.jsx)("span",{children:"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"}),(0,n.jsx)("span",{children:"2016 - today"})]}),(0,n.jsx)("ul",{children:(0,n.jsx)("li",{children:(0,n.jsx)("span",{children:"Represented school at Middle & High School Level"})})}),(0,n.jsx)("ul",{children:(0,n.jsx)("li",{children:(0,n.jsx)("span",{children:"Thermodynamics, Chemistry, Astronomy"})})}),(0,n.jsx)("p",{children:(0,n.jsx)("span",{})}),(0,n.jsxs)("p",{children:[(0,n.jsx)("span",{children:(0,n.jsx)("a",{href:"https://www.google.com/url?q=https://science.osti.gov/wdts/nsb%23:~:text%3DThe%2520U.S.%2520Department%2520of%2520Energy,areas%2520of%2520science%2520and%2520mathematics.&sa=D&source=editors&ust=1642612856532318&usg=AOvVaw1NSEYWATKLvgs_8Zz7NDkt",children:"Science Bowl Team"})}),(0,n.jsx)("span",{children:"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"}),(0,n.jsx)("span",{children:"2016 - today"})]}),(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:(0,n.jsx)("span",{children:"Captain, Middle School Team"})}),(0,n.jsxs)("li",{children:[(0,n.jsx)("span",{children:"High School "}),(0,n.jsx)("span",{children:"(reached quarter finals?)"})]})]}),(0,n.jsx)("p",{children:(0,n.jsx)("span",{children:"\xa0 "})}),(0,n.jsx)("p",{children:(0,n.jsx)("span",{children:(0,n.jsx)("a",{href:"https://www.google.com/url?q=https://www.historybowl.com/&sa=D&source=editors&ust=1642612856533608&usg=AOvVaw3_vw8uPAA-UilVdpC2Uhyq",children:"National History Bowl"})})}),(0,n.jsxs)("ul",{children:[(0,n.jsxs)("li",{children:[(0,n.jsx)("span",{children:"Team member High School, level reached\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"}),(0,n.jsx)("span",{children:"2021"})]}),(0,n.jsxs)("li",{children:[(0,n.jsx)("span",{children:"Team member High School, runners up\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"}),(0,n.jsx)("span",{children:"2020"})]})]}),(0,n.jsx)("p",{children:(0,n.jsx)("span",{})}),(0,n.jsx)("p",{children:(0,n.jsx)("span",{})}),(0,n.jsx)("p",{children:(0,n.jsx)("span",{children:"Academic Enrichment"})}),(0,n.jsx)("p",{children:(0,n.jsx)("span",{})}),(0,n.jsxs)("p",{children:[(0,n.jsx)("span",{children:(0,n.jsx)("a",{href:"https://www.google.com/url?q=https://alphastar.academy/&sa=D&source=editors&ust=1642612856534915&usg=AOvVaw1AEHEuxqplu_Hun42h8OdA",children:"Alphastar Summer Math Academy"})}),(0,n.jsx)("span",{children:"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"}),(0,n.jsx)("span",{children:"Summer 2019"})]}),(0,n.jsx)("ul",{children:(0,n.jsxs)("li",{children:[(0,n.jsx)("span",{children:"Focus on competition Math\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"}),(0,n.jsx)("span",{children:"\xa0"})]})}),(0,n.jsx)("p",{children:(0,n.jsx)("span",{})}),(0,n.jsx)("p",{children:(0,n.jsx)("span",{})}),(0,n.jsxs)("p",{children:[(0,n.jsx)("span",{children:(0,n.jsx)("a",{href:"https://www.google.com/url?q=https://cty.jhu.edu/&sa=D&source=editors&ust=1642612856535850&usg=AOvVaw0QN8I5VfVuskfq6IyTaTfx",children:"John Hopkins"})}),(0,n.jsx)("span",{children:"\xa0Center for Talented Youth"}),(0,n.jsx)("span",{children:"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"}),(0,n.jsx)("span",{children:"Summer"}),(0,n.jsx)("span",{children:"\xa0"}),(0,n.jsx)("span",{children:"2017"})]}),(0,n.jsxs)("ul",{children:[(0,n.jsxs)("li",{children:[(0,n.jsx)("span",{children:"Physics of Engineering"}),(0,n.jsx)("span",{children:"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"}),(0,n.jsx)("span",{children:"\xa0"})]}),(0,n.jsx)("li",{children:(0,n.jsx)("span",{children:"High Honors Award"})})]}),(0,n.jsx)("p",{children:(0,n.jsx)("span",{})}),(0,n.jsx)("p",{children:(0,n.jsx)("span",{})}),(0,n.jsxs)("p",{children:[(0,n.jsx)("span",{children:(0,n.jsx)("a",{href:"https://www.google.com/url?q=https://mathcircle.spcs.stanford.edu/&sa=D&source=editors&ust=1642612856537003&usg=AOvVaw1YS1BIOiD0OR4T_inmpU90",children:"Stanford Math Circle"})}),(0,n.jsx)("span",{children:"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"}),(0,n.jsx)("span",{children:"2016, 2017"}),(0,n.jsx)("span",{children:"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"})]}),(0,n.jsx)("ul",{children:(0,n.jsxs)("li",{children:[(0,n.jsx)("span",{children:"After school Math Program at Stanford University\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"}),(0,n.jsx)("span",{children:"\xa0"})]})}),(0,n.jsx)("h2",{id:"h.jyz444r2pr65",children:(0,n.jsx)("span",{})}),(0,n.jsx)("h2",{id:"h.ybjfm7jtp1re",children:(0,n.jsx)("span",{children:"EXPERIENCE"})}),(0,n.jsx)("p",{children:(0,n.jsx)("span",{})}),(0,n.jsxs)("p",{children:[(0,n.jsx)("span",{children:"Leader - "}),(0,n.jsx)("span",{children:(0,n.jsx)("a",{href:"https://www.google.com/url?q=https://palypython.com/&sa=D&source=editors&ust=1642612856538884&usg=AOvVaw341ogBZ5cyXL96FziehEYA",children:"Palo Alto High School Python Club"})}),(0,n.jsx)("span",{children:"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"}),(0,n.jsx)("span",{children:"2018 - today"})]}),(0,n.jsxs)("ul",{children:[(0,n.jsxs)("li",{children:[(0,n.jsx)("span",{children:"O"}),(0,n.jsx)("span",{children:"rganized "}),(0,n.jsx)("span",{children:(0,n.jsx)("a",{href:"https://www.google.com/url?q=https://palypython.com/hackathon&sa=D&source=editors&ust=1642612856539651&usg=AOvVaw1faYr_DYXiJ2OJ4-Ahk47h",children:"Hackathon"})})]}),(0,n.jsx)("li",{children:(0,n.jsx)("span",{children:"Developed Training videos"})})]}),(0,n.jsx)("ul",{children:(0,n.jsxs)("li",{children:[(0,n.jsx)("span",{children:(0,n.jsx)("a",{href:"https://www.google.com/url?q=https://www.youtube.com/watch?v%3DDacjWmypEww&sa=D&source=editors&ust=1642612856540386&usg=AOvVaw2iDSL0jyp6_cs37HyHuIyH",children:"Strings"})}),(0,n.jsx)("span",{children:"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"}),(0,n.jsx)("span",{children:(0,n.jsx)("a",{href:"https://www.google.com/url?q=https://www.youtube.com/watch?v%3Di6avVd-5Iq8&sa=D&source=editors&ust=1642612856540756&usg=AOvVaw3udqDZM681Z6XutkxPnn9Y",children:"Dictionaries"})}),(0,n.jsx)("span",{children:"\xa0 \xa0 \xa0 \xa0 "}),(0,n.jsx)("span",{children:(0,n.jsx)("a",{href:"https://www.google.com/url?q=https://www.youtube.com/watch?v%3DG4ZOOrkdy3g&sa=D&source=editors&ust=1642612856541115&usg=AOvVaw083Ekku-0Y2eX9i1WaGv8U",children:"Lists"})}),(0,n.jsx)("span",{children:"\xa0 \xa0 \xa0 \xa0 "}),(0,n.jsx)("span",{children:(0,n.jsx)("a",{href:"https://www.google.com/url?q=https://www.youtube.com/watch?v%3Dcp0G480L1rM&sa=D&source=editors&ust=1642612856541495&usg=AOvVaw1MPW6MUiwYnQ5eRnG_MTlJ",children:"Math & Numbers"})})]})}),(0,n.jsx)("ul",{children:(0,n.jsxs)("li",{children:[(0,n.jsx)("span",{children:"Created site - "}),(0,n.jsx)("span",{children:(0,n.jsx)("a",{href:"https://www.google.com/url?q=https://palypython.com/&sa=D&source=editors&ust=1642612856542051&usg=AOvVaw0SxiyIrdclNQ_o3v4JRBVi",children:"palypython.com/"})})]})}),(0,n.jsx)("p",{children:(0,n.jsx)("span",{})}),(0,n.jsxs)("p",{children:[(0,n.jsx)("span",{children:"Self-Taught Computer Languages - Haskell, Repl, Python\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"}),(0,n.jsx)("span",{children:"2018 - today"})]}),(0,n.jsx)("ul",{children:(0,n.jsxs)("li",{children:[(0,n.jsx)("span",{children:"Active on - "}),(0,n.jsx)("span",{children:(0,n.jsx)("a",{href:"https://www.google.com/url?q=https://repl.it/@AtticusKuhn&sa=D&source=editors&ust=1642612856543167&usg=AOvVaw3R9SsyCYTg_wXZmYf8ugwP",children:"https://repl.it/@AtticusKuhn"})})]})}),(0,n.jsx)("p",{children:(0,n.jsx)("span",{})}),(0,n.jsx)("p",{children:(0,n.jsx)("span",{children:"PERSONAL"})}),(0,n.jsx)("p",{children:(0,n.jsx)("span",{})}),(0,n.jsxs)("p",{children:[(0,n.jsx)("span",{children:"Citizenship:"}),(0,n.jsx)("span",{children:"\xa0US / UK; viola in orchestra & chamber group, hiking, travel & Indian food"})]})]})]})}},1664:function(e,s,r){e.exports=r(8418)}},function(e){e.O(0,[774,888,179],(function(){return s=6438,e(e.s=s);var s}));var s=e.O();_N_E=s}]);