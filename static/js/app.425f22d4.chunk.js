(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{122:function(t,e,r){t.exports=r.p+"static/media/x.bc64bca0.png"},164:function(t,e,r){"use strict";r.r(e),r.d(e,"default",(function(){return K}));var n=r(10),o=r(28),a=r(5),i=r(27),l=r(33),c=r(105),d=r(51),s=r(36),u=r(13),h=r.n(u),f=r(9),g=r.n(f),b=r(0),p=r.n(b),j=r(71),m=r(35),S=r(72),y=r(95),w=r.n(y),O=function(t){return w.a.scale([w()(t).brighten(2),t,w()(t).darken(2)]).colors(10)},x=r(48),v=r(7),B=function(){var t=Object(b.useState)(""),e=g()(t,2),n=e[0],i=e[1],l=Object(b.useState)([]),c=g()(l,2),d=c[0],u=c[1],f=p.a.useState(""),S=g()(f,2),y=S[0],w=S[1],O=Object(b.useState)(!1),B=g()(O,2),k=(B[0],B[1]),R=function(){var t=h()((function*(t){yield x.setStringAsync(t),console.log("copyToClipboard"),C()}));return function(e){return t.apply(this,arguments)}}(),C=function(){var t=h()((function*(){var t=yield x.getStringAsync();w(t)}));return function(){return t.apply(this,arguments)}}();return Object(v.jsxs)(a.default,{children:[Object(v.jsx)(o.default,{style:{fontFamily:"Inter_900Black",fontSize:"4vh",alignSelf:"center",color:"white"},children:"Custom Palette"}),Object(v.jsxs)(a.default,{style:{},children:[n&&Object(v.jsx)(s.default,{onPress:function(){i(""),i(""),u([]),w("")},style:{height:"4vh",width:"4vh",borderRadius:10,position:"absolute",zIndex:10,backgroundColor:"#ff1654",top:"1vh",left:"-1.5vw"},children:Object(v.jsx)(m.default,{source:r(122),style:{height:15,width:15,alignSelf:"center",marginTop:"1.3vh",marginLeft:"0.1vh"}})}),Object(v.jsxs)(a.default,{style:{flexDirection:"column",alignSelf:"center",margin:10},children:[Object(v.jsx)(j.default,{value:n,onChangeText:function(t){return i(t)},placeholder:"Enter HEX or RGBA value",style:{outline:"none",backgroundColor:"transparent",color:"white",display:"flex",justifyContent:"flex-start",padding:30,border:"solid",borderColor:"white",borderWidth:4,borderBottomWidth:2,borderTopLeftRadius:30,borderBottomLeftRadius:0,borderTopRightRadius:30,borderBottomRightRadius:0,alignSelf:"center",marginTop:10,width:"20rem",fontSize:"1.8vh",fontFamily:"Inter_900Black"}}),Object(v.jsx)(s.default,{onPress:function(){if(n.startsWith("#")||n.startsWith("rgba")){var t=function(t){if(t.startsWith("#")){var e=parseInt(t.substring(1,3),16),r=parseInt(t.substring(3,5),16),n=parseInt(t.substring(5,7),16),o=(1+Math.sqrt(5))/2;return["#"+e.toString(16).padStart(2,"0")+r.toString(16).padStart(2,"0")+n.toString(16).padStart(2,"0"),"#"+Math.round(e*o).toString(16).padStart(2,"0")+Math.round(r*o).toString(16).padStart(2,"0")+Math.round(n*o).toString(16).padStart(2,"0"),"#"+Math.round(e/o).toString(16).padStart(2,"0")+Math.round(r/o).toString(16).padStart(2,"0")+Math.round(n/o).toString(16).padStart(2,"0"),"#"+Math.round(e*o).toString(16).padStart(2,"0")+Math.round(r/o).toString(16).padStart(2,"0")+Math.round(n*o).toString(16).padStart(2,"0"),"#"+Math.round(e/o).toString(16).padStart(2,"0")+Math.round(r*o).toString(16).padStart(2,"0")+Math.round(n*o).toString(16).padStart(2,"0")]}if(t.startsWith("rgba")){console.log("STARTS WITH");var a=t.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/),i="#"+parseInt(a[1]).toString(16).padStart(2,"0")+parseInt(a[2]).toString(16).padStart(2,"0")+parseInt(a[3]).toString(16).padStart(2,"0"),l=parseInt(i.substring(1,3),16),c=parseInt(i.substring(3,5),16),d=parseInt(i.substring(5,7),16),s=(1+Math.sqrt(5))/2;return["#"+l.toString(16).padStart(2,"0")+c.toString(16).padStart(2,"0")+d.toString(16).padStart(2,"0"),"#"+Math.round(l*s).toString(16).padStart(2,"0")+Math.round(c*s).toString(16).padStart(2,"0")+Math.round(d*s).toString(16).padStart(2,"0"),"#"+Math.round(l/s).toString(16).padStart(2,"0")+Math.round(c/s).toString(16).padStart(2,"0")+Math.round(d/s).toString(16).padStart(2,"0"),"#"+Math.round(l*s).toString(16).padStart(2,"0")+Math.round(c/s).toString(16).padStart(2,"0")+Math.round(d*s).toString(16).padStart(2,"0"),"#"+Math.round(l/s).toString(16).padStart(2,"0")+Math.round(c*s).toString(16).padStart(2,"0")+Math.round(d*s).toString(16).padStart(2,"0")]}}(n);u(t)}else console.log("ERROR")},style:{backgroundColor:"#ff1654",padding:"1vh",border:"solid",borderColor:"white",borderWidth:4,borderTopWidth:2,borderTopLeftRadius:0,borderBottomLeftRadius:30,borderTopRightRadius:0,borderBottomRightRadius:30,marginBottom:4,width:"20rem"},children:Object(v.jsx)(o.default,{style:{color:"white",marginTop:"0.5vh",fontSize:"2vh",fontFamily:"Inter_900Black",alignSelf:"center"},children:"Generate!"})})]}),Object(v.jsx)(a.default,{style:{flexDirection:"row",flexWrap:"wrap",width:"22rem",alignSelf:"center",justifyContent:"center"},children:d.map((function(t,e){return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)(s.default,{onPress:function(){return R(t)},style:{flexWrap:"wrap",width:75,margin:4},onMouseEnter:function(){return k(!0)},onMouseLeave:function(){return k(!1)},children:Object(v.jsx)(a.default,{style:{backgroundColor:t,height:50,width:75,borderRadius:5}},e)},e)})}))}),Object(v.jsxs)(a.default,{style:{alignSelf:"center",flexDirection:"column"},children:[Object(v.jsx)(o.default,{style:{color:"white",fontFamily:"Inter_900Black",fontSize:"2.2rem"},children:y}),""!=y&&Object(v.jsx)(o.default,{style:{color:"white",fontFamily:"Inter_900Black",fontSize:"1rem",alignSelf:"center"},children:"Copied!"})]})]})]})},k=(i.default.get("window").width,i.default.get("window").height,i.default.get("window")),R=(k.width,k.height),C=R/800,I=function(t){var e=t*C;return Math.round(l.default.roundToNearestPixel(e))-2},T=function(){var t=Object(b.useState)(""),e=g()(t,2),n=e[0],i=e[1],l=Object(b.useState)(""),c=g()(l,2),d=c[0],u=c[1],f=Object(b.useState)(""),y=g()(f,2),w=(y[0],y[1],Object(b.useState)([])),k=g()(w,2),R=k[0],C=k[1],T=Object(b.useState)(!1),z=g()(T,2),W=z[0],P=z[1],F=Object(b.useState)(!1),_=g()(F,2),L=(_[0],_[1]),E=p.a.useState(""),A=g()(E,2),H=A[0],D=A[1],G=p.a.useState(""),X=g()(G,2),N=X[0],V=X[1],q=Object(S.useFonts)({Inter_900Black:S.Inter_900Black});if(!g()(q,1)[0])return null;var J=function(){var t=h()((function*(){yield x.setStringAsync(d),console.log("copyToClipboard"),$()}));return function(){return t.apply(this,arguments)}}(),$=function(){var t=h()((function*(){var t=yield x.getStringAsync();D(t)}));return function(){return t.apply(this,arguments)}}(),K=function(){var t=h()((function*(t){yield x.setStringAsync(t),console.log("copyToClipboard"),Q()}));return function(e){return t.apply(this,arguments)}}(),Q=function(){var t=h()((function*(){var t=yield x.getStringAsync();V(t)}));return function(){return t.apply(this,arguments)}}();return Object(v.jsxs)(a.default,{style:{flexDirection:"row",flexWrap:"wrap",alignSelf:"center",justifyContent:"center"},children:[Object(v.jsxs)(a.default,{style:{marginLeft:"3rem",marginRight:"3rem",marginTop:"3rem"},children:[Object(v.jsx)(o.default,{style:{fontFamily:"Inter_900Black",fontSize:"4vh",alignSelf:"center",color:"white"},children:"Convert HEX or RGBA"}),Object(v.jsxs)(a.default,{style:{},children:[n&&Object(v.jsx)(s.default,{onPress:function(){i(""),u(""),C([]),V("")},style:{height:"4vh",width:"4vh",borderRadius:10,position:"absolute",zIndex:10,backgroundColor:"#ff1654",top:"1vh"},children:Object(v.jsx)(m.default,{source:r(122),style:{height:15,width:15,alignSelf:"center",marginTop:"1.3vh",marginLeft:"0.1vh"}})}),Object(v.jsxs)(a.default,{style:{flexDirection:"column",alignSelf:"center",margin:10},children:[Object(v.jsx)(j.default,{value:n,onChangeText:i,placeholder:"Enter HEX or RGBA value",style:{outline:"none",backgroundColor:"transparent",color:"white",display:"flex",justifyContent:"flex-start",padding:30,border:"solid",borderColor:"white",borderWidth:4,borderBottomWidth:2,borderTopLeftRadius:30,borderBottomLeftRadius:0,borderTopRightRadius:30,borderBottomRightRadius:0,alignSelf:"center",marginTop:10,width:"20rem",fontSize:"1.8vh",fontFamily:"Inter_900Black"}}),Object(v.jsx)(s.default,{onPress:function(){return function(){if(D(""),n.startsWith("#")){var t=parseInt(n.slice(1,3),16),e=parseInt(n.slice(3,5),16),r=parseInt(n.slice(5,7),16);u("rgba("+t+", "+e+", "+r+", 1)"),C(O("rgba("+t+", "+e+", "+r+", 1)"))}else if(n.startsWith("rgba")){C(O(n));var o=n.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/),a=parseInt(o[1]).toString(16).padStart(2,"0"),i=parseInt(o[2]).toString(16).padStart(2,"0"),l=parseInt(o[3]).toString(16).padStart(2,"0");u("#"+a+i+l)}}()},style:{backgroundColor:"#ff1654",padding:"1vh",border:"solid",borderColor:"white",borderWidth:4,borderTopWidth:2,borderTopLeftRadius:0,borderBottomLeftRadius:30,borderTopRightRadius:0,borderBottomRightRadius:30,marginBottom:4,width:"20rem"},children:Object(v.jsx)(o.default,{style:{color:"white",marginTop:"0.5vh",fontSize:"2vh",fontFamily:"Inter_900Black",alignSelf:"center"},children:"SWAP!"})})]}),d&&Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)(s.default,{onPress:J,activeOpacity:1,style:[M.button,W?M.hoveredButton:M.normalButton],onMouseEnter:function(){return P(!0)},onMouseLeave:function(){return P(!1)},children:[Object(v.jsx)(o.default,{style:{color:"black",fontSize:30,marginTop:"0.5rem",marginBottom:"2vh",fontFamily:"Inter_900Black",alignSelf:"center"},children:d}),""!=H&&Object(v.jsx)(o.default,{style:{color:"black",fontSize:20,margin:"0.5rem",fontFamily:"Inter_900Black",alignSelf:"center"},children:"Copied!"}),Object(v.jsx)(a.default,{style:{width:"18rem",alignSelf:"center",height:"15rem",marginBottom:I(20),borderRadius:30,backgroundColor:""+d}})]})})]}),Object(v.jsx)(a.default,{style:{flexDirection:"row",flexWrap:"wrap",width:"22rem",alignSelf:"center",justifyContent:"center"},children:R.map((function(t,e){return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)(s.default,{onPress:function(){return K(t)},style:{flexWrap:"wrap",width:75,margin:4},onMouseEnter:function(){return L(!0)},onMouseLeave:function(){return L(!1)},children:Object(v.jsx)(a.default,{style:{backgroundColor:t,height:50,width:75,borderRadius:5}},e)},e)})}))}),Object(v.jsxs)(a.default,{style:{alignSelf:"center",flexDirection:"column"},children:[Object(v.jsx)(o.default,{style:{color:"white",fontFamily:"Inter_900Black",fontSize:"2.2rem"},children:N}),""!=N&&Object(v.jsx)(o.default,{style:{color:"white",fontFamily:"Inter_900Black",fontSize:"1rem",alignSelf:"center"},children:"Copied!"})]})]}),Object(v.jsx)(a.default,{style:{marginLeft:"3rem",marginRight:"3rem",marginTop:"3rem"},children:Object(v.jsx)(a.default,{style:{},children:Object(v.jsx)(B,{})})})]})},M=n.default.create({button:{padding:10,borderRadius:5},hoveredButton:{backgroundColor:"rgba(255, 255, 255, 0.75)",marginBottom:I(20),width:"22rem",alignSelf:"center"},normalButton:{backgroundColor:"#fff",marginBottom:I(20),width:"22rem",alignSelf:"center"},buttonText:{color:"#000",fontSize:18}}),z=r(111),W=r(239),P=r(238),F=r(8),_=r.n(F);function L(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function E(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?L(Object(r),!0).forEach((function(e){_()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):L(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}i.default.get("window").width,i.default.get("window").height;var A=i.default.get("window"),H=(A.width,A.height),D=H/800,G=function(t){var e=t*D;return Math.round(l.default.roundToNearestPixel(e))-2},X=function(){return Object(v.jsx)(a.default,{style:{flexDirection:"row",flexWrap:"wrap"},children:Object(v.jsxs)(a.default,{style:{alignSelf:"center"},children:[Object(v.jsx)(o.default,{style:E(E({},N.paragraph),{},{color:"#00b4d8"}),children:"Complementary Colors"}),Object(v.jsx)(o.default,{style:N.paragraph,children:"Certain colors and hues can work well together and appear to be complementary because of the way that the colors are arranged on the color wheel. The color wheel is a visual representation of the colors of the visible spectrum arranged in a circle."}),Object(v.jsx)(o.default,{style:N.paragraph,children:"There are a few different ways that colors can be arranged on the color wheel, but one common way is to arrange the primary colors (red, yellow, and blue) around the wheel, with the secondary colors (orange, green, and purple) between the primary colors. The tertiary colors (yellow-green, blue-green, blue-purple, red-purple, red-orange, and yellow-orange) are located between the primary and secondary colors on the wheel."}),Object(v.jsx)(o.default,{style:N.paragraph,children:"Colors that are located opposite each other on the color wheel are known as complementary colors. These colors tend to work well together because they are highly contrasting, which can create a visually appealing balance. For example, red and green are complementary colors, as are blue and orange."}),Object(v.jsx)(o.default,{style:N.paragraph,children:"There are several theories about why certain color combinations are pleasing to the eye, and some of these theories involve mathematical principles such as the golden ratio. However, the exact reasons for why certain color combinations are perceived as being harmonious or complementary are still not fully understood and are the subject of ongoing research in fields such as psychology and neuroscience."}),Object(v.jsx)(a.default,{style:{borderBottomColor:"white",borderBottomWidth:4,marginTop:"1rem"}})]})})},N=n.default.create({button:{padding:10,borderRadius:5},hoveredButton:{backgroundColor:"rgba(255, 255, 255, 0.75)",marginBottom:G(20),width:"22rem",alignSelf:"center"},normalButton:{backgroundColor:"#fff",marginBottom:G(20),width:"22rem",alignSelf:"center"},buttonText:{color:"#000",fontSize:18},paragraph:{marginVertical:8,color:"white",fontFamily:"Inter_900Black",fontSize:"2vh",width:"80vw"}}),V=(i.default.get("window").width,i.default.get("window").height,i.default.get("window"));V.width,V.height;function q(t){var e=t.navigation;return Object(v.jsx)(z.LinearGradient,{colors:["#181818","#000000"],style:{opacity:1,width:"100%",alignSelf:"center"},children:Object(v.jsxs)(a.default,{children:[Object(v.jsx)(a.default,{style:{backgroundColor:"rgba(255, 255, 255, 0.05)",height:"4rem"},children:Object(v.jsx)(o.default,{style:{color:"#b892ff",alignSelf:"center",marginTop:"0.8rem",fontSize:"2rem",fontWeight:"bold",fontFamily:"Inter_900Black"},children:"HEX to RGBA Pro"})}),Object(v.jsx)(a.default,{style:{alignSelf:"center"},children:Object(v.jsx)(s.default,{onPress:function(){return e.navigate("Blog")},style:{backgroundColor:"rgba(255, 255, 255, 0.05)",height:"3rem",marginTop:"1rem",borderRadius:"1rem"},children:Object(v.jsx)(o.default,{style:{color:"white",fontSize:20,margin:"1rem",fontSize:"1.8vh",fontFamily:"Inter_900Black"},children:"BLOG"})})}),Object(v.jsx)(a.default,{style:{},children:Object(v.jsx)(c.default,{style:Q.container,children:Object(v.jsx)(d.default,{style:{},showsHorizontalScrollIndicator:!1,showsVerticalScrollIndicator:!1,children:Object(v.jsx)(T,{})})})}),Object(v.jsx)(a.default,{style:{height:"100rem"}})]})})}function J(t){var e=t.navigation;return Object(v.jsx)(z.LinearGradient,{colors:["#181818","#000000"],style:{opacity:1,width:"100%",alignSelf:"center"},children:Object(v.jsxs)(a.default,{children:[Object(v.jsx)(a.default,{style:{backgroundColor:"rgba(255, 255, 255, 0.05)",height:"4rem"},children:Object(v.jsx)(o.default,{style:{color:"#b892ff",alignSelf:"center",marginTop:"0.8rem",fontSize:"2rem",fontWeight:"bold",fontFamily:"Inter_900Black"},children:"HEX to RGBA Pro"})}),Object(v.jsx)(a.default,{style:{alignSelf:"center"},children:Object(v.jsx)(s.default,{onPress:function(){return e.navigate("Home")},style:{backgroundColor:"rgba(255, 255, 255, 0.05)",height:"3rem",marginTop:"1rem",borderRadius:"1rem"},children:Object(v.jsx)(o.default,{style:{color:"white",fontSize:20,margin:"1rem",fontSize:"1.8vh",fontFamily:"Inter_900Black"},children:"HOME"})})}),Object(v.jsx)(a.default,{style:{},children:Object(v.jsx)(c.default,{style:Q.container,children:Object(v.jsx)(d.default,{style:{},showsHorizontalScrollIndicator:!1,showsVerticalScrollIndicator:!1,children:Object(v.jsx)(X,{})})})}),Object(v.jsx)(a.default,{style:{height:"100rem"}})]})})}var $=Object(P.default)();function K(){return Object(v.jsx)(W.default,{children:Object(v.jsxs)($.Navigator,{initialRouteName:"Home",children:[Object(v.jsx)($.Screen,{name:"Home",component:q,options:{animationEnabled:!1,headerShown:!1}}),Object(v.jsx)($.Screen,{name:"Blog",component:J,options:{animationEnabled:!1,headerShown:!1}})]})})}var Q=n.default.create({container:{alignItems:"center",justifyContent:"center",marginTop:"6vh"}})},176:function(t,e,r){t.exports=r(226)}},[[176,1,2]]]);
//# sourceMappingURL=app.425f22d4.chunk.js.map