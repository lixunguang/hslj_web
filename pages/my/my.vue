<template>
	<view class="content">

		<button class="login-btn" type="primary" @click="getUserInfo">
			微信用户一键登录
		</button>

		<button open-type="getPhoneNumber" @getphonenumber="getPhoneNumber" plain="true">
			获取手机号
		</button>

	</view>
</template>

<script>
	import WXBizDataCrypt from "../../common/WXBizDataCrypt.js";

	export default {
		data() {
			return {
				code: '',
				phone_encryptedData: '',
				phone: '',
				phone_iv: '',
				session_key: '',
			}
		},
		onLoad() {

		},
		methods: {
			goto(url) {


				console.log(url)
				uni.navigateTo({
					url: url
				})
			},
			getUserInfo() {
				uni.showLoading({
					title: '加载中',
				})

				uni.getUserInfo({
					provider: 'weixin',
					success: (res) => {
						console.log('getUserInfo---', res);
						if (res.errMsg == 'getUserInfo:ok') {
							console.log('code:', res.code)
							this.code = res.code
						}
					},
				});

				uni.login({
					provider: 'weixin',
					success: (res) => {
						console.log('login----', res);
						if (res.errMsg == 'login:ok') {
							console.log('code:', res.code)

							uni.request({
								url: 'https://api.weixin.qq.com/sns/jscode2session?' +
									'appid=wxd7bd4114483396c3&secret=e969ffd21e20f91570339f6c81ad008d&js_code=' +
									res.code +
									'&grant_type=authorization_code',
								data: {
									code: this.code,
								},
							}).then((res) => {
								console.log('data:', res)
								console.log('openid:', res.data.openid)
								console.log('key', res.data.session_key)
								this.session_key = res.data.session_key
							})

						}
					},
					fail: () => {

					},
					complete: () => {
						uni.hideLoading();
					},

				});


			},

			getPhoneNumber(res) {
				//var WXBizDataCrypt = require('../../common/WXBizDataCrypt')


				if (res.detail.errMsg == "getPhoneNumber:fail user deny") { //用户决绝授权  
					//拒绝授权后弹出一些提示  
				} else {
					//允许授权  
					console.log(res.detail.encryptedData)
					res.detail.encryptedData //加密的用户信息  
					res.detail.iv //加密算法的初始向量  时要用到  
				}




				this.phone_encryptedData = res.detail.encryptedData //用于解密
				this.phone_iv = res.detail.iv // 用于解密 

				console.log(res, "获取手机号需要的参数");

				let pc = new WXBizDataCrypt('wxd7bd4114483396c3', this.session_key);
				let data = pc.decryptData(this.phone_encryptedData, this.phone_iv);

				console.log(data);

				if (data.phoneNumber != '') {
					this.phone = data.phoneNumber
				}
			},

		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>