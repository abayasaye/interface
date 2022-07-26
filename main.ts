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

// interface ICar {
//     brend: string;
//     doorNumbers: number;
//     wheelsNumber: number;
// }
// let newCar: ICar = { brend: "toyota", doorNumbers: 4, wheelsNumber: 4 }
// let newCar1: ICar = { brend: "truck", doorNumbers: 2, wheelsNumber: 6 }
// let newCar2: ICar = { brend: "tesla", doorNumbers: 4, wheelsNumber: 4 }

// class CarsStore {
//     city: string;
//     country: string;
//     storeName: string;
//     carsArray: ICar[]
//     constructor(city: string, country: string, storeName: string, carsArray: ICar[]) {
//         this.city = city;
//         this.country = country;
//         this.storeName = storeName;
//         this.carsArray = carsArray;
//     }
//     getDtailes() {
//         return `${this.city}${this.country}${this.storeName}${this.carsArray}`
//     }
// }
// let newStore: CarsStore = new CarsStore("los angeles", "usa", "yoshida", [{ brend: "toyota", doorNumbers: 4, wheelsNumber: 4 },{ brend: "truck", doorNumbers: 2, wheelsNumber: 6 },{ brend: "tesla", doorNumbers: 4, wheelsNumber: 4 }])
// console.log(newStore)

// class Garag {
//     garg: string
//     ownerName: string
//     isTzadick: boolean
//     newCarsArray: ICar[]
//     constructor(garg: string, ownerName: string, isTzadick: boolean, newCarsArray: ICar[]) {
//         this.garg = garg;
//         this.ownerName = ownerName;
//         this.isTzadick = isTzadick;
//         this.newCarsArray = newCarsArray;
//     }
//     getGargDetiels() {
//         return `${this.garg}${this.ownerName}${this.isTzadick}${this.newCarsArray}`

//     }
// }

// let newGarag: Garag = new Garag("canda", "tornto", true, [{ brend: "toyota", doorNumbers: 4, wheelsNumber: 4 },{ brend: "truck", doorNumbers: 2, wheelsNumber: 6 },{ brend: "tesla", doorNumbers: 4, wheelsNumber: 4 }])
// console.log(newGarag)



// function genericFunc< T >(gen:T , num:number){
//     for(let i = 0;i<num; i++){
//         console.log(gen)
//     }
// }
//  genericFunc <string> ("hello world",4 )

// function printGeneric <T,W>(genString:T,genNum:W,someBool:boolean):T{
//     let newGen:T = "abay"
//    return someBool?genString:newGen;
// }
// console.log(printGeneric<string,number>("beautifull world",2022 ,false))
//  class User<T> {
//     id:T
//     constructor(id:T){
//         this.id = id;
//     }
//  }
//  let newUser:User<boolean>= new User<boolean>(true)
//  let newUser21:User<string>= new User<string>("true")
