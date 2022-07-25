// interface IUser{
//     firstName:string
//     lastName:string
//     birth:string
// }

// class Human {
//     height:number
//     country:string 
//     user:IUser
//     constructor(height:number , country:string , user:IUser){
//         this.country = country;
//         this.height =height;
//         console.log(this.user = user);
//     }
// }
// const newhuman:Human  = new Human(1.70,"indonezia",{firstName:"abay",lastName:"asaye",birth:"29/12/1995" })

// interface ICar{
//     brend:string;
//     doorNumbers:number;
//     wheelsNumber:number;
// }

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
    garg:string
    ownerName:string
    isTzadick:boolean
    newCarsArray:ICar[]
    constructor(city:string,country:string,storeName:string,carsArray:ICar[],garg:string,ownerName:string,newCarsArray:ICar[]){
        super(city,country,storeName,carsArray)
        this.city =
    }
}

// function genericFunc< T >(gen:T , num:number){
//     for(i = 0;i<num; i++){
//         console.log(gen)
//     }
// }
//  genericFunc <string> ("hello world",4 )


 function printGeneric < T ,W>(genString:T,genNum:W,someBool:boolean):T{
    return someBool? genString:let newgen:T  
 }
 console.log(printGeneric<string,number>("beautifull world",2022 ,true))

 class User<T> {
    id:T
    constructor(id:T){
        this.id = id;
    }
 }
 let newUser:User<boolean>= new User<boolean>(true)
 let newUser21:User<string>= new User<string>("true")
