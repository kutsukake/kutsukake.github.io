$(function(){

//加速度のイベント
window.addEventListener('devicemotion',shakeDevice);


function shekeDevice(evt){
    var x = evt.acceleration.x;
    var y = evt.acceleration.y;
    var z = evt.acceleration.z;
    $('#device li').eq(0).text('加速度X:' + x);
    $('#device li').eq(1).text('加速度X:' + y);
    $('#device li').eq(2).text('加速度X:' + z);
}

});