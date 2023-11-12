const {ccclass, property} = cc._decorator;
 
@ccclass
export default class NewClass extends cc.Component {
 
 
    onLoad () {
 
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;

 
    }
 
    start () {
 
    }

 
    update (dt) {
        
    }
 
}