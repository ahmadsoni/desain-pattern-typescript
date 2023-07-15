# Observer Pattern dalam TypeScript

Observer Pattern adalah salah satu desain pola perilaku (behavioral pattern) yang digunakan dalam pengembangan perangkat lunak. Pola ini memungkinkan objek-objek untuk mendaftarkan diri sebagai observer dan menerima notifikasi saat terjadi perubahan pada subjek (subject) yang diamati.

## Apa itu Observer Pattern?

Observer Pattern memungkinkan subjek (subject) untuk memiliki daftar observer (objek-objek yang diamati) yang akan menerima notifikasi ketika subjek mengalami perubahan. Pola ini memisahkan subjek dari observer, sehingga memungkinkan fleksibilitas dalam mengatur hubungan antara keduanya. atau memungkina sebuah object menotifikasi object lain ketika terjadi perubahan state.

## Mengapa menggunakan Observer Pattern?

Observer Pattern berguna ketika ada kebutuhan untuk menyampaikan perubahan yang terjadi pada subjek ke berbagai objek-objek lain tanpa harus mengetahui secara langsung siapa yang akan menerima notifikasi. Pola ini memungkinkan hubungan yang longgar antara subjek dan observer, sehingga mudah untuk menambahkan atau menghapus observer tanpa mempengaruhi subjek.

## Contoh Implementasi dalam TypeScript

```typescript
interface Observer {
  update(message: string): void;
}

class ConcreteObserver implements Observer {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  update(message: string): void {
    console.log(`${this.name} menerima pesan: ${message}`);
  }
}

class Subject {
  private observers: Observer[] = [];

  addObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  removeObserver(observer: Observer): void {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  notifyObservers(message: string): void {
    this.observers.forEach((observer) => observer.update(message));
  }
}

// Menggunakan Observer Pattern untuk mengamati perubahan pada subjek
const subject = new Subject();

const observer1 = new ConcreteObserver("Observer 1");
const observer2 = new ConcreteObserver("Observer 2");

subject.addObserver(observer1);
subject.addObserver(observer2);

subject.notifyObservers("Halo! Perubahan pertama."); 
// Output: Observer 1 menerima pesan: Halo! Perubahan pertama.
//         Observer 2 menerima pesan: Halo! Perubahan pertama.

subject.removeObserver(observer1);

subject.notifyObservers("Perubahan kedua."); 
// Output: Observer 2 menerima pesan: Perubahan kedua.
```

Dalam contoh di atas, kita memiliki antarmuka `Observer` yang mendefinisikan metode `update()` untuk menerima notifikasi dari subjek. Kemudian, kita memiliki kelas `ConcreteObserver` yang mengimplementasikan antarmuka `Observer`. Setiap objek observer memiliki nama untuk identifikasi.

Selanjutnya, kita memiliki kelas `Subject` yang berfungsi sebagai subjek yang diamati. Subjek memiliki daftar observer dan menyediakan metode `addObserver()` untuk menambahkan observer, `removeObserver()` untuk menghapus observer, dan `notifyObservers()` untuk memberitahu semua observer tentang perubahan yang terjadi pada subjek.

Dalam contoh penggunaan Observer Pattern, kita menciptakan subjek (`Subject`) dan beberapa observer (`ConcreteObserver`). Kemudian, kita menambahkan observer-observer tersebut ke dalam subjek dan mengirimkan notifikasi melalui subjek.

Output yang dihasilkan akan menampilkan pesan yang menunjukkan notifikasi yang diterima oleh observer saat subjek mengalami perubahan.

Dengan menggunakan Observer Pattern, kita dapat dengan mudah menyampaikan perubahan yang terjadi pada subjek ke berbagai objek observer tanpa harus mengetahui secara langsung siapa yang akan menerima notifikasi. Pola ini memungkinkan hubungan yang longgar antara subjek dan observer, sehingga mudah untuk menambahkan atau menghapus observer tanpa mempengaruhi subjek.

Semoga penjelasan ini membantu dalam pemahaman Anda mengenai Observer Pattern dalam TypeScript!