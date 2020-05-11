(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{209:function(t,e,n){"use strict";var r={name:"Paginator",props:["page"],data:function(){return{pages:[]}},created:function(){},methods:{changePage:function(){this.$emit("changePage")},nextPage:function(){this.page.current<this.page.count&&(this.page.current++,this.$emit("changePage"))},previousPage:function(){this.page.current>0&&(this.page.current--,this.$emit("changePage"))}}},c=n(30),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{attrs:{"aria-label":"Page navigation"}},[n("ul",{staticClass:"pagination justify-content-center"},[n("li",{staticClass:"page-item",class:{disabled:this.page.current<=1},on:{click:t.previousPage}},[n("a",{staticClass:"page-link",attrs:{href:"#",tabindex:"-1"}},[t._v("trước")])]),t._v(" "),n("li",[n("div",{staticClass:"input-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.page.current,expression:"page.current"}],staticClass:"form-control",staticStyle:{width:"70px"},attrs:{type:"number",min:"0",max:this.page.count,placeholder:"current page","aria-label":"current page"},domProps:{value:t.page.current},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.changePage(e)},input:function(e){e.target.composing||t.$set(t.page,"current",e.target.value)}}}),t._v(" "),n("div",{staticClass:"input-group-append"},[n("span",{staticClass:"input-group-text"},[t._v("of "+t._s(this.page.count))])])])]),t._v(" "),n("li",{staticClass:"page-item",class:{disabled:this.page.current==this.page.count},on:{click:t.nextPage}},[n("a",{staticClass:"page-link",attrs:{href:"#"}},[t._v("sau")])])])])}),[],!1,null,null,null);e.a=component.exports},210:function(t,e,n){"use strict";var r={name:"Loading"},c=n(30),component=Object(c.a)(r,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"d-flex justify-content-center m-5",attrs:{id:"js-spinner"}},[e("div",{staticClass:"spinner-border",staticStyle:{width:"3rem",height:"3rem"},attrs:{role:"status"}},[e("span",{staticClass:"sr-only"},[this._v("Loading...")])])])])}],!1,null,null,null);e.a=component.exports},211:function(t,e,n){"use strict";var r={},c=n(30),component=Object(c.a)(r,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h4",{staticClass:"subtitle m-5"},[this._v("Oh no! API không phản hồi")])])}],!1,null,null,null);e.a=component.exports},217:function(t,e,n){"use strict";n.r(e);n(10),n(11);var r=n(209),c=n(210),o=n(211),l=n(57),h=n.n(l),d={loading:!1,components:{Paginator:r.a,Loading:c.a,ErrorMessage:o.a},head:function(){return{title:this.name}},created:function(){document.title=this.name,this.fetch(this.id,this.itemPerPage,0)},data:function(t){t.params;return{page:{count:0,current:1},itemPerPage:100,offset:0,data:{count:0,total:0,result:[]},id:this.$route.params.id,name:this.$route.query.name,loading:!0,error:!1}},methods:{showLoading:function(){this.$nuxt.$loading.start(),this.loading=!0},hideLoading:function(){this.$nuxt.$loading.finish(),this.loading=!1},changePage:function(t){console.log(t),this.fetch(this.id,this.itemPerPage,(t.current-1)*this.itemPerPage)},fetch:function(t,e,n){var r=this;setTimeout((function(){r.showLoading()}),500),this.error=!1;var c={},o="https://jav-rest-api-htpvmrzjet.now.sh/api/videos/".concat(t,"?");100!=e&&(o+="hits=".concat(e)),n>0&&(o+=" &offset=".concat(n)),console.log(o),h.a.get(o).then((function(t){r.hideLoading(),c=t,r.page.count=Math.ceil((c.data.total||0)/r.itemPerPage),r.page.current>r.page.count&&(r.page.current=r.page.count),c.data.result.forEach((function(element){element.imageUrl=element.imageUrl.replace("httpss","https");var code=element.siteUrl.substring(element.siteUrl.lastIndexOf("cid=")+4);element.code=code.substring(0,code.lastIndexOf("/")).toUpperCase(),element.review||(element.review={count:0,average:"?"})})),r.data=c.data,document.title="".concat(r.name," (").concat(r.data.total,")")})).catch((function(t){console.error(t),r.error=!0,r.hideLoading()}))}}},m=n(30),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-fluid m-lg-5 p-lg-5"},[n("div",{staticClass:"m-2"},[n("div",{staticClass:"d-flex flex-column"},[n("NuxtLink",{attrs:{to:"/"}},[n("h2",{staticClass:"title mb-4"},[t._v(t._s(t.name))])]),t._v(" "),t.error?n("ErrorMessage"):t._e(),t._v(" "),t.loading?n("Loading"):t._e(),t._v(" "),this.page.count>=1?n("Paginator",{staticClass:"d-flex flex-column m-3",attrs:{page:t.page},on:{changePage:function(e){return t.changePage(t.page)}}}):t._e(),t._v(" "),n("div",{staticClass:"row"},t._l(t.data.result,(function(e,r){return n("div",{key:r,staticClass:"col-12 col-sm-6 col-lg-3 col-xl-2"},[n("div",{staticClass:"card mt-2 mb-2"},[n("img",{staticClass:"card-img-top",attrs:{src:e.imageUrl,alt:"Card image cap"}}),t._v(" "),n("div",{staticClass:"card-body pb-1"},[n("h5",{staticClass:"card-title"},[t._v(t._s(e.name))])]),t._v(" "),n("ul",{staticClass:"list-group list-group-flush"},[n("li",{staticClass:"list-group-item"},[t._v("\n                code:\n                "),n("a",{staticClass:"font-weight-bold",attrs:{href:"https://www.google.com/search?q="+e.code,target:"_blank"}},[t._v(t._s(e.code||"? "))])]),t._v(" "),n("li",{staticClass:"list-group-item"},[t._v("review: "+t._s(e.review.average||"? ")+" ("+t._s(e.review.count||"? ")+")")]),t._v(" "),n("li",{staticClass:"list-group-item"},[t._v("date: "+t._s(e.date||"? "))]),t._v(" "),n("li",{staticClass:"list-group-item"},[t._v("\n                maker:\n                "),t._l(e.maker,(function(e,r){return n("div",{key:r},[t._v("\n                  "+t._s(e.name)+"\n                  "),r>0?n("div",[t._v(",")]):t._e()])}))],2)])])])})),0),t._v(" "),this.page.count>=1?n("Paginator",{staticClass:"d-flex flex-column m-3",attrs:{page:t.page},on:{changePage:function(e){return t.changePage(t.page)}}}):t._e()],1)])])}),[],!1,null,null,null);e.default=component.exports}}]);