app.factory("firebaseChato", ["$firebaseArray",
  function($firebaseArray) {
    // create a reference to the database location where we will store our data
    var randomRoomId = Math.round(Math.random() * 100000000);
    var ref = new Firebase("https://firejob-appp.firebaseio.com/chato");

    // this uses AngularFire to create the synchronized array
    return $firebaseArray(ref);
  }
]);
  
app.factory("matematicas_simples",function() { 
  return {
    sumar:function(a,b) {
      return a+b;
    },
    restar:function(a,b) {
      return a-b;
    }
  }
});
  
app.factory("radio",function() {
  return 10;
});
  
app.factory("area",function() {
  return function(radio) {
    return 3.1416*radio*radio;
  }
});


app.factory("cordova2",function() {
 
       
var cordova2 = {
    dedo:"Está listo",
    // Application Constructor
    initialize: function() {
       cordova2.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', cordova2.preparadodispositivo, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    preparadodispositivo: function() {
        cordova2.hacercosas('verdispositivo');
        
        
  
        
    },
    // Update DOM on a Received Event
    hacercosas: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.escuchando');
        var receivedElement = parentElement.querySelector('.recibido');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');
    
        var watchID = "null";
          if(watchID == "null"){

        var options = { frequency: 3000, maximumAge: 5000, timeout: 5000, enableHighAccuracy: true };
		//watchPositio---Observa los cambios en la actual geolocalización del dispositivo.
        watchID = navigator.geolocation.watchPosition(function(position){
            
           var posicion=position.coords.latitude;
                  return posicion; 
            
        }, cordova2.fallo, options);
	
	
	
	};

        console.log('Evento Recibido: ' + id + " "+watchID+ " "+cordova2.dedo);
        
        
         
        
        
        
    }//fIN DE LA FUNCIO HACERCOSAS
};//FIN DEL OBJETO CORDOVA2
 
    
    
    
    return cordova2;
  
    
    
    
    
    
    
    
    
});//FIN DE LA FACTORI CORDOVA2

app.factory("cordova",function() {
 
   
var cordova = {
    dedo:"midedo",
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        cordova.receivedEvent('verdispositivo');
        
        
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.escuchando');
        var receivedElement = parentElement.querySelector('.recibido');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Evento Recibido: ' + id);
    }
};
 
    
    
    
    return cordova;
  
});