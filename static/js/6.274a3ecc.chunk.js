(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[6],{170:function(e,t,r){"use strict";r.r(t);var n=r(1),c=r(0),o=r(5),a=r(21),s=function(e){var t=e.data;return Object(n.jsx)("article",{className:"degree-container",children:Object(n.jsxs)("header",{children:[Object(n.jsx)("h4",{className:"degree",children:t.degree}),Object(n.jsxs)("p",{className:"school",children:[Object(n.jsx)("a",{href:t.link,children:t.school}),", ",t.year]})]})})},i=function(e){var t=e.data;return Object(n.jsxs)("div",{className:"education",children:[Object(n.jsx)("div",{className:"link-to",id:"education"}),Object(n.jsx)("div",{className:"title",children:Object(n.jsx)("h3",{children:"Education"})}),t.map((function(e){return Object(n.jsx)(s,{data:e},e.school)}))]})};i.defaultProps={data:[]};var l=i,u=function(e){var t=e.data;return Object(n.jsxs)("article",{className:"jobs-container",children:[Object(n.jsxs)("header",{children:[Object(n.jsxs)("h4",{children:[Object(n.jsx)("a",{href:t.link,children:t.company})," - ",t.position]}),Object(n.jsxs)("p",{className:"daterange",children:[" ",t.daterange]})]}),Object(n.jsx)("ul",{className:"points",children:t.points.map((function(e){return Object(n.jsx)("li",{children:e},e)}))})]})},d=function(e){var t=e.data;return Object(n.jsxs)("div",{className:"experience",children:[Object(n.jsx)("div",{className:"link-to",id:"experience"}),Object(n.jsx)("div",{className:"title",children:Object(n.jsx)("h3",{children:"Experience"})}),t.map((function(e){return Object(n.jsx)(u,{data:e},e.company)}))]})};d.defaultProps={data:[]};var h=d;function y(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e){return(p="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){return!t||"object"!==p(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function j(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=m(e);if(t){var c=m(this).constructor;r=Reflect.construct(n,arguments,c)}else r=n.apply(this,arguments);return f(this,r)}}var g=r(54),v=r(53),O=function(e){var t=e.handleClick,r=e.active,c=e.label;return Object(n.jsx)("button",{className:"skillbutton ".concat(r[c]?"skillbutton-active":""),type:"button",onClick:function(){return t(c)},children:c})},C=function(e){var t=e.data,r=e.categories,c=t.category,o=t.competency,a=t.title,s={background:r.filter((function(e){return c.includes(e.name)})).map((function(e){return e.color}))[0]},i=Object(v.a)(Object(v.a)({},s),{},{width:"".concat(String(Math.min(100,Math.max(o/5*100,0))),"%")});return Object(n.jsxs)("div",{className:"skillbar clearfix",children:[Object(n.jsx)("div",{className:"skillbar-title",style:s,children:Object(n.jsx)("span",{children:a})}),Object(n.jsx)("div",{className:"skillbar-bar",style:i}),Object(n.jsxs)("div",{className:"skill-bar-percent",children:[o," / 5"]})]})};C.defaultProps={categories:[]};var k=C,S=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(a,e);var t,r,c,o=j(a);function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=o.call(this,e)).handleChildClick=function(e){t.setState((function(t){var r=Object.keys(t.buttons).reduce((function(r,n){return Object(v.a)(Object(v.a)({},r),{},Object(g.a)({},n,e===n&&!t.buttons[n]))}),{});return r.All=!Object.keys(t.buttons).some((function(e){return r[e]})),{buttons:r}}))},t.state=function(e){var t=e.categories,r=e.skills;return{buttons:t.map((function(e){return e.name})).reduce((function(e,t){return Object(v.a)(Object(v.a)({},e),{},Object(g.a)({},t,!1))}),{All:!0}),skills:r}}({categories:e.categories,skills:e.skills}),t}return t=a,(r=[{key:"getRows",value:function(){var e=this,t=Object.keys(this.state.buttons).reduce((function(t,r){return e.state.buttons[r]?r:t}),"All");return this.state.skills.sort((function(e,t){var r=0;return e.competency>t.competency?r=-1:e.competency<t.competency?r=1:e.category[0]>t.category[0]?r=-1:e.category[0]<t.category[0]||e.title>t.title?r=1:e.title<t.title&&(r=-1),r})).filter((function(e){return"All"===t||e.category.includes(t)})).map((function(t){return Object(n.jsx)(k,{categories:e.props.categories,data:t},t.title)}))}},{key:"getButtons",value:function(){var e=this;return Object.keys(this.state.buttons).map((function(t){return Object(n.jsx)(O,{label:t,active:e.state.buttons,handleClick:e.handleChildClick},t)}))}},{key:"render",value:function(){return Object(n.jsxs)("div",{className:"skills",children:[Object(n.jsx)("div",{className:"link-to",id:"skills"}),Object(n.jsxs)("div",{className:"title",children:[Object(n.jsx)("h3",{children:"Skills"}),Object(n.jsx)("p",{children:"Note: I think these sections are silly, but everyone seems to have one. Here is a *mostly* honest overview of my skills."})]}),Object(n.jsx)("div",{className:"skill-button-container",children:this.getButtons()}),Object(n.jsx)("div",{className:"skill-row-container",children:this.getRows()})]})}}])&&y(t.prototype,r),c&&y(t,c),a}(c.Component);S.defaultProps={skills:[],categories:[]};var w=S,I=function(e){var t=e.data,r=e.last;return Object(n.jsxs)("li",{className:"course-container",children:[Object(n.jsxs)("a",{href:t.link,children:[Object(n.jsxs)("h4",{className:"course-number",children:[t.number,":"]}),Object(n.jsx)("p",{className:"course-name",children:t.title})]}),!r&&Object(n.jsx)("div",{className:"course-dot",children:Object(n.jsx)("p",{className:"course-name",children:" \u2022"})})]})};I.defaultProps={last:!1};var x=I,T=function(e){var t,r=e.data;return Object(n.jsxs)("div",{className:"courses",children:[Object(n.jsx)("div",{className:"link-to",id:"courses"}),Object(n.jsx)("div",{className:"title",children:Object(n.jsx)("h3",{children:"Selected Courses"})}),Object(n.jsx)("ul",{className:"course-list",children:(t=r,t.sort((function(e,t){var r=0;return e.university>t.university?r=-1:e.university<t.university||e.number>t.number?r=1:e.number<t.number&&(r=-1),r})).map((function(e,r){return Object(n.jsx)(x,{data:e,last:r===t.length-1},e.title)})))})]})};T.defaultProps={data:[]};var D=T,N=[{title:"Data Structures and Analysis",number:"CSC263",link:"https://coursefinder.utoronto.ca/course-search/search/courseInquiry?methodToCall=start&viewId=CourseDetails-InquiryView&courseId=CSC263H1Y20215"},{title:"Computer Vision",number:"CSC420",link:"https://coursefinder.utoronto.ca/course-search/search/courseInquiry?methodToCall=start&viewId=CourseDetails-InquiryView&courseId=CSC420H1Y20215"},{title:"Neural Networks and Deep Learning",number:"CSC413",link:"https://fas.calendar.utoronto.ca/course/csc413h1"},{title:"Algorithm Design, Analysis & Complexity",number:"CSC373",link:"https://coursefinder.utoronto.ca/course-search/search/courseInquiry?methodToCall=start&viewId=CourseDetails-InquiryView&courseId=CSC373H1Y20215"},{title:"Operating Systems",number:"CSC369",link:"https://coursefinder.utoronto.ca/course-search/search/courseInquiry?methodToCall=start&viewId=CourseDetails-InquiryView&courseId=CSC369H1Y20215"},{title:"Introduction to Databases",number:"CSC343",link:"https://fas.calendar.utoronto.ca/course/csc343h1"},{title:"Numerical Methods",number:"CSC336",link:"https://coursefinder.utoronto.ca/course-search/search/courseInquiry?methodToCall=start&viewId=CourseDetails-InquiryView&courseId=CSC336H1Y20215"},{title:"Introduction to Machine Learning",number:"CSC311",link:"https://fas.calendar.utoronto.ca/course/csc311h1"},{title:"Calculus with Proofs",number:"MAT137",link:"https://coursefinder.utoronto.ca/course-search/search/courseInquiry?methodToCall=start&viewId=CourseDetails-InquiryView&courseId=MAT137Y1Y20215"},{title:"Multivariable Calculus",number:"MAT237",link:"https://coursefinder.utoronto.ca/course-search/search/courseInquiry?methodToCall=start&viewId=CourseDetails-InquiryView&courseId=MAT237Y1Y20215"},{title:"Linear Algebra",number:"MAT223",link:"https://coursefinder.utoronto.ca/course-search/search/courseInquiry?methodToCall=start&viewId=CourseDetails-InquiryView&courseId=MAT223H1F20215F"},{title:"Introduction to Combinatorics",number:"MAT344",link:"https://coursefinder.utoronto.ca/course-search/search/courseInquiry?methodToCall=start&viewId=CourseDetails-InquiryView&courseId=MAT344H1Y20215"},{title:"Probability and Statistics I",number:"STA257",link:"https://coursefinder.utoronto.ca/course-search/search/courseInquiry?methodToCall=start&viewId=CourseDetails-InquiryView&courseId=STA257H1F20215F"},{title:"Probability and Statistics II",number:"STA261",link:"https://coursefinder.utoronto.ca/course-search/search/courseInquiry?methodToCall=start&viewId=CourseDetails-InquiryView&courseId=STA261H1S20215S"},{title:"Software Tools and Systems Programming",number:"CSC209",link:"https://coursefinder.utoronto.ca/course-search/search/courseInquiry?methodToCall=start&viewId=CourseDetails-InquiryView&courseId=CSC209H1Y20215"},{title:"Software Design",number:"CSC207",link:"https://coursefinder.utoronto.ca/course-search/search/courseInquiry?methodToCall=start&viewId=CourseDetails-InquiryView&courseId=CSC207H1Y20215"},{title:"Introduction to the Theory of Computation",number:"CSC236",link:"https://coursefinder.utoronto.ca/course-search/search/courseInquiry?methodToCall=start&viewId=CourseDetails-InquiryView&courseId=CSC236H1Y20215"},{title:"Computer Organization",number:"CSC258",link:"https://coursefinder.utoronto.ca/course-search/search/courseInquiry?methodToCall=start&viewId=CourseDetails-InquiryView&courseId=CSC258H1Y20215"}],P=[{school:"University of Toronto",degree:"Computer Science Specialist and Mathematics Minor",year:2022}],L=[{company:"IBM",position:"Software Engineer",daterange:"May 2021 - Present",points:["Waltson Health AI"]},{company:"Ericsson",position:"4G/5G Software Development Engineer",daterange:"May 2020 - April 2021",points:["Implemented the commit stats manipulation workflow that stores the commit and deployment status in Elasticsearch and visualizes the stats in Kibana","Designed the MTD Counter Analyzer with Python which categorizes the MTD counters by domains, calculates rates and other stats","Developed the NR DBC token report page that reports token information from the NR dev codebase including their locations, occurences and trends with commit details. The webpage is built with React, Node.js, HTML and CSS/SASS, and fetches token data from a Jenkins instance running the backend Python logics. Yaml config files are used to define the desired tokens and the search scope.","Built the NR metrics dashboard with React that feeds the performance backlog from NR components and reports quantitaive stats, and established SQL log database to store incoming data and developed the server-side connection service with Express. The dashboard enables multi-level filtering on log query including component category, suite, and logging periods, and also tabularized the backlog stats and visualized each log type using amChart framework to show the value trends versus dates. It facilitates the signal analysis by 30% and greatly reduces the assessment workload."]}],q=r(17);var A=r(24);var M,E=[{title:"Javascript",competency:4,category:["Languages","Javascript"]},{title:"Node.JS",competency:3,category:["Frameworks/Libraries","Javascript"]},{title:"Web3.JS",competency:3,category:["Frameworks/Libraries","Javascript"]},{title:"Angular",competency:3,category:["Frameworks/Libraries","Javascript"]},{title:"React",competency:3,category:["Frameworks/Libraries","Javascript"]},{title:"Bash",competency:2,category:["Tools","Languages"]},{title:"Amazon Web Services",competency:3,category:["Tools"]},{title:"Heroku",competency:2,category:["Tools"]},{title:"MongoDB",competency:3,category:["Databases"]},{title:"ElasticSearch",competency:2,category:["Databases"]},{title:"PostgreSQL/SQLite3/SQL",competency:4,category:["Databases","Languages"]},{title:"Express.JS",competency:2,category:["Frameworks/Libraries","Javascript"]},{title:"SpringBoot Microservices",competency:2,category:["Frameworks/Libraries"]},{title:"Flask",competency:2,category:["Frameworks/Libraries","Python"]},{title:"Stripe",competency:2,category:["Frameworks/Libraries"]},{title:"Git/Gerrit",competency:5,category:["Tools"]},{title:"Jenkins",competency:4,category:["Tools"]},{title:"Jira",competency:4,category:["Tools"]},{title:"Kibana",competency:3,category:["Tools"]},{title:"Docker",competency:3,category:["Tools"]},{title:"Firebase",competency:3,category:["Tools"]},{title:"Openshift",competency:2,category:["Tools"]},{title:"Kubernetes",competency:2,category:["Tools"]},{title:"Numpy",competency:3,category:["Data Science","Data Engineering","Python"]},{title:"Tensorflow + Keras",competency:3,category:["Data Science","Python"]},{title:"Jupyter",competency:3,category:["Data Science","Python"]},{title:"Typescript",competency:2,category:["Languages","Javascript"]},{title:"HTML + SASS/SCSS/CSS",competency:3,category:["Languages"]},{title:"Python",competency:5,category:["Languages","Python"]},{title:"Java",competency:5,category:["Languages"]},{title:"Solidity",competency:3,category:["Languages"]},{title:"PHP",competency:3,category:["Languages"]},{title:"C++/C",competency:1,category:["Languages"]},{title:"MATLAB",competency:2,category:["Languages"]},{title:"R",competency:2,category:["Languages"]},{title:"GraphQL",competency:2,category:["Frameworks/Libraries","Databases"]},{title:"Pandas",competency:5,category:["Data Engineering","Data Science","Python"]},{title:"Matplotlib",competency:3,category:["Data Engineering","Data Science","Python"]},{title:"Scikit-Learn",competency:4,category:["Data Engineering","Data Science","Python"]},{title:"Pytorch",competency:4,category:["Data Engineering","Data Science","Python"]}].map((function(e){return Object(v.a)(Object(v.a)({},e),{},{category:e.category.sort()})})),H=["#6968b3","#37b1f5","#40494e","#515dd4","#e47272","#cc7b94","#3896e2","#c3423f","#d75858","#747fff","#64cb7b"],R=(M=new Set(E.reduce((function(e,t){var r=t.category;return e.concat(r)}),[])),function(e){if(Array.isArray(e))return Object(q.a)(e)}(M)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(M)||Object(A.a)(M)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).sort().map((function(e,t){return{name:e,color:H[t]}})),J=["Education","Experience","Skills","Courses"];t.default=function(){return Object(n.jsx)(a.a,{title:"Resume",description:"Zhuoheng Huang's Resume.",children:Object(n.jsxs)("article",{className:"post",id:"resume",children:[Object(n.jsx)("header",{children:Object(n.jsxs)("div",{className:"title",children:[Object(n.jsx)("h2",{"data-testid":"heading",children:Object(n.jsx)(o.b,{to:"resume",children:"Resume"})}),Object(n.jsx)("div",{className:"link-container",children:J.map((function(e){return Object(n.jsx)("h4",{children:Object(n.jsx)("a",{href:"#".concat(e.toLowerCase()),children:e})},e)}))})]})}),Object(n.jsx)(l,{data:P}),Object(n.jsx)(h,{data:L}),Object(n.jsx)(w,{skills:E,categories:R}),Object(n.jsx)(D,{data:N})]})})}},53:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r(54);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}},54:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,"a",(function(){return n}))}}]);
//# sourceMappingURL=6.274a3ecc.chunk.js.map