(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a(3),s=a(6),o=a(4),i=a(7),c=a(0),l=a.n(c),u=a(5),m=a.n(u),d={summer:{text:"Let's hit the beach :)",iconName:"sun"},winter:{text:"Burr it is chilly :(",iconName:"snowflake"}};var h=function(e){var t,a,n=(t=e.lat,(a=(new Date).getMonth())>2&&a<9?t>0?"summer":"winter":t>0?"winter":"summer"),r=d[n],s=r.text,o=r.iconName;return l.a.createElement("div",{className:"season-display ".concat(n)},l.a.createElement("i",{className:"".concat(o," icon massive icon-left")}),l.a.createElement("h1",null,s),l.a.createElement("i",{className:"".concat(o," icon massive icon-right")}))},v=function(e){return l.a.createElement("div",{className:"ui active dimmer"},l.a.createElement("div",{className:"ui text loader"},e.message))};v.defaultProps={message:"Loading..."};var g=v,f=(a(14),function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,i=new Array(r),c=0;c<r;c++)i[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(i)))).state={lat:null,errorMessage:""},a}return Object(i.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;window.navigator.geolocation.getCurrentPosition(function(t){e.setState({lat:t.coords.latitude})},function(t){e.setState({errorMessage:t.message})})}},{key:"renderContent",value:function(){return this.state.errorMessage&&!this.state.lat?l.a.createElement("div",null,"Error: ",this.state.errorMessage):!this.state.errorMessage&&this.state.lat?l.a.createElement(h,{lat:this.state.lat}):this.state.errorMessage||this.state.lat?void 0:l.a.createElement(g,{message:"Attempting to load your location..."})}},{key:"render",value:function(){return this.renderContent()}}]),t}(l.a.Component));m.a.render(l.a.createElement(f,null),document.querySelector("#root"))},8:function(e,t,a){e.exports=a(16)}},[[8,2,1]]]);
//# sourceMappingURL=main.9e4b9b90.chunk.js.map