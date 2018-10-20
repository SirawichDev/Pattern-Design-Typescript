var Showme = /** @class */ (function () {
    function Showme() {
        this.mapper = {};
    }
    Showme.prototype.setItem = function (key, item) {
        this.mapper[key] = item;
    };
    Showme.prototype.getItem = function (key) {
        return this.mapper[key];
    };
    Showme.prototype.clear = function () {
        this.mapper = {};
    };
    Showme.prototype.printMap = function () {
        for (var i in this.mapper) {
            console.log(" " + i + "-" + this.mapper[i]);
        }
    };
    return Showme;
}());
var show = new Showme();
show.setItem("xx", 3);
show.getItem("xx");
show.printMap();
show.clear();
show.printMap();
