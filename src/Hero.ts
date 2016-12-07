class Hero{

    public isInteam : boolean = false;

    private baseHp = 0;

    private baseAttack = 0;

    private  level = 0;

    private  value = 0;

    private equipments : Equipment[] = [];

    private dirtyFlag = false;

    private fightPowerCache = null;

    private hpCache = null;

    private attackPowerCache = null;

    constructor(baseHp : number, baseAttack : number, value : number){

        this.level = 1;
        this.isInteam = true;
        this.baseAttack = baseAttack;
        this.baseHp = baseHp;
        this.value = value;

    }

    //@HpCache
    get hp(){

        var result = 0;
        this.equipments.forEach(e => result += e.hpBoost);
        return result + this.baseHp + (1 + 0.2 * this.value) * this.level;
    }

    //@attackCache
    get attack(){

        var result = 0;

        //将所有装备的攻击力累加
        this.equipments.forEach(e => result += e.attackBoost);
        return result + this.baseAttack + (1 + 0.3 * this.value) * this.level;
    }

    //@Cache
    get fightPower(){

        var result = 0;
        this.equipments.forEach(e => result += e.fightPower);
        return result + (this.hp * 300 + this.attack * 500) * 0.5;

    }

    public addEquipment(equipment : Equipment){

        this.equipments.push(equipment);
        this.dirtyFlag = true;

    }

    public show(){

        console.log("Hero:");
        console.log("level:" + this.level);
        console.log("value:" + this.value);
        console.log("attack:" + this.attack);
        console.log("hp:" + this.hp);
        console.log("fightPower:" + this.fightPower);
    }

}