(this.webpackJsonpdmoleiro=this.webpackJsonpdmoleiro||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,t,a){e.exports=a(33)},,,,,function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),i=a(12),c=a.n(i),l=(a(21),a(1)),s=a(2),o=a(4),m=a(3),d=a(5),u=a(8),p=a(15),v=(a(27),"SET_TAB_INDEX");function E(e){return{type:v,index:e}}function h(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}var y=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.store.getState();this.setState(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?h(a,!0).forEach((function(t){Object(u.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):h(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},this.state,{selectedSliderTabIndex:e.dm.selectedSliderTabIndex})),this._setAutoSlider()}},{key:"_selectSlider",value:function(e,t){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];a&&this._disableAutoSlider(),void 0!==e&&void 0!==t&&t.dispatch(E(e))}},{key:"_setAutoSlider",value:function(){var e=this;void 0===this.state.autoSlider&&(this.autoSlider=setInterval((function(){var t=e.state.selectedSliderTabIndex;4===t?t=0:t++,e._selectSlider(t,e.props.store)}),2e3))}},{key:"_disableAutoSlider",value:function(){void 0!==this.autoSlider&&(clearInterval(this.autoSlider),this.autoSlider=void 0)}},{key:"render",value:function(){var e=this,t=this.props.store.getState().dm.selectedSliderTabIndex;return n.a.createElement("div",{className:"sliderContainer"},n.a.createElement("div",{className:"carrousel"},n.a.createElement("h2",null,"Skills"),n.a.createElement("input",{type:"radio",name:"slides",id:"radio-1",onClick:function(){return e._selectSlider(0,e.props.store,!0)},checked:0===t,readOnly:!0}),n.a.createElement("input",{type:"radio",name:"slides",id:"radio-2",onClick:function(){return e._selectSlider(1,e.props.store,!0)},checked:1===t,readOnly:!0}),n.a.createElement("input",{type:"radio",name:"slides",id:"radio-3",onClick:function(){return e._selectSlider(2,e.props.store,!0)},checked:2===t,readOnly:!0}),n.a.createElement("input",{type:"radio",name:"slides",id:"radio-4",onClick:function(){return e._selectSlider(3,e.props.store,!0)},checked:3===t,readOnly:!0}),n.a.createElement("input",{type:"radio",name:"slides",id:"radio-5",onClick:function(){return e._selectSlider(4,e.props.store,!0)},checked:4===t,readOnly:!0}),n.a.createElement("ul",{className:"slides"},n.a.createElement("li",{className:"slide"},n.a.createElement("p",null,n.a.createElement("q",null,"React JS"),n.a.createElement("span",{className:"author"},n.a.createElement("img",{alt:"image1",src:"/assets/react.png"}),"3 years"))),n.a.createElement("li",{className:"slide"},n.a.createElement("p",null,n.a.createElement("q",null,"Redux JS"),n.a.createElement("span",{className:"author"},n.a.createElement("img",{alt:"image2",src:"/assets/redux.png"}),"3 years"))),n.a.createElement("li",{className:"slide"},n.a.createElement("p",null,n.a.createElement("q",null,"Java"),n.a.createElement("span",{className:"author"},n.a.createElement("img",{alt:"image3",src:"/assets/java.jpg"}),"4 years"))),n.a.createElement("li",{className:"slide"},n.a.createElement("p",null,n.a.createElement("q",null,"Oracle"),n.a.createElement("span",{className:"author"},n.a.createElement("img",{alt:"image4",src:"/assets/oracle.jpg"}),"4 years"))),n.a.createElement("li",{className:"slide"},n.a.createElement("p",null,n.a.createElement("q",null,"Postgres"),n.a.createElement("span",{className:"author"},n.a.createElement("img",{alt:"image4",src:"/assets/postgres.png"}),"4 years")))),n.a.createElement("div",{className:"slidesNavigation"},n.a.createElement("label",{htmlFor:"radio-1",id:"dotForRadio-1"}),n.a.createElement("label",{htmlFor:"radio-2",id:"dotForRadio-2"}),n.a.createElement("label",{htmlFor:"radio-3",id:"dotForRadio-3"}),n.a.createElement("label",{htmlFor:"radio-4",id:"dotForRadio-4"}),n.a.createElement("label",{htmlFor:"radio-5",id:"dotForRadio-5"}))))}}],[{key:"getDerivedStateFromProps",value:function(e,t){var a=e.store.getState();return e&&a?(t.selectedSliderTabIndex=a.dm.selectedSliderTabIndex,t):null}}]),t}(r.Component),b=Object(p.a)((function(e,t){return{selectedSliderTabIndex:e.dm.selectedSliderTabIndex}}))(y),f=(a(28),function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"introductionContainer"},n.a.createElement("div",{className:"introductionTitle"},"title"),n.a.createElement("div",{className:"introductionText"},"text text texttext text texttext text texttext text texttext text texttext text texttext text texttext text texttext text text text text texttext text texttext text texttext text texttext text texttext text texttext text texttext text texttext text text"))}}]),t}(r.Component)),O=(a(29),a(30),function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"titleBarContainer"},n.a.createElement("div",{className:"titleBarName"},"E Pluribus Unum"),n.a.createElement("div",{className:"titlePosititon"},"Ipsum Lorem / Lorem Ipsum"),n.a.createElement("hr",{className:"horizontalBreak"}),n.a.createElement("div",{className:"titleAddress"},"Street no 5, jdssddsds oeodkdkd R/C-E kdsjds ww ikjopi"),n.a.createElement("div",{className:"titleContacts"},"jdakjdajka@mail.com"))}}]),t}(r.Component)),x=(a(31),function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"workHistoryContainer"},n.a.createElement("div",{className:"workHistoryTitle"},"Work History"),n.a.createElement("div",{className:"workHistory"},n.a.createElement("div",{className:"workHistoryItem"},n.a.createElement("div",{className:"workHistoryItemIcon "}),n.a.createElement("div",{className:"workHistoryItemDate"},"20-08-2019"),n.a.createElement("div",{className:"workHistoryItemContent "},n.a.createElement("div",{className:"workHistoryItemTitle"},"Title"),n.a.createElement("div",{className:"workHistoryItemDescription"},n.a.createElement("p",null,"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, nam! Nam eveniet ut aliquam ab asperiores, accusamus iure veniam corporis incidunt reprehenderit accusantium id aut architecto harum quidem dolorem in!")))),n.a.createElement("div",{className:"workHistoryItem"},n.a.createElement("div",{className:"workHistoryItemIcon"}),n.a.createElement("div",{className:"workHistoryItemDate"},"20-08-2019"),n.a.createElement("div",{className:"workHistoryItemContent"},n.a.createElement("div",{className:"workHistoryItemTitle"},"Title"),n.a.createElement("div",{className:"workHistoryItemDescription"},n.a.createElement("p",null,"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, nam! Nam eveniet ut aliquam ab asperiores, accusamus iure veniam corporis incidunt reprehenderit accusantium id aut architecto harum quidem dolorem in!")))),n.a.createElement("div",{className:"workHistoryItem"},n.a.createElement("div",{className:"workHistoryItemIcon"}),n.a.createElement("div",{className:"workHistoryItemDate"},"20-08-2019"),n.a.createElement("div",{className:"workHistoryItemContent"},n.a.createElement("div",{className:"workHistoryItemTitle"},"Title"),n.a.createElement("div",{className:"workHistoryItemDescription"},n.a.createElement("p",null,"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, nam! Nam eveniet ut aliquam ab asperiores, accusamus iure veniam corporis incidunt reprehenderit accusantium id aut architecto harum quidem dolorem in!")))),n.a.createElement("div",{className:"workHistoryItem"},n.a.createElement("div",{className:"workHistoryItemIcon"}),n.a.createElement("div",{className:"workHistoryItemDate"},"20-08-2019"),n.a.createElement("div",{className:"workHistoryItemContent"},n.a.createElement("div",{className:"workHistoryItemTitle"},"Title"),n.a.createElement("div",{className:"workHistoryItemDescription"},n.a.createElement("p",null,"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, nam! Nam eveniet ut aliquam ab asperiores, accusamus iure veniam corporis incidunt reprehenderit accusantium id aut architecto harum quidem dolorem in!"))))))}}]),t}(r.Component)),j=(a(32),function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"welcomeContainer"},n.a.createElement("section",{className:"intro"},n.a.createElement("div",{className:"content"},n.a.createElement("div",{className:"title"},"You can create full screen sections without javascript."),n.a.createElement("div",{className:"content"},"The height is set to 90vh, that means 90% height."))))}}]),t}(r.Component)),k=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(j,null),n.a.createElement(O,null),n.a.createElement(f,null),n.a.createElement(b,{store:this.props.store}),n.a.createElement(x,null))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var N=a(6),w={selectedSliderTabIndex:0};function g(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}var I=[function(e,t){switch(t.type){case v:return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?g(a,!0).forEach((function(t){Object(u.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):g(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},e,{selectedSliderTabIndex:t.index});default:return e}}],S=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=e,r=0;r<I.length;r++)a=I[r](a,t);return a};function H(e){e.getState,e.dispatch;return function(e){return function(t){return t.type,e(t)}}}var T=function(){var e={dm:S},t=[H];return Object(N.d)(Object(N.c)(e),N.a.apply(this,t))}();c.a.render(n.a.createElement(k,{store:T}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[16,1,2]]]);
//# sourceMappingURL=main.e57e08c6.chunk.js.map