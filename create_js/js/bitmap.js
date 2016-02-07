//先読みするリスト
var manifest = [
    {src:'img/tomato.png'},
    {src:'img/pumpkin.png'},
    {src:'img/greenPepper'}

];



//DOMを読み込んだら
$(function(){

    //ステージ(canvas)の設定
    var stage = new createjs.Stage('canvasEl');

//loadQueue ローディング
var loadQueue = new createjs.loadQueue();
loadQueue.loadManifest(manifest);//読み込み開始

loadQueue.addEventListener('complete',function(){
    console.log('読み込み完了');

});



        //アニメーション
        createjs.Tween.get(ball).to({alpha:1},1000).wait(1000).to({x:500},1000,createjs.Ease.bounceOut);
    });


    //フレームレート
    createjs.Ticker.setFPS(30);
    createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED;



    //アニメーションの設定
    createjs.Ticker.addEventListener('tick',function(){
    //ステージの更新
    stage.update();

    });

});
