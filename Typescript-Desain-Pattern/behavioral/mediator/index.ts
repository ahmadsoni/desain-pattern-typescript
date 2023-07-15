/*
    ojek1   ojek2   ojek3
            app
    penumpang1    penumpang2
*/

namespace Mediator{

    interface IProduct{
        name: string;
        sell(): void;
    }
    interface IMediator{
        registerProduct(product: IProduct): void;
        selAvailableStatus(status: boolean): void;
        isAvailable(): boolean;
    }
    
    class Product implements IProduct{
        name: string;
        mediator: IMediator;
    
        constructor(name: string, mediator: IMediator){
            this.name = name;
            this.mediator = mediator;
        }
        sell(): void {
            if(this.mediator.isAvailable){
                this.mediator.selAvailableStatus(false);
                console.log(`product ${this.name}`)
            }else {
                console.log(`product ini tidak di jual harus di daftar kan terlebih dahulu`)
            }
        }
    }
    class ProductMediator implements IMediator{
        product? : Product;
        status:boolean = false;
        registeredProduct(): void {
            if(this.status){
                console.log(this.product);
            } else {
                console.log('tidak ada product yang di jual');
            }
        }
        registerProduct(product: Product): void{
            if(this.status){
                console.log('tidak bisa mendaftarkan barang atau product karena masih ada product yang masih belum terjual');
            } else {
                this.status = true;
                console.log('product berhasil di daftarkan')
            }
        }

        selAvailableStatus(status: boolean): void {
            this.status = status;
        }

        isAvailable(): boolean {
            return this.status;
        }
    }

    const mediator = new ProductMediator();

    const product1 = new Product('sabun', mediator);
    const product2 = new Product('sampo', mediator);


    mediator.registerProduct(product1);
    mediator.registerProduct(product2);

    product1.sell();
    product2.sell();


    mediator.registeredProduct();
    mediator.registerProduct(product2);
    product2.sell();
    mediator.registeredProduct();
}