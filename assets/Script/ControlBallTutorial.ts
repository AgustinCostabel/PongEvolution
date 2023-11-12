const {ccclass, property} = cc._decorator;
 
@ccclass
export default class NewClass extends cc.Component {
 
 
    // LIFE-CYCLE CALLBACKS:
    speed:number = 150;
    move:number = 0;
    score:number = 0;

    @property(cc.Label)
    label_score:cc.Label = null;
    @property(cc.Label)
    label_keys:cc.Label = null;

    @property(cc.SpriteFrame)
    black_ball : cc.SpriteFrame = null;

    @property(cc.SpriteFrame)
    golden_ball : cc.SpriteFrame = null;

    onCollisionEnter(otherCollider,selfCollider){
        if(otherCollider.name == "Rectangle<BoxCollider>" && selfCollider.name == "Ball<CircleCollider>"){
            if(this.score < 2){
                cc.director.loadScene('Level_Tutorial');
            }
            else cc.director.loadScene('Level_1');
        }
        if(otherCollider.name == "RectangleSplit<BoxCollider>" && selfCollider.name == "Ball<CircleCollider>"){
            if(this.score < 2){
                cc.director.loadScene('Level_Tutorial');
            }
            else cc.director.loadScene('Level_1');
        }
    }
 
    onLoad () {
        this.label_keys.string = "Dodge the ball Use Arrows to go Up and Down";
    }
 
    start () {
     this.move = Math.random();
    }
 
    update (dt) {
        this.node.setPosition(this.node.position.x -= this.speed*dt,this.node.position.y);

        if(this.node.y >= 315){
            this.move = 1;
        }
 
        if(this.node.y <= -315){
            this.move = 0;
        }
 
        if(this.move > 0.5){
            this.node.setPosition(this.node.position.x ,this.node.position.y-= this.speed*dt)
        }
 
        if(this.move < 0.5){
            this.node.setPosition(this.node.position.x ,this.node.position.y+= this.speed*dt)
        }

        if(this.node.x < -485){
            this.node.setPosition(485,(-315 + Math.random() * 630));
            this.move = Math.random();
            if (this.score == 2){
                cc.director.loadScene('Level_Tutorial');
            }
            this.score++;
        }

        if (this.score == 1){
            this.label_keys.string = "Use SPACE to Split";
        }

        if(this.score == 2){
            this.label_keys.string = "Hit the golden ball to win the level";
            this.node.getComponent(cc.Sprite).spriteFrame = this.golden_ball;
            this.node.getChildByName("particlesystem").getComponent(cc.ParticleSystem).resetSystem();
        }

        
        this.label_score.string = this.score.toString();

    }
}