(this["webpackJsonpreact-boilerplate-ideal-starter"]=this["webpackJsonpreact-boilerplate-ideal-starter"]||[]).push([[0],{41:function(e,n){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAM0AAADNBAMAAADpkulaAAAAElBMVEXc1KbMx7A/Egb/+dwkQmyV1Oi7WMeAAAAAz0lEQVR42u3WSwrCMBQF0ExcgbgBxbmldQW28/rb/1acqKDSkIEKeT33TR850HBD0/UvGROHw+FwOBwOh8PhcDgcDofzLee0LsuWw+FwOBzODJ1Nm8uew+FwOBzObJzjsrlPG8I5t2WpxmnKPlw1TrD70R/90R/9iX8/+anFCfy+ZWdVi6M/+qM/7kd/KnN26TOLghM4HA6Hw+H81rn0jxyyfwXdc2/gcDjhnUmse13hcDixnLfT+ymsy+4NHA4nvFMaDofD4XA4HA6HE8C5AdnNl/zz8GiBAAAAAElFTkSuQmCC"},48:function(e,n,t){e.exports=t(75)},75:function(e,n,t){"use strict";t.r(n);var a=t(13),i=t(0),r=t.n(i),o=t(17),l=t.n(o);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c=t(1),d=t(16),s=t(10),m=t(19),u=t(15),f=t(47),p="#3a529c",h="#1ca9f0",g="#ffffff",x="#ededf7",b="#f4f5f9",w="#495576",y="640px",E=t(43),v=t(44),k=c.c.img.withConfig({displayName:"Avatar__Image",componentId:"ouivhz-0"})(["border-radius:50%;height:",";width:",";"],(function(e){return e.size}),(function(e){return e.size})),C=function(e){var n=e.size||"2rem";return r.a.createElement(k,{src:e.src,size:n})},_=t(41),A=t.n(_),O=c.c.nav.withConfig({displayName:"Sidebar__Container",componentId:"jwstwj-0"})(["grid-area:sidebar;background-color:",";display:flex;flex-direction:column;overflow-y:auto;min-width:250px;box-shadow:1px 2px 4px rgba(0,0,0,0.5);@media (max-width:","){position:absolute;height:100%;transition:transform 0.3s ease-in-out;transform:translateX(",");min-width:70%;z-index:2;}"],x,y,(function(e){return e.isSidebarOpen?"0":"-100%"})),j=c.c.ul.withConfig({displayName:"Sidebar__SidebarList",componentId:"jwstwj-1"})(["list-style:none;padding:0;margin-top:0;"]),I=Object(c.c)(d.b).withConfig({displayName:"Sidebar__StyledNavLink",componentId:"jwstwj-2"})(["display:flex;flex:1;flex-direction:row;align-items:center;padding:20px;text-transform:capitalize;text-decoration:none;border-left:solid 5px ",";color:",";font-size:1.3rem;font-weight:bold;@media (min-width:","){font-size:1rem;}&.active{background-color:white;border-left:solid 5px ",";}svg{height:1em;width:1em;margin-right:1rem;}"],x,p,y,h),N=c.c.div.withConfig({displayName:"Sidebar__ProfileContainer",componentId:"jwstwj-3"})(["display:flex;flex-direction:column;align-items:center;padding:15px;background-color:",";color:",";span{margin-top:10px;font-size:1.2rem;}"],p,x),F=function(e){return r.a.createElement(O,{isSidebarOpen:e.isSidebarOpen},r.a.createElement(N,null,r.a.createElement(C,{src:A.a,size:"6rem"}),r.a.createElement("span",null,"Lester Freamon")),r.a.createElement(j,null,r.a.createElement("li",null,r.a.createElement(I,{to:"/",exact:!0,onClick:e.onLinkClicked},r.a.createElement(E.a,null),"Friends")),r.a.createElement("li",null,r.a.createElement(I,{to:"/about",onClick:e.onLinkClicked},r.a.createElement(v.a,null),"About"))))},L=t(25),z=t.n(L),S=t(45),B=t(46),D=t.n(B),M=Object(m.b)({name:"friends",initialState:{isLoading:!1,hasErrors:!1,friends:[]},reducers:{getFriends:function(e){e.isLoading=!0},getFriendsSuccess:function(e,n){e.friends=n.payload,e.isLoading=!1,e.hasErrors=!1},getFriendsFailure:function(e){e.isLoading=!1,e.hasErrors=!0}}}),H=M.actions,T=H.getFriends,R=H.getFriendsSuccess,W=H.getFriendsFailure,Y=function(e){return e.friends},U=M.reducer;var X=c.c.section.withConfig({displayName:"Page__Container",componentId:"rkohoa-0"})(["display:flex;flex:1;flex-direction:column;background-color:white;padding:20px;& h1{margin:0;color:",";}"],w),K=c.c.article.withConfig({displayName:"Page__Content",componentId:"rkohoa-1"})(["display:flex;flex:1;flex-direction:column;background-color:white;overflow-y:auto;align-items:center;"]),P=function(e){return r.a.createElement(X,null,r.a.createElement("h1",null,e.heading),r.a.createElement(K,null,e.children))},Q=c.c.div.withConfig({displayName:"FriendListItem__Container",componentId:"r184hv-0"})(["display:flex;flex:1;flex-direction:row;align-items:center;text-decoration:none;background-color:",";margin:10px 0;min-height:4rem;border-radius:5px;padding:15px 15px 15px 25px;"],x),V=c.c.div.withConfig({displayName:"FriendListItem__FriendDetailsContainer",componentId:"r184hv-1"})(["display:flex;margin-left:20px;flex-direction:column;"]),G=c.c.span.withConfig({displayName:"FriendListItem__FriendName",componentId:"r184hv-2"})(["display:flex;flex-direction:column;color:",";font-size:1.3rem;font-weight:bold;margin-bottom:8px;"],w),J=c.c.span.withConfig({displayName:"FriendListItem__FriendEmail",componentId:"r184hv-3"})(["display:flex;flex-direction:column;color:",";font-weight:bold;font-size:0.8rem;"],w),q=function(e){return r.a.createElement(Q,null,r.a.createElement(C,{src:e.friend.avatarUrl,size:"5rem"}),r.a.createElement(V,null,r.a.createElement(G,null,e.friend.name),r.a.createElement(J,null,e.friend.email)))},Z=c.c.div.withConfig({displayName:"Loader__Container",componentId:"rlafvn-0"})(["display:flex;flex-direction:column;justify-content:center;min-width:100px;min-height:100px;"]),$=c.c.div.withConfig({displayName:"Loader__DotsContainer",componentId:"rlafvn-1"})(["display:flex;flex-direction:row;justify-content:center;min-width:100px;min-height:100px;"]),ee=c.c.span.withConfig({displayName:"Loader__Dot",componentId:"rlafvn-2"})(["display:inline-block;width:20px;height:20px;border-radius:100%;background-color:",";margin:35px 5px;&:nth-child(1){animation:bounce 1s ease-in-out infinite;}&:nth-child(2){animation:bounce 1s ease-in-out 0.1s infinite;}&:nth-child(3){animation:bounce 1s ease-in-out 0.2s infinite;}@keyframes bounce{0%,75%,100%{-webkit-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0);transform:translateY(0);}25%{-webkit-transform:translateY(-20px);-ms-transform:translateY(-20px);-o-transform:translateY(-20px);transform:translateY(-20px);}}"],h),ne=c.c.span.withConfig({displayName:"Loader__Text",componentId:"rlafvn-3"})([""]),te=function(e){var n=e.text?r.a.createElement(ne,null,e.text):null;return r.a.createElement(Z,null,r.a.createElement($,null,r.a.createElement(ee,null),r.a.createElement(ee,null),r.a.createElement(ee,null)),n)},ae=c.c.ul.withConfig({displayName:"FriendsList__List",componentId:"sc-6d2pjk-0"})(["display:flex;flex-direction:column;justify-content:center;flex:1;list-style:none;padding:0;"]),ie=function(){var e=Object(u.c)(Y),n=e.friends,t=e.isLoading,a=e.hasErrors;return r.a.createElement(ae,null,t&&0===n.length?r.a.createElement(te,{text:"Making friends..."}):a||!t&&0===n.length?r.a.createElement("span",null,"Unable to find friends :-("):n.slice(0,10).map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(q,{friend:e}))})))},re=function(){var e=Object(u.b)();return Object(i.useEffect)((function(){e(function(){var e=Object(S.a)(z.a.mark((function e(n){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n(T());try{D.a.get("https://my-json-server.typicode.com/cmacdonnacha/mock-rest-endpoints/users").then((function(e){var t=e.data;n(R(t))}))}catch(t){n(W())}case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}())}),[e]),r.a.createElement(P,{heading:"My Friends"},r.a.createElement(ie,null))};function oe(){var e=Object(a.a)(["\n  display: flex;\n  flex: 1;\n  background-color: white;\n  justify-content: center;\n  align-items: center;\n"]);return oe=function(){return e},e}var le=c.c.p(oe()),ce=function(){return r.a.createElement(P,{heading:"About"},r.a.createElement(le,null,"This is the about page, where I tell you all about myself."))},de=c.c.main.withConfig({displayName:"Routes__Container",componentId:"f7nccp-0"})(["grid-area:content;display:flex;flex:1;margin:10px;overflow-y:auto;overflow-x:hidden;"]),se=function(){return r.a.createElement(de,null,r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/"},r.a.createElement(re,null)),r.a.createElement(s.a,{path:"/about"},r.a.createElement(ce,null))))},me=c.c.button.withConfig({displayName:"MenuButton__StyledMenuButton",componentId:"sc-1xcy7az-0"})(["@media (min-width:","){display:none;}position:absolute;display:flex;flex-direction:column;justify-content:space-around;width:2rem;height:2rem;background:transparent;border:none;cursor:pointer;padding:0;z-index:10;&:focus{outline:none;}div{width:2rem;height:0.25rem;background:",";border-radius:10px;transition:all 0.3s linear;position:relative;transform-origin:1px;:first-child{transform:",";}:nth-child(2){opacity:",";transform:",";}:nth-child(3){transform:",";}}"],y,g,(function(e){return e.isOpen?"rotate(45deg)":"rotate(0)"}),(function(e){return e.isOpen?"0":"1"}),(function(e){return e.isOpen?"translateX(20px)":"translateX(0)"}),(function(e){return e.isOpen?"rotate(-45deg)":"rotate(0)"})),ue=function(e){return r.a.createElement(me,{"aria-label":"Toggle menu","aria-expanded":e.isOpen,isOpen:e.isOpen,onClick:e.onClick},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))},fe=c.c.header.withConfig({displayName:"Header__Container",componentId:"sc-1h3vwow-0"})(["grid-area:header;background-color:#3a529c;display:flex;flex-direction:row;justify-content:flex-start;align-items:center;padding-left:15px;box-shadow:1px 2px 4px rgba(0,0,0,0.5);"]),pe=c.c.h3.withConfig({displayName:"Header__Title",componentId:"sc-1h3vwow-1"})(["margin-left:2.5em;color:",";@media (min-width:","){margin-left:0.2em;}"],g,y),he=function(e){return r.a.createElement(fe,null,r.a.createElement(ue,{isOpen:e.isSidebarOpen,onClick:e.onMenuButtonClicked}),r.a.createElement(pe,null,"React Boilerplate"))},ge=c.c.div.withConfig({displayName:"Backdrop__Container",componentId:"sc-4hhxck-0"})(["position:fixed;width:100%;height:100%;top:0;left:0;background:rgba(0,0,0,0.3);z-index:1;"]),xe=function(e){return r.a.createElement(ge,{onClick:e.onClick})},be=c.c.div.withConfig({displayName:"App__Layout",componentId:"sc-1i50f80-0"})(["height:100%;display:grid;grid-template-rows:50px 1fr;grid-template-columns:auto 2fr;grid-template-areas:'header header' 'sidebar content';"]);var we=function(){var e=Object(i.useState)(!1),n=Object(f.a)(e,2),t=n[0],a=n[1],o=function(){a(!t)},l=t?r.a.createElement(xe,{onClick:o}):null;return r.a.createElement(be,null,r.a.createElement(he,{isSidebarOpen:t,onMenuButtonClicked:o}),r.a.createElement(F,{isSidebarOpen:t,onLinkClicked:function(){t&&o()}}),l,r.a.createElement(se,null))},ye=t(5),Ee=Object(ye.c)({friends:U});function ve(){var e=Object(a.a)(["\n  html, #root {\n    height: 100%;\n    background-color: ",";\n  }\n\n  body {\n    height: 100%;\n    margin: 0;\n    font-family: 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',\n      'Droid Sans', 'Helvetica Neue', sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n"]);return ve=function(){return e},e}var ke=Object(m.a)({reducer:Ee}),Ce=Object(c.b)(ve(),b);l.a.render(r.a.createElement(u.a,{store:ke},r.a.createElement(c.a,{theme:{primary:"#00C068"}},r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,{basename:"/react-boilerplate"},r.a.createElement(s.a,{path:"/",component:we})),r.a.createElement(Ce,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[48,1,2]]]);
//# sourceMappingURL=main.dbfc10b0.chunk.js.map