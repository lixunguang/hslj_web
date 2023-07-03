<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>

		<view class="text-area">
			<text class="title">热点信息</text>
		</view>

		<view class="text-area" v-for="item in hotNews">
			<text class="title">{{item.index}}</text>
			<text class="title" @click="openPage('/pages/resource/news')">{{item.name}}</text>
		</view>

		<view class="text-area">
			<text class="title">最近热门地点</text>
		</view>

		<view class="text-area" v-for="item in hotLocations">
			<text class="title">{{item.index}}</text>
			<text class="title" @click="openPage('/pages/location/detail')">{{item.name}}</text>
		</view>



	</view>
</template>

<script>
	import common from '../../common/common.js';

	export default {
		data() {
			return {
				title: 'main',
				hotNews: [{

						index: 1,
						name: "news111"
					},
					{
						index: 2,
						name: "news222"
					}
				],
				hotLocations: [{
						index: 1,
						name: "天坛"
					},
					{
						index: 2,
						name: "玉渊潭"
					},
					{
						index: 3,
						name: "鼓楼"
					},
					{
						index: 4,
						name: "东单公园"
					},

				]
			}
		},
		onLoad() {

		},
		methods: {
			openPage(url) {
				common.goto(url)
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
</style>