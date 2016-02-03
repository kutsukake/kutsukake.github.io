function setup() {
    createCanvas(800, 800);
    	var alphabet = {
    a:[
      {x:10, y:20},
      {x:20, y:30},
      {x:40, y:50}
    ],
    b:[
      {x:10, y:20},
      {x:20, y:30},
      {x:40, y:50}
    ],

    for (var i = 0; i < alphabet.a.length; i++) {
      console.log(i);
      ellipse(alphabet.a[i].x, alphabet.a[i].y, 10, 10);
    }

  }
  function draw(){
  	
  
  }

  }