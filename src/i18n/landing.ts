export type Lang = 'cs' | 'en';

export interface Feature {
  icon: string;
  title: string;
  text: string;
}

export interface LandingCopy {
  lang: Lang;
  path: string;
  meta: { title: string; description: string };
  nav: { features: string; pro: string; blog: string; faq: string; download: string; switchLang: string; switchHref: string };
  hero: { eyebrow: string; title: string; lead: string; cta: string; note: string };
  mock: { system: string; day: string; ph: string; ec: string; water: string; next: string; reminder: string };
  featuresTitle: string;
  featuresLead: string;
  features: Feature[];
  stepsTitle: string;
  steps: { title: string; text: string }[];
  pro: {
    title: string;
    lead: string;
    freeName: string;
    freePrice: string;
    free: string[];
    proName: string;
    proPrice: string;
    proItems: string[];
  };
  blog: { eyebrow: string; title: string; text: string; cta: string };
  faqTitle: string;
  faq: { q: string; a: string }[];
  final: { title: string; text: string; cta: string };
  footer: { privacy: string; terms: string; dsa: string; delete: string; blog: string; contact: string; operator: string };
  badge: { small: string; big: string };
}

export const cs: LandingCopy = {
  lang: 'cs',
  path: '/',
  meta: {
    title: 'Hyroot – deník pro domácí hydroponii',
    description:
      'Zapisuj pH a EC, sleduj plodiny od klíčení po sklizeň a nastav si připomínky. Hyroot je pěstitelský deník pro domácí hydroponii na Androidu.',
  },
  nav: { features: 'Funkce', pro: 'Ceník', blog: 'Blog', faq: 'Otázky', download: 'Stáhnout', switchLang: 'EN', switchHref: '/en/' },
  hero: {
    eyebrow: 'Pěstitelský deník pro hydroponii',
    title: 'Hodnoty z hydroponie na jednom místě',
    lead:
      'Hyroot ukládá měření pH a EC, plodiny, klíčení i připomínky. Když se hodnoty začnou měnit, uvidíš to včas.',
    cta: 'Stáhnout na Google Play',
    note: 'Zdarma pro Android. Hyroot Pro je volitelné předplatné.',
  },
  mock: {
    system: 'Věž na balkoně',
    day: '24. den cyklu',
    ph: 'pH',
    ec: 'EC',
    water: 'Voda',
    next: 'Další připomínka',
    reminder: 'Doplnit živiny · zítra 18:00',
  },
  featuresTitle: 'Co Hyroot umí',
  featuresLead: 'Hyroot nahradí sešit, tabulku i poznámky v telefonu.',
  features: [
    { icon: 'system', title: 'Hydroponické systémy', text: 'Každý systém má vlastní plodiny, měření a historii cyklů. Kratky, NFT, DWC, věž i další typy.' },
    { icon: 'chart', title: 'Měření a grafy', text: 'pH, EC, teplota vody a vzduchu, vlhkost a hladina vody. V grafu je vidět, kam se hodnoty posouvají.' },
    { icon: 'leaf', title: 'Plodiny', text: 'Kolik dní rostlina roste a kdy přijde sklizeň.' },
    { icon: 'sprout', title: 'Klíčení', text: 'Sazenice sleduješ od semínka a jedním krokem je přesadíš do systému.' },
    { icon: 'book', title: 'Knihovna rostlin', text: 'Vlastní rostliny s jejich hodnotami. Hyroot upozorní, když plodiny v jednom systému chtějí rozdílné pH.' },
    { icon: 'bell', title: 'Připomínky', text: 'Měření, doplnění živin nebo čištění systému v nastavený čas.' },
    { icon: 'bolt', title: 'Náklady na elektřinu', text: 'Kolik stojí osvětlení na jednu rostlinu podle tvé sazby za kWh.' },
    { icon: 'qr', title: 'QR kódy', text: 'Vytiskneš kód, nalepíš ho na systém a naskenováním otevřeš jeho detail.' },
  ],
  stepsTitle: 'Jak začít',
  steps: [
    { title: 'Přidej systém', text: 'Vyber typ systému a zadej, co v něm pěstuješ.' },
    { title: 'Zapisuj měření', text: 'Po každém měření pH a EC zadáš hodnoty, zabere to pár vteřin.' },
    { title: 'Sleduj vývoj', text: 'Grafy a připomínky ukážou, kdy je potřeba zasáhnout.' },
  ],
  pro: {
    title: 'Zdarma, nebo Pro',
    lead: 'S verzí zdarma si vyzkoušíš celou aplikaci na jednom systému. Pro odstraní limity a odemkne QR kódy.',
    freeName: 'Zdarma',
    freePrice: '0 Kč',
    free: ['1 systém', '3 aktivní plodiny a 2 klíčení', '3 rostliny v knihovně', '1 připomínka', 'Historie měření za 10 dní', 'Výpočet nákladů na elektřinu'],
    proName: 'Hyroot Pro',
    proPrice: 'Předplatné v aplikaci',
    proItems: ['Neomezeně systémů, plodin a klíčení', 'Neomezená knihovna rostlin', 'Neomezeně připomínek', 'Celá historie měření', 'QR kódy pro systémy'],
  },
  blog: {
    eyebrow: 'Hydroponický blog',
    title: 'Jak na hydroponii doma',
    text: 'Na blogu píšu o tom, jak pěstuju saláty, bylinky a zeleninu v hydroponii: nastavení pH a EC, výběr systému i chyby, které se vyplatí neopakovat.',
    cta: 'Přečíst blog',
  },
  faqTitle: 'Časté otázky',
  faq: [
    { q: 'Je Hyroot zdarma?', a: 'Ano. Základní funkce jsou zdarma. Předplatné Hyroot Pro odstraní limity počtu systémů, plodin, rostlin a připomínek a odemkne QR kódy.' },
    { q: 'Je aplikace i pro iPhone?', a: 'Zatím je Hyroot dostupný pro Android na Google Play.' },
    { q: 'Potřebuju k tomu nějaké čidlo?', a: 'Ne. Hodnoty změříš svým pH a EC metrem a do aplikace je zapíšeš ručně.' },
    { q: 'Pro jaké systémy se hodí?', a: 'Pro Kratky, NFT, DWC, ebb & flow, aeroponii i vertikální věže. Hodí se pro saláty, bylinky, rajčata, papriky, okurky i jahody.' },
    { q: 'Co se děje s mými daty?', a: 'Data se ukládají k tvému účtu, takže je máš i na novém telefonu. Nikomu je neprodáváme. Podrobnosti jsou v zásadách ochrany soukromí.' },
    { q: 'Jak zruším účet?', a: 'Účet smažeš v aplikaci v profilu, nebo přes formulář na stránce pro smazání účtu.' },
  ],
  final: {
    title: 'Vyzkoušej Hyroot na svém systému',
    text: 'Stáhni si aplikaci a zapiš první měření.',
    cta: 'Stáhnout na Google Play',
  },
  footer: {
    privacy: 'Ochrana soukromí',
    terms: 'Podmínky použití',
    dsa: 'Nahlásit obsah',
    delete: 'Smazání účtu',
    blog: 'Blog',
    contact: 'Kontakt',
    operator: 'Provozuje Lukáš Plesník – Hextree Studio, IČO 06506003',
  },
  badge: { small: 'Stáhnout na', big: 'Google Play' },
};

export const en: LandingCopy = {
  lang: 'en',
  path: '/en/',
  meta: {
    title: 'Hyroot – grow journal for home hydroponics',
    description:
      'Log pH and EC, follow your crops from sprouting to harvest and set reminders. Hyroot is a grow journal for home hydroponics on Android.',
  },
  nav: { features: 'Features', pro: 'Pricing', blog: 'Blog', faq: 'FAQ', download: 'Download', switchLang: 'CZ', switchHref: '/' },
  hero: {
    eyebrow: 'Grow journal for hydroponics',
    title: 'All your hydroponics readings in one place',
    lead:
      'Hyroot keeps your pH and EC readings, crops, seedlings and reminders together, so you notice when values start to drift.',
    cta: 'Get it on Google Play',
    note: 'Free for Android. Hyroot Pro is an optional subscription.',
  },
  mock: {
    system: 'Balcony tower',
    day: 'Cycle day 24',
    ph: 'pH',
    ec: 'EC',
    water: 'Water',
    next: 'Next reminder',
    reminder: 'Top up nutrients · tomorrow 6 pm',
  },
  featuresTitle: 'What Hyroot does',
  featuresLead: 'It replaces the notebook, the spreadsheet and the notes on your phone.',
  features: [
    { icon: 'system', title: 'Hydroponic systems', text: 'Each system has its own crops, measurements and cycle history. Kratky, NFT, DWC, towers and more.' },
    { icon: 'chart', title: 'Measurements and charts', text: 'pH, EC, water and air temperature, humidity and water level. Charts show where values are heading.' },
    { icon: 'leaf', title: 'Crops', text: 'How many days each plant has been growing and when it is ready to harvest.' },
    { icon: 'sprout', title: 'Sprouting', text: 'Track seedlings from seed and move them into a system in one step.' },
    { icon: 'book', title: 'Plant library', text: 'Your own plants with their target values, plus a warning when crops in one system need different pH.' },
    { icon: 'bell', title: 'Reminders', text: 'Measuring, topping up nutrients or cleaning a system, at the time you set.' },
    { icon: 'bolt', title: 'Electricity costs', text: 'What lighting costs per plant, based on your rate per kWh.' },
    { icon: 'qr', title: 'QR codes', text: 'Print a code, stick it on the system and scan it to open its details.' },
  ],
  stepsTitle: 'Getting started',
  steps: [
    { title: 'Add a system', text: 'Pick the system type and what you grow in it.' },
    { title: 'Log readings', text: 'Enter pH and EC after each measurement. It takes a few seconds.' },
    { title: 'Follow the trend', text: 'Charts and reminders show you when to step in.' },
  ],
  pro: {
    title: 'Free or Pro',
    lead: 'Free lets you try the whole app on one system. Pro removes the limits and unlocks QR codes.',
    freeName: 'Free',
    freePrice: '€0',
    free: ['1 system', '3 active crops and 2 seedlings', '3 plants in the library', '1 reminder', '10 days of measurement history', 'Electricity cost calculator'],
    proName: 'Hyroot Pro',
    proPrice: 'In-app subscription',
    proItems: ['Unlimited systems, crops and seedlings', 'Unlimited plant library', 'Unlimited reminders', 'Full measurement history', 'QR codes for your systems'],
  },
  blog: {
    eyebrow: 'Hydroponics blog',
    title: 'Hydroponics at home',
    text: 'The blog covers how I grow lettuce, herbs and vegetables hydroponically: setting pH and EC, choosing a system and the mistakes worth avoiding. Written in Czech.',
    cta: 'Read the blog',
  },
  faqTitle: 'FAQ',
  faq: [
    { q: 'Is Hyroot free?', a: 'Yes. The core features are free. A Hyroot Pro subscription removes the limits on systems, crops, plants and reminders and unlocks QR codes.' },
    { q: 'Is there an iPhone version?', a: 'For now Hyroot is available for Android on Google Play.' },
    { q: 'Do I need a sensor?', a: 'No. Measure with your own pH and EC meter and enter the values in the app.' },
    { q: 'Which systems does it support?', a: 'Kratky, NFT, DWC, ebb & flow, aeroponics and vertical towers, for lettuce, herbs, tomatoes, peppers, cucumbers and strawberries.' },
    { q: 'What happens to my data?', a: 'Your data is stored with your account, so it moves with you to a new phone. We never sell it. See the privacy policy for details.' },
    { q: 'How do I delete my account?', a: 'Delete it from your profile in the app, or use the form on the account deletion page.' },
  ],
  final: {
    title: 'Try Hyroot on your own system',
    text: 'Install the app and log your first reading.',
    cta: 'Get it on Google Play',
  },
  footer: {
    privacy: 'Privacy policy',
    terms: 'Terms of use',
    dsa: 'Report content',
    delete: 'Delete account',
    blog: 'Blog',
    contact: 'Contact',
    operator: 'Operated by Lukáš Plesník – Hextree Studio, Company ID 06506003',
  },
  badge: { small: 'Get it on', big: 'Google Play' },
};
