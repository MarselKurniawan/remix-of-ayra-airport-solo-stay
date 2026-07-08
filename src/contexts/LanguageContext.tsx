import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type Lang = "id" | "en" | "zh";

type Dict = Record<string, string>;

const dictionaries: Record<Lang, Dict> = {
  id: {
    "nav.home": "Beranda",
    "nav.about": "Tentang",
    "nav.rooms": "Kamar",
    "nav.facilities": "Fasilitas",
    "nav.wedding": "Wedding Venue",
    "nav.meeting": "Meeting Room",
    "nav.nearby": "Sekitar",
    "nav.testimonials": "Testimoni",
    "nav.contact": "Kontak",
    "cta.contactSales": "Hubungi Sales",
    "cta.bookNow": "Pesan Sekarang",
    "cta.bookRoom": "Pesan Kamar",
    "bpg.tag": "Best Price Guarantee",
    "bpg.title": "Jaminan Harga Terbaik",
    "bpg.desc": "Pesan langsung untuk mendapatkan harga terbaik, tanpa biaya perantara. Cocokkan harga & dapatkan bonus eksklusif.",
    "bpg.cta": "Klaim Harga Terbaik",
    "hero.checkin": "Check In",
    "hero.checkout": "Check Out",
    "hero.guests": "Tamu",
    "hero.search": "Cari",
    "hero.tab.book": "Booking",
    "hero.tab.inquiry": "Inquiry",
    "hero.inq.name": "Nama Lengkap",
    "hero.inq.phone": "No. WhatsApp",
    "hero.inq.subject": "Subjek",
    "hero.inq.subject.room": "Reservasi Kamar",
    "hero.inq.subject.wedding": "Wedding Venue",
    "hero.inq.subject.meeting": "Meeting Room",
    "hero.inq.subject.other": "Lainnya",
    "hero.inq.message": "Pesan Anda",
    "hero.inq.send": "Kirim via WhatsApp",
    "promo.tag": "Promo Spesial",
    "promo.title": "Diskon hingga 25% untuk Early Bird",
    "promo.desc": "Pesan sekarang dan nikmati harga spesial untuk menginap di Ayra Airport Hotel Solo.",
    "wed.tag": "Ballroom & Venue",
    "wed.title": "Wedding Venue Impian di Ayra",
    "wed.subtitle": "Rayakan momen sakral Anda dengan sentuhan elegan di Ayra Airport Hotel Solo.",
    "wed.desc": "Ballroom kami mampu menampung hingga 500 tamu dengan pilihan dekorasi mewah, sound system profesional, dan tim yang berpengalaman menangani berbagai konsep pernikahan — dari intimate wedding hingga grand celebration.",
    "wed.gallery": "Galeri Wedding",
    "wed.cta": "Konsultasi Wedding via WhatsApp",
    "meet.tag": "Meeting & Event",
    "meet.title": "Meeting Room Profesional",
    "meet.subtitle": "Ruang rapat modern untuk mendukung produktivitas bisnis Anda.",
    "meet.desc": "Tersedia beberapa tipe ruang rapat dengan kapasitas fleksibel, dilengkapi proyektor, sound system, WiFi kencang, serta paket coffee break dan lunch untuk kenyamanan peserta.",
    "meet.gallery": "Galeri Meeting Room",
    "meet.cta": "Booking Meeting Room via WhatsApp",
    "gallery.view": "Lihat Galeri",
    "back.home": "Kembali ke Beranda",
  },
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.rooms": "Rooms",
    "nav.facilities": "Facilities",
    "nav.wedding": "Wedding Venue",
    "nav.meeting": "Meeting Room",
    "nav.nearby": "Nearby",
    "nav.testimonials": "Testimonials",
    "nav.contact": "Contact",
    "cta.contactSales": "Contact Sales",
    "cta.bookNow": "Book Now",
    "cta.bookRoom": "Book Room",
    "bpg.tag": "Best Price Guarantee",
    "bpg.title": "Best Price Guaranteed",
    "bpg.desc": "Book direct for the best price, no middleman fees. We match rates and add exclusive perks.",
    "bpg.cta": "Claim Best Price",
    "hero.checkin": "Check In",
    "hero.checkout": "Check Out",
    "hero.guests": "Guests",
    "hero.search": "Search",
    "hero.tab.book": "Booking",
    "hero.tab.inquiry": "Inquiry",
    "hero.inq.name": "Full Name",
    "hero.inq.phone": "WhatsApp Number",
    "hero.inq.subject": "Subject",
    "hero.inq.subject.room": "Room Reservation",
    "hero.inq.subject.wedding": "Wedding Venue",
    "hero.inq.subject.meeting": "Meeting Room",
    "hero.inq.subject.other": "Other",
    "hero.inq.message": "Your Message",
    "hero.inq.send": "Send via WhatsApp",
    "promo.tag": "Special Offer",
    "promo.title": "Up to 25% Off for Early Bird",
    "promo.desc": "Book now and enjoy special rates at Ayra Airport Hotel Solo.",
    "wed.tag": "Ballroom & Venue",
    "wed.title": "Your Dream Wedding Venue at Ayra",
    "wed.subtitle": "Celebrate your sacred moments with elegance at Ayra Airport Hotel Solo.",
    "wed.desc": "Our ballroom accommodates up to 500 guests with luxurious decor options, professional sound systems, and an experienced team handling any wedding concept — from intimate weddings to grand celebrations.",
    "wed.gallery": "Wedding Gallery",
    "wed.cta": "Wedding Consultation via WhatsApp",
    "meet.tag": "Meeting & Event",
    "meet.title": "Professional Meeting Room",
    "meet.subtitle": "Modern meeting rooms to support your business productivity.",
    "meet.desc": "Multiple meeting room types with flexible capacity, equipped with projector, sound system, fast WiFi, plus coffee break and lunch packages.",
    "meet.gallery": "Meeting Room Gallery",
    "meet.cta": "Book Meeting Room via WhatsApp",
    "gallery.view": "View Gallery",
    "back.home": "Back to Home",
  },
  zh: {
    "nav.home": "首页",
    "nav.about": "关于",
    "nav.rooms": "客房",
    "nav.facilities": "设施",
    "nav.wedding": "婚礼场地",
    "nav.meeting": "会议室",
    "nav.nearby": "周边",
    "nav.testimonials": "评价",
    "nav.contact": "联系",
    "cta.contactSales": "联系销售",
    "cta.bookNow": "立即预订",
    "cta.bookRoom": "预订客房",
    "bpg.tag": "最优价格保证",
    "bpg.title": "最低价格保证",
    "bpg.desc": "直接预订享受最优价格,无中介费用。价格匹配并赠送专属礼遇。",
    "bpg.cta": "获取最优价格",
    "hero.checkin": "入住",
    "hero.checkout": "退房",
    "hero.guests": "宾客",
    "hero.search": "搜索",
    "hero.tab.book": "预订",
    "hero.tab.inquiry": "咨询",
    "hero.inq.name": "姓名",
    "hero.inq.phone": "WhatsApp 号码",
    "hero.inq.subject": "主题",
    "hero.inq.subject.room": "客房预订",
    "hero.inq.subject.wedding": "婚礼场地",
    "hero.inq.subject.meeting": "会议室",
    "hero.inq.subject.other": "其他",
    "hero.inq.message": "您的留言",
    "hero.inq.send": "通过 WhatsApp 发送",
    "promo.tag": "特别优惠",
    "promo.title": "早鸟优惠低至 75 折",
    "promo.desc": "立即预订,享受 Ayra Airport Hotel Solo 的特惠房价。",
    "wed.tag": "宴会厅与场地",
    "wed.title": "Ayra 梦想婚礼场地",
    "wed.subtitle": "在 Ayra Airport Hotel Solo 优雅庆祝您的神圣时刻。",
    "wed.desc": "我们的宴会厅可容纳多达 500 位宾客,提供豪华装饰选择、专业音响系统,以及经验丰富的团队,可承办从私密婚礼到盛大庆典的各种概念。",
    "wed.gallery": "婚礼画廊",
    "wed.cta": "通过 WhatsApp 咨询婚礼",
    "meet.tag": "会议与活动",
    "meet.title": "专业会议室",
    "meet.subtitle": "现代化会议室,助力您的商务效率。",
    "meet.desc": "多种类型会议室,容量灵活,配备投影仪、音响系统、高速 WiFi,以及茶歇和午餐套餐。",
    "meet.gallery": "会议室画廊",
    "meet.cta": "通过 WhatsApp 预订会议室",
    "gallery.view": "查看画廊",
    "back.home": "返回首页",
  },
};

interface LanguageCtx {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageCtx | null>(null);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Lang>(() => {
    if (typeof window === "undefined") return "id";
    const saved = localStorage.getItem("ayra-lang") as Lang | null;
    return saved && ["id", "en", "zh"].includes(saved) ? saved : "id";
  });

  useEffect(() => {
    localStorage.setItem("ayra-lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const t = (key: string) => dictionaries[lang][key] ?? dictionaries.id[key] ?? key;

  return (
    <LanguageContext.Provider value={{ lang, setLang: setLangState, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};
