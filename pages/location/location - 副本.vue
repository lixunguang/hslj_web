<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
		<view class="image-list">
			<view class="image-item" v-for="(item,index) in array" :key="index">
				
					<uni-row class="demo-uni-row" :width="nvueWidth">
						<uni-col>
							<view class="demo-uni-col dark_deep"></view>
						</uni-col>
					</uni-row>
								
								
				<view class="image-content">
					<image style="width: 100px; height: 50px; background-color: #eeeeee;" :src="src"
						@error="imageError"></image>
				</view>

				<view class="image-title">{{item.Name}}</view>
				<view class="image-title">{{item.Desc}}</view>
				<view class="image-title">{{item.Latitude}}</view>
				<view class="image-title">{{item.Longitude}}</view>
				<view class="image-title">{{item.Rating}}</view>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'location',
				array: [],
				src: 'https://www.simapps.com/style/store/img/index-logo.png'
			}

		},

		onLoad() {
			console.log('11')
			this.onbtnclick()
		},

		methods: {
			imageError: function(e) {
				console.error('image发生error事件，携带值为' + e.detail.errMsg)
			},

			onbtnclick() {
				console.log('onbtnclickonbtnclickonbtnclick Launch')
				uni.request({
					url: 'https://golang-5aqo-57309-9-1301228508.sh.run.tcloudbase.com/admin/GetLocation',
					method: 'POST',
					data: {
						text: 'uni.request'
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