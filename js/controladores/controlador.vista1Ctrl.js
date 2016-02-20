

/*Interesante ver como inyectamos las factorias*/

app.controller("vista1Ctrl",["$scope","matematicas_simples",function($scope,matematicas_simples) {
    
    
      
    $scope.unasuma=matematicas_simples.sumar(3,6);
    $scope.unaresta=matematicas_simples.restar(3,6);
    
     
          
  
}]);

