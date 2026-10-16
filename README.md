# İlk Node.js Sunucum 🚀

Bu proje, Node.js'in yerleşik `http` modülünü kullanarak oluşturduğum ilk temel web sunucusudur. Belirtilen port üzerinden gelen isteklere basit bir JSON yanıtı döndürür.

## Özellikler

- Herhangi bir dış bağımlılık (npm paketi) gerektirmez.
- Node.js'in çekirdek `http` modülünü kullanır.
- Gelen HTTP isteklerinin metodunu ve URL'sini konsola yazdırır.
- İstemciye `application/json` formatında yanıt verir.

## Kurulum ve Çalıştırma

Projeyi yerel makinenizde çalıştırmak için sisteminizde [Node.js](https://nodejs.org/)'in kurulu olması gerekmektedir.

1. Projeyi bilgisayarınıza klonlayın veya indirin.
2. Terminal veya komut satırını açarak projenin bulunduğu dizine gidin.
3. Sunucuyu başlatmak için aşağıdaki komutu çalıştırın:

```bash
node server.js
```

4. Konsolda `Sunucu 3000 portunda çalışıyor...` mesajını göreceksiniz.

## Kullanım

Sunucu çalıştıktan sonra tarayıcınızı açıp veya Postman/cURL gibi bir araç kullanarak aşağıdaki adrese istek atabilirsiniz:

```text
http://localhost:3000
```

**Örnek Yanıt:**

```json
{
  "message": "Merhaba Dünya!",
  "success": true
}
```

## Dosya Yapısı

- `server.js`: Sunucu yapılandırmasını ve yönlendirme (routing) mantığını içeren ana dosya.
