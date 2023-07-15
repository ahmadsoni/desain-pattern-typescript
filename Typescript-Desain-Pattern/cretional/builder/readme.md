# Builder Pattern dalam TypeScript

Builder Pattern adalah salah satu dari desain pola kreatif yang digunakan dalam pengembangan perangkat lunak. Pola ini memungkinkan pembuatan objek yang kompleks dengan langkah-langkah yang terorganisir dan dapat disesuaikan.

## Apa itu Builder Pattern?

Builder Pattern memisahkan proses konstruksi objek kompleks dari representasi internalnya. Ini memungkinkan kita untuk membuat objek dengan berbagai kombinasi properti yang berbeda tanpa mengganti logika konstruksi yang ada.
 
## Mengapa menggunakan Builder Pattern?

Builder Pattern berguna ketika kita memiliki objek dengan banyak properti opsional dan ingin menghindari konstruktor dengan parameter yang sangat panjang. Ini juga membantu dalam menciptakan objek yang imutabel dan dapat dipakai ulang.

## Contoh Implementasi dalam TypeScript

```typescript
class Product {
  constructor(public name: string, public price: number, public category: string) {}
}

class ProductBuilder {
  private name: string;
  private price: number;
  private category: string;

  setName(name: string): ProductBuilder {
    this.name = name;
    return this;
  }

  setPrice(price: number): ProductBuilder {
    this.price = price;
    return this;
  }

  setCategory(category: string): ProductBuilder {
    this.category = category;
    return this;
  }

  build(): Product {
    return new Product(this.name, this.price, this.category);
  }
}

// Menggunakan builder untuk membuat objek produk dengan properti yang berbeda
const product1 = new ProductBuilder()
  .setName("Produk A")
  .setPrice(10)
  .setCategory("Kategori 1")
  .build();

const product2 = new ProductBuilder()
  .setName("Produk B")
  .setPrice(20)
  .setCategory("Kategori 2")
  .build();
```

Dalam contoh di atas, kita memiliki kelas `Product` yang merupakan objek kompleks yang ingin kita konstruksi. Kemudian, kita membuat kelas `ProductBuilder` yang bertanggung jawab untuk mengatur langkah-langkah konstruksi.

Kelas `ProductBuilder` memiliki metode-metode `setName`, `setPrice`, dan `setCategory` yang masing-masing mengatur properti yang sesuai dan mengembalikan instance `ProductBuilder` itu sendiri. Metode `build` digunakan untuk menghasilkan objek `Product` yang akhir.

Dengan menggunakan Builder Pattern, kita dapat membuat objek `Product` dengan menggunakan langkah-langkah yang terorganisir dan dapat disesuaikan, sehingga memudahkan kita dalam membuat objek yang kompleks dan menghindari konstruktor yang sangat panjang dengan banyak parameter.

Semoga penjelasan ini membantu dalam pemahaman Anda mengenai Builder Pattern dalam TypeScript!