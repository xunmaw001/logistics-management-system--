(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/peisongxinxi/add-or-update"],{"003a":function(n,e,i){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=r(i("a34a"));function r(n){return n&&n.__esModule?n:{default:n}}function u(n,e,i,t,r,u,a){try{var s=n[u](a),o=s.value}catch(h){return void i(h)}s.done?e(o):Promise.resolve(o).then(t,r)}function a(n){return function(){var e=this,i=arguments;return new Promise((function(t,r){var a=n.apply(e,i);function s(n){u(a,t,r,s,o,"next",n)}function o(n){u(a,t,r,s,o,"throw",n)}s(void 0)}))}}var s=function(){return Promise.all([i.e("common/vendor"),i.e("components/w-picker/w-picker")]).then(i.bind(null,"e2b1"))},o=function(){return i.e("components/xia-editor/xia-editor").then(i.bind(null,"064f"))},h={data:function(){return{cross:"",ruleForm:{kuaididanhao:"",yonghuzhanghao:"",yonghuxingming:"",shouji:"",wupinmingcheng:"",wupinfenlei:"",shuliang:"",zhongliang:"",feiyong:"",shoujianren:"",shoujiandizhi:"",lianxishouji:"",quhuofangshi:"",zhifuleibie:"",peisongshijian:"",peisongyuan:"",yuangongxingming:"",bumen:"",wuliuxinxi:"",yunshuluxian:"",crossuserid:"",crossrefid:""},peisongyuanOptions:[],peisongyuanIndex:0,user:{},ro:{kuaididanhao:!1,yonghuzhanghao:!1,yonghuxingming:!1,shouji:!1,wupinmingcheng:!1,wupinfenlei:!1,shuliang:!1,zhongliang:!1,feiyong:!1,shoujianren:!1,shoujiandizhi:!1,lianxishouji:!1,quhuofangshi:!1,zhifuleibie:!1,peisongshijian:!1,peisongyuan:!1,yuangongxingming:!1,bumen:!1,wuliuxinxi:!1,yunshuluxian:!1,crossuserid:!1,crossrefid:!1}}},components:{wPicker:s,xiaEditor:o},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var e=a(t.default.mark((function e(i){var r,u,a,s;return t.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.ruleForm.peisongshijian=this.$utils.getCurDateTime(),r=n.getStorageSync("nowTable"),e.next=4,this.$api.session(r);case 4:return u=e.sent,this.user=u.data,this.ruleForm.yonghuzhanghao=this.user.yonghuzhanghao,this.ro.yonghuzhanghao=!0,this.ruleForm.yonghuxingming=this.user.yonghuxingming,this.ro.yonghuxingming=!0,this.ruleForm.shouji=this.user.shouji,this.ro.shouji=!0,this.ro.kuaididanhao=!0,e.next=15,this.$api.option("yuangong","yuangonggonghao",{});case 15:if(u=e.sent,this.peisongyuanOptions=u.data,this.ruleForm.userid=n.getStorageSync("userid"),i.refid&&(this.ruleForm.refid=i.refid,this.ruleForm.nickname=n.getStorageSync("nickname")),!i.id){e.next=25;break}return this.ruleForm.id=i.id,e.next=23,this.$api.info("peisongxinxi",this.ruleForm.id);case 23:u=e.sent,this.ruleForm=u.data;case 25:if(this.cross=i.cross,!i.cross){e.next=121;break}a=n.getStorageSync("crossObj"),e.t0=t.default.keys(a);case 29:if((e.t1=e.t0()).done){e.next=121;break}if(s=e.t1.value,"kuaididanhao"!=s){e.next=35;break}return this.ruleForm.kuaididanhao=a[s],this.ro.kuaididanhao=!0,e.abrupt("continue",29);case 35:if("yonghuzhanghao"!=s){e.next=39;break}return this.ruleForm.yonghuzhanghao=a[s],this.ro.yonghuzhanghao=!0,e.abrupt("continue",29);case 39:if("yonghuxingming"!=s){e.next=43;break}return this.ruleForm.yonghuxingming=a[s],this.ro.yonghuxingming=!0,e.abrupt("continue",29);case 43:if("shouji"!=s){e.next=47;break}return this.ruleForm.shouji=a[s],this.ro.shouji=!0,e.abrupt("continue",29);case 47:if("wupinmingcheng"!=s){e.next=51;break}return this.ruleForm.wupinmingcheng=a[s],this.ro.wupinmingcheng=!0,e.abrupt("continue",29);case 51:if("wupinfenlei"!=s){e.next=55;break}return this.ruleForm.wupinfenlei=a[s],this.ro.wupinfenlei=!0,e.abrupt("continue",29);case 55:if("shuliang"!=s){e.next=59;break}return this.ruleForm.shuliang=a[s],this.ro.shuliang=!0,e.abrupt("continue",29);case 59:if("zhongliang"!=s){e.next=63;break}return this.ruleForm.zhongliang=a[s],this.ro.zhongliang=!0,e.abrupt("continue",29);case 63:if("feiyong"!=s){e.next=67;break}return this.ruleForm.feiyong=a[s],this.ro.feiyong=!0,e.abrupt("continue",29);case 67:if("shoujianren"!=s){e.next=71;break}return this.ruleForm.shoujianren=a[s],this.ro.shoujianren=!0,e.abrupt("continue",29);case 71:if("shoujiandizhi"!=s){e.next=75;break}return this.ruleForm.shoujiandizhi=a[s],this.ro.shoujiandizhi=!0,e.abrupt("continue",29);case 75:if("lianxishouji"!=s){e.next=79;break}return this.ruleForm.lianxishouji=a[s],this.ro.lianxishouji=!0,e.abrupt("continue",29);case 79:if("quhuofangshi"!=s){e.next=83;break}return this.ruleForm.quhuofangshi=a[s],this.ro.quhuofangshi=!0,e.abrupt("continue",29);case 83:if("zhifuleibie"!=s){e.next=87;break}return this.ruleForm.zhifuleibie=a[s],this.ro.zhifuleibie=!0,e.abrupt("continue",29);case 87:if("peisongshijian"!=s){e.next=91;break}return this.ruleForm.peisongshijian=a[s],this.ro.peisongshijian=!0,e.abrupt("continue",29);case 91:if("peisongyuan"!=s){e.next=95;break}return this.ruleForm.peisongyuan=a[s],this.ro.peisongyuan=!0,e.abrupt("continue",29);case 95:if("yuangongxingming"!=s){e.next=99;break}return this.ruleForm.yuangongxingming=a[s],this.ro.yuangongxingming=!0,e.abrupt("continue",29);case 99:if("bumen"!=s){e.next=103;break}return this.ruleForm.bumen=a[s],this.ro.bumen=!0,e.abrupt("continue",29);case 103:if("wuliuxinxi"!=s){e.next=107;break}return this.ruleForm.wuliuxinxi=a[s],this.ro.wuliuxinxi=!0,e.abrupt("continue",29);case 107:if("yunshuluxian"!=s){e.next=111;break}return this.ruleForm.yunshuluxian=a[s],this.ro.yunshuluxian=!0,e.abrupt("continue",29);case 111:if("crossuserid"!=s){e.next=115;break}return this.ruleForm.crossuserid=a[s],this.ro.crossuserid=!0,e.abrupt("continue",29);case 115:if("crossrefid"!=s){e.next=119;break}return this.ruleForm.crossrefid=a[s],this.ro.crossrefid=!0,e.abrupt("continue",29);case 119:e.next=29;break;case 121:this.styleChange();case 122:case"end":return e.stop()}}),e,this)})));function i(n){return e.apply(this,arguments)}return i}(),methods:{styleChange:function(){this.$nextTick((function(){}))},peisongyuanChange:function(){var n=a(t.default.mark((function n(e){var i;return t.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return this.peisongyuanIndex=e.target.value,this.ruleForm.peisongyuan=this.peisongyuanOptions[this.peisongyuanIndex],n.next=4,this.$api.follow("yuangong","yuangonggonghao",{columnValue:this.ruleForm.peisongyuan});case 4:i=n.sent,i.data.yuangongxingming&&(this.ruleForm.yuangongxingming=i.data.yuangongxingming),i.data.bumen&&(this.ruleForm.bumen=i.data.bumen);case 7:case"end":return n.stop()}}),n,this)})));function e(e){return n.apply(this,arguments)}return e}(),peisongshijianConfirm:function(n){console.log(n),this.ruleForm.peisongshijian=n.result,this.$forceUpdate()},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=a(t.default.mark((function e(){var i,r,u,a,s,o,h,c,g,l;return t.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.ruleForm.wupinmingcheng){e.next=3;break}return this.$utils.msg("物品名称不能为空"),e.abrupt("return");case 3:if(!this.ruleForm.shuliang||this.$validate.isIntNumer(this.ruleForm.shuliang)){e.next=6;break}return this.$utils.msg("数量应输入整数"),e.abrupt("return");case 6:if(!this.ruleForm.zhongliang||this.$validate.isNumber(this.ruleForm.zhongliang)){e.next=9;break}return this.$utils.msg("重量kg应输入数字"),e.abrupt("return");case 9:if(!this.ruleForm.feiyong||this.$validate.isNumber(this.ruleForm.feiyong)){e.next=12;break}return this.$utils.msg("费用应输入数字"),e.abrupt("return");case 12:if(!this.cross){e.next=28;break}if(s=n.getStorageSync("statusColumnName"),o=n.getStorageSync("statusColumnValue"),""==s){e.next=28;break}if(i||(i=n.getStorageSync("crossObj")),s.startsWith("[")){e.next=24;break}for(h in i)h==s&&(i[h]=o);return c=n.getStorageSync("crossTable"),e.next=22,this.$api.update("".concat(c),i);case 22:e.next=28;break;case 24:r=Number(n.getStorageSync("userid")),u=i["id"],a=n.getStorageSync("statusColumnName"),a=a.replace(/\[/,"").replace(/\]/,"");case 28:if(!u||!r){e.next=50;break}return this.ruleForm.crossuserid=r,this.ruleForm.crossrefid=u,g={page:1,limit:10,crossuserid:r,crossrefid:u},e.next=34,this.$api.list("peisongxinxi",g);case 34:if(l=e.sent,!(l.data.total>=a)){e.next=40;break}return this.$utils.msg(n.getStorageSync("tips")),e.abrupt("return",!1);case 40:if(!this.ruleForm.id){e.next=45;break}return e.next=43,this.$api.update("peisongxinxi",this.ruleForm);case 43:e.next=47;break;case 45:return e.next=47,this.$api.add("peisongxinxi",this.ruleForm);case 47:this.$utils.msgBack("提交成功");case 48:e.next=58;break;case 50:if(!this.ruleForm.id){e.next=55;break}return e.next=53,this.$api.update("peisongxinxi",this.ruleForm);case 53:e.next=57;break;case 55:return e.next=57,this.$api.add("peisongxinxi",this.ruleForm);case 57:this.$utils.msgBack("提交成功");case 58:case"end":return e.stop()}}),e,this)})));function i(){return e.apply(this,arguments)}return i}(),optionsChange:function(n){this.index=n.target.value},bindDateChange:function(n){this.date=n.target.value},getDate:function(n){var e=new Date,i=e.getFullYear(),t=e.getMonth()+1,r=e.getDate();return"start"===n?i-=60:"end"===n&&(i+=2),t=t>9?t:"0"+t,r=r>9?r:"0"+r,"".concat(i,"-").concat(t,"-").concat(r)},toggleTab:function(n){this.$refs[n].show()}}};e.default=h}).call(this,i("543d")["default"])},"2b4f":function(n,e,i){"use strict";i.r(e);var t=i("003a"),r=i.n(t);for(var u in t)"default"!==u&&function(n){i.d(e,n,(function(){return t[n]}))}(u);e["default"]=r.a},"479d":function(n,e,i){"use strict";var t={"w-picker":()=>Promise.all([i.e("common/vendor"),i.e("components/w-picker/w-picker")]).then(i.bind(null,"e2b1"))},r=function(){var n=this,e=n.$createElement;n._self._c},u=[];i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return u})),i.d(e,"a",(function(){return t}))},"542d":function(n,e,i){"use strict";i.r(e);var t=i("479d"),r=i("2b4f");for(var u in r)"default"!==u&&function(n){i.d(e,n,(function(){return r[n]}))}(u);i("65ce");var a,s=i("f0c5"),o=Object(s["a"])(r["default"],t["b"],t["c"],!1,null,"434499e9",null,!1,t["a"],a);e["default"]=o.exports},"5a6c":function(n,e,i){},"658e":function(n,e,i){"use strict";(function(n){i("6cdc"),i("921b");t(i("66fd"));var e=t(i("542d"));function t(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,i("543d")["createPage"])},"65ce":function(n,e,i){"use strict";var t=i("5a6c"),r=i.n(t);r.a}},[["658e","common/runtime","common/vendor"]]]);