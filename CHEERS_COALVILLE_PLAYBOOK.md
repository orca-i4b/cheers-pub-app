# 🍻 "Cheers" — The Pub App! | Coalville Launch Playbook

## 1. The Core Positioning
* **Brand Name & Strapline:** **"Cheers" — The Pub App!**
* **Target Market:** Independent Freehouses, Micropubs, Village Locals, and Community Pubs (starting in **Coalville, Whitwick, Hugglescote, Ibstock & Ashby**).
* **The Problem We Solve:**
  1. Small pubs rely on Facebook, where algorithm changes mean fewer than 5% of locals see an event post *before* the night happens.
  2. Greene King and Wetherspoons have million-pound apps and massive group buying power. Independent pubs are fighting alone.
* **The Value Proposition:**
  1. **For Punters (Free):** One local app that coordinates every Open Mic, Live Band, Pub Quiz, Stand-Up night, and Drink/Food Promo in town—plus a digital loyalty stamp card and instant QR bar perks.
  2. **For Landlords (£50/month):** Takes 30 seconds to update, drives verifiable footfall on quiet mid-week and weekend nights, and unlocks **Independent Pub Co-op Buying** that saves more on cellar gas, card machines, and entertainment than the £50 subscription costs.

---

## 2. Kyran's Door-to-Door Landlord Pitch (Coalville Founding 6)

> *"Hi [Landlord Name], I'm Kyran from here in Coalville. We're launching **'Cheers' — The Pub App!** specifically for Coalville's independent pubs so locals have one place on their phone to see every live band, open mic, quiz night, and food/drink deal happening tonight—instead of posts getting buried on Facebook.*
>
> *We're signing up our first 6 Founding Pubs in Coalville. I've actually already mocked up your pub page on my phone right here [open **Kyran & Matthew Sales HQ** tab -> onboard in 60 seconds].*
>
> *We supply you with free table-talker QR cards for your tables so your existing regulars and everyone in the other 5 Coalville pubs see your nights. It's £50/month—which is about 3 extra tables a month—and once we have our local pubs on board, we're also pooling buying power on cellar gas, card terminals, and shared live acts to knock £150+ off your monthly running costs."*

---

## 3. Handling the 3 Classic Landlord Objections

1. **"I don't have time to update another thing."**
   * *Answer:* "You don't even have to log in if you don't want to. Snap a photo of your chalkboard on WhatsApp and send it to us—we'll put it live in 30 seconds, or use our 1-click chalkboard photo uploader."
2. **"How do I know it's actually bringing punters in?"**
   * *Answer:* "Every deal and loyalty stamp uses a live QR code scanned at the bar. Your dashboard shows you the exact number of views, 'I'm Going' RSVPs, and QR scans every month."
3. **"We're tied to a PubCo (e.g., Admiral / Marston's / Stonegate), so can we use the Co-op Buying?"**
   * *Answer:* "Yes! Even if you're wet-tied on beer, you're free-of-tie on live entertainment bookings, card terminals, bar consumables, crisps/snacks, and often cellar gas. Joining just one group deal covers your £50 fee."

---

## 4. How to Run the App Locally (With or Without Server)

1. **Full Database Mode (Recommended):**
   * Double-click `start_app.bat` (or run `python server.py` in terminal).
   * It initializes `taplocal.db` (SQLite) and opens `http://localhost:8080`.
   * It also prints your Wi-Fi LAN IP (e.g. `http://192.168.1.x:8080`) so you and Kyran can open it directly on your mobile phones over Wi-Fi!
2. **Instant Standalone Mode:**
   * You can also double-click `index.html` directly in File Explorer—it has a built-in LocalStorage engine so every button, QR code, and form works anywhere without needing a server running.
