---
title: Kalp Hastalığı Tespiti
summary: K-En Yakın Komşu ve Naive Bayes ile 1.190 klinik kayıttan kalp hastalığı tespiti. Naive Bayes test setinde %84,0 doğruluğa ulaştı.
coverAlt: "238 test kaydı için Naive Bayes karışıklık matrisi: 95 ve 105 doğru, 17 ve 21 yanlış."
highlights:
  - "Naive Bayes: 238 ayrılmış kayıtta %84,0 doğruluk."
  - "K-En Yakın Komşu: aynı test setinde %79,8 doğruluk."
---

- 1.190 hasta kaydından oluşan klinik bir veri setini Python, Pandas ve scikit-learn ile işleyip normalize ettim; kategorik sütunları kodladım.
- Veriyi sınıf oranlarını koruyarak %80/%20 oranında ayırdım; test için 238 kayıt kaldı.
- Komşu sayısını arayarak ayarladığım bir K-En Yakın Komşu sınıflandırıcısını ve Gaussian Naive Bayes sınıflandırıcısını eğitip karşılaştırdım.

![238 test kaydı için K-En Yakın Komşu karışıklık matrisi: 90 ve 100 doğru, 22 ve 26 yanlış.](./knn-confusion-matrix.png)

*K-En Yakın Komşu: 238 test kaydının 190'ı doğru sınıflandırıldı.*
