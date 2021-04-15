var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    _parent: 'phaser-game',
    backgroundColor: '#efefef',
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('racetrack', 'assets/racetrack.png');
    this.load.image('car1', 'assets/car1.png');
    this.load.image('car2', 'assets/car2.png');
    this.load.image('car3', 'assets/car3.jpg');
    this.load.image('car4', 'assets/car4.jpg');
    this.load.image('car5', 'assets/car5.png');
}

function create ()
{
    var track = this.add.image(400, 300, 'racetrack');

    var car1 = this.add.sprite(200,200,'car1');
    car1.setScale(0.10);
    var car2 = this.add.sprite(200,500,'car2');
    car2.setScale(0.10);
    var car3 = this.add.sprite(100,100,'car3');
    car3.setScale(0.10);
    var car4 = this.add.sprite(500,450,'car4');
    car4.setScale(0.10);
    var car5 = this.add.sprite(450,400,'car5');
    car5.setScale(0.10);

    car1.setInteractive();
    car2.setInteractive();
    car3.setInteractive();
    car4.setInteractive();
    car5.setInteractive();

    this.input.setDraggable(car1);
    this.input.setDraggable(car2);
    this.input.setDraggable(car3);
    this.input.setDraggable(car4);
    this.input.setDraggable(car5); 

    this.input.on('drag', function (pointer, gameObject, dragX, dragY) {

        gameObject.x = dragX;
        gameObject.y = dragY;

    });
}