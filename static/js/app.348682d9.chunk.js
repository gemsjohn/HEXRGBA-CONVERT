(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{102:function(e,t,n){e.exports=n(145)},135:function(e,t,n){e.exports=n.p+"static/media/x.bc64bca0.png"},98:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return _}));var r=n(6),o=n(22),i=n(7),a=n(17),l=n(29),c=n(94),d=n(97),s=n(15),u=n(2),f=n.n(u),h=n(13),b=n.n(h),g=n(0),j=n.n(g),p=n(93),m=n(52),y=n(65),S=n(57),x=n(60),w=n.n(x),O=function(e){return w.a.scale([w()(e).brighten(2),e,w()(e).darken(2)]).colors(10)},v=n(51),B=n(1),k=(a.default.get("window").width,a.default.get("window").height,a.default.get("window")),C=(k.width,k.height),I=C/800,T=function(e){var t=e*I;return Math.round(l.default.roundToNearestPixel(t))-2},R=function(){var e=Object(g.useState)(""),t=b()(e,2),r=t[0],a=t[1],l=Object(g.useState)(""),c=b()(l,2),d=c[0],s=c[1],u=Object(g.useState)(""),h=b()(u,2),x=(h[0],h[1],Object(g.useState)([])),w=b()(x,2),k=w[0],C=w[1],I=Object(g.useState)(!1),R=b()(I,2),A=R[0],F=R[1],z=Object(g.useState)(!1),_=b()(z,2),E=_[0],L=_[1],P=j.a.useState(""),M=b()(P,2),G=M[0],H=M[1],J=j.a.useState(""),X=b()(J,2),D=X[0],N=X[1],V=Object(S.useFonts)({Inter_900Black:S.Inter_900Black});if(!b()(V,1)[0])return null;var $=function(){var e=f()((function*(){yield v.setStringAsync(d),console.log("copyToClipboard"),q()}));return function(){return e.apply(this,arguments)}}(),q=function(){var e=f()((function*(){var e=yield v.getStringAsync();H(e)}));return function(){return e.apply(this,arguments)}}(),K=function(){var e=f()((function*(e){yield v.setStringAsync(e),console.log("copyToClipboard"),Q()}));return function(t){return e.apply(this,arguments)}}(),Q=function(){var e=f()((function*(){var e=yield v.getStringAsync();N(e)}));return function(){return e.apply(this,arguments)}}();return Object(B.jsxs)(i.default,{children:[Object(B.jsx)(o.default,{style:{fontFamily:"Inter_900Black",fontSize:"4vh",alignSelf:"center",color:"white"},children:"Convert HEX or RGBA"}),Object(B.jsxs)(i.default,{style:{},children:[r&&Object(B.jsx)(m.default,{onPress:function(){a("")},style:{height:"4vh",width:"4vh",borderRadius:10,position:"absolute",zIndex:10,backgroundColor:"#ff1654",top:"1vh"},children:Object(B.jsx)(y.default,{source:n(135),style:{height:15,width:15,alignSelf:"center",marginTop:"1.1vh",marginLeft:"0.3vh"}})}),Object(B.jsxs)(i.default,{style:{flexDirection:"row",alignSelf:"center",margin:10},children:[Object(B.jsx)(p.default,{value:r,onChangeText:a,placeholder:"Enter HEX or RGBA value",style:{outline:"none",backgroundColor:"transparent",color:"white",display:"flex",justifyContent:"flex-start",padding:30,border:"solid",borderColor:"white",borderTopWidth:4,borderLeftWidth:4,borderBottomWidth:4,borderRightWidth:0,borderTopLeftRadius:30,borderBottomLeftRadius:10,alignSelf:"center",marginTop:10,marginBottom:4,width:"17rem",fontSize:"1.8vh",fontFamily:"Inter_900Black"}}),Object(B.jsx)(m.default,{onPress:function(){return function(){if(H(""),r.startsWith("#")){var e=parseInt(r.slice(1,3),16),t=parseInt(r.slice(3,5),16),n=parseInt(r.slice(5,7),16);s("rgba("+e+", "+t+", "+n+", 1)"),C(O("rgba("+e+", "+t+", "+n+", 1)"))}else if(r.startsWith("rgba")){C(O(r));var o=r.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/),i=parseInt(o[1]).toString(16).padStart(2,"0"),a=parseInt(o[2]).toString(16).padStart(2,"0"),l=parseInt(o[3]).toString(16).padStart(2,"0");s("#"+i+a+l)}}()},style:{backgroundColor:"#ff1654",padding:"1vh",border:"solid",borderColor:"white",borderTopWidth:4,borderRightWidth:4,borderBottomWidth:4,borderLeftWidth:0,borderTopRightRadius:10,borderBottomRightRadius:30,marginTop:10,marginBottom:4,width:"6rem"},children:Object(B.jsx)(o.default,{style:{color:"white",marginTop:"2.5vh",fontSize:"2vh",fontFamily:"Inter_900Black",alignSelf:"center"},children:"SWAP!"})})]}),d?Object(B.jsx)(B.Fragment,{children:Object(B.jsxs)(m.default,{onPress:$,activeOpacity:1,style:[W.button,A?W.hoveredButton:W.normalButton],onMouseEnter:function(){return F(!0)},onMouseLeave:function(){return F(!1)},children:[Object(B.jsx)(o.default,{style:{color:"black",fontSize:30,marginTop:"4vh",marginBottom:"2vh",fontFamily:"Inter_900Black",alignSelf:"center"},children:d}),""!=G&&Object(B.jsx)(o.default,{style:{color:"black",fontSize:20,margin:T(20),fontFamily:"Inter_900Black",alignSelf:"center"},children:"Copied!"}),Object(B.jsx)(i.default,{style:{width:"18rem",alignSelf:"center",height:"15rem",marginBottom:T(20),borderRadius:30,backgroundColor:""+d}})]})}):Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(o.default,{style:{color:"white",fontSize:30,margin:T(20),fontFamily:"Inter_900Black",alignSelf:"center"},children:"...result"}),Object(B.jsx)(i.default,{style:{width:"18rem",alignSelf:"center",height:"15rem",marginBottom:"2rem",borderRadius:30,borderWidth:4,borderColor:"white"}})]})]}),Object(B.jsx)(i.default,{style:{flexDirection:"row",flexWrap:"wrap",width:"22rem",alignSelf:"center",justifyContent:"center"},children:k.map((function(e,t){return Object(B.jsx)(B.Fragment,{children:Object(B.jsx)(m.default,{onPress:function(){return K(e)},style:{flexWrap:"wrap",width:75,margin:4},onMouseEnter:function(){return L(!0)},onMouseLeave:function(){return L(!1)},children:Object(B.jsx)(i.default,{style:{backgroundColor:e,height:50,width:75,borderRadius:5},children:E&&Object(B.jsx)(o.default,{style:{fontFamily:"Inter_900Black",alignSelf:"center",marginTop:"1rem"},children:e})},t)},t)})}))}),Object(B.jsx)(i.default,{style:{alignSelf:"center"},children:Object(B.jsx)(o.default,{style:{color:"white",fontFamily:"Inter_900Black",fontSize:"5rem"},children:D})}),Object(B.jsx)(i.default,{style:{height:500}})]})},W=r.default.create({button:{padding:10,borderRadius:5},hoveredButton:{backgroundColor:"rgba(255, 255, 255, 0.75)",marginBottom:T(20),width:"22rem",alignSelf:"center"},normalButton:{backgroundColor:"#fff",marginBottom:T(20),width:"22rem",alignSelf:"center"},buttonText:{color:"#000",fontSize:18}}),A=n(99),F=n(100),z=(a.default.get("window").width,a.default.get("window").height,a.default.get("window"));z.width,z.height;function _(){return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(A.LinearGradient,{colors:["#181818","#000000"],style:{opacity:1,width:"100%",alignSelf:"center",flex:1},children:Object(B.jsxs)(i.default,{children:[Object(B.jsx)(i.default,{style:{backgroundColor:"rgba(255, 255, 255, 0.05)",height:"4rem"},children:Object(B.jsx)(o.default,{style:{color:"#b892ff",alignSelf:"center",marginTop:"0.8rem",fontSize:"2rem",fontWeight:"bold",fontFamily:"Inter_900Black"},children:"HEX to RGBA Pro"})}),Object(B.jsx)(i.default,{style:{},children:Object(B.jsx)(c.default,{style:E.container,children:Object(B.jsx)(d.default,{style:{},showsHorizontalScrollIndicator:!1,showsVerticalScrollIndicator:!1,children:Object(B.jsx)(R,{})})})})]})}),"web"===s.default.OS&&Object(B.jsx)(F.WebView,{source:{uri:"https://hextorgbapro.com/index.html"},style:{height:"100%"},javaScriptEnabled:!0,domStorageEnabled:!0,injectedJavaScript:"\n          (function() {\n            // Add your AdSense code here\n            var script = document.createElement('script');\n            script.async = true;\n            script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';\n            var ins = document.createElement('ins');\n            ins.className = 'adsbygoogle';\n            ins.style.display = 'block';\n            ins.setAttribute('data-ad-client', 'ca-pub-3255964932603196');\n            ins.setAttribute('data-ad-slot', '');\n            ins.setAttribute('data-ad-format', 'auto');\n            ins.setAttribute('data-full-width-responsive', 'true');\n            document.body.appendChild(script);\n            document.body.appendChild(ins);\n            (adsbygoogle = window.adsbygoogle || []).push({});\n          })();\n        "})]})}var E=r.default.create({container:{alignItems:"center",justifyContent:"center",marginTop:"6vh"}})}},[[102,1,2]]]);
//# sourceMappingURL=app.348682d9.chunk.js.map