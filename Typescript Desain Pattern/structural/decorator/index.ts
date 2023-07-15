interface IProduct{
    name: string;
    price: number;
    getProduct(): {name: string, price: number};
}

class Product implements IProduct{
        name: string;
        price: number;

        constructor(name: string, price: number){
            this.name = name;
            this.price = price;
        }

        getProduct(): { name: string; price: number; } {
            return {
                name: this.name,
                price: this.price,
            }
        }
}

const productA = new Product('A', 50000);
console.log(productA.getProduct());

const productAFromImport = object.assign(productA.getProduct(), {tax: 10000});
productAFromImport.price +=  20000;
console.log(productAFromImport);
