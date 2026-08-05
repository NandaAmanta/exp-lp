# Exp Digital Solution — Next.js Migration

Migrasi dari HTML/CSS/JS statis ke Next.js 14 (App Router). Tampilan & perilaku dibuat
identik dengan situs lama.

## Menjalankan project

```bash
npm install
npm run dev
```

Buka http://localhost:3000

## Struktur

```
app/
  layout.js          -> <head> global: font, GTM, JSON-LD schema
  globals.css         -> CSS asli, disalin 1:1 (tidak diubah)
  page.js              -> Halaman Home
  about/
    layout.js          -> metadata khusus halaman About
    page.js            -> Halaman About Us

components/
  Navbar.jsx           -> sticky navbar + mobile menu (state React, bukan manipulasi DOM manual)
  Hero.jsx             -> hero + animated counter stats
  Clients.jsx          -> trust bar logo slider
  AboutSection.jsx     -> section "Why Choose Us" + globe 3D
  EarthGlobe.jsx        -> canvas globe procedural (persis logic asli)
  Process.jsx          -> "How We Work" + animasi roket timeline
  Services.jsx
  Portfolio.jsx
  Testimonials.jsx
  Blog.jsx              -> fetch artikel Medium (client-side, sama seperti script.js asli)
  Contact.jsx
  Footer.jsx            -> punya prop `variant="home" | "about"` krn markup beda dikit
  StarCanvas.jsx        -> canvas bintang reusable (dipakai di banyak section)
  ShootingStars.jsx
  SiteEffects.jsx       -> aktifkan Lenis smooth-scroll + scroll-reveal

  about/
    PageHero.jsx
    Overview.jsx
    VisionMission.jsx
    Director.jsx
    VideoModal.jsx      -> modal video, dikontrol state React (bukan classList manual)
    Team.jsx
    AboutContact.jsx

hooks/
  useLenis.js           -> init Lenis + smooth scroll utk link #anchor
  useScrollReveal.js     -> IntersectionObserver utk elemen .reveal
```

## Memindahkan assets kamu

Semua path asset sudah diubah ke folder lokal `/public/assets/...` supaya cocok
konvensi Next.js. Tinggal taruh file kamu di:

```
public/assets/exp-logo.png
public/assets/exp-logo.ico
public/assets/ori-exp-logo.jpg
public/assets/meta-banner.png
public/assets/director-poster.jpg
public/assets/team-nanda.jpg
public/assets/team-arya.jpg
public/assets/team-siti.jpg
public/assets/team-budi.jpg
public/assets/client_logos/ekaprintbali.png
public/assets/client_logos/sparco_gym.png
public/assets/client_logos/gorila_gym.jpg
public/assets/client_logos/biantaradiva-photo.png
public/assets/client_logos/exclusive-rent.png
public/assets/client_logos/stikes-binausada.png
public/assets/client_logos/mariz_property.jpeg
public/assets/client_logos/moonestate.jpg
public/assets/client_logos/eliterentbali.jpg
public/assets/client_logos/desapetak.png
```

Gambar eksternal (unsplash portfolio placeholder) dibiarkan tetap pakai URL
external karena memang bukan aset milik kamu — sudah didaftarkan di
`next.config.js` (`images.remotePatterns`) kalau nanti mau pakai `next/image`.

## Catatan implementasi

- **CSS**: `app/globals.css` adalah salinan 1:1 dari `style.css` lama, tidak ada
  class atau selector yang diubah — supaya tampilan identik.
- **Icons**: pakai `lucide-react` (bukan lagi CDN script `lucide.createIcons()`),
  secara visual identik dengan icon `data-lucide` di HTML asli.
- **Lenis smooth-scroll**, **star canvas**, **earth globe 3D**, **rocket timeline
  animation**, dan **fetch artikel Medium** — semua logic JS asli dipindah apa
  adanya ke dalam `useEffect`, tidak di-"react-ifikasi" berlebihan, supaya
  perilaku & timing animasinya sama persis.
- **Mobile menu & navbar scroll** diubah ke `useState` (cara React yang lebih
  idiomatic) tapi hasil visual & classname CSS-nya sama (`.scrolled`, `.active`).
- Dua halaman: `/` (Home) dan `/about` (About Us), sesuai 2 file HTML yang kamu
  kirim.

## Build untuk production

```bash
npm run build
npm start
```
