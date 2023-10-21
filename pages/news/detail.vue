<template>
	<view class="content">
		{{title}}

	</view>
	
	<view class="text-area">
		<text class="item" @click="openPage('/pages/news/list')">更多</text>
	</view>
	

	
</template>

<script>
	import common from '../../common/common.js';

	export default {
		data() {
			return {
				title: 'news',
				data:"",
				content: ""
				}
		},
		
		onLoad(option) {
			console.log(option)
			if (Object.keys(option).length != 0) { //判断是否为空
				this.pageParam = JSON.parse(decodeURIComponent(option.param));
				console.log('hahahah--',this.pageParam)
			}
		},
		
		methods: {
			openPage(url) {
				common.goto(url)
			}
		}
	 
	
}
</script>

<style>
	 
</style>