<template>
	<view class="content">
		{{title}}

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