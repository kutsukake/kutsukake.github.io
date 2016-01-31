//DOMロード

$(function(){
    console.log('DOM読み込んだよ');
//#btnをクリックしたら
$('#btn').on('click',function(){

    //Ajaxでロード
    $.ajax({
        url:'mydata.json',
        type:'GET',
        dateType:'json'
    }).done(function(data){
        console.log(data);

        showContent(data);

    }).fail(function(){
        //失敗
        console.log('ajax error');
     });

    });

    //表示させる関数
    function showContent(data){
        $('#container').append(data);
    }

});

for(var cnt =0; cnt < data.length; cnt++){
    $('#container li').eq(cnt).text(data[cnt].name);
}
