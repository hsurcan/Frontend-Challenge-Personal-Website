🚀 Kişisel Web Sitesi & Kişi Yönetim Portalı

Bu çalışma, modern web standartları ve Redux merkezi state yönetimi kullanılarak geliştirilmiş kapsamlı bir Kişisel Rehber & Yönetim Sistemi uygulamasıdır. Proje, asenkron veri akışı ve güvenli rota yönetimi üzerine odaklanmıştır.

🛠️ Kullanılan Teknolojiler

Frontend Framework: React (Vite / Create React App)

State Management: Redux (Global veri ve kullanıcı oturumu yönetimi için)

API Client: Axios (RESTful API ile asenkron iletişim için)

Routing: React Router DOM (Dinamik sayfa geçişleri ve URL parametre yönetimi için)

Styling: CSS3 / SASS (Responsive ve kullanıcı dostu arayüz tasarımı için)

Deployment: Vercel (CI/CD entegrasyonu ile)

✨ Öne Çıkan Özellikler

Merkezi State Yönetimi (Redux): Uygulama verileri tek bir merkezde toplanarak (Store), bileşenler arası veri tutarlılığı ve kolay erişim sağlanmıştır.

Kontrollü Form Yönetimi: React useState hook'u kullanılarak form verileri üzerinde tam kontrol sağlanmış; özel validasyon (doğrulama) mantıkları manuel olarak kurgulanmıştır.

Güvenli Rotalar (Private Routing): Yetkilendirilmemiş kullanıcıların belirli sayfalara erişimi engellenmiş, oturum durumuna göre otomatik yönlendirme mekanizması kurulmuştur.

Kalıcı Oturum (Persistence): Kullanıcı token bilgileri ve ayarları tarayıcının yerel depolama biriminde (LocalStorage) saklanarak sayfa yenilense bile oturumun korunması sağlanmıştır.

Güvenli API Mimarisi: API adresleri ve hassas veriler .env dosyaları ve Vercel çevre değişkenleri ile gizlenerek güvenlik standartları karşılanmıştır.

📝 Teknik Detaylar ve Mimari

Proje geliştirilirken aşağıdaki yazılım prensipleri uygulanmıştır:

Redux Flow: Action -> Reducer -> Store döngüsü kullanılarak veri akışı öngörülebilir hale getirilmiştir.

Asenkron İşlemler: API çağrıları sırasında loading (yükleniyor) ve error (hata) durumları Redux state üzerinden dinamik olarak yönetilmiştir.

Yeniden Kullanılabilir Bileşenler: Header, Sidebar ve Form bileşenleri modüler bir yapıda tasarlanarak kod tekrarı en aza indirilmiştir.

Props Management: Gerekli yerlerde prop drilling yerine Redux useSelector ve useDispatch hook'ları ile performanslı veri erişimi sağlanmıştır.

🤝 İletişim
LinkedIn: [...]

Canlı Demo: [...]