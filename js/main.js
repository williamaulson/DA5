window.onload = function() {
    // William Aulson
    // CS 325 Digital Assignment #5
    // The Price of Freedom
    
    "use strict";
    
    var game = new Phaser.Game( 1024, 576, Phaser.AUTO, 'game', { preload: preload, create: create, update: update } );
    
    function preload() {
        // Load assets
        game.load.image( 'avatar', 'assets/avatar.png' );
        game.load.image( 'back', 'assets/back.png' );
        game.load.image( 'circle', 'assets/circle.png' );
        game.load.image( 'square', 'assets/square.png' );
        game.load.image( 'rectangle', 'assets/rectangle.png' );
        game.load.image( 'info', 'assets/info.png' );
        game.load.image( 'endback', 'assets/endback.png' );
        game.load.audio('beat', 'assets/beat.mp3');
    }
    // variables
    var avatar;
    var mouseClick;
    var firstRun = true;
    var startTime = 0;
    var exitKey;
    var object1Group;
    var object2Group;
    var object3Group;
    var object4Group;
    var object5Group;
    var object6Group;
    var square;
    var rectangle;
    var circle;
    var spawnAmount = 3;
    var info;
    var textTimeStyle = { font: "30px Arial", fill: "#000000", align: "center" };
    var timeText;
    var gameRunning = true;
    var endText;
    var endBack;
    var safeStart = true;
    var immuneText;
    var beat;
    
    function create() //create assets
    {
    	    game.physics.startSystem(Phaser.Physics.ARCADE);
    	    game.world.setBounds(0, 0, 4096, 1152);
    	    game.add.sprite(0, 0, 'back');
    	    
    	    object1Group = game.add.group();
    	    game.physics.arcade.enable(object1Group);
    	    object2Group = game.add.group();
    	    game.physics.arcade.enable(object2Group);
    	    object3Group = game.add.group();
    	    game.physics.arcade.enable(object3Group);
    	    object4Group = game.add.group();
    	    game.physics.arcade.enable(object4Group);
    	    object5Group = game.add.group();
    	    game.physics.arcade.enable(object5Group);
    	    object6Group = game.add.group();
    	    game.physics.arcade.enable(object6Group);
    	    
    	    avatar = game.add.sprite(game.world.centerX, game.world.centerY, 'avatar');
    	    avatar.anchor.setTo( 0.5, 0.5 );
        
    	    game.physics.enable(avatar, Phaser.Physics.ARCADE);
    	    game.camera.follow(avatar);
        
    	    avatar.body.collideWorldBounds = true;
    	    var loop;
    	    for (loop = 0; loop < spawnAmount; loop = loop + 1)
    	    {
    	    	    square = object1Group.create(game.rnd.integerInRange(50, 4046), game.rnd.integerInRange(50, 1102), 'square');
    	    	    square.anchor.setTo(0.5, 0.5);
    	    	    square.angle = game.rnd.integerInRange(0, 359);
    	    	    game.physics.arcade.enable(square);
    	    	    game.add.tween(square).to( { angle: 720 }, game.rnd.integerInRange(1500, 5000), Phaser.Easing.Linear.None, true, 0, -1, false);
    	    	    game.add.tween(square.scale).to( { x: .1, y: .1 }, game.rnd.integerInRange(1500, 5000), Phaser.Easing.Linear.None, true, 0, -1, true);

    	    }
    	    for (loop = 0; loop < spawnAmount; loop = loop + 1)
    	    {
    	    	    square = object2Group.create(game.rnd.integerInRange(50, 4046), game.rnd.integerInRange(50, 1102), 'square');
    	    	    square.anchor.setTo(0.5, 0.5);
    	    	    square.angle = game.rnd.integerInRange(0, 359);
    	    	    game.physics.arcade.enable(square);
    	    	    game.add.tween(square).to( { angle: 720 }, game.rnd.integerInRange(1500, 5000), Phaser.Easing.Linear.None, true, 0, -1, false);
    	    	    game.add.tween(square.scale).to( { x: .1, y: .1 }, game.rnd.integerInRange(1500, 5000), Phaser.Easing.Linear.None, true, 0, -1, true);
    	    }
    	    for (loop = 0; loop < spawnAmount; loop = loop + 1)
    	    {
    	    	    rectangle = object3Group.create(game.rnd.integerInRange(50, 4046), game.rnd.integerInRange(50, 1102), 'rectangle');
    	    	    rectangle.anchor.setTo(0.5, 0.5);
    	    	    rectangle.angle = game.rnd.integerInRange(0, 359);
    	    	    game.physics.arcade.enable(rectangle);
    	    	    game.add.tween(rectangle).to( { angle: 720 }, game.rnd.integerInRange(1500, 5000), Phaser.Easing.Linear.None, true, 0, -1, false);
    	    	    game.add.tween(rectangle.scale).to( { x: .1, y: .1 }, game.rnd.integerInRange(1500, 5000), Phaser.Easing.Linear.None, true, 0, -1, true);
    	    }
    	    for (loop = 0; loop < spawnAmount; loop = loop + 1)
    	    {
    	    	    rectangle = object4Group.create(game.rnd.integerInRange(50, 4046), game.rnd.integerInRange(50, 1102), 'rectangle');
    	    	    rectangle.anchor.setTo(0.5, 0.5);
    	    	    rectangle.angle = game.rnd.integerInRange(0, 359);
    	    	    game.physics.arcade.enable(rectangle);
    	    	    game.add.tween(rectangle).to( { angle: 720 }, game.rnd.integerInRange(1500, 5000), Phaser.Easing.Linear.None, true, 0, -1, false);
    	    	    game.add.tween(rectangle.scale).to( { x: .1, y: .1 }, game.rnd.integerInRange(1500, 5000), Phaser.Easing.Linear.None, true, 0, -1, true);
    	    }
    	    for (loop = 0; loop < spawnAmount; loop = loop + 1)
    	    {
    	    	    circle = object5Group.create(game.rnd.integerInRange(50, 4046), game.rnd.integerInRange(50, 1102), 'circle');
    	    	    circle.anchor.setTo(0.5, 0.5);
    	    	    circle.angle = game.rnd.integerInRange(0, 359);
    	    	    game.physics.arcade.enable(circle);
    	    	    game.add.tween(circle).to( { angle: 720 }, game.rnd.integerInRange(1500, 5000), Phaser.Easing.Linear.None, true, 0, -1, false);
    	    	    game.add.tween(circle.scale).to( { x: .1, y: .1 }, game.rnd.integerInRange(1500, 5000), Phaser.Easing.Linear.None, true, 0, -1, true);
    	    }
    	    for (loop = 0; loop < spawnAmount; loop = loop + 1)
    	    {
    	    	    circle = object6Group.create(game.rnd.integerInRange(50, 4046), game.rnd.integerInRange(50, 1102), 'circle');
    	    	    circle.anchor.setTo(0.5, 0.5);
    	    	    circle.angle = game.rnd.integerInRange(0, 359);
    	    	    game.physics.arcade.enable(circle);
    	    	    game.add.tween(circle).to( { angle: 720 }, game.rnd.integerInRange(1500, 5000), Phaser.Easing.Linear.None, true, 0, -1, false);
    	    	    game.add.tween(circle.scale).to( { x: .1, y: .1 }, game.rnd.integerInRange(1500, 5000), Phaser.Easing.Linear.None, true, 0, -1, true);
    	    }
    	    info = game.add.sprite(game.rnd.integerInRange(3700, 4000), game.rnd.integerInRange(100, 400), 'info');
    	    game.physics.arcade.enable(info);
    	    game.add.tween(info).to( { angle: 720 }, 5000, Phaser.Easing.Linear.None, true, 0, -1, false);
    	    game.add.tween(info).to( { x: (info.x - game.rnd.integerInRange(200, 500)), y: (info.y + game.rnd.integerInRange(200, 500)) }, 5000, Phaser.Easing.Linear.None, true, 0, -1, true);
    	    timeText = game.add.text(15, 15, 'Time Left: ' + Math.floor(((60999 - (game.time.now - startTime)) / 1000) % 60), textTimeStyle);
    	    timeText.cameraOffset.x = 15;
    	    timeText.cameraOffset.y = 15;
    	    timeText.fixedToCamera = true;
    	    
    	    beat = game.add.audio('beat');
    	    beat.play('',0,0.1,true);
    	    
    	    game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
    	    game.input.onDown.add(fullScreenStart, this);
    	    game.paused = true;
    	    
    	    exitKey = game.input.keyboard.addKey(Phaser.Keyboard.ESC);
    }
    
    function fullScreenStart() //fullscreen and pause mode
    {
    	    if (firstRun) //prevent game from starting on first load
    	    {
    	    	    startTime = game.time.now;
    	    	    firstRun = false;
    	    	    immuneText = game.add.text(500, 15, 'Immune', textTimeStyle);
    	    	    immuneText.cameraOffset.x = 500;
    	    	    immuneText.cameraOffset.y = 15;
    	    	    immuneText.fixedToCamera = true;
    	    	    game.time.events.add(Phaser.Timer.SECOND * 3, killSafeStart, null);
    	    }
    	    game.scale.startFullScreen(true);
    	    game.paused = false;
    	    
    	   
    }
    
    function update() //run game logic
    {
    	    if (gameRunning)
    	    {
    	    	     timeText.setText('Time Left: ' + Math.floor(((60999 - (game.time.now - startTime)) / 1000) % 60));
    	    	     
    	    	     if ((Math.floor(((60999 - (game.time.now - startTime)) / 1000) % 60) <= 0) && safeStart === false)
    	    	     {
    	    	     	     killGame();
    	    	     }
    	    	     
    	    	     if (safeStart === false)
    	    	     {
    	    	     	     game.physics.arcade.overlap(avatar, object1Group, killGame, null, this);
    	    	     	     game.physics.arcade.overlap(avatar, object2Group, killGame, null, this);
    	    	     	     game.physics.arcade.overlap(avatar, object3Group, killGame, null, this);
    	    	     	     game.physics.arcade.overlap(avatar, object4Group, killGame, null, this);
    	    	     	     game.physics.arcade.overlap(avatar, object5Group, killGame, null, this);
    	    	     	     game.physics.arcade.overlap(avatar, object6Group, killGame, null, this);
    	    	     }
    	    	     
    	    	     game.physics.arcade.overlap(avatar, info, winGame, null, this);
    	    
    	    	     if (exitKey.isDown)
    	    	     {
    	    	     	     game.paused = true;
    	    	     	     game.scale.stopFullScreen(); 
    	    	     }
    	    
    	    	     object1Group.x = object1Group.x + game.rnd.integerInRange(-1, 1);
    	    	     object1Group.y = object1Group.y + game.rnd.integerInRange(-1, 1);
    	    	     object2Group.x = object2Group.x + game.rnd.integerInRange(-2, 2);
    	    	     object2Group.y = object2Group.y + game.rnd.integerInRange(-2, 2);
    	    	     object3Group.x = object3Group.x + game.rnd.integerInRange(-1, 1);
    	    	     object3Group.y = object3Group.y + game.rnd.integerInRange(-1, 1);
    	    	     object4Group.x = object4Group.x + game.rnd.integerInRange(-2, 2);
    	    	     object4Group.y = object4Group.y + game.rnd.integerInRange(-2, 2);
    	    	     object5Group.x = object5Group.x + game.rnd.integerInRange(-1, 1);
    	    	     object5Group.y = object5Group.y + game.rnd.integerInRange(-1, 1);
    	    	     object6Group.x = object6Group.x + game.rnd.integerInRange(-2, 2);
    	    	     object6Group.y = object6Group.y + game.rnd.integerInRange(-2, 2);
    	    
    	    
    	    	     if (game.input.activePointer.isDown)
    	    	     {
    	    	     	     avatar.rotation = game.physics.arcade.accelerateToPointer(avatar, this.game.input.activePointer, 200, 250, 250 );
    	    	     }
    	    }
    	
    }
    
    function killGame() //failed game
    {
    	    beat.stop();
    	    gameRunning = false;
    	    endBack = game.add.sprite(0, 0, 'endback');
    	    endText = game.add.text(450, 300, 'You died!', textTimeStyle);
    	    endText.cameraOffset.x = 450;
    	    endText.cameraOffset.y = 300;
    	    endText.fixedToCamera = true;
    }
    
    function winGame() //won game
    {
    	    beat.stop();
    	    gameRunning = false;
    	    endBack = game.add.sprite(0, 0, 'endback');
    	    endText = game.add.text(450, 300, 'You survived!', textTimeStyle);
    	    endText.cameraOffset.x = 450;
    	    endText.cameraOffset.y = 300;
    	    endText.fixedToCamera = true;
    }
    
    function killSafeStart() //keep player alive at start
    {
    	    immuneText.destroy();
    	    safeStart = false;
    }
};
