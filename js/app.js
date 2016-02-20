'use strict'

// Modulo de la Aplicacion, ng-app="FireJobApp", tambien llamamos a las librerias que vamos
//  a utilizar
//El objeto app que se crea nos sirve para crear los controladores y las factory
var app = angular.module("app", [
	
	'ngRoute',
    'firebase'
    
	
])

.constant('FBURL', 'https://firejob-appp.firebaseio.com/chato')
.config(function ($routeProvider) {
	$routeProvider
		.when('/main', {
			templateUrl: 'vistas/main.html',
			controller: 'mainCtrl'
		})
        .when('/', {
                templateUrl: 'vistas/principal.html',
                controller: 'principalCtrl'
            })
		.when('/ver1', {
			templateUrl: 'vistas/vista1.html',
			controller: 'vista1Ctrl'
		})
	
		.when('/ver2', {
			templateUrl: 'vistas/vista2.html',
			controller: 'vista2Ctrl'
	    })
    
        .when('/parallax', {
			templateUrl: 'vistas/parallax.html',
			controller: 'parallaxCtrl'
	    })
          .when('/formulario', {
			templateUrl: 'vistas/formulario.html',
			controller: 'formularioCtrl'
	    })
    
           .when('/firebase', {
			templateUrl: 'vistas/firebase.html',
			controller: 'firebaseCtrl'
	    })
          .when('/entrar', {
			templateUrl: 'vistas/entrar.html',
			controller: 'AutentificacionCtrl'
	    })
          .when('/registrarse', {
			templateUrl: 'vistas/registrarse.html',
			controller: 'AutentificacionCtrl'
	    })
    
    
		.otherwise({
			redirectTo: '/'
		});
});


