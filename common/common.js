const g_i = 123;

function g_func() {
	console.log('g_func')
};

//不带参数
function goto(url) {
	console.log(url)
	uni.navigateTo({
		url: url
	})
};

//带参数
function goto2(url, param) {
	console.log(url, param)
	var urlStr = url + '?param='
	urlStr = urlStr + encodeURIComponent(JSON.stringify(param))

	console.log(urlStr)
	uni.navigateTo({
		url: url + '?param=' + encodeURIComponent(JSON.stringify(param))
	})
}


/*
module.exports= {
	g_func,
	g_i
 
}
*/
export default {
	goto,
	goto2
}