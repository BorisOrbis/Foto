# FotoKalk — Kalkulator honorara za fotografe

PWA aplikacija za fotografe koji rade putem **Adriatic.hr** ugovora ili privatnog najma (RH, porezna pravila 2026).

## 🚀 Živuća aplikacija

**URL:** `https://<tvoj-github-username>.github.io/fototeren/`

---

## 📱 Instalacija na mobitel (Android / iOS)

1. Otvori URL u Chromeu (Android) ili Safariju (iOS)
2. Klikni **"Dodaj na početni zaslon"** (Install / Add to Home Screen)
3. Aplikacija radi i **offline** — zahvaljujući Service Workeru

---

## 🔄 Automatski update

Svaki `git push` na `main` granu:
1. Pokreće GitHub Actions workflow
2. Generira novu verziju Service Workera (timestamp)
3. Deploya na GitHub Pages

Mobitel automatski detektira novu verziju i osvježava aplikaciju — **bez ručnog brisanja cachea**.

---

## ⚙️ Postavljanje (jedanput)

### 1. Napravi GitHub repozitorij

```bash
git init
git add .
git commit -m "Initial commit — FotoKalk v1"
git branch -M main
git remote add origin https://github.com/<USERNAME>/fototeren.git
git push -u origin main
```

### 2. Aktiviraj GitHub Pages

- Idi na: **Settings → Pages**
- Source: **GitHub Actions**
- Spremi

### 3. Provjeri deployment

- Idi na **Actions** tab → vidi workflow kako se izvršava
- Nakon ~1 minute, aplikacija je živa na URL-u

---

## 📁 Struktura projekta

```
fototeren/
├── index.html          # Glavna aplikacija (sve u jednom fajlu)
├── manifest.json       # PWA manifest
├── sw.js               # Service Worker (auto-verzioniran)
├── icon-192.png        # PWA ikona
├── icon-512.png        # PWA ikona (velika)
├── upute.md            # Korisničke upute
├── .gitignore
└── .github/
    └── workflows/
        └── deploy.yml  # GitHub Actions deployment pipeline
```

---

## 🛠️ Lokalni razvoj

Otvori `index.html` direktno u browseru ili koristi lokalni server:

```bash
# Python (ako je instaliran)
python3 -m http.server 8080
# Zatim otvori: http://localhost:8080
```

---

*FotoKalk — RH porezna pravila 2026
