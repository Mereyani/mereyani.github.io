---
title: install-from-video
summary: Geliştirici araçları öneren bir videoyu doğrulanmış kurulum komutlarına dönüştüren bir Claude Code becerisi. Yerelde transkript edilir, npm ve GitHub üzerinden kontrol edilir, asla otomatik kurulum yapılmaz.
cv: "Araç öneren videoları doğrulanmış kurulum komutlarına dönüştüren Claude Code becerisi; yerel transkripsiyon ve npm/GitHub kontrolü."
---

"En iyi 5 araç" videolarında nadiren bağlantı bulunur. Duyduğunuz bir ismi yazmak sizi bir typosquat paketinden tek harf uzağa koyar ve kurduğunuz bir eklenti sonraki her oturumda kendi hook'larını çalıştırır. Bu beceri o boşluğu kapatır.

### Nasıl çalışır

- **Önce ses, kendi bilgisayarınızda.** Klip faster-whisper ile yerelde transkript edilir: yükleme yok, API maliyeti yok.
- **Kareler yalnızca gerektiğinde.** Söylenen bir isim belirsizse beceri videodan kare panoları çıkarır ve adres çubuğu, depo başlığı gibi ekrandaki metinleri okur.
- **Önermeden önce doğrula.** Her isim npm ve GitHub API üzerinden kontrol edilir. Deposu bulunmayan paketler ve popüler projelerin az yıldızlı kopyaları işaretlenir.
- **Asla kurulum yapmaz.** Video güvenilmeyen bir kaynaktır; beceri komutları verir, kararı kullanıcı verir.

### Model boyutu neden önemli

Arapça anlatımlı bir test klibinde `whisper-small` "Agent Skills" ifadesini `AgedSkills` olarak duydu; `whisper-large-v3` ise doğru anladı. Deponun tam adı, tarayıcı adres çubuğunu gösteren tek bir kareden geldi. Ses listenin şeklini, ekran ise isimleri verir.

Belgeler İngilizce, Arapça ve Türkçe. MIT lisanslı.
