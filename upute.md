# FotoKalk — Upute za instalaciju i deployment

## 📁 Sadržaj paketa

| Fajl | Opis |
|------|------|
| `adriatic_calculator.html` | Glavna aplikacija (ispravljena) |
| `manifest.json` | PWA manifest — potreban za instalaciju |
| `sw.js` | Service Worker — offline podrška |
| `icon-192.png` | Ikona 192×192 px |
| `icon-512.png` | Ikona 512×512 px |

---

## 🖥️ Offline lokalna upotreba (najjednostavnije)

Sve fajlove stavite u **isti folder** i otvorite `adriatic_calculator.html` 
u pregledniku. Aplikacija radi bez interneta, osim Excel exporta 
koji zahtijeva xlsx.js.

**Za Excel export offline:**  
Preuzmite `xlsx.full.min.js` s cdnjs.cloudflare.com i stavite ga u isti folder,
zatim promijenite redak 7 u HTML-u:
```html
<!-- Umjesto CDN linka: -->
<script src="xlsx.full.min.js"></script>
```
Ako xlsx.js nije dostupan, aplikacija automatski exporta **CSV** kao fallback.

---

## 📱 PWA instalacija (Add to Home Screen)

**Zahtjevi:** Svi fajlovi moraju biti na **HTTPS** serveru u istom direktoriju.

### Opcija A — Lokalni server (za testiranje)
```bash
# Python 3 (bilo koji direktorij):
python3 -m http.server 8080
# Otvoriti: http://localhost:8080/adriatic_calculator.html
```

### Opcija B — GitHub Pages (besplatno)
1. Napravite GitHub repo
2. Uploadajte sve fajlove
3. Omogućite GitHub Pages (Settings → Pages → main branch)
4. URL: `https://vaskorisnicko.github.io/repo-naziv/adriatic_calculator.html`
5. Na mobitelu: izbornik → "Add to Home Screen" / "Instaliraj aplikaciju"

### Opcija C — Netlify Drop (najbrže, besplatno)
1. Otvorite app.netlify.com/drop
2. Prevucite cijeli folder
3. Dobijete HTTPS URL — gotovo!

---

## 🔄 Ispravke u ovoj verziji

### Kritični bugovi (6)
- ✅ Google Calendar URL — ispravljen format datuma
- ✅ Toast poruke — ispravno prikazuju HTML znakove (✓ ✗)
- ✅ Excel export — CSV fallback kada xlsx.js nije dostupan offline
- ✅ XSS zaštita — esc() sada escapea i navodnike
- ✅ Memory leak — URL.createObjectURL sad poziva revokeObjectURL
- ✅ Jedinstveni ID-ovi — koristi crypto.randomUUID() umjesto Date.now()+1

### Pravne ispravke (4)
- ✅ JOPPD rok — ispravno "na dan isplate" umjesto zastarjelih "8 dana"
- ✅ Ugovor čl.4 — km stopa dinamički iz vaših postavki, ne više hardcoded 0,40
- ✅ ZASP referenca — dodan NN 32/24
- ✅ Pravna formulacija čl.2 — jasnija formulacija prava korištenja

### PWA/Offline (7)
- ✅ manifest.json i Service Worker — prava PWA instalacija
- ✅ viewport-fit=cover — podržava notch (iPhone X, Android)
- ✅ Safe-area CSS insets
- ✅ confirm() zamijenjen custom modalima — radi na iOS PWA
- ✅ localStorage error handling (QuotaExceededError)
- ✅ GDPR obavijest o lokalnoj pohrani podataka
- ✅ Theme color meta sync (mijenja se s tamnom/svjetlom temom)

### Optimizacije (5)
- ✅ Chart preserveAspectRatio popravljen
- ✅ Touch targeti za kategorije — veće na mobilnom
- ✅ Monospace font stack poboljšan
- ✅ PDV prag upozorenje (35k+ EU godišnje)
- ✅ Viša porezna stopa — jasnije naznačen prag 50.400 €

---

## ⚠️ Preostale napomene

**Umirovljenik:** Aplikacija upozorava, ali ne računima automatski
dodatni MIO 5% za umirovljenike (čl.213 Zakona o doprinosima).
Konzultirajte računovođu za egzaktni obračun.

**GDPR:** Za komercijalnu upotrebu s podacima klijenata preporučuje
se konsultacija s odvjetnikom o minimalnim zahtjevima GDPR-a.

---
*FotoKalk — kalkulator honorara za fotografe | RH 2026*
