interface IUser{
    firstName:string
    lastName:string
    birth:string
}

class Human {
    height:number
    country:string 
    user:IUser
    constructor(height:number , country:string , user:IUser){
        this.country = country;
        this.height =height;
        console.log(this.user = user);
    }
}
const newhuman:Human  = new Human(1.70,"indonezia",{firstName:"abay",lastName:"asaye",birth:"29/12/1995" })

interface ICar{
    brend:string;
    doorNumbers:number;
    wheelsNumber:number;
}

class CarsStore {
    city:string;
    country:string;
    storeName:string;
    carsArray:ICar[]
    constructor(city:string,country:string,storeName:string,carsArray:ICar[]){
        this.city = city;
        this.country=country;
        this.storeName=storeName;
        this.carsArray = carsArray;
    }

}
console.log(const newStore:CarsStore = new CarsStore("los angeles","usa","yoshida",[{brend:"toyota",doorNumbers:4,wheelsNumber:4},{brend:"truck",doorNumbers:2,wheelsNumber:6},{brend:"tesla",doorNumbers:4,wheelsNumber:4}]))

class Garag extends CarsStore {
    constructor(city:string,country:string,storeName:string,carsArray:ICar[]){
        super(city,country,storeName,carsArray)
        
    }
}