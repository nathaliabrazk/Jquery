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

    // Efeito de rotação
    $("#rotateBtn").on('click', function(){
        // Verifica se a imagem já foi rotacionada
        if ($("#rotatingImage").data('rotated')) {
            // Se sim, reverte a rotação
            $("#rotatingImage").animate({rotate: '0deg'}, 1000);
            $("#rotatingImage").data('rotated', false);
        } else {
            // Se não, aplica a rotação
            $("#rotatingImage").animate({rotate: '+=360deg'}, 1000);
            $("#rotatingImage").data('rotated', true);
        }
    });
});
