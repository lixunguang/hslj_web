<template>
	<view class="content">

		<uni-row class="add_location">
			<uni-col :span="24">
				<button type="default" @click="openAddPage()">增加新地点</button>
			</uni-col>
		</uni-row>

		<view class="image-list">
			<view class="image-item" v-for="(item,index) in locationList" :key="index">
				<uni-row class="demo-uni-row" @click="openDetailPage(item)">
					<uni-col :span="1">
						<view class="demo-uni-col " @click="">{{index+1}}</view>
					</uni-col>
					<uni-col :span="4">
						<view class="image-content">
							<image style="height: 50px;width: 50px; background-color: #eeeeee;" :src="src"
								@error="imageError"></image>
						</view>
					</uni-col>

					<uni-col :span="8">
						<view class="demo-uni-col ">{{item.name}}</view>
					</uni-col>

					<uni-col :span="11">
						<view class="demo-uni-col ">{{item.desc}}</view>
					</uni-col>
				</uni-row>
			</view>
		</view>


	</view>

</template>

<script>
	import common from '../../common/common.js';
	export default {
		data() {
			return {
				title: 'location',
				locationList: [],
				src: 'https://cdnwww.simapps.com/upload/image/20230507/3c44170f-2098-4199-afd0-c5e5f176b362.png'
			}

		},

		onReady() {
			console.log('11')
			this.getLocationList()
		},

		methods: {
 
			imageError: function(e) {
				console.error('image发生error事件，携带值为' + e.detail.errMsg)
			},
			rowclick(item){
				console.log('onClickxx---'+item.name+item.desc);
				 
				
			},
			onClick(e){
				console.log('onClick---'+e);
			},
			getLocationList() {
				console.log('get location list -->')
				uni.request({
					url: 'https://golang-5aqo-57309-9-1301228508.sh.run.tcloudbase.com/v1/location/get',
					method: 'POST',
					data: {
						"location_code": 34
					},
					header: {
						'content-type': 'application/json'
					},
					success: (res) => {
						console.log(res.data.data);
						this.locationList = res.data.data

						this.text = 'request success';
					},
					fail: () => {
						uni.showToast({
							icon: 'none',
							title: '网络异常,请稍后重试'
						});
					}
				})
			},
			openDetailPage(item){
				common.goto2('/pages/location/detail',item);
			},
			openAddPage(){
				common.goto('/pages/location/add');
			}
			


		}
	}
</script>

<style>
	.add_location {
		position: sticky;
		width: 100%;
		top: 40px;
		z-index: 3;
	}

	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
	}



	.text-area {
		display: flex;
		justify-content: flex-start;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}



	.demo-uni-row {
		margin-bottom: 10px;
		/* QQ、抖音小程序文档写有 :host，但实测不生效 */
		/* 百度小程序没有 :host，需要设置block */
		/* #ifdef MP-TOUTIAO || MP-QQ || MP-BAIDU */
		display: block;
		/* #endif */
	}

	/* 支付宝小程序没有 demo-uni-row 层级 */
	/* 微信小程序使用了虚拟化节点，没有 demo-uni-row 层级 */
	/* #ifdef MP-ALIPAY || MP-WEIXIN */
	.uni-row {
		margin-bottom: 10px;
	}

	/* #endif */

	.demo-uni-col {
		height: 36px;
		border-radius: 4px;
	}

	.dark_deep {
		background-color: #99a9bf;
	}




</style>