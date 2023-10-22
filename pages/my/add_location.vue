<template>
	<view class="content">
		<!-- 地点信息 -->
		<uni-row class="location-row">
			<uni-col :span="6">
				<view>名字：</view>
			</uni-col>
			<uni-col :span="18">
				<input class="uni-input-border" style="" styplaceholder-style=" color:#aaaaaa" focus
					placeholder="地点名字,如:鼓楼" v-model="nameStr" />
			</uni-col>
		</uni-row>
		<uni-row class="location-row">
			<uni-col :span="6">
				<view>位置：</view>
			</uni-col>
			<uni-col :span="18">
				<textarea class="uni-textarea-border" placeholder-style="color:#aaaaaa"
					placeholder="详细地址,请尽量描述的详细一些,方便毽友找到.如:在钟楼和鼓楼之间,钟鼓楼文化广场.乘坐8号线地铁鼓楼大街或者什刹海站下车."
					v-model="positionStr"></textarea>
			</uni-col>
		</uni-row>
		<uni-row class="location-row">
			<uni-col :span="6">
				<view>描述：</view>
			</uni-col>
			<uni-col :span="18">
				<textarea class="uni-textarea-border" placeholder-style="color:#aaaaaa"
					placeholder="请简单描述一下大概情况,如踢毽时间,大概踢毽人数,注意问题等.如:鼓楼广场场地比较开阔,踢毽人数众多,高手云集.每天大概20人以上,上午8点以后都会有毽友再提,下午也会有."
					v-model="descStr"></textarea>
			</uni-col>
		</uni-row>
		<uni-row style="align:center">
			<button type="default" style="margin:50px" @click="onCommitClick()">提交</button>
		</uni-row>
		<!--
		<uni-row >
		<text >日志信息</text>
		</uni-row>
		-->
	</view>

</template>

<script>
	import common from '../../common/common.js';
	export default {
		data() {
			return {
				nameStr: '',
				positionStr: '',
				descStr: ''
			}
		},

		onLoad() {

			this.getCommitInfo();

		},
		methods: {

			onCommitClick() {
				console.log('onCommitClick--')
				var param = {
					name: this.nameStr,
					desc: this.descStr,
					locationDesc: this.positionStr
				};

				console.log(param)
				uni.request({
					url: 'https://golang-gcsj-64206-10-1301228508.sh.run.tcloudbase.com//v1/location/add',
					method: 'POST',
					data: param,
					header: {
						'content-type': 'application/json'
					},
					success(res) {
						//	if (res.statusCode == 200) {
						//		}

						console.log(res)

					},
					fail(err) {
						uni.showToast({
							icon: 'none',
							title: '网络异常,请稍后重试'
						});
					}
				})
			},

			getCommitInfo() {

				this.commitText =
					"<div style='display:none;margin:20px;text-align: center;color:#aaaaaa;font-size:12px'>您已经提交了<strong> " +
					this.posNum + " </strong>个地点</div>";
			}
		}
	}
</script>

<style>
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