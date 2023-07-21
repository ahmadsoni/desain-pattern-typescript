# Strategy Pattern

Strategy Pattern adalah salah satu dari Behavioral Patterns yang bertujuan untuk memungkinkan objek mengubah algoritma atau perilakunya secara dinamis. Pola ini memungkinkan pemisahan algoritma dari objek yang menggunakannya, sehingga objek dapat memilih algoritma yang sesuai tanpa perlu mengubah struktur atau implementasi objek itu sendiri.

## Pengertian

Dalam Strategy Pattern, sebuah objek (konteks) dapat menggunakan berbagai algoritma (strategies) yang berbeda, tergantung pada kondisi atau kebutuhan yang berubah-ubah. Pola ini memungkinkan penggunaan algoritma dapat dilakukan secara fleksibel dan dinamis tanpa menyandarkan implementasi algoritma ke objek utama. Strategi-algoritma disediakan dalam bentuk kelas-kelas yang terpisah, yang memungkinkan perubahan strategi dengan mudah tanpa mengubah objek utama. atau startegy desaiin pattern di gunakan untuk menentukan algoritma yang cocok dan hampir mirip dengan state pattern perbedaan jika pada state menentukan state mana yang sedang di assign jika di strategy bagaimana object melakukan itu melakukan sebuah operasi atau algoritma secara tepat.

## Keuntungan

- **Fleksibilitas**: Objek dapat mengganti algoritma yang digunakan secara dinamis saat runtime tanpa mempengaruhi struktur atau implementasi objek.
- **Pemisahan Concern**: Strategy Pattern memisahkan algoritma dari objek utama, sehingga memisahkan perhatian (concern) antara penggunaan algoritma dengan algoritma itu sendiri.
- **Kode yang Lebih Bersih**: Kode menjadi lebih bersih, terstruktur, dan terpisah, karena algoritma diimplementasikan dalam kelas-kelas terpisah.

## Contoh Implementasi dengan TypeScript

Misalkan kita memiliki objek `Payment` yang dapat melakukan pembayaran dengan dua metode berbeda, yaitu `CreditCardPayment` dan `PaypalPayment`. Berikut adalah contoh implementasi Strategy Pattern menggunakan TypeScript:

```typescript
// Strategy Interface
interface PaymentStrategy {
  pay(amount: number): void;
}

// Concrete Strategies
class CreditCardPayment implements PaymentStrategy {
  pay(amount: number): void {
    console.log(`Membayar dengan kartu kredit sebesar ${amount} dollar.`);
  }
}

class PaypalPayment implements PaymentStrategy {
  pay(amount: number): void {
    console.log(`Membayar dengan Paypal sebesar ${amount} dollar.`);
  }
}

// Context Class
class Payment {
  private paymentStrategy: PaymentStrategy;

  constructor(paymentStrategy: PaymentStrategy) {
    this.paymentStrategy = paymentStrategy;
  }

  setPaymentStrategy(paymentStrategy: PaymentStrategy): void {
    this.paymentStrategy = paymentStrategy;
  }

  performPayment(amount: number): void {
    this.paymentStrategy.pay(amount);
  }
}

// Penggunaan Strategy Pattern
const creditCardPayment = new CreditCardPayment();
const paypalPayment = new PaypalPayment();

const payment = new Payment(creditCardPayment);
payment.performPayment(100); // Output: Membayar dengan kartu kredit sebesar 100 dollar.

payment.setPaymentStrategy(paypalPayment);
payment.performPayment(50); // Output: Membayar dengan Paypal sebesar 50 dollar.
```

Dalam contoh di atas, kita menggunakan Strategy Pattern untuk memisahkan strategi pembayaran (`CreditCardPayment` dan `PaypalPayment`) dari kelas `Payment`. Setiap strategi diimplementasikan sebagai kelas yang mengimplementasikan `PaymentStrategy` interface. Kita dapat mengganti strategi pembayaran yang digunakan oleh objek `Payment` dengan menggunakan metode `setPaymentStrategy`, sehingga objek dapat melakukan pembayaran dengan algoritma yang berbeda tanpa harus mengubah implementasi objek itu sendiri.