$(".input-search").focus(function(){
    $(this).css({
        'border':'1px solid #FF1268'
    });
  })





  // 列表渲染
getList();
var str='';
function getList(){
  // https://search.damai.cn/searchajax.html?keyword=&cty=&ctl=%E6%BC%94%E5%94%B1%E4%BC%9A&sctl=&tsg=0&st=&et=&order=1&pageSize=30&currPage=1&tn=
  $.ajax({
    url:'/damai',
    dataType: 'json',
    data:{
        keyword:'',
        cty: '',
        ctl: '演唱会',
        sctl: '',
        tsg: 0,
        st: '',
        et: '',
        order: 1,
        pageSize: 30,
        currPage: 1,
        tn: ''
    },
    success:function(res){
        console.log(res)
      bindHtml(res)
    }
  })
}
// 渲染
function bindHtml(_list){
  console.log(_list.pageData.resultData)

 
    // $(".city-list").html(str1);
}