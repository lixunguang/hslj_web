<template>
	<view class="content">
		<image class="logo" width=100 height=50 src="/static/logo.png"></image>

		<view class="text-area">
			<!-- ，美，励志，幽默 诗词-->
			<text class="title" @click="openPage('/pages/today/detail')">每日一句</text>
		</view>

		<view class="text-area">
			<text class="title">热点信息</text>
		</view>

		<view class="text-area" v-for="(item,index) in latestNewsList">
			<text class="title">{{index+1}}</text>
			<text class="title" @click="openPage('/pages/news/detail')">{{item.title}}</text>
			<text class="title" @click="openPage('/pages/news/detail')">{{item.date}}</text>
		</view>
		<view class="text-area">
			<text class="title" @click="openPage('/pages/news/list')">更多</text>
		</view>

		<view class="text-area">
			<text class="title">推荐地点</text>
		</view>

		<view class="text-area" v-for="(item,index) in hotLocationList">
			<text class="title">{{index+1}}</text>
			<text class="title" @click="openPageParam('/pages/location/detail',item.id)">{{item.name}}</text>
		</view>

		<uni-row class="demo-uni-row">
			<uni-col :span="24">
				<view class="demo-uni-col">已开通区域</view>
			</uni-col>
		</uni-row>

		<uni-row class="demo-uni-row">
			<uni-col :span="8">
				<text class="title" @click="openPageParam('/pages/location/area',110000)">北京</text>
			</uni-col>
			<uni-col :span="8">
				<text class="title" @click="openPageParam('/pages/location/list',370000)">山东</text>
			</uni-col>
			<uni-col :span="8">
				<text class="title" @click="openPageParam('/pages/location/list',140000)">山西</text>
			</uni-col>
		</uni-row>



	</view>
</template>

<script>
	import common from '../../common/common.js';

	export default {
		data() {
			return {
				title: 'main',
				latestNewsList: [],
				hotLocationList: []
			}
		},
		onLoad() {
			this.getNewsLatest();
			this.getLocationHot();
		},
		methods: {
			openPage(url) {
				common.goto(url)
			},
			openPageParam(url, param) {
				common.goto2(url, param)
			},
			switchTabPage(url) {
				common.switchTabPage(url)
			},
			getNewsLatest() {
				console.log('getNewsLatest -->')
				uni.request({
					url: 'https://golang-gcsj-64206-10-1301228508.sh.run.tcloudbase.com/v1/news/latest',
					method: 'POST',
					data: {

					},
					header: {
						'content-type': 'application/json'
					},
					success: (res) => {
						console.log(res.data.data);
						this.latestNewsList = res.data.data

						//this.text = 'request success';
					},
					fail: () => {
						uni.showToast({
							icon: 'none',
							title: '网络异常,请稍后重试'
						});
					}
				})
			},
			getLocationHot() {
				console.log('getLocationHot -->')
				uni.request({
					url: 'https://golang-gcsj-64206-10-1301228508.sh.run.tcloudbase.com/v1/location/hot',
					method: 'POST',
					data: {

					},
					header: {
						'content-type': 'application/json'
					},
					success: (res) => {
						console.log(res.data.data);
						this.hotLocationList = res.data.data

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
		height: 100rpx;
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
</style>