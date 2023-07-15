// name     | brand
// -----------------
// mobil    | Deloran
// besi     | -
// roda     | -


interface BaseData {
    getData(): {
        name: string;
        brand: string;
    }
}

interface IProduct extends BaseData{
    name: string;
    brand: string;
}

interface IMaterial {
    name: string;
    qty: number;
}

class Product implements IProduct{
    name: string;
    brand: string;
    constructor(name: string, brand: string){
        this.brand = brand;
        this.name = name;
    }

    getData(): { name: string; brand: string; } {
        return{
            name : this.name,
            brand : this.brand,
        }
    }
}

class Material implements IMaterial{
    name: string;
    qty: number;
    constructor(name: string, qty: number){
        this.name = name;
        this.qty = qty;
    }

    getData():{name: string, qty: number} {
        return{
            name: this.name,
            qty: this.qty,
        }
    }
}

let list: any = [];
const product1 = new Product("mobil", "ferari");
list.push(product1.getData())
const product2 = new Product("mobil", "hubube");
list.push(product2.getData())

const material1 = new Material("besi", 10)
list.push(material1.getData())
const material2 = new Material("baja", 14)
list.push(material2.getData())

console.log(list);

// Cara ke satu
class MaterialAdapter implements BaseData{
    private adaptee: Material;
    constructor(adaptee: Material){
        this.adaptee = adaptee;
    }

    getData(): { name: string; brand: string; } {
        return{
            name: this.adaptee.name,
            brand: '',
        }
    }
}

let list2: any = [];
const product3 = new Product("mobil", "ferari");
list2.push(product3.getData())
const product4 = new Product("mobil", "hubube");
list2.push(product4.getData())

const material3 = new MaterialAdapter(new Material('besi', 10))
list2.push(material3.getData())
const material4 = new MaterialAdapter(new Material('baja', 11))
list2.push(material4.getData())

console.log(list2);


// Cara ke 2 jika tidak memiliki acuan

enum AdapterType {
    PRODUCT,
    MATERIAL
}

class DataAdapter implements BaseData{
    public name: string;
    public brand: string;
    public qty: number;
    public type: AdapterType;

    constructor({name = '', brand = '', qty = 0} = {}, type: AdapterType){
        this.name = name;
        this.brand = brand;
        this.qty = qty;
        this.type = type;
    }

    getData(): { name: string; brand: string; } {
       if(this.type == AdapterType.PRODUCT){
            const product = new Product(this.name, this.brand)
            return{
                name: product.name,
                brand: product.brand,
            }
       } else if (this.type == AdapterType.MATERIAL){
            const material = new Material(this.name, this.qty)
            return{
                name: material.name,
                brand: '',
            }
       }
       return {
            name: '',
            brand: '',
       }
    }
}

let list3: any = [];
const data1 = new DataAdapter({name: 'mobil', brand: "delore"}, AdapterType.PRODUCT);
list3.push(data1.getData());
const data2 = new DataAdapter({name: 'mobil', qty: 2}, AdapterType.MATERIAL);
list3.push(data2.getData());

console.log(list3);