

enchant();

window.onload = function() {
        var game = new Core(320, 320);

        //�l�p�`�̃N���X
        var Box = Class.create(PhyBoxSprite, {
                initialize: function(x, y) {
                        PhyBoxSprite.call(this, 32, 32, enchant.box2d.DYNAMIC_SPRITE, 1.0, 1.0, 0.4, true);
                        this.backgroundColor = "red";
                        this.x = x;
                        this.y = y;
                        game.rootScene.addChild(this);
                        this.ontouchstart = function() {
                                this.applyImpulse(new b2Vec2(15, -10));
                        }

                }
        });

        //���C�����[�v
        game.onload = function() {
                var world = new PhysicsWorld(0, 9.8);

                //���̍쐬
                var floor = new PhyBoxSprite(320, 16, enchant.box2d.STATIC_SPRITE, 0, 1.0, 0, false);
                floor.backgroundColor = "#aaa";
                floor.position = {
                        x: 160,
                        y: 312
                }
                game.rootScene.addChild(floor);

                //�ǂ̍쐬
                var floor = new PhyBoxSprite(16, 320, enchant.box2d.STATIC_SPRITE, 0, 0.2, 0.5, false);
                floor.backgroundColor = "#aaa";
                floor.position = {
                        x: 312,
                        y: 160
                }
                game.rootScene.addChild(floor);

                //�l�p�`�̕\��
                var box = new Box(50, 100);

                //�����G���W������
                game.rootScene.onenterframe = function() {
                        world.step(game.fps);
                }
        }

        game.start();

}

