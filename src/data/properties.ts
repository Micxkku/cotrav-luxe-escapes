export type Property = {
  id: string;
  slug: string;
  name: string;
  destinationSlug: string;
  images: string[];
  tag: string;
  description: string;
  amenities: string[];
  pricePerNight: number;
  type: "villa" | "resort" | "cottage" | "farmhouse";
};

const img = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1400&q=80`;

export const properties: Property[] = [
  {
    id: "p1", slug: "tiger-glen-villa", name: "Tiger Glen Villa", destinationSlug: "corbett",
    images: [img("photo-1564501049412-61c2a3083791"), img("photo-1582719478250-c89cae4dc85b"), img("photo-1542314831-068cd1dbfeeb")],
    tag: "Corbett's finest forest retreat",
    description: "A four-bedroom riverside villa on the Ramganga, with private chef, infinity plunge pool and twice-daily jungle safaris arranged by a personal naturalist.",
    amenities: ["Wifi", "Pool", "Chef", "Parking", "AC", "Bar"],
    pricePerNight: 42000, type: "villa",
  },
  {
    id: "p2", slug: "kosi-river-cottage", name: "Kosi River Cottage", destinationSlug: "corbett",
    images: [img("photo-1505693416388-ac5ce068fe85"), img("photo-1571508601891-ca5e7a713859")],
    tag: "A river runs through it",
    description: "Two-bedroom timber cottage tucked beside the Kosi River, with a wraparound deck, outdoor bath and chef-led Kumaoni dining.",
    amenities: ["Wifi", "Chef", "Parking", "AC"],
    pricePerNight: 28000, type: "cottage",
  },
  {
    id: "p3", slug: "ranthambore-tented-camp", name: "Ranthambore Tented Camp", destinationSlug: "ranthambore",
    images: [img("photo-1455587734955-081b22074882"), img("photo-1520250497591-112f2f40a3f4")],
    tag: "Royal Rajasthan under canvas",
    description: "Six luxury tents on the edge of the reserve, each with claw-foot bathtubs, butler service and dawn-to-dusk safari coordination.",
    amenities: ["Wifi", "Pool", "Chef", "Bar", "Parking"],
    pricePerNight: 55000, type: "resort",
  },
  {
    id: "p4", slug: "sawai-haveli", name: "Sawai Haveli Estate", destinationSlug: "ranthambore",
    images: [img("photo-1566073771259-6a8506099945"), img("photo-1564501049412-61c2a3083791")],
    tag: "Heritage on the reserve's edge",
    description: "Restored haveli with 8 suites, frescoed courtyards, a stepwell-inspired pool and a curated library on Indian wildlife.",
    amenities: ["Wifi", "Pool", "Chef", "AC", "Gym"],
    pricePerNight: 38000, type: "resort",
  },
  {
    id: "p5", slug: "coorg-plantation-villa", name: "Coorg Plantation Villa", destinationSlug: "coorg",
    images: [img("photo-1568605114967-8130f3a36994"), img("photo-1582719478250-c89cae4dc85b")],
    tag: "Wake to the scent of coffee blossom",
    description: "Three-bedroom estate villa set in 40 acres of working coffee plantation, with private chef, plantation walks and coffee-cupping sessions.",
    amenities: ["Wifi", "Pool", "Chef", "Parking", "AC"],
    pricePerNight: 32000, type: "villa",
  },
  {
    id: "p6", slug: "madikeri-mist-cottage", name: "Madikeri Mist Cottage", destinationSlug: "coorg",
    images: [img("photo-1505691938895-1758d7feb511"), img("photo-1571508601891-ca5e7a713859")],
    tag: "Above the clouds in Kodagu",
    description: "Hillside cottage with floor-to-ceiling valley views, outdoor jacuzzi and chef-curated Kodava dinners by the bonfire.",
    amenities: ["Wifi", "Chef", "Parking", "AC", "Bar"],
    pricePerNight: 26000, type: "cottage",
  },
  {
    id: "p7", slug: "pichola-lakehouse", name: "Pichola Lakehouse", destinationSlug: "udaipur",
    images: [img("photo-1566073771259-6a8506099945"), img("photo-1599661046289-e31897846e41")],
    tag: "Udaipur's most private address",
    description: "Restored 200-year-old haveli on Lake Pichola with four suites, a marble plunge pool and uninterrupted views of the City Palace.",
    amenities: ["Wifi", "Pool", "Chef", "Bar", "AC", "Gym"],
    pricePerNight: 68000, type: "villa",
  },
  {
    id: "p8", slug: "aravalli-retreat", name: "Aravalli Retreat", destinationSlug: "udaipur",
    images: [img("photo-1571896349842-33c89424de2d"), img("photo-1582719508461-905c673771fd")],
    tag: "Hill country sanctuary",
    description: "Six-bedroom hilltop villa with infinity pool, private spa pavilion and a chef trained at the Oberoi Udaivilas.",
    amenities: ["Wifi", "Pool", "Chef", "Parking", "AC", "Gym", "Bar"],
    pricePerNight: 52000, type: "villa",
  },
  {
    id: "p9", slug: "ganga-river-villa", name: "Ganga River Villa", destinationSlug: "rishikesh",
    images: [img("photo-1591018653781-9b46c1ba4222"), img("photo-1568605114967-8130f3a36994")],
    tag: "Where the river meets the forest",
    description: "Three-bedroom riverside villa with private ghat, in-house yoga acharya, ayurvedic spa and white-water rafting on request.",
    amenities: ["Wifi", "Pool", "Chef", "Spa", "AC"],
    pricePerNight: 34000, type: "villa",
  },
  {
    id: "p10", slug: "viceregal-cottage-shimla", name: "Viceregal Cottage", destinationSlug: "shimla",
    images: [img("photo-1626621341517-bbf3d9990a23"), img("photo-1505691938895-1758d7feb511")],
    tag: "A summer in the Raj",
    description: "Heritage three-bedroom cottage on a private estate above the Ridge, with deodar-framed views, fireplaces and English-country dining.",
    amenities: ["Wifi", "Chef", "Parking", "AC", "Bar"],
    pricePerNight: 30000, type: "cottage",
  },
  {
    id: "p11", slug: "assagao-villa-goa", name: "Assagao Heritage Villa", destinationSlug: "goa",
    images: [img("photo-1512343879784-a960bf40e7f2"), img("photo-1566073771259-6a8506099945")],
    tag: "Indo-Portuguese living, reimagined",
    description: "Four-bedroom Portuguese villa with mosaic-tiled pool, private chef, antique-furnished interiors and bicycles for village rides.",
    amenities: ["Wifi", "Pool", "Chef", "Parking", "AC", "Bar"],
    pricePerNight: 45000, type: "villa",
  },
  {
    id: "p12", slug: "vagator-cliff-house", name: "Vagator Cliff House", destinationSlug: "goa",
    images: [img("photo-1571896349842-33c89424de2d"), img("photo-1582719478250-c89cae4dc85b")],
    tag: "Sunset over the Arabian Sea",
    description: "Five-bedroom modern villa perched above Vagator beach, with infinity pool, beach concierge and a chef-led raw bar.",
    amenities: ["Wifi", "Pool", "Chef", "Bar", "AC", "Gym"],
    pricePerNight: 58000, type: "villa",
  },
  {
    id: "p13", slug: "rambagh-haveli", name: "Rambagh Haveli Suites", destinationSlug: "jaipur",
    images: [img("photo-1599661046289-e31897846e41"), img("photo-1564501049412-61c2a3083791")],
    tag: "The Pink City, privately yours",
    description: "Boutique haveli with eight royal suites, peacock courtyards, vintage car transfers and curated bazaar walks with a personal historian.",
    amenities: ["Wifi", "Pool", "Chef", "Spa", "Bar", "AC"],
    pricePerNight: 41000, type: "resort",
  },
  {
    id: "p14", slug: "munnar-tea-bungalow", name: "Munnar Tea Bungalow", destinationSlug: "munnar",
    images: [img("photo-1582719508461-905c673771fd"), img("photo-1505691938895-1758d7feb511")],
    tag: "Sleep among the tea gardens",
    description: "1920s planter's bungalow set across 12 acres of tea, with four suites, fireplaces, butler service and private estate walks.",
    amenities: ["Wifi", "Chef", "Parking", "AC", "Bar"],
    pricePerNight: 36000, type: "cottage",
  },
  {
    id: "p15", slug: "thar-dune-camp", name: "Thar Dune Camp", destinationSlug: "jaisalmer",
    images: [img("photo-1477587458883-47145ed94245"), img("photo-1455587734955-081b22074882")],
    tag: "Stars over the Golden City",
    description: "Eight luxury tents on the Sam Dunes with copper bathtubs, folk-music dinners, camel-back sunrises and personal astronomy sessions.",
    amenities: ["Wifi", "Chef", "Bar", "Spa", "Parking"],
    pricePerNight: 48000, type: "resort",
  },
];

export const getPropertyBySlug = (slug: string) => properties.find((p) => p.slug === slug);
export const getPropertiesByDestination = (slug: string) =>
  properties.filter((p) => p.destinationSlug === slug);
export const amenityIconKey = (name: string): string => name.toLowerCase();
