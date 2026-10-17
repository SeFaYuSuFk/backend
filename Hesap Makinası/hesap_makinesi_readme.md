# Node.js Gelişmiş Hesap Makinesi 🧮

Bu proje, modern JavaScript özelliklerini ve kontrol yapılarını kullanarak geliştirilmiş, hata yönetimi destekli bir hesap makinesi uygulamasıdır. Backend geliştirme süreçlerinde sıkça karşılaşılan koşul yönetimleri ve veri parçalama tekniklerini pratik etmek amacıyla hazırlanmıştır.

## 🚀 Kullanılan Teknolojiler
* JavaScript (ES6+)
* Node.js

## 🧠 Öğrenilen Kavramlar
* **Switch/Case Mimarisi:** Karmaşık `if-else` zincirleri yerine, `operator` değişkenine bağlı olarak çok daha temiz ve okunabilir bir koşul yönetimi sağlar. Eşleşmeyen durumlar için `default` yapısı ile güvenlik alanı oluşturulmuştur.
* **Erken Return (Early Return):** Fonksiyon içerisinde sıfıra bölme gibi hatalı bir işlem tespit edildiğinde, kodun devamını çalıştırmadan hemen hata mesajı (`Hata: Sıfıra bölme hatası!`) fırlatarak işlemi durdurur.
* **Obje Destructuring (Nesne Parçalama):** Döngü içerisinde `({ a, b, operator })` sözdizimi kullanılarak, obje içindeki anahtar değerler (key-value) doğrudan değişkenlere çıkarılmış ve fonksiyonlara çok daha temiz bir şekilde aktarılmıştır.

## 💻 Nasıl Çalıştırılır?

1. Projeyi bilgisayarınıza indirin veya klonlayın:
   ```bash
   git clone https://github.com/SeFaYuSuFk/nodejs-hesap-makinesi.git
   ```
2. Proje dizinine gidin:
   ```bash
   cd nodejs-hesap-makinesi
   ```
3. Dosyayı Node.js ile çalıştırın:
   ```bash
   node hesap_makinesi.js
   ```

## 📋 Örnek Çıktı
```text
10 + 5 = 15
10 - 5 = 5
10 * 5 = 50
10 / 5 = 2
15
5
50
2
```