//DOMロード

$(function(){
    console.log('DOM読み込んだよ');
//#btnをクリックしたら
$('#btn').on('click',function(){

    //Ajaxでロード
    $.ajax({
        url:'omikuji.html',
        type:'GET',
        dateType:'html'
    }).done(function(date){
        console.log(date);
    }).fale(function(){
        console.log('ajax error');
    });



    });

});
