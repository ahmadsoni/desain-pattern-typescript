class Truck {
    private qty: number;

    constructor(qty: number){
        this.qty = qty;
    }

    deliver(): void {
        console.log(`kirim barang sejumlah ${this.qty} menggunakan truk`)
    }
}

class Shipping {
     private qty: number;

    constructor(qty: number){
        this.qty = qty;
    }

    deliver(): void {
        console.log(`kirim barang sejumlah ${this.qty} menggunakan kapal`)
    }
}

const type = 'delivery by land'
if(type == 'delivery by land'){
    new Truck(100);
} else if (type == 'delivery by land'){
    new Shipping(100);
}