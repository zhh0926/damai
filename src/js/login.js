// 登录切换
$('.login-poss').click(function(){
    $(this).addClass("active"),
    $(this).siblings().removeClass("active"),
    $('.poss-form').show(),
    $('.mess-form').hide(),
    $('.code-form').hide()
})
$('.login-mess').click(function(){
    $(this).addClass("active"),
    $(this).siblings().removeClass("active")
    $('.poss-form').hide(),
    $('.mess-form').show(),
    $('.code-form').hide()
})
$('.login-code').click(function(){
    $(this).addClass("active"),
    $(this).siblings().removeClass("active")
    $('.poss-form').hide(),
    $('.mess-form').hide(),
    $('.code-form').show()
})

$('.phone-input2').hover(function(){
    $(this).css({'border':'1px solid #ff1268'})
    $(this).siblings().css({'border':'1px solid #ff1268'})
},function(){
    $(this).css({'border':'1px solid #ccc'})
    $(this).siblings().css({'border':'1px solid #ccc'})
})




// 表单验证
$('.phone-input').blur(function(){
     // (请输入11位手机号)
     var reg = /^1([38]\d|5[0-35-9]|7[3678])\d{8}$/;
     var phone_value = $(".phone-input").val();
     if(reg.test(phone_value)){
         $('.phone-input').css({
             "borderColor":"blue"
         })
     }else{
         $('.phone-input').css({
             "borderColor":"red"
         })
         $('.phone-input').val('手机号格式不正确')
     }
})

$('.phone-input2').blur(function(){
    // (请输入11位手机号)
    var reg = /^1([38]\d|5[0-35-9]|7[3678])\d{8}$/;
    var phone_value2 = $(".phone-input2").val();
    if(reg.test(phone_value2)){
        $('.phone-input2').css({
            "borderColor":"blue"
        })
    }else{
        $('.phone-input2').css({
            "borderColor":"red"
        })
        $('.phone-input2').val('手机号格式不正确')
    }
})


$('.phone-input3').blur(function(){
    // (请输入6位验证码)
    var reg2=  /^[0-9]{6}$/;
    var phone_value3 = $(".phone-input3").val();
    if(reg2.test(phone_value3)){
        // console.log(1)
        $(".phone_value3").css({"borderColor":"blue"})
    }else{
        // console.log(2)
        $(".phone_value3").css({"borderColor":"red"})
        $('.phone-input3').val('请输入6位验证码')
    }
})



// 登录
$(".login-btn1").click(function(){
    // 获取用户的名字
    var phone_value = $(".phone-input").val();
    var pass_value = $(".pass-input").val();
    console.log(phone_value, pass_value)

    if(phone_value == '' || pass_value == ''){
        alert("手机号及密码不能为空")
    }else{
        $.ajax({
            url:"http://localhost/1925/damai/getuser.php", 
            data : {
                phone : phone_value,
                password : pass_value
          },
            dataType:'json',
            success:function(type){
                console.log(type)
            }
        })
            .then(function(res){
                console.log(res);
                if(res.type  === "success"){
                    //   $.cookie("usermsg",res.loginname_value)
                      alert("登录成功")
                      location.href = "./index.html";
                }
                if(res.type === "error"){
                      alert(res.error_msg)
                }
            
        })
    }
})
