console.log('loading');


var app = angular.module('add-row', ['ngStorage']);

  app.controller('MainCtrl', function($scope, $sessionStorage){
      
    $scope.InpFd = [{inputId: 'inpuTxt', name:''}];
  
  $scope.addNewInpFd = function() {
     if($scope.InpFd.length == 10){  
            document.getElementById("addButton").disabled = true;
     }else{
         var newItemNo = $scope.InpFd.length+1;
         $scope.InpFd.push({'inputId':'inpuTxt'+newItemNo});
          console.log($scope.InpFd.length);
      }
 $sessionStorage.SessionMessage = $scope.InpFd;
      //alert('clicked');
     // $scope.saveValidate();
      
     
           
      
  };
      
    

  $scope.removeInpFd = function(index) {
    // remove the row specified in index
    $scope.InpFd.splice( index, 1);
    // if no rows left in the array create a blank array
   
		
  
  };
$scope.saveValidate = function ValidateIPaddress(inputText) {  
   
    if ( $scope.InpFd.length === 0 || $scope.InpFd.length == null){
         console.log('clicked');
        $scope.InpFd.push = [{"inputId":"inpuTxt"}];
    }
    $sessionStorage.SessionMessage
   console.log($sessionStorage.SessionMessage); 
    
}  

});