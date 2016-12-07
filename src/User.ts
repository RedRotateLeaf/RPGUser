var Cache: MethodDecorator = (target: any, propertyName, desc: PropertyDescriptor) => {

    const method = desc.value;

    desc.value = function () {

        //如果战斗力缓存存在并且flag不为脏，跳过获取战斗力的函数,直接使用缓存的战斗力
        if (this["fightPowerCache"] != null && this["dirtyFlag"] == false) {
          
            console.log("use cache");
            return target["fightPowerCache"];
        } 
        else {

            this["dirtyFlag"] = false;

            //得到战斗力缓存的值
            this["fightPowerCache"] = method.apply(this);
            return method.apply(this);
        }

    }
    return desc;
}


var HpCache: MethodDecorator = (target: any, propertyName, desc: PropertyDescriptor) => {

    const method = desc.value;

    desc.value = function () {

        if (this["hpCache"] != null && this["dirtyFlag"] == false) {
          
            console.log("use HpCache");
            return target["hpCache"];
        } 
        else {

            this["dirtyFlag"] = false;
            this["hpCache"] = method.apply(this);
            return method.apply(this);
        }

    }
    return desc;
}


var attackCache: MethodDecorator = (target: any, propertyName, desc: PropertyDescriptor) => {

    const method = desc.value;

    desc.value = function () {

        if (this["attackCache"] != null && this["dirtyFlag"] == false) {
          
            console.log("use attackCache");
            return target["attackCache"];
        } 
        else {

            this["dirtyFlag"] = false;
            this["attackCache"] = method.apply(this);
            return method.apply(this);
        }

    }
    return desc;
}



class User{

    gold = 0;

    undealGold = 0;

    currentExp = 0;

    level = 0;

    fightPowerCache = null;

    dirtyFlag = false;

    //User与Hero为聚合关系的表现
    heroes : Hero[] = [];

    constructor(){

        this.gold = 0;
        this.undealGold = 0;
        this.currentExp = 0;
        this.level = 0;

    }

    //基础数值写法
    //heroesInTeam : Hero[] = [];

    //高阶数值写法
    get heroesInTeam(){

        return this.heroes.filter(hero => hero.isInteam);
    }


    //@Cache
    get fightPower(){

        var result = 0;
        
        //forEach : 将数组中每个元素都执行
        this.heroesInTeam.forEach(hero => result += hero.fightPower);
        return result;
    }


    public addHero(hero : Hero){

        this.heroes.push(hero);
        this.dirtyFlag = true;

    }

    public show(){

        console.log("User:");
        console.log("level:" + this.level);
        console.log("currentExp：" + this.currentExp);
        console.log("undealGold:" + this.undealGold);
        console.log("gold:" + this.gold);
        console.log("fightPower:" + this.fightPower)
    }

}









//一级，二级，三级宝石
enum jewelLevel{

    one = 1,
    two = 2,
    three = 3
}

//装备品质分为绿装，蓝装，紫装，金装
enum equipmentQuality{

    green = 1,
    blue = 2,
    purple = 3,
    gold = 4
}

//英雄稀有度
enum heroValue{

    r = 1,
    sr = 2,
    ssr = 3
}


