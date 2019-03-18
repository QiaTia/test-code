<?php
header('Content-type: application/json; charset=UTF-8');
header("Access-Control-Allow-Origin: *");
include_once  '../sql.php';
date_default_timezone_set('PRC');
$time=date("Y-m-d H:i:s",time());

mysql_connect('127.0.0.1', 'root', 'root');
//echo mysql_real_escape_string('wefrwegfer\weferpvesbvp22323r""xwecgferger\\///');

if(isset($_REQUEST['book'])){
	$book = isset($_GET['book'])?$_GET['book']:'';
	$res = $conn->query("SELECT * FROM `dc_tia` WHERE `id` = '$book'");
	$articles = array();
	$t = 0;
	while($info = $res->fetch_assoc()){
      if(isset($_REQUEST['dc']))die($info['dc']);
	  array_push($articles,$info);
	  $t++;
	}
	$articles['time'] = $time;
	$articles['code'] = 200;
	$articles['count'] = $t;

	die(json_encode($articles));
}
if(isset($_REQUEST['add'])){
	$stmt = $conn->prepare("INSERT INTO `dc_list` (`i`, `b`, `u`, `dc`, `t`) VALUES (? ,? ,? ,? ,?);");
  
	$i= $_REQUEST['dc_i'];
	$b= $_REQUEST['dc_b'];
	$u= $_REQUEST['dc_u'];
	$dc= $_REQUEST['dc_dc'];
	$t= $_REQUEST['add'];
 //  	$sql = "INSERT INTO `dc_list` (`i`, `b`, `u`, `dc`, `t`) VALUES ('$i' ,'$b' ,'$u' ,'$dc' ,'$t');";
	// if(!$conn->query($sql)){
 //        die("失败，请重试！".$sql.$time);
 //    }else{
 //        die("I`m OK!".$time);
 //    }
  try{
  	$stmt->bind_param('issss', $i, $b, $u, $dc, $t);
  	$stmt->execute();
   }catch (PDOException $e) {
		die('失败，请重试 '.$time ."\n" .$e->getMessage());
	}
	echo 'I`m OK!'.$time;
  $stmt->close();
  $conn->close();
}

if(isset($_REQUEST['all_add'])){
  $t =json_encode($_REQUEST['all_add']);
  var_dump($t);
  print_r(json_decode($t));
}