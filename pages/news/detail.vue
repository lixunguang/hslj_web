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
	 
</style>