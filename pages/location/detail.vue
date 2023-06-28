<template>
	<view class="content">

		<uni-row class="demo-uni-row">
			<uni-col :span="24">
				<button type="default" @click="goto('/pages/location/add')">detail</button>
			</uni-col>
		</uni-row>

		<view class="image-list">
			<view class="image-item" v-for="(item,index) in array" :key="index">
				<uni-row class="demo-uni-row">
					<uni-col :span="8">
						<view class="image-content">
							<image style="height: 50px;width: 50px; background-color: #eeeeee;" :src="src"
								@error="imageError"></image>
						</view>
					</uni-col>

					<uni-col :span="8">
						<span class="demo-uni-col dark">{{item.name}}</span>
					</uni-col>

					<uni-col :span="8">
						<span class="demo-uni-col light">{{item.desc}}</span>
					</uni-col>
				</uni-row>



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
				src: 'https://cdnwww.simapps.com/upload/image/20230507/3c44170f-2098-4199-afd0-c5e5f176b362.png'
			}

		},

		onReady() {
		
		},

		methods: {
			imageError: function(e) {
				console.error('image发生error事件，携带值为' + e.detail.errMsg)
			},

			getLocationList() {
				console.log('get location list -->')
				uni.request({
					url: 'https://golang-5aqo-57309-9-1301228508.sh.run.tcloudbase.com/admin/location/list',
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
			goto(url) {
				console.log(url)
				uni.navigateTo({
					url: url
				})
			}

		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
	}



	.text-area {
		display: flex;
		justify-content: flex-start;
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
</style>