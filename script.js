var app = angular.module('myApp', ['ngAnimate']);
app.controller('myCtrl', function($scope, $http, $timeout) {
    
    
    
    $scope.moment=moment;
      $scope.showDetails = false;
    $scope.searchText="";
    $scope.pageDetails="";
    $scope.userDetailsPageData="";
    $scope.favList = [];
    $scope.passedFbItem="";
    
    
    if(localStorage.getItem('favList')){
        var temp = localStorage.getItem('favList');
        $scope.favList = JSON.parse(temp);
    }else{
       $scope.favList = []; 
    }
    
    
    $scope.clearFun=function(){
        
    $scope.searchText="";
    $scope.pageDetails="";
    $scope.userDetails ="";
    $scope.eventDetails="";
    $scope.eventDetailsData="";
    $scope.pageDetailsData="";
    $scope.userDetailsData ="";
    $scope.placeDetailsData =""; 
    $scope.placeDetails ="";
    $scope.groupDetailsData ="";
    $scope.groupDetails ="";
    $scope.selectedItem= ""; 
    $scope.afterLoad = false;
    
        /*angular.element(document.getElementById('nav6')).removeClass('active');
        angular.element(document.getElementById('nav5')).removeClass('active');
        angular.element(document.getElementById('nav4')).removeClass('active');
        angular.element(document.getElementById('nav3')).removeClass('active');
    angular.element(document.getElementById('nav2')).removeClass('active');    
    angular.element(document.getElementById('nav1')).addClass('active');*/ 
        setTimeout(function(){
           $('#userNav')[0].click(); 
        }, 200);
        
        
    }
    
    /**/
    $scope.goback = function () {
        $scope.showDetails = false;
    }
    
    
    
    $scope.search=function(){
        
        $scope.afterLoad = true;
       
        $scope.progress = true;
        
        
        var lat,lon;
        function foundLocation(position) {
                console.log('location:');
                console.log(position);
                 lat = position.coords.latitude;
                 lon = position.coords.longitude;
              
        $http({ 
                method: 'GET',
                url: './service.php?key=' + $scope.searchText + '&type=place' + '&lat=' + lat + '&lon=' + lon
            }).then(function successCallback(response) {

           // $scope.progress = false;
             
                $scope.placeDetails = (response.data);
            
                
            }, function errorCallback(response) {

                return response;
            });
            
               // console.log(lat);console.log(lon);
            }
        
         navigator.geolocation.getCurrentPosition(foundLocation);
            
            
       
       $http({
           method: 'GET',
                url: './service.php?key=' + $scope.searchText + '&type=user'
            }).then(function successCallback(response) {
               // console.log("user ")
           //console.log(response);
           //console.log( $scope.favList);
           
            $scope.progress = false;
           
                $scope.userDetails = (response.data);
           $scope.userDetails.data.forEach(function(item){
               
              for(i=0;i<$scope.favList.length;i++){
                  
                  if(item.id==$scope.favList[i].id)
                      item.isFav=true;
              }
               
           });
             /*  for(x in $scope.favList){
                    for(y in $scope.userDetails.data){
                        
                        if(x.id == y.id){
                            y.isFav=true;
                        }
                    }
                    
               }*/
                console.log(response.data.data);

            }, function errorCallback(response) {

                return response;
            });
               
    
    
    
       // $scope.searchText= document.getElementById('searchBar').value;
       $http({
                method: 'GET',
                url: './service.php?key=' + $scope.searchText + '&type=page'
            }).then(function successCallback(response) {
                console.log(response);
                $scope.pageDetails = (response.data);
                console.log(response.data.data);
           
           
            $scope.pageDetails = (response.data);
           $scope.pageDetails.data.forEach(function(item){
               
              for(i=0;i<$scope.favList.length;i++){
                  
                  if(item.id==$scope.favList[i].id)
                      item.isFav=true;
              }
               
           });
           

            }, function errorCallback(response) {

                return response;
            });
        
       
    
        
        //$scope.searchText= document.getElementById('searchBar').value;
       $http({
                method: 'GET',
                url: './service.php?key=' + $scope.searchText + '&type=event'
            }).then(function successCallback(response) {
                console.log(response);
                $scope.eventDetails = (response.data);
                console.log(response.data.data);
           
           
           $scope.eventDetails = (response.data);
           $scope.eventDetails.data.forEach(function(item){
               
              for(i=0;i<$scope.favList.length;i++){
                  
                  if(item.id==$scope.favList[i].id)
                      item.isFav=true;
              }
               
           });
           

            }, function errorCallback(response) {

                return response;
            });
        
        $http({
                method: 'GET',
                url: './service.php?key=' + $scope.searchText + '&type=group'
            }).then(function successCallback(response) {
                console.log(response);
                $scope.groupDetails = (response.data);
                //console.log(response.data.data);
            
            
            $scope.groupDetails = (response.data);
           $scope.groupDetails.data.forEach(function(item){
               
              for(i=0;i<$scope.favList.length;i++){
                  
                  if(item.id==$scope.favList[i].id)
                      item.isFav=true;
              }
               
           });
            
            

            }, function errorCallback(response) {

                return response;
            });
        
      
        
              
    };
    
    
    
    $scope.nextuser = function(link){
        $http({
                method: 'GET',
                url: link
        }).then(function successCallback(response) {
                console.log(response);
                $scope.userDetails = (response.data);
                //console.log(response.data.data);

            }, function errorCallback(response) {

                return response;
            });
        }
        

    
     $scope.previoususer = function(link){
        $http({
                method: 'GET',
                url: link
        }).then(function successCallback(response) {
                console.log(response);
                $scope.userDetails = (response.data);
                //console.log(response.data.data);

            }, function errorCallback(response) {

                return response;
            });
         }
    
    $scope.nextgroup = function(link){
        $http({
                method: 'GET',
                url: link
        }).then(function successCallback(response) {
                console.log(response);
                $scope.groupDetails = (response.data);
                //console.log(response.data.data);

            }, function errorCallback(response) {

                return response;
            });
        }
        

    
     $scope.previousgroup = function(link){
        $http({
                method: 'GET',
                url: link
        }).then(function successCallback(response) {
                console.log(response);
                $scope.groupDetails = (response.data);
                //console.log(response.data.data);

            }, function errorCallback(response) {

                return response;
            });
         }
     
     
     $scope.nextevent = function(link){
        $http({
                method: 'GET',
                url: link
        }).then(function successCallback(response) {
                console.log(response);
                $scope.eventDetails = (response.data);
                //console.log(response.data.data);

            }, function errorCallback(response) {

                return response;
            });
        }
        

    
     $scope.previousevent = function(link){
        $http({
                method: 'GET',
                url: link
        }).then(function successCallback(response) {
                console.log(response);
                $scope.eventDetails = (response.data);
                //console.log(response.data.data);

            }, function errorCallback(response) {

                return response;
            });
         }
    
     $scope.nextpage = function(link){
        $http({
                method: 'GET',
                url: link
        }).then(function successCallback(response) {
                console.log(response);
                $scope.pageDetails = (response.data);
                //console.log(response.data.data);

            }, function errorCallback(response) {

                return response;
            });
        }
        

    
     $scope.previouspage = function(link){
        $http({
                method: 'GET',
                url: link
        }).then(function successCallback(response) {
                console.log(response);
                $scope.pageDetails = (response.data);
                //console.log(response.data.data);

            }, function errorCallback(response) {

                return response;
            });
         }
     
     $scope.nextplace = function(link){
        $http({
                method: 'GET',
                url: link
        }).then(function successCallback(response) {
                console.log(response);
                $scope.placeDetails = (response.data);
                //console.log(response.data.data);

            }, function errorCallback(response) {

                return response;
            });
        }
        

    
     $scope.previousplace = function(link){
        $http({
                method: 'GET',
                url: link
        }).then(function successCallback(response) {
                console.log(response);
                $scope.placeDetails = (response.data);
                //console.log(response.data.data);

            }, function errorCallback(response) {

                return response;
            });
         }
     
    
    $scope.viewDetails = function (value,type){
        $scope.passedFbItem=value;
        
        $scope.selectedItem= value.id;
         $scope.showDetails = true;
        $scope.imageData = value;
       console.log(value.id);
        $scope.progressdetails = true;
        $scope.progressalbumdetails = true;
        
        $http({
                method: 'GET',
                url: './service.php?id=' + $scope.selectedItem + '&type=details'
            }).then(function successCallback(response) {
            
            
            $timeout(function () {
        $scope.progressdetails = false;
            $scope.progressalbumdetails = false;    
          }, 2000);
            
            
            
            
            $scope.detailsData = (response.data);
            console.log(response.data)
            $scope.detailsData.type = type;
                        $scope.detailsData.obj = value;

           /* if(type == "user")
                $scope.userDetailsData = (response.data);
                //console.log(response.data);
            else if(type == "page")
                $scope.pageDetailsData = (response.data);
            else if(type == "place")
                $scope.placeDetailsData = (response.data);
            else if(type == "group")
                $scope.groupDetailsData = (response.data);
            else if(type == "event")
                $scope.eventDetailsData = (response.data);
            /*else if(type == "favorite")
                $scope.favDetails = (response.data);*/
            
            }, function errorCallback(response) {

                return response;
            });
        
    }
    
    $scope.myFavorite = function(obj,type) {
        
        obj.type = type;
      if(obj.isFav)
          {
             var i = $scope.favList.indexOf(obj);
              if(i == -1)
                  {
                     return; 
                  }
              else
                  {
                      obj.isFav=false;
                      $scope.favList.splice(i,1);
                      localStorage.setItem('favList',JSON.stringify($scope.favList));
                  }
          }
        else
          {
              obj.isFav=true;
                      $scope.favList.push(obj);
                      localStorage.setItem('favList',JSON.stringify($scope.favList));
          }
        
    }
    
    $scope.delFavorite = function(obj){
         if(obj.isFav)
          {
             var i = $scope.favList.indexOf(obj);
                      obj.isFav=false;
                      $scope.favList.splice(i,1);
                      localStorage.setItem('favList',JSON.stringify($scope.favList));
                  }
          }
    
    $scope.posttofb = function(value){
     
    FB.ui({
    app_id: '181479082348151',
        method: 'feed',
        //link: window.location.href,
        link: '',
        picture: value.picture.data.url,
        name: value.name,
        caption: ''
        }, function(response){
    if (response && !response.error_message)
    alert("Successfully posted");
    else
    alert("Failed to post");
    });
  };  
    
});