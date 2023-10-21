<template>
	<view class="content">
		<!--
		<view>
			<div>美之瞬间</div>
			<div>美之路</div>
			<div>美之感悟</div>		
		</view>	
		-->

		<view class="title">常见的踢毽动作</view>

		<uni-grid :column="3" :square="true" :showBorder="false" :highlight="true">
			<uni-grid-item v-for="(item, index) in actionList" :index="index" :key="index">
				<view class="grid-item-box">
					<text class="text" @click="openPageParam('/pages/resource/detail',item.id)">{{index+1}}
						{{ item.title }}</text>
				</view>
			</uni-grid-item>
		</uni-grid>

	</view>

</template>

<script>
	import common from '../../common/common.js';

	export default {
		data() {
			return {
				title: '美',
				avatarList: [{
					url: 'https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png'
				}, {
					url: 'https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png'
				}, {
					url: 'https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png'
				}],

				actionList: [],
				text: ''
			}
		},
		onLoad() {
			this.getActionList();
		},
		methods: {
			openPageParam(url, param) {
				common.goto2(url, param)
			},
			getActionList() {
				console.log('get action list -->')
				uni.request({
					url: 'https://golang-gcsj-64206-10-1301228508.sh.run.tcloudbase.com/v1/action/all',
					method: 'POST',
					data: {

					},
					header: {
						'content-type': 'application/json'
					},
					success: (res) => {
						console.log(res.data.data);
						this.actionList = res.data.data;
						this.text = 'request success';
					},
					fail: () => {
						uni.showToast({
							icon: 'none',
							title: '网络异常,请稍后重试'
						});
					}
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
		margin-top: 100rpx;
		margin-bottom: 50rpx;
		font-size: 36rpx;
		color: #8f8f94;
	}

	.grid-item-box {
		display: flex;
		justify-content: center;
	}

	.chat-custom-right {
		flex: 1;
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: column;
		justify-content: space-between;
		align-items: flex-end;
	}

	.chat-custom-text {
		font-size: 12px;
		color: #999;
	}
</style>