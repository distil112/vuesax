(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{404:function(t,e,a){},515:function(t,e,a){"use strict";var l=a(404);a.n(l).a},665:function(t,e,a){"use strict";a.r(e);a(0);var l={data:function(){return{activePrompt:!1,activePrompt2:!1,val:"",valMultipe:{value1:"",value2:""}}},computed:{validName:function(){return this.valMultipe.value1.length>0&&this.valMultipe.value2.length>0}},methods:{acceptAlert:function(t){this.$vs.notify({color:"success",title:"Accept Selected",text:"Lorem ipsum dolor sit amet, consectetur"})}}},v=(a(515),a(1)),n=Object(v.a)(l,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"centerx con-exemple-prompt"},[a("div",{staticClass:"modelx"},[t._v("\n    "+t._s(null==t.val?"null":t.val)+"\n  ")]),t._v(" "),a("vs-button",{attrs:{"vs-color":"primary","vs-type":"border"},on:{click:function(e){t.activePrompt=!0}}},[t._v("Run prompt")]),t._v(" "),a("div",{staticClass:"modelx"},[t._v("\n     "+t._s(t.valMultipe.value1)+"\n     "+t._s(t.valMultipe.value2)+"\n   ")]),t._v(" "),a("vs-button",{attrs:{"vs-color":"primary","vs-type":"border"},on:{click:function(e){t.activePrompt2=!0}}},[t._v("Run prompt inputs")]),t._v(" "),a("vs-prompt",{attrs:{"vs-active":t.activePrompt},on:{"vs-cancel":function(e){t.val=""},"vs-accept":t.acceptAlert,"update:vsActive":function(e){t.activePrompt=e}}},[a("div",{staticClass:"con-exemple-prompt"},[t._v("\n        Enter the security code\n       "),a("vs-input",{attrs:{placeholder:"Code","vs-placeholder":"Code"},model:{value:t.val,callback:function(e){t.val=e},expression:"val"}})],1)]),t._v(" "),a("vs-prompt",{attrs:{"vs-is-valid":t.validName,"vs-active":t.activePrompt2},on:{"vs-cancel":function(e){t.valMultipe.value1="",t.valMultipe.value2=""},"vs-accept":t.acceptAlert,"update:vsActive":function(e){t.activePrompt2=e}}},[a("div",{staticClass:"con-exemple-prompt"},[t._v("\n     Enter your first and last name to "),a("b",[t._v("continue")]),t._v(".\n       "),a("vs-input",{attrs:{placeholder:"Name"},model:{value:t.valMultipe.value1,callback:function(e){t.$set(t.valMultipe,"value1",e)},expression:"valMultipe.value1"}}),t._v(" "),a("vs-input",{attrs:{placeholder:"Last Name"},model:{value:t.valMultipe.value2,callback:function(e){t.$set(t.valMultipe,"value2",e)},expression:"valMultipe.value2"}}),t._v(" "),a("vs-alert",{attrs:{"vs-active":!t.validName,"vs-color":"danger","vs-icon":"new_releases"}},[t._v("\n         Fields can not be empty please enter the data\n       ")])],1)])],1)},[],!1,null,null,null);n.options.__file="Prompt.vue";e.default=n.exports}}]);