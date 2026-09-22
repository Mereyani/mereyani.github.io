---
title: Katarakt Sınıflandırma
summary: Göz görüntülerinde olgunlaşmamış ve olgun kataraktı ayırt eden, VGG16 tabanı ve özel CNN katmanları kullanan bir tarama modeli. Ayrılmış görüntülerde %86,6 doğruluk.
coverAlt: Veri setinden yakın çekim göz fotoğrafları; her biri olgunlaşmamış veya olgun katarakt olarak etiketli.
highlights:
  - 82 ayrılmış test görüntüsünde %86,6 doğruluk ve 0,87 ağırlıklı F1 skoru.
---

Göz görüntülerini katarakt evresine göre (olgunlaşmamış veya olgun) sınıflandıran otomatik bir tarama sistemi.

- **Veri:** 416 × 416 boyutunda 410 etiketli göz görüntüsü; sınıf oranları korunarak %80/%20 oranında 328 eğitim ve 82 test görüntüsüne ayrıldı.
- **Model:** ImageNet üzerinde önceden eğitilmiş dondurulmuş bir VGG16 tabanı, ardından iki özel evrişim katmanı ve Dropout ile L2 düzenlileştirmeli yoğun katmanlar.
- **Eğitim:** Adam optimizer ile 20 epoch.

![82 test görüntüsü için karışıklık matrisi: iki sınıfta 37 ve 34 doğru, 6 ve 5 yanlış.](./confusion-matrix.png)

*Test setindeki karışıklık matrisi: 82 görüntünün 71'i doğru sınıflandırıldı.*

*Göz görüntüleri, Kaggle'da akshayramakrishnan28 tarafından paylaşılan Cataract Classification Dataset veri setindendir ve CC BY-SA 4.0 lisanslıdır. Örnek görüntü tablosu Kaggle not defterimden uyarlanmış olup aynı lisansla paylaşılmaktadır.*
