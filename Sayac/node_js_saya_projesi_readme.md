# ⏱️ Node.js Sayaç (Counter) Uygulaması

Bu mini proje, Node.js ve JavaScript temellerini pekiştirmek amacıyla geliştirilmiştir. JavaScript'te Nesne (Object) yapısının kullanımı ve `this` anahtar kelimesinin nesne içindeki verilere nasıl eriştiğini gösteren temel bir backend pratik uygulamasıdır.

## 🚀 Teknolojiler
* JavaScript (ES6+)
* Node.js

## 🧠 Kavramlar ve Öğrenimler
Bu projeyi geliştirirken aşağıdaki temel JavaScript kavramları pratik edilmiştir:
* **Object (Nesne) Mantığı:** `sayac` adında bir nesne oluşturularak, veriler (`deger`) ve bu veriyi manipüle eden fonksiyonlar (`arttir`, `azalt`, `sifirla`) tek bir yapı altında toplandı.
* **`this` Anahtar Kelimesi:** Nesnenin kendi içindeki `deger` özelliğine erişmek ve onu güncellemek için `this.deger` yapısı kullanıldı.
* **Template Literals:** Konsol çıktılarını daha okunaklı yazmak için backtick (`` ` ``) ve `${}` yapısı kullanıldı.

## 💻 Nasıl Çalıştırılır?

Projeyi kendi bilgisayarınızda çalıştırmak için terminalde dosyanın bulunduğu dizine gidin ve şu komutu çalıştırın:

```bash
node sayac.js
```

## 📋 Örnek Çıktı

Kod çalıştırıldığında (5 kez artırma, 1 kez azaltma ve 1 kez sıfırlama işlemi sonucunda) terminalde aşağıdaki çıktı elde edilir:

```text
Sayac 1
Sayac 2
Sayac 3
Sayac 4
Sayac 5
Sayac 4
Sayac 0
```