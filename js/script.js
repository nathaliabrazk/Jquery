$(document).ready(function(){
    // Efeito de fadeOut
    $("#fadeOutBtn").click(function(){
        $("#content").fadeOut();
    });

    // Efeito de fadeIn
    $("#fadeInBtn").click(function(){
        $("#content").fadeIn();
    });

    // Efeito de toggle (alterna entre fadeOut e fadeIn)
    $("#toggleBtn").click(function(){
        $("#content").fadeToggle();
    });
});