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
			if (!wx.cloud) {
				console.error("请使用2.2.3或者以上的基础库以使用云能力！")
			} else {
				console.warn("wx.cloud ok！")

				wx.cloud.init({
					env: 'prod-6gzkcfsld7f80f26',
					traceUser: true,
				})
			}

			this.getLocationList()
		},

		onReady() {

		},

		methods: {
			getLocationList() {

				console.log("call wx.cloud.callContainer...")

				// 确认已经在 onLaunch 中调用过 wx.cloud.init 初始化环境（任意环境均可，可以填空）
				wx.cloud.callContainer({
					config: {
						env: 'prod-6gzkcfsld7f80f26', // 微信云托管的环境ID 
					},
					path: '/v1/location/list', // 填入业务自定义路径和参数，根目录，就是 / 
					method: 'POST', // 按照自己的业务开发，选择对应的方法
					data: {
						"location_code": 110000
					},
					header: {
						'content-type': 'application/json',
						'X-WX-SERVICE': 'golang-gcsj', // xxx中填入服务名称（微信云托管 - 服务管理 - 服务列表 - 服务名称）
					},
					success: res => {
						console.log("kkk---")
						console.log(res)
						this.locationList = res.data.data
						console.log('---kkkend')
					},

				});

				console.log("call wx.cloud.callContainer end...")
			},
			openDetailPage(param) {
				common.goto2('/pages/location/detailxy', param);
			}
		}
	}
</script>

<style>

</style>