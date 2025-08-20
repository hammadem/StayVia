const sampleListings = [{
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGJlYWNoZnJvbnR8ZW58MHx8fHwxNjg3NzA5Mzgz&ixlib=rb-1.2.1&q=80&w=1080",
    },
    price: 1500,
    location: "Malibu, California",
    country: "United States",
    category: "Beachfront",
    geometry: {
      type: "Point",
      coordinates: [
        -118.68561,
        34.03688
      ], // Malibu coordinates
    },
  },
  {
    title: "Modern Loft in Downtown",
    description:
      "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fG1vZGVybiBsb2Z0fGVufDB8fHx8fDE2ODc3MDkzODN8&ixlib=rb-1.2.1&q=80&w=1080",
    },
    price: 1200,
    location: "New York City, New York",
    country: "United States",
    category: "City Apartments",
    geometry: {
      type: "Point",
      coordinates: [
        -74.005994,
        40.712749
      ] // NYC coordinates
    },
  },
  {
    title: "Mountain Retreat",
    description:
      "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDh8fG1vdW50YWluJTIwY2FiaW58ZW58MHx8fHwxNjg3NzA5Mzg1&ixlib=rb-1.2.1&q=80&w=1080",
    },
    price: 1000,
    location: "Aspen, Colorado",
    country: "United States",
    category: "Mountains",
    geometry: {
      type: "Point",
      coordinates: [
        -106.819217,
        39.190681
      ], // Aspen coordinates
    },
  },
  {
    title: "Historic Villa in Tuscany",
    description:
      "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fHR1Y2FueXxlbnwwfHx8fHwxNjg3NzA5Mzg1&ixlib=rb-1.2.1&q=80&w=1080",
    },
    price: 2500,
    location: "Florence",
    country: "Italy",
    category: "Resorts",
    geometry: {
      type: "Point",
      coordinates: [
        11.255576,
        43.769871
      ], // Florence coordinates
    },
  },
  {
    title: "Secluded Treehouse Getaway",
    description:
      "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fHRyZWFob3VzZXxlbnwwfHx8fHwxNjg3NzA5Mzg1&ixlib=rb-1.2.1&q=80&w=1080",
    },
    price: 800,
    location: "Portland, Oregon",
    country: "United States",
    category: "Camping",
    geometry: {
      type: "Point",
      coordinates: [
        -122.678367,
        45.515197
      ], // Portland coordinates
    },
  },
  {
    title: "Beachfront Paradise",
    description:
      "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhcmNofMjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 2000,
    location: "Cancún, Quintana Roo",
    country: "Mexico",
    category: "Beachfront",
    geometry: {
      type: "Point",
      coordinates: [
        -86.85176,
        21.16188
      ], // Cancun coordinates
    },
  },
  {
    title: "Rustic Cabin by the Lake",
    description:
      "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhcmNofMTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 900,
    location: "South Lake Tahoe, California",
    country: "United States",
    category: "Farms",
    geometry: {
      type: "Point",
      coordinates: [
        -119.98382,
        38.934497
      ], // Lake Tahoe coordinates
    },
  },
  {
    title: "Luxury Penthouse with City Views",
    description:
      "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhcmNofM3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 3500,
    location: "Los Angeles, California",
    country: "United States",
    category: "City Apartments",
    geometry: {
      type: "Point",
      coordinates: [
        -118.254187,
        34.048051
      ], // Los Angeles coordinates
    },
  },
  {
    title: "Ski-In/Ski-Out Chalet",
    description:
      "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhcmNofMTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 3000,
    location: "Verbier, Valais",
    country: "Switzerland",
    category: "Resorts",
    geometry: {
      type: "Point",
      coordinates: [
        7.229043,
        46.096066
      ], // Verbier coordinates
    },
  },
  {
    title: "Safari Lodge in the Serengeti",
    description:
      "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhcmNofMjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 4000,
    location: "Serengeti, Mara",
    country: "Tanzania",
    category: "Farms",
    geometry: {
      type: "Point",
      coordinates: [
        33.869237,
        -2.191953
      ], // Serengeti coordinates
    },
  },
  {
    title: "Historic Canal House",
    description:
      "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhcmNofM3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Amsterdam, North Holland",
    country: "Netherlands",
    category: "City Apartments",
    geometry: {
      type: "Point",
      coordinates: [
        4.9,
        52.378
      ], // Amsterdam coordinates
    },
  },
  {
    title: "Private Island Retreat",
    description:
      "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGxvY2FsJTIwY2FwaXNoJTIwY2FwaW5nfGVufDB8fHx8fDE2ODc3MDkzODN8&ixlib=rb-1.2.1&q=80&w=1080",
    },
    price: 10000,
    location: "Central Division, Fiji",
    country: "Fiji",
    category: "Resorts",
    geometry: {
      type: "Point",
      coordinates: [
        178.442166,
        -18.141588
      ], // Fiji Islands coordinates
    },
  },
  {
    title: "Historic Brownstone in Boston",
    description:
      "Step back in time in this elegant historic brownstone located in the heart of Boston.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 2200,
    location: "Boston, Massachusetts",
    country: "United States",
    category: "Homestays",
    geometry: {
      type: "Point",
      coordinates: [
        -71.056804,
        42.35888
      ], // Boston coordinates
    },
  },
  {
    title: "Beachfront Bungalow in Bali",
    description:
      "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Bali, Indonesia",
    country: "Indonesia",
    category: "Beachfront",
    geometry: {
      type: "Point",
      coordinates: [
        115.219118,
        -8.652497
      ], // Bali coordinates
    },
  },
  {
    title: "Mountain View Cabin in Banff",
    description:
      "Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1500,
    location: "Banff, Alberta",
    country: "Canada",
    category: "Mountains",
    geometry: {
      type: "Point",
      coordinates: [
        -115.57096,
        51.176613
      ], // Banff coordinates
    },
  },
  {
    title: "Art Deco Apartment in Miami",
    description:
      "Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1600,
    location: "Miami, Florida",
    country: "United States",
    category: "City Apartments",
    geometry: {
      type: "Point",
      coordinates: [
        -80.1919,
        25.773357
      ], // Miami coordinates
    },
  },
  {
    title: "Tropical Villa in Phuket",
    description:
      "Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 3000,
    location: "Phuket, Phuket Province",
    country: "Thailand",
    category: "Resorts",
    geometry: {
      type: "Point",
      coordinates: [
        98.38732,
        7.88346
      ], // Phuket coordinates
    },
  },
  {
    title: "Historic Castle in Scotland",
    description:
      "Live like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJlYWNoJTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 4000,
    location: "Dollar, Scotland",
    country: "United Kingdom",
    category: "Resorts",
    geometry: {
      type: "Point",
      coordinates: [
        -3.671449,
        56.16295
      ], // Scottish Highlands coordinates
    },
  },
  {
    title: "Desert Oasis in Dubai",
    description:
      "Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHViYWl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 5000,
    location: "Dubai, United Arab Emirates",
    country: "United Arab Emirates",
    category: "Resorts",
    geometry: {
      type: "Point",
      coordinates: [
        55.297558,
        25.25809
      ], // Dubai coordinates
    },
  },
  {
    title: "Rustic Log Cabin in Montana",
    description:
      "Unplug and unwind in this cozy log cabin surrounded by the natural beauty of Montana.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1100,
    location: "Montana, United States",
    country: "United States",
    category: "Farms",
    geometry: {
      type: "Point",
      coordinates: [
        -109.172599,
        47.072515
      ], // Montana coordinates
    },
  },
  {
    title: "Beachfront Villa in Greece",
    description:
      "Enjoy the crystal-clear waters of the Mediterranean in this beautiful beachfront villa on a Greek island.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmlsbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 2500,
    location: "Mykonos, Greece",
    country: "Greece",
    category: "Beachfront",
    geometry: {
      type: "Point",
      coordinates: [
        25.326384,
        37.446503
      ], // Mykonos coordinates
    },
  },
  {
    title: "Eco-Friendly Treehouse Retreat",
    description:
      "Stay in an eco-friendly treehouse nestled in the forest. It's the perfect escape for nature lovers.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 750,
    location: "Puntarenas, Costa Rica",
    country: "Costa Rica",
    category: "Camping",
    geometry: {
      type: "Point",
      coordinates: [
        -84.83464,
        9.977334
      ], // Costa Rica coordinates
    },
  },
  {
    title: "Historic Cottage in Charleston",
    description:
      "Experience the charm of historic Charleston in this beautifully restored cottage with a private garden.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1600,
    location: "Charleston, South Carolina",
    country: "United States",
    category: "Homestays",
    geometry: {
      type: "Point",
      coordinates: [
        -79.938628,
        32.789284
      ], // Charleston coordinates
    },
  },
  {
    title: "Modern Apartment in Tokyo",
    description:
      "Explore the vibrant city of Tokyo from this modern and centrally located apartment.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRva3lvfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 2000,
    location: "Tokyo, Japan",
    country: "Japan",
    category: "City Apartments",
    geometry: {
      type: "Point",
      coordinates: [
        139.692912,
        35.688985
      ], // Tokyo coordinates
    },
  },
  {
    title: "Lakefront Cabin in New Hampshire",
    description:
      "Spend your days by the lake in this cozy cabin in the scenic White Mountains of New Hampshire.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "New Hampshire, United States",
    country: "United States",
    category: "Farms",
    geometry: {
      type: "Point",
      coordinates: [
        -71.578305,
        43.689888
      ], // New Hampshire coordinates
    },
  },
  {
    title: "Luxury Villa in the Maldives",
    description:
      "Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 6000,
    location: "Malé Atoll, Maldives",
    country: "Maldives",
    category: "Resorts",
    geometry: {
      type: "Point",
      coordinates: [
        73.651907,
        4.37485
      ], // Maldives coordinates
    },
  },
];

module.exports = { data: sampleListings };
