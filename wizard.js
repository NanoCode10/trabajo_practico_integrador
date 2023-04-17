
$(document).ready(function(){

    var domicilio, telefono, foodUsuario, check, comentario;
///CONSULTA A LA API DE COMIDA
    for(i=0; i <= 5 ; i++){
        
        $.ajax({
                method: "GET",
                url: "https://www.themealdb.com/api/json/v1/1/random.php",
            }).done(function (objFood) {
            
            objFood.meals.forEach(food => {
            
                let option = new Option(food.strMeal.toUpperCase());
            
                $('#food').append($(option));
            });
        });        
    };

    $("#formulario-ingreso").validate({
        rules: {
          domicilio: {
            required: true,
            minlength: 3,
            maxlength: 30,
          },
          telefono: {
            required: true,
            minlength: 10,
            maxlength: 10,
            number: true,
          },
        },
        messages: {
          domicilio: {
            required: "Por favor, ingresa tu domicilio",
            minlength: "El nombre debe tener al menos 2 caracteres",
            maxlength: "El nombre no debe tener más de 60 caracteres",
            pattern: "Por favor, ingrese un domicilio válido",
          },
          telefono: {
            required: "Por favor, ingresa tu numero de telefono",
            minlength: "El telefono debe tener 11 caracteres",
            maxlength: "El telefono debe tener 11 caracteres",
            pattern: "Por favor, ingrese un numero de telefono válido",
          },
         
        },
      });
  $("#formulario-pedido").validate({
        rules: {
          foodUsuario: {
            
            required: true
           
          },
          
        },
        messages: {
          foodUsuario: {
            required: "Por favor, ingresa tu comida",
           
            
          },
         
        },
      });

 //Muestra y oculta con el boton anterior
    $("#anterior-final").click(function() {
           
            $('article.card-final').addClass('d-none');
            $('article.card-comnt').removeClass('d-none');
            $('div.progreso').animate({width: '75%'});
            $("div.progreso").text("75%");
        });
    $("#anterior-comnt").click(function() {
            
            $('article.card-comnt').addClass('d-none');
            $('article.card-pedido').removeClass('d-none');
            $('div.progreso').animate({width: '50%'});
            $("div.progreso").text("50%");
        });
    $("#anterior-pedido").click(function() {
            
            $('article.card-pedido').addClass('d-none');
            $('article.card-ingreso').removeClass('d-none');
            $('div.progreso').animate({width: '25%'});
            $("div.progreso").text("25%");

        });
    $("#sgt-ing").click(function() {
        if ($("#formulario-ingreso").valid() == false) {
            return;
            console.log('prueba');
          } else {

            $('article.card-ingreso').addClass('d-none');
            $('article.card-pedido').removeClass('d-none');
            $('div.progreso').animate({width: '50%'});
            $("div.progreso").text("50%");
            
            domicilio = $("#domicilio").val();
            console.log('nombre ' + domicilio);
            telefono = $("#telefono").val();
            console.log('telefono ' + telefono);

          }
            
            
        });
    $("#sgt-pedido").click(function() {
        if ($("#formulario-pedido").valid() == false) {
            console.log(foodUsuario);
            return;
          } else {
            $('article.card-pedido').addClass('d-none');
            $('article.card-comnt').removeClass('d-none');
            $('div.progreso').animate({width: '75%'});
            $("div.progreso").text("75%");

            foodUsuario = $("#food").val();
            console.log('food:  ' + foodUsuario);
            check = ($('input:radio[name=flexRadioDefault]:checked').val());
			console.log('tamaño: ' + check);
          
          }
            
        });      
    $("#sgt-comnt").click(function() {
            
            $('article.card-comnt').addClass('d-none');
            $('article.card-final').removeClass('d-none');
            $('div.progreso').animate({width: '100%'});
            $("div.progreso").text("100%");

            comentario = $("#comentario").val();
            console.log('Comentario:  ' + comentario);
            $("#conf-dom").empty();
            $('#conf-dom').append(domicilio);
            $("#conf-tel").empty();
            $('#conf-tel').append(telefono);
            $("#conf-comida").empty();
            $('#conf-comida').append(foodUsuario);
            $("#conf-check").empty();
            $("#conf-tm").empty();
            $('#conf-tm').append(check);
            $("#conf-comnt").empty();
            $('#conf-comt').append(comentario);
                
        });
    $("#enviar-final").click(function() {     
        alert('¡Felicidades el pedido ya esta en camino!');
    });    
});        
