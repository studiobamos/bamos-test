# BAMOS! testsite (Astro + Pages CMS)

## Lokaal draaien
```
npm install
npm run dev      # http://localhost:4321
npm run build    # output in dist/
```

## Structuur
- `src/data/site.json` – site-instellingen (naam, kop, kleur, e-mail)
- `src/content/diensten/*.md` – diensten
- `src/content/projecten/*.md` – projecten
- `public/media/` – geüploade afbeeldingen
- `.pages.yml` – Pages CMS-config (bepaalt welke velden je ziet)

## Pages CMS koppelen
1. Push naar GitHub (branch `main`).
2. Ga naar pagescms.org, log in met GitHub en installeer de GitHub-app op deze repo.
3. Open de repo in Pages CMS. Hij leest `.pages.yml` en toont Site-instellingen, Diensten en Projecten.
4. Elke wijziging in het CMS is een commit op de repo. Je host (Netlify, Cloudflare Pages, Vercel) bouwt dan automatisch opnieuw.
