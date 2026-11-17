import type { Dict } from './types';

export default {
  name: 'Mohamed Mereyani',
  meta: {
    title: 'Mohamed Mereyani — Bilgisayar Mühendisi',
    description:
      "Hastane bilgi sistemleri, veritabanları ve uygulamalı yapay zekâ üzerine çalışan bilgisayar mühendisi. Siirt Üniversitesi'nde yüksek lisans öğrencisi; tıbbi görüntü sınıflandırma ve yapay zekâ araçları üzerine projeler.",
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
    'Yaklaşık iki yıl boyunca Sinerji Bilişim\'de, yaklaşık 90 hastanede kullanılan Bizmed HBYS üzerinde çalıştım: hastane müşterilerinin talepleri doğrultusunda Delphi ile modüller ve arayüz özellikleri geliştirdim, hataları giderdim ve Oracle veritabanını yeni tablolar, alanlar ve PL/SQL fonksiyon ve prosedürleriyle genişlettim.',
    'Kendi projelerimin çoğu makine öğrenmesini gerçek problemlere uyguluyor: tıbbi görüntüler ve el hareketleri için evrişimli sinir ağları, klinik veriler üzerinde klasik modeller ve son dönemde yapay zekâ araçları: çevrimdışı çalışan bir konuşmadan metne masaüstü uygulaması ve bir Claude Code becerisi.',
    'Yüksek lisansta IoT ağları için saldırı tespiti üzerinde çalışıyorum: TrustFed-TinyIDS, yalnızca normal trafikle eğitilen, yanlış alarmları kalibre edilmiş, federe eğitimli ve küçük cihazlar için TinyML sürümü olan bir dedektör. Dergi makalesi hazırlık aşamasında.',
  ],
  experience: [
    {
      period: '07/2024 — 04/2026',
      role: 'Yazılım ve Veritabanı Uzmanı',
      org: 'Sinerji Bilişim (Bizmed)',
      where: 'Hibrit (ofis ve uzaktan)',
      points: [
        'Bizmed HBYS\'nin birçok bölümünde hastane müşterilerinin taleplerini karşıladım: hataları giderdim, Delphi ile yeni özellikler, modüller ve arayüz bileşenleri ekledim.',
        'Bu özelliklerin dayandığı Oracle veritabanını genişlettim: tablolar, alanlar ve PL/SQL fonksiyonları ekledim; mevcut fonksiyon ve prosedürleri düzenledim.',
      ],
      tags: ['Delphi', 'Oracle', 'PL/SQL', 'SQL', 'HBYS'],
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
    { group: 'Programlama', items: ['Python', 'SQL', 'C#', 'Delphi', 'JavaScript'] },
    {
      group: 'Yapay zekâ ve makine öğrenmesi',
      items: ['Derin öğrenme (CNN)', 'Transfer öğrenme (VGG16)', 'Bilgisayarlı görü', 'Konuşma tanıma (Whisper)', 'Anomali tespiti (otokodlayıcılar)', 'Federe öğrenme', 'Konformal tahmin', 'TinyML (TFLite INT8)', 'TensorFlow', 'Keras', 'scikit-learn', 'Pandas', 'OpenCV'],
    },
    { group: 'Veritabanı', items: ['Oracle PL/SQL', 'PostgreSQL', 'Veritabanı tasarımı'] },
    { group: 'Sistemler ve araçlar', items: ['Hastane bilgi yönetim sistemleri (HBYS)', 'Arduino', 'Claude Code'] },
  ],
  languages: [
    { name: 'Arapça', level: 'Ana dil' },
    { name: 'Türkçe', level: 'İleri' },
    { name: 'İngilizce', level: 'Temelden orta düzeye (A2–B1)' },
  ],
  research: [
    {
      title: 'TrustFed-TinyIDS: Conformal Three-Way Decisions, Federated Training and Host-Level Evidence Accumulation for Unseen and Sparse Attacks in IoT Networks',
      authors: 'Mohamed Mereyani',
      status: "Dergi makalesi hazırlık aşamasında; kod GitHub'da açık",
      year: '2026',
      url: 'https://github.com/Mereyani/TrustFed-TinyIDS',
    },
  ],
  domains: { medical: 'Tıbbi görüntüleme', clinical: 'Klinik veri', agents: 'Yapay zekâ araçları', hardware: 'Donanım ve görü', security: 'IoT güvenliği' },
  cv: {
    label: 'Özgeçmiş',
    summary:
      'Yaklaşık 90 hastanede kullanılan Bizmed HBYS (Delphi, Oracle PL/SQL) üzerinde yaklaşık iki yıllık üretim deneyimine sahip bir bilgisayar mühendisiyim. Siirt Üniversitesi Mühendislik Fakültesi birincisi olarak mezun oldum; şu anda tezli Bilgisayar Mühendisliği yüksek lisansına devam ediyorum. Uygulamalı makine öğrenmesi çalışmalarım tıbbi görüntüleri (test verisinde %98,2 doğruluğa ulaşan bir röntgen kırık sınıflandırıcısı) ve konformal kalibrasyon ile federe öğrenme kullanan IoT saldırı tespitini (dergi makalesi hazırlık aşamasında) kapsıyor.',
    download: 'PDF indir',
    profile: 'Profil',
    location: 'Türkiye',
    experience: 'İş Deneyimi',
    research: 'Araştırma ve Yayınlar',
    references: 'Referanslar',
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
    areas: 'Proje alanları',
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
