interface NumericConverter{
    convertNumber(number: number): void;
}

class NumberConvertion{
    private strategy: NumericConverter;

    constructor(strategy: NumericConverter){
        this.strategy = strategy;
    }

    execute(num: number): void{
        this.strategy.convertNumber(num);
    }
}


class NumberToCurrency implements NumericConverter{
    convertNumber(number: number): void {
        console.log(number.toLocaleString('id-ID', {
            minimumFractionDigits: 2,
            style: 'currency',
            currency: 'IDR'
        }));
    }
}

class NumberToDecimalSparator implements NumericConverter{
    convertNumber(number: number): void {
        console.log(number.toLocaleString('id-ID', {
            minimumFractionDigits: 2,
        }));
    }
}

class NumberToDate implements NumericConverter{
    convertNumber(number: number): void {
        console.log(new Date(number * 100).toUTCString());
    }
}

const mataUang = new NumberConvertion(new NumberToCurrency);
mataUang.execute(10000000);

const decimal = new NumberConvertion(new NumberToDecimalSparator);
decimal.execute(1000000);

const date = new NumberConvertion(new NumberToDate);
date.execute(10000);