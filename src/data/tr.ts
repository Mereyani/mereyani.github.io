import type { Dict } from './types';

export default {
  name: 'Mohamed Mereyani',
  meta: {
    title: 'Mohamed Mereyani — Bilgisayar Mühendisi',
    description:
      "Hastane bilgi sistemleri, veritabanları ve uygulamalı yapay zekâ üzerine çalışan bilgisayar mühendisi. Siirt Üniversitesi'nde yüksek lisans öğrencisi; tıbbi görüntü sınıflandırma ve LLM ajanları üzerine projeler.",
  },
  title: 'Bilgisayar Mühendisi',
  tagline:
    "Sağlık yazılımları ve derin öğrenme modelleri geliştiriyorum: hastane bilgi sistemindeki Oracle tablolarından röntgen görüntülerini sınıflandıran CNN'lere kadar.",
  nav: {
    about: 'Hakkımda',
    experience: 'Deneyim',
    projects: 'Projeler',
    education: 'Eğitim',
    skills: 'Yetenekler',
    contact: 'İletişim',
  },
  about: [
    "Türkiye'de yaşayan bir bilgisayar mühendisiyim. Siirt Üniversitesi'nde tezli Bilgisayar Mühendisliği yüksek lisansının ilk yılındayım; lisansımı da aynı üniversitede Mühendislik Fakültesi birincisi olarak tamamladım.",
    "Yaklaşık iki yıl boyunca Sinerji Bilişim'de (Bizmed) Hastane Bilgi Yönetim Sistemi (HBYS) üzerinde çalıştım: hastane müşterilerinin talepleri doğrultusunda Delphi ile modüller ve arayüz özellikleri geliştirdim, hataları giderdim, bunların arkasındaki Oracle tablolarını ve sorgularını tasarladım.",
    'Kendi projelerimin çoğu makine öğrenmesini gerçek problemlere uyguluyor: tıbbi görüntüler ve el hareketleri için evrişimli sinir ağları, klinik veriler üzerinde klasik modeller ve son dönemde büyük dil modelleri üzerine kurulu çok ajanlı araçlar.',
  ],
  experience: [
    {
      period: '07/2024 — 04/2026',
      role: 'Yazılım ve Veritabanı Uzmanı',
      org: 'Sinerji Bilişim (Bizmed)',
      where: 'Uzaktan',
      points: [
        'Hastane müşterilerinin talepleri doğrultusunda Hastane Bilgi Yönetim Sistemi (HBYS) için Delphi ile özel çekirdek modüller, özellikler ve arayüz butonları geliştirdim.',
        'Sistemdeki yazılım hatalarını tespit edip giderdim.',
        'İlişkisel Oracle veritabanında tablolar tasarlayıp uyguladım; bunları kullanan backend sorgularını ve kodlarını yazdım.',
        'Tamamen uzaktan, görev tabanlı bir ekipte çalıştım.',
      ],
      tags: ['Delphi', 'Oracle', 'SQL', 'HBYS'],
    },
  ],
  education: [
    {
      period: '2026 — Devam ediyor',
      degree: 'Bilgisayar Mühendisliği Yüksek Lisans (Tezli)',
      org: 'Siirt Üniversitesi, Fen Bilimleri Enstitüsü',
      notes: ['Not ortalaması 86,75 / 100'],
    },
    {
      period: '2021 — 2025',
      degree: 'Bilgisayar Mühendisliği Lisans',
      org: 'Siirt Üniversitesi',
      notes: ['Mühendislik Fakültesi birincisi', 'Not ortalaması 3,56 / 4,00'],
    },
  ],
  skills: [
    { group: 'Programlama dilleri', items: ['Python', 'C#', 'Delphi', 'JavaScript'] },
    { group: 'Veritabanları', items: ['Oracle', 'PostgreSQL', 'Veritabanı tasarımı'] },
    {
      group: 'Yapay zekâ ve veri bilimi',
      items: ['Derin öğrenme (CNN)', 'Makine öğrenmesi', 'TensorFlow', 'Keras', 'scikit-learn', 'Pandas', 'OpenCV'],
    },
    { group: 'Donanım', items: ['Arduino', 'Seri haberleşme', 'LCD entegrasyonu'] },
    { group: 'Sistemler ve araçlar', items: ['HBYS', 'Uzaktan görev yönetimi'] },
  ],
  languages: [
    { name: 'Arapça', level: 'Ana dil' },
    { name: 'Türkçe', level: 'İleri' },
    { name: 'İngilizce', level: 'Orta (B1–B2)' },
  ],
  cv: {
    label: 'Özgeçmiş',
    summary:
      'Hastane bilgi sistemi (Delphi, Oracle) üzerinde yaklaşık iki yıllık üretim deneyimine ve tıbbi görüntüler üzerinde uygulamalı derin öğrenme çalışmalarına sahip bilgisayar mühendisi; röntgen görüntülerinde test verisinde %98,2 doğrulukla çalışan bir kırık sınıflandırıcısı geliştirdi. Siirt Üniversitesi Mühendislik Fakültesi birincisi olarak mezun oldu; şu anda tezli Bilgisayar Mühendisliği yüksek lisansına devam ediyor.',
    download: 'PDF indir',
    profile: 'Profil',
    location: 'Türkiye',
    references: 'Referanslar',
    referencesNote: 'Talep üzerine sunulur.',
  },
  ui: {
    skip: 'İçeriğe geç',
    sections: 'Bölümler',
    language: 'Dil',
    languages: 'Diller',
    contactBody: 'Bana ulaşmanın en iyi yolu e-posta.',
    email: 'E-posta',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    code: 'Kaynak kodu',
    notebook: 'Kaggle not defteri',
    live: 'Canlı demo',
    video: 'Video',
    back: 'Ana sayfaya dön',
    role: 'Rolüm',
    highlights: 'Öne çıkan sonuçlar',
    technologies: 'Teknolojiler',
    year: 'Yıl',
    notFoundTitle: 'Sayfa bulunamadı',
    notFoundBody: 'Bu sayfa mevcut değil. Taşınmış olabilir.',
  },
} satisfies Dict;
