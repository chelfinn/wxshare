//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    img: '/images/toshare.png',
		
  },
	onLoad: function (){
		console.log('load');
	},
  onShareAppMessage: function (){
		var that = this;
		return {
			title: '这是一个邀请好友的分享',
			path: '/pages/share/index',
			imageUrl: that.data.img,
			success: (res)=>{
				console.log('邀请好友成功');
			}
		}
	}
})
