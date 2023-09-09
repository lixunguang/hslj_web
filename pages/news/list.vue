<template>
	<view class="content">
		{{title}}
		
		<view class="image-list">
			<view class="image-item" v-for="(item,index) in newsList" :key="index">
				<uni-row class="demo-uni-row" @click="goto2('/pages/news/detail',item)">
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
						<view class="demo-uni-col ">{{item.title}}</view>
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
				title: '所有新闻',
				newsList: [],
				data:"",
				content: "",
				src:"https://www.ibe.cn/assets/banner-5-dac6a73e.jpg"
				}
		},
		
		onLoad() {
			this.getNewsList();
		},
		
		methods: {
			getNewsList() {
				console.log('get news list -->')
				uni.request({
					url: 'https://golang-gcsj-64206-10-1301228508.sh.run.tcloudbase.com/v1/news/all',
					method: 'POST',
					data: {
						
					},
					header: {
						'content-type': 'application/json'
					},
					success: (res) => {
						console.log(res.data.data);
						this.newsList = res.data.data
			
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
			openPage(url) {
				common.goto(url)
			},
			  imageError: function(e) {
			            console.error('image发生error事件，携带值为' + e.detail.errMsg)
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
	
	}


	.uni-row {
		margin-bottom: 10px;
	}

 

	.demo-uni-col {
		height: 36px;
		border-radius: 4px;
	}

	.dark_deep {
		background-color: #99a9bf;
	}




</style>