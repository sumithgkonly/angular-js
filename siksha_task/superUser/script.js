console.log('loading');
var app = angular.module('add-row', ['ngStorage']);
app.controller('MainCtrl', function($scope, $sessionStorage){
$scope.InpFd = [{inputId: 'inpuTxt', name:''}];
$scope.addNewInpFd = function() {
if($scope.InpFd.length == 5){  
document.getElementById("addButton").disabled = true;
}else{
var newItemNo = $scope.InpFd.length+1;
$scope.InpFd.push({'inputId':'inpuTxt'+newItemNo});
console.log($scope.InpFd.length);
}
$sessionStorage.SessionMessage = $scope.InpFd;
};
$scope.removeInpFd = function(index) {
$scope.InpFd.splice( index, 1);
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