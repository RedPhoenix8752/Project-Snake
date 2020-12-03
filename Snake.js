class Snake{
    constructor(){
    this.x = 0;
    this.y = 0;
    this.snakeXPosition = [];
    this.snakeYPosition = [];
    this.XDirection = 0;
    this.YDirection = 0;
    this.tailcount = 1;
}
display(){
fill("green");
rect(300,480,20,20);
}

update(){
this.x += this.XDirection;
this.y += this.YDirection;
}
}