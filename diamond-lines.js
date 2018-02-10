for (var i = 0; i <= 170; i = i + 10) {
  var startX = 170+i;
  var startY = i;
  var endX = 170-i;
  var endY = i;
  line(startX, startY, endX, endY);
  line(i,170+i ,340-i,170+i);
}
