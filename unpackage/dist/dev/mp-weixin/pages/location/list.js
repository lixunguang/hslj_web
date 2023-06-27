"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      title: "location",
      array: [],
      src: "https://cdnwww.simapps.com/upload/image/20230507/3c44170f-2098-4199-afd0-c5e5f176b362.png"
    };
  },
  onReady() {
    console.log("11");
    this.onbtnclick();
  },
  methods: {
    imageError: function(e) {
      console.error("image发生error事件，携带值为" + e.detail.errMsg);
    },
    onbtnclick() {
      console.log("onbtnclickonbtnclickonbtnclick Launch");
      common_vendor.index.request({
        url: "https://golang-5aqo-57309-9-1301228508.sh.run.tcloudbase.com/admin/GetLocation",
        method: "POST",
        data: {
          text: "uni.request"
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
    goto(url) {
      console.log(url);
      common_vendor.index.navigateTo({
        url
      });
    }
  }
};
if (!Array) {
  const _easycom_uni_col2 = common_vendor.resolveComponent("uni-col");
  const _easycom_uni_row2 = common_vendor.resolveComponent("uni-row");
  (_easycom_uni_col2 + _easycom_uni_row2)();
}
const _easycom_uni_col = () => "../../uni_modules/uni-row/components/uni-col/uni-col.js";
const _easycom_uni_row = () => "../../uni_modules/uni-row/components/uni-row/uni-row.js";
if (!Math) {
  (_easycom_uni_col + _easycom_uni_row)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(($event) => $options.goto("/pages/location/add")),
    b: common_vendor.p({
      span: 24
    }),
    c: common_vendor.f($data.array, (item, index, i0) => {
      return {
        a: common_vendor.o((...args) => $options.imageError && $options.imageError(...args), index),
        b: "b8deaefa-3-" + i0 + "," + ("b8deaefa-2-" + i0),
        c: common_vendor.t(item.Name),
        d: "b8deaefa-4-" + i0 + "," + ("b8deaefa-2-" + i0),
        e: common_vendor.t(item.Desc),
        f: "b8deaefa-5-" + i0 + "," + ("b8deaefa-2-" + i0),
        g: "b8deaefa-2-" + i0,
        h: index
      };
    }),
    d: $data.src,
    e: common_vendor.p({
      span: 8
    }),
    f: common_vendor.p({
      span: 8
    }),
    g: common_vendor.p({
      span: 8
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/lixun/Desktop/hslj/hslj_web/pages/location/list.vue"]]);
wx.createPage(MiniProgramPage);
