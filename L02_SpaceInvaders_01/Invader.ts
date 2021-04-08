namespace L02_SpaceInvaders_01 {

    export class Invader extends FudgeCore.Node {
        constructor(_x: number, _y: number) {
            super("Invader" + (_x + _y * 11));
        }
    }
}