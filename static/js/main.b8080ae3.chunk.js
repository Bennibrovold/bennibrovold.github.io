(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{111:function(e,t,a){},112:function(e,t,a){},113:function(e,t,a){"use strict";a.r(t);a(62),a(87);var o=a(0),r=a.n(o),n=a(32),c=a.n(n),s=a(18),l=a.n(s),i=a(56),u=a(57),m=a(59),p=a(58),d=a(60),f=a(1),g=(a(110),function(e){var t=e.id,a=e.go,o=e.fetchedUser;return r.a.createElement(f.Panel,{id:t},r.a.createElement(f.PanelHeader,null,"Example"),o&&r.a.createElement(f.Group,{title:"User Data Fetched with VK Connect"},r.a.createElement(f.ListItem,{before:o.photo_200?r.a.createElement(f.Avatar,{src:o.photo_200}):null,description:o.city&&o.city.title?o.city.title:""},"".concat(o.first_name," ").concat(o.last_name))),r.a.createElement(f.Group,{title:"Navigation Example"},r.a.createElement(f.Div,null,r.a.createElement(f.Button,{size:"xl",level:"2",onClick:a,"data-to":"persik"},"Show me the Persik, please"))),r.a.createElement(f.Group,{title:"Navigation Example"},r.a.createElement(f.Div,null,r.a.createElement(f.Button,{size:"xl",level:"2",onClick:a,"data-to":"default"},"Show me the Persik, please"))))}),b=a(33),h=a(16),S=(a(111),function(e){var t=Object(o.useState)(JSON.parse(localStorage.getItem("items"))),a=Object(h.a)(t,2),n=a[0],c=a[1],s=Object(o.useState)(JSON.parse(localStorage.getItem("prices"))),l=Object(h.a)(s,2),i=l[0],u=l[1];console.log(i);var m=Object(o.useState)(JSON.parse(localStorage.getItem("data"))),p=Object(h.a)(m,2),d=p[0],g=p[1],S={phone:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d",notebook:"\u041d\u043e\u0443\u0442\u0431\u0443\u043a",pc:"\u041a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440",office:"\u041e\u0444\u0438\u0441",farm:"\u0424\u0435\u0440\u043c\u0430",factory:"\u0417\u0430\u0432\u043e\u0434",mine:"\u0428\u0430\u0445\u0442\u0430",skyscrapper:"\u041d\u0435\u0431\u043e\u0441\u043a\u0440\u0451\u0431",island:"\u041e\u0441\u0442\u0440\u043e\u0432",country:"\u0421\u0442\u0440\u0430\u043d\u0430",planet:"\u041f\u043b\u0430\u043d\u0435\u0442\u0430",solarSystem:"\u0421\u043e\u043b\u043d\u0435\u0447\u043d\u0430\u044f \u0441\u0438\u0441\u0442\u0435\u043c\u0430",cosmos:"\u041a\u043e\u0441\u043c\u043e\u0441"};return r.a.createElement(f.Panel,{id:e.id},r.a.createElement(f.PanelHeader,null,"\u041c\u0430\u0433\u0430\u0437\u0438\u043d"),r.a.createElement(f.Group,null,r.a.createElement(f.Div,{className:"shop-score"},e.score)),Object.keys(n).map(function(t){return r.a.createElement(f.Group,{key:t},r.a.createElement(f.Div,{onClick:function(){return function(t){e.score-i[t].price>=0&&(e.add(-i[t].price),c(Object.assign(n,Object(b.a)({},t,n[t]+1))),u(Object.assign(i,Object(b.a)({},t,Object.assign(i[t],{price:Math.round(1.1*i[t].price)})))),g(Object.assign(d,{auto:d.auto+i[t].boost})),localStorage.setItem("items",JSON.stringify(n)),localStorage.setItem("prices",JSON.stringify(i)),localStorage.setItem("data",JSON.stringify(d)))}(t)},className:"shop-item"},r.a.createElement("h4",null,S[t])," ",r.a.createElement("p",null,"\u0426\u0435\u043d\u0430: ",i[t].price," | \u041a\u043e\u043b-\u0432\u043e: ",n[t]," | +",i[t].boost,"/\u0441 ")))}))}),v=(a(112),function(){localStorage.setItem("score",0),localStorage.setItem("items",JSON.stringify({phone:0,notebook:0,pc:0,office:0,farm:0,factory:0,mine:0,skyscrapper:0,island:0,country:0,planet:0,solarSystem:0,cosmos:0})),localStorage.setItem("prices",JSON.stringify({phone:{price:100,boost:2},notebook:{price:500,boost:10},pc:{price:2e3,boost:100},office:{price:1e4,boost:500},farm:{price:5e5,boost:2e3},factory:{price:2e6,boost:1e4},mine:{price:1e7,boost:1e5},skyscrapper:{price:1e8,boost:5e5},island:{price:25e7,boost:25e5},country:{price:1e9,boost:5e7},planet:{price:5e9,boost:1e8},solarSystem:{price:25e9,boost:5e8},cosmos:{price:99999999999,boost:9999999999}})),localStorage.setItem("data",JSON.stringify({auto:0,perClick:1})),localStorage.setItem("codes",JSON.stringify([{value:"2019",hashes:1e6,used:!1},{value:"sekki",hashes:1e8,used:!1},{value:"vkapp2019",hashes:1e8,used:!1}]))}),E=function(){return null!==localStorage.getItem("score")?localStorage.getItem("score"):void 0},y=function(){return null!==localStorage.getItem("items")?localStorage.getItem("items"):void 0},I=function(){return null!==localStorage.getItem("prices")?localStorage.getItem("prices"):void 0},O=function(){return null!==localStorage.getItem("data")?localStorage.getItem("data"):void 0},k=function(){return null!==localStorage.getItem("codes")?localStorage.getItem("codes"):void 0},N=function(e){return"number"===typeof e},J=function(e){return"object"===typeof e},j=function(e){var t=e.data;return function(){var t=JSON.stringify(e.score).split(""),a=t.length;if(a>3)if(a%3===0){if(a>5)return t[0]+t[1]+t[2]+"."+t[3]+t[4]+t[5];if(5===a)return t[0]+t[1]+"."+t[2]+t[3]+t[4];if(4===a)t[0],t[1],t[2],t[3]}else if(a>5)(function(e){for(var a="",o=0;o<e-1;o++)a+=t[o]})(3*Math.floor(a/3))}(),r.a.createElement(f.Panel,{id:e.id},r.a.createElement(f.PanelHeader,null,"Clicker"),r.a.createElement(f.Group,null,r.a.createElement(f.Div,{className:"score-container"},r.a.createElement("p",null,e.score,"#"))),r.a.createElement(f.Group,null,r.a.createElement(f.Div,{className:"button-container"},r.a.createElement("button",{className:"button-click",onClick:function(){e.add(t.perClick)}},r.a.createElement("h1",null,"H+"),r.a.createElement("span",null,null!==t?t.auto:null," / \u0441\u0435\u043a")))))},P=function(e){var t=Object(o.useState)(""),a=Object(h.a)(t,2),n=a[0],c=a[1],s=function(){var t=function(e){var t=JSON.parse(localStorage.getItem("codes")),a=!1;return t.map(function(o,r){o.value===e&&!1===o.used&&(t[r].used=!0,console.log("here"),localStorage.setItem("codes",JSON.stringify(t)),a=o)}),a}(n).hashes;void 0!==t&&e.add(t)};return r.a.createElement(f.Panel,{id:e.id},r.a.createElement(f.PanelHeader,null,"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"),r.a.createElement(f.Group,null,r.a.createElement(f.Div,null,r.a.createElement(f.FormLayoutGroup,{top:"\u041f\u0440\u043e\u043c\u043e-\u043a\u043e\u0434"},r.a.createElement(f.Input,{type:"text",defaultValue:n,onChange:function(e){return c(e.target.value)}}),r.a.createElement(f.Button,{size:"xl",onClick:function(){return s()}},"\u0412\u0432\u0435\u0441\u0442\u0438 \u043f\u0440\u043e\u043c\u043e-\u043a\u043e\u0434"))),r.a.createElement(f.Div,null,r.a.createElement("button",{onClick:function(){return e.reset()}},r.a.createElement("h1",null,"\u0421\u0431\u0440\u043e\u0441")))))};void 0!==E()&&0!==parseInt(E())&&N(parseInt(E()))||localStorage.setItem("score",0),void 0!==y()&&J(JSON.parse(y()))||localStorage.setItem("items",JSON.stringify({phone:0,notebook:0,pc:0,office:0,farm:0,factory:0,mine:0,skyscrapper:0,island:0,country:0,planet:0,solarSystem:0,cosmos:0})),void 0!==I()&&J(JSON.parse(I()))||localStorage.setItem("prices",JSON.stringify({phone:{price:100,boost:2},notebook:{price:500,boost:10},pc:{price:2e3,boost:100},office:{price:1e4,boost:500},farm:{price:5e5,boost:2e3},factory:{price:2e6,boost:1e4},mine:{price:1e7,boost:1e5},skyscrapper:{price:1e8,boost:5e5},island:{price:25e7,boost:25e5},country:{price:1e9,boost:5e7},planet:{price:5e9,boost:1e8},solarSystem:{price:25e9,boost:5e8},cosmos:{price:99999999999,boost:9999999999}})),void 0!==O()&&J(JSON.parse(O()))||localStorage.setItem("data",JSON.stringify({auto:0,perClick:1})),void 0!==k()&&J(JSON.parse(k()))||localStorage.setItem("codes",JSON.stringify([{value:"2019",hashes:1e6,used:!1},{value:"sekki",hashes:1e8,used:!1},{value:"vkapp2019",hashes:1e8,used:!1}]));var C=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).add=function(e){"object"!==typeof score&&(localStorage.setItem("score",a.state.score+e),a.setState({data:JSON.parse(localStorage.getItem("data")),score:a.state.score+e}))},a.fromScratch=function(){clearInterval(a.auto),a.setState({score:0,data:JSON.parse(localStorage.getItem("data"))}),v()},a.go=function(e){a.setState({activePanel:e.currentTarget.dataset.to})},a.auto=void 0,a.state={activePanel:"default",fetchedUser:null,score:parseInt(localStorage.getItem("score")),data:JSON.parse(localStorage.getItem("data")),timer:!1},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;l.a.subscribe(function(t){switch(t.detail.type){case"VKWebAppGetUserInfoResult":e.setState({fetchedUser:t.detail.data});break;default:console.log(t.detail.type)}}),l.a.send("VKWebAppGetUserInfo",{}),this.auto=setInterval(function(){e.add(e.state.data.auto)},1e3)}},{key:"componentWillUnmount",value:function(){return function(){clearInterval(this.auto)}}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(f.View,{activePanel:this.state.activePanel},r.a.createElement(g,{id:"home",fetchedUser:this.state.fetchedUser,go:this.go}),r.a.createElement(S,{id:"shop",add:this.add,score:this.state.score,go:this.go}),r.a.createElement(j,{id:"default",add:this.add,data:this.state.data,score:this.state.score,go:this.go}),r.a.createElement(P,{id:"settings",add:this.add,reset:this.fromScratch,score:this.state.score,go:this.go})),r.a.createElement(f.FixedLayout,{vertical:"bottom"},r.a.createElement(f.Tabs,null,r.a.createElement(f.TabsItem,{onClick:function(t){return e.go(t)},"data-to":"default",selected:"default"===this.state.activePanel},"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"),r.a.createElement(f.TabsItem,{onClick:function(t){return e.go(t)},"data-to":"shop",selected:"shop"===this.state.activePanel},"\u041c\u0430\u0433\u0430\u0437\u0438\u043d"),r.a.createElement(f.TabsItem,{onClick:function(t){return e.go(t)},"data-to":"settings",selected:"settings"===this.state.activePanel},"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"))))}}]),t}(r.a.Component);l.a.send("VKWebAppInit",{}),c.a.render(r.a.createElement(C,null),document.getElementById("root"))},61:function(e,t,a){e.exports=a(113)}},[[61,1,2]]]);
//# sourceMappingURL=main.b8080ae3.chunk.js.map