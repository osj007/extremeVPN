(this.webpackJsonplocation=this.webpackJsonplocation||[]).push([[0],{13:function(e,a,t){e.exports=t.p+"static/media/carbon-2.ba16c1c5.png"},1301:function(e,a,t){},1302:function(e,a,t){},1303:function(e,a,t){},1322:function(e,a,t){},1323:function(e,a,t){},1324:function(e,a,t){"use strict";t.r(a);var n=t(3),r=t(4),c=t(6),i=t(5),l=t(0),o=t.n(l),s=t(8),m=t.n(s),u=(t(19),function(e){Object(c.a)(t,e);var a=Object(i.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"navbar--container"},o.a.createElement("div",{className:"navbar"},o.a.createElement("a",{href:"/",className:"navbar--logo"},o.a.createElement("i",{className:"user secret icon"})),o.a.createElement("div",{className:"navbar navbar--items"},o.a.createElement("a",{href:"#testimonials",className:"item"},"Testimonials"),o.a.createElement("a",{href:"#pricing",className:"item"},"Pricing"),o.a.createElement("a",{href:"/",className:"item"},"Login"))))}}]),t}(o.a.Component)),p=(t(20),t(13)),E=t.n(p),f=function(e){Object(c.a)(t,e);var a=Object(i.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"banner--container"},o.a.createElement("h1",{className:"container--title"},"ExtremeVPN"),o.a.createElement("h2",{className:"container--subtitle"},"Just Like Normal VPN Except, We Do It For You"),o.a.createElement("div",{className:"banner-container container--signup-box"},o.a.createElement("input",{type:"email",className:"signup-box--inputbox",placeholder:"you@yourteam.com"}),o.a.createElement("button",{className:"signup-box--button"},"Sign Me Up!")),o.a.createElement("div",{className:"banner--container banner-image"},o.a.createElement("img",{className:"carbonPic",src:E.a,alt:"code snippet"})))}}]),t}(o.a.Component),N=(t(21),function(e){return o.a.createElement("div",{className:"ui list"},o.a.createElement("div",{className:"comment-container"},o.a.createElement("img",{src:e.avatar,alt:"avatar",className:"comment-container--image"}),o.a.createElement("div",{className:"content"},o.a.createElement("a",{href:"/",className:"content--name"},e.firstName," ",e.lastName),o.a.createElement("div",{className:"content--title"},'"'.concat(e.reviews,'"')),o.a.createElement("div",{className:"content--description"},'"'.concat(e.description,'"')))))}),d=(t(22),function(e){return o.a.createElement("div",{className:"container--pricing"},o.a.createElement("div",{className:"pricing--card"},o.a.createElement("h1",{className:"card-pricing--title"},e.price),o.a.createElement("ul",{className:"pricing-benefits"},o.a.createElement("li",null,"Perfect converage"),o.a.createElement("li",null,"Customer support"),o.a.createElement("li",null,"Access to 100+ servers"),o.a.createElement("li",null,e.perkTwo),o.a.createElement("li",null,e.perkThree),o.a.createElement("li",null,e.perkFour))))}),v=t(1),g=t.n(v),h=(t(1301),function(e){return o.a.createElement("div",{className:"comment-container--title section",id:e.id},o.a.createElement("h1",{className:"section--title"},e.sectionTitle),o.a.createElement("div",{className:"containers"},e.children))});h.defaultProps={sectionTitle:"This section needs a name!"};var b=h,y=(t(1302),function(e){return o.a.createElement("div",{className:"container--section-pricing",id:e.id},o.a.createElement("h1",null,e.sectionTitle),o.a.createElement("div",{className:"container"},e.children))}),k=t(9),j=(t(1303),function(e){Object(c.a)(t,e);var a=Object(i.a)(t);function t(){var e;Object(n.a)(this,t);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return(e=a.call.apply(a,[this].concat(c))).state={lat:null,long:null,errorMessage:""},e}return Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;window.navigator.geolocation.getCurrentPosition((function(a){return e.setState({lat:a.coords.latitude,long:a.coords.longitude})}),(function(a){return e.setState({errorMessage:a.message})}))}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h1",{className:"title"},"Your location"),o.a.createElement("div",{className:"mapContainer",style:O},o.a.createElement(k.Map,{className:"google-map",google:this.props.google,zoom:10,style:O,initialCenter:{lat:41.87,lng:-87.62}},o.a.createElement(k.Marker,{position:{lat:this.state.lat,lng:this.state.long}}))))}}]),t}(o.a.Component)),O={width:"100%",height:"400px",position:"relative"},w=Object(k.GoogleApiWrapper)({apiKey:"AIzaSyAzSPAFJmQCbs7qjINI-frkLX_S6IO4RYU"})(j),T=(t(1322),function(){return o.a.createElement("div",{className:"footer-container"},o.a.createElement("ul",{className:"footer-items"},o.a.createElement("li",{className:"footer-links"},"We're Hiring!"),o.a.createElement("li",{className:"footer-links"},"Blog"),o.a.createElement("li",{className:"footer-links"},"Sign Me Up!")))}),P=(t(1323),function(e){Object(c.a)(t,e);var a=Object(i.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(u,null),o.a.createElement(f,null),o.a.createElement(b,{sectionTitle:"What Peple Are Saying About Us",id:"testimonials"},o.a.createElement(N,{firstName:g.a.name.firstName(),lastName:g.a.name.lastName(),reviews:g.a.company.catchPhraseDescriptor(),description:g.a.lorem.paragraph(),avatar:g.a.image.avatar()}),o.a.createElement(N,{firstName:g.a.name.firstName(),lastName:g.a.name.lastName(),reviews:g.a.company.catchPhraseDescriptor(),description:g.a.lorem.paragraph(),avatar:g.a.image.avatar()})),o.a.createElement(y,{sectionTitle:"Pricing",id:"pricing"},o.a.createElement(d,{price:"$0"}),o.a.createElement(d,{price:"$20",perkTwo:"24/7 customer support",perkThree:"We will turn it on for you",perkFour:"We watch your security for you"}),o.a.createElement(d,{price:"$10",perkTwo:"24/7 customer support",perkThree:"We watch your security for you"})),o.a.createElement(w,null),o.a.createElement(T,null))}}]),t}(o.a.Component));m.a.render(o.a.createElement(P,null),document.querySelector("#root"))},14:function(e,a,t){e.exports=t(1324)},19:function(e,a,t){},20:function(e,a,t){},21:function(e,a,t){},22:function(e,a,t){}},[[14,1,2]]]);
//# sourceMappingURL=main.a5d0ba5d.chunk.js.map