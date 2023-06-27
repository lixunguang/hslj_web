"use strict";
const common_vendor = require("../../common/vendor.js");
function getDate(type) {
  const date = /* @__PURE__ */ new Date();
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  if (type === "start") {
    year = year - 10;
  } else if (type === "end") {
    year = year + 10;
  }
  month = month > 9 ? month : "0" + month;
  day = day > 9 ? day : "0" + day;
  return `${year}-${month}-${day}`;
}
const _sfc_main = {
  data() {
    return {
      txt: "uni-app可以同时发布成原生App、小程序、H5，邀请你一起体验！",
      array: [{
        name: "中国"
      }, {
        name: "美国"
      }, {
        name: "巴西"
      }, {
        name: "日本"
      }],
      index: 0,
      date: getDate({
        format: true
      }),
      startDate: getDate("start"),
      endDate: getDate("end"),
      time: "00:00"
    };
  },
  onLoad() {
    this.onbtnclick();
  },
  methods: {
    btnclick() {
      console.log("11array");
      console.log(this.txt);
    },
    imageError: function(e) {
      console.error("image发生error事件，携带值为" + e.detail.errMsg);
    },
    bindPickerChange: function(e) {
      console.log("picker发送选择改变，携带值为：" + e.detail.value);
      this.index = e.detail.value;
    },
    onbtnclick() {
      console.log("onbtnclickonbtnclickonbtnclick Launch");
      common_vendor.index.request({
        url: "https://golang-5aqo-57309-9-1301228508.sh.run.tcloudbase.com/admin/GetLocation",
        method: "POST",
        data: {
          text: "uni.request",
          date: getDate({
            format: true
          }),
          startDate: getDate("start"),
          endDate: getDate("end"),
          time: "12:01"
        },
        header: {
          "custom-header": ""
          //自定义请求头信息
        },
        success: (res) => {
          console.log(res.data.data);
          this.array = res.data.data;
          this.text = "request success";
        },
        fail: () => {
          common_vendor.index.showToast({
            icon: "none",
            title: "网络异常,请稍后重试"
          });
        }
      });
    },
    bindTimeChange: function(e) {
      this.time = e.detail.value;
    }
  }
};
if (!Array) {
  const _easycom_uni_row2 = common_vendor.resolveComponent("uni-row");
  const _easycom_uni_col2 = common_vendor.resolveComponent("uni-col");
  (_easycom_uni_row2 + _easycom_uni_col2)();
}
const _easycom_uni_row = () => "../../uni_modules/uni-row/components/uni-row/uni-row.js";
const _easycom_uni_col = () => "../../uni_modules/uni-row/components/uni-col/uni-col.js";
if (!Math) {
  (_easycom_uni_row + _easycom_uni_col)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      span: 6
    }),
    b: common_vendor.p({
      span: 18
    }),
    c: common_vendor.p({
      span: 6
    }),
    d: $data.txt,
    e: common_vendor.o(($event) => $data.txt = $event.detail.value),
    f: common_vendor.p({
      span: 18
    }),
    g: common_vendor.p({
      span: 12
    }),
    h: common_vendor.t($data.time),
    i: $data.time,
    j: common_vendor.o((...args) => $options.bindTimeChange && $options.bindTimeChange(...args)),
    k: common_vendor.p({
      span: 5
    }),
    l: common_vendor.p({
      span: 2
    }),
    m: common_vendor.t($data.time),
    n: $data.time,
    o: common_vendor.o((...args) => $options.bindTimeChange && $options.bindTimeChange(...args)),
    p: common_vendor.p({
      span: 5
    }),
    q: common_vendor.t($data.array[$data.index].name),
    r: common_vendor.o((...args) => $options.bindPickerChange && $options.bindPickerChange(...args)),
    s: $data.index,
    t: $data.array,
    v: common_vendor.p({
      span: 24
    }),
    w: common_vendor.t($data.array[$data.index].name),
    x: common_vendor.o((...args) => $options.bindPickerChange && $options.bindPickerChange(...args)),
    y: $data.index,
    z: $data.array,
    A: common_vendor.p({
      span: 24
    }),
    B: common_vendor.o(($event) => $options.btnclick())
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/lixun/Desktop/hslj/hslj_web/pages/location/add.vue"]]);
wx.createPage(MiniProgramPage);
