const {ccclass, property} = cc._decorator;
 
@ccclass
export default class NewClass extends cc.Component {
    moveUp:number = 0;
    moveDown:number = 0;
    speed:number = 1000;

    // LIFE-CYCLE CALLBACKS:
    onCollisionEnter(otherCollider,selfCollider){
        if(otherCollider.name == "Ball<CircleCollider>" && selfCollider.name == "Rectangle<BoxCollider>"){
            this.node.destroy();
        }     
    }

    moveRectangle(event){
        switch(event.keyCode){
            case cc.macro.KEY.up:
                this.moveUp = 1;
                this.moveDown = 0;
                break;
            case cc.macro.KEY.down:
                this.moveDown = 1;
                this.moveUp = 0;
                break;
            case cc.macro.KEY.space:
                if(this.node.position.x < -500){
                    this.node.setPosition(-400, this.node.position.y);
                }
                else this.node.setPosition(-800, this.node.position.y);
                break;
        }
    }

    StopR(event){
        switch(event.keyCode){
            case cc.macro.KEY.up:
                this.moveUp = 0;
                break;
            case cc.macro.KEY.down:
                this.moveDown = 0;
                break;   
        }
    }

    onLoad () {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN,this.moveRectangle,this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP,this.StopR,this);
    }

    start () {
        
    }

    update (dt) {
        if(this.moveUp == 1){
            this.node.setPosition(this.node.position.x ,this.node.position.y+= this.speed*dt);
        }
        if(this.moveDown == 1){
            this.node.setPosition(this.node.position.x ,this.node.position.y-= this.speed*dt);
        }
        if(this.node.y > 195){
            this.node.setPosition(this.node.position.x ,195);
        }
        if(this.node.y < -195){
            this.node.setPosition(this.node.position.x ,-195);
        }
    }
}