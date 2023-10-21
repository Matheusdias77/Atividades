let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");


context.beginPath();
context.rect(20, 20, 500, 300);
context.closePath();


context.clip();


context.fillStyle = "blue";
context.fillRect(20, 20, 500, 300);


context.beginPath();
context.strokeStyle = "red";
context.lineWidth = 20;
context.moveTo(20,22);
context.lineTo(640, 400);
context.closePath();
context.stroke();


context.beginPath();
context.strokeStyle = "white";
context.lineWidth = 20;
context.moveTo(37,10);
context.lineTo(670, 397);
context.closePath();
context.stroke();

context.beginPath();
context.strokeStyle = "white";
context.lineWidth = 20;
context.moveTo(15,40);
context.lineTo(640, 424);
context.closePath();
context.stroke();

context.beginPath();
context.strokeStyle = "red";
context.lineWidth = 20;
context.moveTo(-1500,1260);
context.lineTo(500, 20);
context.closePath();
context.stroke();


context.beginPath();
context.strokeStyle = "white";
context.lineWidth = 20;
context.moveTo(-1710,1400);
context.lineTo(520, 30);
context.closePath();
context.stroke();


context.beginPath();
context.strokeStyle = "white";
context.lineWidth = 20;
context.moveTo(-1760,1400);
context.lineTo(520, -16);
context.closePath();
context.stroke();


context.fillStyle = "red";
context.fillRect(240, 20, 50, 300);

context.fillStyle = "red";
context.fillRect(20, 150, 500, 50);

context.fillStyle = "white";
context.fillRect(20, 130, 220, 20);

context.fillStyle = "white";
context.fillRect(220, 20, 20, 110);

context.fillStyle = "white";
context.fillRect(20, 200, 220, 20);

context.fillStyle = "white";
context.fillRect(220, 210, 20, 110);

context.fillStyle = "white";
context.fillRect(290, 210, 20, 110);

context.fillStyle = "white";
context.fillRect(290, 200, 220, 20);

context.fillStyle = "white";
context.fillRect(290, 130, 220, 20);

context.fillStyle = "white";
context.fillRect(290, 20, 20, 110);
