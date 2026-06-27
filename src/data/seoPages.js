import { images } from './images.js'

// ---------------------------------------------------------------------------
//  SEO landing pages.  Copy is unique per page (not thin duplicates).
//  To edit wording, change the matching entry in `content` below.
//  To re-order or change the hero photo / featured boats, edit `meta`.
// ---------------------------------------------------------------------------

const meta = {
  "soma-bay-boat-trips": { image: images.oneLuckyLadySomabay, imageAlt: "One Lucky Lady moored at Soma Bay marina with the Red Sea behind", bestBoats: ["one-lucky-lady","locke-catamaran","private-speedboat"] },
  "hurghada-private-boat-trips": { image: images.oneLuckyLadyMarina, imageAlt: "Private boat resting on calm turquoise water near the Hurghada coast", bestBoats: ["one-lucky-lady","locke-catamaran","private-speedboat"] },
  "red-sea-catamaran-charter": { image: images.seanJustine, imageAlt: "Guests relaxing on the spacious bow of a Red Sea charter for groups", bestBoats: ["locke-catamaran","one-lucky-lady"] },
  "soma-bay-snorkelling-trips": { image: images.oneLuckyLadyDeck, imageAlt: "Boat deck and bow on calm water at a quiet Soma Bay snorkelling reef", bestBoats: ["one-lucky-lady","private-speedboat"] },
  "hurghada-fishing-trips": { image: images.oneLuckyLady, imageAlt: "Stern of the boat ready for a private Red Sea fishing day off Hurghada", bestBoats: ["private-speedboat","one-lucky-lady"] },
  "red-sea-overnight-boat-trips": { image: images.oneLuckyLadyNight, imageAlt: "Boat lit with soft deck lighting at anchor under the night sky", bestBoats: ["locke-catamaran"] },
  "all-inclusive-boat-trips-hurghada": { image: images.hero, imageAlt: "All-inclusive private boat day on the Red Sea, fully arranged", bestBoats: ["one-lucky-lady","locke-catamaran","private-speedboat"] },
  "private-yacht-charter-soma-bay": { image: images.justineTiggySunset, imageAlt: "Relaxed sunset moment aboard a private Soma Bay yacht charter", bestBoats: ["one-lucky-lady","locke-catamaran","private-speedboat"] },
}

const content = {
  "soma-bay-boat-trips": {
    "metaTitle": "Soma Bay Boat Trips: Private All-Inclusive Red Sea",
    "metaDescription": "Private all-inclusive Soma Bay boat trips on the Red Sea. Resort pickup, food, drinks, snorkelling gear and crew included. No shared groups, no hidden fees.",
    "ogTitle": "Soma Bay Boat Trips: Private Red Sea Days",
    "ogDescription": "Private all-inclusive boat days from Soma Bay marina. Pickup from any Soma Bay resort. The price you see is the price you pay.",
    "hero": {
      "kicker": "Soma Bay, Red Sea",
      "h1": "Private Soma Bay boat trips, fully arranged",
      "intro": "Skip the crowded group tour. Lucky Lady runs private boat days from Soma Bay marina, with pickup from your resort and everything aboard sorted before you arrive. Just your people, your crew, and the sea."
    },
    "intro2": "Soma Bay sits on its own peninsula south of Hurghada, with a marina and reef at the end of the road. The water is minutes from the harbour, not an hour up the coast, so transfers are short and starts are calm. We collect you from your hotel and have you aboard without the early-morning shuffle of a packed tourist run.",
    "highlights": [
      {
        "title": "Private only",
        "body": "The boat is yours for the day. No shared groups, no strangers, no fixed schedule to keep up with."
      },
      {
        "title": "Resort pickup included",
        "body": "We collect you from any Soma Bay hotel and drop you back after. Kempinski, Sheraton, La Residence des Cascades, wherever you're staying."
      },
      {
        "title": "All-inclusive, honest pricing",
        "body": "Food, drinks, towels, snorkelling gear, fuel and a full crew are included. The price you see is the price you pay."
      },
      {
        "title": "The reef on your doorstep",
        "body": "Ras Abu Soma and the Tobia Arba sandbank are close, so you spend the day on the water rather than getting to it."
      }
    ],
    "sections": [
      {
        "heading": "Soma Bay boat trips, the way they should be",
        "body": "Most boat trips off this coast mean a coach, a crowded deck, and a schedule built around forty other people. We do the opposite. Lucky Lady runs private charters only, leaving from Soma Bay marina, with the whole boat reserved for you and the people you came with.\n\nTell us the kind of day you want and we organise it. A slow snorkelling morning over Ras Abu Soma, a long lunch at anchor, a sunset run back to the marina. Nothing rushed, nothing shared."
      },
      {
        "heading": "What's close to Soma Bay",
        "body": "Soma Bay's location does most of the work. Ras Abu Soma reef wraps around the headland just outside the marina, and the Tobia Arba sandbank sits within easy reach for a swim and a stop on the shallow flats. For longer days we can point north toward Giftun Island and the Hurghada reefs.\n\nBecause the water is so close, you get more time in it. Short run out, anchor down, fins on. That's the point of starting from Soma Bay rather than further up the coast."
      },
      {
        "heading": "Three boats, one private day",
        "body": "Pick the boat that fits your group. One Lucky Lady takes 4 to 6 guests from EUR 250, made for couples and small families who want a relaxed private day. The Locke Catamaran carries up to 14 across four cabins from EUR 450, built for larger groups, celebrations and overnight escapes. The Private Speedboat takes 4 to 6 from EUR 150 for fishing trips, quick snorkelling stops and fast runs out from the marina.\n\nNot sure which suits you? Message us on WhatsApp and we'll talk it through."
      }
    ],
    "faqs": [
      {
        "q": "Where do Soma Bay boat trips leave from?",
        "a": "All our private trips leave from Soma Bay marina, on the peninsula south of Hurghada. We pick you up from your Soma Bay resort and drop you back at the end of the day, so there's no transfer for you to organise."
      },
      {
        "q": "Are these private trips or shared group tours?",
        "a": "Private only. The whole boat is reserved for you and your group, with your own crew. We never put you on a shared or group tourist boat, and there's no fixed schedule to follow. The day runs at your pace."
      },
      {
        "q": "What's included in the price?",
        "a": "Everything for the day: hotel pickup and drop-off, food, drinks, towels, snorkelling gear, fuel and a full crew. The price you see is the price you pay, with no hidden fees, no photographer pressure and no extras pushed on board."
      },
      {
        "q": "Which Soma Bay hotels do you collect from, and what if the weather turns?",
        "a": "We collect across Soma Bay, including Kempinski Soma Bay, Sheraton Soma Bay, La Residence des Cascades, Robinson Club and Caribbean World. The Red Sea is usually calm here, but if the wind picks up we'll adjust the route or rebook with you. With a private boat there's no group timetable forcing us out in poor conditions."
      },
      {
        "q": "How do I check availability and book?",
        "a": "Message us on WhatsApp at +20 120 572 6571. Tell us your dates, your group size and the kind of day you're after, and we'll check availability and sort the details."
      }
    ],
    "cta": {
      "heading": "Plan your private day from Soma Bay",
      "sub": "Send us your dates and group size on WhatsApp and we'll check availability. Pickup, food, drinks, gear and crew included, and the price you see is the price you pay."
    }
  },
  "hurghada-private-boat-trips": {
    "metaTitle": "Private Boat Trips Hurghada | Lucky Lady Trips",
    "metaDescription": "Private Red Sea boat trips from Hurghada to Giftun, Orange Bay and Mahmya. All-inclusive: hotel pickup, food, drinks, snorkelling gear, towels and crew.",
    "ogTitle": "Private Boat Trips from Hurghada | Lucky Lady Trips",
    "ogDescription": "Skip the packed party boats. A private Red Sea day with your own people and crew, all-inclusive. Check availability on WhatsApp.",
    "hero": {
      "kicker": "Hurghada, Red Sea",
      "h1": "Private boat trips from Hurghada, with only your people on board",
      "intro": "You came for the Red Sea, not for a hundred strangers and a loudspeaker. We run private trips from Hurghada with hotel pickup, food, drinks and a full crew, so the only people on deck are the ones you brought. The price you see is the price you pay."
    },
    "intro2": "No coach transfers, no waiting for the slowest of forty people, no upsell at the snorkelling stop. We collect you from your hotel and head out to Giftun Island, the turquoise shallows at Orange Bay, the Mahmya sandbar and the reefs around Abu Ramada. The route bends to your day, not a fixed timetable.",
    "highlights": [
      {
        "title": "Private only",
        "body": "Your boat, your group. No shared decks, no strangers added from the dive-shop list."
      },
      {
        "title": "All-inclusive",
        "body": "Hotel pickup, food, drinks, snorkelling gear, towels, fuel and crew, all in the price."
      },
      {
        "title": "No surprise fees",
        "body": "The price you see is the price you pay. No photographer pressure, no add-ons at sea."
      },
      {
        "title": "Real Hurghada reefs",
        "body": "Giftun Island, Orange Bay, Mahmya and Abu Ramada, on a route built around your day."
      }
    ],
    "sections": [
      {
        "heading": "Why private beats the big shared boats out of Hurghada",
        "body": "Hurghada marina is full of large boats packing in as many people as they can carry. Loud music, a fixed timetable, a queue for the ladder, and a list of extras that appears once you are already at sea. It works for some people. It is not what we do.\n\nLucky Lady runs private trips only. You set the pace, you pick the stops, and the crew looks after your group and no one else. Want a long, quiet snorkel at Abu Ramada and a slow lunch on deck? Done. Want to push on to Mahmya while the water is calm? Just say so. It is your boat for the day, not a seat on someone else's schedule."
      },
      {
        "heading": "Where we go, and what is already included",
        "body": "From Hurghada we run out to Giftun Island, the shallow water at Orange Bay, the sandbar at Mahmya, and the reefs around Abu Ramada, where you might cross paths with trevally or a passing barracuda. Snorkelling gear and towels are on board, the food and drinks are sorted, and fuel and crew are part of the price, not a line added at the end.\n\nThree boats give you the right fit. One Lucky Lady suits couples and small groups, from EUR 250. The Locke Catamaran has four cabins for up to fourteen guests, from EUR 450. The private speedboat is built for fast runs and fishing, from EUR 150. Send your group and dates on WhatsApp and we will tell you what works."
      }
    ],
    "faqs": [
      {
        "q": "Are these trips really private, or shared with other guests?",
        "a": "Every trip is fully private. You book the whole boat for your group only, never a seat on a shared tourist boat. No other parties, no strangers on deck, and no group timetable to keep to."
      },
      {
        "q": "Do you pick up from Hurghada hotels, and what else is included?",
        "a": "Yes. Hotel pickup and drop-off in the Hurghada area are included as standard, along with food, drinks, snorkelling gear, towels, fuel and crew. Tell us where you are staying and we will organise the rest."
      },
      {
        "q": "Which spots can we visit, and what if the weather turns?",
        "a": "We run to Giftun Island, Orange Bay, Mahmya and the reefs around Abu Ramada, and because the trip is private we plan the route around your group. If the Red Sea is too windy to head out safely, we will talk to you about shifting the day or adjusting where we go."
      },
      {
        "q": "What does it cost, and are there hidden fees?",
        "a": "Prices start from EUR 150 for the speedboat, EUR 250 for One Lucky Lady and EUR 450 for the Locke Catamaran. The price you see is the price you pay. No surprise add-ons, no photographer pressure, no extras sprung on you at sea."
      },
      {
        "q": "How do we book and check availability?",
        "a": "Message us on WhatsApp at +20 120 572 6571 with your dates and group size and we will check availability. We confirm the right boat and arrange the pickup, so all you do is turn up."
      }
    ],
    "cta": {
      "heading": "Your private Red Sea day from Hurghada, fully arranged",
      "sub": "Send your dates and group size on WhatsApp and we will check availability. Private boat, all-inclusive, the price you see is the price you pay."
    }
  },
  "red-sea-catamaran-charter": {
    "metaTitle": "Red Sea Catamaran Charter | Soma Bay, Up to 14",
    "metaDescription": "Private Red Sea catamaran charter from Soma Bay. The Locke takes up to 14 guests across four cabins. All-inclusive, and the price you see is the price you pay.",
    "ogTitle": "The Locke Catamaran: Private Red Sea Charter for Groups",
    "ogDescription": "Up to 14 guests, four cabins, private only. All-inclusive Red Sea days and overnights from Soma Bay.",
    "hero": {
      "kicker": "Soma Bay, Red Sea",
      "h1": "Red Sea Catamaran Charter for Groups, Families and Celebrations",
      "intro": "The Locke is our biggest boat: up to 14 guests, four cabins, and a deck wide enough for everyone to spread out. Private only, all-inclusive, leaving from Soma Bay. Take the whole catamaran for the day, or stay out overnight."
    },
    "intro2": "Two hulls instead of one means the Locke sits flat and steady, with more shade and more room to walk around, even when the wind gets up off Ras Abu Soma. That makes it the boat we hand to big family days, birthdays and group celebrations: space to relax rather than a fixed schedule to keep up with. It's yours for the day, no one else's.",
    "highlights": [
      {
        "title": "Up to 14 guests",
        "body": "Four cabins below deck and a wide, stable hull with room for a proper group to spread out."
      },
      {
        "title": "Private, every time",
        "body": "You take the whole catamaran. No shared boats, no strangers, no fixed group itinerary."
      },
      {
        "title": "All-inclusive",
        "body": "Resort pickup, food, drinks, snorkelling gear, towels, fuel and a full crew, all in the price."
      },
      {
        "title": "Days or overnights",
        "body": "A full day around the Tobia Arba sandbank and Giftun, or sleep aboard and wake up on the water."
      }
    ],
    "sections": [
      {
        "heading": "Why a catamaran for bigger groups",
        "body": "At 10, 12 or 14 people, a single hull starts to feel tight. The Locke doesn't. Two hulls give you a wide, level deck and a ride that holds steady when the wind picks up off Ras Abu Soma, which matters when half the group would rather sunbathe than hold on.\n\nThe four cabins give you somewhere to change, store bags, put little ones down for a nap, or sit out of the sun. It's the boat we point families and celebration groups towards, simply because there's room to move."
      },
      {
        "heading": "Your Red Sea catamaran charter, fully arranged",
        "body": "We collect you from your resort, whether that's around Soma Bay or one of the Sheraton and Kempinski properties nearby, and bring you back at the end. In between, the crew runs the boat, the food, the drinks and the snorkelling stops.\n\nGood water is close. The Tobia Arba sandbank sits just off Soma Bay, and longer days can reach Giftun Island, Abu Ramada and the reefs out towards Hurghada. Tell us what the group wants and we'll plan the route around it, weather allowing."
      },
      {
        "heading": "One price, no surprises",
        "body": "The Locke starts from EUR 450 for the whole boat, and the price you see is the price you pay. No hidden fees, no surprise add-ons, no photographer trailing you for paid prints, no tourist-trap extras at the end of the day.\n\nThat's the point of going private and all-inclusive: you know the cost before you step aboard, and everything that matters is already in it."
      }
    ],
    "faqs": [
      {
        "q": "How many people fit on the Locke Catamaran?",
        "a": "Up to 14 guests. There are four cabins below deck plus a wide open deck above, so the boat handles large families, group days and celebrations without feeling packed. For smaller numbers we also run One Lucky Lady and the speedboat."
      },
      {
        "q": "Is the catamaran charter private?",
        "a": "Yes, always. You take the whole Locke for your group. There are no shared sailings and no strangers aboard, just your people and the crew. We don't run mixed tourist-boat trips."
      },
      {
        "q": "What's included in the price?",
        "a": "Everything: resort pickup and drop-off, food, drinks, snorkelling gear, towels, fuel and a full crew. From EUR 450 for the boat, and the price you see is the price you pay. No add-ons or pressure on the day."
      },
      {
        "q": "Where does the catamaran depart from, and what if the weather turns?",
        "a": "We arrange pickup from your resort around Soma Bay and Hurghada, then leave from Soma Bay marina. Day routes can take in the Tobia Arba sandbank, with longer days reaching Giftun Island and the Hurghada reefs. If the wind makes a route uncomfortable, the crew picks calmer water on the day."
      },
      {
        "q": "Can we charter the catamaran overnight, and how do we check availability?",
        "a": "Yes. With four cabins, the Locke works for overnight escapes as well as full day trips. Message us on WhatsApp with your dates and group size to check availability, and we'll sort the rest."
      }
    ],
    "cta": {
      "heading": "Planning a group day or celebration on the water?",
      "sub": "Tell us your dates and how many you are, and we'll check availability for the Locke. Message us on WhatsApp to get started."
    }
  },
  "soma-bay-snorkelling-trips": {
    "metaTitle": "Soma Bay Snorkelling Trips | Private Red Sea Charters",
    "metaDescription": "Private, all-inclusive Soma Bay snorkelling trips to quieter reefs at Tobia Arba and Ras Abu Soma. Gear, towels, food and pickup included. One clear price.",
    "ogTitle": "Soma Bay Snorkelling Trips: Private & All-Inclusive",
    "ogDescription": "Quieter reefs, your own boat. Gear, towels, food and drinks included. Check availability on WhatsApp.",
    "hero": {
      "kicker": "Soma Bay, Red Sea",
      "h1": "Soma Bay snorkelling trips, private and quietly arranged",
      "intro": "Healthy reefs, your own boat, no shared groups crowding the rail. We run private snorkelling days from Soma Bay marina to the quieter reefs nearby, Tobia Arba and the Ras Abu Soma house reef, with gear, towels and a full crew already on board. The price you see is the price you pay."
    },
    "intro2": "Most snorkelling boats run a fixed loop and pack the deck. Ours carry your group only, so we can sit longer at a reef that's holding fish, move on when you're ready, and skip the spots where ten other boats have already dropped anchor. The reefs this side of Soma Bay stay calmer and less worked than the busy Hurghada runs, which is why we keep all three boats here.",
    "highlights": [
      {
        "title": "Quieter reefs",
        "body": "Private stops at Tobia Arba and the Ras Abu Soma house reef, timed to miss the crowds."
      },
      {
        "title": "Gear included",
        "body": "Masks, fins and snorkels on board, plus towels. Bring a swimsuit and sunscreen, nothing else."
      },
      {
        "title": "Private only",
        "body": "Your boat, your crew, your day. Never a shared group tourist boat."
      },
      {
        "title": "One clear price",
        "body": "Pickup, food, drinks, fuel and crew all in. No add-ons, no photographer pressure."
      }
    ],
    "sections": [
      {
        "heading": "Where we snorkel around Soma Bay",
        "body": "Tobia Arba is the draw: a run of sandbank reefs in shallow, sheltered water where the visibility holds and the coral sits close to the surface. It's forgiving for first-timers and still worth the trip if you've fins of your own. The Ras Abu Soma house reef runs along the headland, an easy drift with reef life on one side and open blue on the other, where snapper and the odd grouper sit in the shallows.\n\nBecause every Soma Bay snorkelling trip is private, we read the day as it comes. Wind, light and where the fish are sitting decide the order of stops. If a reef is busy, we move. If it's quiet and alive, we stay."
      },
      {
        "heading": "What's included, and what isn't",
        "body": "Everything for a day on the water is already on board: hotel or resort pickup and drop-off, snorkelling gear, towels, food, drinks, fuel and a full crew. We'll collect you from the Kempinski, the Sheraton, La Residence des Cascades or wherever you're staying around Soma Bay.\n\nWhat isn't included is the part you'll appreciate most. No surprise extras, no upsells at the reef, no pushy photographer, no tourist-trap stops. One price, agreed before you board, and that's the lot."
      }
    ],
    "faqs": [
      {
        "q": "Is this a shared snorkelling boat or private?",
        "a": "Private, always. You book the whole boat for your group, with no strangers and no fixed group itinerary. It's just your people, the crew and the reefs, and we plan the day around what you want to see."
      },
      {
        "q": "Do I need to bring my own snorkelling gear?",
        "a": "No. Masks, fins, snorkels and towels are all on board as standard. Just bring a swimsuit and sunscreen. If you prefer your own mask, you're welcome to bring it."
      },
      {
        "q": "Which reefs will we snorkel, and what if the weather turns?",
        "a": "Usually Tobia Arba and the Ras Abu Soma house reef, with other Soma Bay reefs depending on conditions. Because the trip is private, we pick the calmest spots on the day rather than following a set loop. If the wind picks up we shelter behind the Ras Abu Soma headland, and if a safe day isn't possible we'll rearrange your dates."
      },
      {
        "q": "Is it suitable for beginners and children?",
        "a": "Yes. The sandbank reefs at Tobia Arba sit in shallow, sheltered water, which makes them gentle for first-timers and families. The crew keep an eye out and help anyone find their feet in the water."
      },
      {
        "q": "How much does a Soma Bay snorkelling trip cost, and how do I book?",
        "a": "Private day trips start from EUR 250 on One Lucky Lady, with the speedboat from EUR 150 and the Locke Catamaran for larger groups from EUR 450. The price you see is the price you pay: pickup, food, drinks, gear and crew included. Message us on WhatsApp with your dates and group size to check availability."
      }
    ],
    "cta": {
      "heading": "Plan a private snorkelling day around Soma Bay",
      "sub": "Send your dates and group size on WhatsApp and we'll check availability. Gear, towels, food, drinks and pickup all included. One clear price, no surprises."
    }
  },
  "hurghada-fishing-trips": {
    "metaTitle": "Hurghada Fishing Trips | Private Red Sea Charters",
    "metaDescription": "Private Hurghada fishing trips on the Red Sea. A fast speedboat to the marks off Soma Bay, trolling and bottom fishing, gear and crew included. Check availability.",
    "ogTitle": "Private Hurghada Fishing Trips on the Red Sea",
    "ogDescription": "A private boat, your own crew and a fast run to the fishing grounds off Hurghada and Soma Bay. All-inclusive.",
    "hero": {
      "kicker": "Soma Bay & Hurghada",
      "h1": "Private Hurghada Fishing Trips on the Red Sea",
      "intro": "A private boat, your own crew and a fast run out to the marks. Trolling for barracuda and trevally, dropping lines over structure for grouper and snapper, and no shared decks to work around. Just your group and the water."
    },
    "intro2": "Everything runs from Soma Bay marina, with hotel pickup arranged from the resorts along the bay and from Hurghada. The Private Speedboat carries 4-6 and gets you to the grounds off Ras Abu Soma fast, so the day is spent fishing rather than motoring. Lines, tackle and a crew who know the water are all part of it.",
    "highlights": [
      {
        "title": "Fast to the marks",
        "body": "The speedboat runs out to the grounds off Soma Bay quickly, so more of the day is spent on the lines."
      },
      {
        "title": "Private only",
        "body": "Your group, your crew, your day. No shared charters and no strangers on the deck."
      },
      {
        "title": "Gear and crew included",
        "body": "Rods, tackle, fuel and a full crew come as standard, with food and cold drinks aboard."
      },
      {
        "title": "One clear price",
        "body": "The price you see is the price you pay. No fuel surcharge, no tackle fee, no add-ons at the dock."
      }
    ],
    "sections": [
      {
        "heading": "Built for fishing days off Hurghada",
        "body": "Our fishing trips run on the Private Speedboat: 4-6 guests and fast over the water. We troll the open grounds off Ras Abu Soma for barracuda and trevally, then drop lines over structure for grouper and snapper. The crew knows where the fish hold between Soma Bay, Hurghada and the marks down towards Safaga, and they'll set you up whether you've fished for years or are picking up a rod for the first time.\n\nWant a bigger day on the water? The Locke Catamaran carries up to 14 and suits a larger group, with room to spread out between drifts and four cabins below if you fancy turning it into an overnight."
      },
      {
        "heading": "All-inclusive, the way it should be",
        "body": "The day is arranged before you step aboard. Hotel or resort pickup and drop-off, fuel, fishing gear, food and cold drinks, towels, and snorkelling gear for a stop on the way back. A full crew runs the boat so you can concentrate on the lines.\n\nNo photographer pressure, no tourist-trap extras, no awkward upsell at the dock. You book a private day, you get a private day."
      }
    ],
    "faqs": [
      {
        "q": "What can we catch on a Hurghada fishing trip?",
        "a": "It depends on the day and the grounds, but common catches are barracuda and trevally on the troll, plus grouper and snapper on the bottom over structure. The crew picks the marks off Ras Abu Soma and towards Safaga based on conditions, so the plan shifts to follow the fish."
      },
      {
        "q": "Is the boat private to my group?",
        "a": "Yes. Every fishing trip is private, with no shared decks and no strangers aboard. It's your group, your crew and the sea for the whole day. We never run shared or group tourist boats."
      },
      {
        "q": "What's included in the price?",
        "a": "Hotel or resort pickup and drop-off, fuel, rods and tackle, food, cold drinks, towels, snorkelling gear and a full crew. The price you see is the price you pay, with no surcharges at the dock. Private speedboat fishing starts from EUR 150."
      },
      {
        "q": "Do I need fishing experience?",
        "a": "Not at all. The crew rigs the gear, finds the marks and helps you land fish, so first-timers and seasoned anglers are both well looked after. Bring your group and the crew handles the rest."
      },
      {
        "q": "How do I book, and what if the weather turns?",
        "a": "Message us on WhatsApp and we'll check availability for your dates and group size, then confirm pickup from your hotel in Soma Bay, Hurghada or nearby. If the wind picks up, we'll move the day or the route to keep things safe and worth your while."
      }
    ],
    "cta": {
      "heading": "Plan your private fishing day",
      "sub": "Send your dates and group size on WhatsApp and we'll check availability. Pickup, gear, food and crew included, all from Soma Bay marina."
    }
  },
  "red-sea-overnight-boat-trips": {
    "metaTitle": "Red Sea Overnight Boat Trips | Soma Bay Charter",
    "metaDescription": "Private Red Sea overnight boat trips from Soma Bay on the Locke Catamaran. Four cabins, dinner at anchor, a sunrise swim. All-inclusive. Check availability.",
    "ogTitle": "Red Sea Overnight Boat Trips on the Locke Catamaran",
    "ogDescription": "Sleep aboard near Tobia Island. Four cabins, dinner at anchor, stars, a sunrise swim. Private and all-inclusive.",
    "hero": {
      "kicker": "Soma Bay, Red Sea",
      "h1": "Red Sea Overnight Boat Trips, Spent Entirely on the Water",
      "intro": "Sleep aboard the Locke Catamaran at anchor in a quiet bay, with four cabins, dinner cooked on deck and the stars left on. Private only, never a shared group. The price you see is the price you pay."
    },
    "intro2": "A real overnight, not a long day trip that ends back at the marina. You leave Soma Bay in the afternoon, anchor somewhere sheltered as the light drops, and have the water to yourselves at first light. Pickup, food, drinks, snorkelling gear, towels, fuel and a full crew are all included.",
    "highlights": [
      {
        "title": "Four private cabins",
        "body": "The Locke Catamaran sleeps up to 14 across four rooms, so couples and groups each get a proper bed and a door that closes."
      },
      {
        "title": "Dinner at anchor",
        "body": "Your crew cooks aboard and serves on deck once the boat is settled in a quiet bay for the night."
      },
      {
        "title": "Stars then sunrise",
        "body": "No marina lights, no engine noise. Just the sky overhead at night and a quiet swim before breakfast."
      },
      {
        "title": "One clear price",
        "body": "All-inclusive and private. The price you see is the price you pay, with nothing sprung on you at sea."
      }
    ],
    "sections": [
      {
        "heading": "A night at anchor near Tobia Island",
        "body": "We take the Locke Catamaran towards the calmer water around Tobia Island and the Tobia Arba sandbank, or a sheltered bay near Ras Abu Soma if the wind asks for it. The catamaran is wide and stable, which matters most when you are sleeping on it. It sits flat and quiet through the night.\n\nDinner is cooked aboard and eaten on deck. After that the evening is yours. Most people stay up later than they planned, because nothing is pulling them back to shore."
      },
      {
        "heading": "What an overnight trip actually includes",
        "body": "Hotel or resort pickup and drop-off from anywhere around Soma Bay, the Kempinski, Sheraton, Robinson Club, La Residence des Cascades and the rest. Food and drinks throughout, snorkelling gear, towels, fuel and a full crew who handle the boat so you do not have to.\n\nIt is a private charter from the moment you board. No shared groups, no other guests, no photographer following you around, no surprise fees at the end."
      },
      {
        "heading": "Sunrise on the Red Sea, then a swim",
        "body": "Waking up offshore is the part people remember. The sea is glassy first thing, the snorkelling spots are empty, and you can be in the water before breakfast while the crew sorts coffee.\n\nWe build each overnight around your group, from a quiet escape for two to a celebration for fourteen. Message us on WhatsApp with your dates and we will tell you what is open."
      }
    ],
    "faqs": [
      {
        "q": "How many people can sleep aboard on an overnight trip?",
        "a": "The Locke Catamaran has four cabins and sleeps up to 14, so it suits a couple wanting space or a larger group or family travelling together. Every overnight is private to your group only. Overnight charters on the Locke start from EUR 450, and we will quote your exact dates on WhatsApp."
      },
      {
        "q": "Where does the boat anchor for the night?",
        "a": "Usually in the calmer water near Tobia Island and the Tobia Arba sandbank, or a sheltered bay close to Ras Abu Soma. The exact spot depends on the wind and sea that day, and your crew always picks the steadiest, quietest option for a comfortable night at anchor."
      },
      {
        "q": "What happens if the weather turns?",
        "a": "The crew reads the forecast and chooses the most sheltered anchorage for the conditions, which is part of why the trip is flexible on where you spend the night. If the sea looks genuinely unsafe we will move your dates rather than push out in bad weather. Message us on WhatsApp and we will sort it."
      },
      {
        "q": "Is everything really included in the price?",
        "a": "Yes. Resort pickup and drop-off around Soma Bay, all food and drinks, snorkelling gear, towels, fuel and a full crew are included as standard. The price you see is the price you pay, with no hidden fees, no add-ons and no photographer pressure."
      },
      {
        "q": "How do we book an overnight trip?",
        "a": "Message us on WhatsApp at +20 120 572 6571 with your dates and group size and we will check availability. Overnights run from Soma Bay marina and fill up around peak weekends, so it helps to reach out early."
      }
    ],
    "cta": {
      "heading": "Spend a night on the Red Sea",
      "sub": "Send your dates and group size on WhatsApp and we will check availability for an overnight on the Locke Catamaran."
    }
  },
  "all-inclusive-boat-trips-hurghada": {
    "metaTitle": "All-Inclusive Boat Trips Hurghada | Lucky Lady Trips",
    "metaDescription": "Private all-inclusive boat trips from Soma Bay near Hurghada. Pickup, food, drinks, gear, towels, fuel and crew included. The price you see is what you pay.",
    "ogTitle": "All-Inclusive Boat Trips, Hurghada & Soma Bay",
    "ogDescription": "Private boats only. One price, everything in. No surprise add-ons, no photographer pressure. Check availability on WhatsApp.",
    "hero": {
      "kicker": "Soma Bay & Hurghada",
      "h1": "All-Inclusive Boat Trips in Hurghada, Done Privately",
      "intro": "Plenty of cheap tours quote one number, then grow it at the dock: drinks, photos, a marine-park fee nobody mentioned. We do it the other way round. One private boat, one price, the lot included, with the Soma Bay and Hurghada reefs to yourselves."
    },
    "intro2": "Our three boats run out of Soma Bay marina, a short transfer from the Hurghada resorts. No shared groups, no strangers, no clipboard at the harbour selling you extras. Just your people, your crew, and a day on the Red Sea that costs exactly what we quoted.",
    "highlights": [
      {
        "title": "One Price, Everything In",
        "body": "Pickup, food, drinks, snorkelling gear, towels, fuel and a full crew, all included from the moment we quote you."
      },
      {
        "title": "Private Boat Only",
        "body": "You never share with other tourists. The whole boat is yours for the day, start to finish."
      },
      {
        "title": "No Dock Upsells",
        "body": "No photographer pressure, no surprise add-ons, no tourist-trap extras waiting at the marina."
      },
      {
        "title": "Easy To Check",
        "body": "Message us on WhatsApp with your dates and group size, and we'll check availability across the three boats."
      }
    ],
    "sections": [
      {
        "heading": "What \"all-inclusive\" actually means here",
        "body": "On a lot of Hurghada trips, the headline price is just the entry fee. Then comes the bottled water, the lunch upgrade, the photo package, the marine-park charge nobody mentioned. By the end you've paid double and shared the boat with forty people.\n\nOurs work differently. The number we quote covers hotel or resort pickup and drop-off, food and drinks on board, snorkelling gear, towels, fuel and the crew. Nothing to settle at the end of the day. The price you see is the price you pay."
      },
      {
        "heading": "Soma Bay and the Hurghada reefs, on your terms",
        "body": "We're based at Soma Bay marina, an easy transfer from the Hurghada hotels and the resorts nearby, Kempinski, Sheraton, La Residence des Cascades and the rest. From there the day is yours to shape.\n\nSnorkel the reefs at Ras Abu Soma, anchor off the Tobia Arba sandbank, or run out toward Abu Ramada and Giftun Island. Swim where you like, eat when you're hungry, stay out for the sunset if the day's going well. No fixed group schedule rushing you back to the harbour."
      }
    ],
    "faqs": [
      {
        "q": "Are these really private trips, not shared boats?",
        "a": "Yes. Every Lucky Lady trip is private. You book the whole boat for your group, whether that's a couple, a family, or up to fourteen people on the Locke Catamaran. You're never put on a shared tourist boat with strangers."
      },
      {
        "q": "What's included in an all-inclusive boat trip?",
        "a": "Hotel or resort pickup and drop-off, food, drinks, snorkelling gear, towels, fuel and a full crew, all as standard. The price you see is the price you pay, with nothing extra to settle at the dock."
      },
      {
        "q": "Do you pick up from Hurghada hotels?",
        "a": "Yes. We arrange pickup and drop-off from hotels and resorts around Hurghada and Soma Bay as part of every trip. Tell us where you're staying when you message us and we'll organise the transfer."
      },
      {
        "q": "What happens if the weather turns?",
        "a": "The Red Sea has good days and rough ones. If conditions aren't safe or pleasant, we'll talk it through and move your trip to a better day. Since every charter is private, there's no fixed group departure forcing you out in poor weather."
      },
      {
        "q": "How do I check availability and book?",
        "a": "Message us on WhatsApp at +20 120 572 6571 with your dates and group size, and we'll check availability. We run three boats from Soma Bay marina, so we can usually match the right one to your plans."
      }
    ],
    "cta": {
      "heading": "One private boat, one honest price",
      "sub": "Tell us your dates and who's coming. We'll check availability on WhatsApp and arrange everything, from pickup to the last swim."
    }
  },
  "private-yacht-charter-soma-bay": {
    "metaTitle": "Private Yacht Charter Soma Bay | Lucky Lady Trips",
    "metaDescription": "Private yacht charter from Soma Bay marina, routed around your group. All-inclusive: pickup, food, drinks, snorkelling gear, towels and crew. No surprise fees.",
    "ogTitle": "Private Yacht Charter in Soma Bay | Lucky Lady Trips",
    "ogDescription": "Private charters from Soma Bay marina. Three boats, one all-inclusive day, routed around you. Check availability on WhatsApp.",
    "hero": {
      "kicker": "Soma Bay, Red Sea",
      "h1": "Private Yacht Charter in Soma Bay, Routed Around You",
      "intro": "A private day on the Red Sea, planned to suit your group rather than a fixed timetable. Pick your boat, tell us how you like to spend a day on the water, and we organise the rest. Pickup, food, drinks, snorkelling gear, towels and a full crew are included as standard."
    },
    "intro2": "Everything leaves from Soma Bay marina, a short hop from the Kempinski, the Sheraton and La Residence des Cascades. We collect you from your resort, set a course around your day, and have you back without the rush. No shared groups. No surprise fees. No photographer hovering for a sale.",
    "highlights": [
      {
        "title": "Private only",
        "body": "Your boat, your crew, your people. Never a shared tourist run."
      },
      {
        "title": "All-inclusive",
        "body": "Pickup, food, drinks, snorkelling gear, towels, fuel and crew are all in."
      },
      {
        "title": "Routed around you",
        "body": "We shape the day to suit you, from the Tobia Island sandbanks to a slow run back at sunset."
      },
      {
        "title": "Honest pricing",
        "body": "The price you see is the price you pay. No add-ons, no awkward extras."
      }
    ],
    "sections": [
      {
        "heading": "A charter built around your day, not a timetable",
        "body": "Most boat trips out of Soma Bay run a fixed loop. A private charter works the other way round. Tell us whether you want long snorkelling stops, a lazy anchor over the shallows at Tobia Island, a run out past Ras Abu Soma, or a quiet sunset cruise back into the marina, and we shape the day to match.\n\nWith three boats to choose from, we put the right one under your group. Couples and small parties, families, or a larger celebration that wants more room and four cabins to spread out in."
      },
      {
        "heading": "Three boats, one all-inclusive standard",
        "body": "One Lucky Lady is the original private Red Sea escape, sized for 4 to 6 guests and made for couples, families and slow snorkelling days, from EUR 250. The Locke Catamaran takes up to 14 guests across four cabins, stable and roomy for groups, celebrations and overnight escapes, from EUR 450. The Private Speedboat is fast and private, built for fishing, quick escapes and snorkelling stops, from EUR 150.\n\nWhichever you pick, the standard holds. Hotel pickup and drop-off, food, drinks, snorkelling gear, towels, fuel and a full crew, all included. The price you see is the price you pay."
      },
      {
        "heading": "Local waters we know well",
        "body": "We live here. Soma Bay has been home since the first trip on One Lucky Lady, and the routes that followed come from years on this stretch of coast: the calm sandbanks at Tobia Island and Tobia Arba, the reef off Ras Abu Soma, the light on the water on the way back in.\n\nWe can keep it close and easy, or plan something more bespoke if you want longer out there. Either way you get a crew who knows where to go and when, so the day runs without you having to think about it."
      }
    ],
    "faqs": [
      {
        "q": "What does a private yacht charter in Soma Bay include?",
        "a": "Everything for the day. Hotel or resort pickup and drop-off, food, drinks, snorkelling gear, towels, fuel and a full crew are all included as standard. There are no hidden fees and nothing pushed on board. The price you see is the price you pay."
      },
      {
        "q": "Can I tailor the route and timings?",
        "a": "Yes, that is the whole point of going private. We plan the day around your group, whether that means long snorkelling stops, an anchor over the Tobia Island sandbanks, a run out past Ras Abu Soma, or a slow sunset cruise back to the marina. Tell us how you like to spend a day on the water and we organise it."
      },
      {
        "q": "Which of the three boats should I choose?",
        "a": "It depends on your group and your plans. One Lucky Lady (4 to 6 guests, from EUR 250) suits couples and families. The Locke Catamaran (up to 14 guests, four cabins, from EUR 450) is made for larger groups, celebrations and overnight escapes. The Private Speedboat (4 to 6 guests, from EUR 150) is best for fishing and fast private runs."
      },
      {
        "q": "What happens if the weather turns?",
        "a": "We watch the conditions on this coast every day and would rather move your trip than send you out on a rough one. If the wind picks up we will talk through the options, switch to more sheltered water around Tobia Island, or rebook you for a better day. Message us and we will sort it."
      },
      {
        "q": "How do I check availability and book?",
        "a": "Message us on WhatsApp at +20 120 572 6571 and we will check availability for your dates. Tell us your group size, your resort and the kind of day you have in mind, and we will sort the boat, the routing and the pickup."
      }
    ],
    "cta": {
      "heading": "Plan your private day on the Red Sea",
      "sub": "Tell us your dates, your group and how you like to spend a day on the water. Message us on WhatsApp to check availability."
    }
  }
}

export const seoPages = Object.keys(meta).map((slug) => ({
  slug,
  ...meta[slug],
  ...content[slug],
}))

export const seoPageBySlug = Object.fromEntries(seoPages.map((p) => [p.slug, p]))

export const seoPageSlugs = seoPages.map((p) => p.slug)
