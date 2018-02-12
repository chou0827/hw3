background(255, 255, 0);

noFill();
stroke(255,0,10);
strokeWeight(20);
rect(150, 150, 40, 40);


ellipse(170, 170, 100, 100)
ellipse(170, 170, 150, 150)
ellipse(170, 170, 200, 200)
ellipse(170, 170, 250, 250)

stroke(255,0,100);
function draw () {

	for (var x = 10; x < 340; x = x + 20) {
  	  ellipse(330,x, 10, 10);
  		ellipse(10, x, 10, 10);
  		ellipse(x,10,10,10);
      ellipse(x,340,10,10);  
    fill(255);

    }}
 
 
