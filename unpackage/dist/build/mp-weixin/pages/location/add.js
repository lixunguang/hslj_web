"use strict";const e=require("../../common/vendor.js");function n(e){const n=new Date;let t=n.getFullYear(),o=n.getMonth()+1,a=n.getDate();return"start"===e?t-=10:"end"===e&&(t+=10),o=o>9?o:"0"+o,a=a>9?a:"0"+a,`${t}-${o}-${a}`}const t={data:()=>({txt:"uni-app可以同时发布成原生App、小程序、H5，邀请你一起体验！",array1:[{name:"0~10"},{name:"10~20"},{name:"20~50"},{name:"50~100"},{name:"100~"}],index:0,date:n({format:!0}),startDate:n("start"),endDate:n("end"),time:"00:00"}),onLoad(){},methods:{btnclick(){console.log("11array"),console.log(this.txt),console.log(this.index),console.log(this.array1),console.log(this.array1[0])},imageError:function(e){console.error("image发生error事件，携带值为"+e.detail.errMsg)},bindPickerChange:function(e){console.log("picker发送选择改变，携带值为："+e.detail.value),this.index=e.detail.value},bindTimeChange:function(e){this.time=e.detail.value}}};if(!Array){(e.resolveComponent("uni-row")+e.resolveComponent("uni-col"))()}Math||((()=>"../../uni_modules/uni-row/components/uni-row/uni-row.js")+(()=>"../../uni_modules/uni-row/components/uni-col/uni-col.js"))();const o=e._export_sfc(t,[["render",function(n,t,o,a,i,r){return{a:e.p({span:6}),b:e.p({span:18}),c:e.p({span:6}),d:i.txt,e:e.o((e=>i.txt=e.detail.value)),f:e.p({span:18}),g:e.p({span:12}),h:e.t(i.time),i:i.time,j:e.o(((...e)=>r.bindTimeChange&&r.bindTimeChange(...e))),k:e.p({span:5}),l:e.p({span:2}),m:e.t(i.time),n:i.time,o:e.o(((...e)=>r.bindTimeChange&&r.bindTimeChange(...e))),p:e.p({span:5}),q:e.p({span:12}),r:e.t(i.array1[i.index].name),s:e.o(((...e)=>r.bindPickerChange&&r.bindPickerChange(...e))),t:i.index,v:i.array1,w:e.p({span:12}),x:e.o((e=>r.btnclick()))}}]]);wx.createPage(o);
