// $(function(){
//
//     $('#btn').on('click',function(evt){
//         //乱数
//         var randNum = Math.random()*3;
//         console.log(randNum);

var omikuji =[
    {
        result:'大吉',
        love:'整う',
        business:'成功'
    },
    {
        result:'吉',
        love:'耐える',
        business:'動くな'
    },
    {
        result:'凶',
        love:'別れる',
        business:'失敗'
    }
];

//
console.log(omikuji);
//     });
// });

$(function(){

    $('#btn').on('click',function(){
    //乱数
    var randNum = Math.floor(Math.random()*omikuji.length);
    console.log(randNum);
    //結果
    $('.resultKekka').text(omikuji[randNum].result);
    //恋愛
    $('.resultLove').text(omikuji[randNum].love);
    //仕事
    $('.resultBusiness').text(omikuji[randNum].business);
    });
});
