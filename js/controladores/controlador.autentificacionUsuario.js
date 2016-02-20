app.controller("AutentificacionCtrl",function($scope,Aut,$location){
    
  
       // Funcion de tipo $scope para poder usarla en la Vista
        $scope.sesion = function(usuario){
            //Funcion que extraemos de la factori autentificacion.js
            Aut.sesion(usuario).then(function (){
                console.log("Sesion iniciada exitosamente!");
                $location.path("/main");//Redireccionar automáticamente al usuario
            }, function(error){
                console.log(error);
            });
        }






        $scope.registro = function(usuario){
            Aut.registro(usuario).then(function () {
                console.log("Registrado exitosamente! y redirigido a main.html");
                $location.path("/main");
            }, function(error){
                console.log(error);
            });
        };
    
    
    
    
})