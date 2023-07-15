# Decorator Pattern dalam TypeScript

Decorator Pattern adalah salah satu desain pola struktural yang digunakan dalam pengembangan perangkat lunak. Pola ini memungkinkan penambahan perilaku atau fungsi tambahan pada objek tanpa mengubah struktur dasar objek tersebut.

## Apa itu Decorator Pattern?

Decorator Pattern memungkinkan penambahan fitur tambahan pada objek dengan cara menggabungkan objek dengan dekorator yang sesuai. Pola ini memungkinkan fleksibilitas dalam menambahkan atau menghapus perilaku pada objek tanpa mengubah kelas dasar objek tersebut atau berfungsi untuk menambahkan beberapa fitur untuk object yang sudah AudioDestinationNode, bisa di bayangkan rumah sudah berdiri dan ingin menambahan decorasi yang lain

## Mengapa menggunakan Decorator Pattern?

Decorator Pattern berguna ketika kita ingin menambahkan fitur tambahan pada objek tanpa mengubah struktur dasar objek tersebut. Pola ini memungkinkan kita untuk dengan mudah menambahkan atau menghapus dekorator sesuai kebutuhan, dan memisahkan logika tambahan dari kelas dasar objek.

## Contoh Implementasi dalam TypeScript

```typescript
interface Component {
  operation(): string;
}

class ConcreteComponent implements Component {
  operation(): string {
    return "Operasi dasar.";
  }
}

abstract class Decorator implements Component {
  protected component: Component;

  constructor(component: Component) {
    this.component = component;
  }

  operation(): string {
    return this.component.operation();
  }
}

class ConcreteDecoratorA extends Decorator {
  operation(): string {
    return `Dekorator A | ${super.operation()}`;
  }
}

class ConcreteDecoratorB extends Decorator {
  operation(): string {
    return `Dekorator B | ${super.operation()}`;
  }
}

// Menggunakan Decorator Pattern untuk menambahkan fitur tambahan pada objek
const component = new ConcreteComponent();
const decoratorA = new ConcreteDecoratorA(component);
const decoratorB = new ConcreteDecoratorB(decoratorA);

console.log(decoratorB.operation());
```

Dalam contoh di atas, kita memiliki antarmuka `Component` yang mendefinisikan metode `operation()` yang akan diimplementasikan oleh kelas-kelas turunannya. Kemudian, kita memiliki kelas `ConcreteComponent` yang merupakan objek dasar yang mengimplementasikan `Component`.

Selanjutnya, kita memiliki kelas abstrak `Decorator` yang juga mengimplementasikan `Component`. Kelas ini memiliki komposisi dengan objek `Component` yang akan didekorasi. Dalam metode `operation()` pada `Decorator`, kita memanggil metode `operation()` pada komponen dasar dan menambahkan logika tambahan.

Kelas `ConcreteDecoratorA` dan `ConcreteDecoratorB` mewarisi `Decorator` dan mengimplementasikan metode `operation()`. Dalam metode ini, kita memanggil metode `operation()` pada objek dasar dan menambahkan teks tambahan sebelum atau sesudahnya.

Dalam contoh penggunaan Decorator Pattern, kita membuat instance dari `ConcreteComponent` dan menggunakan `ConcreteDecoratorA` dan `ConcreteDecoratorB` untuk mendekorasi objek tersebut. Setiap dekorator menambahkan fitur tambahan pada objek dengan memanggil `operation()` pada objek dasar dan menambahkan teks tambahan.

Dengan menggunakan Decorator Pattern, kita dapat menambahkan fitur tambahan pada objek dengan fleksibilitas, tanpa harus mengubah kelas dasar objek. Pola ini memungkinkan pemisahan logika tambahan dari kelas dasar objek dan memudahkan penambahan atau penghapusan dekorator sesuai kebutuhan.

Semoga penjelasan ini membantu dalam pemahaman Anda mengenai Decorator Pattern dalam TypeScript!