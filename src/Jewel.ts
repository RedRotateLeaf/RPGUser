class Jewel{
  
    private level : jewelLevel;

    private hpBoostCoefficient = 0;

    private attackBoostCoefficient = 0;

    constructor(level : jewelLevel, hpBoostCoefficient : number, attackBoostCoefficient : number){

        this.level = level;
        this.hpBoostCoefficient = hpBoostCoefficient;
        this.attackBoostCoefficient = attackBoostCoefficient;

    }

    get hpBoost(){

        return this.hpBoostCoefficient * this.level;
    }

    get attackBoost(){

        return this.attackBoostCoefficient * this.level;
    }

    
    get fightPower(){

        return this.hpBoost * 300 + this.attackBoost * 500;
    }

    public show(){

        console.log("Jewel:");
        console.log("level:" + this.level);
        console.log("hpBoost:" + this.hpBoost);
        console.log("attackBoost:" + this.attackBoost);
        console.log("fightPower:" + this.fightPower);
    }
}