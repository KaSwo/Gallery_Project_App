(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},17:function(e,t,a){},24:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(7),c=a.n(r),o=(a(15),a(1)),s=a(2),i=a(4),u=a(3),m=a(5),h=(a(17),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).handleRequest=function(e,t){var n=a.state.gallery,l="";t?l=t:e?l="https://api.pexels.com/v1/search?query=".concat(e):n&&e||(l="https://api.pexels.com/v1/curated"),fetch(l,{headers:{Authorization:"563492ad6f9170000100000119b2c277c7c340bbab928823d2551d3b",accept:"application/json"}}).then(function(e){if(e.ok)return e.json();console.log(e)}).then(function(e){console.log(e),a.setState({gallery:e})})},a.showImage=function(e,t){a.setState({largeImageUrl:e,indexInGallery:t})},a.closeImage=function(){a.setState({largeImageUrl:""})},a.switchImage=function(e){var t=a.state,n=t.gallery,l=t.indexInGallery;"<"===e.target.innerText?l>0&&a.setState({largeImageUrl:n.photos[l-1].src.large,indexInGallery:l-1}):l<n.photos.length-1&&a.setState({largeImageUrl:n.photos[l+1].src.large,indexInGallery:l+1})},a.state={gallery:null,largeImageUrl:"",indexInGallery:null},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.handleRequest()}},{key:"componentDidUpdate",value:function(e){var t=this.props.term;e.term!==t&&this.handleRequest(t)}},{key:"render",value:function(){var e,t=this,a=this.state,n=a.gallery,r=a.largeImageUrl;return null===n?null:(r&&(e=l.a.createElement("div",{className:"largeImageContainer"},l.a.createElement("img",{className:"activeImage",src:r,alt:""}),l.a.createElement("div",{className:"largeImageButtons"},l.a.createElement("button",{className:"close",onClick:this.closeImage},"X"),l.a.createElement("button",{className:"nextArrow",onClick:this.switchImage},"<"),l.a.createElement("button",{className:"prevArrow",onClick:this.switchImage},">")))),l.a.createElement("div",null,l.a.createElement("ul",null,n.photos.map(function(e,a){return l.a.createElement("li",{className:"galleryBody",key:e.id},l.a.createElement("div",{className:"container"},l.a.createElement("img",{className:"pictures",src:e.src.medium,alt:"",onClick:function(){return t.showImage(e.src.large,a)}})))})),e,l.a.createElement("div",{className:"buttonPosition"},n.prev_page&&l.a.createElement("button",{className:"prevButton",onClick:function(){return t.handleRequest(null,n.prev_page)}},"Previous")," ",n.next_page&&l.a.createElement("button",{className:"nextButton",onClick:function(){return t.handleRequest(null,n.next_page)}},"Next")," ")))}}]),t}(l.a.Component)),g=a(8),d=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).onClick=function(){a.props.loadText(a.state.tag),a.setState({inputVal:""})},a.handleChangeForAll=function(e){a.setState(Object(g.a)({},e.target.name,e.target.value))},a.state={tag:"",option:""},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"inputs"},l.a.createElement("input",{className:"imput-style",placeholder:"find by tag... ",name:"tag",value:this.state.tag,onChange:this.handleChangeForAll})),l.a.createElement("button",{className:"buttonOne",name:"button",onClick:this.onClick},"Get Picture !"))}}]),t}(l.a.Component),p=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).setText=function(e){a.setState({text:e})},a.state={text:""},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"main"},l.a.createElement("h1",null,"Your first ",l.a.createElement("br",null),"ten thousand photos ",l.a.createElement("br",null),"will be the worst.",l.a.createElement("br",null)),l.a.createElement("h4",null," Henri Cartier Bresson"),l.a.createElement("h2",null,"Take one of ours...")),l.a.createElement("div",{className:"form-container"},l.a.createElement(d,{loadText:this.setText})),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement(h,{term:this.state.text}))))}}]),t}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){e.exports=a(24)}},[[9,2,1]]]);
//# sourceMappingURL=main.9dc6a150.chunk.js.map