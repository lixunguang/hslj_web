<template>
	<view class="content">

		<uni-row class=" demo-uni-row">
			<image style="width: 200px; height: 200px; background-color: #eeeeee;"
				src="https://gss0.baidu.com/9fo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/7dd98d1001e93901eb1513967cec54e736d19607.jpg">
			</image>
		</uni-row>

		<uni-row class=" demo-uni-row">

			<uni-col :span="6">
				<view>名字：</view>
			</uni-col>
			<uni-col :span="18">
				<input class="uni-input-border" style="" styplaceholder-style="color:#aaaaaa" focus
					placeholder="地点名字" />
			</uni-col>

			<uni-col :span="6">
				<view>描述：</view>
			</uni-col>
			<uni-col :span="18">
				<textarea class="uni-textarea-border" placeholder-style="color:#aaaaaa" placeholder="描述"
					v-model="txt"></textarea>
			</uni-col>


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


		<uni-row class=" demo-uni-row">
			<uni-col :span="6">
				<view>参与人数：</view>
			</uni-col>

			<uni-col :span="12">
				<picker @change="bindPickerChange2" :value="index" :range="number" range-key="num">
					<view class="uni-input-border">{{number[index].num}}</view>
				</picker>
			</uni-col>
		</uni-row>

		<uni-row class=" demo-uni-row">
			<uni-col :span="6">
				<view>频次：</view>
			</uni-col>

			<uni-col :span="12">
				<picker @change="bindPickerChange3" :value="index" :range="schedule">
					<view class="uni-input-border">{{schedule[index]}}</view>
				</picker>
			</uni-col>
		</uni-row>




		<button type="default" @click="btnclick()">调试</button>
	</view>

</template>

<script>
	export default {
		data() {
			return {
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

				schedule: ['每天', '周六和周日', '周一', '周二', '周三', '周四', '周五', '周六', '周日', '不固定，需要约时间'],

				index: 0,

				time: '00:00'

			};

		},

		onLoad() {

			//this.onbtnclick()
		},

		methods: {
			btnclick() {
				console.log("11array")

				this.addLocation();

			},

			addLocation() {
				console.log('add location -->')
				uni.request({
					url: 'https://golang-5aqo-57309-9-1301228508.sh.run.tcloudbase.com/admin/location/add',
					method: 'POST',
					data: {
						name: '仰山公园',
						desc: '一个有很多雕塑的公园',

					},
					header: {
						'custom-header': '' //自定义请求头信息
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

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}



	.demo-uni-row {
		justify-content: left;
		margin-bottom: 10px;
		/* QQ、抖音小程序文档写有 :host，但实测不生效 */
		/* 百度小程序没有 :host，需要设置block */
		/* #ifdef MP-TOUTIAO || MP-QQ || MP-BAIDU */
		display: block;
		/* #endif */
	}

	/* 支付宝小程序没有 demo-uni-row 层级 */
	/* 微信小程序使用了虚拟化节点，没有 demo-uni-row 层级 */
	/* #ifdef MP-ALIPAY || MP-WEIXIN */
	.uni-row {
		margin-bottom: 10px;
	}

	/* #endif */

	.demo-uni-col {
		height: 36px;
		border-radius: 4px;
	}

	.dark_deep {
		background-color: #99a9bf;
	}

	.dark {
		background-color: #d3dce6;
	}

	.light {
		background-color: #e5e9f2;
	}


	.uni-input-border,
	.uni-textarea-border {
		width: 80%;
		font-size: 14px;
		color: #666;
		border: 1px #e5e5e5 solid;
		border-radius: 5px;
		box-sizing: border-box;
		padding: 0 10px;
	}

	.uni-input-border {
		height: 35px;

	}
</style>