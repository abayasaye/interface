var Human = /** @class */ (function () {
    function Human(height, country, user) {
        this.country = country;
        this.height = height;
        console.log(this.user = user);
    }
    return Human;
}());
var newhuman = new Human(1.70, "indonezia", { firstName: "abay", lastName: "asaye", birth: "29/12/1995" });
