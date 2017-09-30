<?php
date_default_timezone_set('UTC');
require_once __DIR__ . '/php-graph-sdk-5/src/Facebook/autoload.php';

$MET = $_SERVER['REQUEST_METHOD'];
/*$access_key = "EAAClDeQ8zncBAIza7WQEaw4dMr6r33THzJdQMcViFDqvCQbYmPWiGC9i6aZBt12pxajKxKZA2Tr0YKnuiG3U17LqghGvzkQfK7Jp9Pz9DWkQfxZCqzZBHZCJyMZAmhvyoYlWE3WI1Qdy8CWNoUUZAL3DHjdZCeIxEXsZD";*/

$access_key = "EAAClDeQ8zncBANOddB3YKnhHeOWu743fieCCx1DE6xedGHy8S3vR7rOUZBnsDSW281NJhbDcvxLXEx29RlUTwZAvtZAXAAnZB17QL9H49Lt6jEu9209VC2WAMnyNV0wQAtymRKSZByLZA6slUgNUWZAoPXhSw5kiX4ZD";

$fb_array='';

$fb = new Facebook\Facebook([
  'app_id' => '181479082348151',
  'app_secret' => 'b242fe46fc9b59d7bc455ff606459f25',
  'default_graph_version' => 'v2.8',
    'default_access_token' => '$access_key'
]);


if($MET == 'GET'){

    //if(isset($_GET['user']) && ! isset($_GET['userDetails'])){
      if($_GET['type'] == "user"){


         $url = 'search?q='.$_GET["key"].'&type='.$_GET["type"].'&fields=id,name,picture.width(700).height(700)';
    $response = $fb->get($url,$access_key);
    $fb_array = json_decode($response->getbody());
    header('Content-Type: application/json');
    echo json_encode($fb_array);





}
    else if($_GET['type'] == "page"){
        //if(isset($_GET['page'])){



         $url = 'search?q='.$_GET["key"].'&type='.$_GET["type"].'&fields=id,name,picture.width(700).height(700)';
    $response = $fb->get($url,$access_key);
    $fb_array = json_decode($response->getbody());
    header('Content-Type: application/json');
    echo json_encode($fb_array);



}


    else if($_GET['type'] == "event"){
        //if(isset($_GET['event'])){
        $url = 'search?q='.$_GET["key"].'&type='.$_GET["type"].'&fields=id,name,picture.width(700).height(700),place';
        $response = $fb->get($url,$access_key);
    $fb_array = json_decode($response->getbody());
    header('Content-Type: application/json');
    echo json_encode($fb_array);
    }


     else if($_GET['type'] == "group"){

      $url = 'search?q='.$_GET["key"].'&type='.$_GET["type"].'&fields=id,name,picture.width(700).height(700)';
        $response = $fb->get($url,$access_key);
    $fb_array = json_decode($response->getbody());
    header('Content-Type: application/json');
    echo json_encode($fb_array);
    }

    else if($_GET['type'] == "place"){

       // $latitude =

      $url = 'search?q='.$_GET["key"].'&type='.$_GET["type"].'&fields=id,name,picture.width(700).height(700)&ampcenter='.$_GET["lat"].','.$_GET["lon"];

        $response = $fb->get($url,$access_key);
    $fb_array = json_decode($response->getbody());
    header('Content-Type: application/json');
    echo json_encode($fb_array);
    }


    else if($_GET['type'] == "details"){
        //if(isset($_GET['userDetails'])){

        $response = $fb->get($_GET['id'].'?fields=albums.limit(5){name,photos.limit(2){images}},posts.limit(5)',$access_key);

    $fb_array = json_decode($response->getbody());
    header('Content-Type: application/json');
    echo json_encode($fb_array);
    }



else{

    echo "Error Bad Request";


}

}



?>
