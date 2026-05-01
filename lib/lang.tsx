"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { Lang, Translations, en } from "./translations";

interface LangContextType {
  lang: Lang;
  t: Translations;
  setLang: (lang: Lang) => void;
  isRtl: boolean;
}

const LangContext = createContext<LangContextType | undefined>(undefined);

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("ar");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("lang") as Lang;
    if (stored) {
      setLangState(stored);
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    localStorage.setItem("lang", lang);
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
  }, [lang, mounted]);

  const setLang = (newLang: Lang) => {
    setLangState(newLang);
  };

  const t = lang === "ar" ? {
    nav: { home: "الرئيسية", features: "المميزات", pricing: "الاسعار", testimonials: "اراء العملاء", faq: "الاسئلة الشائعة", careers: "وظائف", blog: "المدونة", about: "من نحن", contact: "اتصل بنا", login: "تسجيل الدخول", signup: "انشاء حساب", dashboard: "لوحة التحكم", logout: "تسجيل الخروج" },
    hero: { title: "ابني شيئا رائعا", subtitle: "منصة قوية لمساعدتك على البناء والتوسع والنمو باستخدام الادوات والميزات الحديثة.", getStarted: "ابدأ مجانا", learnMore: "اعرف المزيد" },
    footer: { description: "تمكين الشركات من الادوات الحديثة للبناء والتوسع والنمو.", product: "المنتج", company: "الشركة", subscribe: "اشترك في النشرة البريدية", subscribeBtn: "اشترك", privacy: "سياسة الخصوصية", terms: "الشروط والاحكام", rights: "جميع الحقوق محفوظة" },
    auth: { login: "تسجيل الدخول", signup: "انشاء حساب", email: "البريد الالكتروني", password: "كلمة المرور", confirmPassword: "تاكيد كلمة المرور", rememberMe: "تذكرني", forgotPassword: "نسيت كلمة المرور؟", noAccount: "ليس لديك حساب؟", hasAccount: "لديك حساب بالفعل؟", createAccount: "انشاء حساب", signIn: "تسجيل", signUp: "سجل الان", firstName: "الاسم الاول", lastName: "اسم العائلة", orContinueWith: "او تابع باستخدام", agreeTerms: "اوافق على", termsOfService: "شروط الخدمة", and: "و", privacyPolicy: "سياسة الخصوصية" },
    dashboard: { welcome: "مرحبا", profile: "الملف الشخصي", settings: "الاعدادات", myAccount: "حسابي", editProfile: "تعديل الملف", changePassword: "تغيير كلمة المرور", deleteAccount: "حذف الحساب" },
    common: { loading: "جاري التحميل...", error: "خطا", success: "نجاح", save: "حفظ", cancel: "الغاء", delete: "حذف", edit: "تعديل", back: "رجوع", next: "التالي", previous: "السابق", submit: "ارسال", search: "ب��ث" },
  } : en;

  return (
    <LangContext.Provider value={{ lang, t, setLang, isRtl: lang === "ar" }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const context = useContext(LangContext);
  if (!context) {
    throw new Error("useLang must be used within LangProvider");
  }
  return context;
}