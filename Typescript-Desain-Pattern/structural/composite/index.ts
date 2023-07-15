/*

    Computer
        PC
            Case
            Motherboard
            Processor's Fan
        Laptop
            Asus ROG
            Lonovo Idea Pad
        Peripheral
            HDD
                Seagate 1 TB
                WD 1 TB
            SSD
            Memory Ram
                DDR3
                DDR4
            keyboard
                Mechanical
                    Keychron
                    TechWare
                Standart
                    Logitech
*/

class Category{
    name: string;
    children: any[] = [];

    constructor(name: string){
        this.name = name;
    }
}

const computer = new Category('Computer');
console.log(computer);

computer.children = [
    new Category('PC').children =[
        new Category('Case'),
        new Category('Motherboard'),
    ]
]