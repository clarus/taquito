(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{159:function(e,t,a){"use strict";var n=a(2),r=a(6),c=a(0),l=a.n(c),o=a(111),i=a.n(o),s=a(105),m=a(94),d=a(106),u=a(48),g=a.n(u);function p(e){var t=e.to,a=e.href,c=e.label,o=Object(r.a)(e,["to","href","label"]),i=Object(d.a)(t);return l.a.createElement(s.a,Object(n.a)({className:"footer__link-item"},a?{target:"_blank",rel:"noopener noreferrer",href:a}:{to:i},o),c)}var h=function(e){var t=e.url,a=e.alt;return l.a.createElement("img",{className:"footer__logo",alt:a,src:t})};t.a=function(){var e=Object(m.a)().siteConfig,t=(void 0===e?{}:e).themeConfig,a=(void 0===t?{}:t).footer,n=a||{},r=n.copyright,c=n.links,o=void 0===c?[]:c,s=n.logo,u=void 0===s?{}:s,b=Object(d.a)(u.src);return a?l.a.createElement("footer",{className:i()("footer",{"footer--dark":"dark"===a.style})},l.a.createElement("div",{className:"container"},o&&o.length>0&&l.a.createElement("div",{className:"row footer__links"},o.map((function(e,t){return l.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?l.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?l.a.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?l.a.createElement("div",{key:t,dangerouslySetInnerHTML:{__html:e.html}}):l.a.createElement("li",{key:e.href||e.to,className:"footer__item"},l.a.createElement(p,e))}))):null)}))),(u||r)&&l.a.createElement("div",{className:"text--center"},u&&u.src&&l.a.createElement("div",{className:"margin-bottom--sm"},u.href?l.a.createElement("a",{href:u.href,target:"_blank",rel:"noopener noreferrer",className:g.a.footerLogoLink},l.a.createElement(h,{alt:u.alt,url:b})):l.a.createElement(h,{alt:u.alt,url:b})),r))):null}},75:function(e,t,a){"use strict";a.r(t);var n=a(105),r=a(106),c=a(94),l=a(644),o=a(642),i=a(157),s=a(111),m=a.n(s),d=a(0),u=a.n(d),g=a(76),p=a.n(g),h=[{description:"Hit the ground running using: Taquito's Smart-Contract abstractions makes working with contracts feel like your working with plain old JavaScript objects.",awesomeIcon:l.a,title:"Easy to Use"},{description:'Perfect for any JavaScript project on the front-end, back-end or command line with minimal dependencies, Taquito has no reliance on any stack by default, except the <a href="https://gitlab.com/tezos/tezos" target="_blank">Tezos Node</a>.',awesomeIcon:l.b,title:"Portable"},{description:'Taquito comes complete with a well-documented API using TypeDoc, continuous integration tests against the <a href="https://gitlab.com/tezos/tezos" target="_blank">Tezos Node</a>; versioned releases published to npmjs.org.',awesomeIcon:l.c,title:"Well-Supported"}],b=[{caption:"Tocqueville Group",image:"/img/tqtezos.svg",link:"https://tqtezos.com"},{caption:"Ligo",image:"/img/ligo.svg",link:"https://ligolang.org/"},{caption:"Truffle",image:"/img/truffle.png",link:"https://www.trufflesuite.com/"},{caption:"Nomadic Labs",image:"/img/nomadic.png",link:"https://www.nomadic-labs.com/"}];t.default=function(){var e=Object(c.a)().siteConfig,t=e.customFields;return u.a.createElement(i.a,{permalink:"/",description:t.description},u.a.createElement("div",{className:m()(p.a.banner,p.a.centered,"margin-bottom--xl")},u.a.createElement("img",{className:p.a.brandLogo,src:Object(r.a)("img/Taquito.png")}),u.a.createElement("h1",{className:p.a.tagline},e.tagline),u.a.createElement("div",{className:m()("margin-bottom--lg")},u.a.createElement(n.a,{className:p.a.button,to:Object(r.a)("docs/quick_start")},"Quick Start"),u.a.createElement(n.a,{className:p.a.button,href:"https://tezostaquito.io/typedoc"},"TypeDoc Reference")),u.a.createElement("iframe",{src:"https://ghbtns.com/github-btn.html?user=ecadlabs&repo=taquito&type=star&count=true&size=large",frameBorder:"0",scrolling:"0",width:"130px",height:"30px"})),u.a.createElement("div",{className:m()(p.a.section,"container","text--center","margin-bottom--xl")},u.a.createElement("div",{className:"row"},h.map((function(e,t){return u.a.createElement("div",{className:"col",key:t},u.a.createElement(o.a,{icon:e.awesomeIcon,size:"6x"}),u.a.createElement("h2",{className:"padding-top--md"},e.title),u.a.createElement("p",{dangerouslySetInnerHTML:{__html:e.description}}))})))),u.a.createElement("div",{className:m()(p.a.section,p.a.bestPractices,"margin-bottom--xl")},u.a.createElement("div",{className:m()("container","text--center")},u.a.createElement("div",{className:m()("row",p.a.centerVerticaly)},u.a.createElement("div",{className:"col"},u.a.createElement("h2",null,"Participation in CII Badging Program"),u.a.createElement("p",null,"The CII (Core Infrastructure Initiative) badging program was created by the Linux Foundation in response to previous security issues in open-source projects. We are committed to follow these best practices and earn/maintain our CII Badges.")),u.a.createElement("div",{className:"col"},u.a.createElement("img",{src:Object(r.a)("img/cii_badge.png")}))))),u.a.createElement("div",{className:m()(p.a.section,"margin-bottom--xl")},u.a.createElement("div",{className:m()("container","text--center")},u.a.createElement("div",{className:m()("row",p.a.centerVerticaly)},u.a.createElement("div",{className:"col"},u.a.createElement("h2",null,"Boilerplate App"),u.a.createElement("p",null,"The Taquito team has created a small sample project that checks and displays XTZ balance. Developers are invited to use this as a starting point by simply forking the ",u.a.createElement("a",{href:"https://github.com/ecadlabs/taquito-boilerplate"},"Taquito Boilerplate")," project in GitHub.")),u.a.createElement("div",{className:"col"},u.a.createElement("img",{src:Object(r.a)("img/boilerplate_screenshot.png")}))))),u.a.createElement("div",{className:m()(p.a.section,p.a.bestPractices)},u.a.createElement("div",{className:m()("container","text--center")},u.a.createElement("div",{className:m()("row")},u.a.createElement("div",{className:"col"},u.a.createElement("h2",null,"Teams Building on Taquito"))),u.a.createElement("div",{className:m()("row","padding-top--lg",p.a.centerVerticaly)},b.map((function(e,t){return u.a.createElement("div",{className:m()("col","padding-bottom--md")},u.a.createElement("a",{href:e.link,key:t,rel:"noopener noreferrer",target:"_blank"},u.a.createElement("img",{className:m()(p.a.userBanner),src:Object(r.a)(e.image),alt:e.caption,title:e.caption})))}))))))}}}]);