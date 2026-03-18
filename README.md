# robo DIEM - Website Campanie Fundraising

Website pentru campania de fundraising a echipei robo DIEM pentru participarea la competiția internațională Western Edge FLL Explore de la Long Beach, California.

## 📁 Structura Proiectului

```
robotics-fundraiser/
├── index.html             # Main website
├── style.css              # Styling
├── script.js              # Frontend JavaScript
├── config.js              # Configuration (MODIFY HERE!)
├── logo-robo-diem.jpeg    # Logo echipă
├── logo-house-of-robotics.jpeg  # Logo club
├── favicon-robo-diem.jpg  # Favicon
├── config-examples.js     # Exemple de configurare
└── README.md              # Acest fișier
```

## 🚀 Cum să folosești website-ul

### 1. Client-Side Only

**Pentru hosting static:**

Deschide `index.html` direct în browser.

### 2. Actualizează progresul campaniei

**IMPORTANT:** Actualizează valoarea strânsă în fișierul `config.js`

Deschide `config.js` și modifică:

```javascript
const CONFIG = {
    // Current amount raised (in EUR)
    amountRaised: 0,  // ← MODIFICĂ AICI! Pune suma strânsă până acum
    
    // Total goal (in EUR)
    totalGoal: 35000,
    ...
}
```

Avionul se va deplasa automat de la Sibiu spre Long Beach pe măsură ce progresezi!

### 3. Actualizează detaliile bancare

În `config.js`, secțiunea `bankDetails`:

```javascript
bankDetails: {
    beneficiary: "House of Robotics",
    iban: "RO00 XXXX 0000 0000 0000 0000",  // ← IBAN-ul real
    bank: "[Numele Băncii]",                 // ← Numele băncii
    details: "Donație robo DIEM - Long Beach"
},
```

### 4. Adaugă sponsori/donatori

În `config.js`, secțiunea `donors`:

```javascript
donors: [
    {
        name: "Nume Companie",
        tier: "Tier 1 - Primele Roți Dințate",
        logoPath: "path/to/company-logo.png"  // opțional
    },
    {
        name: "Alta Companie SRL",
        tier: "Tier 2 - Aripi",
        logoPath: "logos/company2.png"
    }
    // Adaugă mai mulți sponsori aici
],
```

### 5. Adaugă evenimente

#### Activează secțiunea evenimente:

```javascript
showEvents: true,  // ← Schimbă la true pentru a afișa evenimente
```

#### Adaugă evenimente în listă:

```javascript
events: [
    {
        day: "20",
        month: "MAR",
        title: "Demonstrație Publică",
        description: "Demonstrație de robotică - Piața Mare Sibiu, ora 14:00"
    },
    {
        day: "5",
        month: "APR",
        title: "Workshop Robotică",
        description: "Workshop pentru copii - House of Robotics"
    }
    // Adaugă mai multe evenimente aici
],
```

## 📝 Cum funcționează formularele de contact

### Donații individuale
Când cineva apasă "Donează Acum" la donații individuale, va vedea detaliile bancare pentru transfer.

### Sponsorizări corporate

#### Cu Backend (Recomandat):
1. Compania completează formularul
2. Datele sunt salvate în Google form responses


## 🎨 Personalizare

### Culori
Culorile echipei sunt definite în `style.css`:
- Primară: #639B9A
- Secundară: #99CCCD
- Întunecată: #333333
- Accent cald: #FF8C61

### Modifică textul
- Textul principal este în `index.html`
- Slogan-ul: caută "Un parc arheologic..."
- Informații despre echipă: caută secțiunea `about-section`

## 🌐 Publicare Online

Pentru a pune website-ul online (hosting gratuit):

### Opțiunea 1: GitHub Pages
1. Creează un repository pe GitHub
2. Încarcă toate fișierele
3. Activează GitHub Pages din Settings
4. Website-ul va fi disponibil la `username.github.io/repo-name`

### Opțiunea 2: Netlify
1. Du-te pe [netlify.com](https://www.netlify.com)
2. Drag & drop folderul cu fișierele
3. Primești un URL instant gratuit

### Opțiunea 3: Hosting propriu
Încarcă toate fișierele pe un server web (Apache, Nginx, etc.)

## 📱 Responsive Design

Website-ul este optimizat pentru:
- 💻 Desktop
- 📱 Telefon mobil
- 📲 Tabletă

## ⚙️ Update Quick Reference

| Ce vrei să modifici | Unde modifici |
|---------------------|---------------|
| Suma strânsă | `config.js` → `amountRaised` |
| Fotografie echipă | Înlocuiește `team-placeholder.jpg` |
| Detalii bancare | `config.js` → `bankDetails` |
| Sponsori | `config.js` → `donors` |
| Evenimente | `config.js` → `events` și `showEvents: true` |
| Text despre echipă | `index.html` → secțiunea `about-section` |

## 🆘 Suport

Pentru probleme sau întrebări:
- Email: robotics.sibiu@gmail.com

## 📄 Licență

© 2026 robo DIEM - House of Robotics. Toate drepturile rezervate.

---

**Mult succes în campania de fundraising! 🚀✈️**
