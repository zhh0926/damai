<?php
    header("Access-Control-Allow-Origin:*");
    header("Content-Type:text/html;charset=utf8;");
      $phone = @$_GET["phone"];
      $password = @$_GET["password"];
    
    $conn = mysql_connect("localhost" , "root" , "root");
    if(!$conn){
        die("数据错误" . $conn.mysql_error());
    }

    mysql_select_db("1925");
    $select_sql = "SELECT phone from study WHERE phone='$phone'";
    $res_select = mysql_query($select_sql);

    $has_same = false;
    while($row = mysql_fetch_assoc($res_select)){
        // echo json_encode($row);
        $has_same = true;
        break;
    }
    if($has_same){
        $json = json_encode(array("type" => "error" , "error_msg" => "手机号已被注册"));
        die($json);
    } else {
    // 3. 编写SQL语句;
    $insert_sql = "INSERT INTO study(
            PHONE,
            PASSWORD
    ) VALUES (
            '$phone',
            '$password'
    )";
    $json = json_encode(array("type" => "success"));
    $res = mysql_query($insert_sql);
    if(!$res){
        echo mysql_error($conn);
    }
    die($json);
    }

      // echo $insert_sql;

      echo "注册成功";

    //   setcookie("username",$user_phone);

    //   echo "<script>location.href='localhost:8080'</script>";
      mysql_close($conn);
?>