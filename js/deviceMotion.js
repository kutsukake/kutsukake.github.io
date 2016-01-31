$(function(){
    console.log('読み込み');

//加速度のイベント
// window.addEventListener('devicemotion',shakeDevice);
//
// function shakeDevice(evt){
//     var x = evt.acceleration.x;
//     var y = evt.acceleration.y;
//     var z = evt.acceleration.z;
//
//     $('#device li').eq(0).text('加速度X:' + x);
//     $('#device li').eq(1).text('加速度Y:' + y);
//     $('#device li').eq(2).text('加速度Z:' + z);
//
//     if(Math.abs(x) > 15 || Math.abs(y) > 15 || Math.abs(z) > 15){
//         $('#result').text('振ったよ');
//     }
// }

//傾きジャイロセンサー
window.addEventListener('deviceorientation',roteDevice);

function roteDevice(evt){
//x軸
    var x =evt.beta;
//y軸
    var y =evt.gamma;
// z軸
    var y =evt.alpha;

    $('#device li').eq(0).text('傾きX:' + x);
    $('#device li').eq(1).text('傾きY:' + y);
    $('#device li').eq(2).text('傾きZ:' + z);

    }

});
