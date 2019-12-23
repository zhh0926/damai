$(".close-ad").click(function(){
    $(".header-ad").hide()
})
$(".add-chinese").hover(function(){
    $(".city-list").show()
},function(){
    $(".city-list").hide()
})


$(".input-search").focus(function(){
    $(this).css({
        'border':'1px solid #FF1268'
    });
  })




// 城市列表渲染
getCity();
var str1='';
var hotp='';
var allp='';
function getCity(){
  // https://api-gw.damai.cn/cityList.html?_ksTS=1576461143898_66&callback=jsonp67
  $.ajax({
    url:'https://api-gw.damai.cn/cityList.html',
    dataType: 'jsonp',
    data:{
      _ksTS:'1576462794393_66'
    },
    success:function(res1){
      bindHtml1(res1)
    }
  })
}
// 渲染
function bindHtml1(_list1){
  // console.log(_list1.hotCities)
  // console.log(_list1.allCities)

  for(var i=0;i<_list1.hotCities.length;i++){
    _list1.hotCities[i]= _list1.hotCities[i].replace('"','')
    hotp+=`<span>${_list1.hotCities[i]}</span>`;
  }
  // console.log(hotp)
  for(var i=0;i<_list1.allCities.length;i++){
    _list1.allCities[i]= _list1.allCities[i].replace('"','')
    allp+=`<span>${_list1.allCities[i]}</span>`;
  }
  // console.log(allp)

     str1+=`
    <div class="triangle"></div>
    <div class="nowcity"><span>当前城市:</span>&nbsp;&nbsp;<span>全国</span></div>
    <div><span>热门城市:</span>&nbsp;&nbsp;${hotp}</div>
    <div><span>其他城市:</span>&nbsp;&nbsp;${allp}</div>
    `
    // console.log(str1)
    $(".city-list").html(str1);
}





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



  $(".category>li").hover(function(){
    $(this).children().children().next().css({'color':'#FF1268'})
},function(){
  $(this).children().children().css({'color':'#111'})
})






// 渲染大列表1
  // https://api-gw.damai.cn//search.html?cat=1&destCity=%E5%85%A8%E5%9B%BD&_ksTS=1576461143906_101&callback=jsonp102
  
  getList1();
  var str2='';
  function getList1(){
  $.ajax({
    url:'https://api-gw.damai.cn//search.html?cat=1&destCity=%E5%85%A8%E5%9B%BD&_ksTS=1576461143906_101&callback=jsonp102',
    dataType: 'jsonp',
    jsonpCallback: 'jsonp102',
    jsonp: 'bindList1',
    success:function(res2){
      bindList1(res2)
    }
  })
}
// 渲染
function bindList1(_list2){
//   console.log(_list2)

  str2+=`
  <a href="#" class="ljr">
  <img src="${_list2.data[0].verticalPic}" alt="">
  <div class="box1-left">
    <p class="love-title">${_list2.data[0].name}</p>
    <p class="price1">¥${_list2.data[0].formattedPriceStr.substring(0,3)}<span>起</span></p>
  </div>
      </a>
      <div class="box1-right">

          <div class="small-box1">
              <a href="#">
                  <div class="sitem1-img">
                      <img src="${_list2.data[1].verticalPic}">
                  </div>
                  <div class="sitem1-title">
                      <div class="year">${_list2.data[1].name}</div>
                      <div class="look-table">${_list2.data[1].venueName}</div>
                      <div class="time1">${_list2.data[1].showTime}</div>
                      <div class="price2">¥${_list2.data[1].formattedPriceStr.substring(0,3)}<span>起</span></div>
                  </div>
          </a>
          </div>



          <div class="small-box1">
          <a href="#">
              <div class="sitem1-img">
                  <img src="${_list2.data[2].verticalPic}">
              </div>
              <div class="sitem1-title">
                  <div class="year">${_list2.data[2].name}</div>
                  <div class="look-table">${_list2.data[2].venueName}</div>
                  <div class="time1">${_list2.data[2].showTime}</div>
                  <div class="price2">¥${_list2.data[2].formattedPriceStr.substring(0,3)}<span>起</span></div>
              </div>
      </a>
      </div>




      <div class="small-box1">
      <a href="#">
          <div class="sitem1-img">
              <img src="${_list2.data[3].verticalPic}">
          </div>
          <div class="sitem1-title">
              <div class="year">${_list2.data[3].name}</div>
              <div class="look-table">${_list2.data[3].venueName}</div>
              <div class="time1">${_list2.data[3].showTime}</div>
              <div class="price2">¥${_list2.data[3].formattedPriceStr.substring(0,3)}<span>起</span></div>
          </div>
  </a>
  </div>




  <div class="small-box1">
  <a href="#">
      <div class="sitem1-img">
          <img src="${_list2.data[4].verticalPic}">
      </div>
      <div class="sitem1-title">
          <div class="year">${_list2.data[4].name}</div>
          <div class="look-table">${_list2.data[4].venueName}</div>
          <div class="time1">${_list2.data[4].showTime}</div>
          <div class="price2">¥${_list2.data[4].formattedPriceStr.substring(0,3)}<span>起</span></div>
      </div>
</a>
</div>




<div class="small-box1">
<a href="#">
    <div class="sitem1-img">
        <img src="${_list2.data[5].verticalPic}">
    </div>
    <div class="sitem1-title">
        <div class="year">${_list2.data[5].name}</div>
        <div class="look-table">${_list2.data[5].venueName}</div>
        <div class="time1">${_list2.data[5].showTime}</div>
        <div class="price2">¥${_list2.data[5].formattedPriceStr.substring(0,3)}<span>起</span></div>
    </div>
</a>
</div>



<div class="small-box1">
<a href="#">
    <div class="sitem1-img">
        <img src="${_list2.data[6].verticalPic}">
    </div>
    <div class="sitem1-title">
        <div class="year">${_list2.data[6].name}</div>
        <div class="look-table">${_list2.data[6].venueName}</div>
        <div class="time1">${_list2.data[6].showTime}</div>
        <div class="price2">¥${_list2.data[6].formattedPriceStr.substring(0,3)}<span>起</span></div>
    </div>
</a>
</div>

      </div>

  `
  $(".big-box1").html(str2);

}





// 渲染大列表2
  // https://api-gw.damai.cn//search.html?cat=3&destCity=%E5%85%A8%E5%9B%BD&_ksTS=1576461143908_115&callback=jsonp116
  
  getList2();
  var str3='';
  function getList2(){
  $.ajax({
    url:'https://api-gw.damai.cn//search.html?cat=3&destCity=%E5%85%A8%E5%9B%BD&_ksTS=1576461143908_115&callback=jsonp116',
    dataType: 'jsonp',
    jsonpCallback: 'jsonp116',
    jsonp: 'bindList2',
    success:function(res3){
      bindList2(res3)
    }
  })
}
// 渲染
function bindList2(_list3){
  console.log(_list3)


  str3+=`
  <a href="#" class="ljr">
  <img src="${_list3.data[0].verticalPic}" alt="">
  <div class="box1-left">
    <p class="love-title">${_list3.data[0].name}</p>
    <p class="price1">¥${_list3.data[0].formattedPriceStr.substring(0,3)}<span>起</span></p>
  </div>
      </a>
      <div class="box1-right">

          <div class="small-box1">
              <a href="#">
                  <div class="sitem1-img">
                      <img src="${_list3.data[1].verticalPic}">
                  </div>
                  <div class="sitem1-title">
                      <div class="year">${_list3.data[1].name}</div>
                      <div class="look-table">${_list3.data[1].venueName}</div>
                      <div class="time1">${_list3.data[1].showTime}</div>
                      <div class="price2">¥${_list3.data[1].formattedPriceStr.substring(0,3)}<span>起</span></div>
                  </div>
          </a>
          </div>



          <div class="small-box1">
          <a href="#">
              <div class="sitem1-img">
                  <img src="${_list3.data[2].verticalPic}">
              </div>
              <div class="sitem1-title">
                  <div class="year">${_list3.data[2].name}</div>
                  <div class="look-table">${_list3.data[2].venueName}</div>
                  <div class="time1">${_list3.data[2].showTime}</div>
                  <div class="price2">¥${_list3.data[2].formattedPriceStr.substring(0,3)}<span>起</span></div>
              </div>
      </a>
      </div>




      <div class="small-box1">
      <a href="#">
          <div class="sitem1-img">
              <img src="${_list3.data[3].verticalPic}">
          </div>
          <div class="sitem1-title">
              <div class="year">${_list3.data[3].name}</div>
              <div class="look-table">${_list3.data[3].venueName}</div>
              <div class="time1">${_list3.data[3].showTime}</div>
              <div class="price2">¥${_list3.data[3].formattedPriceStr.substring(0,3)}<span>起</span></div>
          </div>
  </a>
  </div>




  <div class="small-box1">
  <a href="#">
      <div class="sitem1-img">
          <img src="${_list3.data[4].verticalPic}">
      </div>
      <div class="sitem1-title">
          <div class="year">${_list3.data[4].name}</div>
          <div class="look-table">${_list3.data[4].venueName}</div>
          <div class="time1">${_list3.data[4].showTime}</div>
          <div class="price2">¥${_list3.data[4].formattedPriceStr.substring(0,3)}<span>起</span></div>
      </div>
</a>
</div>




<div class="small-box1">
<a href="#">
    <div class="sitem1-img">
        <img src="${_list3.data[5].verticalPic}">
    </div>
    <div class="sitem1-title">
        <div class="year">${_list3.data[5].name}</div>
        <div class="look-table">${_list3.data[5].venueName}</div>
        <div class="time1">${_list3.data[5].showTime}</div>
        <div class="price2">¥${_list3.data[5].formattedPriceStr.substring(0,3)}<span>起</span></div>
    </div>
</a>
</div>



<div class="small-box1">
<a href="#">
    <div class="sitem1-img">
        <img src="${_list3.data[6].verticalPic}">
    </div>
    <div class="sitem1-title">
        <div class="year">${_list3.data[6].name}</div>
        <div class="look-table">${_list3.data[6].venueName}</div>
        <div class="time1">${_list3.data[6].showTime}</div>
        <div class="price2">¥${_list3.data[6].formattedPriceStr.substring(0,3)}<span>起</span></div>
    </div>
</a>
</div>

      </div>

  `
  $(".big-box2").html(str3);

}





// 渲染大列表3
  // https://api-gw.damai.cn//search.html?cat=6&destCity=%E5%85%A8%E5%9B%BD&_ksTS=1576461143910_129&callback=jsonp130
  
  getList3();
  var str4='';
  function getList3(){
  $.ajax({
    url:'https://api-gw.damai.cn//search.html?cat=6&destCity=%E5%85%A8%E5%9B%BD&_ksTS=1576461143910_129&callback=jsonp130',
    dataType: 'jsonp',
    jsonpCallback: 'jsonp130',
    jsonp: 'bindList3',
    success:function(res4){
      bindList3(res4)
    }
  })
}
// 渲染
function bindList3(_list4){
  console.log(_list4)


  str4+=`
  <a href="#" class="ljr">
  <img src="${_list4.data[0].verticalPic}" alt="">
  <div class="box1-left">
    <p class="love-title">${_list4.data[0].name}</p>
    <p class="price1">¥${_list4.data[0].formattedPriceStr.substring(0,3)}<span>起</span></p>
  </div>
      </a>
      <div class="box1-right">

          <div class="small-box1">
              <a href="#">
                  <div class="sitem1-img">
                      <img src="${_list4.data[1].verticalPic}">
                  </div>
                  <div class="sitem1-title">
                      <div class="year">${_list4.data[1].name}</div>
                      <div class="look-table">${_list4.data[1].venueName}</div>
                      <div class="time1">${_list4.data[1].showTime}</div>
                      <div class="price2">¥${_list4.data[1].formattedPriceStr.substring(0,3)}<span>起</span></div>
                  </div>
          </a>
          </div>



          <div class="small-box1">
          <a href="#">
              <div class="sitem1-img">
                  <img src="${_list4.data[2].verticalPic}">
              </div>
              <div class="sitem1-title">
                  <div class="year">${_list4.data[2].name}</div>
                  <div class="look-table">${_list4.data[2].venueName}</div>
                  <div class="time1">${_list4.data[2].showTime}</div>
                  <div class="price2">¥${_list4.data[2].formattedPriceStr.substring(0,3)}<span>起</span></div>
              </div>
      </a>
      </div>




      <div class="small-box1">
      <a href="#">
          <div class="sitem1-img">
              <img src="${_list4.data[3].verticalPic}">
          </div>
          <div class="sitem1-title">
              <div class="year">${_list4.data[3].name}</div>
              <div class="look-table">${_list4.data[3].venueName}</div>
              <div class="time1">${_list4.data[3].showTime}</div>
              <div class="price2">¥${_list4.data[3].formattedPriceStr.substring(0,3)}<span>起</span></div>
          </div>
  </a>
  </div>




  <div class="small-box1">
  <a href="#">
      <div class="sitem1-img">
          <img src="${_list4.data[4].verticalPic}">
      </div>
      <div class="sitem1-title">
          <div class="year">${_list4.data[4].name}</div>
          <div class="look-table">${_list4.data[4].venueName}</div>
          <div class="time1">${_list4.data[4].showTime}</div>
          <div class="price2">¥${_list4.data[4].formattedPriceStr.substring(0,3)}<span>起</span></div>
      </div>
</a>
</div>




<div class="small-box1">
<a href="#">
    <div class="sitem1-img">
        <img src="${_list4.data[5].verticalPic}">
    </div>
    <div class="sitem1-title">
        <div class="year">${_list4.data[5].name}</div>
        <div class="look-table">${_list4.data[5].venueName}</div>
        <div class="time1">${_list4.data[5].showTime}</div>
        <div class="price2">¥${_list4.data[5].formattedPriceStr.substring(0,3)}<span>起</span></div>
    </div>
</a>
</div>



<div class="small-box1">
<a href="#">
    <div class="sitem1-img">
        <img src="${_list4.data[6].verticalPic}">
    </div>
    <div class="sitem1-title">
        <div class="year">${_list4.data[6].name}</div>
        <div class="look-table">${_list4.data[6].venueName}</div>
        <div class="time1">${_list4.data[6].showTime}</div>
        <div class="price2">¥${_list4.data[6].formattedPriceStr.substring(0,3)}<span>起</span></div>
    </div>
</a>
</div>

      </div>

  `
  $(".big-box3").html(str4);

}




// 渲染大列表4
  // https://api-gw.damai.cn//search.html?cat=100&destCity=%E5%85%A8%E5%9B%BD&_ksTS=1576461143913_143&callback=jsonp144
  
  getList4();
  var str5='';
  function getList4(){
  $.ajax({
    url:'https://api-gw.damai.cn//search.html?cat=100&destCity=%E5%85%A8%E5%9B%BD&_ksTS=1576461143913_143&callback=jsonp144',
    dataType: 'jsonp',
    jsonpCallback: 'jsonp144',
    jsonp: 'bindList4',
    success:function(res5){
      bindList4(res5)
    }
  })
}
// 渲染
function bindList4(_list5){
  console.log(_list5)


  str5+=`
  <a href="#" class="ljr">
  <img src="${_list5.data[0].verticalPic}" alt="">
  <div class="box1-left">
    <p class="love-title">${_list5.data[0].name}</p>
    <p class="price1">¥${_list5.data[0].formattedPriceStr.substring(0,3)}<span>起</span></p>
  </div>
      </a>
      <div class="box1-right">

          <div class="small-box1">
              <a href="#">
                  <div class="sitem1-img">
                      <img src="${_list5.data[1].verticalPic}">
                  </div>
                  <div class="sitem1-title">
                      <div class="year">${_list5.data[1].name}</div>
                      <div class="look-table">${_list5.data[1].venueName}</div>
                      <div class="time1">${_list5.data[1].showTime}</div>
                      <div class="price2">¥${_list5.data[1].formattedPriceStr.substring(0,3)}<span>起</span></div>
                  </div>
          </a>
          </div>



          <div class="small-box1">
          <a href="#">
              <div class="sitem1-img">
                  <img src="${_list5.data[2].verticalPic}">
              </div>
              <div class="sitem1-title">
                  <div class="year">${_list5.data[2].name}</div>
                  <div class="look-table">${_list5.data[2].venueName}</div>
                  <div class="time1">${_list5.data[2].showTime}</div>
                  <div class="price2">¥${_list5.data[2].formattedPriceStr.substring(0,3)}<span>起</span></div>
              </div>
      </a>
      </div>




      <div class="small-box1">
      <a href="#">
          <div class="sitem1-img">
              <img src="${_list5.data[3].verticalPic}">
          </div>
          <div class="sitem1-title">
              <div class="year">${_list5.data[3].name}</div>
              <div class="look-table">${_list5.data[3].venueName}</div>
              <div class="time1">${_list5.data[3].showTime}</div>
              <div class="price2">¥${_list5.data[3].formattedPriceStr.substring(0,3)}<span>起</span></div>
          </div>
  </a>
  </div>




  <div class="small-box1">
  <a href="#">
      <div class="sitem1-img">
          <img src="${_list5.data[4].verticalPic}">
      </div>
      <div class="sitem1-title">
          <div class="year">${_list5.data[4].name}</div>
          <div class="look-table">${_list5.data[4].venueName}</div>
          <div class="time1">${_list5.data[4].showTime}</div>
          <div class="price2">¥${_list5.data[4].formattedPriceStr.substring(0,3)}<span>起</span></div>
      </div>
</a>
</div>




<div class="small-box1">
<a href="#">
    <div class="sitem1-img">
        <img src="${_list5.data[5].verticalPic}">
    </div>
    <div class="sitem1-title">
        <div class="year">${_list5.data[5].name}</div>
        <div class="look-table">${_list5.data[5].venueName}</div>
        <div class="time1">${_list5.data[5].showTime}</div>
        <div class="price2">¥${_list5.data[5].formattedPriceStr.substring(0,3)}<span>起</span></div>
    </div>
</a>
</div>



<div class="small-box1">
<a href="#">
    <div class="sitem1-img">
        <img src="${_list5.data[6].verticalPic}">
    </div>
    <div class="sitem1-title">
        <div class="year">${_list5.data[6].name}</div>
        <div class="look-table">${_list5.data[6].venueName}</div>
        <div class="time1">${_list5.data[6].showTime}</div>
        <div class="price2">¥${_list5.data[6].formattedPriceStr.substring(0,3)}<span>起</span></div>
    </div>
</a>
</div>

      </div>

  `
  $(".big-box4").html(str5);

}



// 回到顶部
$(window).scroll(()=>{
    if($(window).scrollTop()>=300){
        $('.GoTop').fadeIn(200,'linear')
    }else{
        $('.GoTop').fadeOut(200,'linear')
    }
})
$('.GoTop').click(function(){
    $('html,body').animate({
        scrollTop:0
    },200)
})