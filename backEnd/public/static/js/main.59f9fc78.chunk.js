(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){e.exports=a(43)},23:function(e,t,a){},4:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(10),s=a.n(o),c=(a(23),a(11)),i=a(12),l=a(15),m=a(13),u=a(16),d=(a(4),a(14)),h=a.n(d),w=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(l.a)(this,Object(m.a)(t).call(this))).anagramTest=function(t){t.preventDefault();var a=document.getElementById("word1").value,n=document.getElementById("word2").value;e.setState({message:"Checking..."}),h()({method:"POST",url:"".concat(window.apiHost,"/anagramTest"),data:{word1:a,word2:n}}).then(function(t){!0===t.data.results?e.setState({message:"Yes they are anagrams"}):e.setState({message:"No, they are not anagrams"})})},e.state={message:"Enter 2 words to test if they are anagrams"},e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.anagramTest},r.a.createElement("input",{type:"text",id:"word1",placeholder:"Enter the first word"}),r.a.createElement("input",{type:"text",id:"word2",placeholder:"Enter the second word"}),r.a.createElement("button",{type:"submit"},"Submit"))),r.a.createElement("div",null,this.state.message))}}]),t}(n.Component);var g=function(){return r.a.createElement("div",{className:"App-header"},r.a.createElement(w,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[17,1,2]]]);
//# sourceMappingURL=main.59f9fc78.chunk.js.map