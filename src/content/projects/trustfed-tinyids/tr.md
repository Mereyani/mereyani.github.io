---
title: TrustFed-TinyIDS
summary: IoT ağlarında daha önce görülmemiş saldırıları yalnızca normal trafikle eğitilmiş bir otokodlayıcıyla tespit eden; konformal yanlış alarm kontrolü, federe eğitim ve INT8 TinyML yolu içeren araştırma çerçevesi. Yüksek lisans projesi; dergi makalesi hazırlık aşamasında.
cv: "IoT saldırı tespiti (TON_IoT): yalnızca normal trafikle eğitilmiş otokodlayıcı ve üç yönlü konformal karar kuralı (normal trafikte alarm oranı %0,98, hedef %1), FedAvg/FedProx eğitimi ve INT8 TFLite dağıtımı; her deney 10 tohumla."
role: [Çerçeveyi tasarladım, tüm deneyleri yürüttüm ve makaleyi yazdım]
highlights:
  - "Normal trafikte ANOMALY oranı %0,98 (hedef %1); görülmemiş saldırı ailelerine ait akışların %45,6'sı ANOMALY olarak işaretlendi (10 tohum ortalaması)."
  - "Federe modeldeki farkın büyük ölçüde yetersiz eğitimden kaynaklandığını gösterdim: eşit eğitimle IID FedAvg %40,1'e ulaştı, merkezi model %45,6."
  - "Devralınan konformal eşiklerin 53 öznitelikli modelde INT8 nicemlemeden sonra korunduğunu, 21 öznitelikli cihaz modelinde ise bozulduğunu buldum ve yeniden kalibrasyonun maliyetini ölçtüm."
---

IoT ağları; eğitimde görmediği saldırıları yakalayan, yanlış alarmları bir bütçe içinde tutan, çok sayıda sahadan öğrenen ve küçük cihazlarda çalışan saldırı tespit sistemlerine ihtiyaç duyar. TrustFed-TinyIDS bu gereksinimleri TON_IoT veri seti üzerinde birlikte inceler.

### Nasıl çalışır

- **Yalnızca normal trafikle eğitilen dedektör.** Küçük bir otokodlayıcı (4.829 parametre) yalnızca normal trafiği öğrenir; bu yüzden eğitimde görülen saldırı ailelerine bağlı değildir.
- **Üç yönlü konformal karar.** Her akış, ayrılmış normal skorlara göre bir p değeri alır ve ANOMALY, UNCERTAIN ya da NORMAL olarak etiketlenir. Bu, normal trafikte yanlış alarm oranını sınırlar; saldırılar için bir garanti vermez.
- **Federe öğrenme.** IID ve IID olmayan (Dirichlet) bölmelerle FedAvg ve FedProx; federe modelin neden merkezi modelin gerisinde kalabildiğinin analizi.
- **TinyML.** INT8 TFLite dönüşümü ve hangi eşiklerin nicemleme ile girdi bozulmasından sonra geçerli kaldığının incelenmesi.
- **Cihaz düzeyinde kanıt.** UNCERTAIN akışlar cihaz başına biriktirilir (pencere toplamları, CUSUM, Shiryaev–Roberts); bütçe, cihaz başına haftada bir yanlış yükseltmedir.

### Dürüst sınırlar

Bu bir araştırma kodudur. Veri setinde zaman damgası olmadığından cihaz düzeyindeki deneyler simülasyondur ve hiçbir şey gerçek bir kurulumda doğrulanmamıştır. Önceden belirlenen cihaz düzeyi hipotezi desteklenmedi: yeni kural daha fazla saldırı yakaladı ancak test cihazlarında yanlış yükseltme bütçesini aştı.
