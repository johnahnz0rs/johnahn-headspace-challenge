(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,a){e.exports=a(43)},25:function(e,t,a){},27:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),s=a(16),r=a.n(s),o=(a(25),a(6)),l=a(7),i=a(10),h=a(8),u=a(9),d=(a(27),a(44)),m=a(45),b=a(17),p=a(3),v=a(11),f=a.n(v),g=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(h.a)(t).call(this,e))).state={searchBlog:"",searchTag:"",searchResults:[],favoritePosts:[]},a.default=a.default.bind(Object(p.a)(Object(p.a)(a))),a.inputHandler=a.inputHandler.bind(Object(p.a)(Object(p.a)(a))),a.clickHandlerAdd=a.clickHandlerAdd.bind(Object(p.a)(Object(p.a)(a))),a.clickHandlerRemove=a.clickHandlerRemove.bind(Object(p.a)(Object(p.a)(a))),a.searchWithParams=a.searchWithParams.bind(Object(p.a)(Object(p.a)(a))),a.createResultBodies=a.createResultBodies.bind(Object(p.a)(Object(p.a)(a))),a.findPostIndexInArrayById=a.findPostIndexInArrayById.bind(Object(p.a)(Object(p.a)(a))),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.default(Math.floor(3*Math.random())+1)}},{key:"default",value:function(e){var t=this,a="";switch(e){case 1:a="puppy";break;case 2:a="text";break;case 3:a="audio"}fetch("/api/tag/".concat(a)).then(function(e){return e.json()}).then(function(e){t.createResultBodies(e)})}},{key:"createResultBodies",value:function(e){var t,a=[],c=!0,n=!1,s=void 0;try{for(var r,o=e[Symbol.iterator]();!(c=(r=o.next()).done);c=!0){var l=r.value;switch(l.type){case"text":t=l.body;break;case"photo":t="<p><img src=".concat(l.photos[0].alt_sizes[0].url," alt='' /></p>");break;case"quote":t="<h4>".concat(l.text,"</h4><p>").concat(l.source,"<br />type: ").concat(l.type,"<br />post_url: ").concat(l.post_url,"<br />source_url: ").concat(l.source_url,"<br />source_title: ").concat(l.source_title,"</p>");break;case"link":var i=l.excerpt?l.excerpt:"",h=l.photos?l.photos[0].original_size.url:"";t="<h3>".concat(l.title,'</h3><img alt="" src=').concat(h," /> <p>").concat(i,"<br />(<a href=").concat(l.url,' target="_blank">Link</a>)</p>');break;case"chat":t=l.body;break;case"audio":var u=l.source_title?l.source_title:"",d=l.caption?l.caption:"",m=l.embed?l.embed:"";t="<p>".concat(u,"<br />").concat(d,"<br />").concat(m,"  <br />(<a href=").concat(l.source_url,' target="_blank">Link</a>)</p>');break;case"video":var b=l.caption?l.caption:"",p=l.player[0]?l.player[0].embed_code:"";t="<p>".concat(b,"<br />").concat(p,"</p>");break;case"answer":t="<p>Q: ".concat(l.question,"<br />A: ").concat(l.answer,"</p>")}a.push({type:l.type,id:l.id,body:t})}}catch(v){n=!0,s=v}finally{try{c||null==o.return||o.return()}finally{if(n)throw s}}this.setState({searchResults:a})}},{key:"inputHandler",value:function(e){var t=e.target.name,a=e.target.value;this.setState(Object(b.a)({},t,a))}},{key:"searchWithParams",value:function(){var e=this;this.setState({searchResults:[]}),this.state.searchBlog.length&&!this.state.searchTag.length?fetch("/api/blog/".concat(this.state.searchBlog)).then(function(e){return e.json()}).then(function(t){e.createResultBodies(t)}):this.state.searchBlog.length&&this.state.searchTag.length?fetch("/api/blog/".concat(this.state.searchBlog,"/").concat(this.state.searchTag)).then(function(e){return e.json()}).then(function(t){e.createResultBodies(t)}):!this.state.searchBlog.length&&this.state.searchTag.length&&fetch("/api/tag/".concat(this.state.searchTag)).then(function(e){return e.json()}).then(function(t){e.createResultBodies(t)})}},{key:"clickHandlerAdd",value:function(e){var t=this.findPostIndexInArrayById(e.target.id,this.state.searchResults),a=this.state.favoritePosts.slice();a.push(this.state.searchResults[t]),this.setState({favoritePosts:a});var c=this.state.searchResults.slice();c.splice(t,1),this.setState({searchResults:c})}},{key:"clickHandlerRemove",value:function(e){var t=this.findPostIndexInArrayById(e.target.id,this.state.favoritePosts),a=this.state.favoritePosts.slice();a.splice(t,1),this.setState({favoritePosts:a})}},{key:"findPostIndexInArrayById",value:function(e,t){for(var a in t)if(t[a].id==e)return a}},{key:"render",value:function(){var e,t=this,a=this.state.searchResults.map(function(e){return n.a.createElement("div",{key:e.id,className:"each-search-result row"},n.a.createElement("div",{className:"each-search-result-content col-sm-8"},f()(e.body)),n.a.createElement("div",{className:"each-search-result-button-area col-sm-3"},n.a.createElement("button",{id:e.id,className:"btn btn-add btn-lg btn-success",onClick:t.clickHandlerAdd},"Add"),n.a.createElement("p",null,e.type)))});return this.state.favoritePosts[0]&&(e=this.state.favoritePosts.map(function(e){return n.a.createElement("div",{key:e.id,className:"each-fav-post row"},n.a.createElement("div",{className:"each-fav-post-content col-sm-8"},f()(e.body)),n.a.createElement("div",{className:"each-fav-post-button-area col-sm-3"},n.a.createElement("button",{id:e.id,className:"btn btn-lg btn-danger",onClick:t.clickHandlerRemove},"Remove"),n.a.createElement("p",null,e.type)))})),n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"my-container"},n.a.createElement("div",{className:"col col-sm-6 col-search-comp"},n.a.createElement("div",{className:"row section-search"},n.a.createElement("div",{className:"col-sm-6 search-by"},n.a.createElement("h3",null,"Blog Name:"),n.a.createElement("input",{className:"search-input search-blog",type:"text",name:"searchBlog",placeholder:"ex: peacecorps",value:this.state.searchBlog,onChange:this.inputHandler})),n.a.createElement("div",{className:"col-sm-6 search-by"},n.a.createElement("h3",null,"Tag:"),n.a.createElement("input",{className:"search-input search-tag",type:"text",name:"searchTag",placeholder:"ex: gif",value:this.state.searchTag,onChange:this.inputHandler}),n.a.createElement("button",{className:"btn btn-lg btn-primary btn-search",onClick:this.searchWithParams},"Search"))),n.a.createElement("div",{className:"row section-search-results"},a)),n.a.createElement("div",{className:"col col-sm-6 col-favorites-comp"},n.a.createElement("div",{className:"row section-fav-posts"},n.a.createElement("div",{className:"favorites-header"},n.a.createElement("h2",null,"Favorites:")),n.a.createElement("div",null,e)))))}}]),t}(n.a.Component),y=function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"root-div"},n.a.createElement(m.a,{exact:!0,path:"/",component:g})))},k=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return n.a.createElement(d.a,null,n.a.createElement(n.a.Fragment,null,n.a.createElement(y,null)))}}]),t}(c.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[20,2,1]]]);
//# sourceMappingURL=main.23f36aa4.chunk.js.map