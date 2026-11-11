/**
 * TapLocal / PubPulse / Cheers! - Interactive Frontend Engine
 * Works with Python SQLite Backend (/api/*) AND Standalone Browser LocalStorage Fallback
 */

const BRAND_CONFIGS = {
  Cheers: {
    name: "Cheers",
    icon: "🍻",
    tagline: '"Cheers" — The Pub App! • Live Nights, Proper Pubs & Local Pint Perks'
  },
  TapLocal: {
    name: "TapLocal",
    icon: "🍺",
    tagline: "Tap into your local — Live Nights, Proper Pubs & Exclusive Deals"
  },
  PubPulse: {
    name: "PubPulse",
    icon: "⚡",
    tagline: "The live heartbeat of Coalville's independent pubs & bars"
  }
};

const FALLBACK_STATE = {
  pubs: [
    {
      id: 1,
      name: "The Snibston New Inn",
      area: "Coalville Town Centre",
      address: "Belvoir Rd, Coalville LE67 3PH",
      tagline: "Proper Cask Ales, Live Acoustic Weekends & Hearty Pub Classics",
      description: "Traditional independent community pub in the heart of Coalville. Famous for our Thursday Open Mic, local Charnwood Brewery guest ales, and Sunday carvery.",
      tie_status: "Freehouse",
      subscription_tier: "Founder (£50/mo)",
      monthly_fee: 50,
      rating: 4.8,
      opening_hours: "Mon-Thu 12:00-23:00 | Fri-Sat 12:00-00:30 | Sun 12:00-22:30",
      phone: "01530 832101",
      hero_gradient: "linear-gradient(135deg, #b45309 0%, #78350f 100%)",
      badge_emoji: "🎸",
      tags: ["Live Music", "Real Ale", "Dog Friendly", "Beer Garden", "Home Cooked Food"],
      menu: [
        { name: "Charnwood Vixen Cask Ale (Pint)", category: "Drinks", price: "£4.20", note: "Local Brewery" },
        { name: "Steak & Ale Pie + Chips", category: "Food", price: "£12.95", note: "Homemade shortcrust" },
        { name: "Double Smash Pub Burger & Pint", category: "Food", price: "£13.50", note: "Wed/Thu Special" },
        { name: "House Draught Lager (Pint)", category: "Drinks", price: "£4.50", note: "Crisp & cold" }
      ],
      loyalty_goal: 6,
      loyalty_reward: "7th Pint Free on any Cask Ale or Draught Cider",
      views_month: 418,
      rsvps_month: 64,
      redemptions_month: 39
    },
    {
      id: 2,
      name: "The Railway Tavern",
      area: "Coalville (Station St)",
      address: "Station St, Coalville LE67 3EG",
      tagline: "Coalville's Home for Live Bands, Stand-Up Comedy & Craft Taps",
      description: "Lively independent venue steps from the old railway line. Every Friday and Saturday brings touring rock/indie cover bands, monthly stand-up comedy, and street-food popups.",
      tie_status: "Freehouse",
      subscription_tier: "Founder (£50/mo)",
      monthly_fee: 50,
      rating: 4.9,
      opening_hours: "Mon-Thu 15:00-23:00 | Fri-Sat 12:00-01:00 | Sun 12:00-22:30",
      phone: "01530 814922",
      hero_gradient: "linear-gradient(135deg, #1e3a8a 0%, #312e81 100%)",
      badge_emoji: "🎤",
      tags: ["Live Bands", "Stand-Up Comedy", "Late License", "Craft Beer", "Pool Table"],
      menu: [
        { name: "Neck Oil Session IPA (Pint)", category: "Drinks", price: "£5.40", note: "Draught" },
        { name: "Loaded Dirty Fries + Jalapeños", category: "Food", price: "£7.50", note: "Sharer" },
        { name: "2x Cocktails Happy Hour", category: "Drinks", price: "£11.00", note: "Fri & Sat 5-8pm" },
        { name: "Wood-Fired Pepperoni Pizza", category: "Food", price: "£10.95", note: "Served till 10pm" }
      ],
      loyalty_goal: 5,
      loyalty_reward: "Free Shot or House Pint on Live Band Nights",
      views_month: 512,
      rsvps_month: 89,
      redemptions_month: 51
    },
    {
      id: 3,
      name: "The Quarries Rest",
      area: "Whitwick, Coalville",
      address: "Market Place, Whitwick LE67 5DT",
      tagline: "Cosy Village Freehouse, Fireside Pints & Legendary Tuesday Quiz",
      description: "Nestled on the edge of Charnwood Forest in Whitwick. Dog walkers' favourite with roaring log fires, rotating guest bitters, and our packed-out Tuesday night cash quiz.",
      tie_status: "Freehouse",
      subscription_tier: "Founder (£50/mo)",
      monthly_fee: 50,
      rating: 4.7,
      opening_hours: "Mon-Sun 12:00-23:00",
      phone: "01530 836410",
      hero_gradient: "linear-gradient(135deg, #065f46 0%, #14532d 100%)",
      badge_emoji: "🧠",
      tags: ["Pub Quiz", "Dog Friendly", "Real Fire", "Sunday Roast", "Walkers Welcome"],
      menu: [
        { name: "Pedigree Amber Ale (Pint)", category: "Drinks", price: "£4.30", note: "Cellar conditioned" },
        { name: "Ploughman's Cob & Pork Pie Platter", category: "Food", price: "£9.95", note: "Local Melton Pork Pie" },
        { name: "Sunday Trio Roast", category: "Food", price: "£15.95", note: "Giant Yorkshire pud" }
      ],
      loyalty_goal: 6,
      loyalty_reward: "Free Bowl of Seasoned Chips or Pint on Quiz Night",
      views_month: 310,
      rsvps_month: 47,
      redemptions_month: 29
    },
    {
      id: 4,
      name: "The Charnwood Arms Indie Tap",
      area: "Hugglescote, Coalville",
      address: "Ashby Rd, Hugglescote LE67 2DD",
      tagline: "Sports, Darts, Karaoke Fridays & Proper Mid-Week Value",
      description: "Friendly Hugglescote local where everyone knows your name. Big screen footy, 3 dartboards, Friday party karaoke, and unbeatable midweek pie & pint nights.",
      tie_status: "PubCo Tied (Free on Food & Ancillaries)",
      subscription_tier: "Founder (£50/mo)",
      monthly_fee: 50,
      rating: 4.6,
      opening_hours: "Mon-Thu 12:00-23:00 | Fri-Sat 11:30-00:30 | Sun 12:00-22:30",
      phone: "01530 811209",
      hero_gradient: "linear-gradient(135deg, #7c2d12 0%, #431407 100%)",
      badge_emoji: "🎯",
      tags: ["Karaoke", "Darts & Pool", "Live Sport", "Beer Garden", "Family Friendly"],
      menu: [
        { name: "Carling / Coors / Guinness (Pint)", category: "Drinks", price: "£4.40", note: "Ice Cold" },
        { name: "Curried Chicken Basket & Naan", category: "Food", price: "£10.50", note: "Thursday Curry Night" },
        { name: "Fish, Chips & Mushy Peas", category: "Food", price: "£11.95", note: "Beer battered" }
      ],
      loyalty_goal: 6,
      loyalty_reward: "£2 Off Any Main Meal or Free Soft/Draught Pint",
      views_month: 275,
      rsvps_month: 34,
      redemptions_month: 22
    },
    {
      id: 5,
      name: "The Miner's Anchor",
      area: "Ibstock, near Coalville",
      address: "High St, Ibstock LE67 6LG",
      tagline: "Heritage Pub celebrating Coalville's Mining Roots with Live Folk & Ska",
      description: "Proud local pub in Ibstock supporting grassroots musicians, Northern Soul DJs, and local microbreweries. Huge covered courtyard with heaters.",
      tie_status: "Freehouse",
      subscription_tier: "Founder (£50/mo)",
      monthly_fee: 50,
      rating: 4.8,
      opening_hours: "Tue-Thu 14:00-23:00 | Fri-Sun 12:00-00:00",
      phone: "01530 260881",
      hero_gradient: "linear-gradient(135deg, #4c1d95 0%, #1e1b4b 100%)",
      badge_emoji: "🎺",
      tags: ["Northern Soul & Ska", "Open Mic", "Heated Courtyard", "Microbrewery Taps"],
      menu: [
        { name: "Coalville Gold Craft Pale (Pint)", category: "Drinks", price: "£4.60", note: "4.5% ABV" },
        { name: "Cob Roll with Hot Roast Beef & Gravy Dip", category: "Food", price: "£6.50", note: "Bar Snack" },
        { name: "Sharing Nacho Mountain", category: "Food", price: "£8.95", note: "Pulled pork option" }
      ],
      loyalty_goal: 6,
      loyalty_reward: "Free Pint of Coalville Gold after 6 Stamps",
      views_month: 289,
      rsvps_month: 52,
      redemptions_month: 31
    },
    {
      id: 6,
      name: "The Clocktower Alehouse",
      area: "Coalville Memorial Square",
      address: "Memorial Sq, Coalville LE67 3TU",
      tagline: "Micro-Pub & Craft Cider House right by the Clocktower",
      description: "Intimate, conversation-led micropub pouring 6 rotating gravity cask ales, 8 farmhouse ciders, and hosting acoustic Sunday sessions and comedy previews.",
      tie_status: "Freehouse",
      subscription_tier: "Founder (£50/mo)",
      monthly_fee: 50,
      rating: 4.9,
      opening_hours: "Wed-Thu 16:00-22:30 | Fri-Sat 13:00-23:30 | Sun 13:00-21:00",
      phone: "01530 839904",
      hero_gradient: "linear-gradient(135deg, #0f766e 0%, #115e59 100%)",
      badge_emoji: "🍻",
      tags: ["Micropub", "Real Cider", "Acoustic Sundays", "Cheese & Pork Pies", "Dog Friendly"],
      menu: [
        { name: "3-Thirds Tasting Flight Paddle", category: "Drinks", price: "£4.80", note: "Pick any 3 cask ales" },
        { name: "Local Stilton & Leicestershire Red Cheese Board", category: "Food", price: "£8.50", note: "With chutney & crackers" },
        { name: "Farmhouse Scrumpy Cider (Pint)", category: "Drinks", price: "£4.40", note: "Somerset & Herefordshire" }
      ],
      loyalty_goal: 5,
      loyalty_reward: "Free Tasting Flight Paddle on 5th Visit",
      views_month: 364,
      rsvps_month: 43,
      redemptions_month: 35
    }
  ],
  events: [
    { id: 1, pub_id: 1, pub_name: "The Snibston New Inn", pub_area: "Coalville Town Centre", pub_emoji: "🎸", title: "Acoustic Open Mic Night (Hosted by Dan & Guests)", category: "Open Mic", day_tag: "TONIGHT", date_label: "Tonight", time_label: "8:00 PM - 11:00 PM", description: "Bring your guitar or just grab a pint! Free pint for every performer who plays a 3-song set.", entry_price: "Free Entry (Free Pint for Performers)", rsvp_count: 34, featured: 1 },
    { id: 2, pub_id: 2, pub_name: "The Railway Tavern", pub_area: "Coalville (Station St)", pub_emoji: "🎤", title: "Live Stand-Up Comedy Club: 4 Circuit Comedians", category: "Stand-Up", day_tag: "TONIGHT", date_label: "Tonight", time_label: "8:30 PM Doors 7:45 PM", description: "Midlands Comedy Circuit takeover! Featuring 3 top comics + MC right here in Coalville without driving to Leicester.", entry_price: "£6 on Door / £4 with App QR", rsvp_count: 58, featured: 1 },
    { id: 3, pub_id: 3, pub_name: "The Quarries Rest", pub_area: "Whitwick, Coalville", pub_emoji: "🧠", title: "Big Fat Whitwick Cash Quiz + Play Your Cards Right", category: "Pub Quiz", day_tag: "TOMORROW", date_label: "Tomorrow Night", time_label: "8:00 PM Start", description: "£100 rolling jackpot! Teams up to 6. Free bowl of hot wedges for every team that checks in on the app.", entry_price: "£2 per person", rsvp_count: 41, featured: 0 },
    { id: 4, pub_id: 2, pub_name: "The Railway Tavern", pub_area: "Coalville (Station St)", pub_emoji: "🎤", title: "The Electric Modfathers (Live Indie/Britpop Band)", category: "Live Bands", day_tag: "FRIDAY", date_label: "This Friday", time_label: "9:00 PM - Late", description: "2-hour live set of Oasis, Jam, Blur, Arctic Monkeys & Stone Roses classics.", entry_price: "Free Entry", rsvp_count: 76, featured: 1 },
    { id: 5, pub_id: 4, pub_name: "The Charnwood Arms Indie Tap", pub_area: "Hugglescote, Coalville", pub_emoji: "🎯", title: "Friday Party Karaoke & Spin-The-Wheel Bar Prizes", category: "Karaoke", day_tag: "FRIDAY", date_label: "This Friday", time_label: "8:30 PM - Midnight", description: "Sing a tune and spin the wheel for free bar tabs, shots, and merch!", entry_price: "Free Entry", rsvp_count: 29, featured: 0 },
    { id: 6, pub_id: 5, pub_name: "The Miner's Anchor", pub_area: "Ibstock, near Coalville", pub_emoji: "🎺", title: "Saturday Ska, 2-Tone & Northern Soul Vinyl Night", category: "Live Bands", day_tag: "SATURDAY", date_label: "This Saturday", time_label: "8:00 PM - Midnight", description: "Original vinyl DJs spinning Madness, The Specials, and Motown floorfillers in the courtyard.", entry_price: "Free Entry", rsvp_count: 63, featured: 1 },
    { id: 7, pub_id: 6, pub_name: "The Clocktower Alehouse", pub_area: "Coalville Memorial Square", pub_emoji: "🍻", title: "Lazy Sunday Afternoon Unplugged Folk & Cider Session", category: "Live Music", day_tag: "SUNDAY", date_label: "This Sunday", time_label: "3:30 PM - 6:30 PM", description: "Relaxed acoustic duo by the Clocktower with £3.80 guest ciders all afternoon.", entry_price: "Free Entry", rsvp_count: 27, featured: 0 }
  ],
  deals: [
    { id: 1, pub_id: 1, pub_name: "The Snibston New Inn", pub_area: "Coalville Town Centre", pub_emoji: "🎸", title: "Burger & Pint Night for £11.95", subtitle: "Any gourmet smash burger + pint of cask ale, draught lager or cider", category: "Food & Drink", valid_days: "Wed & Thu All Day", discount_badge: "SAVE £4.50", code_prefix: "SNIB", redemptions: 39 },
    { id: 2, pub_id: 2, pub_name: "The Railway Tavern", pub_area: "Coalville (Station St)", pub_emoji: "🎤", title: "£1 Off Your First Pint on Band or Comedy Nights", subtitle: "Show QR code at the bar before 9:30pm for £1 off any draught pint", category: "Drink Promo", valid_days: "Fri & Sat Nights", discount_badge: "£1 OFF PINT", code_prefix: "RAIL", redemptions: 51 },
    { id: 3, pub_id: 3, pub_name: "The Quarries Rest", pub_area: "Whitwick, Coalville", pub_emoji: "🧠", title: "Free Bowl of Seasoned Wedges for Quiz Teams", subtitle: "Check in with 3+ mates at the bar on Quiz Night", category: "Food Promo", valid_days: "Tuesdays 7pm-9pm", discount_badge: "FREE SHARER", code_prefix: "QUAR", redemptions: 29 },
    { id: 4, pub_id: 4, pub_name: "The Charnwood Arms Indie Tap", pub_area: "Hugglescote, Coalville", pub_emoji: "🎯", title: "2-for-£16 Homemade Curry & Naan Night", subtitle: "Bring a mate on Thursdays and get 2 curries + rice + naan for £16", category: "Food Promo", valid_days: "Thursdays 5pm-9pm", discount_badge: "2 FOR £16", code_prefix: "CHAR", redemptions: 22 },
    { id: 5, pub_id: 5, pub_name: "The Miner's Anchor", pub_area: "Ibstock, near Coalville", pub_emoji: "🎺", title: "£3.80 Local Craft Pale Pint (App Local Rate)", subtitle: "Exclusive to app holders: pints of Coalville Gold at £3.80 instead of £4.60", category: "Drink Promo", valid_days: "Mon - Thu 4pm-8pm", discount_badge: "80p OFF/PINT", code_prefix: "MINE", redemptions: 31 },
    { id: 6, pub_id: 6, pub_name: "The Clocktower Alehouse", pub_area: "Coalville Memorial Square", pub_emoji: "🍻", title: "Cheese Board + 2 Tasting Flights for £15", subtitle: "Local Stilton & Red Leicester board + two 3-third ale/cider paddles", category: "Food & Drink", valid_days: "Wed, Thu & Sun", discount_badge: "SAVE £4.10", code_prefix: "CLCK", redemptions: 35 }
  ],
  coop_deals: [
    { id: 1, supplier: "Midlands Cellar Gas & Cleaning Co-op", category: "Cellar Gas & Cleaning", title: "60/40 & CO2 Cellar Gas Cylinders + Purple Line Cleaner", tie_compatible: "100% Tie-Safe (All Pubs Eligible)", avg_monthly_saving: 75, min_pubs_required: 8, current_pubs_joined: 6, description: "Group rate across Coalville pubs cuts cylinder rental by 35% and bulk purple line cleaner by 40%." },
    { id: 2, supplier: "Leicestershire Live Entertainment Circuit", category: "Live Music & Acts", title: "Shared Acoustic & Band Booking Circuit (4-Pub Block Rate)", tie_compatible: "100% Tie-Safe (All Pubs Eligible)", avg_monthly_saving: 120, min_pubs_required: 6, current_pubs_joined: 5, description: "Book solo artists, duos, and comedians across 4 local non-competing nights—saving £30-£40 per gig while guaranteeing artists regular local work." },
    { id: 3, supplier: "Hospitality Card Terminal & Merchant Group", category: "Card Machines & EPOS", title: "0.39% Debit / 0.69% Credit Card Processing + Next-Day Settlement", tie_compatible: "100% Tie-Safe (All Pubs Eligible)", avg_monthly_saving: 95, min_pubs_required: 10, current_pubs_joined: 6, description: "Collective bargaining rate vs standard 1.2%-1.5% independent pub merchant fees." },
    { id: 4, supplier: "Bar Snacks, Crisps & Glassware Bulk Buy", category: "Snacks & Bar Sundries", title: "Wholesale Pork Scratchings, Nuts, Pipers Crisps & Toughened Pint Glasses", tie_compatible: "Tie-Safe for 90% of Leases", avg_monthly_saving: 55, min_pubs_required: 6, current_pubs_joined: 6, description: "Direct palette split delivered monthly to Coalville hub—28% cheaper than cash & carry." },
    { id: 5, supplier: "Charnwood & East Mids Microbrewery Cask Collective", category: "Guest Cask & Craft Beer", title: "£18 Off Per 9-Gallon Firkin on Rotating Local Guest Ales", tie_compatible: "Freehouses & Guest-Ale Eligible Pubs", avg_monthly_saving: 145, min_pubs_required: 6, current_pubs_joined: 5, description: "Combined weekly drop to Coalville & Whitwick saves brewer dray costs, passed straight back to landlords (~25p extra margin per pint)." }
  ]
};

let appState = JSON.parse(JSON.stringify(FALLBACK_STATE));
let activeBrand = "Cheers";
let activeCategory = "ALL";
let searchQuery = "";
let selectedLandlordPubId = 1;
let userStamps = 4; // Starts with 4 stamps out of 6 for demo excitement
let activeModalDeal = null;

let isStaticHost = window.location.protocol === "file:" || window.location.hostname.endsWith("github.io");

function showToast(message) {
  let container = document.getElementById("toastContainer");
  if (!container) {
    container = document.createElement("div");
    container.id = "toastContainer";
    container.className = "toast-container";
    document.body.appendChild(container);
  }
  const toast = document.createElement("div");
  toast.className = "toast-banner";
  toast.innerHTML = `<span>${message}</span>`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transition = "opacity 0.25s ease";
    setTimeout(() => toast.remove(), 260);
  }, 2800);
}

async function apiFetch(path, options = {}) {
  if (isStaticHost) {
    throw new Error("Static host mode");
  }
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 1200);
  try {
    const res = await fetch(path, { ...options, signal: controller.signal });
    clearTimeout(timer);
    return res;
  } catch (err) {
    clearTimeout(timer);
    isStaticHost = true; // Switch to instant client-side mode if server isn't reachable
    throw err;
  }
}

async function loadState() {
  try {
    const res = await apiFetch("/api/state");
    if (res.ok) {
      appState = await res.json();
      saveLocalFallback();
      renderAll();
      return;
    }
  } catch (e) {
    // Running standalone or on static cloud host — use localStorage or fallback
  }
  const saved = localStorage.getItem("taplocal_state_v1");
  if (saved) {
    try {
      appState = JSON.parse(saved);
    } catch (err) {
      appState = JSON.parse(JSON.stringify(FALLBACK_STATE));
    }
  }
  renderAll();
}

function saveLocalFallback() {
  try {
    localStorage.setItem("taplocal_state_v1", JSON.stringify(appState));
  } catch (e) {}
}

function resetDemoData() {
  appState = JSON.parse(JSON.stringify(FALLBACK_STATE));
  userStamps = 4;
  saveLocalFallback();
  renderAll();
  showToast("🔄 Demo data reset to the 6 Founding Coalville Pubs!");
}

function switchBrand(brandKey) {
  activeBrand = brandKey;
  const cfg = BRAND_CONFIGS[brandKey] || BRAND_CONFIGS.Cheers;
  document.getElementById("brandNameText").textContent = cfg.name;
  document.getElementById("brandIconBox").textContent = cfg.icon;
  document.getElementById("brandSubtitleText").textContent = cfg.tagline;
  document.querySelectorAll(".brand-pill").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.brand === brandKey);
  });
  document.querySelectorAll(".dynamic-brand-name").forEach(el => {
    el.textContent = cfg.name;
  });
  showToast(`✨ Switched branding to "${cfg.name}"`);
}

function switchView(viewId) {
  document.querySelectorAll(".view-section").forEach(sec => {
    sec.classList.toggle("active", sec.id === `view-${viewId}`);
  });
  document.querySelectorAll(".mode-tab").forEach(tab => {
    tab.classList.toggle("active", tab.dataset.view === viewId);
  });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function filterByCategory(cat) {
  activeCategory = cat;
  document.querySelectorAll(".cat-pill").forEach(pill => {
    pill.classList.toggle("active", pill.dataset.cat === cat);
  });
  renderPunterFeed();
}

function onSearchInput(val) {
  searchQuery = val.trim().toLowerCase();
  renderPunterFeed();
}

function renderAll() {
  renderPilotMetrics();
  renderPunterFeed();
  renderDealsSidebar();
  renderStampCard();
  renderLandlordPortal();
  renderCoopHub();
  renderFounderHQ();
}

function renderPilotMetrics() {
  const totalPubs = appState.pubs.length;
  const totalEvents = appState.events.length;
  const totalRedemptions = appState.pubs.reduce((acc, p) => acc + (p.redemptions_month || 0), 0);
  const totalRsvps = appState.pubs.reduce((acc, p) => acc + (p.rsvps_month || 0), 0);

  document.getElementById("metricPubs").textContent = totalPubs;
  document.getElementById("metricEvents").textContent = totalEvents;
  document.getElementById("metricRsvps").textContent = totalRsvps;
  document.getElementById("metricRedemptions").textContent = totalRedemptions;
}

function renderPunterFeed() {
  const eventsContainer = document.getElementById("eventsContainer");
  const pubsContainer = document.getElementById("pubsContainer");

  const filteredEvents = appState.events.filter(ev => {
    const matchesCat = activeCategory === "ALL" || ev.category.toLowerCase().includes(activeCategory.toLowerCase());
    const matchesSearch = !searchQuery ||
      ev.title.toLowerCase().includes(searchQuery) ||
      ev.pub_name.toLowerCase().includes(searchQuery) ||
      ev.category.toLowerCase().includes(searchQuery) ||
      ev.pub_area.toLowerCase().includes(searchQuery);
    return matchesCat && matchesSearch;
  });

  if (filteredEvents.length === 0) {
    eventsContainer.innerHTML = `<div class="panel-card" style="grid-column: 1/-1; text-align:center; color: var(--text-muted);">No events match that filter yet — try selecting "All" or adding one in the Landlord Portal!</div>`;
  } else {
    eventsContainer.innerHTML = filteredEvents.map(ev => `
      <div class="event-card">
        <div>
          <div class="event-top">
            <span class="day-badge ${ev.day_tag === 'TONIGHT' ? 'tonight' : ''}">${ev.day_tag} • ${ev.time_label}</span>
            <span class="cat-tag">${ev.category}</span>
          </div>
          <div class="event-title">${ev.title}</div>
          <div class="event-pub" onclick="openPubModal(${ev.pub_id})">${ev.pub_emoji || '🍺'} ${ev.pub_name} (${ev.pub_area})</div>
          <p class="event-desc" style="margin-top:0.4rem;">${ev.description}</p>
        </div>
        <div class="event-footer">
          <span style="color: var(--emerald); font-weight:700;">${ev.entry_price}</span>
          <button type="button" class="btn btn-outline" onclick="rsvpEvent(${ev.id})">
            🙌 I'm Going (${ev.rsvp_count})
          </button>
        </div>
      </div>
    `).join("");
  }

  const filteredPubs = appState.pubs.filter(pub => {
    if (!searchQuery) return true;
    return pub.name.toLowerCase().includes(searchQuery) ||
      pub.area.toLowerCase().includes(searchQuery) ||
      pub.tagline.toLowerCase().includes(searchQuery) ||
      (pub.tags || []).some(t => t.toLowerCase().includes(searchQuery));
  });

  pubsContainer.innerHTML = filteredPubs.map(pub => {
    const pubEventsCount = appState.events.filter(e => e.pub_id === pub.id).length;
    const pubDealsCount = appState.deals.filter(d => d.pub_id === pub.id).length;
    return `
      <div class="pub-card">
        <div class="pub-hero" style="background: ${pub.hero_gradient};">
          <div class="pub-emoji-badge">${pub.badge_emoji || '🍺'}</div>
          <div class="pub-area-tag">📍 ${pub.area} • ⭐ ${pub.rating}</div>
          <div class="pub-name">${pub.name}</div>
        </div>
        <div class="pub-body">
          <div class="pub-tagline">${pub.tagline}</div>
          <div class="tag-row">
            ${(pub.tags || []).map(t => `<span class="mini-tag">${t}</span>`).join("")}
          </div>
          <div style="font-size:0.77rem; color: var(--text-muted); margin-top:auto;">
            🕒 ${pub.opening_hours}
          </div>
          <div style="display:flex; align-items:center; justify-content:space-between; gap:0.5rem; margin-top:0.4rem; padding-top:0.65rem; border-top:1px solid var(--border);">
            <span style="font-size:0.76rem; color: var(--amber); font-weight:700;">
              📅 ${pubEventsCount} Events • 🏷️ ${pubDealsCount} Offers
            </span>
            <button type="button" class="btn btn-amber" onclick="openPubModal(${pub.id})">
              View Wares & Menu →
            </button>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

function renderDealsSidebar() {
  const container = document.getElementById("dealsSidebarList");
  container.innerHTML = appState.deals.slice(0, 6).map(deal => `
    <div class="deal-item">
      <div class="deal-top">
        <span style="font-size:0.75rem; color: var(--amber); font-weight:700;">${deal.pub_emoji || '🍺'} ${deal.pub_name}</span>
        <span class="discount-pill">${deal.discount_badge}</span>
      </div>
      <div style="font-weight:700; font-size:0.92rem;">${deal.title}</div>
      <div style="font-size:0.78rem; color: var(--text-muted);">${deal.subtitle}</div>
      <div style="display:flex; align-items:center; justify-content:space-between; margin-top:0.3rem;">
        <span style="font-size:0.72rem; color: var(--text-muted);">🗓️ ${deal.valid_days}</span>
        <button type="button" class="btn btn-amber" style="padding:0.35rem 0.7rem; font-size:0.75rem;" onclick="openQrDealModal(${deal.id})">
          📲 Get QR Code
        </button>
      </div>
    </div>
  `).join("");
}

function renderStampCard() {
  const circles = [];
  for (let i = 1; i <= 6; i++) {
    const isStamped = i <= userStamps;
    circles.push(`<div class="stamp-circle ${isStamped ? 'stamped' : ''}">${isStamped ? '🍺' : i}</div>`);
  }
  document.getElementById("stampGridBox").innerHTML = circles.join("");
  document.getElementById("stampStatusText").textContent =
    userStamps >= 6
      ? "🎉 Reward Unlocked! Show QR at any participating Coalville pub for your free pint!"
      : `${userStamps} / 6 Stamps collected (${6 - userStamps} more for a Free Pint Reward)`;
}

function addDemoStamp() {
  if (userStamps < 6) {
    userStamps++;
    showToast(`🍺 Stamp #${userStamps} added to your Coalville Loyalty Card!`);
  } else {
    userStamps = 1;
    showToast("🎉 Free Pint Redeemed! Started fresh stamp card (1/6).");
  }
  renderStampCard();
}

async function rsvpEvent(eventId) {
  const ev = appState.events.find(x => x.id === eventId);
  try {
    const res = await apiFetch("/api/rsvp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ event_id: eventId })
    });
    if (res.ok) {
      const data = await res.json();
      appState = data.state;
      saveLocalFallback();
      renderAll();
      if (ev) showToast(`🙌 You're on the list for "${ev.title}" at ${ev.pub_name}!`);
      return;
    }
  } catch (e) {}

  if (ev) {
    ev.rsvp_count = (ev.rsvp_count || 0) + 1;
    const pub = appState.pubs.find(p => p.id === ev.pub_id);
    if (pub) {
      pub.rsvps_month = (pub.rsvps_month || 0) + 1;
      pub.views_month = (pub.views_month || 0) + 3;
    }
    saveLocalFallback();
    renderAll();
    showToast(`🙌 You're on the list for "${ev.title}" at ${ev.pub_name}!`);
  }
}

function openPubModal(pubId) {
  const pub = appState.pubs.find(p => p.id === pubId);
  if (!pub) return;

  const pubEvents = appState.events.filter(e => e.pub_id === pubId);
  const pubDeals = appState.deals.filter(d => d.pub_id === pubId);

  const modalBody = document.getElementById("pubModalContent");
  modalBody.innerHTML = `
    <div style="background: ${pub.hero_gradient}; padding: 1.35rem; border-radius: 14px; margin-bottom: 1rem;">
      <div style="display:flex; justify-content:space-between; align-items:center;">
        <span style="font-size:0.75rem; font-weight:700; text-transform:uppercase; letter-spacing:0.05em;">📍 ${pub.area}</span>
        <span style="background:rgba(0,0,0,0.45); padding:0.2rem 0.6rem; border-radius:99px; font-size:0.75rem;">${pub.tie_status}</span>
      </div>
      <h2 style="font-size:1.5rem; margin: 0.3rem 0;">${pub.badge_emoji || '🍺'} ${pub.name}</h2>
      <p style="font-size:0.88rem; opacity:0.92;">${pub.description}</p>
      <div style="font-size:0.78rem; margin-top:0.65rem; opacity:0.85;">
        📍 ${pub.address} • 📞 ${pub.phone}<br>
        🕒 ${pub.opening_hours}
      </div>
    </div>

    <h3 style="font-size:1rem; margin-bottom:0.5rem; color: var(--amber);">🍺 Food & Drink Wares (Sample Menu)</h3>
    <div style="display:grid; gap:0.45rem; margin-bottom:1.1rem;">
      ${(pub.menu || []).map(item => `
        <div style="background: var(--bg-elevated); padding:0.65rem 0.9rem; border-radius:8px; display:flex; justify-content:space-between; align-items:center;">
          <div>
            <div style="font-weight:700; font-size:0.88rem;">${item.name}</div>
            <div style="font-size:0.74rem; color: var(--text-muted);">${item.category} • ${item.note || ''}</div>
          </div>
          <span style="font-weight:800; color: var(--amber);">${item.price}</span>
        </div>
      `).join("")}
    </div>

    <h3 style="font-size:1rem; margin-bottom:0.5rem; color: var(--amber);">🎸 Upcoming Entertainment & Nights</h3>
    <div style="display:grid; gap:0.5rem; margin-bottom:1.1rem;">
      ${pubEvents.length ? pubEvents.map(ev => `
        <div style="background: var(--bg-elevated); padding:0.75rem; border-radius:8px; display:flex; justify-content:space-between; align-items:center; gap:0.5rem;">
          <div>
            <span class="day-badge">${ev.day_tag} • ${ev.time_label}</span>
            <div style="font-weight:700; margin-top:0.25rem;">${ev.title}</div>
            <div style="font-size:0.76rem; color: var(--text-muted);">${ev.description}</div>
          </div>
          <button type="button" class="btn btn-outline" onclick="rsvpEvent(${ev.id}); openPubModal(${pub.id});">🙌 ${ev.rsvp_count}</button>
        </div>
      `).join("") : `<div style="color:var(--text-muted); font-size:0.84rem;">No upcoming events listed yet.</div>`}
    </div>

    <h3 style="font-size:1rem; margin-bottom:0.5rem; color: var(--emerald);">🏷️ Active QR Deals & Loyalty</h3>
    <div style="display:grid; gap:0.5rem;">
      ${pubDeals.map(deal => `
        <div style="background: var(--bg-elevated); border:1px solid rgba(16,185,129,0.3); padding:0.75rem; border-radius:8px; display:flex; justify-content:space-between; align-items:center; gap:0.5rem;">
          <div>
            <span class="discount-pill">${deal.discount_badge}</span>
            <div style="font-weight:700; margin-top:0.25rem;">${deal.title}</div>
            <div style="font-size:0.76rem; color: var(--text-muted);">${deal.subtitle} (${deal.valid_days})</div>
          </div>
          <button type="button" class="btn btn-amber" onclick="closeModal('pubModal'); openQrDealModal(${deal.id});">📲 Claim QR</button>
        </div>
      `).join("")}
      <div style="background: rgba(245, 158, 11, 0.12); border:1px dashed var(--amber); padding:0.75rem; border-radius:8px; font-size:0.82rem;">
        🏆 <strong>Pub Loyalty Scheme:</strong> Collect ${pub.loyalty_goal} digital stamps → <strong>${pub.loyalty_reward}</strong>
      </div>
    </div>
  `;

  document.getElementById("pubModal").classList.add("open");
}

function openQrDealModal(dealId) {
  const deal = appState.deals.find(d => d.id === dealId);
  if (!deal) return;
  activeModalDeal = deal;

  const randomCode = `${deal.code_prefix || 'PUB'}-${Math.floor(1000 + Math.random() * 9000)}`;
  document.getElementById("qrModalPubName").textContent = `${deal.pub_emoji || '🍺'} ${deal.pub_name}`;
  document.getElementById("qrModalDealTitle").textContent = deal.title;
  document.getElementById("qrModalDealSub").textContent = deal.subtitle;
  document.getElementById("qrModalCodeText").textContent = randomCode;
  document.getElementById("qrRedeemFeedback").style.display = "none";

  // Build deterministic-looking 9x9 QR visual matrix
  const matrixEl = document.getElementById("qrMatrixVisual");
  const cells = [];
  for (let i = 0; i < 81; i++) {
    const r = Math.floor(i / 9);
    const c = i % 9;
    const isCorner = (r < 3 && c < 3) || (r < 3 && c > 5) || (r > 5 && c < 3);
    const isDark = isCorner || ((i * 7 + deal.id * 13) % 3 !== 0);
    cells.push(`<div class="qr-cell ${isDark ? 'dark' : ''}"></div>`);
  }
  matrixEl.innerHTML = cells.join("");

  document.getElementById("qrModal").classList.add("open");
}

async function simulateBarScan() {
  if (!activeModalDeal) return;
  try {
    const res = await apiFetch("/api/redeem", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ deal_id: activeModalDeal.id, pub_id: activeModalDeal.pub_id })
    });
    if (res.ok) {
      const data = await res.json();
      appState = data.state;
      saveLocalFallback();
    } else {
      throw new Error("Fallback");
    }
  } catch (e) {
    activeModalDeal.redemptions = (activeModalDeal.redemptions || 0) + 1;
    const pub = appState.pubs.find(p => p.id === activeModalDeal.pub_id);
    if (pub) pub.redemptions_month = (pub.redemptions_month || 0) + 1;
    saveLocalFallback();
  }

  if (userStamps < 6) userStamps++;
  else userStamps = 1;

  const fb = document.getElementById("qrRedeemFeedback");
  fb.style.display = "block";
  fb.innerHTML = `✅ <strong>Scanned & Verified!</strong> +1 Loyalty Stamp added to punter wallet, and +1 ROI Redemption logged on <strong>${activeModalDeal.pub_name}'s</strong> Landlord Dashboard!`;
  renderAll();
  showToast(`✅ QR Code Scanned! Logged +1 ROI visit for ${activeModalDeal.pub_name}`);
}

function closeModal(id) {
  document.getElementById(id).classList.remove("open");
}

/* LANDLORD PORTAL */
function renderLandlordPortal() {
  const selectEl = document.getElementById("landlordPubSelect");
  selectEl.innerHTML = appState.pubs.map(p =>
    `<option value="${p.id}" ${p.id === Number(selectedLandlordPubId) ? 'selected' : ''}>${p.badge_emoji || '🍺'} ${p.name} (${p.area})</option>`
  ).join("");

  const pub = appState.pubs.find(p => p.id === Number(selectedLandlordPubId)) || appState.pubs[0];
  if (!pub) return;

  const estRevenue = (pub.redemptions_month * 14) + (pub.rsvps_month * 8);
  const roiMultiple = Math.max(1, (estRevenue / (pub.monthly_fee || 50)).toFixed(1));

  document.getElementById("llViews").textContent = pub.views_month;
  document.getElementById("llRsvps").textContent = pub.rsvps_month;
  document.getElementById("llRedemptions").textContent = pub.redemptions_month;
  document.getElementById("llEstSpend").textContent = `£${estRevenue}`;
  document.getElementById("llRoiBadge").textContent = `${roiMultiple}x Return on £${pub.monthly_fee}/mo Subscription`;
}

function onSelectLandlordPub(val) {
  selectedLandlordPubId = Number(val);
  renderLandlordPortal();
  const pub = appState.pubs.find(p => p.id === selectedLandlordPubId);
  if (pub) showToast(`🏠 Managing ${pub.name}`);
}

function autoFillChalkboardDemo() {
  document.getElementById("evTitle").value = "Saturday Night Live: The Coalville Ska & Mod Collective";
  document.getElementById("evCategory").value = "Live Bands";
  document.getElementById("evDayTag").value = "SATURDAY";
  document.getElementById("evTime").value = "8:45 PM - Midnight";
  document.getElementById("evEntry").value = "Free Entry (App QR gets £1 off 1st Pint)";
  document.getElementById("evDesc").value = "Extracted from chalkboard photo: 5-piece live brass & ska band + late DJ set. Cask ales £3.90 before 9pm!";
  showToast("📸 AI Chalkboard Scanner auto-filled event details!");
}

async function submitNewEvent(e) {
  e.preventDefault();
  const pubId = Number(selectedLandlordPubId);
  const pub = appState.pubs.find(p => p.id === pubId) || appState.pubs[0];

  const payload = {
    pub_id: pub.id,
    title: document.getElementById("evTitle").value.trim(),
    category: document.getElementById("evCategory").value,
    day_tag: document.getElementById("evDayTag").value,
    date_label: document.getElementById("evDayTag").value,
    time_label: document.getElementById("evTime").value.trim(),
    entry_price: document.getElementById("evEntry").value.trim() || "Free Entry",
    description: document.getElementById("evDesc").value.trim()
  };

  if (!payload.title) return;

  try {
    const res = await apiFetch("/api/events", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    if (res.ok) {
      const data = await res.json();
      appState = data.state;
      saveLocalFallback();
    } else {
      throw new Error("Fallback");
    }
  } catch (err) {
    appState.events.unshift({
      id: Date.now(),
      ...payload,
      pub_name: pub.name,
      pub_area: pub.area,
      pub_emoji: pub.badge_emoji || "🍺",
      rsvp_count: 1
    });
    saveLocalFallback();
  }

  e.target.reset();
  renderAll();
  showToast(`🎉 Event published live to ${pub.name} & the Coalville feed!`);
}

async function submitNewDeal(e) {
  e.preventDefault();
  const pubId = Number(selectedLandlordPubId);
  const pub = appState.pubs.find(p => p.id === pubId) || appState.pubs[0];

  const payload = {
    pub_id: pub.id,
    title: document.getElementById("dlTitle").value.trim(),
    subtitle: document.getElementById("dlSubtitle").value.trim(),
    valid_days: document.getElementById("dlValidDays").value.trim(),
    discount_badge: document.getElementById("dlBadge").value.trim().toUpperCase() || "APP DEAL",
    code_prefix: pub.name.replace(/[^A-Za-z]/g, "").slice(0, 4).toUpperCase() || "DEAL",
    category: "Food & Drink"
  };

  if (!payload.title) return;

  try {
    const res = await apiFetch("/api/deals", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    if (res.ok) {
      const data = await res.json();
      appState = data.state;
      saveLocalFallback();
    } else {
      throw new Error("Fallback");
    }
  } catch (err) {
    appState.deals.unshift({
      id: Date.now(),
      ...payload,
      pub_name: pub.name,
      pub_area: pub.area,
      pub_emoji: pub.badge_emoji || "🍺",
      redemptions: 0
    });
    saveLocalFallback();
  }

  e.target.reset();
  renderAll();
  showToast(`🏷️ Live QR Offer created for ${pub.name}!`);
}

async function submitNewMenuItem(e) {
  e.preventDefault();
  const pubId = Number(selectedLandlordPubId);
  const pub = appState.pubs.find(p => p.id === pubId) || appState.pubs[0];

  const payload = {
    pub_id: pub.id,
    name: document.getElementById("mnName").value.trim(),
    category: document.getElementById("mnCategory").value,
    price: document.getElementById("mnPrice").value.trim(),
    note: document.getElementById("mnNote").value.trim()
  };

  if (!payload.name) return;

  try {
    const res = await apiFetch("/api/pubs/menu", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    if (res.ok) {
      const data = await res.json();
      appState = data.state;
      saveLocalFallback();
    } else {
      throw new Error("Fallback");
    }
  } catch (err) {
    pub.menu = pub.menu || [];
    pub.menu.unshift(payload);
    saveLocalFallback();
  }

  e.target.reset();
  renderAll();
  showToast(`🍽️ Added "${payload.name}" to ${pub.name}'s menu!`);
}

/* CO-OP BUYING HUB */
function renderCoopHub() {
  const listEl = document.getElementById("coopDealsGrid");
  const totalSaving = appState.coop_deals.reduce((acc, c) => acc + c.avg_monthly_saving, 0);
  document.getElementById("coopPotentialTotal").textContent = `£${totalSaving}/mo`;

  listEl.innerHTML = appState.coop_deals.map(c => {
    const pct = Math.min(100, Math.round((c.current_pubs_joined / c.min_pubs_required) * 100));
    const unlocked = c.current_pubs_joined >= c.min_pubs_required;
    return `
      <div class="panel-card" style="display:flex; flex-direction:column; justify-content:space-between; gap:0.8rem;">
        <div>
          <div style="display:flex; justify-content:space-between; align-items:center; gap:0.5rem;">
            <span class="cat-tag">${c.category}</span>
            <span style="font-size:0.72rem; font-weight:700; color: var(--emerald);">${c.tie_compatible}</span>
          </div>
          <h3 style="font-size:1.05rem; margin-top:0.5rem;">${c.title}</h3>
          <div style="font-size:0.78rem; color: var(--amber); font-weight:600; margin:0.2rem 0;">Supplier Syndicate: ${c.supplier}</div>
          <p style="font-size:0.82rem; color: var(--text-muted); margin-top:0.35rem;">${c.description}</p>
        </div>

        <div>
          <div style="display:flex; justify-content:space-between; font-size:0.78rem; font-weight:700;">
            <span>Coalville Pubs Committed: ${c.current_pubs_joined} / ${c.min_pubs_required}</span>
            <span style="color: ${unlocked ? 'var(--emerald)' : 'var(--amber)'};">
              ${unlocked ? '✅ GROUP RATE ACTIVE' : `Needs ${c.min_pubs_required - c.current_pubs_joined} more pubs`}
            </span>
          </div>
          <div class="progress-track">
            <div class="progress-fill" style="width: ${pct}%;"></div>
          </div>
          <div style="display:flex; justify-content:space-between; align-items:center; margin-top:0.65rem;">
            <div>
              <div style="font-size:0.7rem; color: var(--text-muted);">Est. Pub Saving</div>
              <div style="font-size:1.15rem; font-weight:800; color: var(--emerald);">£${c.avg_monthly_saving}/month</div>
            </div>
            <button type="button" class="btn btn-amber" onclick="joinCoopDeal(${c.id})">
              🤝 Commit Pub to Syndicate
            </button>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

async function joinCoopDeal(coopId) {
  const item = appState.coop_deals.find(c => c.id === coopId);
  try {
    const res = await apiFetch("/api/coop/join", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ coop_id: coopId })
    });
    if (res.ok) {
      const data = await res.json();
      appState = data.state;
      saveLocalFallback();
      renderAll();
      if (item) showToast(`🤝 Added pub commitment to "${item.supplier}"!`);
      return;
    }
  } catch (e) {}

  if (item) {
    item.current_pubs_joined += 1;
    saveLocalFallback();
    renderAll();
    showToast(`🤝 Added pub commitment to "${item.supplier}"!`);
  }
}

/* FOUNDER & KYRAN SALES HQ */
function renderFounderHQ() {
  updateRevenueCalculator();
}

function updateRevenueCalculator() {
  const pubsCount = Number(document.getElementById("calcPubsSlider").value || 25);
  const subFee = Number(document.getElementById("calcFeeSlider").value || 50);
  const coopCommissionPerPub = Number(document.getElementById("calcCoopSlider").value || 25);

  document.getElementById("calcPubsLabel").textContent = `${pubsCount} Pubs`;
  document.getElementById("calcFeeLabel").textContent = `£${subFee}/mo`;
  document.getElementById("calcCoopLabel").textContent = `£${coopCommissionPerPub}/mo`;

  const monthlySubRev = pubsCount * subFee;
  const monthlyCoopRev = pubsCount * coopCommissionPerPub;
  const totalMonthly = monthlySubRev + monthlyCoopRev;
  const annualRunRate = totalMonthly * 12;

  document.getElementById("revMonthlySubs").textContent = `£${monthlySubRev.toLocaleString()}`;
  document.getElementById("revMonthlyCoop").textContent = `£${monthlyCoopRev.toLocaleString()}`;
  document.getElementById("revMonthlyTotal").textContent = `£${totalMonthly.toLocaleString()}/mo`;
  document.getElementById("revAnnualTotal").textContent = `£${annualRunRate.toLocaleString()}/yr`;
}

async function submitOnboardPub(e) {
  e.preventDefault();
  const payload = {
    name: document.getElementById("obName").value.trim(),
    area: document.getElementById("obArea").value.trim() || "Coalville",
    address: document.getElementById("obAddress").value.trim() || "Coalville LE67",
    tagline: document.getElementById("obTagline").value.trim() || "Great Local Pub, Pints & Entertainment",
    tie_status: document.getElementById("obTieStatus").value,
    monthly_fee: 50,
    opening_hours: document.getElementById("obHours").value.trim() || "Mon-Sun 12:00-23:00",
    phone: document.getElementById("obPhone").value.trim() || "01530 800000",
    tags: document.getElementById("obTags").value.trim() || "Live Music, Real Ale, Dog Friendly",
    signature_drink: document.getElementById("obDrink").value.trim() || "House Draught Pint",
    drink_price: "£4.30",
    signature_food: document.getElementById("obFood").value.trim() || "Steak Pie & Chips",
    food_price: "£11.95",
    first_event: document.getElementById("obFirstEvent").value.trim(),
    first_deal: document.getElementById("obFirstDeal").value.trim(),
    badge_emoji: "🍻"
  };

  if (!payload.name) return;

  try {
    const res = await apiFetch("/api/pubs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    if (res.ok) {
      const data = await res.json();
      appState = data.state;
      selectedLandlordPubId = data.new_pub_id;
      saveLocalFallback();
    } else {
      throw new Error("Fallback");
    }
  } catch (err) {
    const newId = appState.pubs.length + 1;
    appState.pubs.push({
      id: newId,
      name: payload.name,
      area: payload.area,
      address: payload.address,
      tagline: payload.tagline,
      description: `Independent local pub in ${payload.area} onboarded to the Coalville pilot network.`,
      tie_status: payload.tie_status,
      subscription_tier: "Founder (£50/mo)",
      monthly_fee: 50,
      rating: 4.9,
      opening_hours: payload.opening_hours,
      phone: payload.phone,
      hero_gradient: "linear-gradient(135deg, #9d174d 0%, #500724 100%)",
      badge_emoji: "🍻",
      tags: payload.tags.split(",").map(s => s.trim()),
      menu: [
        { name: payload.signature_drink, category: "Drinks", price: "£4.30", note: "House Pour" },
        { name: payload.signature_food, category: "Food", price: "£11.95", note: "Kitchen Favourite" }
      ],
      loyalty_goal: 6,
      loyalty_reward: "7th Pint Free on House Draught",
      views_month: 85,
      rsvps_month: 14,
      redemptions_month: 9
    });
    if (payload.first_event) {
      appState.events.unshift({
        id: Date.now(),
        pub_id: newId,
        pub_name: payload.name,
        pub_area: payload.area,
        pub_emoji: "🍻",
        title: payload.first_event,
        category: "Live Music",
        day_tag: "FRIDAY",
        date_label: "This Friday",
        time_label: "8:30 PM",
        description: "Launch week live entertainment night!",
        entry_price: "Free Entry",
        rsvp_count: 15
      });
    }
    if (payload.first_deal) {
      appState.deals.unshift({
        id: Date.now() + 1,
        pub_id: newId,
        pub_name: payload.name,
        pub_area: payload.area,
        pub_emoji: "🍻",
        title: payload.first_deal,
        subtitle: "Show QR code at the bar to redeem",
        category: "Food & Drink",
        valid_days: "All Week",
        discount_badge: "LAUNCH DEAL",
        code_prefix: "NEWP",
        redemptions: 6
      });
    }
    selectedLandlordPubId = newId;
    saveLocalFallback();
  }

  e.target.reset();
  renderAll();
  switchView("punter");
  showToast(`🍻 "${payload.name}" is now live in the Coalville Punter App!`);
}

window.addEventListener("DOMContentLoaded", () => {
  loadState();
});

