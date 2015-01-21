goog.provide('game');

var WIDTH = 300;
var HEIGHT = 400;
var director;
var gameSeq = []; // array lưu thứ tự random
var userSeq = []; // array lưu thứ tự ô user chọn

// game start
game.start = function() {
	director = new lime.Director(document.body, WIDTH, HEIGHT);
	director.makeMobileWebAppCapable();

	var scene = new lime.Scene();

	var layer1 = new lime.Layer().setPosition(0, 50);

	var s1 = new lime.Sprite()
			.setSize(100,100)
			.setPosition(50,50)
			.setFill('#999');
	var s2 = new lime.Sprite()
			.setSize(100,100)
			.setPosition(150,50)
			.setFill('#999');
	var s3 = new lime.Sprite()
			.setSize(100,100)
			.setPosition(250,50)
			.setFill('#999');			
	var s4 = new lime.Sprite()
			.setSize(100,100)
			.setPosition(50,150)
			.setFill('#999');			
	var s5 = new lime.Sprite()
			.setSize(100,100)
			.setPosition(150,150)
			.setFill('#999');			
	var s6 = new lime.Sprite()
			.setSize(100,100)
			.setPosition(250,150)
			.setFill('#999');
	var s7 = new lime.Sprite()
			.setSize(100,100)
			.setPosition(50,250)
			.setFill('#999');			
	var s8 = new lime.Sprite()
			.setSize(100,100)
			.setPosition(150,250)
			.setFill('#999');			
	var s9 = new lime.Sprite()
			.setSize(100,100)
			.setPosition(250,250)
			.setFill('#999');	

	layer1.appendChild(s1);
	layer1.appendChild(s2);
	layer1.appendChild(s3);
	layer1.appendChild(s4);
	layer1.appendChild(s5);
	layer1.appendChild(s6);
	layer1.appendChild(s7);
	layer1.appendChild(s8);
	layer1.appendChild(s9);
	scene.appendChild(layer1);	

// random the beginning number
	getRandom();

// catch click event
	goog.events.listen(s1,['click','touchend'],function(e){
		getInput(1);
	});
	goog.events.listen(s2,['click','touchend'],function(e){
		getInput(2);
	});
	goog.events.listen(s3,['click','touchend'],function(e){
		getInput(3);
	});
	goog.events.listen(s4,['click','touchend'],function(e){
		getInput(4);
	});
	goog.events.listen(s5,['click','touchend'],function(e){
		getInput(5);
	});
	goog.events.listen(s6,['click','touchend'],function(e){
		getInput(6);
	});
	goog.events.listen(s7,['click','touchend'],function(e){
		getInput(7);
	});
	goog.events.listen(s8,['click','touchend'],function(e){
		getInput(8);
	});
	goog.events.listen(s9,['click','touchend'],function(e){
		getInput(9);
	}); // end catch click event

// random số thứ tự của ô rồi lưu vào gameSeq array
	function getRandom () {
		var random = Math.floor((Math.random()*10)+1);
		if (random == 10) {
			getRandom();
		} else {
			gameSeq.push(random);
		};
	}; // end random

// kiểm tra ô user chọn có đúng với thứ tự trong gameSeq array
	function getInput (num) {
			userSeq.push(num); // lưu thứ tự chọn vào user array
			checkSeq(num);		// chạy hàm k.tra
			if (userSeq.length == gameSeq.length) { // nếu chọn đến ô cuối cùng sẽ qua màn
				userSeq.length = 0;
				alert("success");
				getRandom();
			}
	}; // end check	
	
// game over, bắt đầu màn mới
	function gameOver (gameover) {
		if (gameover == true) {
			alert('game over');
			gameSeq.length = 0;
			userSeq.length = 0;
			getRandom();
		}
	}; // end game over

// hàm kiểm tra
	function checkSeq () {
		var i = userSeq.length - 1;
		//verify if the user choose correctly
		if (gameSeq[i] != userSeq[i]){
			gameOver(true);
		}
	}; // end check function

	director.replaceScene(scene);	
};
