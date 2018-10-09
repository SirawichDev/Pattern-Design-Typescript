"use strict";
var Sentenses;
(function (Sentenses) {
    var Word;
    (function (Word) {
        function Charecter() {
            console.log("Hellow Cname");
        }
        Word.Charecter = Charecter;
    })(Word = Sentenses.Word || (Sentenses.Word = {}));
})(Sentenses || (Sentenses = {}));
