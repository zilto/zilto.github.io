"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6103],{1161:(e,t,n)=>{n.d(t,{Z:()=>T});n(7294);var a=n(512),s=n(3548),r=n(5893);function i(e){let{children:t,className:n}=e;return(0,r.jsx)("article",{className:n,children:t})}var l=n(3692);const o={title:"title_f1Hy"};function c(e){let{className:t}=e;const{metadata:n,isBlogPostPage:i}=(0,s.nO)(),{permalink:c,title:d}=n,m=i?"h1":"h2";return(0,r.jsx)(m,{className:(0,a.Z)(o.title,t),children:i?d:(0,r.jsx)(l.Z,{to:c,children:d})})}var d=n(5999),m=n(8824),u=n(9788);const h={container:"container_mt6G"};function g(e){let{readingTime:t}=e;const n=function(){const{selectMessage:e}=(0,m.c)();return t=>{const n=Math.ceil(t);return e(n,(0,d.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:n}))}}();return(0,r.jsx)(r.Fragment,{children:n(t)})}function f(e){let{date:t,formattedDate:n}=e;return(0,r.jsx)("time",{dateTime:t,children:n})}function x(){return(0,r.jsx)(r.Fragment,{children:" \xb7 "})}function p(e){let{className:t}=e;const{metadata:n}=(0,s.nO)(),{date:i,readingTime:l}=n,o=(0,u.P)({day:"numeric",month:"long",year:"numeric",timeZone:"UTC"});return(0,r.jsxs)("div",{className:(0,a.Z)(h.container,"margin-vert--md",t),children:[(0,r.jsx)(f,{date:i,formattedDate:(c=i,o.format(new Date(c)))}),void 0!==l&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(x,{}),(0,r.jsx)(g,{readingTime:l})]})]});var c}var v=n(6788);const j={authorCol:"authorCol_Hf19",imageOnlyAuthorRow:"imageOnlyAuthorRow_pa_O",imageOnlyAuthorCol:"imageOnlyAuthorCol_G86a"};function b(e){let{className:t}=e;const{metadata:{authors:n},assets:i}=(0,s.nO)();if(0===n.length)return null;const l=n.every((e=>{let{name:t}=e;return!t})),o=1===n.length;return(0,r.jsx)("div",{className:(0,a.Z)("margin-top--md margin-bottom--sm",l?j.imageOnlyAuthorRow:"row",t),children:n.map(((e,t)=>(0,r.jsx)("div",{className:(0,a.Z)(!l&&(o?"col col--12":"col col--6"),l?j.imageOnlyAuthorCol:j.authorCol),children:(0,r.jsx)(v.Z,{author:{...e,imageURL:i.authorsImageUrls[t]??e.imageURL}})},t)))})}function N(){return(0,r.jsxs)("header",{children:[(0,r.jsx)(c,{}),(0,r.jsx)(p,{}),(0,r.jsx)(b,{})]})}var Z=n(8780),L=n(7395);function y(e){let{children:t,className:n}=e;const{isBlogPostPage:i}=(0,s.nO)();return(0,r.jsx)("div",{id:i?Z.uR:void 0,className:(0,a.Z)("markdown",n),children:(0,r.jsx)(L.Z,{children:t})})}var k=n(5281),C=n(7265),_=n(1526);function H(){return(0,r.jsx)("b",{children:(0,r.jsx)(d.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read more"})})}function w(e){const{blogPostTitle:t,...n}=e;return(0,r.jsx)(l.Z,{"aria-label":(0,d.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t}),...n,children:(0,r.jsx)(H,{})})}function O(){const{metadata:e,isBlogPostPage:t}=(0,s.nO)(),{tags:n,title:i,editUrl:l,hasTruncateMarker:o,lastUpdatedBy:c,lastUpdatedAt:d}=e,m=!t&&o,u=n.length>0;if(!(u||m||l))return null;if(t){const e=!!(l||d||c);return(0,r.jsxs)("footer",{className:"docusaurus-mt-lg",children:[u&&(0,r.jsx)("div",{className:(0,a.Z)("row","margin-top--sm",k.k.blog.blogFooterEditMetaRow),children:(0,r.jsx)("div",{className:"col",children:(0,r.jsx)(_.Z,{tags:n})})}),e&&(0,r.jsx)(C.Z,{className:(0,a.Z)("margin-top--sm",k.k.blog.blogFooterEditMetaRow),editUrl:l,lastUpdatedAt:d,lastUpdatedBy:c})]})}return(0,r.jsxs)("footer",{className:"row docusaurus-mt-lg",children:[u&&(0,r.jsx)("div",{className:(0,a.Z)("col",{"col--9":m}),children:(0,r.jsx)(_.Z,{tags:n})}),m&&(0,r.jsx)("div",{className:(0,a.Z)("col text--right",{"col--3":u}),children:(0,r.jsx)(w,{blogPostTitle:i,to:e.permalink})})]})}function T(e){let{children:t,className:n}=e;const l=function(){const{isBlogPostPage:e}=(0,s.nO)();return e?void 0:"margin-bottom--xl"}();return(0,r.jsxs)(i,{className:(0,a.Z)(l,n),children:[(0,r.jsx)(N,{}),(0,r.jsx)(y,{children:t}),(0,r.jsx)(O,{})]})}},9209:(e,t,n)=>{n.r(t),n.d(t,{default:()=>j});n(7294);var a=n(512),s=n(8264),r=n(5281),i=n(3548),l=n(1059),o=n(1161),c=n(5999),d=n(2244),m=n(5893);function u(e){const{nextItem:t,prevItem:n}=e;return(0,m.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,c.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"}),children:[n&&(0,m.jsx)(d.Z,{...n,subLabel:(0,m.jsx)(c.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post",children:"Newer post"})}),t&&(0,m.jsx)(d.Z,{...t,subLabel:(0,m.jsx)(c.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post",children:"Older post"}),isNext:!0})]})}function h(){const{assets:e,metadata:t}=(0,i.nO)(),{title:n,description:a,date:r,tags:l,authors:o,frontMatter:c}=t,{keywords:d}=c,u=e.image??c.image;return(0,m.jsxs)(s.d,{title:n,description:a,keywords:d,image:u,children:[(0,m.jsx)("meta",{property:"og:type",content:"article"}),(0,m.jsx)("meta",{property:"article:published_time",content:r}),o.some((e=>e.url))&&(0,m.jsx)("meta",{property:"article:author",content:o.map((e=>e.url)).filter(Boolean).join(",")}),l.length>0&&(0,m.jsx)("meta",{property:"article:tag",content:l.map((e=>e.label)).join(",")})]})}var g=n(5742);function f(){const e=(0,i.iZ)();return(0,m.jsx)(g.Z,{children:(0,m.jsx)("script",{type:"application/ld+json",children:JSON.stringify(e)})})}var x=n(9407),p=n(7662);function v(e){let{sidebar:t,children:n}=e;const{metadata:a,toc:s}=(0,i.nO)(),{nextItem:r,prevItem:c,frontMatter:d}=a,{hide_table_of_contents:h,toc_min_heading_level:g,toc_max_heading_level:f}=d;return(0,m.jsxs)(l.Z,{sidebar:t,toc:!h&&s.length>0?(0,m.jsx)(x.Z,{toc:s,minHeadingLevel:g,maxHeadingLevel:f}):void 0,children:[(0,m.jsx)(p.Z,{metadata:a}),(0,m.jsx)(o.Z,{children:n}),(r||c)&&(0,m.jsx)(u,{nextItem:r,prevItem:c})]})}function j(e){const t=e.content;return(0,m.jsx)(i.n4,{content:e.content,isBlogPostPage:!0,children:(0,m.jsxs)(s.FG,{className:(0,a.Z)(r.k.wrapper.blogPages,r.k.page.blogPostPage),children:[(0,m.jsx)(h,{}),(0,m.jsx)(f,{}),(0,m.jsx)(v,{sidebar:e.sidebar,children:(0,m.jsx)(t,{})})]})})}},3230:(e,t,n)=>{n.d(t,{Z:()=>c});n(7294);var a=n(512),s=n(4061),r=n(5281),i=n(9047),l=n(5893);function o(e){let{className:t}=e;return(0,l.jsx)(i.Z,{type:"caution",title:(0,l.jsx)(s.cI,{}),className:(0,a.Z)(t,r.k.common.unlistedBanner),children:(0,l.jsx)(s.eU,{})})}function c(e){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.T$,{}),(0,l.jsx)(o,{...e})]})}},7662:(e,t,n)=>{n.d(t,{Z:()=>d});n(7294);var a=n(512),s=n(4061),r=n(5281),i=n(9047),l=n(5893);function o(e){let{className:t}=e;return(0,l.jsx)(i.Z,{type:"caution",title:(0,l.jsx)(s.ht,{}),className:(0,a.Z)(t,r.k.common.draftBanner),children:(0,l.jsx)(s.xo,{})})}var c=n(3230);function d(e){let{metadata:t}=e;const{unlisted:n,frontMatter:a}=t;return(0,l.jsxs)(l.Fragment,{children:[(n||a.unlisted)&&(0,l.jsx)(c.Z,{}),a.draft&&(0,l.jsx)(o,{})]})}},9407:(e,t,n)=>{n.d(t,{Z:()=>c});n(7294);var a=n(512),s=n(3743);const r={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"};var i=n(5893);const l="table-of-contents__link toc-highlight",o="table-of-contents__link--active";function c(e){let{className:t,...n}=e;return(0,i.jsx)("div",{className:(0,a.Z)(r.tableOfContents,"thin-scrollbar",t),children:(0,i.jsx)(s.Z,{...n,linkClassName:l,linkActiveClassName:o})})}},3743:(e,t,n)=>{n.d(t,{Z:()=>f});var a=n(7294),s=n(6668);function r(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const a=n.slice(2,e.level);e.parentIndex=Math.max(...a),n[e.level]=t}));const a=[];return t.forEach((e=>{const{parentIndex:n,...s}=e;n>=0?t[n].children.push(s):a.push(s)})),a}function i(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return t.flatMap((e=>{const t=i({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[{...e,children:t}]:t}))}function l(e){const t=e.getBoundingClientRect();return t.top===t.bottom?l(e.parentNode):t}function o(e,t){let{anchorTopOffset:n}=t;const a=e.find((e=>l(e).top>=n));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(l(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function c(){const e=(0,a.useRef)(0),{navbar:{hideOnScroll:t}}=(0,s.L)();return(0,a.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function d(e){const t=(0,a.useRef)(void 0),n=c();(0,a.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:s,minHeadingLevel:r,maxHeadingLevel:i}=e;function l(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),l=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const a=[];for(let s=t;s<=n;s+=1)a.push(`h${s}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:r,maxHeadingLevel:i}),c=o(l,{anchorTopOffset:n.current}),d=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(s),e.classList.add(s),t.current=e):e.classList.remove(s)}(e,e===d)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),()=>{document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,n])}var m=n(3692),u=n(5893);function h(e){let{toc:t,className:n,linkClassName:a,isChild:s}=e;return t.length?(0,u.jsx)("ul",{className:s?void 0:n,children:t.map((e=>(0,u.jsxs)("li",{children:[(0,u.jsx)(m.Z,{to:`#${e.id}`,className:a??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,u.jsx)(h,{isChild:!0,toc:e.children,className:n,linkClassName:a})]},e.id)))}):null}const g=a.memo(h);function f(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:l="table-of-contents__link",linkActiveClassName:o,minHeadingLevel:c,maxHeadingLevel:m,...h}=e;const f=(0,s.L)(),x=c??f.tableOfContents.minHeadingLevel,p=m??f.tableOfContents.maxHeadingLevel,v=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:s}=e;return(0,a.useMemo)((()=>i({toc:r(t),minHeadingLevel:n,maxHeadingLevel:s})),[t,n,s])}({toc:t,minHeadingLevel:x,maxHeadingLevel:p});return d((0,a.useMemo)((()=>{if(l&&o)return{linkClassName:l,linkActiveClassName:o,minHeadingLevel:x,maxHeadingLevel:p}}),[l,o,x,p])),(0,u.jsx)(g,{toc:v,className:n,linkClassName:l,...h})}},4061:(e,t,n)=>{n.d(t,{T$:()=>o,cI:()=>i,eU:()=>l,ht:()=>c,xo:()=>d});n(7294);var a=n(5999),s=n(5742),r=n(5893);function i(){return(0,r.jsx)(a.Z,{id:"theme.contentVisibility.unlistedBanner.title",description:"The unlisted content banner title",children:"Unlisted page"})}function l(){return(0,r.jsx)(a.Z,{id:"theme.contentVisibility.unlistedBanner.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function o(){return(0,r.jsx)(s.Z,{children:(0,r.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function c(){return(0,r.jsx)(a.Z,{id:"theme.contentVisibility.draftBanner.title",description:"The draft content banner title",children:"Draft page"})}function d(){return(0,r.jsx)(a.Z,{id:"theme.contentVisibility.draftBanner.message",description:"The draft content banner message",children:"This page is a draft. It will only be visible in dev and be excluded from the production build."})}}}]);