<template>
	<view class="content">

		<!-- 地图 -->
		<map style="width: 100%; height: 300px;" :latitude="map_latitude" :longitude="map_longitude"
			:markers="map_covers">
		</map>

		<!-- 详情 -->
		<uni-collapse ref="collapse" v-model="value" @change="change">
			<uni-collapse-item title="介绍">
				<view class="content">
					<text class="text">-</text>
				</view>

				<uni-row class="demo-uni-row">
					<uni-col :span="24">
						<view class="image-content" style="font-size: 32;">
							{{pageParam.name}}
						</view>
					</uni-col>

					<uni-col :span="24">
						<view class="image-content">
							{{pageParam.desc}}
						</view>
					</uni-col>

				</uni-row>
			</uni-collapse-item>
		</uni-collapse>


		<uni-collapse ref="collapse" v-model="value" @change="change">
			<uni-collapse-item title="实景">
				<view class="content">
					<text class="text">-</text>
				</view>

				<view> </view>
			</uni-collapse-item>
		</uni-collapse>

		<uni-collapse ref="collapse" v-model="value" @change="change">
			<uni-collapse-item title="足迹">
				<view class="content">
					<text class="text">-</text>
				</view>

				<uni-row class="demo-uni-row">
					<uni-col :span="12">
						<button type="default" @click="goto('/pages/location/add')">谁来过这里</button>
					</uni-col>
					<uni-col :span="12">
						<button type="default" @click="goto('/pages/location/add')">打卡此地点</button>
					</uni-col>

					<uni-col :span="12">
						<button type="default" @click="goto('/pages/location/list')">返回</button>
					</uni-col>

				</uni-row>
			</uni-collapse-item>
		</uni-collapse>


	</view>

</template>

<script>
	//引入腾讯地图文件
	import QQMapWX from '../../common/qqmap-wx-jssdk.min.js';
	var qqmapsdk;

	export default {
		data() {
			return {
				value: ['0'],

				pageParam: {
					name: 'test',
					desc: "ttt"
				},
				title: 'location',
				array: [],
				src: 'https://cdnwww.simapps.com/upload/image/20230507/3c44170f-2098-4199-afd0-c5e5f176b362.png',


				map_id: 0, // 使用 marker点击事件 需要填写id
				map_title: 'map',
				map_latitude: 39.909,
				map_longitude: 116.39742,
				map_covers: [{
					latitude: 39.909,
					longitude: 116.39742,
					iconPath: '/static/location.png'
				}, {
					latitude: 39.90,
					longitude: 116.39,
					iconPath: '/static/location.png'
				}]
			}

		},

		onLoad(option) {
			console.log(option)
			if (Object.keys(option).length != 0) { //判断是否为空
				this.pageParam = JSON.parse(decodeURIComponent(option.param));
				console.log('hahahah--',this.pageParam)
			}

			qqmapsdk = new QQMapWX({
				key: 'LUSBZ-3ABWQ-HFH57-4SAJI-5GFFT-2LFYQ'
			});


		},
		onReady() {

		},

		methods: {
			change(e) {
				console.log(e);

				qqmapsdk.getDistrictByCityId({
					// 传入对应省份ID获得城市数据，传入城市ID获得区县数据,依次类推
					id: 371700, //对应接口getCityList返回数据的Id，如：北京是'110000'
					success: function(res) { //成功后的回调
						//console.log(res);
						//console.log('对应城市ID下的区县数据(以北京为例)：', res.result[0]);
					},
					fail: function(error) {
						console.error(error);
					},
					complete: function(res) {
						console.log(res);
					}
				});
			},

			imageError: function(e) {
				console.error('image发生error事件，携带值为' + e.detail.errMsg)
			},

			getLocationList() {
				console.log('get location list -->')
				uni.request({
					url: 'https://golang-gcsj-64206-10-1301228508.sh.run.tcloudbase.com/admin/location/list',
					method: 'POST',
					data: {
						text: 'uni.request'
					},
					header: {
						'custom-header': '' //自定义请求头信息
					},
					success: (res) => {
						console.log(res.data.data);
						this.array = res.data.data

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
			goto(url) {
				console.log(url)
				uni.redirectTo({
					url: url
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
		justify-content: flex-start;
	}

	.demo-uni-row {
		margin-bottom: 10px;

		display: block;

	}

	.uni-row {
		margin-bottom: 10px;
	}


	.content {
		display: flex;
		flex-direction: column;
		align-items: left;
		justify-content: left;
	}

	.location-row {
		justify-content: left;
		margin-top: 10px;
		margin-bottom: 10px;
		/* QQ、抖音小程序文档写有 :host，但实测不生效 */
		/* 百度小程序没有 :host，需要设置block */
		/* #ifdef MP-TOUTIAO || MP-QQ || MP-BAIDU */
		display: block;
		/* #endif */
		text-align: center;
	}

	.uni-input-border,
	.uni-textarea-border {
		width: 90%;
		font-size: 12px;
		color: #666;
		border: 1px #e5e5e5 solid;
		border-radius: 5px;
		box-sizing: border-box;
		padding: 0 10px;
		text-align: left;
	}

	.uni-input-border {
		height: 35px;

	}

	.pos {
		text-align: left;
	}

	.commit {
		margin: 50px;
		text-align: center;
	}
</style>