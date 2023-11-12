const {ccclass, property} = cc._decorator;
 
@ccclass
export default class NewClass extends cc.Component {
 
 
    // LIFE-CYCLE CALLBACKS:
    speed:number = 200;
    move:number = 0;
    score:number = 0;

    @property(cc.Label)
    label_score:cc.Label = null;

    @property(cc.SpriteFrame)
    black_ball : cc.SpriteFrame = null;

    @property(cc.SpriteFrame)
    golden_ball : cc.SpriteFrame = null;

    onCollisionEnter(otherCollider,selfCollider){
        if(otherCollider.name == "Rectangle<BoxCollider>" && selfCollider.name == "Ball<CircleCollider>"){
            if(this.score == 15){
                cc.director.loadScene('Level_4');
            }
            else cc.director.loadScene('Level_3');
        }
        if(otherCollider.name == "RectangleSplit<BoxCollider>" && selfCollider.name == "Ball<CircleCollider>"){
            if(this.score == 15){
                cc.director.loadScene('Level_4');
            }
            else cc.director.loadScene('Level_3');
        }
    }
 
    onLoad () {
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
            if(this.score == 15){
                cc.director.loadScene('Level_3');
            }
            this.node.setPosition(485,(-315 + Math.random() * 630));
            this.move = Math.random();
            this.score++;
            this.speed+=50;
        }

        if(this.score == 15){
            this.node.getComponent(cc.Sprite).spriteFrame = this.golden_ball;
            this.node.getChildByName("particlesystem").getComponent(cc.ParticleSystem).resetSystem();
        }

        
        this.label_score.string = this.score.toString();

    }
}
