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
        $('.phone-input').val('手机号格式错误')
    }
})


$(".password-input").blur(function(){
    // 6-20位登录密码，必须为数字和字母混合
    var reg1=  /^[0-9a-zA-Z]{6,20}$/;
    var password_value = $(".password-input").val();
    if(reg1.test(password_value)){
        // console.log(1)
        $(".password-input").css({"borderColor":"blue"})
    }else{
        // console.log(2)
        $(".password-input").css({"borderColor":"red"})
        $('.password-input').val('密码格式错误')
    }
})

$(".password-input2").blur(function(){
    // 与第一个密码相同
    var password_value = $(".password-input").val()
    var password_value2 = $(".password-input2").val()
    if(password_value2 === password_value){
        // console.log(1)
        $(".password-input2").css({"borderColor":"blue"})
    }else{
        // console.log(2)
        $(".password-input2").css({"borderColor":"red"})
        $('.password-input2').val('密码与第一次输入不一致')
    }
})



// 注册
$(".next-btn").click(function(){
    // console.log("1")
    // 获取用户注册信息
    var phone_value=$(".phone-input").val();
    var password_value=$(".password-input").val();
    // 用户名及密码不能为空
    if(phone_value == '' || password_value == ''){
        alert("手机号及密码不能为空")
    }else{
        console.log(phone_value,password_value)
        var datas = {
            phone : phone_value,
            password : password_value
        }
        $.ajax("http://localhost/1925/damai/registeruser.php",{
            type : "GET",
            data:datas, 
            dataType:'json',
            status: {
                "404": function () {
                    alert("找不到页面")
                }
            },
           success:function(res){
            //    console.log("1")
               if(res.type==="success"){
                   alert("注册成功")
                location.href = "./index.html";
               }
               if(res.type==="error"){
                   alert("用户名重名")
               }
            }
        })
    }
})

