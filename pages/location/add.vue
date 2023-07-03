<template>
	<view class="content">

		<!-- 地图 -->

			<map style="width: 100%; height: 300px;" :latitude="map_latitude" :longitude="map_longitude"
				:markers="map_covers">
			</map>


		<!-- 地点信息 -->
		<uni-row class=" location-row">

			<uni-col :span="6">
				<view>名字：</view>
			</uni-col>
			<uni-col :span="18">
				<input class="uni-input-border" style="" styplaceholder-style=" color:#aaaaaa" focus
					placeholder="地点名字,如:颐和园北宫门" />
			</uni-col>
		</uni-row>
		<uni-row class=" location-row">
			<uni-col :span="6">
				<view>位置：</view>
			</uni-col>
			<uni-col :span="18" class=" pos">
				<view>{{posStr}}</view>
			</uni-col>
		</uni-row>
		<uni-row class=" location-row">
			<uni-col :span="6">
				<view>描述：</view>
			</uni-col>
			<uni-col :span="18">
				<textarea class="uni-textarea-border" placeholder-style="color:#aaaaaa" placeholder="描述"
					v-model="txt"></textarea>
			</uni-col>
		</uni-row>
		<uni-row class=" location-row">

			<uni-col :span="6">
				<view>参与人数：</view>
			</uni-col>

			<uni-col :span="18">
				<picker @change="bindPickerChange2" :value="index" :range="number" range-key="num">
					<view class="uni-input-border">{{number[index].num}}</view>
				</picker>
			</uni-col>
		</uni-row>

		<uni-row class=" location-row">
			<uni-col :span="6">
				<view>活动时间：</view>
			</uni-col>
			<uni-col :span="5">
				<picker mode="time" :value="time" start="00:00" end="23:59" @change="bindTimeChange1">
					<view class="uni-input-border">{{time}}</view>
				</picker>
			</uni-col>
			<uni-col :span="2">
				<view>至</view>
			</uni-col>
			<uni-col :span="5">
				<picker mode="time" :value="time" start="00:00" end="23:59" @change="bindTimeChange2">
					<view class="uni-input-border">{{time}}</view>
				</picker>
			</uni-col>

		</uni-row>


		<uni-row class=" location-row">
			<uni-col :span="6">
				<view>频次：</view>
			</uni-col>

			<uni-col :span="12">
				<picker @change="bindPickerChange3" :value="index" :range="schedule">
					<view class="uni-input-border">{{schedule[index]}}</view>
				</picker>
			</uni-col>
		</uni-row>



		<uni-row style="align:center">
			<button type="default" style="margin:50px" @click="commitClick()">提交</button>
		</uni-row>
		<rich-text :nodes="commitText" type="text" bindtap="tap"></rich-text>
	</view>

</template>

<script>
	//const {g_i} = require("../../common/common.js");
	import common from '../../common/common.js';
	
	//引入腾讯地图文件
	import QQMapWX from '../../common/qqmap-wx-jssdk.min.js';
	var qqmapsdk;



	export default {
		data() {
			return {
				map_id: 0, // 使用 marker点击事件 需要填写id
				map_title: 'map',
				map_latitude: 39.909,
				map_longitude: 116.39742,
				map_covers: [{
					latitude: 39.909,
					longitude: 116.39742,
					iconPath: '/static/location.png'
				}, {
					latitude: 39.90,
					longitude: 116.39,
					iconPath: '/static/location.png'
				}],

				posStr: '北京颐和园北宫门附近',
				posNum: 5,
				commitText: "",


				data_image: '<div style="width:50px;height:50px;background-color:#aaaaaa"/>',
				name: '',
				txt: '',
				number: [{
					num: '0~10'
				}, {
					num: '10~20'
				}, {
					num: '20~50'
				}, {
					num: '50~100'
				}, {
					num: '100~'
				}],

				schedule: ['每天', '只周六和周日', '不固定，需要约时间'],

				index: 0,

				time: '00:00'

			};

		},

		onLoad() {
			// 实例化API核心类
			qqmapsdk = new QQMapWX({
				key: 'LUSBZ-3ABWQ-HFH57-4SAJI-5GFFT-2LFYQ'
			});

			this.getCommitInfo();


		},
		onPullDownRefresh() {
			console.log('update refresh')
		},
		updated() {
			console.log('update ----')
		},
		methods: {
			getCommitInfo() {
				console.log('commit')
				this.commitText =
					"<div style='display:none;margin:20px;text-align: center;color:#aaaaaa;font-size:12px'>您已经提交了<strong> " +
					this.posNum + " </strong>个地点</div>";
			},

			moveToLocation() {
				var that = this;
				wx.chooseLocation({
					success: function(res) {
						console.log(res.name);
						//选择地点之后返回到原来页面
						//  wx.navigateTo({
						// url: "/pages/index/index?address="+res.name
						// });
					},
					fail: function(err) {
						console.log(err)
					}
				});
			},

			commitClick() {
				console.log('commitClick -->')
this.moveToLocation();
				//this.addLocation();

				var _this = this;
				//调用获取城市列表接口
				qqmapsdk.getCityList({
					success: function(res) { //成功后的回调
						//console.log(res);
						//console.log('省份数据：', res.result[0]); //打印省份数据
						//console.log('城市数据：', res.result[1]); //打印城市数据
						//console.log('区县数据：', res.result[2]); //打印区县数据
					},
					fail: function(error) {
						console.error(error);
					},
					complete: function(res) {
						// console.log(res);
					}
				});

				qqmapsdk.getDistrictByCityId({
					// 传入对应省份ID获得城市数据，传入城市ID获得区县数据,依次类推
					id: 371700, //对应接口getCityList返回数据的Id，如：北京是'110000'
					success: function(res) { //成功后的回调
						console.log(res);
						console.log('对应城市ID下的区县数据(以北京为例)：', res.result[0]);
					},
					fail: function(error) {
						console.error(error);
					},
					complete: function(res) {
						console.log(res);
					}
				});


				// 调用接口
				/*
			qqmapsdk.search({
			       keyword: '酒店',
			       success: function (res) {
			           console.log(res);
			       },
			       fail: function (res) {
			           console.log(res);
			       },
			   complete: function (res) {
			       console.log(res);
			   }
			});	 
*/
			},

			addLocation() {
				console.log('add location -->')
				uni.request({
					url: 'https://golang-5aqo-57309-9-1301228508.sh.run.tcloudbase.com/v1/location/add',
					method: 'POST',
					data: {
						name: '仰山公园12',
						desc: '一个有很多雕塑的公园',

					},
					header: {

					},
					success: (res) => {
						//	if (res.statusCode == 200) {
						//		}

						console.log(res)

					},
					fail: () => {
						uni.showToast({
							icon: 'none',
							title: '网络异常,请稍后重试'
						});
					}
				})
			},



			imageError: function(e) {
				console.error('image发生error事件，携带值为' + e.detail.errMsg)
			},
			bindPickerChange1: function(e) {
				console.log('picker1发送选择改变，携带值为：' + e.detail.value)
				this.index = e.detail.value
			},

			bindPickerChange2: function(e) {
				console.log('picke2r发送选择改变，携带值为：' + e.detail.value)
				this.index = e.detail.value
			},

			bindPickerChange3: function(e) {
				console.log('picke3r发送选择改变，携带值为：' + e.detail.value)
				this.index = e.detail.value
			},

			bindTimeChange1: function(e) {
				this.time = e.detail.value
			},
			bindTimeChange2: function(e) {
				this.time = e.detail.value
			}


		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: left;
		justify-content: left;
	}

	.location-row {
		justify-content: left;
		margin-top: 10px;
		margin-bottom: 10px;
		/* QQ、抖音小程序文档写有 :host，但实测不生效 */
		/* 百度小程序没有 :host，需要设置block */
		/* #ifdef MP-TOUTIAO || MP-QQ || MP-BAIDU */
		display: block;
		/* #endif */
		text-align: center;
	}

	.uni-input-border,
	.uni-textarea-border {
		width: 90%;
		font-size: 12px;
		color: #666;
		border: 1px #e5e5e5 solid;
		border-radius: 5px;
		box-sizing: border-box;
		padding: 0 10px;
		text-align: left;
	}

	.uni-input-border {
		height: 35px;

	}

	.pos {
		text-align: left;
	}

	.commit {
		margin: 50px;
		text-align: center;
	}
</style>