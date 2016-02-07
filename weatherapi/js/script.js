$(function(){
    //GPS
    // console.log('読み込み');
    navigator.geolocation.getCurrentPosition(function(pos){
        var lat = pos.coords.latitude;
        var lon = pos.coords.longitude;

        console.log(lat,lon);
    });
});
