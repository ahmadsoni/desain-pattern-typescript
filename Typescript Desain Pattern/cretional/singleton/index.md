# Singleton Pattern dalam TypeScript

Singleton Pattern adalah salah satu desain pola kreatif yang digunakan dalam pengembangan perangkat lunak. Pola ini memastikan bahwa hanya ada satu instance tunggal dari sebuah kelas yang dapat diakses secara global, sehingga memastikan bahwa akses terhadap instance tersebut konsisten.

## Apa itu Singleton Pattern?

Singleton Pattern memastikan bahwa hanya ada satu instance tunggal dari kelas tertentu dan menyediakan akses global ke instance tersebut. Pola ini berguna ketika kita ingin membatasi pembuatan instance dari sebuah kelas dan memastikan bahwa instance tersebut dapat diakses secara global. atau digunakan untuk membatasi object agar tidak di instansiasi lebih dari satu kali.

## Mengapa menggunakan Singleton Pattern?

Singleton Pattern berguna ketika kita hanya ingin ada satu instance tunggal dari kelas tertentu yang dapat diakses secara global. Ini berguna dalam kasus-kasus seperti manajemen konfigurasi, akses ke sumber daya bersama, atau ketika kita ingin membatasi pembuatan objek yang mahal dari segi sumber daya.

## Contoh Implementasi dalam TypeScript

```typescript
class Singleton {
  private static instance: Singleton;

  private constructor() {
    // Logika konstruktor privat
  }

  static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }

  // Metode lainnya
  // ...
}

// Menggunakan Singleton Pattern untuk mendapatkan instance
const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();

console.log(instance1 === instance2); // Output: true
```

Dalam contoh di atas, kita memiliki kelas `Singleton` yang memiliki konstruktor yang bersifat privat. Ini mencegah pembuatan instance langsung dari luar kelas. 

Kita juga memiliki metode statis `getInstance()` yang bertanggung jawab untuk membuat atau mengembalikan instance Singleton. Jika instance belum ada, metode `getInstance()` akan membuat instance baru; jika sudah ada, maka instance yang sudah ada akan dikembalikan.

Dengan menggunakan Singleton Pattern, kita dapat memastikan bahwa hanya ada satu instance Singleton yang tersedia dan dapat diakses secara global. Hal ini terlihat dalam contoh di mana kedua pemanggilan `getInstance()` mengembalikan instance yang sama, menunjukkan bahwa hanya ada satu instance yang dibuat.

Perlu dicatat bahwa implementasi Singleton dalam TypeScript tidak sepenuhnya melindungi dari pembuatan instance tambahan menggunakan metode refleksi atau akses langsung ke instance. Namun, Singleton Pattern masih berguna dalam kasus di mana kita ingin membatasi pembuatan instance dan mengakses instance secara global dengan konsistensi.

Semoga penjelasan ini membantu dalam pemahaman Anda mengenai Singleton Pattern dalam TypeScript!