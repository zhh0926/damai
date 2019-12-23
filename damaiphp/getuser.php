
<?php
  header("Access-Control-Allow-Origin:*");
  header("Content-Type:text/html;charset=utf8;");

      # 获取数据;
      $phone = @$_GET["phone"];
      $password = @$_GET["password"];

      # 链接数据库 ;
      $conn = mysql_connect("localhost","root","root");

      # 选择数据库 ;
      
      mysql_select_db("1925");

      # 编写sql语句;

      $sql = "SELECT * FROM `study` WHERE `phone`='$phone' AND `password`='$password'";

      # 查询数据库 ; 

      $res = mysql_query($sql);

      # 关闭数据库 

      mysql_close($conn);

      # 查看结果是否匹配;
      $has_user = false;
      while($row = mysql_fetch_assoc($res)){
            $has_user = true;
            if($row["password"] == $password){
                  // 如果进入这个逻辑则表示,登陆成功;
                  $json = json_encode(array("type" => "success"));
                  // { "type" : "success"}
                  die($json);
            }
      }     
      # 返回结果 ( JSON ) 1. 用户名不存在 2. 用户名和密码不匹配;
      if($has_user){
            $json = json_encode(array("type" => "error" , "error_msg" => "手机号和密码不匹配"));
            // { "type" : "success"}
            die($json);
      }else{
            $json = json_encode(array("type" => "error" , "error_msg" => "手机号未注册"));
            // { "type" : "success"}
            die($json);
      }
      
?>



