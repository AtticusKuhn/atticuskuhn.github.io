(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[646],{4624:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/math",function(){return n(8410)}])},6098:function(e,t,n){"use strict";var r=n(5893),i=n(834),a=n(9036);t.Z=function(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.p,{size:"lg",children:e.title}),(0,r.jsx)("div",{className:"fl my-lg",children:e.left?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("img",{className:"sm:h-4/12 sm:w-4/12 h-full w-full",src:e.image}),(0,r.jsx)("div",{className:"p-xl",children:(0,r.jsx)(a.Z,{markdown:e.text})})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"p-xl",children:(0,r.jsx)(a.Z,{markdown:e.text})}),(0,r.jsx)("img",{className:"sm:h-4/12 sm:w-4/12 h-full w-full",src:e.image})]})})]})}},570:function(e,t,n){"use strict";var r=n(5893),i=n(1664);n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}t.Z=function(e){var t=function(e){return"bg-button w-fit p-3 rounded m-2 text-center text-primary-300 duration-75 ".concat(e," disabled:hover:bg-parimary-200 disabled:cursor-not-allowed")};return"link"in e?(0,r.jsx)(i.default,{href:e.link,children:(0,r.jsx)("a",o({},e,{className:t(e.className+" pop"),children:e.children}))}):(0,r.jsx)("button",o({},e,{className:t(e.className+" duration-200 hover:bg-primary-700"),onClick:e.onClickFunc,children:e.children}))}},3344:function(e,t,n){"use strict";var r=n(5893),i=n(1664);n(7294);t.Z=function(e){return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(i.default,{href:e.link,children:(0,r.jsx)("a",{children:(0,r.jsxs)("div",{className:"p-sm m-base flex flex-col bg-primary-100 rounded m-lg pop max-w-xl min-h-full ",children:[(0,r.jsx)("img",{alt:e.title,className:"p-tiny mx-auto m-0 block h-full w-full",src:e.image}),(0,r.jsx)("div",{className:"font-bold",children:e.title}),(0,r.jsx)("div",{className:"text-primary-300 text-xs",children:e.description})]})})})})}},834:function(e,t,n){"use strict";n.d(t,{p:function(){return l}});var r=n(5893);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){i(e,t,n[t])}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=function(e){var t=e.children,n=e.size,i=void 0===n?"4xl":n;return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("h1",{className:"flex flex-col text-primary-900 text-".concat(i," font-bold p-1"),children:t})})},l=function(e){var t=e.size,n=void 0===t?"xl":t,i=o(e,["size"]);return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(s,a({size:n},i))})};t.Z=s},1641:function(e,t,n){"use strict";var r=n(5893),i=n(7294),a=n(1664),o=n(570),s=n(1159),l=function(e){var t=e.text,n=e.link;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.default,{href:"/"+n,children:(0,r.jsx)("a",{className:"mx-1 px-1",children:t})})," ","|"," "]})},c=function(){return(0,r.jsxs)("footer",{children:[(0,r.jsx)("hr",{}),(0,r.jsxs)("span",{children:[(0,r.jsx)(s.Z,{href:"/rss.xml",children:"RSS feed"})," |",(0,r.jsx)(s.Z,{href:"/atom.xml",children:"atom feed"})," |",(0,r.jsx)(s.Z,{href:"/rss.json",children:"JSON feed"})," | MIT License ",(0,r.jsx)(s.Z,{href:"https://atticuskuhn.github.io",children:"Atticus Kuhn"})," ",(new Date).getFullYear()]})]})};t.Z=function(e){var t=e.children,n=(0,i.useState)("light"),a=n[0],s=n[1];(0,i.useEffect)((function(){var e=localStorage.getItem("mode");e&&s(e)}),[]);return(0,r.jsx)("div",{className:a,children:(0,r.jsxs)("div",{className:"text-center flex flex-col w-full  bg-primary-100 text-primary-800",children:[(0,r.jsx)("header",{className:"text-xl",children:(0,r.jsxs)("nav",{className:"px-1",children:[(0,r.jsx)(l,{link:"",text:"Home"}),(0,r.jsx)(l,{link:"blog",text:"Blog"}),(0,r.jsx)(l,{link:"projects",text:"My Projects"}),(0,r.jsx)(l,{link:"about",text:"About"}),(0,r.jsx)(l,{link:"computer-science",text:"Computer Science"}),(0,r.jsx)(l,{link:"math",text:"Mathematics"}),(0,r.jsx)(l,{link:"contact",text:"Contact me"}),(0,r.jsx)(o.Z,{onClickFunc:function(){var e="dark"===a?"light":"dark";s(e),localStorage.setItem("mode",e)},children:a})]})}),(0,r.jsx)("div",{className:"center bg-primary-200 mx-200 text-center min-h-screen p-3xl ",children:t}),(0,r.jsx)(c,{})]})})}},9036:function(e,t,n){"use strict";var r=n(5893),i=(n(7294),n(9009)),a=n(3483),o=n(834),s=n(1159),l=n(7704);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){c(e,t,n[t])}))}return e}function f(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}t.Z=function(e){return(0,r.jsx)(i.D,{className:"markdown",children:e.markdown,remarkPlugins:[l.Z],components:{code:function(e){e.node;var t=e.inline,n=e.className,i=e.children,o=f(e,["node","inline","className","children"]),s=/language-(\w+)/.exec(n||"");return!t&&s?(0,r.jsx)(a.Z,u({children:String(i).replace(/\n$/,""),language:s[1],PreTag:"div"},o)):(0,r.jsx)("code",u({className:n},o,{children:i}))},h1:function(e){return(0,r.jsx)(o.Z,u({},e,{size:"3xl"}))},h2:function(e){return(0,r.jsx)(o.Z,u({},e,{size:"2xl"}))},h3:function(e){return(0,r.jsx)(o.Z,u({},e,{size:"xl"}))},h4:function(e){return(0,r.jsx)(o.Z,u({},e,{size:"lg"}))},h5:function(e){return(0,r.jsx)(o.Z,u({},e))},h6:function(e){return(0,r.jsx)(o.Z,u({},e))},a:function(e){return(0,r.jsx)(s.Z,u({},e,{href:e.href}))},li:function(e){return(0,r.jsx)("li",u({},e,{className:"list-decimal"}))},table:function(e){return(0,r.jsx)("table",u({},e,{className:""}))}}})}},1159:function(e,t,n){"use strict";var r=n(5893),i=n(1664);n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}t.Z=function(e){return(0,r.jsx)(i.default,{href:e.href,children:(0,r.jsx)("a",o({},e,{className:"pop rounded bg-primary-300 p-1 m-1 hover:bg-primary-100",children:e.children}))})}},8410:function(e,t,n){"use strict";n.r(t);var r=n(5893),i=n(2962),a=n(7294),o=n(3344),s=n(834),l=n(1641),c=n(1159),u=n(1426),f=n.n(u),p=n(6098);function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var d=[{image:"/images/fsm.png",description:"on Automata Theory, Generating Functions, and Finite State Machines",link:"/papers/atticus-automata.pdf",title:"Automata Thoery"},{image:"/images/Matris.png",description:"Applications of the Perron Frobenius Theorem",link:"/papers/atticus-perronfrobenius.pdf",title:"Perron Frobenius Theorem"},{image:"/images/main.webp",description:"Error correcting codes as they are used, and on their derivations",link:"/papers/atticus-codes.pdf",title:"Error Correcting Codes"},{image:"/images/cube.jpg",description:"A new kind of geometry, and how constructions work in it.",link:"/papers/atticus-projective.pdf",title:"Real Projective Geometry"},{image:"/images/bool.png",description:"An introduction to Boolean Algrebras and the Stone Theorem.",link:"/papers/atticus-boolalgs.pdf",title:"Boolean Algebras"},{image:"/images/img_355.jpg",description:"How continued fractions are used in irrationality proofs",link:"/papers/atticus-contfrac.pdf",title:"Continued Fractions"},{image:"/images/Elliptic-Curve-Cryptography.png",description:"The application of ellpiptic curves to cryptography (ECC)",link:"/papers/atticus-ec.pdf",title:"Elliptic Curves In Cryptography"},{image:"/images/maxresdefault.jpg",description:"What is the impact of the most famous conjecture: the Riemann Hypothesis",link:"/papers/atticus-rh.pdf",title:"Consequences of the Riemann Hypothesis"},{image:"/images/ch.png",description:"The unresolvable question in set theory, and its applications",link:"/papers/atticus-ch.pdf",title:"The Continuum Hypothesis"},{image:"/images/factor-tree.gif",description:'Prof. Jim Fowler said\n        "Unique factorization is a theorem that\n        people are insufficiently appreciative of" ',link:"/papers/proving-uft.pdf",title:"Proof of Unique Factorization from the axioms of integers"},{description:"Using the denotational design technique of Conal Elliott to prove the formal correctness of computer circuits",link:"/papers/denotationalCircuits.pdf",title:"Denotational Correct Computer Arithmatic",image:"/images/halfadder.svg"},{description:"Using the denotational design technique of Conal Elliott to prove the formal correctness of computer circuits",link:"/papers/denotationalCircuitsTalk.pdf",title:"Denotational Correct Computer Arithmatic Talk",image:"/images/halfadder.svg"}],m=function(){var e=["The number \\[\\alpha=\\sum_{k=1}^\\infty 10^{-k!}\\] is transcendental. To see this, let \\[\\frac{p_n}{q_n}=\\sum_{k=1}^n 10^{-k!}\\] be the truncation of the series, so in particular $q_n=10^{n!}$. Then we have \\[\\left|\\alpha-\\frac{p_n}{q_n}\\right|=\\sum_{k=n+1}^\\infty 10^{-k!}<\\frac{2}{10^{(n+1)!}}=\\frac{2}{q_n^{n+1}}.\\] For any $c>0$ and any $d\\ge 2$, we have $\\frac{2}{q_n^{n+1}}<\\frac{c}{q_n^d}$ for all sufficiently large $n$. Thus by Liouville's Theorem, $\\alpha$ is not algebraic of degree $d$, for any $d$."," $\\sum_{n=1}^\\infty\\frac{1}{n^2}$.\n\n         $\\frac{\\sin(x)}{x}$, but a function can only have one. So the two must be equal. The normal power series expansion has $x^2$ coefficient $\\frac{-1}{6}$, and the expanded out product has coefficient $-\\sum_{n=1}^\\infty\\frac{1}{n^2\\pi^2}$. Thus we have \\[-\\frac{1}{6}=-\\sum_{n=1}^\\infty\\frac{1}{n^2\\pi^2}\\qquad\\Rightarrow\\qquad\\sum_{n=1}^\\infty\\frac{1}{n^2}=\\frac{\\pi^2}{6}.\\] Voila!"," Every face has at least three sides, so we have \\[ f = f_3+f_4+f_5+\\cdots, \\] \\[ 2e = 3f_3+4f_4+5f_5+\\cdots. \\] Multiplying the first equation by 3 and subtracting, we get \\[2e-3f=f_4+2f_5+\\cdots\\ge 0.\\] Now, multiplying Euler's formula by 3, we get \\[3v-3e+3f=6,\\] or \\[3v-6=3e-3f\\ge e.\\] "],t=(0,a.useState)(0),n=t[0],i=t[1],o=(0,a.useState)(0),s=o[0],l=o[1];(0,a.useEffect)((function(){var t=setInterval((function(){l(s+1),s-10>e[n].length&&(console.log(s,e[n].split(" ").length),i((n+1)%e.length),l(0))}),50);return function(){return clearInterval(t)}}),[n,s]);var c="".concat(e[n].slice(0,s));return(0,r.jsx)("div",{className:"text-left bg-primary-100 p-xl",children:(0,r.jsx)(f(),{children:c})})};t.default=function(){return(0,r.jsxs)(l.Z,{children:[(0,r.jsx)(i.PB,{title:"math",description:"I love math"}),(0,r.jsx)(s.Z,{children:"Math: my Biggest Passion"}),(0,r.jsx)("div",{children:"For many years, I have been passionate about mathematics. I have entered into some math competetions, and I study math outside of school. What I love most about it is its intriguing and wonderful nature."}),(0,r.jsx)(m,{}),(0,r.jsx)(s.p,{children:"Ways I enjoy mathematics"}),(0,r.jsxs)("div",{children:["Over the years, I have experienced mathematics in many different ways. I have joined ",(0,r.jsx)(c.Z,{href:"https://eulercircle.com/",children:"Euler Circle"}),", which exposes high school students to undergraduate-level maths. In school, I was part of the advanced problem solving class, which participated in many math competetions on behalf of the school. I have made many friends at the ",(0,r.jsx)(c.Z,{href:"https://alphastar.academy/",children:"Alphastar Camp"}),". I enjoy comptetitions, and I have pariticpated in the ",(0,r.jsx)(c.Z,{href:"https://artofproblemsolving.com/wiki/index.php/AMC_12_Problems_and_Solutions",children:"AMC 12"}),"as well as the ",(0,r.jsx)(c.Z,{href:"https://www.maa.org/math-competitions/american-invitational-mathematics-examination-aime",children:"AIME"}),". I particiapted, as well, in the ",(0,r.jsx)(c.Z,{href:"https://calendar.google.com/",children:"Stanford Math Circle"})]}),(0,r.jsx)(s.p,{children:"My Favorite Areas of Math"}),(0,r.jsx)(p.Z,{title:"Complex Analysis",image:"/images/complex-analysis.png",text:"[Complex analysis is one of my favorite areas of mathematics](/blogs/complex-analysis) . It is truly beautiful and wonderfully marries complex numbers with calculus. So many of the theorems of real analysis gain new light in complex analysis"}),(0,r.jsx)(p.Z,{title:"Type Theory",image:"/images/type-theory.png",text:"Type theory solidified my understanding of the relationship between computers\nand mathematics, and how mathematics can directly be applied to computer science. By having\ncomputers [execute proofs using type theory](/projects/pftb) I gained a new appreciation for rigor of proofs.",left:!0}),(0,r.jsx)(p.Z,{title:"Abstract Algebra",image:"/images/a2_graph.png",text:"Abstract Algebra demonstrated to me that mathematics is all about abstraction. I now see groups everywhere, from vectors to the complex numbers, and I feel I can now look at the world of mathematics through the lens of groups, rings and fields."}),(0,r.jsx)(s.p,{children:" Read My Papers"}),(0,r.jsx)("div",{className:"grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4",children:d.map((function(e,t){return(0,r.jsx)(o.Z,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){h(e,t,n[t])}))}return e}({},e),t)}))})]})}},1426:function(e,t,n){"use strict";e=n.nmd(e);var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=s(n(69)),a=s(n(7294)),o=s(n(5697));function s(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var u=function(e){function t(){return l(this,t),c(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"render",value:function(){var e=this.props,t=function(e,t){var n=/\$\$[\s\S]+?\$\$|\\\[[\s\S]+?\\\]|\\\([\s\S]+?\\\)|\$[^\$\\]*(?:\\.[^\$\\]*)*\$/g,r=/\$\$[\s\S]+?\$\$|\\\[[\s\S]+?\\\]/g,o=function(e,n){var r=void 0;try{r=i.default.renderToString(e,"block"===n?Object.assign({displayMode:!0},t):t)}catch(a){return console.error("couldn`t convert string",e),e}return r},s=[],l=e.match(n),c=e.split(n);return l?c.forEach((function(e,t){var n,i;s.push({string:e,type:"text"}),l[t]&&s.push({string:(i=l[t],"$"===i[0]&&"$"!==i[1]?i.slice(1,-1):i.slice(2,-2)),type:(n=l[t],n.match(r)?"block":"inline")})})):s.push({string:e,type:"text"}),s.map((function(e){return"text"===e.type?e.string:a.default.createElement("span",{dangerouslySetInnerHTML:{__html:o(e.string,e.type)}})}))}(e.children,{displayMode:e.displayMode,leqno:e.leqno,fleqn:e.fleqn,throwOnError:e.throwOnError,errorColor:e.errorColor,macros:e.macros,minRuleThickness:e.minRuleThickness,colorIsTextColor:e.colorIsTextColor,maxSize:e.maxSize,maxExpand:e.maxExpand,strict:e.strict,trust:e.trust});return t.unshift(null),t.unshift("span"),a.default.createElement.apply(null,t)}}]),t}(a.default.Component);u.propTypes={children:o.default.string,displayMode:o.default.bool,leqno:o.default.bool,fleqn:o.default.bool,throwOnError:o.default.bool,errorColor:o.default.string,macros:o.default.object,minRuleThickness:o.default.number,colorIsTextColor:o.default.bool,maxSize:o.default.number,maxExpand:o.default.number,strict:o.default.oneOfType([o.default.bool,o.default.string,o.default.func]),trust:o.default.oneOfType([o.default.bool,o.default.func])},u.defaultProps={children:"",displayMode:!1,output:"htmlAndMathml",leqno:!1,fleqn:!1,throwOnError:!0,errorColor:"#cc0000",macros:{},minRuleThickness:0,colorIsTextColor:!1,strict:"warn",trust:!1},e&&e.exports?e.exports=u:window.Latex=u}},function(e){e.O(0,[573,159,233,774,888,179],(function(){return t=4624,e(e.s=t);var t}));var t=e.O();_N_E=t}]);