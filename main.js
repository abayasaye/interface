var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Human = /** @class */ (function () {
    function Human(height, country, user) {
        this.country = country;
        this.height = height;
        console.log(this.user = user);
    }
    return Human;
}());
var newhuman = new Human(1.70, "indonezia", { firstName: "abay", lastName: "asaye", birth: "29/12/1995" });
var CarsStore = /** @class */ (function () {
    function CarsStore(city, country, storeName, carsArray) {
        this.city = city;
        this.country = country;
        this.storeName = storeName;
        this.carsArray = carsArray;
    }
    return CarsStore;
}());
console.log();
var newStore = new CarsStore("los angeles", "usa", "yoshida", [{ brend: "toyota", doorNumbers: 4, wheelsNumber: 4 }, { brend: "truck", doorNumbers: 2, wheelsNumber: 6 }, { brend: "tesla", doorNumbers: 4, wheelsNumber: 4 }]);
var Garag = /** @class */ (function (_super) {
    __extends(Garag, _super);
    function Garag(city, country, storeName, carsArray) {
        return _super.call(this, city, country, storeName, carsArray) || this;
    }
    return Garag;
}(CarsStore));
