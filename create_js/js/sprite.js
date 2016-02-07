//先読みするリスト
var manifest = [
    {src:'img/calcium.png'},
    {src:'img/iron.png'},
    {src:'img/vitaminC.png'}
    {src:'img/header.png'}

];



//DOMを読み込んだら
$(function(){

    //ステージ(canvas)の設定
    var stage = new createjs.Stage('canvasEl');

//loadQueue ローディング
var loadQueue = new createjs.LoadQueue();
loadQueue.loadManifest(manifest);//読み込み開始

    loadQueue.addEventListener('complete',function(){
    console.log('読み込み完了');
    showVege();
    });

loadQueue.addEventListener('progress',function(evt){
    console.log(evt.progress);//読み込み状況 0~1
});




function showVege(){
    //スプライトシートの設定
    var vcSprite = new createjs.SpriteSheet(vitaminCSprite);

    //スプライトの設定
    var vitaminC = new createjs.Sprite(vcSprite,'stand');
    stage.addChild(vitaminC);

    // 初期位置と透明度の設定
    vitaminC.x = 100;
    vitaminC.y = 400;
    vitaminC.alpha = 0;
    //アニメーション  tweenjsから読み込んで透明度０から１になる。その後x座標の500まで歩いてビタミンcが止まる
    createjs.Tween.get(vitaminC).to({alpha:1},500).wait(1000).call(vitaminCWalk).to({x:500},4000).call(vitaminCStand);
    // ビタミンCが歩く
    function vitaminCWalk(){
        vitaminC.gotoAndPlay('walk');
    }
    // ビタミンCが止まる
    function vitaminCStand(){
        vitaminC.gotoAndPlay('stand');
    }


    var irSprite = new createjs.SpriteSheet(ironSprite);

    //スプライトの設定
    var iron = new createjs.Sprite(irSprite,'stand');
    stage.addChild(iron);

    // 初期位置と透明度の設定
    iron.x = 300;
    iron.y = 400;
    iron.alpha = 0;
    //アニメーション  tweenjsから読み込んで透明度０から１になる。その後x座標の500まで歩いてビタミンcが止まる
    createjs.Tween.get(iron).to({alpha:1},500).wait(1000).call(ironWalk).to({x:650},4000).call(ironStand);
    // ビタミンCが歩く
    function ironWalk(){
        iron.gotoAndPlay('walk');
    }
    // ビタミンCが止まる
    function ironStand(){
        iron.gotoAndPlay('stand');
    }
    //ステージの更新
    stage.update();

    var spot = new createjs.Bitmap(manifest[3].src);
    tomato.x = 0;
    tomato.y = 0;
    stage.addChild(spot);

}


    //フレームレート
    createjs.Ticker.setFPS(30);
    createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED;



    //アニメーションの設定
    createjs.Ticker.addEventListener('tick',function(){
    //ステージの更新
    stage.update();

    });

});
