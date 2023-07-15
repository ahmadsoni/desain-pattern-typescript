# Creational Patterns

Creational Patterns, atau Pola Penciptaan dalam bahasa Indonesia, adalah kumpulan desain pola yang fokus pada proses pembuatan objek dan instansiasi kelas dalam sebuah sistem. Pola-pola ini memisahkan proses pembuatan objek dari klien yang menggunakannya, sehingga memungkinkan fleksibilitas dalam menciptakan objek tanpa harus bergantung pada kelas konkret.

Tujuan utama dari Creational Patterns adalah untuk menyembunyikan kompleksitas pembuatan objek dan memastikan bahwa prosesnya sesuai dengan kebutuhan aplikasi. Pola-pola ini membantu dalam memanipulasi instansiasi kelas, memastikan bahwa hanya satu instance dari kelas tertentu yang ada (Singleton), atau memungkinkan objek-objek dibuat dengan cara yang independen dari kelas aslinya (Factory Method).

Contoh Creational Patterns yang umum adalah:

1. **Factory Method**: Memungkinkan pembuatan objek dilakukan oleh metode pabrik yang didefinisikan dalam sebuah kelas.
2. **Singleton Pattern**: Memastikan hanya ada satu instance dari sebuah kelas yang dapat diakses dari seluruh aplikasi.
3. **Abstract Factory Pattern**: Menyediakan antarmuka untuk membuat sejumlah keluarga objek yang terkait atau tergantung tanpa harus menentukan kelas konkretnya.
4. **Builder Pattern**: Memisahkan konstruksi kompleks objek dari representasinya, sehingga memungkinkan berbagai representasi objek yang sama dibangun.
5. **Prototype Pattern**: Memungkinkan duplikasi objek dengan cara mengkloning objek yang sudah ada.

Dengan memahami dan menerapkan Creational Patterns, pengembang perangkat lunak dapat mengoptimalkan proses penciptaan objek dan memastikan fleksibilitas dalam pembuatan dan penggunaan objek-objek dalam aplikasi. Pola-pola ini membantu mengurangi ketergantungan langsung pada kelas konkret, sehingga memudahkan perubahan dan pengembangan kode dalam jangka panjang.

## Tabel Isi

1. [Creational Patterns](./readme.md)
   - [Factory Method](./factory_method/readme.md)
   - [Singleton Pattern](./singleton/readme.md)
   - [Abstract Factory Pattern](./factory_abstract/readme.md)
   - [Builder Pattern](./builder/readme.md)
   - [Prototype Pattern](./prototype/readme.md)