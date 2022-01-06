$(document).ready(function(){
    $('.p-tc:first').show();
    $('.p-blog__tablink:first').addClass('p-blog__tablink--active');

    $('.p-blog__tablink').on('click', function(){
        var index = $(this).index();
        $('.p-blog__tablink').removeClass('p-blog__tablink--active');
        $(this).addClass('p-blog__tablink--active');
        $('.p-tc').hide();
        $('.p-tc').eq(index).show();
    })
});
