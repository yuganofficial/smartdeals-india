# SmartDeals India — Affiliate E-commerce Website

**🛒 LIVE SITE: https://yuganofficial.github.io/smartdeals-india/** — best Amazon, Flipkart & Meesho deals, handpicked with buying guides.

Amazon + Flipkart + Meesho affiliate deals site. Pure HTML/CSS/JS — fast, mobile-first, SEO-optimized.

## Files
| File | Purpose |
|------|---------|
| index.html | Home – hero, categories, 8 top deals, trending searches, FAQ |
| electronics.html / mobiles.html / kitchen.html / beauty.html / fashion.html / fitness.html | 6 category pages (6 products each, buying guide + FAQ) |
| about.html / contact.html / privacy.html / disclosure.html | Trust pages (required by affiliate programs) |
| style.css / site.js | Design + store-aware search |
| sitemap.xml / robots.txt | Google indexing |

## After Approval — Replace IDs (2 steps)
1. **Amazon Associates tag** — replace `YOURTAG-21` in ALL files with your tag (e.g. `smartdea-21`).
2. **Flipkart affiliate id** — replace `YOURAFFID` in ALL files with your id (from affiliate.flipkart.com).
   - Also set both in `site.js` (used by header search box).
3. **Meesho** — links are plain `meesho.com/search?q=...` now. Join Meesho affiliate via
   **EarnKaro / Cuelinks / INVOLVE Asia**, then either replace the links with tracked ones
   or (easiest) install the network's automatic link converter snippet in every page.
4. Update the contact email in `contact.html` (placeholder: hello@smartdealsindia.example).
5. After publishing, replace `REPLACEUSERNAME` in all files + `robots.txt` + `sitemap.xml`
   with the final live URL.

## Publish (GitHub Pages — free, indexed by Google)
1. Create GitHub account → repo `smartdeals-india` (Public) → upload these files → Settings → Pages → Branch: main → Save.
2. Site goes live at `https://<username>.github.io/smartdeals-india/` (~2 min).
3. Submit the URL in Google Search Console (free) → indexing starts in 1–3 days.

## Amazon Associates Approval Checklist (site is ready for it)
- ✅ Affiliate disclosure on every page + dedicated page
- ✅ Privacy policy page
- ✅ About + Contact pages
- ✅ Real content (guides, FAQs) — not just links
- ✅ Working navigation and mobile-friendly layout
