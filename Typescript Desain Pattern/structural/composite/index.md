# Composite Pattern dalam TypeScript

Composite Pattern adalah salah satu desain pola struktural yang digunakan dalam pengembangan perangkat lunak. Pola ini memungkinkan pengelompokan objek-objek ke dalam struktur pohon sehingga dapat diperlakukan secara seragam sebagai objek individu atau sebagai koleksi objek.

## Apa itu Composite Pattern?

Composite Pattern memungkinkan objek-objek untuk dikelompokkan menjadi struktur pohon hierarkis, di mana objek individu dan koleksi objek dapat diperlakukan secara seragam. Pola ini memungkinkan klien untuk berinteraksi dengan objek individu maupun grup objek dengan cara yang konsisten atau bisa di sebut untuk menyelesaikan masalah di mana ada banyak anak cabang.

## Mengapa menggunakan Composite Pattern?

Composite Pattern berguna ketika kita ingin memperlakukan objek individu dan grup objek dengan cara yang seragam. Pola ini berguna ketika kita ingin membuat hierarki objek dengan kemampuan untuk menambah atau menghapus objek secara dinamis tanpa mempengaruhi interaksi dengan objek-objek lainnya.

## Contoh Implementasi dalam TypeScript

```typescript
interface Component {
  operation(): void;
}

class Leaf implements Component {
  operation(): void {
    console.log("Leaf: Melakukan operasi.");
  }
}

class Composite implements Component {
  private children: Component[] = [];

  add(component: Component): void {
    this.children.push(component);
  }

  remove(component: Component): void {
    const index = this.children.indexOf(component);
    if (index !== -1) {
      this.children.splice(index, 1);
    }
  }

  operation(): void {
    console.log("Composite: Melakukan operasi.");

    for (const child of this.children) {
      child.operation();
    }
  }
}

// Menggunakan Composite Pattern untuk mengelompokkan objek dalam struktur pohon
const leaf1 = new Leaf();
const leaf2 = new Leaf();

const composite = new Composite();
composite.add(leaf1);
composite.add(leaf2);

const root = new Composite();
root.add(composite);
root.operation();
```

Dalam contoh di atas, kita memiliki antarmuka `Component` yang mendefinisikan metode `operation()` yang akan diimplementasikan oleh kelas-kelas turunannya. Kemudian, kita memiliki kelas `Leaf` yang merupakan objek individu yang mengimplementasikan `Component`.

Selanjutnya, kita memiliki kelas `Composite` yang juga mengimplementasikan `Component`. Kelas ini memiliki kemampuan untuk menambahkan dan menghapus objek `Component` sebagai anak-anaknya. Dalam metode `operation()` pada `Composite`, kita melakukan operasi yang sesuai dan juga memanggil metode `operation()` pada setiap anak yang dimilikinya.

Dalam contoh penggunaan Composite Pattern, kita membuat instance dari `Leaf` dan `Composite`. Kita menambahkan `Leaf` ke dalam `Composite` menggunakan metode `add()`. Selanjutnya, kita membuat objek `Composite` lain sebagai akar (`root`) dan menambahkan `Composite` pertama sebagai anak.

Ketika `operation()` dipanggil pada `root`, operasi akan dilakukan pada `root` dan juga pada `Composite` anaknya serta `Leaf` yang ada di dalamnya. Dengan menggunakan Composite Pattern, kita dapat memperlakukan objek individu dan grup objek dengan cara yang seragam dan memanipulasi struktur pohon dengan fleksibilitas.

Semoga penjelasan ini membantu dalam pemahaman Anda mengenai Composite Pattern dalam TypeScript!