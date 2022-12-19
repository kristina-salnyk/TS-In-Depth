namespace Utility {
    export namespace Fees {
        export function calculateLateFee(dayLate: number) {
            return dayLate * 0.25;
        }
    }

    export function maxBookAllowed(age: number): number {
        return age < 12 ? 3 : 10;
    }

    function privateFunc(): void {
        console.log('This is a private function');
    }
}
