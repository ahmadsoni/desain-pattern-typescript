# Command Pattern dalam TypeScript

Command Pattern adalah salah satu desain pola perilaku (behavioral pattern) yang digunakan dalam pengembangan perangkat lunak. Pola ini memungkinkan pemisahan antara pemintaan (request) dengan penerima permintaan (receiver), sehingga pemintaan dapat dikemas menjadi objek mandiri yang dapat dieksekusi, dibatalkan, atau dijadwalkan.

## Apa itu Command Pattern?

Command Pattern memungkinkan kita untuk mengenkapsulasi pemintaan sebagai objek, yang memisahkan pemintaan dari penerima atau penerimaan permintaan. Pola ini memungkinkan kita untuk membuat permintaan yang dapat dikemas menjadi objek mandiri, sehingga memungkinkan kita untuk melakukan berbagai operasi seperti eksekusi, pembatalan, atau penjadwalan permintaan.
atau commad pattern yang di gunakan untuk mengelompokkan beberapa method atau method tunggal untuk melakaukan perintah yang spesifik dan mirip seperti facade yang mana membuat class sendiri untuk melakukan bisnis logic spesifik dan komplek perbedaan nya terdapat pada untuk melakukan bisnis logic spesifik dan fokus pada satu tujuan.


## Mengapa menggunakan Command Pattern?

Command Pattern berguna ketika kita ingin memisahkan penerima permintaan dari pemintaan itu sendiri. Pola ini memungkinkan kita untuk memanipulasi pemintaan seperti objek mandiri yang dapat dikirim, dieksekusi, dibatalkan, atau dijadwalkan, sehingga memungkinkan fleksibilitas dalam memanipulasi pemintaan.

## Contoh Implementasi dalam TypeScript

```typescript
interface Command {
  execute(): void;
}

class Light {
  turnOn(): void {
    console.log("Lampu menyala.");
  }

  turnOff(): void {
    console.log("Lampu mati.");
  }
}

class LightOnCommand implements Command {
  private light: Light;

  constructor(light: Light) {
    this.light = light;
  }

  execute(): void {
    this.light.turnOn();
  }
}

class LightOffCommand implements Command {
  private light: Light;

  constructor(light: Light) {
    this.light = light;
  }

  execute(): void {
    this.light.turnOff();
  }
}

class RemoteControl {
  private onCommand: Command;
  private offCommand: Command;

  setOnCommand(command: Command): void {
    this.onCommand = command;
  }

  setOffCommand(command: Command): void {
    this.offCommand = command;
  }

  pressOnButton(): void {
    this.onCommand.execute();
  }

  pressOffButton(): void {
    this.offCommand.execute();
  }
}

// Menggunakan Command Pattern untuk mengenkapsulasi pemintaan sebagai objek
const lamp = new Light();
const onCommand = new LightOnCommand(lamp);
const offCommand = new LightOffCommand(lamp);

const remoteControl = new RemoteControl();
remoteControl.setOnCommand(onCommand);
remoteControl.setOffCommand(offCommand);

remoteControl.pressOnButton(); // Output: Lampu menyala.
remoteControl.pressOffButton(); // Output: Lampu mati.
```

Dalam contoh di atas, kita memiliki antarmuka `Command` yang mendefinisikan metode `execute()`. Kemudian, kita memiliki kelas `Light` yang bertindak sebagai penerima pemintaan dan memiliki metode `turnOn()` dan `turnOff()` untuk menyala dan mematikan lampu.

Selanjutnya, kita memiliki kelas-kelas `LightOnCommand` dan `LightOffCommand` yang mengimplementasikan antarmuka `Command`. Setiap kelas ini mewakili sebuah permintaan yang dapat menyalakan atau mematikan lampu.

Kelas `RemoteControl` bertindak sebagai pengontrol yang mengatur perintah-perintah yang diberikan kepada lampu. Pengontrol memiliki metode `setOnCommand()` dan `setOffCommand()` untuk mengatur perintah-perintah yang akan dieksekusi. Selain itu, pengontrol memiliki metode `pressOnButton()` dan `pressOffButton()` untuk mengeksekusi perintah-perintah yang telah diatur.

Dalam contoh penggunaan Command Pattern, kita menciptakan objek `Light` sebagai penerima pemintaan. Kemudian, kita menciptakan objek `LightOnCommand` dan `LightOffCommand` sebagai objek-objek perintah yang dapat dijalankan.

Selanjutnya, kita mengatur perintah-perintah yang telah dienkapsulasi pada pengontrol (`RemoteControl`). Ketika tombol "On" dan "Off" pada pengontrol ditekan, perintah-perintah tersebut dieksekusi sesuai dengan konfigurasi yang telah diatur.

Dengan menggunakan Command Pattern, kita dapat memisahkan penerima pemintaan dari pemintaan itu sendiri. Pola ini memungkinkan fleksibilitas dalam memanipulasi pemintaan seperti objek mandiri yang dapat dikirim, dieksekusi, dibatalkan, atau dijadwalkan.

Semoga penjelasan ini membantu dalam pemahaman Anda mengenai Command Pattern dalam TypeScript!