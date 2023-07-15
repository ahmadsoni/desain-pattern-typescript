# Chain of Responsibility Pattern dalam TypeScript

Chain of Responsibility Pattern adalah salah satu desain pola perilaku (behavioral pattern) yang digunakan dalam pengembangan perangkat lunak. Pola ini memungkinkan serangkaian objek (handler) untuk menangani permintaan (request) secara berurutan, di mana setiap handler memutuskan apakah akan menangani permintaan tersebut atau meneruskannya ke handler berikutnya dalam rantai.

## Apa itu Chain of Responsibility Pattern?

Chain of Responsibility Pattern memungkinkan kita untuk membentuk rantai dari serangkaian objek handler, di mana setiap handler memiliki kemampuan untuk menangani permintaan atau meneruskannya ke handler berikutnya dalam rantai. Permintaan akan melewati handler secara berurutan sampai permintaan itu ditangani atau sampai akhir rantai.
untuk desain pattern yang berfungsi untuk melakukan chaining pada beberapa object biasa ini di gunakan untuk memvalidasi data secara terpisah.

## Mengapa menggunakan Chain of Responsibility Pattern?

Chain of Responsibility Pattern berguna ketika kita ingin memisahkan logika pemrosesan permintaan dari objek yang mengajukan permintaan. Pola ini memungkinkan fleksibilitas dalam menambahkan atau mengubah handler, serta memungkinkan beberapa objek untuk memiliki kesempatan untuk menangani permintaan.

## Contoh Implementasi dalam TypeScript

```typescript
interface Handler {
  setNext(handler: Handler): Handler;
  handleRequest(request: string): string;
}

abstract class AbstractHandler implements Handler {
  private nextHandler: Handler;

  setNext(handler: Handler): Handler {
    this.nextHandler = handler;
    return handler;
  }

  handleRequest(request: string): string {
    if (this.nextHandler) {
      return this.nextHandler.handleRequest(request);
    }

    return "";
  }
}

class ConcreteHandlerA extends AbstractHandler {
  handleRequest(request: string): string {
    if (request === "A") {
      return "ConcreteHandlerA menangani permintaan A";
    }

    return super.handleRequest(request);
  }
}

class ConcreteHandlerB extends AbstractHandler {
  handleRequest(request: string): string {
    if (request === "B") {
      return "ConcreteHandlerB menangani permintaan B";
    }

    return super.handleRequest(request);
  }
}

class ConcreteHandlerC extends AbstractHandler {
  handleRequest(request: string): string {
    if (request === "C") {
      return "ConcreteHandlerC menangani permintaan C";
    }

    return super.handleRequest(request);
  }
}

// Menggunakan Chain of Responsibility Pattern untuk menangani permintaan secara berurutan
const handlerA = new ConcreteHandlerA();
const handlerB = new ConcreteHandlerB();
const handlerC = new ConcreteHandlerC();

handlerA.setNext(handlerB).setNext(handlerC);

console.log(handlerA.handleRequest("B")); // Output: ConcreteHandlerB menangani permintaan B
console.log(handlerA.handleRequest("C")); // Output: ConcreteHandlerC menangani permintaan C
console.log(handlerA.handleRequest("D")); // Output: (tidak ada handler yang menangani permintaan D)
```

Dalam contoh di atas, kita memiliki antarmuka `Handler` yang mendefinisikan metode `setNext()` untuk mengatur handler berikutnya dan `handleRequest()` untuk menangani permintaan. Kemudian, kita memiliki kelas `AbstractHandler` yang mengimplementasikan antarmuka `Handler` dan menyediakan implementasi dasar untuk menangani permintaan.

Selanjutnya, kita memiliki beberapa kelas konkret `ConcreteHandlerA`, `ConcreteHandlerB`, dan `ConcreteHandlerC` yang mewarisi `AbstractHandler` dan mengimplementasikan metode `handleRequest()` untuk menangani permintaan tertentu.

Dalam contoh penggunaan Chain of Responsibility Pattern, kita membuat instance dari beberapa handler dan membentuk rantai dari handler tersebut menggunakan metode `setNext()`. Ketika `handleRequest()` dipanggil pada handler pertama (`handlerA`), permintaan akan melewati handler secara berurutan sampai ada handler yang menangani permintaan atau sampai akhir rantai.

Output yang dihasilkan akan menampilkan pesan yang menunjukkan handler mana yang menangani permintaan atau jika tidak ada handler yang dapat menangani permintaan tersebut.

Dengan menggunakan Chain of Responsibility Pattern, kita dapat memisahkan logika pemrosesan permintaan dari objek yang mengajukan permintaan. Pola ini memungkinkan fleksibilitas dalam menambahkan atau mengubah handler, serta memungkinkan beberapa objek untuk memiliki kesempatan untuk menangani permintaan.

Semoga penjelasan ini membantu dalam pemahaman Anda mengenai Chain of Responsibility Pattern dalam TypeScript!