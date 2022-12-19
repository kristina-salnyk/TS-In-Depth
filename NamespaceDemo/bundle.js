var Utility;
(function (Utility) {
    var Fees;
    (function (Fees) {
        function calculateLateFee(dayLate) {
            return dayLate * 0.25;
        }
        Fees.calculateLateFee = calculateLateFee;
    })(Fees = Utility.Fees || (Utility.Fees = {}));
    function maxBookAllowed(age) {
        return age < 12 ? 3 : 10;
    }
    Utility.maxBookAllowed = maxBookAllowed;
    function privateFunc() {
        console.log('This is a private function');
    }
})(Utility || (Utility = {}));
/// <reference path="utility-functions.ts" />
var result = Utility.maxBookAllowed(30);
console.log(result);
var util = Utility.Fees;
var result2 = util.calculateLateFee(10);
console.log(result2);
