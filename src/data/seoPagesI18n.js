import { images } from './images.js'

// ---------------------------------------------------------------------------
//  German + Russian versions of the top three SEO landing pages.
//  Each localized page belongs to a translation *group* (keyed by the English
//  slug) so hreflang alternates always point at the right siblings.
//
//  To edit copy: change the entry in `pages` below.
//  To add a language to a group: add the slug to `translationGroups` AND a
//  matching entry in `pages` — routes, hreflang and the sitemap follow.
//
//  The WhatsApp pre-fill is in the visitor's language (comfort at the moment
//  of enquiry beats Sean's parsing convenience — he translates in one tap);
//  the template notes under the CTA set the "Sean replies in English"
//  expectation honestly.
// ---------------------------------------------------------------------------

// Which URL serves each language of a page group. x-default = English.
export const translationGroups = {
  'soma-bay-boat-trips': {
    en: '/soma-bay-boat-trips',
    de: '/de/soma-bay-bootstouren',
    ru: '/ru/morskie-progulki-soma-bay',
  },
  'hurghada-private-boat-trips': {
    en: '/hurghada-private-boat-trips',
    de: '/de/private-bootstouren-hurghada',
    ru: '/ru/chastnye-morskie-progulki-hurgada',
  },
  'all-inclusive-boat-trips-hurghada': {
    en: '/all-inclusive-boat-trips-hurghada',
    de: '/de/all-inclusive-bootstouren-hurghada',
    ru: '/ru/morskie-progulki-hurgada-vse-vklyucheno',
  },
}

/** hreflang alternates (incl. x-default) for a translation group. */
export function alternatesFor(groupKey) {
  const group = translationGroups[groupKey]
  if (!group) return []
  return [
    ...Object.entries(group).map(([hrefLang, href]) => ({ hrefLang, href })),
    { hrefLang: 'x-default', href: group.en },
  ]
}

// Template strings shared by every page of a language.
export const localeUi = {
  de: {
    htmlLang: 'de',
    ogLocale: 'de_DE',
    breadcrumbHome: 'Startseite',
    inclusions: [
      { icon: 'car', label: 'Hotelabholung' },
      { icon: 'plate', label: 'Essen & Getränke' },
      { icon: 'mask', label: 'Schnorchelausrüstung' },
      { icon: 'towel', label: 'Handtücher' },
      { icon: 'crew', label: 'Crew & Treibstoff' },
    ],
    whatsappLabel: 'Verfügbarkeit anfragen',
    whatsappMessage:
      'Hallo Sean, ich möchte die Verfügbarkeit für Lucky Lady Trips anfragen.\n\nWunschdatum:\nAnzahl der Gäste:\nWunschboot:\nArt des Ausflugs:\nAbholung / Hotel:\nBesondere Wünsche:',
    replyNote: 'Sean antwortet persönlich – auf Englisch, meist innerhalb weniger Stunden.',
    boatsEyebrow: 'Ihr Boot',
    boatsTitle: 'Drei Boote, immer privat',
    boatsIntro: 'Ausschließlich private Charter, all-inclusive – der genannte Preis ist der Endpreis.',
    boatsCta: 'Alle Boote ansehen (Englisch)',
    faqEyebrow: 'Gut zu wissen',
    faqTitle: 'Häufige Fragen',
    langNoteLabel: 'Sprache',
  },
  ru: {
    htmlLang: 'ru',
    ogLocale: 'ru_RU',
    breadcrumbHome: 'Главная',
    inclusions: [
      { icon: 'car', label: 'Трансфер из отеля' },
      { icon: 'plate', label: 'Еда и напитки' },
      { icon: 'mask', label: 'Снаряжение для снорклинга' },
      { icon: 'towel', label: 'Полотенца' },
      { icon: 'crew', label: 'Экипаж и топливо' },
    ],
    whatsappLabel: 'Узнать свободные даты',
    whatsappMessage:
      'Здравствуйте, Шон! Хочу узнать о свободных датах Lucky Lady Trips.\n\nЖелаемая дата:\nКоличество гостей:\nЛодка:\nТип поездки:\nОтель / место встречи:\nОсобые пожелания:',
    replyNote: 'Шон отвечает лично — на английском, обычно в течение нескольких часов.',
    boatsEyebrow: 'Ваша лодка',
    boatsTitle: 'Три судна — всегда только для вас',
    boatsIntro: 'Только частные чартеры, всё включено. Цена, которую вы видите, — окончательная.',
    boatsCta: 'Посмотреть все лодки (на английском)',
    faqEyebrow: 'Полезно знать',
    faqTitle: 'Частые вопросы',
    langNoteLabel: 'Язык',
  },
}

// Compact localized boat summaries for the landing pages (the full /boats page
// stays English for now, so these cards carry the essentials in-language).
export const localizedBoats = {
  de: [
    { id: 'one-lucky-lady', name: 'One Lucky Lady', image: images.hero, line: '4–6 Gäste · das Original für Paare & Familien', price: 'ab 300 €' },
    { id: 'locke-catamaran', name: 'Locke Katamaran', image: images.lockeCatamaran, line: 'bis 14 Gäste · 4 Kabinen · Gruppen & Übernachtungen', price: 'ab 115 € p. P. (min. 4)' },
    { id: 'private-speedboat', name: 'Privates Speedboot', image: images.privateSpeedboat, line: '4–6 Gäste · schnell zu Riffen & Angelgründen', price: 'ab 250 €' },
  ],
  ru: [
    { id: 'one-lucky-lady', name: 'One Lucky Lady', image: images.hero, line: '4–6 гостей · идеальна для пар и семей', price: 'от 300 €' },
    { id: 'locke-catamaran', name: 'Катамаран Locke', image: images.lockeCatamaran, line: 'до 14 гостей · 4 каюты · компании и ночёвки на воде', price: 'от 115 € с чел. (мин. 4)' },
    { id: 'private-speedboat', name: 'Частный катер', image: images.privateSpeedboat, line: '4–6 гостей · быстро к рифам и местам рыбалки', price: 'от 250 €' },
  ],
}

const pages = [
  // ------------------------------------------------------------------ DE ---
  {
    lang: 'de',
    groupKey: 'soma-bay-boat-trips',
    slug: 'de/soma-bay-bootstouren',
    image: images.oneLuckyLadySomabay,
    imageAlt: 'One Lucky Lady im Yachthafen von Soma Bay, dahinter der Simply-Somabay-Schriftzug am Ufer',
    metaTitle: 'Soma Bay Bootstouren: Privat & All-Inclusive',
    metaDescription:
      'Private All-Inclusive-Bootstouren ab Soma Bay am Roten Meer. Hotelabholung, Essen, Getränke, Schnorchelausrüstung und Crew inklusive. Keine Gruppen, keine versteckten Kosten.',
    hero: {
      kicker: 'Soma Bay, Rotes Meer',
      h1: 'Private Bootstouren in Soma Bay, komplett organisiert',
      intro:
        'Vergessen Sie die überfüllte Gruppentour. Lucky Lady fährt private Bootstage ab dem Yachthafen Soma Bay – mit Abholung von Ihrem Resort und einem Boot, das ganz allein Ihnen gehört. Nur Ihre Leute, Ihre Crew und das Meer.',
    },
    intro2:
      'Soma Bay liegt auf einer eigenen Halbinsel südlich von Hurghada, mit Marina und Riff direkt vor der Tür. Das Wasser ist Minuten vom Hafen entfernt, nicht eine Stunde die Küste hinauf – die Transfers sind kurz, der Start entspannt. Wir holen Sie an Ihrem Hotel ab, ganz ohne das frühe Gedränge der großen Touristenboote.',
    highlights: [
      { title: 'Ausschließlich privat', body: 'Das Boot gehört für den Tag Ihnen. Keine fremden Gruppen, kein fester Zeitplan.' },
      { title: 'Hotelabholung inklusive', body: 'Wir holen Sie in jedem Soma-Bay-Hotel ab – Kempinski, Sheraton, Robinson, La Résidence des Cascades – und bringen Sie zurück.' },
      { title: 'All-inclusive, ehrlich kalkuliert', body: 'Essen, Getränke, Handtücher, Schnorchelausrüstung, Treibstoff und Crew sind im Preis. Der genannte Preis ist der Endpreis.' },
      { title: 'Das Riff direkt vor der Tür', body: 'Ras Abu Soma und die Sandbank Tobia Arba liegen nah – Sie verbringen den Tag im Wasser, nicht auf dem Weg dorthin.' },
    ],
    sections: [
      {
        heading: 'Bootstouren in Soma Bay, wie sie sein sollten',
        body: 'Die meisten Bootsausflüge an dieser Küste bedeuten: Bus, volles Deck und ein Programm, das sich nach vierzig anderen richtet. Wir machen das Gegenteil. Lucky Lady fährt ausschließlich private Charter ab dem Yachthafen Soma Bay – das ganze Boot ist für Sie und Ihre Begleitung reserviert.\n\nSagen Sie uns, wie Ihr Tag aussehen soll, und wir organisieren ihn: ein ruhiger Schnorchelvormittag über Ras Abu Soma, ein langes Mittagessen vor Anker, eine Rückfahrt im Abendlicht. Nichts wird gehetzt, nichts geteilt.',
      },
      {
        heading: 'Was rund um Soma Bay liegt',
        body: 'Die Lage nimmt Ihnen die Arbeit ab. Das Riff von Ras Abu Soma zieht sich direkt um die Landzunge vor der Marina, die Sandbank Tobia Arba liegt in bequemer Reichweite für einen Stopp im flachen, türkisfarbenen Wasser. Für längere Tage geht es Richtung Norden zu den Riffen von Giftun und Hurghada.\n\nWeil das Wasser so nah ist, bleibt mehr Zeit darin: kurz raus, Anker runter, Flossen an. Genau dafür startet man in Soma Bay und nicht weiter oben an der Küste.',
      },
      {
        heading: 'Drei Boote, ein privater Tag',
        body: 'Wählen Sie das Boot, das zu Ihrer Gruppe passt. Die One Lucky Lady nimmt 4 bis 6 Gäste ab 300 €, gemacht für Paare und kleine Familien. Der Locke Katamaran trägt bis zu 14 Gäste in vier Kabinen ab 115 € pro Person (mindestens 4 Gäste) – ideal für größere Gruppen, Feiern und Übernachtungen auf dem Wasser. Das private Speedboot nimmt 4 bis 6 Gäste ab 250 € für Angeltouren und schnelle Schnorchelstopps. Jeder Ausflug beginnt bei 4 Stunden und darf gern länger dauern.\n\nUnsicher, was passt? Schreiben Sie uns auf WhatsApp, wir beraten Sie gern.',
      },
    ],
    faqs: [
      {
        q: 'Von wo starten die Bootstouren in Soma Bay?',
        a: 'Alle privaten Touren starten im Yachthafen von Soma Bay, auf der Halbinsel südlich von Hurghada. Wir holen Sie an Ihrem Resort ab und bringen Sie am Ende des Tages zurück – Sie müssen keinen Transfer organisieren.',
      },
      {
        q: 'Sind das private Touren oder Gruppenausflüge?',
        a: 'Ausschließlich privat. Das ganze Boot ist für Ihre Gruppe reserviert, mit eigener Crew. Sie kommen nie auf ein geteiltes Touristenboot, und es gibt keinen festen Zeitplan – der Tag läuft in Ihrem Tempo.',
      },
      {
        q: 'Was ist im Preis enthalten?',
        a: 'Alles für den Tag: Hotelabholung und Rücktransfer, Essen, Getränke, Handtücher, Schnorchelausrüstung, Treibstoff und die komplette Crew. Der genannte Preis ist der Endpreis – ohne versteckte Gebühren und ohne aufdringliche Foto-Verkäufer an Bord.',
      },
      {
        q: 'Aus welchen Hotels holen Sie ab, und was passiert bei schlechtem Wetter?',
        a: 'Wir holen in ganz Soma Bay ab, unter anderem im Kempinski Soma Bay, Sheraton Soma Bay, in der La Résidence des Cascades, im Robinson Club und im Caribbean World. Das Rote Meer ist hier meist ruhig; frischt der Wind auf, passen wir die Route an oder verlegen den Termin gemeinsam mit Ihnen. Bei einem Privatboot zwingt Sie kein Gruppenfahrplan bei schlechten Bedingungen aufs Wasser.',
      },
      {
        q: 'Wie frage ich Verfügbarkeit an und buche?',
        a: 'Schreiben Sie uns auf WhatsApp an +20 120 572 6571. Nennen Sie Datum, Gruppengröße und Ihre Wunsch-Tagesform, und wir prüfen die Verfügbarkeit und klären alle Details. Sean antwortet auf Englisch.',
      },
    ],
    cta: {
      heading: 'Planen Sie Ihren privaten Tag ab Soma Bay',
      sub: 'Senden Sie uns Datum und Gruppengröße per WhatsApp, wir prüfen die Verfügbarkeit. Abholung, Essen, Getränke, Ausrüstung und Crew inklusive – der genannte Preis ist der Endpreis.',
    },
  },
  {
    lang: 'de',
    groupKey: 'hurghada-private-boat-trips',
    slug: 'de/private-bootstouren-hurghada',
    image: images.oneLuckyLadyMarina,
    imageAlt: 'Privates Boot auf ruhigem, türkisfarbenem Wasser vor der Küste von Hurghada',
    metaTitle: 'Private Bootstouren Hurghada | Lucky Lady Trips',
    metaDescription:
      'Private Bootstouren ab Hurghada zum Giftun-Archipel, nach Orange Bay und Mahmya. All-inclusive: Hotelabholung, Essen, Getränke, Schnorchelausrüstung und Crew.',
    hero: {
      kicker: 'Hurghada, Rotes Meer',
      h1: 'Private Bootstouren ab Hurghada – nur Ihre Leute an Bord',
      intro:
        'Sie sind für das Rote Meer gekommen, nicht für hundert Fremde und einen Lautsprecher. Wir fahren private Touren ab Hurghada mit Hotelabholung, Essen, Getränken und kompletter Crew – an Deck sind nur die, die Sie mitgebracht haben. Der genannte Preis ist der Endpreis.',
    },
    intro2:
      'Kein Bus-Transfer im Konvoi, kein Warten auf den Langsamsten von vierzig Gästen, kein Verkaufsstand am Schnorchelstopp. Wir holen Sie am Hotel ab und fahren zur Giftun-Insel, in die türkisfarbenen Flachwasser von Orange Bay, zur Sandbank von Mahmya und zu den Riffen um Abu Ramada. Die Route richtet sich nach Ihrem Tag, nicht nach einem Fahrplan.',
    highlights: [
      { title: 'Ausschließlich privat', body: 'Ihr Boot, Ihre Gruppe. Kein geteiltes Deck, keine Fremden von der Ausflugsliste.' },
      { title: 'All-inclusive', body: 'Hotelabholung, Essen, Getränke, Schnorchelausrüstung, Handtücher, Treibstoff und Crew – alles im Preis.' },
      { title: 'Keine Überraschungen', body: 'Der genannte Preis ist der Endpreis. Kein Foto-Verkäufer, keine Extras auf See.' },
      { title: 'Die echten Riffe', body: 'Giftun, Orange Bay, Mahmya und Abu Ramada – auf einer Route, die sich nach Ihnen richtet.' },
    ],
    sections: [
      {
        heading: 'Warum privat besser ist als die großen Ausflugsboote',
        body: 'Der Hafen von Hurghada ist voller großer Boote, die so viele Gäste laden, wie hineinpassen: laute Musik, fester Zeitplan, Schlange an der Badeleiter – und eine Liste von Extras, die erst auf See auftaucht. Für manche mag das passen. Wir machen es anders.\n\nLucky Lady fährt ausschließlich privat. Sie bestimmen das Tempo, Sie wählen die Stopps, und die Crew kümmert sich um Ihre Gruppe – um niemanden sonst. Ein langer, ruhiger Schnorchelgang bei Abu Ramada und danach ein gemütliches Mittagessen an Deck? Gern. Weiter nach Mahmya, solange das Wasser ruhig ist? Sagen Sie es einfach. Es ist Ihr Boot – kein Sitzplatz im Programm von jemand anderem.',
      },
      {
        heading: 'Wohin wir fahren – und was schon enthalten ist',
        body: 'Von Hurghada aus geht es zur Giftun-Insel, ins flache Wasser von Orange Bay, zur Sandbank von Mahmya und zu den Riffen um Abu Ramada, wo Ihnen Makrelen und die eine oder andere Barrakuda begegnen können. Schnorchelausrüstung und Handtücher liegen an Bord, Essen und Getränke sind organisiert, Treibstoff und Crew gehören zum Preis – nicht auf eine Extrarechnung.\n\nDrei Boote stehen zur Wahl: Die One Lucky Lady für Paare und kleine Gruppen ab 300 €. Der Locke Katamaran mit vier Kabinen für bis zu vierzehn Gäste ab 115 € pro Person (mindestens 4). Das private Speedboot für schnelle Touren und Angeltage ab 250 €. Schreiben Sie uns Gruppe und Datum per WhatsApp, wir sagen Ihnen, was passt.',
      },
    ],
    faqs: [
      {
        q: 'Sind die Touren wirklich privat oder mit anderen Gästen geteilt?',
        a: 'Jede Tour ist komplett privat. Sie buchen das ganze Boot nur für Ihre Gruppe – nie einen Platz auf einem geteilten Ausflugsboot. Keine fremden Gäste an Deck, kein Gruppenfahrplan.',
      },
      {
        q: 'Holen Sie von Hotels in Hurghada ab, und was ist sonst enthalten?',
        a: 'Ja. Abholung und Rücktransfer im Raum Hurghada sind Standard, ebenso Essen, Getränke, Schnorchelausrüstung, Handtücher, Treibstoff und Crew. Sagen Sie uns, wo Sie wohnen – den Rest organisieren wir.',
      },
      {
        q: 'Welche Spots können wir anfahren, und was passiert bei Wind?',
        a: 'Wir fahren zur Giftun-Insel, nach Orange Bay, Mahmya und zu den Riffen um Abu Ramada – und weil die Tour privat ist, planen wir die Route um Ihre Gruppe herum. Ist das Meer zu rau, besprechen wir gemeinsam, ob wir den Tag verschieben oder die Route anpassen.',
      },
      {
        q: 'Was kostet es, und gibt es versteckte Gebühren?',
        a: 'Die Preise beginnen bei 250 € für das Speedboot, 300 € für die One Lucky Lady und 115 € pro Person (mindestens 4 Gäste) für den Locke Katamaran; jede Tour dauert mindestens 4 Stunden. Der genannte Preis ist der Endpreis – keine Zuschläge, keine Foto-Verkäufer, keine Überraschungen auf See.',
      },
      {
        q: 'Wie buchen wir und prüfen die Verfügbarkeit?',
        a: 'Schreiben Sie uns auf WhatsApp an +20 120 572 6571 mit Datum und Gruppengröße. Wir bestätigen das passende Boot und organisieren die Abholung – Sie müssen nur noch einsteigen. Sean antwortet auf Englisch.',
      },
    ],
    cta: {
      heading: 'Ihr privater Tag auf dem Roten Meer, komplett organisiert',
      sub: 'Senden Sie Datum und Gruppengröße per WhatsApp, wir prüfen die Verfügbarkeit. Privates Boot, all-inclusive – der genannte Preis ist der Endpreis.',
    },
  },
  {
    lang: 'de',
    groupKey: 'all-inclusive-boat-trips-hurghada',
    slug: 'de/all-inclusive-bootstouren-hurghada',
    image: images.hero,
    imageAlt: 'Privater All-Inclusive-Bootstag auf dem Roten Meer, komplett organisiert',
    metaTitle: 'All-Inclusive Bootstouren Hurghada & Soma Bay',
    metaDescription:
      'Private All-Inclusive-Bootstouren ab Soma Bay bei Hurghada. Abholung, Essen, Getränke, Ausrüstung, Handtücher, Treibstoff und Crew inklusive. Endpreis garantiert.',
    hero: {
      kicker: 'Soma Bay & Hurghada',
      h1: 'All-Inclusive-Bootstouren in Hurghada – aber privat',
      intro:
        'Viele günstige Touren nennen einen Preis und lassen ihn am Steg wachsen: Getränke, Fotos, eine Nationalpark-Gebühr, die niemand erwähnt hat. Wir machen es umgekehrt. Ein privates Boot, ein Preis, alles drin – und die Riffe von Soma Bay und Hurghada für Sie allein.',
    },
    intro2:
      'Unsere drei Boote starten im Yachthafen von Soma Bay, einen kurzen Transfer von den Hotels in Hurghada entfernt. Keine geteilten Gruppen, keine Fremden, kein Klemmbrett am Hafen, das Ihnen Extras verkauft. Nur Ihre Leute, Ihre Crew und ein Tag auf dem Roten Meer, der genau so viel kostet wie angeboten.',
    highlights: [
      { title: 'Ein Preis, alles drin', body: 'Abholung, Essen, Getränke, Schnorchelausrüstung, Handtücher, Treibstoff und Crew – ab dem ersten Angebot enthalten.' },
      { title: 'Nur Privatboote', body: 'Sie teilen nie mit anderen Touristen. Das ganze Boot gehört Ihnen, von Anfang bis Ende.' },
      { title: 'Keine Verkäufer am Steg', body: 'Kein Foto-Druck, keine Überraschungs-Extras, keine Touristenfallen an der Marina.' },
      { title: 'Einfach anfragen', body: 'Datum und Gruppengröße per WhatsApp – wir prüfen die Verfügbarkeit über alle drei Boote.' },
    ],
    sections: [
      {
        heading: 'Was „all-inclusive“ hier wirklich bedeutet',
        body: 'Bei vielen Hurghada-Touren ist der beworbene Preis nur der Eintritt. Danach kommen das Wasser in der Flasche, das Mittagessen-Upgrade, das Fotopaket, die Nationalpark-Gebühr, die keiner erwähnt hat. Am Ende haben Sie das Doppelte bezahlt und das Boot mit vierzig Leuten geteilt.\n\nBei uns deckt der genannte Betrag die Abholung am Hotel, Essen und Getränke an Bord, Schnorchelausrüstung, Handtücher, Treibstoff und die Crew ab. Am Ende des Tages ist nichts mehr zu begleichen. Der genannte Preis ist der Endpreis.',
      },
      {
        heading: 'Soma Bay und die Riffe von Hurghada, zu Ihren Bedingungen',
        body: 'Unser Heimathafen ist die Marina von Soma Bay, bequem erreichbar von den Hotels in Hurghada und den Resorts der Umgebung – Kempinski, Sheraton, Robinson, La Résidence des Cascades. Von dort gehört der Tag Ihnen.\n\nSchnorcheln am Riff von Ras Abu Soma, ankern an der Sandbank Tobia Arba oder hinaus Richtung Abu Ramada und Giftun. Schwimmen Sie, wo es Ihnen gefällt, essen Sie, wenn Sie Hunger haben, bleiben Sie für den Sonnenuntergang draußen. Kein Gruppenfahrplan treibt Sie zurück zum Hafen.',
      },
    ],
    faqs: [
      {
        q: 'Sind das wirklich private Touren, keine geteilten Boote?',
        a: 'Ja. Jede Lucky-Lady-Tour ist privat. Sie buchen das ganze Boot für Ihre Gruppe – ob zu zweit, als Familie oder mit bis zu vierzehn Personen auf dem Locke Katamaran. Sie kommen nie mit Fremden auf ein geteiltes Ausflugsboot.',
      },
      {
        q: 'Was ist bei einer All-Inclusive-Bootstour enthalten?',
        a: 'Hotelabholung und Rücktransfer, Essen, Getränke, Schnorchelausrüstung, Handtücher, Treibstoff und die komplette Crew – alles Standard. Der genannte Preis ist der Endpreis, ohne Nachzahlung am Steg.',
      },
      {
        q: 'Holen Sie von Hotels in Hurghada ab?',
        a: 'Ja. Abholung und Rücktransfer von Hotels und Resorts rund um Hurghada und Soma Bay gehören zu jeder Tour. Sagen Sie uns bei der Anfrage, wo Sie wohnen, und wir organisieren den Transfer.',
      },
      {
        q: 'Was passiert bei schlechtem Wetter?',
        a: 'Das Rote Meer hat gute und raue Tage. Wenn die Bedingungen nicht sicher oder angenehm sind, besprechen wir das offen und verschieben Ihre Tour auf einen besseren Tag. Da jeder Charter privat ist, zwingt Sie kein fester Gruppentermin bei schlechtem Wetter aufs Wasser.',
      },
      {
        q: 'Wie prüfe ich Verfügbarkeit und buche?',
        a: 'Schreiben Sie uns auf WhatsApp an +20 120 572 6571 mit Datum und Gruppengröße. Wir fahren drei Boote ab Soma Bay und finden fast immer das passende für Ihre Pläne. Sean antwortet auf Englisch.',
      },
    ],
    cta: {
      heading: 'Ein privates Boot, ein ehrlicher Preis',
      sub: 'Nennen Sie uns Datum und Gruppengröße. Wir prüfen die Verfügbarkeit per WhatsApp und organisieren alles – von der Abholung bis zum letzten Sprung ins Wasser.',
    },
  },

  // ------------------------------------------------------------------ RU ---
  {
    lang: 'ru',
    groupKey: 'soma-bay-boat-trips',
    slug: 'ru/morskie-progulki-soma-bay',
    image: images.oneLuckyLadySomabay,
    imageAlt: 'Яхта One Lucky Lady у причала марины Сома-Бэй, на берегу — надпись Simply Somabay',
    metaTitle: 'Морские прогулки в Сома-Бэй: частные, всё включено',
    metaDescription:
      'Частные морские прогулки из Сома-Бэй по Красному морю, всё включено. Трансфер из отеля, еда, напитки, снаряжение для снорклинга и экипаж. Без сборных групп и скрытых доплат.',
    hero: {
      kicker: 'Сома-Бэй, Красное море',
      h1: 'Частные морские прогулки в Сома-Бэй — всё уже организовано',
      intro:
        'Забудьте о переполненных групповых турах. Lucky Lady устраивает частные дни на воде из марины Сома-Бэй: мы забираем вас из отеля, а на борту всё готово к вашему приезду. Только ваши близкие, ваш экипаж и море.',
    },
    intro2:
      'Сома-Бэй расположен на собственном полуострове к югу от Хургады: марина и риф — прямо у порога. До воды минуты, а не час пути вдоль побережья, поэтому трансферы короткие, а начало дня спокойное. Мы забираем вас из отеля без утренней суеты больших туристических корабликов.',
    highlights: [
      { title: 'Только частные туры', body: 'Лодка на весь день принадлежит вам. Никаких сборных групп, чужих людей и жёсткого расписания.' },
      { title: 'Трансфер из отеля включён', body: 'Заберём из любого отеля Сома-Бэй — Kempinski, Sheraton, La Résidence des Cascades, Robinson — и привезём обратно.' },
      { title: 'Всё включено, цены честные', body: 'Еда, напитки, полотенца, снаряжение для снорклинга, топливо и экипаж — в цене. Цена, которую вы видите, — окончательная.' },
      { title: 'Риф у самого порога', body: 'Рас-Абу-Сома и песчаная отмель Тобия-Арба совсем рядом: день проходит в воде, а не в дороге к ней.' },
    ],
    sections: [
      {
        heading: 'Морские прогулки в Сома-Бэй — какими они должны быть',
        body: 'Большинство морских экскурсий на этом побережье — это автобус, переполненная палуба и программа, рассчитанная на сорок чужих людей. Мы делаем наоборот: Lucky Lady работает только с частными чартерами из марины Сома-Бэй, и вся лодка забронирована для вас и ваших спутников.\n\nРасскажите, каким видите свой день, и мы его организуем: неспешный снорклинг над рифом Рас-Абу-Сома, долгий обед на якоре, возвращение под закатным светом. Никакой спешки и никаких посторонних.',
      },
      {
        heading: 'Что рядом с Сома-Бэй',
        body: 'Само расположение делает полдела. Риф Рас-Абу-Сома огибает мыс сразу за мариной, а отмель Тобия-Арба — в лёгкой досягаемости: мелкая, защищённая бирюзовая вода, идеальная для купания. В долгие дни можно уйти на север — к острову Гифтун и рифам Хургады.\n\nЧем ближе вода, тем больше времени вы проводите в ней: короткий переход, якорь, ласты — и вперёд. Ради этого и стоит стартовать из Сома-Бэй, а не выше по побережью.',
      },
      {
        heading: 'Три судна — один частный день',
        body: 'Выберите лодку под свою компанию. One Lucky Lady берёт 4–6 гостей от 300 € — создана для пар и небольших семей. Катамаран Locke вмещает до 14 гостей в четырёх каютах от 115 € с человека (минимум 4 гостя) — для больших компаний, праздников и ночёвок на воде. Частный катер берёт 4–6 гостей от 250 € — рыбалка, быстрые переходы и снорклинг. Любая прогулка длится от 4 часов и может продолжаться сколько захотите.\n\nНе уверены, что подойдёт? Напишите нам в WhatsApp — подскажем.',
      },
    ],
    faqs: [
      {
        q: 'Откуда отправляются прогулки в Сома-Бэй?',
        a: 'Все частные туры стартуют из марины Сома-Бэй, на полуострове к югу от Хургады. Мы забираем вас из отеля и привозим обратно в конце дня — организовывать трансфер самим не нужно.',
      },
      {
        q: 'Это частные туры или сборные группы?',
        a: 'Только частные. Вся лодка бронируется для вашей компании, со своим экипажем. Мы никогда не сажаем гостей на сборные туристические кораблики, и жёсткого расписания нет — день идёт в вашем темпе.',
      },
      {
        q: 'Что входит в цену?',
        a: 'Всё для целого дня: трансфер из отеля и обратно, еда, напитки, полотенца, снаряжение для снорклинга, топливо и полный экипаж. Цена, которую вы видите, — окончательная: без скрытых сборов, без навязчивых фотографов и доплат на борту.',
      },
      {
        q: 'Из каких отелей вы забираете и что будет при плохой погоде?',
        a: 'Мы забираем по всему Сома-Бэй: Kempinski Soma Bay, Sheraton Soma Bay, La Résidence des Cascades, Robinson Club, Caribbean World и другие. Красное море здесь обычно спокойное, но если поднимется ветер, мы скорректируем маршрут или вместе перенесём дату. С частной лодкой никакое групповое расписание не выгонит вас в море в плохую погоду.',
      },
      {
        q: 'Как узнать свободные даты и забронировать?',
        a: 'Напишите нам в WhatsApp: +20 120 572 6571. Укажите даты, количество гостей и какой день хотите провести — мы проверим наличие и всё организуем. Шон отвечает на английском.',
      },
    ],
    cta: {
      heading: 'Спланируйте свой частный день из Сома-Бэй',
      sub: 'Отправьте даты и количество гостей в WhatsApp — мы проверим наличие. Трансфер, еда, напитки, снаряжение и экипаж включены, а цена, которую вы видите, — окончательная.',
    },
  },
  {
    lang: 'ru',
    groupKey: 'hurghada-private-boat-trips',
    slug: 'ru/chastnye-morskie-progulki-hurgada',
    image: images.oneLuckyLadyMarina,
    imageAlt: 'Частная лодка на спокойной бирюзовой воде у побережья Хургады',
    metaTitle: 'Частные морские прогулки в Хургаде | Lucky Lady Trips',
    metaDescription:
      'Частные морские прогулки из Хургады: остров Гифтун, Оранж-Бэй, Махмея. Всё включено: трансфер из отеля, еда, напитки, снаряжение для снорклинга и экипаж.',
    hero: {
      kicker: 'Хургада, Красное море',
      h1: 'Частные морские прогулки из Хургады — на борту только ваши',
      intro:
        'Вы приехали ради Красного моря, а не ради сотни незнакомцев и громкоговорителя. Мы устраиваем частные прогулки из Хургады с трансфером из отеля, едой, напитками и полным экипажем — на палубе только те, кого вы взяли с собой. Цена, которую вы видите, — окончательная.',
    },
    intro2:
      'Без автобусных колонн, без ожидания самого медленного из сорока туристов, без торговцев на снорклинг-стопе. Мы забираем вас из отеля и идём к острову Гифтун, в бирюзовое мелководье Оранж-Бэй, к песчаной косе Махмея и рифам вокруг Абу-Рамада. Маршрут подстраивается под ваш день, а не под чужое расписание.',
    highlights: [
      { title: 'Только частные туры', body: 'Ваша лодка, ваша компания. Никаких общих палуб и незнакомцев из списка турагента.' },
      { title: 'Всё включено', body: 'Трансфер из отеля, еда, напитки, снаряжение, полотенца, топливо и экипаж — всё в цене.' },
      { title: 'Без сюрпризов', body: 'Цена, которую вы видите, — окончательная. Никаких фотографов и доплат в море.' },
      { title: 'Настоящие рифы Хургады', body: 'Гифтун, Оранж-Бэй, Махмея и Абу-Рамада — по маршруту, построенному вокруг вашего дня.' },
    ],
    sections: [
      {
        heading: 'Почему частная лодка лучше больших корабликов',
        body: 'Марина Хургады полна больших судов, которые берут столько гостей, сколько поместится: громкая музыка, жёсткое расписание, очередь к трапу — и список «дополнительных услуг», который появляется, когда вы уже в море. Кому-то подходит. Мы делаем иначе.\n\nLucky Lady ходит только частными турами. Вы задаёте темп, вы выбираете остановки, а экипаж занимается вашей компанией — и никем больше. Долгий спокойный снорклинг у Абу-Рамада и неторопливый обед на палубе? Пожалуйста. Дойти до Махмеи, пока море спокойное? Только скажите. Это ваша лодка, а не место в чужой программе.',
      },
      {
        heading: 'Куда мы ходим и что уже включено',
        body: 'Из Хургады мы идём к острову Гифтун, на мелководье Оранж-Бэй, к косе Махмея и рифам вокруг Абу-Рамада, где можно встретить каранксов и барракуду. Снаряжение для снорклинга и полотенца на борту, еда и напитки готовы, топливо и экипаж входят в цену, а не появляются отдельной строкой в конце.\n\nНа выбор три судна: One Lucky Lady для пар и небольших компаний от 300 €; катамаран Locke с четырьмя каютами до четырнадцати гостей от 115 € с человека (минимум 4); частный катер для быстрых переходов и рыбалки от 250 €. Напишите в WhatsApp состав компании и даты — подскажем, что подойдёт.',
      },
    ],
    faqs: [
      {
        q: 'Туры действительно частные или с другими гостями?',
        a: 'Каждый тур полностью частный. Вы бронируете всю лодку только для своей компании, а не место на сборном кораблике. Никаких посторонних на палубе и никакого группового расписания.',
      },
      {
        q: 'Вы забираете из отелей Хургады, и что ещё включено?',
        a: 'Да. Трансфер из отеля и обратно по Хургаде входит в стоимость, как и еда, напитки, снаряжение для снорклинга, полотенца, топливо и экипаж. Скажите, где вы остановились, — остальное мы организуем.',
      },
      {
        q: 'Какие места можно посетить и что будет при ветре?',
        a: 'Мы ходим к Гифтуну, Оранж-Бэй, Махмее и рифам Абу-Рамада, и, поскольку тур частный, маршрут строится вокруг вашей компании. Если море слишком неспокойное, вместе решим — перенести день или изменить маршрут.',
      },
      {
        q: 'Сколько это стоит и есть ли скрытые доплаты?',
        a: 'Цены начинаются от 250 € за катер, 300 € за One Lucky Lady и 115 € с человека (минимум 4 гостя) за катамаран Locke; любой тур длится от 4 часов. Цена, которую вы видите, — окончательная: без надбавок, фотографов и сюрпризов в море.',
      },
      {
        q: 'Как забронировать и узнать свободные даты?',
        a: 'Напишите в WhatsApp: +20 120 572 6571 — даты и количество гостей. Мы подберём лодку и организуем трансфер: вам останется только прийти. Шон отвечает на английском.',
      },
    ],
    cta: {
      heading: 'Ваш частный день на Красном море — всё организовано',
      sub: 'Отправьте даты и количество гостей в WhatsApp — мы проверим наличие. Частная лодка, всё включено, цена окончательная.',
    },
  },
  {
    lang: 'ru',
    groupKey: 'all-inclusive-boat-trips-hurghada',
    slug: 'ru/morskie-progulki-hurgada-vse-vklyucheno',
    image: images.hero,
    imageAlt: 'Частный день на Красном море по системе «всё включено», полностью организованный',
    metaTitle: 'Морские прогулки в Хургаде: всё включено, частные',
    metaDescription:
      'Частные морские прогулки «всё включено» из Сома-Бэй рядом с Хургадой. Трансфер, еда, напитки, снаряжение, полотенца, топливо и экипаж включены. Цена окончательная.',
    hero: {
      kicker: 'Сома-Бэй и Хургада',
      h1: 'Морские прогулки «всё включено» в Хургаде — только частные',
      intro:
        'Многие дешёвые туры называют одну цену, а у причала она начинает расти: напитки, фото, «сбор за морской парк», о котором никто не предупредил. Мы делаем наоборот. Одна частная лодка, одна цена, всё включено — и рифы Сома-Бэй и Хургады только для вас.',
    },
    intro2:
      'Наши три судна выходят из марины Сома-Бэй — короткий трансфер от отелей Хургады. Без сборных групп, без чужих людей, без «менеджера с планшетом» у причала, продающего дополнения. Только ваши близкие, ваш экипаж и день на Красном море, который стоит ровно столько, сколько мы назвали.',
    highlights: [
      { title: 'Одна цена — всё включено', body: 'Трансфер, еда, напитки, снаряжение для снорклинга, полотенца, топливо и экипаж — всё в цене с самого начала.' },
      { title: 'Только частные лодки', body: 'Вы никогда не делите борт с другими туристами. Вся лодка ваша — от начала и до конца.' },
      { title: 'Без доплат у причала', body: 'Никаких навязчивых фотографов, неожиданных дополнений и туристических ловушек в марине.' },
      { title: 'Просто спросить', body: 'Даты и количество гостей в WhatsApp — и мы проверим наличие по всем трём судам.' },
    ],
    sections: [
      {
        heading: 'Что здесь на самом деле значит «всё включено»',
        body: 'Во многих турах из Хургады заявленная цена — лишь входной билет. Дальше — бутылка воды, «улучшенный» обед, фотопакет, сбор за морской парк, о котором никто не упомянул. В итоге вы заплатили вдвое больше и провели день на палубе с сорока незнакомцами.\n\nУ нас названная сумма покрывает трансфер из отеля, еду и напитки на борту, снаряжение для снорклинга, полотенца, топливо и работу экипажа. В конце дня доплачивать нечего. Цена, которую вы видите, — окончательная.',
      },
      {
        heading: 'Сома-Бэй и рифы Хургады — на ваших условиях',
        body: 'Наш домашний порт — марина Сома-Бэй, куда легко добраться из отелей Хургады и ближайших курортов: Kempinski, Sheraton, Robinson, La Résidence des Cascades. Дальше день принадлежит вам.\n\nСнорклинг у рифа Рас-Абу-Сома, якорная стоянка у отмели Тобия-Арба или выход к Абу-Рамада и Гифтуну. Купайтесь, где нравится, обедайте, когда проголодаетесь, останьтесь на закат, если день удался. Никакое групповое расписание не гонит вас обратно в порт.',
      },
    ],
    faqs: [
      {
        q: 'Это действительно частные туры, а не сборные лодки?',
        a: 'Да. Каждый тур Lucky Lady — частный. Вы бронируете всю лодку для своей компании: вдвоём, семьёй или до четырнадцати человек на катамаране Locke. Мы никогда не сажаем гостей на сборные кораблики с незнакомцами.',
      },
      {
        q: 'Что входит в тур «всё включено»?',
        a: 'Трансфер из отеля и обратно, еда, напитки, снаряжение для снорклинга, полотенца, топливо и полный экипаж — всё в стандарте. Цена, которую вы видите, — окончательная, без расчётов у причала.',
      },
      {
        q: 'Вы забираете из отелей Хургады?',
        a: 'Да. Трансфер из отелей и курортов Хургады и Сома-Бэй входит в каждый тур. Напишите, где вы остановились, и мы организуем дорогу.',
      },
      {
        q: 'Что будет при плохой погоде?',
        a: 'На Красном море бывают и спокойные, и ветреные дни. Если условия небезопасны или некомфортны, мы честно это обсудим и перенесём прогулку на лучший день. Каждый чартер частный, поэтому никакой фиксированный групповой выход не заставит вас идти в море в плохую погоду.',
      },
      {
        q: 'Как узнать наличие и забронировать?',
        a: 'Напишите в WhatsApp: +20 120 572 6571 — даты и количество гостей. У нас три судна в Сома-Бэй, так что почти всегда найдётся подходящее под ваши планы. Шон отвечает на английском.',
      },
    ],
    cta: {
      heading: 'Одна частная лодка — одна честная цена',
      sub: 'Напишите даты и состав компании. Мы проверим наличие в WhatsApp и организуем всё — от трансфера до последнего купания.',
    },
  },
]

export const localizedSeoPages = pages

export const localizedSeoPageBySlug = Object.fromEntries(pages.map((p) => [p.slug, p]))

export const localizedSeoPageSlugs = pages.map((p) => p.slug)
