"use client";

import { useState } from "react";
import { SerahinLogo } from "@/components/brand";
import { ArrowIcon } from "@/components/icons";

const navItems = [
  ["Fitur", "#fitur"],
  ["Cara kerja", "#cara-kerja"],
  ["Untuk pembeli", "#pembeli"],
  ["Roadmap", "#roadmap"],
];

export function SiteHeader({ appUrl }: { appUrl: string }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <a className="logo-link" href="#top" aria-label="Serahin, kembali ke atas" onClick={() => setOpen(false)}>
          <SerahinLogo />
        </a>
        <nav className="desktop-nav" aria-label="Navigasi utama">
          {navItems.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
        </nav>
        <a className="button button--small button--ghost desktop-login" href={`${appUrl}/login`}>
          Masuk <ArrowIcon />
        </a>
        <button className="menu-button" type="button" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Tutup menu" : "Buka menu"} onClick={() => setOpen(!open)}>
          <span/><span/><span/>
        </button>
      </div>
      <div id="mobile-menu" className={`mobile-menu${open ? " is-open" : ""}`}>
        <nav className="container" aria-label="Navigasi seluler">
          {navItems.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
          <a className="button button--primary" href={`${appUrl}/login`}>Masuk ke Serahin <ArrowIcon /></a>
        </nav>
      </div>
    </header>
  );
}
