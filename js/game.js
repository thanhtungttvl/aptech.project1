//set main namespace
goog.provide('game');
goog.provide('lime.animation.ColorTo');
goog.require('lime.animation.Animation');

var WIDTH = 500;
var HEIGHT = 300;
var director;

game.start = function() {
    director = new lime.Director(document.body, WIDTH, HEIGHT);
    director.makeMobileWebAppCapable();
    
    var scene = new lime.Scene();
    
    var layer1 = new lime.Layer().setPosition(WIDTH / 2, HEIGHT / 2);
    var layer2 = new lime.Layer().setPosition(WIDTH / 2, HEIGHT / 2);
    
    var frames = new lime.animation.KeyframeAnimation();
    frames.addFrame(new lime.fill.Frame('img/atlas.png', 584, 182, 114, 100));
    
    var s1 = new lime.Sprite()
            .setSize(114, 100)
            .setPosition(0, 0);
    s1.runAction(frames);
    
    layer1.appendChild(s1);
    scene.appendChild(layer1);
    /*
    var s2 = new lime.Sprite()
            .setSize(184, 50)
            .setPosition(0, - 100)
            .setFill(new lime.fill.Frame('img/atlas.png', 589, 118, 184, 50));
    layer2.appendChild(s2);
    scene.appendChild(layer2);
    
    goog.events.listen(scene,['mousedown','touchstart'],function(e){
        game.play();
    });
    */
    director.replaceScene(scene);
};
/*
game.play = function() {
    var scene = new lime.Scene();
    /*
    // background
    var layerBg = new lime.Layer().setPosition(WIDTH / 2, HEIGHT / 2);
    layerBg.appendChild(new lime.Sprite()
            .setSize(WIDTH, HEIGHT)
            .setPosition(0, 0)
            .setFill(new lime.fill.Frame('img/atlas.png', 0, 0, 228, 512)));
    scene.appendChild(layerBg);
/*
    // wall
    var layerWall = new lime.Layer().setPosition(WIDTH / 2, HEIGHT / 2);
//    layerWall.appendChild(new lime.Sprite()
//            .setSize(52, 200)
//            .setPosition(0, 0)
//            .setFill(new lime.fill.Frame('img/atlas.png', 168, 646, 52, 320)));
    layerWall.appendChild(new game.Wall(0, 50, "UP"));
    layerWall.appendChild(new game.Wall(50, -250, "DOWN"));
    layerWall.appendChild(new game.Wall(120, 50, "UP"));
    layerWall.appendChild(new game.Wall(200, -250, "DOWN"));
    scene.appendChild(layerWall);
    
    // bird
    var layerBird = new lime.Layer().setPosition(WIDTH / 2, HEIGHT / 2);
    var bird = new lime.Sprite()
            .setSize(34, 24)
            .setPosition(-30, 0);
    var animBird = new lime.animation.KeyframeAnimation();
    animBird.addFrame(new lime.fill.Frame('img/atlas.png', 6, 982, 34, 24));
    animBird.addFrame(new lime.fill.Frame('img/atlas.png', 62, 982, 34, 24));
    animBird.addFrame(new lime.fill.Frame('img/atlas.png', 118, 982, 34, 24));
    animBird.setDelay(.15);
    bird.runAction(animBird);
    layerBird.appendChild(bird);
    scene.appendChild(layerBird);
    /*
    // background animation
    var layerBg2 = new lime.Layer().setPosition(WIDTH / 2, HEIGHT / 2);
    var bg2 = new lime.Sprite()
            .setSize(228, 112)
            .setPosition(0, 200);
    var animLineBG = new lime.animation.KeyframeAnimation();
    animLineBG.addFrame(new lime.fill.Frame('img/atlas.png', 584, 0, 228, 112));
    animLineBG.addFrame(new lime.fill.Frame('img/atlas.png', 594, 0, 228, 112));
    animLineBG.setDelay(0.15);
    bg2.runAction(animLineBG);
    layerBg2.appendChild(bg2);
    scene.appendChild(layerBg2);
    /*
    // run wall
    var elapse = 0;
    lime.scheduleManager.schedule(function(dt) {
        elapse += dt;
        
        var s = (6 * elapse) / 1000;
        
        var count = layerWall.getNumberOfChildren();
        for(var i = 0; i < count; i++) {
            var w = layerWall.getChildAt(i);
//            w.setPosition(w.getPosition().x - s, w.getPosition().y);
            w.calPosition(dt);
        }
    }, scene);
    
    // bird down
    var elapseBird = 0;
    var birdAutoDown = function(dt) {
        elapseBird += dt;
        var s = (1 * elapseBird) / 1000;
        
        bird.setPosition(bird.getPosition().x, bird.getPosition().y + s);
        
        if(bird.getPosition().y >= 130) {
            lime.scheduleManager.unschedule(birdAutoDown, bird);
            animBird.stop();
            animLineBG.stop();
            game.gameover();
        }
    };
    lime.scheduleManager.schedule(birdAutoDown, bird);
//    bird.runAction(new lime.animation.RotateTo(-90).setDuration(0.1));
    
    // bird up
    goog.events.listen(scene, ['mousedown', 'touchstart'], function(e) {
        elapseBird = 0;
        bird.setPosition(bird.getPosition().x, bird.getPosition().y - 10);
        
        
//        bird.runAction(new lime.animation.Spawn(
//                bird.runAction(new lime.animation.RotateTo(45).setDuration(0.5)),
//                bird.runAction(new lime.animation.RotateTo(-90).setDuration(0.5))
//                ));
    });
    
    director.replaceScene(scene);*/
//};
/*
game.gameover = function() {
    var scene = new lime.Scene();
    
    var layer = new lime.Layer().setPosition(WIDTH / 2, HEIGHT / 2);
    layer.appendChild(new lime.Label("Game Over")
            .setSize(114, 100)
            .setPosition(0, 0));
    scene.appendChild(layer);
    
    director.pushScene(scene);
};*/