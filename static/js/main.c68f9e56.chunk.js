/*! For license information please see main.c68f9e56.chunk.js.LICENSE.txt */
(this.webpackJsonpstampede=this.webpackJsonpstampede||[]).push([[0],{25:function(t,e,n){},26:function(t,e,n){},27:function(t,e,n){},29:function(t,e,n){},30:function(t,e,n){},31:function(t,e,n){},36:function(t,e,n){"use strict";n.r(e);var c=n(1),s=n.n(c),a=n(7),i=n.n(a),o=(n(25),n(3)),r=(n(26),n(27),n(0)),j=function(){return Object(r.jsxs)("form",{action:"https://www.paypal.com/donate",method:"post",target:"msukanen-paypal",children:[Object(r.jsx)("input",{type:"hidden",name:"business",value:"3BJYTPADUM66A"}),Object(r.jsx)("input",{type:"hidden",name:"no_recurring",value:"0"}),Object(r.jsx)("input",{type:"hidden",name:"currency_code",value:"EUR"}),Object(r.jsx)("input",{type:"image",src:"https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif",border:"0",name:"submit",title:"PayPal - The safer, easier way to pay online!",alt:"Donate with PayPal button"})]})},p=function(t){return Object(r.jsx)("a",{href:"https://github.com/msukanen/".concat(t.project),target:"msukanen-github",children:Object(r.jsx)("img",{src:"https://scifi.linkpc.net/msukanen/gfx/github.svg",alt:"Source code @github",style:{height:"calc(10px + 2vmin)"}})})},l=n(38),b=n(39),d=n(40),u=function(t){return Object(r.jsx)(l.a,{fluid:!0,className:"p-0 App-header",children:Object(r.jsxs)(b.a,{variant:"dark",children:[Object(r.jsx)(d.a,{variant:"dark",children:Object(r.jsxs)("h1",{children:["Stamp",Object(r.jsx)("code",{className:"skewered",children:"EDE"})," ",Object(r.jsx)("sub",{style:{fontSize:"smaller"},children:"JS"}),"\\",Object(r.jsx)("sup",{children:Object(r.jsx)("code",{children:"React"})})]})}),!t.hideExtra&&Object(r.jsxs)(d.a,{variant:"dark",children:[Object(r.jsx)(p,{project:"stampede"}),Object(r.jsx)(j,{})]})]})})},m=(n(29),n(30),n(31),function(t){var e=Object(c.useState)(t.src),n=Object(o.a)(e,2),s=n[0];n[1];return Object(r.jsx)("div",{className:"stamp-img",children:Object(r.jsx)("img",{src:s,alt:"".concat(s)})})}),h=function(t){var e=Object(c.useState)(t.content.name),n=Object(o.a)(e,2),s=n[0],a=(n[1],Object(c.useState)(t.content.published)),i=Object(o.a)(a,2),j=i[0],p=(i[1],Object(c.useState)(t.content.stamped)),l=Object(o.a)(p,2),b=l[0];l[1];return Object(r.jsxs)("div",{className:"stamp-data",children:["Name: ",s," \u2014 ",j,b&&Object(r.jsx)(r.Fragment,{children:"\u2014 stamped"})]})},x=n(41),g=function(t){var e=Object(c.useState)(t.content),n=Object(o.a)(e,2),s=n[0],a=(n[1],Object(c.useState)(!1)),i=Object(o.a)(a,2),j=i[0],p=i[1];return Object(r.jsxs)(l.a,{className:"stamp-container",children:[Object(r.jsx)(b.a,{onClick:function(){return p(!j)},children:Object(r.jsx)(d.a,{children:s.name})}),Object(r.jsx)(x.a,{in:j,children:Object(r.jsxs)(b.a,{children:[Object(r.jsx)(d.a,{children:Object(r.jsx)(m,{src:s.src})}),Object(r.jsx)(d.a,{children:Object(r.jsx)(h,{content:s})})]})})]})},O=function(t){var e=Object(c.useState)(t.collection),n=Object(o.a)(e,2),s=n[0],a=(n[1],Object(c.useState)(t.cols?t.cols:4)),i=Object(o.a)(a,2),j=i[0],p=i[1];return Object(c.useEffect)((function(){console.log("Cols: ".concat(t.cols)),t.cols&&p(t.cols)}),[t]),Object(r.jsx)(l.a,{fluid:!0,className:"p-0",children:s&&function(){for(var t=[],e=0;e<s.length;e+=j)t.push(s.slice(e,e+j));var n=0;return t.map((function(t,e){return Object(r.jsx)(b.a,{className:"g-0",children:t.map((function(t){return n++,Object(r.jsx)(d.a,{style:{border:"2px dotted blue"},children:Object(r.jsx)(g,{content:t})},"col-".concat(n,"}"))}))},"row-".concat(e,"-").concat(j))}))}()})},f=n(18),S=n(19),y=n(4),v=n(10),_=Object(v.a)("name"),k=Object(v.a)("yearPublished"),A=Object(v.a)("isStamped"),w=Object(v.a)("src"),E=function(){function t(e,n,c,s){Object(f.a)(this,t),Object.defineProperty(this,_,{writable:!0,value:void 0}),Object.defineProperty(this,k,{writable:!0,value:void 0}),Object.defineProperty(this,A,{writable:!0,value:void 0}),Object.defineProperty(this,w,{writable:!0,value:void 0}),typeof e===typeof{}?(Object(y.a)(this,_)[_]=e.n,Object(y.a)(this,k)[k]=e.y,Object(y.a)(this,A)[A]=e.s,Object(y.a)(this,w)[w]=e.src):(Object(y.a)(this,_)[_]=e,Object(y.a)(this,k)[k]=n,Object(y.a)(this,A)[A]=c,Object(y.a)(this,w)[w]=s)}return Object(S.a)(t,[{key:"name",get:function(){return Object(y.a)(this,_)[_]}},{key:"published",get:function(){return Object(y.a)(this,k)[k]}},{key:"stamped",get:function(){return Object(y.a)(this,A)[A]}},{key:"src",get:function(){return Object(y.a)(this,w)[w]}}]),t}(),N=[{n:"Stamp #1",y:1921,s:!1,src:"gfx/Azad_Hind_2_5+2_5_Annas.jpg"},{n:"Stamp #2",y:1931,s:!0,src:"gfx/Azad_Hind_3+3_Annas.jpg"},{n:"Stamp #3",y:1941,s:!1,src:"gfx/Azad_Hind_8+12_Annas.jpg"},{n:"Stamp #4",y:1951,s:!0,src:"gfx/Azad_Hind_12_Annas+1_Rupie.jpg"},{n:"Stamp #5",y:1961,s:!1,src:"gfx/Azad_Hind_0_5_Annas.jpg"},{n:"Stamp #6",y:1971,s:!1,src:"gfx/Azad_Hind_1_Anna.jpg"},{n:"Stamp #7",y:1981,s:!0,src:"gfx/Azad_Hind_2+2_Annas.jpg"},{n:"Stamp #8",y:1991,s:!1,src:"gfx/Azad_Hind_2_5_Annas.jpg"},{n:"Stamp #9",y:2001,s:!1,src:"gfx/Stamp_Azad_Hind.jpg"},{n:"Stamp #10",y:2011,s:!0,src:"gfx/istockphoto-604335070-1024x1024-1.jpg"},{n:"Stamp #11",y:2021,s:!1,src:"gfx/istockphoto-604335070-1024x1024-2.jpg"},{n:"Stamp #12",y:1922,s:!0,src:"gfx/istockphoto-604335070-1024x1024-3.jpg"},{n:"Stamp #13",y:1933,s:!0,src:"gfx/Untitled1.jpg"},{n:"Stamp #14",y:1944,s:!1,src:"gfx/istockphoto-604335070-1024x1024-4.jpg"},{n:"Stamp #15",y:1955,s:!1,src:"gfx/istockphoto-604335070-1024x1024-5.jpg"},{n:"Stamp #16",y:1966,s:!0,src:"gfx/istockphoto-604335070-1024x1024-6.jpg"},{n:"Stamp #17",y:1977,s:!0,src:"gfx/istockphoto-604335070-1024x1024-7.jpg"},{n:"Stamp #18",y:1988,s:!1,src:"gfx/istockphoto-604335070-1024x1024-8.jpg"},{n:"Stamp #19",y:1999,s:!0,src:"gfx/istockphoto-604335070-1024x1024-9.jpg"},{n:"Stamp #20",y:2010,s:!1,src:"gfx/istockphoto-604335070-1024x1024-10.jpg"},{n:"Stamp #21",y:2020,s:!0,src:"gfx/istockphoto-604335070-1024x1024-11.jpg"},{n:"Stamp #22",y:1925,s:!1,src:"gfx/istockphoto-604335070-1024x1024-12.jpg"},{n:"Stamp #23",y:1937,s:!1,src:"gfx/istockphoto-604335070-1024x1024-13.jpg"},{n:"Stamp #24",y:1949,s:!1,src:"gfx/Estonian-postage-stamps-From-left-to-right-and-top-to-bottom-S1-S2-S3-S18-1.png"},{n:"Stamp #25",y:1961,s:!0,src:"gfx/Estonian-postage-stamps-From-left-to-right-and-top-to-bottom-S1-S2-S3-S18-2.png"},{n:"Stamp #26",y:1973,s:!0,src:"gfx/Estonian-postage-stamps-From-left-to-right-and-top-to-bottom-S1-S2-S3-S18-3.png"},{n:"Stamp #27",y:1985,s:!1,src:"gfx/Estonian-postage-stamps-From-left-to-right-and-top-to-bottom-S1-S2-S3-S18-4.png"},{n:"Stamp #28",y:1997,s:!1,src:"gfx/Estonian-postage-stamps-From-left-to-right-and-top-to-bottom-S1-S2-S3-S18-5.png"},{n:"Stamp #29",y:2009,s:!1,src:"gfx/Estonian-postage-stamps-From-left-to-right-and-top-to-bottom-S1-S2-S3-S18-6.png"},{n:"Stamp #30",y:2011,s:!0,src:"gfx/Estonian-postage-stamps-From-left-to-right-and-top-to-bottom-S1-S2-S3-S18-7.png"}],P=void 0;function z(){return P||(P=[],(N||N).map((function(t){return P.push(new E(t))}))),P}var C=function(){var t=Object(c.useState)(4),e=Object(o.a)(t,2),n=e[0],s=e[1];return Object(c.useEffect)((function(){s(n)}),[n]),Object(r.jsxs)(l.a,{className:"p-0 App",fluid:!0,children:[Object(r.jsx)(u,{}),Object(r.jsxs)(b.a,{className:"g-0",children:[Object(r.jsxs)(d.a,{xs:1,className:"App-side-nav",children:[Object(r.jsx)(l.a,{className:"p-0",children:Object(r.jsxs)(b.a,{children:[Object(r.jsx)(d.a,{children:Object(r.jsx)("button",{onClick:function(){return s(1)},children:Object(r.jsx)("code",{children:"1"})})}),Object(r.jsx)(d.a,{children:Object(r.jsx)("button",{onClick:function(){return s(2)},children:Object(r.jsx)("code",{children:"2"})})}),Object(r.jsx)(d.a,{children:Object(r.jsx)("button",{onClick:function(){return s(3)},children:Object(r.jsx)("code",{children:"3"})})}),Object(r.jsx)(d.a,{children:Object(r.jsx)("button",{onClick:function(){return s(4)},children:Object(r.jsx)("code",{children:"4"})})}),Object(r.jsx)(d.a,{children:Object(r.jsx)("button",{onClick:function(){return s(5)},children:Object(r.jsx)("code",{children:"5"})})})]})}),"Consequat tempor anim amet laborum. Ullamco consectetur adipisicing commodo minim voluptate culpa. Voluptate laborum cupidatat et officia sint enim exercitation fugiat velit. Pariatur laboris officia consectetur eiusmod quis. In nostrud sunt Lorem nulla voluptate cupidatat officia veniam. Id sint aliqua cillum proident veniam nulla laboris labore veniam sit enim quis laborum nisi. Anim reprehenderit magna velit sit irure proident culpa."]}),Object(r.jsx)(d.a,{children:Object(r.jsx)(O,{collection:z(),cols:n})})]})]})};n(35);i.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(C,{})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.c68f9e56.chunk.js.map