
    
    
$(document).ready(function() {
       
        
    
       
       
       
       
       //Esto pertenece a la barra de navegacion
       
       
       

    $('.button-collapse').sideNav({
        
          menuWidth: 300, // Default is 240
          edge: 'left', // Choose the horizontal origin
         closeOnClick: true
        
    });
   
       
   
     //Esto pertenece a boton dropdown de arriba  
    $('.dropdown-button1').dropdown({
          inDuration: 300,
          outDuration: 225,
          constrain_width: false, // Does not change width of dropdown to that of the activator
          hover: false, // Activate on hover
          gutter: 0, // Spacing from edge
          belowOrigin: false, // Displays dropdown below the button
          alignment: 'left' // Displays dropdown with edge aligned to the left of button
        });
      

       
              

  
       
      
       
       

    
    
    
    
});
    


