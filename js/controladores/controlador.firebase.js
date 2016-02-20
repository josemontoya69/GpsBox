'use strict'
app.controller("firebaseCtrl",["$scope","firebaseChato",function($scope,firebaseChato) {
    
        $scope.mesages= firebaseChato;
    
    
       $scope.addMensage = function() {
     
              $scope.mesages.$add({
                nombre: $scope.nombre,
                 texto: $scope.message,
                email: $scope.email

              });

      // reset the message input
      $scope.message = "";
      $scope.nombre = "";
      $scope.email = "";   
           
           
           
          
           
    };
    
  
}]);