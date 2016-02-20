
app.controller("mainCtrl",["$scope",function($scope) {
      




        var watchID = "null";

        //var precisiongps;

        function gpsapagar(){
            //Esto lo apaga
            clearWatch();
            //precisiongps = null;

            };


        //iNICIO DEL GPS
          function gps () {
        //	if (precisiongps){
        //		
        //		precisiongps = null;
        //		
        //		};
            //Esta id está en el index.html	
            $("#idioma").val("papuchi");
            //y esta está en este mismo controlador 
            $("#encedergps").val("jquery");
            //Esto lo enciende si está apagado
          if(watchID == "null"){

                var options = { frequency: 3000, maximumAge: 5000, timeout: 5000, enableHighAccuracy: true };
                //watchPositio---Observa los cambios en la actual geolocalización del dispositivo.
                watchID = navigator.geolocation.watchPosition(function(position){

                    var posicion=position.coords.latitude;
                     $scope.lati= posicion;
                    console.log(posicion)
        ;         


                }, fallo, options);



            };

            $scope.latitud= "encendido "+watchID;  

        };
        //FIN DEL GPS

        function clearWatch() {
            //aqui lo apaga
            if (watchID !== "null") {
                 // clearWatch..para dejar de observar la geolocalización.
                navigator.geolocation.clearWatch(watchID);
                watchID = "null";
            }
        }


        /*var correcto = function(pos) { 

           // $scope.dentro="dentro de correcto";
            $scope.latitude=pos.coords.latitude;







        };	*/


            $scope.apagargps=function(){

                $scope.latitud= "apagado"; 
                $scope.lati= ""; 
                gpsapagar()

            }


                $scope.encendergps=function(){

                $scope.latitud= "encendido"; 
                      gps();

            }




                ///--------------------------------------------------------------












        var fallo = function(error) {
          if (error.code=="TIMEOUT"){
        alert("Enciende tu gps");

        };
        };


    
   
    
    
          
  
}]);















