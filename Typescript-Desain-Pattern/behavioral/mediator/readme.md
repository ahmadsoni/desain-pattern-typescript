# Mediator Pattern dalam TypeScript

Mediator Pattern adalah salah satu desain pola perilaku (behavioral pattern) yang digunakan dalam pengembangan perangkat lunak. Pola ini memungkinkan komunikasi antara objek-objek yang kompleks dengan menggunakan objek mediator sebagai perantara. Mediator mengurangi ketergantungan langsung antara objek-objek dan memungkinkan mereka berkomunikasi secara terstruktur.

## Apa itu Mediator Pattern?

Mediator Pattern memungkinkan objek-objek yang kompleks berkomunikasi melalui objek mediator, bukan dengan saling berinteraksi secara langsung. Mediator bertindak sebagai perantara yang menghubungkan objek-objek tersebut dan mengurangi ketergantungan langsung antara mereka. atau sebuah pattern yang berfungsi sebagai mediator atau jembatan antar object atau class .

## Mengapa menggunakan Mediator Pattern?

Mediator Pattern berguna ketika kita memiliki sejumlah besar objek yang kompleks yang berinteraksi satu sama lain. Pola ini membantu mengurangi kompleksitas dan ketergantungan langsung antara objek-objek tersebut, sehingga memudahkan pemeliharaan dan pengembangan sistem.

## Contoh Implementasi dalam TypeScript

```typescript
interface Mediator {
  notify(sender: Colleague, event: string): void;
}

class ConcreteMediator implements Mediator {
  private colleague1: Colleague;
  private colleague2: Colleague;

  setColleague1(colleague: Colleague): void {
    this.colleague1 = colleague;
  }

  setColleague2(colleague: Colleague): void {
    this.colleague2 = colleague;
  }

  notify(sender: Colleague, event: string): void {
    if (sender === this.colleague1) {
      this.colleague2.receive(event);
    } else if (sender === this.colleague2) {
      this.colleague1.receive(event);
    }
  }
}

class Colleague {
  constructor(private mediator: Mediator) {}

  send(event: string): void {
    console.log(`Colleague mengirim pesan: ${event}`);
    this.mediator.notify(this, event);
  }

  receive(event: string): void {
    console.log(`Colleague menerima pesan: ${event}`);
  }
}

// Menggunakan Mediator Pattern untuk mengurangi ketergantungan langsung antara objek
const mediator = new ConcreteMediator();

const colleague1 = new Colleague(mediator);
const colleague2 = new Colleague(mediator);

mediator.setColleague1(colleague1);
mediator.setColleague2(colleague2);

colleague1.send("Pesan dari Colleague 1");
colleague2.send("Pesan dari Colleague 2");
```

Dalam contoh di atas, kita memiliki antarmuka `Mediator` yang mendefinisikan metode `notify()` untuk memberi tahu objek mediator saat ada peristiwa (event) dari objek colleague. Kemudian, kita memiliki kelas `ConcreteMediator` yang mengimplementasikan antarmuka `Mediator`. Kelas ini bertindak sebagai mediator yang mengatur hubungan antara objek colleague.

Selanjutnya, kita memiliki kelas `Colleague` yang berfungsi sebagai objek-objek kompleks yang berkomunikasi melalui mediator. Setiap objek colleague memiliki referensi ke objek mediator, sehingga mereka dapat mengirim dan menerima pesan melalui mediator.

Dalam contoh penggunaan Mediator Pattern, kita membuat instance dari mediator (`ConcreteMediator`) dan objek colleague (`Colleague`). Selanjutnya, kita mengatur hubungan antara objek colleague dan mediator menggunakan metode `setColleague1()` dan `setColleague2()`.

Ketika salah satu objek colleague mengirim pesan menggunakan metode `send()`, pesan tersebut akan diteruskan melalui mediator, yang kemudian memberi tahu objek colleague lainnya melalui metode `receive()`.

Output yang dihasilkan akan menampilkan pesan yang menunjukkan komunikasi antara objek colleague melalui mediator.

Dengan menggunakan Mediator Pattern, kompleksitas dan ketergantungan langsung antara objek-objek kompleks dapat dikurangi. Pola ini memungkinkan objek-objek berkomunikasi melalui mediator sebagai perantara, sehingga memudahkan pemeliharaan dan pengembangan sistem.

Semoga penjelasan ini membantu dalam pemahaman Anda mengenai Mediator Pattern dalam TypeScript!