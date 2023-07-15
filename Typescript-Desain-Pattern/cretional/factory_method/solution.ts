namespace SolutionFactory {
    interface Idelivery{
        qty: number;
        deliver(): void;
    }

    class Truck implements Idelivery {
        public qty: number;

        constructor(qty: number){
            this.qty = qty;
        }

        deliver(): void {
            console.log(`kirim barang sejumlah ${this.qty} menggunakan truk`)
        }
    }

    class Shipping implements Idelivery {
        public qty: number;

        constructor(qty: number){
            this.qty = qty;
        }

        deliver(): void {
            console.log(`kirim barang sejumlah ${this.qty} menggunakan kapal`)
        }
    }
    type LogisticType =  {
        type : string;
        qty: number;
    }

    interface Factory {
        create(options: LogisticType): Idelivery;
    }

    class LogisticFactory implements Factory {
        public create(options: LogisticType): Idelivery{
            if(options.type === 'delivery by land'){
                return new Truck(100);
            }else if (options.type == 'delivery by sea'){
                return new Shipping(100);
            }
            throw new ErrorEvent('class tidak di temukan');
        }
    }

    const logistic = new LogisticFactory();
    const byland = logistic.create({type: 'delivery by land', qty: 100})
    console.log(byland.deliver());
}