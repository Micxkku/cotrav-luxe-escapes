export type ThingItem = { name: string; description: string };
export type Destination = {
  id: string;
  slug: string;
  name: string;
  image: string;
  description: string;
  famousFor: { name: string; image: string }[];
  itinerary: { time: string; activity: string; description: string }[];
  thingsToDo: {
    see: ThingItem[];
    eat: ThingItem[];
    shop: ThingItem[];
    placesNearby: ThingItem[];
  };
};

const img = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&q=80`;

const mkItinerary = (place: string) => [
  { time: "7:00 AM", activity: "Sunrise Tea", description: `Begin with chai overlooking ${place}'s morning light.` },
  { time: "9:00 AM", activity: "Local Breakfast", description: "Savor a slow regional breakfast at a heritage cafe." },
  { time: "11:00 AM", activity: "Signature Experience", description: `Curated tour of ${place}'s most iconic landmark.` },
  { time: "1:00 PM", activity: "Long Lunch", description: "Private dining at a chef-led restaurant." },
  { time: "3:00 PM", activity: "Wellness Hour", description: "Spa, swim or a guided forest walk." },
  { time: "6:00 PM", activity: "Sundowners", description: "Cocktails as the sun sets over the valley." },
];

export const destinations: Destination[] = [
  {
    id: "1", slug: "corbett", name: "Corbett",
    image: img("photo-1549366021-9f761d450615"),
    description: "Tucked into the Kumaon foothills, Corbett blends raw jungle with refined luxury — a haven for tiger spotters, riverbank afternoons and slow forest mornings.",
    famousFor: [
      { name: "Dhikala Zone", image: img("photo-1549366021-9f761d450615") },
      { name: "Tiger Safari", image: img("photo-1561731216-c3a4d99437d5") },
      { name: "Ramganga River", image: img("photo-1470770841072-f978cf4d019e") },
      { name: "Garjia Temple", image: img("photo-1518837695005-2083093ee35b") },
    ],
    itinerary: mkItinerary("Corbett"),
    thingsToDo: {
      see: [
        { name: "Dhikala Grasslands", description: "The park's largest meadow, prime for sambar and tiger sightings at dawn." },
        { name: "Corbett Waterfall", description: "A 20m cascade tucked inside dense sal forest, ideal for a half-day walk." },
        { name: "Garjia Devi Temple", description: "Hilltop shrine perched on a rock midstream the Kosi River." },
        { name: "Sitabani Wildlife Reserve", description: "Buffer forest with leopards, elephants and rich birdlife." },
        { name: "Corbett Museum", description: "Jim Corbett's former home in Kaladhungi, now a small museum." },
      ],
      eat: [
        { name: "The Den", description: "Wood-fired pizzas and forest-view dining at the resort core." },
        { name: "Riverview Restaurant", description: "Pahadi thali on the banks of the Kosi." },
        { name: "Camp Forktail Creek", description: "Slow-cooked Kumaoni cuisine in a tented setting." },
        { name: "Kaafal Cafe", description: "All-day cafe with local kaafal berry desserts." },
      ],
      shop: [
        { name: "Ramnagar Bazaar", description: "Handwoven Kumaoni shawls, copperware and forest honey." },
        { name: "Tribal Craft Centre", description: "Buyer-direct crafts from Van Gujjar communities." },
        { name: "Aipan Art Studio", description: "Folk-art prints and ceremonial paintings on canvas." },
      ],
      placesNearby: [
        { name: "Nainital", description: "Lake town an hour away, perfect for an overnight detour." },
        { name: "Mukteshwar", description: "Apple country at 2,200m with Himalayan ridge views." },
        { name: "Kaladhungi", description: "Sleepy village home to Jim Corbett's winter residence." },
        { name: "Ranikhet", description: "Colonial cantonment with pine forests and golf greens." },
      ],
    },
  },
  {
    id: "2", slug: "ranthambore", name: "Ranthambore",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800",
    description: "A dramatic landscape of dry deciduous forest and ancient fort ruins, Ranthambore is one of India's finest tiger reserves and a stage for storied wildlife encounters.",
    famousFor: [
      { name: "Ranthambore Fort", image: img("photo-1564507592333-c60657eea523") },
      { name: "Tiger Safari", image: img("photo-1561731216-c3a4d99437d5") },
      { name: "Padam Talao", image: img("photo-1470770841072-f978cf4d019e") },
      { name: "Trinetra Temple", image: img("photo-1518837695005-2083093ee35b") },
    ],
    itinerary: mkItinerary("Ranthambore"),
    thingsToDo: {
      see: [
        { name: "Ranthambore National Park", description: "Ten zones of tiger habitat across 1,300 sq km." },
        { name: "Ranthambore Fort", description: "10th-century UNESCO fort towering above the reserve." },
        { name: "Padam Talao", description: "Largest lake in the park, ringed by lotus blooms." },
        { name: "Surwal Lake", description: "Birding hotspot with flamingos and painted storks." },
        { name: "Kachida Valley", description: "Rocky outcrops favored by leopards and sloth bears." },
      ],
      eat: [
        { name: "The Oberoi Vanyavilas Dining", description: "Modern Indian tasting menus in a luxury tented camp." },
        { name: "Aman-i-Khas Mess Tent", description: "Royal Rajasthani cuisine under canvas." },
        { name: "Tigress Resort", description: "Multi-cuisine dining with poolside seating." },
        { name: "Kanak Dining", description: "Heritage thalis served on brass platters." },
      ],
      shop: [
        { name: "Dastkar Ranthambore", description: "Block-printed textiles by local women's collectives." },
        { name: "Sawai Madhopur Market", description: "Brassware, lac bangles and Rajasthani juttis." },
        { name: "Village Women Crafts", description: "Direct-buy embroidery from forest-edge artisans." },
      ],
      placesNearby: [
        { name: "Chambal Safari", description: "River cruises spotting gharials and Ganges dolphins." },
        { name: "Karauli", description: "Pink-stone town with the magnificent City Palace." },
        { name: "Bundi", description: "Step-wells and frescoed havelis, 3 hours away." },
        { name: "Khandar Fort", description: "Lesser-visited hilltop fort with panoramic plains." },
      ],
    },
  },
  {
    id: "3", slug: "coorg", name: "Coorg",
    image: img("photo-1582719508461-905c673771fd"),
    description: "India's coffee country — misted hills, pepper vines and slow streams. Coorg's plantation estates make it the quintessential South Indian staycation.",
    famousFor: [
      { name: "Coffee Estates", image: img("photo-1497935586351-b67a49e012bf") },
      { name: "Abbey Falls", image: img("photo-1470770841072-f978cf4d019e") },
      { name: "Raja's Seat", image: img("photo-1518837695005-2083093ee35b") },
      { name: "Dubare Camp", image: img("photo-1549366021-9f761d450615") },
    ],
    itinerary: mkItinerary("Coorg"),
    thingsToDo: {
      see: [
        { name: "Abbey Falls", description: "70-foot cascade ringed by coffee and cardamom plantations." },
        { name: "Raja's Seat", description: "Sunset garden once reserved for Coorg's kings." },
        { name: "Dubare Elephant Camp", description: "Ethical elephant interactions on the Cauvery's banks." },
        { name: "Namdroling Monastery", description: "Tibetan Golden Temple at Bylakuppe." },
        { name: "Mandalpatti Peak", description: "4WD ascent to a 1,600m grassland summit." },
      ],
      eat: [
        { name: "The Plantation Table", description: "Farm-to-fork Kodava cuisine on the estate." },
        { name: "Coorg Cuisinette", description: "Pandi curry and akki roti at a chef-run kitchen." },
        { name: "Raintree Restaurant", description: "Wood-fired pizzas under a 100-year canopy." },
        { name: "Tamara Dining Hall", description: "Multi-course menus with single-estate coffee pairings." },
      ],
      shop: [
        { name: "Coorg Coffee House", description: "Single-origin beans, roasted to order." },
        { name: "Spice Bazaar Madikeri", description: "Cardamom, peppercorns, cloves and wild honey." },
        { name: "Kodava Heritage Store", description: "Traditional pattu sarees and handcrafted brassware." },
      ],
      placesNearby: [
        { name: "Talacauvery", description: "The Cauvery River's source, 48km from Madikeri." },
        { name: "Nisargadhama", description: "Bamboo grove island on the Cauvery with rope bridges." },
        { name: "Iruppu Falls", description: "Sacred 170-foot waterfall in the Brahmagiri range." },
        { name: "Bylakuppe", description: "South India's largest Tibetan settlement." },
      ],
    },
  },
  {
    id: "4", slug: "udaipur", name: "Udaipur",
    image: img("photo-1599661046289-e31897846e41"),
    description: "Lakeside palaces, marble pavilions and golden-hour rooftops — Udaipur is India's most romantic city and a benchmark for heritage luxury.",
    famousFor: [
      { name: "Lake Pichola", image: img("photo-1599661046289-e31897846e41") },
      { name: "City Palace", image: img("photo-1564507592333-c60657eea523") },
      { name: "Jag Mandir", image: img("photo-1477587458883-47145ed94245") },
      { name: "Sajjangarh", image: img("photo-1518837695005-2083093ee35b") },
    ],
    itinerary: mkItinerary("Udaipur"),
    thingsToDo: {
      see: [
        { name: "City Palace", description: "Sprawling Mewari complex with 11 interconnected palaces." },
        { name: "Lake Pichola", description: "Sunset boat ride past Jag Niwas and Jag Mandir." },
        { name: "Sajjangarh Monsoon Palace", description: "Hilltop palace with Aravalli ridge sunsets." },
        { name: "Jagdish Temple", description: "Indo-Aryan shrine to Vishnu, carved in 1651." },
        { name: "Bagore Ki Haveli", description: "Restored 18th-century mansion with cultural shows." },
      ],
      eat: [
        { name: "Sheesh Mahal", description: "Rooftop tasting menu at the Fateh Prakash Palace." },
        { name: "Ambrai Restaurant", description: "Lakefront dining with palace-light reflections." },
        { name: "Upre by 1559 AD", description: "Royal Rajasthani cuisine on a terraced rooftop." },
        { name: "Jheel's Ginger Cafe", description: "All-day cafe with stellar lake views." },
      ],
      shop: [
        { name: "Hathi Pol Bazaar", description: "Miniature paintings, leather journals and silver." },
        { name: "Bada Bazaar", description: "Bandhej fabrics, lac jewellery and brass." },
        { name: "Sadhna Emporium", description: "Tribal women's collective selling block-printed apparel." },
      ],
      placesNearby: [
        { name: "Kumbhalgarh Fort", description: "World's second-longest wall, 84km from Udaipur." },
        { name: "Ranakpur", description: "1,444 carved marble pillars in a Jain temple." },
        { name: "Eklingji Temple", description: "Mewar royal family's ancestral shrine, 22km away." },
        { name: "Nathdwara", description: "Pichwai painting capital and Shrinathji temple town." },
      ],
    },
  },
  {
    id: "5", slug: "rishikesh", name: "Rishikesh",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
    description: "Where the Ganges leaves the mountains — a confluence of ashrams, white-water rapids and forested ridgelines. Rishikesh is India's wellness capital reimagined for luxury seekers.",
    famousFor: [
      { name: "Ganga Aarti", image: img("photo-1591018653781-9b46c1ba4222") },
      { name: "Lakshman Jhula", image: img("photo-1518837695005-2083093ee35b") },
      { name: "Neer Garh Falls", image: img("photo-1470770841072-f978cf4d019e") },
      { name: "Beatles Ashram", image: img("photo-1549366021-9f761d450615") },
    ],
    itinerary: mkItinerary("Rishikesh"),
    thingsToDo: {
      see: [
        { name: "Triveni Ghat", description: "Evening Ganga aarti with floating diyas." },
        { name: "Lakshman Jhula", description: "Iconic suspension bridge across the Ganges." },
        { name: "Beatles Ashram", description: "Abandoned Maharishi compound covered in mural art." },
        { name: "Neer Garh Waterfall", description: "Three-tier cascade hidden in pine forest." },
        { name: "Parmarth Niketan", description: "Largest ashram with daily aarti on the ghats." },
      ],
      eat: [
        { name: "Sattva Cafe", description: "Plant-based bowls overlooking the Ganges." },
        { name: "Little Buddha Cafe", description: "Tree-house dining with river views." },
        { name: "Pyramid Cafe", description: "All-day brunch spot in Tapovan." },
        { name: "The Sitting Elephant", description: "Riverside dining at Atali Ganga resort." },
      ],
      shop: [
        { name: "Rishikesh Main Market", description: "Rudraksha malas, gemstones and ayurvedic oils." },
        { name: "Tapovan Lanes", description: "Yoga apparel, singing bowls and incense." },
        { name: "Khadi Bhandar", description: "Hand-spun cotton kurtas and naturally dyed fabrics." },
      ],
      placesNearby: [
        { name: "Haridwar", description: "Sacred ghats of Har Ki Pauri, 25km downstream." },
        { name: "Devprayag", description: "Confluence of Alaknanda and Bhagirathi rivers." },
        { name: "Vashishtha Cave", description: "Ancient meditation cave beside the Ganges." },
        { name: "Kaudiyala", description: "Premier white-water rafting basecamp." },
      ],
    },
  },
  {
    id: "6", slug: "shimla", name: "Shimla",
    image: img("photo-1626621341517-bbf3d9990a23"),
    description: "Once the summer capital of the Raj, Shimla's pine ridges, mock-Tudor cottages and Mall Road promenades still carry the air of a colonial hill retreat.",
    famousFor: [
      { name: "The Ridge", image: img("photo-1626621341517-bbf3d9990a23") },
      { name: "Mall Road", image: img("photo-1518837695005-2083093ee35b") },
      { name: "Jakhu Temple", image: img("photo-1564507592333-c60657eea523") },
      { name: "Kufri", image: img("photo-1549366021-9f761d450615") },
    ],
    itinerary: mkItinerary("Shimla"),
    thingsToDo: {
      see: [
        { name: "The Ridge", description: "Open promenade with panoramic Himalayan views." },
        { name: "Christ Church", description: "Neo-Gothic landmark built in 1857." },
        { name: "Jakhu Temple", description: "Hanuman temple at Shimla's highest point." },
        { name: "Viceregal Lodge", description: "Former British residence, now an institute of advanced study." },
        { name: "Kufri", description: "Skiing and Himalayan zoo, 15km away." },
      ],
      eat: [
        { name: "Cafe Sol", description: "Wood-fired pizzas at the Himachal Institute." },
        { name: "Wake & Bake Cafe", description: "All-day breakfasts on Mall Road." },
        { name: "The Devicos", description: "Heritage restaurant since 1957." },
        { name: "Cafe Simla Times", description: "Colonial-era ambience with Continental classics." },
      ],
      shop: [
        { name: "Lakkar Bazaar", description: "Hand-carved wooden walking sticks and toys." },
        { name: "Tibetan Market", description: "Wool shawls, silver and pashmina." },
        { name: "Himachal Emporium", description: "Kullu shawls and chamba rumals." },
      ],
      placesNearby: [
        { name: "Chail", description: "World's highest cricket ground, 45km away." },
        { name: "Mashobra", description: "Quiet apple orchards and forest walks." },
        { name: "Naldehra", description: "9-hole golf course among cedar forests." },
        { name: "Tattapani", description: "Sulphur hot springs on the Sutlej." },
      ],
    },
  },
  {
    id: "7", slug: "goa", name: "Goa",
    image: img("photo-1512343879784-a960bf40e7f2"),
    description: "Beyond the beach shacks lies a luxurious Goa — Portuguese villas, chef-led kitchens, hidden coves and slow Sussegad afternoons.",
    famousFor: [
      { name: "Palolem Beach", image: img("photo-1512343879784-a960bf40e7f2") },
      { name: "Old Goa Churches", image: img("photo-1564507592333-c60657eea523") },
      { name: "Dudhsagar Falls", image: img("photo-1470770841072-f978cf4d019e") },
      { name: "Fontainhas", image: img("photo-1518837695005-2083093ee35b") },
    ],
    itinerary: mkItinerary("Goa"),
    thingsToDo: {
      see: [
        { name: "Basilica of Bom Jesus", description: "UNESCO Baroque church holding St. Francis Xavier's relics." },
        { name: "Fontainhas Quarter", description: "Latin Quarter of pastel houses and azulejos." },
        { name: "Dudhsagar Falls", description: "Four-tier 310m waterfall on the Mandovi River." },
        { name: "Chapora Fort", description: "17th-century cliffside fort with Arabian Sea sunsets." },
        { name: "Divar Island", description: "Sleepy island ferry hop with heritage homes." },
      ],
      eat: [
        { name: "Gunpowder", description: "South Indian heritage recipes in Assagao." },
        { name: "Bomra's", description: "Burmese fine dining in Candolim." },
        { name: "Antares", description: "Beach-club tasting menus by Sarah Todd." },
        { name: "Black Sheep Bistro", description: "Contemporary global plates in Panjim." },
      ],
      shop: [
        { name: "Mapusa Friday Market", description: "Spices, cashew feni and Goan sausages." },
        { name: "Sosa's Boutique", description: "Goan-Portuguese fashion in Fontainhas." },
        { name: "Saturday Night Market Arpora", description: "Live music with curated craft stalls." },
      ],
      placesNearby: [
        { name: "Gokarna", description: "Quieter beach town across the Karnataka border." },
        { name: "Hampi", description: "UNESCO Vijayanagara ruins, 6 hours inland." },
        { name: "Spice Plantations of Ponda", description: "Working farms with cardamom and pepper tours." },
        { name: "Cabo de Rama", description: "Crumbling cliff-top fort and secret cove." },
      ],
    },
  },
  {
    id: "8", slug: "jaipur", name: "Jaipur",
    image: img("photo-1599661046289-e31897846e41"),
    description: "The Pink City — a UNESCO heritage capital of forts, frescoed havelis and the finest hand-blocked textiles in India.",
    famousFor: [
      { name: "Amber Fort", image: img("photo-1599661046289-e31897846e41") },
      { name: "Hawa Mahal", image: img("photo-1564507592333-c60657eea523") },
      { name: "City Palace", image: img("photo-1477587458883-47145ed94245") },
      { name: "Jantar Mantar", image: img("photo-1518837695005-2083093ee35b") },
    ],
    itinerary: mkItinerary("Jaipur"),
    thingsToDo: {
      see: [
        { name: "Amber Fort", description: "Honeyed sandstone hill fort with the Sheesh Mahal." },
        { name: "Hawa Mahal", description: "953-window facade built for royal women in 1799." },
        { name: "City Palace", description: "Royal residence with the silver urn collection." },
        { name: "Jantar Mantar", description: "UNESCO 18th-century astronomical observatory." },
        { name: "Nahargarh Fort", description: "Sunset ramparts over the Pink City." },
      ],
      eat: [
        { name: "Suvarna Mahal", description: "Royal cuisine at the Rambagh Palace." },
        { name: "Bar Palladio", description: "Italian-Mughal fantasy at the Narain Niwas." },
        { name: "Cinnamon", description: "Modern Rajasthani at Jas Vilas." },
        { name: "Tapri Central", description: "Rooftop chai cafe in C-Scheme." },
      ],
      shop: [
        { name: "Johari Bazaar", description: "Kundan and meenakari jewellery row." },
        { name: "Bapu Bazaar", description: "Mojaris, block prints and lac bangles." },
        { name: "Anokhi Museum Shop", description: "Heirloom block-printed textiles in Amer." },
      ],
      placesNearby: [
        { name: "Samode Palace", description: "Hilltop palace hotel, 42km away." },
        { name: "Pushkar", description: "Sacred lake town with the Brahma temple." },
        { name: "Sambhar Lake", description: "India's largest salt lake with flamingos." },
        { name: "Bhangarh", description: "Reputed haunted fort ruin, 90km away." },
      ],
    },
  },
  {
    id: "9", slug: "munnar", name: "Munnar",
    image: img("photo-1582719508461-905c673771fd"),
    description: "An emerald sweep of tea estates across the Western Ghats — Munnar's tea-stained mornings and Nilgiri tahr ridges define Kerala's highland luxury.",
    famousFor: [
      { name: "Tea Estates", image: img("photo-1582719508461-905c673771fd") },
      { name: "Eravikulam Park", image: img("photo-1549366021-9f761d450615") },
      { name: "Mattupetty Dam", image: img("photo-1470770841072-f978cf4d019e") },
      { name: "Top Station", image: img("photo-1518837695005-2083093ee35b") },
    ],
    itinerary: mkItinerary("Munnar"),
    thingsToDo: {
      see: [
        { name: "Eravikulam National Park", description: "Home to the endangered Nilgiri tahr at Rajamala." },
        { name: "Tea Museum", description: "Working factory tour with cupping sessions." },
        { name: "Mattupetty Dam", description: "Reservoir framed by shola forest, ideal for boating." },
        { name: "Top Station", description: "1,700m viewpoint into the Theni plains." },
        { name: "Anamudi Peak", description: "South India's highest mountain at 2,695m." },
      ],
      eat: [
        { name: "Rumi's Kitchen", description: "Multi-cuisine plantation-view dining." },
        { name: "SN Restaurant", description: "Authentic Kerala thalis on banana leaves." },
        { name: "Saravana Bhavan", description: "South Indian breakfasts done right." },
        { name: "Sangam Vegetarian", description: "All-day Kerala vegetarian classics." },
      ],
      shop: [
        { name: "Munnar Spice Market", description: "Cardamom, cloves and Munnar tea direct from estates." },
        { name: "Aranya Natural Dyes", description: "Plant-dyed textiles by differently-abled women." },
        { name: "Tata Tea Outlet", description: "Single-estate teas in heritage tins." },
      ],
      placesNearby: [
        { name: "Thekkady", description: "Periyar Wildlife Reserve, 3 hours south." },
        { name: "Vagamon", description: "Pine-covered hills 90km away." },
        { name: "Marayoor", description: "Sandalwood forests and dolmens." },
        { name: "Chinnar Wildlife Sanctuary", description: "Rain-shadow forest with grizzled squirrels." },
      ],
    },
  },
  {
    id: "10", slug: "jaisalmer", name: "Jaisalmer",
    image: img("photo-1477587458883-47145ed94245"),
    description: "The Golden City rises from the Thar like a mirage — sandstone havelis, fortress walls and silent dune nights under a sky thick with stars.",
    famousFor: [
      { name: "Jaisalmer Fort", image: img("photo-1477587458883-47145ed94245") },
      { name: "Sam Dunes", image: img("photo-1518837695005-2083093ee35b") },
      { name: "Patwon Ki Haveli", image: img("photo-1564507592333-c60657eea523") },
      { name: "Gadisar Lake", image: img("photo-1470770841072-f978cf4d019e") },
    ],
    itinerary: mkItinerary("Jaisalmer"),
    thingsToDo: {
      see: [
        { name: "Jaisalmer Fort", description: "Living UNESCO fort still home to 3,000 residents." },
        { name: "Patwon Ki Haveli", description: "Cluster of five intricately carved 19th-century mansions." },
        { name: "Sam Sand Dunes", description: "42km west of the city, the iconic sunset desert camps." },
        { name: "Gadisar Lake", description: "Rainwater reservoir with cenotaphs and gateways." },
        { name: "Kuldhara Village", description: "Abandoned heritage village from 1825." },
      ],
      eat: [
        { name: "Suryagarh Dining", description: "Marwari thalis under the desert stars." },
        { name: "1st Gate Home Fusion", description: "Italian-Rajasthani fusion with fort views." },
        { name: "Chandan Shree", description: "Local favourite for Rajasthani thalis." },
        { name: "The Trio", description: "Rooftop classic with sunset fort vistas." },
      ],
      shop: [
        { name: "Sadar Bazaar", description: "Mirror-work textiles, leather and silver." },
        { name: "Bhatia Market", description: "Camel leather goods and embroidered juttis." },
        { name: "Manak Chowk", description: "Antique camel bells and tribal jewellery." },
      ],
      placesNearby: [
        { name: "Khuri Dunes", description: "Quieter alternative to Sam, 50km south." },
        { name: "Tanot Mata Temple", description: "Border-area shrine with 1965 war history." },
        { name: "Lodurva", description: "Ancient capital ruins with Jain temples." },
        { name: "Desert National Park", description: "Habitat of the great Indian bustard." },
      ],
    },
  },
];

export const getDestinationBySlug = (slug: string) =>
  destinations.find((d) => d.slug === slug);
