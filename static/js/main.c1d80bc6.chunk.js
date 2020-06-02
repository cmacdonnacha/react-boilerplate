(this["webpackJsonpreact-boilerplate"]=this["webpackJsonpreact-boilerplate"]||[]).push([[0],{42:function(e,n){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAM0AAADNBAMAAADpkulaAAAAElBMVEXc1KbMx7A/Egb/+dwkQmyV1Oi7WMeAAAAAz0lEQVR42u3WSwrCMBQF0ExcgbgBxbmldQW28/rb/1acqKDSkIEKeT33TR850HBD0/UvGROHw+FwOBwOh8PhcDgcDofzLee0LsuWw+FwOBzODJ1Nm8uew+FwOBzObJzjsrlPG8I5t2WpxmnKPlw1TrD70R/90R/9iX8/+anFCfy+ZWdVi6M/+qM/7kd/KnN26TOLghM4HA6Hw+H81rn0jxyyfwXdc2/gcDjhnUmse13hcDixnLfT+ymsy+4NHA4nvFMaDofD4XA4HA6HE8C5AdnNl/zz8GiBAAAAAElFTkSuQmCC"},48:function(e,n,t){e.exports=t(75)},75:function(e,n,t){"use strict";t.r(n);var a=t(14),r=t(0),i=t.n(r),o=t(20),l=t.n(o);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c=t(1),s=t(18),d=t(11),m=t(22),u=t(17),p=t(47),f="#3a529c",g="#1ca9f0",h="#ffffff",x="#ededf7",b="#f4f5f9",y="#495576",w="640px",E=t(44),v=t(45),C=c.c.img.withConfig({displayName:"Avatar__Image",componentId:"sc-1bxvhip-0"})(["border-radius:50%;height:",";min-width:",";"],(function(e){return e.size}),(function(e){return e.size})),k=function(e){var n=e.src,t=e.size,a=e.alt,r=t||"2rem";return i.a.createElement(C,{src:n,size:r,alt:a})},_=t(42),A=t.n(_),O=c.c.nav.withConfig({displayName:"Sidebar__Container",componentId:"sc-2cnea-0"})(["grid-area:sidebar;background-color:",";display:flex;flex-direction:column;overflow-y:auto;min-width:250px;box-shadow:1px 2px 4px rgba(0,0,0,0.5);@media (max-width:","){position:absolute;height:100%;transition:transform 0.3s ease-in-out;transform:",";min-width:70%;z-index:2;}"],x,w,(function(e){return!e.isSidebarOpen&&"translateX(-100%)"})),I=c.c.ul.withConfig({displayName:"Sidebar__SidebarList",componentId:"sc-2cnea-1"})(["list-style:none;padding:0;margin-top:0;"]),N=Object(c.c)(s.b).withConfig({displayName:"Sidebar__StyledNavLink",componentId:"sc-2cnea-2"})(["display:flex;flex:1;flex-direction:row;align-items:center;padding:20px;text-transform:capitalize;text-decoration:none;border-left:solid 5px ",";color:",";font-size:1.3rem;font-weight:bold;@media (min-width:","){font-size:1rem;}&.active{background-color:white;border-left:solid 5px ",";}svg{height:1em;width:1em;margin-right:1rem;}"],x,f,w,g),F=c.c.div.withConfig({displayName:"Sidebar__ProfileContainer",componentId:"sc-2cnea-3"})(["display:flex;flex-direction:column;align-items:center;padding:15px;background-color:",";color:",";span{margin-top:10px;font-size:1.2rem;}"],f,x),z=function(e){var n=e.isSidebarOpen,t=e.onLinkClicked;return i.a.createElement(O,{isSidebarOpen:n},i.a.createElement(F,null,i.a.createElement(k,{src:A.a,size:"6rem"}),i.a.createElement("span",null,"Lester Freamon")),i.a.createElement(I,null,i.a.createElement("li",null,i.a.createElement(N,{to:"/",exact:!0,onClick:t},i.a.createElement(E.a,null),"Friends")),i.a.createElement("li",null,i.a.createElement(N,{to:"/about",onClick:t},i.a.createElement(v.a,null),"About"))))},j=t(9),L=t.n(j),S=t(16),B=t(46),M=t.n(B),D={get:function(){var e=Object(S.a)(L.a.mark((function e(n,t){var a;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M.a.get(n,{params:t});case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}()},H={getFriends:function(){var e=Object(S.a)(L.a.mark((function e(){var n,t;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.get("https://my-json-server.typicode.com/cmacdonnacha/mock-rest-endpoints/users");case 2:return n=e.sent,t=n,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},T=Object(m.b)({name:"friends",initialState:{isLoading:!1,hasErrors:!1,friends:[]},reducers:{getFriendsStarted:function(e){e.isLoading=!0},getFriendsSuccess:function(e,n){e.friends=n.payload,e.isLoading=!1,e.hasErrors=!1},getFriendsFailed:function(e){e.isLoading=!1,e.hasErrors=!0}}}),R=T.actions,W=R.getFriendsStarted,Y=R.getFriendsSuccess,X=R.getFriendsFailed,K=function(e){return e.friends},P=T.reducer;var U=c.c.section.withConfig({displayName:"Page__Container",componentId:"bggh82-0"})(["display:flex;flex:1;flex-direction:column;background-color:white;padding:20px;& h1{margin:0;color:",";}"],y),Q=c.c.article.withConfig({displayName:"Page__Content",componentId:"bggh82-1"})(["display:flex;flex:1;flex-direction:column;background-color:white;overflow-y:auto;align-items:center;"]),V=function(e){var n=e.heading,t=e.children;return i.a.createElement(U,null,i.a.createElement("h1",null,n),i.a.createElement(Q,null,t))},G=c.c.div.withConfig({displayName:"FriendListItem__Container",componentId:"y5n5ob-0"})(["display:flex;flex:1;flex-direction:row;align-items:center;text-decoration:none;background-color:",";margin:10px 0;min-height:4rem;border-radius:5px;padding:15px 15px 15px 25px;"],x),J=c.c.div.withConfig({displayName:"FriendListItem__FriendDetailsContainer",componentId:"y5n5ob-1"})(["display:flex;margin-left:20px;flex-direction:column;"]),q=c.c.span.withConfig({displayName:"FriendListItem__FriendName",componentId:"y5n5ob-2"})(["display:flex;flex-direction:column;color:",";font-size:1.3rem;font-weight:bold;margin-bottom:8px;"],y),Z=c.c.span.withConfig({displayName:"FriendListItem__FriendEmail",componentId:"y5n5ob-3"})(["display:flex;flex-direction:column;color:",";font-weight:bold;font-size:0.8rem;"],y),$=function(e){var n=e.friend;return i.a.createElement(G,null,i.a.createElement(k,{src:n.avatarUrl,size:"5rem"}),i.a.createElement(J,null,i.a.createElement(q,null,n.name),i.a.createElement(Z,null,n.email)))},ee=c.c.div.withConfig({displayName:"Loader__Container",componentId:"sc-851yaz-0"})(["display:flex;flex-direction:column;justify-content:center;min-width:100px;min-height:100px;"]),ne=c.c.div.withConfig({displayName:"Loader__DotsContainer",componentId:"sc-851yaz-1"})(["display:flex;flex-direction:row;justify-content:center;min-width:100px;min-height:100px;"]),te=c.c.span.withConfig({displayName:"Loader__Dot",componentId:"sc-851yaz-2"})(["display:inline-block;width:20px;height:20px;border-radius:100%;background-color:",";margin:35px 5px;&:nth-child(1){animation:bounce 1s ease-in-out infinite;}&:nth-child(2){animation:bounce 1s ease-in-out 0.1s infinite;}&:nth-child(3){animation:bounce 1s ease-in-out 0.2s infinite;}@keyframes bounce{0%,75%,100%{-webkit-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0);transform:translateY(0);}25%{-webkit-transform:translateY(-20px);-ms-transform:translateY(-20px);-o-transform:translateY(-20px);transform:translateY(-20px);}}"],g),ae=c.c.span.withConfig({displayName:"Loader__Text",componentId:"sc-851yaz-3"})([""]),re=function(e){var n=e.text,t=n?i.a.createElement(ae,null,n):null;return i.a.createElement(ee,null,i.a.createElement(ne,null,i.a.createElement(te,null),i.a.createElement(te,null),i.a.createElement(te,null)),t)},ie=c.c.ul.withConfig({displayName:"FriendsList__List",componentId:"sc-1in825q-0"})(["display:flex;flex-direction:column;justify-content:center;flex:1;list-style:none;padding:0;"]),oe=function(){var e=Object(u.c)(K),n=e.friends,t=e.isLoading,a=e.hasErrors;return i.a.createElement(ie,null,t&&0===n.length?i.a.createElement(re,{text:"Making friends..."}):a||!t&&0===n.length?i.a.createElement("span",null,"Unable to find friends :-("):n.slice(0,10).map((function(e){return i.a.createElement("li",{key:e.id},i.a.createElement($,{friend:e}))})))},le=function(){var e=Object(u.b)();return Object(r.useEffect)((function(){e(function(){var e=Object(S.a)(L.a.mark((function e(n){var t;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(W()),e.prev=1,e.next=4,H.getFriends();case 4:t=e.sent,n(Y(t)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),n(X());case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(n){return e.apply(this,arguments)}}())}),[e]),i.a.createElement(V,{heading:"My Friends"},i.a.createElement(oe,null))};function ce(){var e=Object(a.a)(["\n  display: flex;\n  flex: 1;\n  background-color: white;\n  justify-content: center;\n  align-items: center;\n"]);return ce=function(){return e},e}var se=c.c.p(ce()),de=function(){return i.a.createElement(V,{heading:"About"},i.a.createElement(se,null,"This is the about page, where I tell you all about myself!"))},me=c.c.main.withConfig({displayName:"Routes__Container",componentId:"c4exm-0"})(["grid-area:content;display:flex;flex:1;margin:10px;overflow-y:auto;overflow-x:hidden;"]),ue=function(){return i.a.createElement(me,null,i.a.createElement(d.c,null,i.a.createElement(d.a,{exact:!0,path:"/"},i.a.createElement(le,null)),i.a.createElement(d.a,{path:"/about"},i.a.createElement(de,null))))},pe=c.c.button.withConfig({displayName:"MenuButton__StyledMenuButton",componentId:"edzm44-0"})(["@media (min-width:","){display:none;}position:absolute;display:flex;flex-direction:column;justify-content:space-around;width:2rem;height:2rem;background:transparent;border:none;cursor:pointer;padding:0;z-index:10;&:focus{outline:none;}div{width:2rem;height:0.25rem;background:",";border-radius:10px;transition:all 0.3s linear;position:relative;transform-origin:1px;:first-child{transform:",";}:nth-child(2){opacity:",";transform:",";}:nth-child(3){transform:",";}}"],w,h,(function(e){return e.isOpen?"rotate(45deg)":"rotate(0)"}),(function(e){return e.isOpen?"0":"1"}),(function(e){return e.isOpen?"translateX(20px)":"translateX(0)"}),(function(e){return e.isOpen?"rotate(-45deg)":"rotate(0)"})),fe=function(e){var n=e.isOpen,t=e.onClick;return i.a.createElement(pe,{"aria-label":"Toggle menu","aria-expanded":n,isOpen:n,onClick:t},i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null))},ge=c.c.header.withConfig({displayName:"Header__Container",componentId:"sc-1rt5dm9-0"})(["grid-area:header;background-color:#3a529c;display:flex;flex-direction:row;justify-content:flex-start;align-items:center;padding-left:15px;box-shadow:1px 2px 4px rgba(0,0,0,0.5);"]),he=c.c.h3.withConfig({displayName:"Header__Title",componentId:"sc-1rt5dm9-1"})(["margin-left:2.5em;color:",";@media (min-width:","){margin-left:0.2em;}"],h,w),xe=function(e){var n=e.isSidebarOpen,t=e.onMenuButtonClicked;return i.a.createElement(ge,null,i.a.createElement(fe,{isOpen:n,onClick:t}),i.a.createElement(he,null,"React Boilerplate"))},be=c.c.div.withConfig({displayName:"Backdrop__Container",componentId:"sc-1ojd1uv-0"})(["position:fixed;width:100%;height:100%;top:0;left:0;background:rgba(0,0,0,0.3);z-index:1;"]),ye=function(e){var n=e.onClick;return i.a.createElement(be,{onClick:n})},we=c.c.div.withConfig({displayName:"App__Layout",componentId:"fw9cl6-0"})(["height:100%;display:grid;grid-template-rows:50px 1fr;grid-template-columns:auto 2fr;grid-template-areas:'header header' 'sidebar content';"]);var Ee=function(){var e=Object(r.useState)(!1),n=Object(p.a)(e,2),t=n[0],a=n[1],o=function(){a(!t)},l=t?i.a.createElement(ye,{onClick:o}):null;return i.a.createElement(we,null,i.a.createElement(xe,{isSidebarOpen:t,onMenuButtonClicked:o}),i.a.createElement(z,{isSidebarOpen:t,onLinkClicked:function(){t&&o()}}),l,i.a.createElement(ue,null))},ve=t(5),Ce=Object(ve.c)({friends:P});function ke(){var e=Object(a.a)(["\n  html, #root {\n    height: 100%;\n    background-color: ",";\n  }\n\n  body {\n    height: 100%;\n    margin: 0;\n    font-family: 'Inter', 'system-ui', '-apple-system', sans-serif;\n  }\n"]);return ke=function(){return e},e}var _e=Object(m.a)({reducer:Ce}),Ae=Object(c.b)(ke(),b);l.a.render(i.a.createElement(u.a,{store:_e},i.a.createElement(c.a,{theme:{primary:"#00C068"}},i.a.createElement(i.a.Fragment,null,i.a.createElement(s.a,{basename:"/react-boilerplate"},i.a.createElement(d.a,{path:"/",component:Ee})),i.a.createElement(Ae,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[48,1,2]]]);
//# sourceMappingURL=main.c1d80bc6.chunk.js.map