(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,a){e.exports=a(43)},25:function(e,t,a){},27:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var s=a(0),c=a.n(s),n=a(16),r=a.n(n),l=(a(25),a(6)),o=a(7),i=a(10),h=a(8),u=a(9),d=(a(27),a(44)),m=a(45),p=a(17),v=a(3),b=a(11),f=a.n(b),g=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(h.a)(t).call(this,e))).state={searchBlog:"",searchTag:"",searchResults:[],favoritePosts:[]},a.default=a.default.bind(Object(v.a)(Object(v.a)(a))),a.inputHandler=a.inputHandler.bind(Object(v.a)(Object(v.a)(a))),a.clickHandlerAdd=a.clickHandlerAdd.bind(Object(v.a)(Object(v.a)(a))),a.clickHandlerRemove=a.clickHandlerRemove.bind(Object(v.a)(Object(v.a)(a))),a.searchWithParams=a.searchWithParams.bind(Object(v.a)(Object(v.a)(a))),a.createResultBodies=a.createResultBodies.bind(Object(v.a)(Object(v.a)(a))),a.findPostIndexInArrayById=a.findPostIndexInArrayById.bind(Object(v.a)(Object(v.a)(a))),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.default(Math.floor(5*Math.random())+1)}},{key:"default",value:function(e){switch(e){case 1:case 2:case 3:this.setState({searchTag:"pup"});break;case 4:this.setState({searchTag:"text"});break;case 5:this.setState({searchTag:"audio"})}}},{key:"searchWithParams",value:function(){var e=this;this.setState({searchResults:[]}),this.state.searchBlog.length&&!this.state.searchTag.length?fetch("/api/blog/".concat(this.state.searchBlog)).then(function(e){return e.json()}).then(function(t){e.createResultBodies(t)}):this.state.searchBlog.length&&this.state.searchTag.length?fetch("/api/blog/".concat(this.state.searchBlog,"/").concat(this.state.searchTag)).then(function(e){return e.json()}).then(function(t){e.createResultBodies(t)}):!this.state.searchBlog.length&&this.state.searchTag.length&&fetch("/api/tag/".concat(this.state.searchTag)).then(function(e){return e.json()}).then(function(t){e.createResultBodies(t)})}},{key:"createResultBodies",value:function(e){var t,a=[],s=!0,c=!1,n=void 0;try{for(var r,l=e[Symbol.iterator]();!(s=(r=l.next()).done);s=!0){var o=r.value;switch(o.type){case"text":t='<div className="post-single-post">'.concat(o.body,"</div>");break;case"photo":t='<p className="post-single-post"><img src='.concat(o.photos[0].alt_sizes[0].url," alt='' /></p>");break;case"quote":t='<h4 className="post-single-post">'.concat(o.text,"</h4>");break;case"link":var i=o.excerpt?o.excerpt:"",h=o.photos?o.photos[0].original_size.url:"";t='<div className="post-single-post"><h3>'.concat(o.title,'</h3><img alt="" src=').concat(h," /><p>").concat(i,"<br />(<a href=").concat(o.url,' target="_blank">Link</a>)</p></div>');break;case"chat":t='<div className="post-single-post">'.concat(o.body,"</div>");break;case"audio":var u=o.source_title?o.source_title:"",d=o.caption?o.caption:"",m=o.embed?o.embed:"";t='<p className="post-single-post">'.concat(u,"<br />").concat(d,"<br />").concat(m,"  <br />(<a href=").concat(o.source_url,' target="_blank">Link</a>)</p>');break;case"video":var p=o.player[0]?o.player[0].embed_code:"";t='<div className="post-single-post">'.concat(p,"</div>");break;case"answer":t='<p className="post-single-post">Q: '.concat(o.question,"<br />A: ").concat(o.answer,"</p>")}a.push({type:o.type,id:o.id,body:t})}}catch(v){c=!0,n=v}finally{try{s||null==l.return||l.return()}finally{if(c)throw n}}this.setState({searchResults:a})}},{key:"inputHandler",value:function(e){var t=e.target.name,a=e.target.value;this.setState(Object(p.a)({},t,a))}},{key:"clickHandlerAdd",value:function(e){var t=this.findPostIndexInArrayById(e.target.id,this.state.searchResults),a=this.state.favoritePosts.slice();a.splice(0,0,this.state.searchResults[t]),this.setState({favoritePosts:a});var s=this.state.searchResults.slice();s.splice(t,1),this.setState({searchResults:s})}},{key:"clickHandlerRemove",value:function(e){var t=this.findPostIndexInArrayById(e.target.id,this.state.favoritePosts),a=this.state.favoritePosts.slice();a.splice(t,1),this.setState({favoritePosts:a})}},{key:"findPostIndexInArrayById",value:function(e,t){for(var a in t)if(t[a].id==e)return a}},{key:"render",value:function(){var e,t=this,a=this.state.searchResults.map(function(e){return c.a.createElement("div",{key:e.id,className:"each-search-result row"},c.a.createElement("div",{className:"each-search-result-content col-sm-8"},f()(e.body)),c.a.createElement("div",{className:"each-search-result-button-area col-sm-3"},c.a.createElement("button",{id:e.id,className:"btn btn-add btn-lg btn-success",onClick:t.clickHandlerAdd},"Add"),c.a.createElement("p",null,e.type)))});return this.state.favoritePosts[0]&&(e=this.state.favoritePosts.map(function(e){return c.a.createElement("div",{key:e.id,className:"each-fav-post row"},c.a.createElement("div",{className:"each-fav-post-content col-sm-8"},f()(e.body)),c.a.createElement("div",{className:"each-fav-post-button-area col-sm-3"},c.a.createElement("button",{id:e.id,className:"btn btn-lg btn-danger",onClick:t.clickHandlerRemove},"Remove"),c.a.createElement("p",null,e.type)))})),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"my-container"},c.a.createElement("div",{className:"col col-sm-6 col-search-comp"},c.a.createElement("div",{className:"row section-search"},c.a.createElement("div",{className:"col-sm-6 search-by"},c.a.createElement("h3",null,"Blog Name:"),c.a.createElement("input",{className:"search-input search-blog",type:"text",name:"searchBlog",placeholder:"ex: peacecorps",value:this.state.searchBlog,onChange:this.inputHandler})),c.a.createElement("div",{className:"col-sm-6 search-by"},c.a.createElement("h3",null,"Tag:"),c.a.createElement("input",{className:"search-input search-tag",type:"text",name:"searchTag",placeholder:"ex: gif",value:this.state.searchTag,onChange:this.inputHandler}),c.a.createElement("button",{className:"btn btn-lg btn-primary btn-search",onClick:this.searchWithParams},"Search"))),c.a.createElement("div",{className:"row section-search-results"},a)),c.a.createElement("div",{className:"col col-sm-6 col-favorites-comp"},c.a.createElement("div",{className:"row section-fav-posts"},c.a.createElement("div",{className:"favorites-header"},c.a.createElement("h2",null,"Favorites:")),c.a.createElement("div",null,e)))))}}]),t}(c.a.Component),y=function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"root-div"},c.a.createElement(m.a,{exact:!0,path:"/",component:g})))},k=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return c.a.createElement(d.a,null,c.a.createElement(c.a.Fragment,null,c.a.createElement(y,null)))}}]),t}(s.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[20,2,1]]]);
//# sourceMappingURL=main.88dedcf0.chunk.js.map