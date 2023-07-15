# Factory Abstract Pattern dalam TypeScript

Factory Abstract Pattern adalah salah satu desain pola kreatif yang digunakan dalam pengembangan perangkat lunak. Pola ini memungkinkan pembuatan objek dari keluarga atau kumpulan yang terkait secara logis, tanpa mengungkapkan implementasi spesifik objek tersebut.

## Apa itu Factory Abstract Pattern?

Factory Abstract Pattern memisahkan pembuatan objek dari klien dengan menggunakan metode pembuatan yang abstrak. Ini memungkinkan klien untuk membuat objek tanpa mengetahui detail implementasi dan tipe spesifik objek yang dibuat.
atau mirip dengan factory method bekerja sebagai super factory untuk membuat factory yang lain kalau yang factory method membuat objek dari factory kalau abstract factory membuat factory dari abstract factory.


## Mengapa menggunakan Factory Abstract Pattern?

Factory Abstract Pattern berguna ketika kita ingin membuat objek yang terkait secara logis, tetapi detail implementasinya bervariasi tergantung pada situasi atau kondisi tertentu. Ini memungkinkan fleksibilitas dalam membuat objek yang sesuai dengan kebutuhan saat itu.

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

abstract class AbstractFactory {
  abstract createProduct(): Product;
}

class ConcreteFactoryA extends AbstractFactory {
  createProduct(): Product {
    return new ConcreteProductA();
  }
}

class ConcreteFactoryB extends AbstractFactory {
  createProduct(): Product {
    return new ConcreteProductB();
  }
}

// Menggunakan Abstract Factory untuk membuat objek
function client(factory: AbstractFactory) {
  const product = factory.createProduct();
  const result = product.operation();
  console.log(result);
}

// Contoh penggunaan Abstract Factory dengan ConcreteFactoryA
client(new ConcreteFactoryA()); // Output: "Operation of ConcreteProductA"

// Contoh penggunaan Abstract Factory dengan ConcreteFactoryB
client(new ConcreteFactoryB()); // Output: "Operation of ConcreteProductB"
```

Dalam contoh di atas, kita memiliki antarmuka `Product` yang mendefinisikan operasi yang dapat dilakukan oleh objek yang akan dibuat. Kemudian, kita memiliki kelas `ConcreteProductA` dan `ConcreteProductB` yang mengimplementasikan antarmuka `Product` dengan implementasi spesifik.

Selanjutnya, kita memiliki kelas `AbstractFactory` yang merupakan kelas abstrak yang mendefinisikan metode abstrak `createProduct()`. Kelas ini digunakan untuk membuat objek `Product` secara abstrak tanpa mengekspos detail implementasi spesifik.

Kemudian, kita memiliki kelas `ConcreteFactoryA` dan `ConcreteFactoryB` yang mewarisi `AbstractFactory` dan mengimplementasikan metode `createProduct()` untuk membuat objek `Product` yang sesuai.

Dalam fungsi `client`, kita menggunakan Abstract Factory untuk membuat objek dengan memanggil metode `createProduct()` dari factory yang diberikan. Ini memungkinkan kita untuk membuat objek tanpa mengetahui implementasi atau tipe spesifik objek tersebut.

Dengan menggunakan Factory Abstract Pattern, kita dapat membuat objek yang terkait secara logis, tetapi fleksibel dalam memilih implementasi spesifik berdasarkan kondisi atau situasi tertentu.

Semoga penjelasan ini membantu dalam pemahaman Anda mengenai Factory Abstract Pattern dalam TypeScript!