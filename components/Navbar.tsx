"use client";

import { useState } from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "الرئيسية", href: "/" },
    { name: "المميزات", href: "/features" },
    { name: "الاسعار", href: "/pricing" },
    { name: "اراء العملاء", href: "/testimonials" },
    { name: "الاسئلة الشائعة", href: "/faq" },
    { name: "وظائف", href: "/careers" },
    { name: "المدونة", href: "/blog" },
    { name: "من نحن", href: "/about" },
    { name: "اتصل بنا", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-700 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-lg"></div>
            <span className="text-xl font-bold text-slate-900 dark:text-white">SaaS</span>
          </Link>

          <div className="hidden md:flex items-center space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors whitespace-nowrap"
              >
                {link.name}
              </Link>
            ))}
            <LangSwitch />
            <ThemeToggle />
            <div className="flex items-center gap-2">
              <Link
                href="/login"
                className="text-slate-600 dark:text-slate-300 hover:text-blue-600 font-medium"
              >
                تسجيل الدخول
              </Link>
              <Link
                href="/signup"
                className="bg-blue-600 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                انشاء حساب
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6 text-slate-700 dark:text-slate-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 border-t border-slate-200 dark:border-slate-700">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-slate-600 dark:text-slate-300 hover:text-blue-600 font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex gap-2 pt-2 border-t border-slate-200 dark:border-slate-700">
                <Link
                  href="/login"
                  className="flex-1 text-center py-2.5 text-slate-600 dark:text-slate-300 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  تسجيل الدخول
                </Link>
                <Link
                  href="/signup"
                  className="flex-1 bg-blue-600 text-white px-5 py-2.5 rounded-lg font-medium text-center"
                  onClick={() => setIsOpen(false)}
                >
                  انشاء حساب
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}