<template>
	<view class="content">
		{{actionDetail.title}}
		
	</view>

	<view class="text-area">
		{{actionDetail.content}}
	</view>



</template>

<script>
	import common from '../../common/common.js';

	export default {
		data() {
			return {
				title: 'news',
				data: "",
				content: "",
				actionDetail: {},
				pageParam:''
			}
		},

		onLoad(option) {
			console.log(option)
			if (Object.keys(option).length != 0) { //判断是否为空
				this.pageParam = JSON.parse(decodeURIComponent(option.param));
				console.log('xxx --%d',this.pageParam)
				 
				this.getActionDetail(this.pageParam)
			}
		},

		methods: {
			openPage(url) {
				common.goto(url)
			},
			getActionDetail(param) {
				console.log('get action list -->%d',param)
			 
				uni.request({
					url: 'https://golang-gcsj-64206-10-1301228508.sh.run.tcloudbase.com/v1/action',
					method: 'POST',
					data: {					
						id: param
					},
					header: {
						'content-type': 'application/json'
					},
					success: (res) => {
						console.log(res.data.data);
						this.actionDetail = res.data.data;
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

</style>