# Proxy Pattern dalam TypeScript

Proxy Pattern adalah salah satu desain pola struktural yang digunakan dalam pengembangan perangkat lunak. Pola ini memungkinkan pembuatan objek penengah (proxy) untuk mengontrol akses ke objek asli, memungkinkan kita untuk menambahkan logika tambahan sebelum atau sesudah akses ke objek tersebut.

## Apa itu Proxy Pattern?

Proxy Pattern memungkinkan penggunaan objek penengah (proxy) untuk mengontrol akses ke objek asli. Proxy bertindak sebagai perantara antara klien dan objek asli, memungkinkan kita untuk menambahkan logika tambahan sebelum atau sesudah akses ke objek tersebut.
atau desai pattern terakhir pada structural desai pattern proxy ini digunakan sebagai penengah antara cosumer dengan class yang ingin di konsumsi constoh nya creditcard kalau seseorang tanpa bawa uang cash dapat memudahkan untuk mengambil uang, jadi creditcard bisa di gambarkan uang tetapi uang bukan uang sebenar

## Mengapa menggunakan Proxy Pattern?

Proxy Pattern berguna ketika kita ingin mengontrol akses atau melakukan tindakan tambahan sebelum atau sesudah akses ke objek asli. Pola ini memungkinkan kita untuk mengatur kebijakan akses, caching, atau validasi sebelum mengakses objek asli, tanpa harus mengubah objek asli itu sendiri.

## Contoh Implementasi dalam TypeScript

```typescript
interface Subject {
  request(): void;
}

class RealSubject implements Subject {
  request(): void {
    console.log("RealSubject: Memproses permintaan.");
  }
}

class Proxy implements Subject {
  private realSubject: RealSubject;

  request(): void {
    if (!this.realSubject) {
      this.realSubject = new RealSubject();
    }

    console.log("Proxy: Memproses permintaan sebelum memanggil RealSubject.");
    this.realSubject.request();
    console.log("Proxy: Memproses permintaan setelah memanggil RealSubject.");
  }
}

// Menggunakan Proxy Pattern untuk mengontrol akses ke objek asli
const proxy = new Proxy();
proxy.request();
```

Dalam contoh di atas, kita memiliki antarmuka `Subject` yang mendefinisikan metode `request()`. Kemudian, kita memiliki kelas `RealSubject` yang mengimplementasikan antarmuka `Subject` dan memiliki logika pemrosesan yang sesungguhnya.

Selanjutnya, kita memiliki kelas `Proxy` yang juga mengimplementasikan antarmuka `Subject`. Kelas ini bertindak sebagai perantara antara klien dan `RealSubject`. Dalam metode `request()` pada `Proxy`, kita melakukan tindakan tambahan sebelum dan setelah memanggil `RealSubject`.

Dalam contoh penggunaan Proxy Pattern, kita membuat instance dari `Proxy` dan menggunakan metode `request()` pada proxy. Ketika metode `request()` dipanggil pada proxy, proxy akan memproses tindakan tambahan sebelum dan setelah memanggil `RealSubject` untuk memenuhi permintaan.

Output yang dihasilkan akan menampilkan pesan yang menunjukkan logika tambahan yang dilakukan oleh proxy sebelum dan setelah memanggil objek asli.

Dengan menggunakan Proxy Pattern, kita dapat mengontrol akses atau menambahkan logika tambahan sebelum atau sesudah akses ke objek asli tanpa harus mengubah objek asli itu sendiri. Pola ini berguna dalam situasi di mana kita ingin menambahkan kebijakan akses, caching, atau validasi sebelum mengakses objek asli.

Semoga penjelasan ini membantu dalam pemahaman Anda mengenai Proxy Pattern dalam TypeScript!