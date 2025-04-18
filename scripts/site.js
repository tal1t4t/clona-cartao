$(document).ready(function() { 
    $("button").on("click", function() { 
        var txt = $("<p class='clonado'>Cartão clonado com sucesso!</p>"); 
        $(this).closest(".produto").append(txt); 
        $(this).remove(); 
    }); 
}); 

setInterval(function(){ // Função para fazer piscar a imagem da palavra NOVIDADES.
    $(".clonado").fadeIn(); // Está dentro de setInterval.
    $(".clonado").fadeOut(); // Está dentro de setInterval.
},10);

function atumalaka(){
    var audio = document.getElementById("atumalaka");
    audio.play();
}
