<template>
	<view class="content">
		<!-- ，按地区查看-->

		<view class="item_list" v-for="(item,index) in locationList">
			<text class="item">{{index+1}}</text>
			<text class="item" @click="openDetailPage(item.id)"> {{item.name}} </text>
		</view>

	</view>

</template>

<script>
	import common from '../../common/common.js';

	export default {
		data() {
			return {
				locationList: []
			}

		},
		onLoad(option) {
			console.log(option)
		
			this.getLocationList()
		},

		onReady() {

		},

		methods: {
			getLocationList() {
				
				uni.request({
					url: 'https://golang-gcsj-64206-10-1301228508.sh.run.tcloudbase.com/v1/location/list',
					method: 'POST',
					data: {
						"location_code": 110000
					},
					header: {
						'content-type': 'application/json'
					},
					success: (res) => {
						console.log('getLocationList -->%i--%O', this.pageParam, res)
					
						this.locationList = res.data.data
					},
					fail: () => {
						uni.showToast({
							icon: 'none',
							title: '网络异常,请稍后重试'
						});
					}
				})
			},
			
			
			openDetailPage(param) {
				common.goto2('/pages/location/detailxy', param);
			}
		}
	}
</script>

<style>

</style>