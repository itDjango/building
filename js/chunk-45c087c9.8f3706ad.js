(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-45c087c9"],{"137e":function(t,e,a){},6345:function(t,e,a){"use strict";var o=a("137e"),s=a.n(o);s.a},"6e47":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"home-container"},[a("MasterPage",{attrs:{title:"账户设置"}},[a("div",{attrs:{slot:"title-icon"},slot:"title-icon"},[a("Icon",{attrs:{type:"ios-list-box"}})],1),a("div",{attrs:{slot:"paddingContent"},slot:"paddingContent"},[a("Form",{attrs:{model:t.formItem,"label-width":80}},[a("FormItem",{attrs:{label:"用户名"}},[a("Input",{attrs:{placeholder:"输入用户名..."},model:{value:t.formItem.input,callback:function(e){t.$set(t.formItem,"input",e)},expression:"formItem.input"}})],1),a("FormItem",{attrs:{label:"负责区域"}},[a("Select",{model:{value:t.formItem.select,callback:function(e){t.$set(t.formItem,"select",e)},expression:"formItem.select"}},[a("Option",{attrs:{value:"shenzhen"}},[t._v("全部")]),a("Option",{attrs:{value:"beijing"}},[t._v("东苑")]),a("Option",{attrs:{value:"shanghai"}},[t._v("西苑")]),a("Option",{attrs:{value:"shenzhen"}},[t._v("北苑")]),a("Option",{attrs:{value:"shenzhen"}},[t._v("南苑")])],1)],1),a("FormItem",{attrs:{label:"看房时间"}},[a("Row",[a("Col",{attrs:{span:"11"}},[a("DatePicker",{attrs:{type:"date",placeholder:"起始时间"},model:{value:t.formItem.date,callback:function(e){t.$set(t.formItem,"date",e)},expression:"formItem.date"}})],1),a("Col",{staticStyle:{"text-align":"center"},attrs:{span:"2"}},[t._v("-")]),a("Col",{attrs:{span:"11"}},[a("TimePicker",{attrs:{type:"time",placeholder:"结束时间"},model:{value:t.formItem.time,callback:function(e){t.$set(t.formItem,"time",e)},expression:"formItem.time"}})],1)],1)],1),a("FormItem",{attrs:{label:"看房方式"}},[a("CheckboxGroup",{model:{value:t.formItem.checkbox,callback:function(e){t.$set(t.formItem,"checkbox",e)},expression:"formItem.checkbox"}},[a("Checkbox",{attrs:{label:"电话预约"}}),a("Checkbox",{attrs:{label:"地推"}}),a("Checkbox",{attrs:{label:"售楼处接待"}}),a("Checkbox",{attrs:{label:"网络推广"}})],1)],1),a("FormItem",{attrs:{label:"是否值班"}},[a("i-switch",{attrs:{size:"large"},model:{value:t.formItem.switch,callback:function(e){t.$set(t.formItem,"switch",e)},expression:"formItem.switch"}},[a("span",{attrs:{slot:"open"},slot:"open"},[t._v("是")]),a("span",{attrs:{slot:"close"},slot:"close"},[t._v("否")])])],1),a("FormItem",{attrs:{label:"备注"}},[a("Input",{attrs:{type:"textarea",autosize:{minRows:2,maxRows:5},placeholder:"输入备注..."},model:{value:t.formItem.textarea,callback:function(e){t.$set(t.formItem,"textarea",e)},expression:"formItem.textarea"}})],1),a("FormItem",[a("Button",{attrs:{type:"primary"},on:{click:t.updata}},[t._v("提交更新")]),a("Button",{staticStyle:{"margin-left":"8px"},on:{click:t.quxoia}},[t._v("取消")])],1)],1)],1)])],1)},s=[],r=a("d619"),l={components:{MasterPage:r["a"]},data:function(){return{formItem:{input:"",select:"",radio:"male",checkbox:[],switch:!0,date:"",time:"",slider:[20,50],textarea:""}}},created:function(){this.data=this.data1},methods:{updata:function(){this.$Message.info("提交成功！")},quxoia:function(){this.$router.push("/home")}}},n=l,i=(a("6345"),a("2877")),c=Object(i["a"])(n,o,s,!1,null,"0715f17e",null);e["default"]=c.exports}}]);
//# sourceMappingURL=chunk-45c087c9.8f3706ad.js.map