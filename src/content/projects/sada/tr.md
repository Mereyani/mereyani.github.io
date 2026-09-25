---
title: Sada · صدى
summary: Konuşmayı tamamen bilgisayarınızda metne döken, Windows, macOS ve Linux'ta çalışan bir masaüstü uygulaması. YouTube, TikTok, Instagram, X veya 1.000'den fazla siteden bir bağlantı yapıştırın ya da video/ses dosyası bırakın; otomatik dil algılamayla 99 dilde zaman damgalı metin alın.
cv: "Çevrimdışı konuşmadan metne masaüstü uygulaması (Windows/macOS/Linux): bağlantı veya dosya → cihazda faster-whisper, otomatik algılamalı 99 dil, donanıma göre model seçimi, SRT/VTT dışa aktarma."
coverAlt: Sada'nın İngilizce arayüzü; Large v3 Turbo ile yazıya dökülmüş ve dili otomatik algılanmış Arapça bir klip.
---

Çoğu transkripsiyon aracı sesinizi başka birinin sunucusuna yükler. Sada ise her şeyi bilgisayarınızda tutar: API yok, hesap yok. Model bir kez indirildikten sonra internete ihtiyaç duymaz.

### Nasıl çalışır

- **Her kaynak.** Bağlantılar yt-dlp ile alınır ve yalnızca ses akışı indirilir. Yerel dosyalar (MP4, MKV, MOV, MP3, WAV, M4A…) paketle gelen FFmpeg ile çözülür; başka bir şey kurmanız gerekmez.
- **Doğru, ama sıradan dizüstüler için de hafif.** Transkripsiyon faster-whisper (CTranslate2) ile çalışır: CPU'da int8, NVIDIA GPU'da float16. Ses etkinliği algılama sessiz bölümleri atlar; bu hem hızı artırır hem de halüsinasyonları azaltır.
- **Cihaza uygun model.** Uygulama RAM, çekirdek sayısı ve GPU'yu okuyup bir model önerir: Tiny'den (75 MB) Large v3'e (3,1 GB) kadar. Güçlü makinelerde varsayılan Large v3 Turbo'dur: en iyiye yakın doğruluk, yaklaşık 6 kat hız.
- **Canlı çıktı.** Bölümler çözüldükçe pencereye akar. Algılanan dil güven puanıyla gösterilir; sonuçlar TXT, SRT, VTT veya JSON olarak dışa aktarılır.
- **Hiçbir şey kaybolmaz.** Yarıda durdurulan dahil her döküm bilgisayarda saklanır. Sonradan içinde arama yapabilir veya kelimeleri yerinde düzeltebilirsiniz; altyazı için zaman damgaları senkron kalır.

### Dağıtıma hazır

localhost'a bağlı küçük bir stdlib HTTP sunucusu, yerel bir pywebview penceresini besler; arayüz düz HTML, CSS ve JS'dir. Arayüz Arapça (sağdan sola), İngilizce ve Türkçe olarak, koyu ve açık temayla sunulur. GitHub Actions her sürüm etiketinde PyInstaller ile Windows, macOS (Intel ve Apple Silicon) ve Linux için bağımsız uygulamalar derler ve yayımlamadan önce derlenen uygulamayı her sistemde test eder. Test boş bir model önbelleğiyle başlar: bir modeli indirir, gerçek bir klibi yazıya döker, bir indirmeyi yarıda durdurur, bir modeli siler ve RAM ile iş parçacığı sayısını bağımsız bir ölçümle karşılaştırır. Durdurma her aşamada çalışır; model yöneticisi her modelin gerçek disk alanını gösterir. MIT lisanslı.
