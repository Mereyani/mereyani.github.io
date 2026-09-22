---
title: JobPilot
summary: Uygun iş ilanlarını bulan, gerçek bir iletişim e-postasına kişiselleştirilmiş başvuru gönderen ve gelen yanıtları yöneten, yerel bir panelden çalışan çok ajanlı bir sistem.
cv: "Çok ajanlı iş arama hattı: özgeçmiş ayrıştırma, LLM ile üretilen arama kelimeleri, 0–100 eşleştirme, kişiselleştirilmiş başvuru ve yanıt yönetimi."
---

JobPilot bir özgeçmişi iş arama sürecine dönüştürür. Her biri ayrı bir modül olan beş ajanı tek bir orkestratör yönetir:

1. **Profil ajanı** özgeçmiş PDF'ini okuyup beceri, deneyim ve dillerden oluşan bir aday profili çıkarır.
2. **Arama ajanı** LLM'den bu profili ülke başına 4–8 arama anahtar kelimesine, yerel ilanların yazıldığı dilde, dönüştürmesini ister ve ardından Bayt'ın herkese açık ilanlarında arama yapar.
3. **Eşleştirme ajanı** her ilanı profile göre 0–100 arası puanlar. Kıdem kesin bir eleme kriteridir; beceriler uysa bile kıdemli bir ilan düşük puan alır.
4. **Başvuru ajanı** ilandaki iletişim e-postasını bulur, kişiselleştirilmiş bir ön yazı hazırlar ve özgeçmişi ekleyerek sınırlı gruplar hâlinde gönderir.
5. **E-posta ajanı** gelen kutusunu izler, yanıtları sınıflandırır (mülakat, ret, bilgi talebi) ve bir yanıt taslağı hazırlar ya da gönderir.

### Tasarım kararları

- **İş sitelerine giriş yapılmaz.** LinkedIn veya Indeed formlarını otomatikleştirmek kullanım koşullarına aykırıdır ve kullanıcının hesabını riske atar; bu yüzden "başvuru", bir e-posta bulup iyi bir mektup yazmak demektir.
- **Bilinçli hız sınırı.** Başvurular sabit boyutlu gruplar hâlinde, aralarında bekleme süresiyle gönderilir; araç asla spam botu gibi davranmaz.
- **Kendi modelini seç.** Anthropic (Claude), Google (Gemini) veya API anahtarı gerektirmeyen, Ollama üzerinden yerel bir model.
- **Veriler yerelde kalır.** Özgeçmiş, API anahtarları ve e-posta bilgileri yerel bir SQLite veritabanında tutulur, asla depoya gönderilmez.

Panel FastAPI ve Jinja2 ile geliştirildi. JavaScript bot doğrulamasının arkasındaki sayfalar Playwright ile açılır. MIT lisanslı.
