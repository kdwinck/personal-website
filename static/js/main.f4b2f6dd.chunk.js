(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,a){e.exports=a(37)},27:function(e,t,a){},28:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(19),r=a.n(c),l=(a(27),a(2)),i=a(3),s=a(5),u=a(4),m=a(6),h=a(11),b=a(10),p=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("h1",null,"This is the about page")}}]),t}(n.Component),d=['"...this seasons must hire-developer!"','"My favorite son." - Kyle\'s Mom','"He\'s pretty cool..." - Josh','"Why are you always on the computer?" - Kyle\'s nephew','"Watches too many Marvel movies" - Everyone'],E=function(e){for(var t,a,n=e.length;0!==n;)a=Math.floor(Math.random()*n),t=e[n-=1],e[n]=e[a],e[a]=t;return e},v=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).toggleMovieMode=function(){a.selectRandomQuotes(),a.setState(function(e){return{movieModeEnabled:!a.state.movieModeEnabled}})},a.selectRandomQuotes=function(){var e=E(d);a.setState(function(t){return{quotes:e}})},a.state={movieModeEnabled:!1,quotes:[]},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.selectRandomQuotes()}},{key:"render",value:function(){return o.a.createElement("div",{className:"App-header"},o.a.createElement("h1",{className:"splash-text"},"WEB DEVELOPER."),this.state.movieModeEnabled?o.a.createElement("div",null,o.a.createElement("h3",{className:"blurb-one"},this.state.quotes[0]),o.a.createElement("h3",{className:"blurb-two"},this.state.quotes[1]),o.a.createElement("h3",{className:"blurb-three"},this.state.quotes[2])):null,this.state.movieModeEnabled?o.a.createElement("button",{onClick:this.toggleMovieMode,className:"movieButton"},"Disable Movie Mode"):o.a.createElement("button",{onClick:this.toggleMovieMode,className:"movieButton"},"Enable Movie Mode"))}}]),t}(n.Component),f=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h1",{className:"contact-header"},"Contact Me"),o.a.createElement("p",{className:"contact-text"},"Want to get in touch? Send me a message and I will respond as soon as possible."),o.a.createElement("form",{id:"contact-form"},o.a.createElement("input",{type:"hidden",name:"contact_number",required:!0}),o.a.createElement("label",null,"Name*"),o.a.createElement("input",{type:"text",name:"user_name",required:!0}),o.a.createElement("label",null,"Email*"),o.a.createElement("input",{type:"email",name:"user_email",required:!0}),o.a.createElement("label",null,"Message*"),o.a.createElement("textarea",{name:"text",required:!0}),o.a.createElement("input",{id:"contact-submit",type:"submit",value:"Send Message"})))}}]),t}(n.Component),j=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("h1",null,"This is the Projects page")}}]),t}(n.Component),O=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{class:"resume-div"},o.a.createElement("iframe",{className:"resume-iframe",title:"resume",src:"https://drive.google.com/file/d/1Vi_T60bp8eOXNzCWOqXA0XjstzCzX26O/preview",width:"100%",height:"900px"}))}}]),t}(n.Component),y=(a(28),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(h.a,null,o.a.createElement("nav",null,o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement(h.b,{to:"/"},"Home")),o.a.createElement("li",null,o.a.createElement(h.b,{to:"/about"},"About")),o.a.createElement("li",null,o.a.createElement(h.b,{to:"/resume"},"Resume")),o.a.createElement("li",null,o.a.createElement(h.b,{to:"/projects"},"Projects")),o.a.createElement("li",null,o.a.createElement(h.b,{to:"/contact"},"Contact")))),o.a.createElement(b.a,{exact:!0,path:"/",component:v}),o.a.createElement(b.a,{path:"/about",component:p}),o.a.createElement(b.a,{path:"/resume",component:O}),o.a.createElement(b.a,{path:"/projects",component:j}),o.a.createElement(b.a,{path:"/contact",component:f})))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[22,1,2]]]);
//# sourceMappingURL=main.f4b2f6dd.chunk.js.map