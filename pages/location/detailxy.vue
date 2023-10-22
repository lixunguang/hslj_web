<template>
	<view class="content">

		<!-- 详情 -->

		<view class="content">

			<text class="text">{{locationDetail.name}}</text>
			<text class="text">{{locationDetail.desc}}</text>
		</view>
	</view>

</template>

<script>
	export default {
		data() {
			return {
				value: ['0'],

				pageParam: 0,
				locationDetail: {},
				text: ""
			}

		},

		onLoad(option) {
			console.log(option)
			if (Object.keys(option).length != 0) { //判断是否为空
				this.pageParam = JSON.parse(decodeURIComponent(option.param));
			}

			this.getLocationList()
		},


		onReady() {

		},

		methods: {

			change(e) {
				console.log(e);

			},
			getLocationList() {
				console.log('getLocationdetail-->%d', this.pageParam)
				uni.request({
					url: 'https://golang-gcsj-64206-10-1301228508.sh.run.tcloudbase.com/v1/location',
					method: 'POST',
					data: {
						"id": this.pageParam
					},
					header: {
						'content-type': 'application/json'
					},
					success: (res) => {
						console.log('succ!');
						console.log(res.data.data);
						this.locationDetail = res.data.data

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