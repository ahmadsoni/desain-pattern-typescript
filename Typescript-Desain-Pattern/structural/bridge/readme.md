# Bridge Pattern dalam TypeScript

Bridge Pattern adalah salah satu desain pola struktural yang digunakan dalam pengembangan perangkat lunak. Pola ini memisahkan antarmuka (abstraksi) dari implementasinya sehingga keduanya dapat berubah secara independen tanpa bergantung satu sama lain.


## Apa itu Bridge Pattern?

Bridge Pattern memisahkan antarmuka (abstraksi) dari implementasinya dan memungkinkan keduanya untuk berevolusi secara independen. Pola ini memungkinkan fleksibilitas dalam menghubungkan hierarki kelas yang terkait, sehingga memungkinkan perubahan pada salah satu sisi tidak mempengaruhi sisi lainnya atau menghubungkan setclass yang memiliki karakteristik yang sama yang menghubungkan nya dengan interface utama.

## Mengapa menggunakan Bridge Pattern?

Bridge Pattern berguna ketika kita ingin memisahkan antarmuka dan implementasi dari kelas-kelas yang terkait. Pola ini bermanfaat ketika perubahan pada antarmuka atau implementasi tidak boleh mempengaruhi kelas lain yang terkait, atau ketika ada banyak variasi kombinasi antarmuka dan implementasi yang berbeda.

## Contoh Implementasi dalam TypeScript

```typescript
interface Implementor {
  operationImpl(): void;
}

class ConcreteImplementorA implements Implementor {
  operationImpl(): void {
    console.log("ConcreteImplementorA: Melakukan operasi.");
  }
}

class ConcreteImplementorB implements Implementor {
  operationImpl(): void {
    console.log("ConcreteImplementorB: Melakukan operasi.");
  }
}

abstract class Abstraction {
  protected implementor: Implementor;

  constructor(implementor: Implementor) {
    this.implementor = implementor;
  }

  abstract operation(): void;
}

class RefinedAbstraction extends Abstraction {
  operation(): void {
    console.log("RefinedAbstraction: Melakukan operasi.");
    this.implementor.operationImpl();
  }
}

// Menggunakan Bridge Pattern untuk menghubungkan antarmuka dan implementasi
const implementorA = new ConcreteImplementorA();
const abstractionA = new RefinedAbstraction(implementorA);
abstractionA.operation();

const implementorB = new ConcreteImplementorB();
const abstractionB = new RefinedAbstraction(implementorB);
abstractionB.operation();
```

Dalam contoh di atas, kita memiliki antarmuka `Implementor` yang mendefinisikan metode `operationImpl()` sebagai implementasi yang mendasarinya. Kemudian, kita memiliki kelas `ConcreteImplementorA` dan `ConcreteImplementorB` yang mengimplementasikan antarmuka `Implementor` dengan implementasi yang spesifik.

Selanjutnya, kita memiliki kelas abstrak `Abstraction` yang memiliki komposisi dengan objek `Implementor`. Kelas ini menyediakan antarmuka yang terpisah dari implementasinya melalui metode `operation()` yang akan diimplementasikan oleh kelas-kelas turunan.

Kelas `RefinedAbstraction` mewarisi `Abstraction` dan mengimplementasikan metode `operation()`. Dalam metode ini, kita memanggil metode `operationImpl()` dari objek `Implementor` untuk melakukan operasi yang sesuai.

Dalam contoh penggunaan Bridge Pattern, kita menggunakan Bridge untuk menghubungkan antarmuka dan implementasi. Kita membuat instance dari `ConcreteImplementorA` dan `ConcreteImplementorB` dan menggunakan `RefinedAbstraction` untuk menghubungkannya. Ketika `operation()` dipanggil pada `RefinedAbstraction`, operasi akan dilakukan dengan mengakses metode yang sesuai pada objek `Implementor`.

Dengan menggunakan Bridge Pattern, kita dapat memisahkan antarmuka dan implementasi dari kelas-kelas yang terkait dan memungkinkan mereka untuk berevolusi secara independen. Pola ini memberikan fleksibilitas dalam menghubungkan hierarki kelas yang terkait dan memudahkan perubahan pada salah satu sisi tanpa mempengaruhi sisi lainnya.

Semoga penjelasan ini membantu dalam pemahaman Anda mengenai Bridge Pattern dalam TypeScript!