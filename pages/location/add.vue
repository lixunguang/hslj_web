<template>
	<view class="content">

		<uni-row class=" demo-uni-row">
			<image style="width: 200px; height: 200px; background-color: #eeeeee;"
				src="https://gss0.baidu.com/9fo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/7dd98d1001e93901eb1513967cec54e736d19607.jpg">
			</image>
		</uni-row>

		<uni-row class=" demo-uni-row">
			<uni-col :span="6">
				<view>名字</view>
			</uni-col>
			<uni-col :span="18">
				<input class="uni-input" placeholder-style="color:#F76260" focus placeholder="地点名字" />
			</uni-col>

			<uni-col :span="6">
				<view>描述</view>
			</uni-col>
			<uni-col :span="18">
				<textarea class="textarea" placeholder-style="color:#aaaaaa" placeholder="描述" v-model="txt"></textarea>
			</uni-col>


			<uni-col :span="12">
				<view>选择开始-结束时间</view>
			</uni-col>
			<uni-col :span="5">
				<picker mode="time" :value="time" start="00:00" end="23:59" @change="bindTimeChange">
					<view class="uni-input">{{time}}</view>
				</picker>
			</uni-col>
			<uni-col :span="2">
				<view>~</view>
			</uni-col>
			<uni-col :span="5">
				<picker mode="time" :value="time" start="00:00" end="23:59" @change="bindTimeChange">
					<view class="uni-input">{{time}}</view>
				</picker>
			</uni-col>
		</uni-row>


		<view>系统中1。</view>

		<uni-row class=" demo-uni-row">
			<uni-col :span="24">
				<picker @change="bindPickerChange" :value="index" :range="array" range-key="name">
					<view class="uni-input">{{array[index].name}}</view>
					<view class="uni-input">1111</view>
				</picker>
			</uni-col>

			<uni-col :span="24">
				<picker mode="selector" @change="bindPickerChange" :value="index" :range="array" range-key="name">
					<view class="uni-input">{{array[index].name}}</view>
				</picker>
			</uni-col>
		</uni-row>

		<view>系统中2。</view>
<button type="default" @click="btnclick()">clickme</button>
	</view>

</template>

<script>
	function getDate(type) {
		const date = new Date();

		let year = date.getFullYear();
		let month = date.getMonth() + 1;
		let day = date.getDate();

		if (type === 'start') {
			year = year - 10;
		} else if (type === 'end') {
			year = year + 10;
		}
		month = month > 9 ? month : '0' + month;;
		day = day > 9 ? day : '0' + day;

		return `${year}-${month}-${day}`;
	}

	export default {
		data() {
			return {
				txt: 'uni-app可以同时发布成原生App、小程序、H5，邀请你一起体验！',
				array: [{
					name: '中国'
				}, {
					name: '美国'
				}, {
					name: '巴西'
				}, {
					name: '日本'
				}],
				index: 0,
				
				
				date: getDate({
					format: true
				}),
				startDate: getDate('start'),
				endDate: getDate('end'),
				time: '00:00'

			};

		},

		onLoad() {
		 
			this.onbtnclick()
		},

		methods: {
			btnclick(){
				console.log("11array")
		console.log(this.txt)

				
			},
			imageError: function(e) {
				console.error('image发生error事件，携带值为' + e.detail.errMsg)
			},
			bindPickerChange: function(e) {
				console.log('picker发送选择改变，携带值为：' + e.detail.value)
				this.index = e.detail.value
			},
			onbtnclick() {
				console.log('onbtnclickonbtnclickonbtnclick Launch')
				uni.request({
					url: 'https://golang-5aqo-57309-9-1301228508.sh.run.tcloudbase.com/admin/GetLocation',
					method: 'POST',
					data: {
						text: 'uni.request',
						date: getDate({
							format: true
						}),
						startDate: getDate('start'),
						endDate: getDate('end'),
						time: '12:01'
					},
					header: {
						'custom-header': '' //自定义请求头信息
					},
					success: (res) => {
						console.log(res.data.data);
						this.array = res.data.data

						this.text = 'request success';
					},
					fail: () => {
						uni.showToast({
							icon: 'none',
							title: '网络异常,请稍后重试'
						});
					}
				})
			},

			bindTimeChange: function(e) {
				this.time = e.detail.value
			}

		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
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
	/deep/ .uni-row {
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
</style>