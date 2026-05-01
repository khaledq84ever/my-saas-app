"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Button from "./Button";

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setShow(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookieConsent", "true");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700 p-4 z-50">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-slate-600 dark:text-slate-300 text-sm">
          We use cookies to improve your experience. By continuing to use our site, you agree to our{" "}
          <Link href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</Link>.
        </p>
        <Button onClick={accept} size="sm">
          Accept
        </Button>
      </div>
    </div>
  );
}