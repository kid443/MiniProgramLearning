// pages/image/image.js
Page({
  data: {
    imagePath : ""
  },
  handleChooseAlbum(){
    console.log("选择相册中的图片")
    //系统api，从相册中选择图片或者拍照
    wx.chooseImage({
      success: (res) => {
        console.log(res)
        const path = res.tempFilePaths[0]
        this.setData({
          imagePath: path
        })
      },
    })
  },

  handleImageLoad(){
    console.log("图片加载完成")
  }
})