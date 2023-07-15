namespace CORSolution {
     class Product {
        name: string;
        price: number;
        weight: number;

        constructor(name: string, weight: number, price: number){
            this.price = price;
            this.name = name;
            this.weight = weight;
        }
    }

    interface IHandler{
        setNext(handler: IHandler): IHandler;
        handel(request: any): any;
    }

    abstract class AbstractProductHandler implements IHandler{
        private nextHandler: IHandler | null = null;

        public setNext(handler: IHandler): IHandler {
            this.nextHandler = handler;

            return handler;
        }

        handel(request: any) {
            if(this.nextHandler){
                return this.nextHandler.handel(request);
            }

            return request;
        }
    }

    class ProductNameHandler extends AbstractProductHandler{
        handel(request: any) {
            if(request.name.lenght > 20){
                return 'nama harus 20 karakter';
            }

            return super.handel(request);
        }
    }
    class ProductPriceHandler extends AbstractProductHandler{
        handel(request: any) {
            if(request.price > 1000000){
                 return 'harga harus di bawah 1 juta';
            }

            return super.handel(request);
        }
    }
    class ProductWeightHandler extends AbstractProductHandler{
        handel(request: any) {
            if(request.weight > 5){
                 return 'berat produk harus di bawah 5 kg'
            }

            return super.handel(request);
        }
    }

    const product = new Product('Sabun', 7, 2000000000);

    const nameHandler = new ProductNameHandler();
    const priceHandler = new ProductPriceHandler();
    const weightHandler = new ProductWeightHandler();

    nameHandler.setNext(priceHandler).setNext(weightHandler);
    console.log(nameHandler.handel(product));
}