# Factory Method Pattern dalam TypeScript

Factory Method Pattern adalah salah satu desain pola kreatif yang digunakan dalam pengembangan perangkat lunak. Pola ini memungkinkan pembuatan objek melalui metode pembuatan yang dipisahkan dalam kelas-kelas turunan, sehingga memungkinkan fleksibilitas dalam pembuatan objek tanpa mengungkapkan detail implementasi.

## Apa itu Factory Method Pattern?

Factory Method Pattern memisahkan pembuatan objek dari klien dengan menggunakan metode pembuatan yang abstrak dalam kelas-kelas turunan. Ini memungkinkan klien untuk membuat objek tanpa mengetahui detail implementasi dan tipe spesifik objek yang dibuat.
atau sebuah class atau sebuah method untuk membuat atau memproduksi class yang berberda-beda, namun memiliki interface yang sama.

## Mengapa menggunakan Factory Method Pattern?

Factory Method Pattern berguna ketika kita ingin membuat objek dengan beberapa variasi, tetapi tidak ingin klien bergantung pada implementasi spesifik objek tersebut. Pola ini memberikan fleksibilitas dalam pembuatan objek sesuai dengan kebutuhan saat itu.

## Contoh Implementasi dalam TypeScript

```typescript
interface Product {
  operation(): string;
}

class ConcreteProductA implements Product {
  operation(): string {
    return "Operation of ConcreteProductA";
  }
}

class ConcreteProductB implements Product {
  operation(): string {
    return "Operation of ConcreteProductB";
  }
}

abstract class Creator {
  abstract createProduct(): Product;

  someOperation(): string {
    const product = this.createProduct();
    return `Creator: ${product.operation()}`;
  }
}

class ConcreteCreatorA extends Creator {
  createProduct(): Product {
    return new ConcreteProductA();
  }
}

class ConcreteCreatorB extends Creator {
  createProduct(): Product {
    return new ConcreteProductB();
  }
}

// Menggunakan Factory Method untuk membuat objek
function client(creator: Creator) {
  const result = creator.someOperation();
  console.log(result);
}

// Contoh penggunaan Factory Method dengan ConcreteCreatorA
client(new ConcreteCreatorA()); // Output: "Creator: Operation of ConcreteProductA"

// Contoh penggunaan Factory Method dengan ConcreteCreatorB
client(new ConcreteCreatorB()); // Output: "Creator: Operation of ConcreteProductB"
```

Dalam contoh di atas, kita memiliki antarmuka `Product` yang mendefinisikan operasi yang dapat dilakukan oleh objek yang akan dibuat. Kemudian, kita memiliki kelas `ConcreteProductA` dan `ConcreteProductB` yang mengimplementasikan antarmuka `Product` dengan implementasi spesifik.

Selanjutnya, kita memiliki kelas `Creator` yang merupakan kelas abstrak yang memiliki metode abstrak `createProduct()` yang bertanggung jawab untuk membuat objek `Product`. Kelas `Creator` juga memiliki metode `someOperation()` yang menggunakan factory method untuk membuat objek dan melakukan operasi terkait.

Kemudian, kita memiliki kelas `ConcreteCreatorA` dan `ConcreteCreatorB` yang mewarisi `Creator` dan mengimplementasikan metode `createProduct()` untuk membuat objek `Product` yang sesuai.

Dalam fungsi `client`, kita menggunakan Factory Method untuk membuat objek dengan memanggil metode `someOperation()` dari creator yang diberikan. Ini memungkinkan kita untuk membuat objek tanpa mengetahui implementasi atau tipe spesifik objek tersebut.

Dengan menggunakan Factory Method Pattern, kita dapat membuat objek dengan variasi yang diinginkan tanpa mengungkapkan detail implementasi kepada klien. Pola ini memisahkan logika pembuatan objek dari klien, sehingga memberikan fleksibilitas dan memudahkan perluasan aplikasi.

Semoga penjelasan ini membantu dalam pemahaman Anda mengenai Factory Method Pattern dalam TypeScript!