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
