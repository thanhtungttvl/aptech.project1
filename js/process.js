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

	var s0 = new lime.Sprite()
			.setSize(100,100)
			.setPosition(50,50)
			.setFill('#999')
			.setStroke(2,'#ecf0f1');
	var s1 = new lime.Sprite()
			.setSize(100,100)
			.setPosition(150,50)
			.setFill('#999')
			.setStroke(2,'#ecf0f1');
	var s2 = new lime.Sprite()
			.setSize(100,100)
			.setPosition(250,50)
			.setFill('#999')
			.setStroke(2,'#ecf0f1');			
	var s3 = new lime.Sprite()
			.setSize(100,100)
			.setPosition(50,150)
			.setFill('#999')
			.setStroke(2,'#ecf0f1');			
	var s4 = new lime.Sprite()
			.setSize(100,100)
			.setPosition(150,150)
			.setFill('#999')
			.setStroke(2,'#ecf0f1');
	var s5 = new lime.Sprite()
			.setSize(100,100)
			.setPosition(250,150)
			.setFill('#999')
			.setStroke(2,'#ecf0f1');
	var s6 = new lime.Sprite()
			.setSize(100,100)
			.setPosition(50,250)
			.setFill('#999')
			.setStroke(2,'#ecf0f1');			
	var s7 = new lime.Sprite()
			.setSize(100,100)
			.setPosition(150,250)
			.setFill('#999')
			.setStroke(2,'#ecf0f1');			
	var s8 = new lime.Sprite()
			.setSize(100,100)
			.setPosition(250,250)
			.setFill('#999')
			.setStroke(2,'#ecf0f1');	
	// set object ID
	s0.ID = "0";
	s1.ID = "1";			
	s2.ID = "2";			
	s3.ID = "3";			
	s4.ID = "4";			
	s5.ID = "5";			
	s6.ID = "6";			
	s7.ID = "7";			
	s8.ID = "8";			
			
	layer1.appendChild(s0);
	layer1.appendChild(s1);
	layer1.appendChild(s2);
	layer1.appendChild(s3);
	layer1.appendChild(s4);
	layer1.appendChild(s5);
	layer1.appendChild(s6);
	layer1.appendChild(s7);
	layer1.appendChild(s8);

	scene.appendChild(layer1);	

// random the beginning number
	getRandom();
	// end random

// catch click event and run effect, getInput functions (hard code!)	
	goog.events.listen(s0,['mousedown','touchstart'],function(e){
	    s0.setFill('#3498db');
	    e.swallow(['mouseup','touchend','touchcancel'],function(e){
	        s0.setFill('#999');
        getInput(s0.ID);
	    });
	});
	goog.events.listen(s1,['mousedown','touchstart'],function(e){
	    s1.setFill('#3498db');
	    e.swallow(['mouseup','touchend','touchcancel'],function(e){
	        s1.setFill('#999');
        getInput(s1.ID);
	    });
	});
	goog.events.listen(s2,['mousedown','touchstart'],function(e){
	    s2.setFill('#3498db');
	    e.swallow(['mouseup','touchend','touchcancel'],function(e){
	        s2.setFill('#999');
        getInput(s2.ID);
	    });
	});
	goog.events.listen(s3,['mousedown','touchstart'],function(e){
	    s3.setFill('#3498db');
	    e.swallow(['mouseup','touchend','touchcancel'],function(e){
	        s3.setFill('#999');
        getInput(s3.ID);
	    });
	});
	goog.events.listen(s4,['mousedown','touchstart'],function(e){
	    s4.setFill('#3498db');
	    e.swallow(['mouseup','touchend','touchcancel'],function(e){
	        s4.setFill('#999');
        getInput(s4.ID);
	    });
	});
	goog.events.listen(s5,['mousedown','touchstart'],function(e){
	    s5.setFill('#3498db');
	    e.swallow(['mouseup','touchend','touchcancel'],function(e){
	        s5.setFill('#999');
        getInput(s5.ID);
	    });
	});
	goog.events.listen(s6,['mousedown','touchstart'],function(e){
	    s6.setFill('#3498db');
	    e.swallow(['mouseup','touchend','touchcancel'],function(e){
	        s6.setFill('#999');
        getInput(s6.ID);
	    });
	});
	goog.events.listen(s7,['mousedown','touchstart'],function(e){
	    s7.setFill('#3498db');
	    e.swallow(['mouseup','touchend','touchcancel'],function(e){
	        s7.setFill('#999');
        getInput(s7.ID);
	    });
	});
	goog.events.listen(s8,['mousedown','touchstart'],function(e){
	    s8.setFill('#3498db');
	    e.swallow(['mouseup','touchend','touchcancel'],function(e){
	        s8.setFill('#999');
        getInput(s8.ID);
	    });
	}); // end catch click event
	
/*	
// hiệu ứng khi select và chạy hàm getInput
function clickEvent (name) {
	goog.events.listen(name,['mousedown','touchstart'],function(e){
	    name.setFill('#3498db');
	    e.swallow(['mouseup','touchend','touchcancel'],function(e){
	        name.setFill('#999');
        getInput(name.ID);
	    });
	});
} // end effect

// catch click event
	goog.events.listen(s1,['mousedown','touchend'],function(e){
		clickEvent(s1);
	});
	
	goog.events.listen(s2,['click','touchend'],function(e){
		clickEvent(s2);
	});
	goog.events.listen(s3,['click','touchend'],function(e){
		clickEvent(s3);
	});
	goog.events.listen(s4,['click','touchend'],function(e){
		clickEvent(s4);
	});
	goog.events.listen(s5,['click','touchend'],function(e){
		clickEvent(s5);
	});
	goog.events.listen(s6,['click','touchend'],function(e){
		clickEvent(s6);
	});
	goog.events.listen(s7,['click','touchend'],function(e){
		clickEvent(s7);
	});
	goog.events.listen(s8,['click','touchend'],function(e){
		clickEvent(s8);
	});
	goog.events.listen(s9,['click','touchend'],function(e){
		clickEvent(s9);
	}); // end catch click event
*/
//var anim = new lime.animation.ColorTo('#c00').setDuration(2);

// auto select box to change color by the order in random array - not change color yet
function recolor () {
	var i;
	for (i=0; i< gameSeq.length;i++){
		var box = layer1.getChildAt(gameSeq[i]);
//		box.runAction(anim);		
	}
}; // end auto change color

// random số thứ tự của ô rồi lưu vào gameSeq array
	function getRandom () {
		var random = Math.floor((Math.random()*10));
		if (random > 8) {
			getRandom();
		} else {
			gameSeq.push(random);
			recolor();
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
