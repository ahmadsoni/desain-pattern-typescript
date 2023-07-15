# Adapter Pattern dalam TypeScript

Adapter Pattern adalah salah satu desain pola struktural yang digunakan dalam pengembangan perangkat lunak. Pola ini memungkinkan objek dengan antarmuka yang tidak kompatibel bekerja bersama dengan mengubah antarmuka objek tersebut menjadi antarmuka yang diharapkan atau menjadikan sebuah object dapat beradaptasi dengan object lain yang memiliki antarmuka yang tidak kompatibel.

## Apa itu Adapter Pattern?

Adapter Pattern memungkinkan objek dengan antarmuka yang tidak kompatibel untuk bekerja bersama dengan objek lain dengan mengubah antarmuka objek tersebut menjadi antarmuka yang diharapkan. Pola ini berfungsi sebagai penghubung antara dua kelas yang tidak dapat berinteraksi langsung karena perbedaan antarmuka.

## Mengapa menggunakan Adapter Pattern?

Adapter Pattern berguna ketika kita memiliki dua kelas yang memiliki antarmuka yang tidak kompatibel dan ingin menghubungkannya agar dapat berinteraksi. Pola ini menghindari perubahan langsung pada kode sumber asli dan memungkinkan kelas-kelas yang sudah ada dapat bekerja bersama tanpa harus mengetahui implementasi satu sama lain.

## Contoh Implementasi dalam TypeScript

```typescript
interface Target {
  request(): void;
}

class Adaptee {
  specificRequest(): void {
    console.log("Adaptee: Menjalankan permintaan spesifik.");
  }
}

class Adapter implements Target {
  private adaptee: Adaptee;

  constructor(adaptee: Adaptee) {
    this.adaptee = adaptee;
  }

  request(): void {
    console.log("Adapter: Meneruskan permintaan ke Adaptee.");
    this.adaptee.specificRequest();
  }
}

// Menggunakan Adapter Pattern untuk menghubungkan objek yang tidak kompatibel
const adaptee = new Adaptee();
const adapter = new Adapter(adaptee);

adapter.request();
```

Dalam contoh di atas, kita memiliki antarmuka `Target` yang mendefinisikan metode `request()` yang diharapkan oleh klien. Kemudian, kita memiliki kelas `Adaptee` yang memiliki metode `specificRequest()` yang antarmukanya tidak kompatibel dengan `Target`.

Selanjutnya, kita memiliki kelas `Adapter` yang mengimplementasikan antarmuka `Target` dan memiliki komposisi dengan objek `Adaptee`. Dalam metode `request()` pada `Adapter`, kita mengubah pemanggilan ke metode `specificRequest()` pada objek `Adaptee` sehingga sesuai dengan antarmuka yang diharapkan oleh `Target`.

Dalam contoh penggunaan Adapter, kita membuat instance dari `Adaptee` dan menggunakan `Adapter` untuk menghubungkan `Adaptee` dengan `Target`. Ketika `request()` dipanggil pada `Adapter`, permintaan diteruskan ke `Adaptee` melalui metode `specificRequest()`.

Dengan menggunakan Adapter Pattern, kita dapat menghubungkan objek yang memiliki antarmuka yang tidak kompatibel dengan objek lain dengan mengubah antarmuka objek tersebut menjadi antarmuka yang diharapkan. Pola ini memungkinkan kelas-kelas yang tidak dapat berinteraksi langsung dapat bekerja bersama dengan lancar.

Semoga penjelasan ini membantu dalam pemahaman Anda mengenai Adapter Pattern dalam TypeScript!