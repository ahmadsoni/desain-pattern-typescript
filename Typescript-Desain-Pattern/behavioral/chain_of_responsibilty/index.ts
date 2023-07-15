/*
    1. nama < 20
    2. harga < 1jt
    3. berat < 5kg

*/

namespace COR {
    class Product {
        name: string;
        price: number;
        weight: number;

        constructor(name: string, weight: number, price: number){
            this.price = price;
            this.name = name;
            this.weight = weight;
        }

        validate() {
            if(this.name.length > 20){
                return 'nama harus 20 karakter';
            }

            if(this.price > 1000000){
                return 'harga harus di bawah 1 juta';
            }

            if(this.weight < 5){
                return 'berat produk harus di bawah 5 kg'
            }

            return this;
        }
    }

    const product = new Product('Sabun', 2500000, 2);
    console.log(product.validate());
}