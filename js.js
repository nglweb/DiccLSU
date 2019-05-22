$(document).ready(function(){
    
    $('#primero').mouseover(function(){
        $('#btn-primero').fadeIn();
        
    })
    $('#segundo').mouseover(function(){
        $('#btn-segundo').fadeIn();
        
    })
    $('#segundo').mouseover(function(){
        $('#btn-tercero').fadeIn();
        
    })
    $('#profund').mouseover(function(){
        $('#btn-prof').fadeIn();
        
    })
    
    $('#btn-primero').click(function(){
        $('#fondo1').hide();
    })
    $('#btn-segundo').click(function(){
        $('#fondo1').hide();
    })
    $('#btn-tercero').click(function(){
        $('#fondo1').hide();
    })
    $('#btn-prof').click(function(){
        $('#fondo1').hide();
    })
});