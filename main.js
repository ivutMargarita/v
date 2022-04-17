$('.nav-button').on('click',function(e){
    e.preventDefault;
    $('.dropdown').toggleClass('dropdown_active');   
});

$('.menu-button').on('click',function(e){
    e.preventDefault;
    $('.dropdown_menu').toggleClass('dropdown_active');  
});


