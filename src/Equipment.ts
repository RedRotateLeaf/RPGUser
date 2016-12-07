class Equipment{

    private jewels : Jewel[] = [];

    private quality : equipmentQuality;

    private baseAttack = 0;

    private baseHp = 0;

    private fightPowerCache = null;

    private dirtyFlag = false;

    private hpCache = null;

    private attackPowerCache = null;

    constructor(quality : equipmentQuality, baseAttack : number, baseHp : number){

        this.quality = quality;
        this.baseAttack = baseAttack;
        this.baseHp = baseHp;
    }


    //@attackCache
    get attackBoost(){

        var result = 0;
        this.jewels.forEach(e => result += e.attackBoost);
        return result + (this.quality * 20) + this.baseAttack;
    }

    //@HpCache
    get hpBoost(){

        var result = 0;
        this.jewels.forEach(e => result += e.hpBoost);
        return result + (this.quality * 10) + this.baseHp;
    }

    //@Cache
    get fightPower(){

        var result = 0;
        this.jewels.forEach(e => result += e.fightPower);       
        return result + (this.hpBoost * 300 + this.attackBoost * 500) * 0.8;

    }

    public addJewel(jewel : Jewel){

        this.jewels.push(jewel);
        this.dirtyFlag = true;

    }

    public show(){

        console.log("Equipment:");
        console.log("level:" + this.quality);
        console.log("hpBoost:" + this.hpBoost);
        console.log("attackBoost:" + this.attackBoost);
        console.log("fightPower:" + this.fightPower);
    }

}