---
title: Kemik Kırığı Sınıflandırma
summary: Bitirme projem; röntgen görüntülerini "kırık" veya "kırık değil" olarak sınıflandıran ve ayrılmış test görüntülerinde %98,2 doğruluğa ulaşan bir derin öğrenme modeli.
coverAlt: Eğitim verisinden bilek, el ve önkol röntgenleri; her biri kırık veya kırık değil olarak etiketli.
highlights:
  - 506 ayrılmış test röntgeninde %98,2 doğruluk ve 0,98 ağırlıklı F1 skoru.
  - 506 test görüntüsünden yalnızca 9'u yanlış sınıflandırıldı.
---

Lisans bitirme projem: Python'da TensorFlow ve Keras ile geliştirilmiş, bir röntgende kırık olup olmadığına karar veren ikili bir sınıflandırıcı.

- **Veri:** farklı vücut bölgelerinden 9.243 eğitim, 829 doğrulama ve 506 test röntgeni, 224 × 224 boyutunda.
- **Model:** ImageNet üzerinde önceden eğitilmiş, dondurulmuş bir VGG16 tabanı ile transfer öğrenme; ardından iki özel evrişim katmanı ve Dropout ile L2 düzenlileştirmeli küçük bir yoğun katman bloğu.
- **Eğitim:** Adam optimizer, doğrulama kaybına göre erken durdurmalı en fazla 20 epoch.
- **Değerlendirme:** eğitimde hiç kullanılmamış test setinde doğruluk, kesinlik, duyarlılık ve F1.

![506 test görüntüsü için karışıklık matrisi: iki sınıfta 264 ve 233 doğru, 4 ve 5 yanlış.](./confusion-matrix.png)

*Test setindeki karışıklık matrisi: 506 görüntünün 497'si doğru sınıflandırıldı.*

*Eğitim görüntüleri, Kaggle'da bmadushanirodrigo tarafından paylaşılan Bone Fracture Multi-Region X-ray Data veri setindendir; ODC Kamu Malı Lisansı (PDDL) ile yayımlanmıştır.*
