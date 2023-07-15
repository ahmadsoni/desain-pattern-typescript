/*
                                Store
                ProductType                      Price
Fashion(price)        Computer(price)    Cheap  Expensive   Medium
*/

interface Price {
    name: string;
    sellPrice(): string;
}

class Cheap implements Price{
    name: string = "murah";

    sellPrice(): string {
        return `jual harga ${this.name}`
    }
}
class Medium implements Price{
    name: string = "medium";

    sellPrice(): string {
        return `jual harga ${this.name}`
    }
}
class Expensive implements Price{
    name: string = "mahal";

    sellPrice(): string {
        return `jual harga ${this.name}`
    }
}

interface IProduct {
    name: string;
}
abstract class Product implements IProduct{
    name: string;
    price: Price;

    constructor(name: string, price: Price){
        this.name = name;
        this.price = price;
    }

    abstract sell(): string;
}

class Fashion extends Product{
    sell(): string{
        return `jual ${this.name} degan harga ${this.price.sellPrice()}`
    }
}

class Computer extends Product{
    sell(): string{
        return `jual ${this.name} dengan harga ${this.price.sellPrice()}`
    }
}


const fashionMurah = new Fashion("Reloac", new Cheap);
const computerExpensive = new Computer('Lenovo Book', new Expensive)
console.log(fashionMurah.sell());
console.log(computerExpensive.sell());
