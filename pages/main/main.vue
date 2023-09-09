<template>
	<view class="content">

		<!-- ，轮播 正在发生的事件 todo:以后增加
		<view class="section">
			<swiper class="swiper" display-multiple-items="1" circular :autoplay="true" :interval="3000"
				:indicator-dots="true">

				<swiper-item v-for="(item,index) in bannerNewsList" @click="openPage('/pages/news/detail')">
					<view style="display: flex;flex-direction: column;">
						<view style="text-align:center;">{{item.title}}</view>
						<image class="image-css" :src="item.picture_url"></image>
					</view>
				</swiper-item>

			</swiper>
		</view>
-->

		<!-- ，美，励志，幽默 诗词-->
		<view class="section">
			<uni-row>
				<uni-col :span="12">
					<text class="title" @click="openPage('/pages/today/detail')">今日</text>
				</uni-col>

			</uni-row>
			<view class="item_list">
				<text class="item" @click="openPage('/pages/location/detail')">{{todayShort}}</text>
			</view>
		</view>


		<!-- ，新闻 正在发生的事件-->
		<view class="section">
			<uni-row>
				<uni-col :span="12">
					<view class="title">热点信息</view>
				</uni-col>
				<!--- todo:以后增加 >
				<uni-col :span="12">
					<view class="more">更多</view>
				</uni-col>
				<-->
			</uni-row>

			<uni-row class="demo-uni-row" v-for="(item,index) in latestNewsList" @click="openPage('/pages/news/detail')"
				style="width:100%;">
				<uni-col class="item" :span="1">{{index+1}}</uni-col>
				<uni-col class="item" :span="10">{{item.title}}</uni-col>
				<uni-col class="item" :span="13">{{item.date}}</uni-col>
			</uni-row>
		</view>



		<!-- ，正在进行-->
		<view class="section">
			<uni-row>
				<uni-col :span="12">
					<text class="title" @click="openPage('/pages/today/detail')">正在进行</text>
				</uni-col>
				<!--- todo:以后增加 >
			<uni-col :span="12">
				<view class="more">更多</view>
			</uni-col>
			<-->
			</uni-row>
		</view>

		<!-- ，热门地点-->
		<view class="section">
			<uni-row>
				<uni-col :span="12">
					<text class="title" @click="openPage('/pages/today/detail')">热门地点</text>
				</uni-col>
				<!--- todo:以后增加 >
			<uni-col :span="12">
				<view class="more">更多</view>
			</uni-col>
			<-->
			</uni-row>

			<view class="item_list" v-for="(item,index) in hotLocationList">
				<text class="item">{{index+1}}</text>
				<text class="item" @click="openPageParam('/pages/location/detail',item.id)"> {{item.name}} </text>
			</view>
		</view>


<view @click="getLocationActive()">aaaaaclickme</view>

<view @click="getTodayShort()">blickme</view>

	</view>
</template>

<script>
	import common from '../../common/common.js';

	export default {
		data() {
			return {
				title: 'main',
				latestNewsList: [],
				bannerNewsList: [],
				hotLocationList: [],
				activeLocationList: [],
				
				todayShort: "",

				picsrc: "https://2023.ibe.cn/wp-content/uploads/2023/08/2023082201392746-1024x682.png",
				background: ['color1', 'color2', 'color3'],
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500
			}
		},
		onLoad() {
			this.getBannerNewsList();
			this.getNewsLatest();
			this.getLocationHot();
			this.getTodayShort();
			this.getLocationActive();
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
			getBannerNewsList() {
				console.log('getBannerNewsList -->')
				uni.request({
					url: 'https://golang-gcsj-64206-10-1301228508.sh.run.tcloudbase.com/v1/news/banner',
					method: 'POST',
					data: {

					},
					header: {
						'content-type': 'application/json'
					},
					success: (res) => {
						console.log(res.data.data);
						this.bannerNewsList = res.data.data


					},
					fail: () => {
						uni.showToast({
							icon: 'none',
							title: '网络异常,请稍后重试'
						});
					}
				})
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


					},
					fail: () => {
						uni.showToast({
							icon: 'none',
							title: '网络异常,请稍后重试'
						});
					}
				})
			},
			getLocationActive() {
				console.log('getLocationActive -->')
				uni.request({
					url: 'https://golang-gcsj-64206-10-1301228508.sh.run.tcloudbase.com/v1/location/active',
					method: 'POST',
					data: {
 "location_code": 140000
					},
					header: {
						'content-type': 'application/json'
					},
					success: (res) => {
						console.log("7777777777777777777");
						console.log(res);
						this.activeLocationList = res.data.data


					},
					fail: () => {
						uni.showToast({
							icon: 'none',
							title: '网络异常,请稍后重试'
						});
					}
				})
			},
			getTodayShort() {
				console.log('getTodayShort -->')
				uni.request({
					url: 'https://golang-gcsj-64206-10-1301228508.sh.run.tcloudbase.com/v1/today/short',
					method: 'POST',
					data: {

					},
					header: {
						'content-type': 'application/json'
					},
					success: (res) => {
						console.log(res.data.data.desc);
						this.todayShort = res.data.data.desc
					},
					fail: () => {
						uni.showToast({
							icon: 'none',
							title: '网络异常,请稍后重试'
						});
					}
				})
			},
			changeIndicatorDots(e) {
				this.indicatorDots = !this.indicatorDots
			},
			changeAutoplay(e) {
				this.autoplay = !this.autoplay
			},
			intervalChange(e) {
				this.interval = e.target.value
			},
			durationChange(e) {
				this.duration = e.target.value
			}

		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: flex-start;
		width: 100%;
	}


	.section {
		margin: 10px 10px 10px 10px;
		width: 100%;

	}

	.title {
		font-size: 36rpx;
		color: #8f8f55;
		display: flex;
		justify-content: flex-start;
	}

	.more {
		font-size: 24rpx;
		color: #8f8f94;
		display: flex;
		justify-content: flex-end;
		padding-right: 20px;
	}

	.item_list {
		display: flex;
		justify-content: center;
	}

	.item {
		font-size: 24rpx;
		color: #8f8f94;

	}

	.swiper {
		margin: 0px -30px 10px -10px;
	}

	.swiper-list {
		margin-top: 40rpx;
		margin-bottom: 0;
	}

	.image-css {
		width: 100%;
		height: 200px;
		object-fit: contain;
	}
</style>