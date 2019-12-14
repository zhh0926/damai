$(".close-ad").click(function(){
    $(".header-ad").hide()
})
$(".add-chinese").hover(function(){
    $(".city-list").show()
},function(){
    $(".city-list").hide()
})


// 轮播图
var mySwiper1 = new Swiper ('#container1', {
    // 开启自动轮播
    autoplay:true,
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    },
    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.btn-next1',
      prevEl: '.btn-prev1',
    },
    loop: true
  })        