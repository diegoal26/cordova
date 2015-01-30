/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function(){
    document.addEventListener("deviceready",onDeviceReady,false);

    function onDeviceReady(){
        alert('probando');
    }
   /* $('#bot').click(function(){
       alert('consulta');

       var nombre= $('#nombre').val();
       var email=$('#email').val();
       //alert(email);

       var data={
           "email": email,
           'nombre':nombre
       };
       alert(JSON.stringify(data));
       $.ajax({
           type: "POST",
           dataType: "json",
           url: "ajax.php",
           data: JSON.stringify(data),
           success: function(pepito){
               alert("conexion exitosa a ".concat(pepito['base']));
               //alert(pepito['base']);
               alert(pepito['nombre']);
               alert(pepito['email']);
               $.mobile.navigate( "#correcto" );
           },error: function(){
             //alert("no se pudo conectar");
             $.mobile.navigate( "#incorrecto" );
           }
       });
    });*/
});


