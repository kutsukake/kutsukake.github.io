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

        showContent(data);

    }).fale(function(){
        //失敗
        console.log('ajax error');
     });

    });

    //表示させる関数
    function showContent(data){
        $('#container').append(data);
    }

});
