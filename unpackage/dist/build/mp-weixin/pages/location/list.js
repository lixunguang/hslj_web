"use strict";const e=require("../../common/vendor.js"),o={data:()=>({title:"location",array:[],src:"https://cdnwww.simapps.com/upload/image/20230507/3c44170f-2098-4199-afd0-c5e5f176b362.png"}),onReady(){console.log("11"),this.onbtnclick()},methods:{imageError:function(e){console.error("image发生error事件，携带值为"+e.detail.errMsg)},onbtnclick(){console.log("onbtnclickonbtnclickonbtnclick Launch"),e.index.request({url:"https://golang-5aqo-57309-9-1301228508.sh.run.tcloudbase.com/admin/GetLocation",method:"POST",data:{text:"uni.request"},header:{"custom-header":""},success:e=>{console.log(e.data.data),this.array=e.data.data,this.text="request success"},fail:()=>{e.index.showToast({icon:"none",title:"网络异常,请稍后重试"})}})},goto(o){console.log(o),e.index.navigateTo({url:o})}}};if(!Array){(e.resolveComponent("uni-col")+e.resolveComponent("uni-row"))()}Math||((()=>"../../uni_modules/uni-row/components/uni-col/uni-col.js")+(()=>"../../uni_modules/uni-row/components/uni-row/uni-row.js"))();const a=e._export_sfc(o,[["render",function(o,a,n,t,r,s){return{a:e.o((e=>s.goto("/pages/location/add"))),b:e.p({span:24}),c:e.f(r.array,((o,a,n)=>({a:e.o(((...e)=>s.imageError&&s.imageError(...e)),a),b:"b8deaefa-3-"+n+",b8deaefa-2-"+n,c:e.t(o.Name),d:"b8deaefa-4-"+n+",b8deaefa-2-"+n,e:e.t(o.Desc),f:"b8deaefa-5-"+n+",b8deaefa-2-"+n,g:"b8deaefa-2-"+n,h:a}))),d:r.src,e:e.p({span:8}),f:e.p({span:8}),g:e.p({span:8})}}]]);wx.createPage(a);