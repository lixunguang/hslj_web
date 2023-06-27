"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      txt: "",
      number: [{
        num: "0~10"
      }, {
        num: "10~20"
      }, {
        num: "20~50"
      }, {
        num: "50~100"
      }, {
        num: "100~"
      }],
      schedule: ["每天", "周六和周日", "周一", "周二", "周三", "周四", "周五", "周六", "周日", "不固定，需要约时间"],
      index: 0,
      time: "00:00"
    };
  },
  onLoad() {
  },
  methods: {
    btnclick() {
      console.log("11array");
      this.addLocation();
    },
    addLocation() {
      console.log("add location -->");
      common_vendor.index.request({
        url: "https://golang-5aqo-57309-9-1301228508.sh.run.tcloudbase.com/admin/location/add",
        method: "POST",
        data: {
          name: "仰山公园",
          desc: "一个有很多雕塑的公园"
        },
        header: {
          "custom-header": ""
          //自定义请求头信息
        },
        success: (res) => {
          console.log(res);
        },
        fail: () => {
          common_vendor.index.showToast({
            icon: "none",
            title: "网络异常,请稍后重试"
          });
        }
      });
    },
    imageError: function(e) {
      console.error("image发生error事件，携带值为" + e.detail.errMsg);
    },
    bindPickerChange1: function(e) {
      console.log("picker1发送选择改变，携带值为：" + e.detail.value);
      this.index = e.detail.value;
    },
    bindPickerChange2: function(e) {
      console.log("picke2r发送选择改变，携带值为：" + e.detail.value);
      this.index = e.detail.value;
    },
    bindPickerChange3: function(e) {
      console.log("picke3r发送选择改变，携带值为：" + e.detail.value);
      this.index = e.detail.value;
    },
    bindTimeChange1: function(e) {
      this.time = e.detail.value;
    },
    bindTimeChange2: function(e) {
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
      span: 6
    }),
    h: common_vendor.t($data.time),
    i: $data.time,
    j: common_vendor.o((...args) => $options.bindTimeChange1 && $options.bindTimeChange1(...args)),
    k: common_vendor.p({
      span: 5
    }),
    l: common_vendor.p({
      span: 2
    }),
    m: common_vendor.t($data.time),
    n: $data.time,
    o: common_vendor.o((...args) => $options.bindTimeChange2 && $options.bindTimeChange2(...args)),
    p: common_vendor.p({
      span: 5
    }),
    q: common_vendor.p({
      span: 6
    }),
    r: common_vendor.t($data.number[$data.index].num),
    s: common_vendor.o((...args) => $options.bindPickerChange2 && $options.bindPickerChange2(...args)),
    t: $data.index,
    v: $data.number,
    w: common_vendor.p({
      span: 12
    }),
    x: common_vendor.p({
      span: 6
    }),
    y: common_vendor.t($data.schedule[$data.index]),
    z: common_vendor.o((...args) => $options.bindPickerChange3 && $options.bindPickerChange3(...args)),
    A: $data.index,
    B: $data.schedule,
    C: common_vendor.p({
      span: 12
    }),
    D: common_vendor.o(($event) => $options.btnclick())
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/lixun/Desktop/hslj/hslj_web/pages/location/add.vue"]]);
wx.createPage(MiniProgramPage);
