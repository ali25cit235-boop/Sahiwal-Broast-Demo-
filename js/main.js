/**
 * SAHIWAL BROAST - KAMALIA
 * Authentic Restaurant Website Logic & Real Menu Catalog
 * Pure Vanilla JavaScript (No frameworks, No build step)
 */

// =============================================================================
// GLOBAL CONFIGURATION
// =============================================================================
// WhatsApp number in international format (no +, no dashes, no spaces)
const WHATSAPP_NUMBER = "923006914217";
const GOOGLE_MAPS_URL = "https://maps.app.goo.gl/J7SFsxrmnMsCrWok9";
const RESTAURANT_NAME = "Sahiwal Broast, Kamalia";
const RESTAURANT_TAGLINE_URDU = "لذت، غذائیت اور معیار ہمارا نصب العین";
const TIMINGS_TEXT = "10:00 AM to 1:00 AM Daily (صبح 10 بجے تا رات 1 بجے تک)";
const DELIVERY_NUMBERS = ["0300-6914217", "0332-7214217", "0336-6914217", "0312-6914217"];
const PARCEL_BOX_FEE = 40; // پارسل آرڈر پر ڈبہ پیکنگ 40 روپے

// =============================================================================
// OFFICIAL RESTAURANT MENU DATA (Exact Prices & Items from Menu Card)
// =============================================================================
const MENU_ITEMS = [
  // ---------------------------------------------------------------------------
  // 1. BROAST & STEAM ROAST (بروسٹ اور سٹیم روسٹ)
  // ---------------------------------------------------------------------------
  {
    id: "broast-leg",
    category: "broast",
    name: "Leg Piece Broast",
    nameUrdu: "لیگ پیس بروسٹ",
    desc: "Crispy pressure fried succulent chicken leg piece with fresh bun, garlic sauce & fries.",
    price: 450,
    tag: "Bestseller",
    image: "./sources/broast.jpg"
  },
  {
    id: "broast-chest",
    category: "broast",
    name: "Chest Piece Broast",
    nameUrdu: "چیسٹ پیس بروسٹ",
    desc: "Crispy seasoned whole breast fillet piece with fresh bun, special garlic dip & hot fries.",
    price: 490,
    tag: "Popular",
    image: "./sources/broast.jpg"
  },
  {
    id: "broast-full-sp",
    category: "broast",
    name: "S.P Full Broast (4 Pcs)",
    nameUrdu: "اسپیشل فل بروسٹ",
    desc: "Complete 4-piece golden crispy broast with 4 fresh buns, double garlic dip & large fries.",
    price: 1880,
    tag: "Family Size",
    image: "./sources/broast.jpg"
  },
  {
    id: "broast-half-sp",
    category: "broast",
    name: "S.P Half Broast (2 Pcs)",
    nameUrdu: "اسپیشل ہاف بروسٹ",
    desc: "2-piece golden broast served with 2 buns, garlic mayo sauce & crispy fries.",
    price: 940,
    tag: "Value Pack",
    image: "./sources/broast.jpg"
  },
  {
    id: "steam-roast-full",
    category: "broast",
    name: "S.P Degi Chicken Steam Roast (Full)",
    nameUrdu: "اسپیشل دیگی چکن سٹیم روسٹ (فل)",
    desc: "Tender whole chicken marinated in aromatic traditional degi spices and steamed to perfection.",
    price: 1880,
    tag: "Traditional",
    image: "./sources/steam_roast.jpg"
  },
  {
    id: "steam-roast-chest",
    category: "broast",
    name: "S.P Degi Steam Roast (Chest)",
    nameUrdu: "اسپیشل دیگی چکن سٹیم روسٹ (چیسٹ)",
    desc: "Melt-in-mouth spiced chicken chest piece slow-steamed in desi masala.",
    price: 490,
    tag: "Chef Special",
    image: "./sources/steam_roast.jpg"
  },
  {
    id: "steam-roast-leg",
    category: "broast",
    name: "S.P Degi Steam Roast (Leg)",
    nameUrdu: "اسپیشل دیگی چکن سٹیم روسٹ (لیگ)",
    desc: "Juicy chicken leg piece slow-cooked in traditional wedding steam masala.",
    price: 450,
    tag: "Spiced",
    image: "./sources/steam_roast.jpg"
  },
  {
    id: "broast-batair",
    category: "broast",
    name: "Batair Broast (Quail)",
    nameUrdu: "بٹیر بروسٹ",
    desc: "Crispy fried whole quail marinated in spicy desi herbs.",
    price: 220,
    tag: "Specialty",
    image: "./sources/broast.jpg"
  },

  // ---------------------------------------------------------------------------
  // 2. HANDI & KARAHI (خالص مکھن سے تیار کردہ کڑاہی اور ہانڈی)
  // ---------------------------------------------------------------------------
  {
    id: "handi-green-chilli-half",
    category: "karahi-handi",
    name: "Ch Green Chili Lemon Handi (Half)",
    nameUrdu: "چکن گرین چلی لیمن ہانڈی (ہاف)",
    desc: "Signature boneless chicken cooked in clay pot with fresh green chilies, lemon juice & rich cream.",
    price: 840,
    tag: "Chef Signature",
    image: "./sources/handi.jpg"
  },
  {
    id: "handi-green-chilli-full",
    category: "karahi-handi",
    name: "Ch Green Chili Lemon Handi (Full)",
    nameUrdu: "چکن گرین چلی لیمن ہانڈی (فل)",
    desc: "Full serving of boneless chicken in zesty lemon and crushed green chili gravy in clay handi.",
    price: 1680,
    tag: "Top Rated",
    image: "./sources/handi.jpg"
  },
  {
    id: "handi-nawabi-half",
    category: "karahi-handi",
    name: "Chicken Nawabi Handi (Half)",
    nameUrdu: "چکن نوابی ہانڈی (ہاف)",
    desc: "Royal preparation with shredded chicken, saffron notes, almond essence & pure butter gravy.",
    price: 900,
    tag: "Royal Taste",
    image: "./sources/handi.jpg"
  },
  {
    id: "handi-nawabi-full",
    category: "karahi-handi",
    name: "Chicken Nawabi Handi (Full)",
    nameUrdu: "چکن نوابی ہانڈی (فل)",
    desc: "Full family portion of rich creamy Chicken Nawabi Handi garnished with tomato rose and dry fruit.",
    price: 1800,
    tag: "Royal Feast",
    image: "./sources/handi.jpg"
  },
  {
    id: "handi-cheese-gatala-half",
    category: "karahi-handi",
    name: "S.P Ch Cheese Gatala Handi (Half)",
    nameUrdu: "اسپیشل چکن چیز گٹالہ ہانڈی (ہاف)",
    desc: "Mouthwatering fusion handi loaded with molten cheddar cheese and spiced shredded chicken.",
    price: 950,
    tag: "Loaded Cheese",
    image: "./sources/handi.jpg"
  },
  {
    id: "handi-shah-jahani-half",
    category: "karahi-handi",
    name: "S.P Ch Shah Jahani Handi (Half)",
    nameUrdu: "اسپیشل شاہ جہانی ہانڈی (ہاف)",
    desc: "Mughlai style aromatic creamy chicken handi with rich mild spices.",
    price: 900,
    tag: "Mughlai",
    image: "./sources/handi.jpg"
  },
  {
    id: "handi-white-half",
    category: "karahi-handi",
    name: "Chicken White Handi (Half)",
    nameUrdu: "چکن وائٹ ہانڈی (ہاف)",
    desc: "Silky smooth white handi prepared with thick dairy cream, white pepper, and butter.",
    price: 850,
    tag: "Mild & Creamy",
    image: "./sources/handi.jpg"
  },
  {
    id: "handi-sp-half",
    category: "karahi-handi",
    name: "S.P Chicken Handi (Half)",
    nameUrdu: "اسپیشل چکن ہانڈی (ہاف)",
    desc: "Our beloved traditional chicken handi cooked fresh to order in pure butter.",
    price: 800,
    tag: "Popular",
    image: "./sources/handi.jpg"
  },
  {
    id: "karahi-chicken-half",
    category: "karahi-handi",
    name: "Chicken Karahi (Half - Pure Butter)",
    nameUrdu: "چکن کڑاہی (خالص مکھن - ہاف)",
    desc: "Wok-cooked fresh chicken with ripe tomatoes, ginger juliennes and 100% pure butter (خالص مکھن).",
    price: 1120,
    tag: "Pure Butter",
    image: "./sources/karahi.jpg"
  },
  {
    id: "karahi-chicken-full",
    category: "karahi-handi",
    name: "Chicken Karahi (Full - Pure Butter)",
    nameUrdu: "چکن کڑاہی (خالص مکھن - فل)",
    desc: "Full 1 Kg chicken karahi prepared in sizzling pure desi butter with fragrant coriander & chilies.",
    price: 2240,
    tag: "Desi Makhan",
    image: "./sources/karahi.jpg"
  },
  {
    id: "karahi-white-half",
    category: "karahi-handi",
    name: "Chicken White Karahi (Half)",
    nameUrdu: "چکن وائٹ کڑاہی (ہاف)",
    desc: "Creamy white gravy karahi with green chilies, yogurt, and butter.",
    price: 1320,
    tag: "Special",
    image: "./sources/karahi.jpg"
  },
  {
    id: "karahi-mutton-half",
    category: "karahi-handi",
    name: "S.P Mutton Karahi (Half)",
    nameUrdu: "اسپیشل مکھنی مٹن کڑاہی (ہاف)",
    desc: "Tender fresh goat mutton cooked in pure butter with rich tomato masala.",
    price: 1950,
    tag: "Mutton Special",
    image: "./sources/karahi.jpg"
  },
  {
    id: "karahi-beef-half",
    category: "karahi-handi",
    name: "S.P Beef Karahi (Half)",
    nameUrdu: "اسپیشل بیف کڑاہی (ہاف)",
    desc: "Slow-tenderized prime beef cooked in wok with desi spices.",
    price: 1450,
    tag: "Beef Lovers",
    image: "./sources/karahi.jpg"
  },
  {
    id: "karahi-dumba-half",
    category: "karahi-handi",
    name: "S.P Dumba Namkeen Karahi (Half)",
    nameUrdu: "اسپیشل دنبہ نمکین کڑاہی (ہاف)",
    desc: "Authentic Shinwari style dumba meat cooked in its own natural tallow with green chilies & black pepper.",
    price: 2250,
    tag: "Shinwari",
    image: "./sources/karahi.jpg"
  },
  {
    id: "chinese-jalfrazi",
    category: "karahi-handi",
    name: "Chicken Jalfrazi",
    nameUrdu: "چکن جلفریزی",
    desc: "Boneless chicken strips stir-fried with capsicum, tomatoes, onions and spicy sweet-sour gravy.",
    price: 860,
    tag: "Chinese Fusion",
    image: "./sources/karahi.jpg"
  },
  {
    id: "chinese-manchurian",
    category: "karahi-handi",
    name: "Chicken Munchorion",
    nameUrdu: "چکن منچورین",
    desc: "Classic Indo-Chinese chicken chunks coated in tangy spicy garlic tomato sauce.",
    price: 860,
    tag: "Chinese",
    image: "./sources/karahi.jpg"
  },
  {
    id: "chinese-shashlik-rice",
    category: "karahi-handi",
    name: "Chicken Shashlik with Rice",
    nameUrdu: "چکن شاشلک ود رائس",
    desc: "Skewered chicken and vegetables in sizzling red sauce served with vegetable fried rice.",
    price: 1060,
    tag: "Platter",
    image: "./sources/karahi.jpg"
  },

  // ---------------------------------------------------------------------------
  // 3. BAR B.Q & PLATTERS (باربی کیو)
  // ---------------------------------------------------------------------------
  {
    id: "bbq-family-platter",
    category: "bbq",
    name: "Special Family B.B.Q Platter",
    nameUrdu: "اسپیشل فیملی باربی کیو پلیٹر",
    desc: "Grand feast platter: Chicken Tikka, Malai Boti, Seekh Kabab, Reshmi Kabab, Yellow Rice, Roghani Naan & Dips.",
    price: 4990,
    tag: "Grand Feast",
    image: "./sources/bbq.jpg"
  },
  {
    id: "bbq-malai-boti-half",
    category: "bbq",
    name: "S.P Malai Boti (4 Seekh - Half)",
    nameUrdu: "اسپیشل ملائی بوٹی پلیٹ (4 سیخ)",
    desc: "4 Skewers of melt-in-the-mouth boneless chicken marinated in cream, cardamom, and green chilies.",
    price: 820,
    tag: "Top Bestseller",
    image: "./sources/bbq.jpg"
  },
  {
    id: "bbq-chicken-tikka-half",
    category: "bbq",
    name: "Chicken Tikka (4 Seekh - Half)",
    nameUrdu: "چکن تکہ فل پلیٹ (4 سیخ)",
    desc: "4 Skewers of charcoal-smoked red chicken tikka with mint chutney.",
    price: 680,
    tag: "Charcoal Hot",
    image: "./sources/bbq.jpg"
  },
  {
    id: "bbq-chicken-kabab-half",
    category: "bbq",
    name: "Chicken Kabab (6 Pieces - Half)",
    nameUrdu: "چکن کباب فل پلیٹ (6 سیخ)",
    desc: "6 Skewers of juicy charcoal-grilled minced chicken seekh kabab.",
    price: 540,
    tag: "Savory",
    image: "./sources/bbq.jpg"
  },
  {
    id: "bbq-reshmi-kabab-half",
    category: "bbq",
    name: "Reshmi Kabab (6 Pieces - Half)",
    nameUrdu: "ریشمی کباب فل پلیٹ (6 سیخ)",
    desc: "6 Skewers of silken smooth Reshmi Kabab seasoned with butter and herbs.",
    price: 720,
    tag: "Silky Soft",
    image: "./sources/bbq.jpg"
  },
  {
    id: "bbq-malai-piece-chest",
    category: "bbq",
    name: "Malai Piece (Chest)",
    nameUrdu: "ملائی پیس (چیسٹ)",
    desc: "Large charcoal-grilled whole chicken breast piece slathered in malai cream.",
    price: 530,
    tag: "Creamy BBQ",
    image: "./sources/bbq.jpg"
  },
  {
    id: "bbq-malai-piece-leg",
    category: "bbq",
    name: "Malai Piece (Leg)",
    nameUrdu: "ملائی پیس (لیگ)",
    desc: "Charcoal-grilled juicy drumstick and thigh coated in rich creamy marinade.",
    price: 490,
    tag: "Juicy",
    image: "./sources/bbq.jpg"
  },
  {
    id: "bbq-tikka-chest",
    category: "bbq",
    name: "Chest Piece Tikka",
    nameUrdu: "چیسٹ پیس تکہ",
    desc: "Charcoal-grilled fiery red chicken breast quarter with lemon.",
    price: 490,
    tag: "Classic BBQ",
    image: "./sources/bbq.jpg"
  },
  {
    id: "bbq-tikka-leg",
    category: "bbq",
    name: "Leg Piece Tikka",
    nameUrdu: "لیگ پیس تکہ",
    desc: "Charcoal-grilled spicy chicken leg quarter with masala.",
    price: 450,
    tag: "Classic BBQ",
    image: "./sources/bbq.jpg"
  },

  // ---------------------------------------------------------------------------
  // 4. BURGERS, SHAWARMA & ROLLS (برگر اور شوارما)
  // ---------------------------------------------------------------------------
  {
    id: "burger-sp-zinger-cheese",
    category: "burgers-shawarma",
    name: "S.P Zinger Cheese Burger",
    nameUrdu: "اسپیشل زنگر چیز برگر",
    desc: "Crispy fried whole chicken breast fillet with melted cheddar cheese slice, iceberg and special dressing.",
    price: 430,
    tag: "Bestseller",
    image: "./sources/burger.jpg"
  },
  {
    id: "burger-zinger-reg",
    category: "burgers-shawarma",
    name: "Zinger Burger",
    nameUrdu: "زنگر برگر",
    desc: "Crunchy batter-fried chicken fillet with fresh cabbage and signature burger sauce in sesame bun.",
    price: 350,
    tag: "Crispy",
    image: "./sources/burger.jpg"
  },
  {
    id: "shawarma-sp-zinger-cheese",
    category: "burgers-shawarma",
    name: "S.P Zinger Cheese Shawarma",
    nameUrdu: "اسپیشل زنگر چیز شوارما",
    desc: "Crispy zinger chicken bites with melted cheese, pickled cucumbers, and garlic mayo in soft pita wrap.",
    price: 370,
    tag: "Chef Special",
    image: "./sources/shawarma.jpg"
  },
  {
    id: "shawarma-zinger",
    category: "burgers-shawarma",
    name: "Zinger Shawarma",
    nameUrdu: "زنگر شوارما",
    desc: "Crunchy fried zinger chicken strips rolled with garlic mayo sauce in fresh pita bread.",
    price: 290,
    tag: "Popular",
    image: "./sources/shawarma.jpg"
  },
  {
    id: "shawarma-chicken-reg",
    category: "burgers-shawarma",
    name: "Chicken Shawarma",
    nameUrdu: "چکن شوارما",
    desc: "Traditional rotisserie-shaved chicken with pickled vegetables and tahini garlic dressing.",
    price: 180,
    tag: "Daily Value",
    image: "./sources/shawarma.jpg"
  },
  {
    id: "roll-sp-zinger-paratha",
    category: "burgers-shawarma",
    name: "S.P Zinger Paratha Roll",
    nameUrdu: "اسپیشل زنگر پراٹھا رول",
    desc: "Crispy fried zinger strips wrapped in hot golden crispy tandoori paratha with chutney and onion.",
    price: 360,
    tag: "Paratha Roll",
    image: "./sources/burger.jpg"
  },
  {
    id: "roll-sp-chicken-paratha",
    category: "burgers-shawarma",
    name: "S.P Chicken Paratha Roll",
    nameUrdu: "اسپیشل چکن پراٹھا رول",
    desc: "Juicy BBQ chicken tikka chunks rolled in flaky golden paratha with mint yogurt sauce.",
    price: 290,
    tag: "Desi Roll",
    image: "./sources/burger.jpg"
  },

  // ---------------------------------------------------------------------------
  // 5. SIGNATURE PIZZA (پیزا)
  // ---------------------------------------------------------------------------
  {
    id: "pizza-malai-booti-large",
    category: "pizza",
    name: "S.P Malai Booti Pizza (Large)",
    nameUrdu: "اسپیشل ملائی بوٹی پیزا (لارج)",
    desc: "Large pan pizza crowned with tender malai boti chicken chunks, rich mozzarella, capsicum & olives.",
    price: 1800,
    tag: "Supreme Taste",
    image: "./sources/pizza.jpg"
  },
  {
    id: "pizza-malai-booti-med",
    category: "pizza",
    name: "S.P Malai Booti Pizza (Medium)",
    nameUrdu: "اسپیشل ملائی بوٹی پیزا (میڈیم)",
    desc: "Medium pan pizza loaded with creamy malai boti pieces and double mozzarella cheese.",
    price: 1250,
    tag: "Popular",
    image: "./sources/pizza.jpg"
  },
  {
    id: "pizza-kabab-crust-large",
    category: "pizza",
    name: "Kabab Crust Pizza (Large)",
    nameUrdu: "کباب کرسٹ پیزا (لارج)",
    desc: "Chef's creation with savory chicken seekh kababs baked into the puffy golden crust edges.",
    price: 1800,
    tag: "Stuffed Crust",
    image: "./sources/pizza.jpg"
  },
  {
    id: "pizza-chef-sp-large",
    category: "pizza",
    name: "Chef S.P Pizza (Large)",
    nameUrdu: "شیف اسپیشل پیزا (لارج)",
    desc: "House special combination of smoked chicken, sausages, mushrooms, jalapeños, and extra cheese.",
    price: 1700,
    tag: "Chef Special",
    image: "./sources/pizza.jpg"
  },
  {
    id: "pizza-tikka-large",
    category: "pizza",
    name: "Chicken Tikka Pizza (Large)",
    nameUrdu: "تکہ پیزا (لارج)",
    desc: "Traditional desi tikka chicken topping with onions, bell peppers, tomatoes, and spicy pizza sauce.",
    price: 1600,
    tag: "Desi Crust",
    image: "./sources/pizza.jpg"
  },
  {
    id: "pizza-fajita-large",
    category: "pizza",
    name: "Chicken Fajita Pizza (Large)",
    nameUrdu: "فجیتا پیزا (لارج)",
    desc: "Mexican-spiced fajita chicken with crispy onions, green peppers, and stretchy cheese.",
    price: 1600,
    tag: "Fajita Spice",
    image: "./sources/pizza.jpg"
  },

  // ---------------------------------------------------------------------------
  // 6. FISH & SEAFOOD SPECIALTIES (فش سپیشل)
  // ---------------------------------------------------------------------------
  {
    id: "fish-fry-special",
    category: "fish",
    name: "Special Rohu Fish Fry",
    nameUrdu: "اسپیشل رہو فش فرائی",
    desc: "Fresh river Rohu fish coated in Kamalia secret spices and deep-fried to crisp golden perfection. Served with onion rings and lemon.",
    price: 1600,
    tag: "Winter Special",
    image: "./sources/fish.jpg"
  },
  {
    id: "fish-grilled-special",
    category: "fish",
    name: "Special Rohu Fish Grilled",
    nameUrdu: "اسپیشل رہو گرلڈ فش",
    desc: "Healthy charcoal-grilled whole Rohu fish seasoned with crushed herbs and lemon butter glaze.",
    price: 1600,
    tag: "Healthy Grill",
    image: "./sources/fish.jpg"
  },
  {
    id: "fish-finger-quarter",
    category: "fish",
    name: "Finger Fish (Quarter)",
    nameUrdu: "فنگر فش (کوارٹر)",
    desc: "Crispy boneless fish fingers in seasoned breadcrumb crust with tartar garlic sauce.",
    price: 1000,
    tag: "Boneless",
    image: "./sources/fish.jpg"
  },
  {
    id: "fish-finger-half",
    category: "fish",
    name: "Finger Fish (Half)",
    nameUrdu: "فنگر فش (ہاف)",
    desc: "Half kilogram boneless crispy fried finger fish with tartar dip and lemon.",
    price: 2000,
    tag: "Crispy Snack",
    image: "./sources/fish.jpg"
  },

  // ---------------------------------------------------------------------------
  // 7. RICE & CHINESE (رائس اور چائنیز)
  // ---------------------------------------------------------------------------
  {
    id: "chowmein-special-full",
    category: "rice-chinese",
    name: "Special Chicken Chowmein (Full)",
    nameUrdu: "اسپیشل چکن چومین (فل)",
    desc: "Wok-tossed noodles with chicken strips, crunchy cabbage, carrots, bell peppers in dark savory sauce.",
    price: 1150,
    tag: "Top Chinese",
    image: "./sources/chowmein.jpg"
  },
  {
    id: "chowmein-special-half",
    category: "rice-chinese",
    name: "Special Chicken Chowmein (Half)",
    nameUrdu: "اسپیشل چکن چومین (ہاف)",
    desc: "Individual serving of delicious chicken stir-fry chowmein noodles.",
    price: 600,
    tag: "Chinese",
    image: "./sources/chowmein.jpg"
  },
  {
    id: "rice-jangli-pulao",
    category: "rice-chinese",
    name: "S.P Jangli Pulao",
    nameUrdu: "اسپیشل جنگلی پلاؤ",
    desc: "Signature celebration rice platter layered with spiced chicken, boiled eggs, cherries, pineapples and almonds.",
    price: 950,
    tag: "Celebration",
    image: "./sources/pulao.jpg"
  },
  {
    id: "rice-beef-pulao",
    category: "rice-chinese",
    name: "S.P Beef Pulao",
    nameUrdu: "اسپیشل بیف پلاؤ",
    desc: "Aromatic long-grain basmati rice cooked in rich bone yakhni with tender beef chunks.",
    price: 900,
    tag: "Yakhni Pulao",
    image: "./sources/pulao.jpg"
  },
  {
    id: "rice-chicken-biryani",
    category: "rice-chinese",
    name: "S.P Chicken Biryani (Full Plate)",
    nameUrdu: "اسپیشل چکن بریانی (فل پلیٹ)",
    desc: "Authentic fragrant dum biryani cooked with chicken pieces, saffron rice layers and spices.",
    price: 350,
    tag: "Bestseller",
    image: "./sources/pulao.jpg"
  },
  {
    id: "rice-chicken-fried",
    category: "rice-chinese",
    name: "S.P Chicken Fried Rice",
    nameUrdu: "اسپیشل چکن فرائیڈ رائس",
    desc: "Chinese wok-fried basmati rice with minced chicken, spring onions, eggs, and light soy seasoning.",
    price: 850,
    tag: "Chinese Fried Rice",
    image: "./sources/pulao.jpg"
  },
  {
    id: "rice-egg-fried",
    category: "rice-chinese",
    name: "Egg Fried Rice",
    nameUrdu: "ایگ فرائیڈ رائس",
    desc: "Fluffy rice wok-fried with scrambled eggs, diced carrots and bell peppers.",
    price: 700,
    tag: "Chinese Classic",
    image: "./sources/pulao.jpg"
  },

  // ---------------------------------------------------------------------------
  // 8. APPETIZERS, FRIES & SOUPS (ایپیٹائزر اور سوپ)
  // ---------------------------------------------------------------------------
  {
    id: "app-hot-wings-12",
    category: "appetizers",
    name: "Hot Wings (12 Pieces)",
    nameUrdu: "ہاٹ ونگز (12 پیس)",
    desc: "12 Crispy batter-fried wings tossed in hot desi spices with garlic mayo dip.",
    price: 600,
    tag: "Crispy Crunch",
    image: "./sources/wings.jpg"
  },
  {
    id: "app-nuggets-12",
    category: "appetizers",
    name: "Chicken Nuggets (12 Pieces)",
    nameUrdu: "نگٹس (12 پیس)",
    desc: "12 Golden bite-sized minced chicken nuggets served with ketchup and garlic dip.",
    price: 600,
    tag: "Kids Favorite",
    image: "./sources/wings.jpg"
  },
  {
    id: "app-finger-chips-full",
    category: "appetizers",
    name: "Finger Chips / Fries (Full)",
    nameUrdu: "فنگر چپس فرائز (فل)",
    desc: "Full plate of hot crispy golden french fries with special chaat masala.",
    price: 400,
    tag: "Crispy Fries",
    image: "./sources/fries.jpg"
  },
  {
    id: "app-finger-chips-half",
    category: "appetizers",
    name: "Finger Chips / Fries (Half)",
    nameUrdu: "فنگر چپس فرائز (ہاف)",
    desc: "Half plate of hot potato fries with seasoning.",
    price: 200,
    tag: "Snack",
    image: "./sources/fries.jpg"
  },
  {
    id: "soup-chicken-corn-half",
    category: "appetizers",
    name: "Special Chicken Corn Soup (Half)",
    nameUrdu: "اسپیشل چکن کارن سوپ (ہاف)",
    desc: "Hot savory soup with shredded chicken, sweet golden corn, egg drop ribbons and vinegar chili sauce.",
    price: 600,
    tag: "Warm Comfort",
    image: "./sources/soup.jpg"
  },
  {
    id: "soup-hot-sour-half",
    category: "appetizers",
    name: "Hot & Sour Soup (Half)",
    nameUrdu: "ہاٹ اینڈ سار سوپ (ہاف)",
    desc: "Spicy and tangy Chinese soup loaded with chicken, tofu, mushrooms and black pepper.",
    price: 650,
    tag: "Zesty Soup",
    image: "./sources/soup.jpg"
  },
  {
    id: "salad-russian",
    category: "appetizers",
    name: "Russian Salad",
    nameUrdu: "رشین سلاد",
    desc: "Chilled fresh fruit and potato salad mixed with sweet creamy mayonnaise dressing.",
    price: 300,
    tag: "Chilled Salad",
    image: "./sources/pulao.jpg"
  },
  {
    id: "dall-sp-shahi-half",
    category: "appetizers",
    name: "S.P Shahi Dall Fry (Half)",
    nameUrdu: "اسپیشل شاہی دال فرائی (ہاف)",
    desc: "Golden lentils tempered with desi ghee, cumin, garlic, and whole dried red chilies.",
    price: 280,
    tag: "Desi Dal",
    image: "./sources/handi.jpg"
  },
  {
    id: "tandoor-roghani-naan",
    category: "appetizers",
    name: "S.P Roghani Naan",
    nameUrdu: "اسپیشل روغنی نان",
    desc: "Fluffy tandoori bread glazed with milk, butter, and toasted sesame seeds.",
    price: 60,
    tag: "Tandoor",
    image: "./sources/handi.jpg"
  },
  {
    id: "tandoor-garlic-naan",
    category: "appetizers",
    name: "Garlic Naan",
    nameUrdu: "گارلک نان",
    desc: "Tandoori flatbread studded with fresh minced garlic and butter.",
    price: 80,
    tag: "Tandoor",
    image: "./sources/handi.jpg"
  },

  // ---------------------------------------------------------------------------
  // 9. COLD BAR & BEVERAGES (کولڈ بار)
  // ---------------------------------------------------------------------------
  {
    id: "drink-mint-margarita",
    category: "cold-bar",
    name: "Mint Margarita",
    nameUrdu: "منٹ مارگریٹا",
    desc: "Zesty crushed ice refresher prepared with fresh garden mint leaves, lemon juice and soda.",
    price: 200,
    tag: "Refreshing",
    image: "./sources/cold_drink.jpg"
  },
  {
    id: "drink-fresh-lime",
    category: "cold-bar",
    name: "Fresh Lime",
    nameUrdu: "فریش لائم",
    desc: "Chilled sparkling lemon soda with a pinch of black salt.",
    price: 120,
    tag: "Chilled",
    image: "./sources/cold_drink.jpg"
  },
  {
    id: "drink-soft-1-5l",
    category: "cold-bar",
    name: "Soft Drink 1.5 Liter",
    nameUrdu: "ڈیڑھ لیٹر کولڈ ڈرنک",
    desc: "Chilled 1.5 Liter bottle (Coke, Sprite, Fanta, Dew).",
    price: 220,
    tag: "Family Drink",
    image: "./sources/cold_drink.jpg"
  },
  {
    id: "drink-soft-1l",
    category: "cold-bar",
    name: "Soft Drink 1 Liter",
    nameUrdu: "1 لیٹر کولڈ ڈرنک",
    desc: "Chilled 1 Liter soda bottle.",
    price: 170,
    tag: "Chilled",
    image: "./sources/cold_drink.jpg"
  },
  {
    id: "drink-soft-half-l",
    category: "cold-bar",
    name: "Soft Drink 1/2 Liter",
    nameUrdu: "ہاف لیٹر کولڈ ڈرنک",
    desc: "Chilled 500ml soda bottle.",
    price: 120,
    tag: "Chilled",
    image: "./sources/cold_drink.jpg"
  },
  {
    id: "drink-regular-bottle",
    category: "cold-bar",
    name: "Regular Bottle 250ml",
    nameUrdu: "ریگولر بوتل",
    desc: "Cold 250ml glass bottle.",
    price: 60,
    tag: "Chilled",
    image: "./sources/cold_drink.jpg"
  },
  {
    id: "drink-mineral-water-nestle",
    category: "cold-bar",
    name: "Nestle Mineral Water",
    nameUrdu: "نیسلے منرل واٹر",
    desc: "Pure bottled mineral water.",
    price: 120,
    tag: "Water",
    image: "./sources/cold_drink.jpg"
  },
  {
    id: "dessert-kheer-bowl",
    category: "cold-bar",
    name: "S.P Kheer Bowl",
    nameUrdu: "اسپیشل کھیر باؤل",
    desc: "Traditional rich cardamom rice pudding served chilled in clay bowl.",
    price: 300,
    tag: "Dessert",
    image: "./sources/cold_drink.jpg"
  },
  {
    id: "side-fresh-raita",
    category: "cold-bar",
    name: "Fresh Raita",
    nameUrdu: "فریش رائتہ",
    desc: "Chilled savory yogurt dip with crushed mint and zeera.",
    price: 70,
    tag: "Dip",
    image: "./sources/cold_drink.jpg"
  }
];

// =============================================================================
// REAL RESTAURANT REVIEWS
// =============================================================================
const SAMPLE_REVIEWS = [
  {
    name: "Haji Muhammad Aslam",
    location: "Civil Lines, Kamalia",
    rating: 5,
    text: "Sahiwal Broast is our family's favorite dining spot in Kamalia. Their Pure Butter Chicken Karahi and Green Chili Lemon Handi are unmatched in flavor."
  },
  {
    name: "Rana Shehzad Akhtar",
    location: "Railway Road, Kamalia",
    rating: 5,
    text: "The Special Family BBQ Platter was extraordinary. 4 Seekh Malai Boti, Seekh Kababs, and Roghani Naan served sizzling hot. Super fast delivery!"
  },
  {
    name: "Malik Usman Tariq",
    location: "Chichawatni Road, Kamalia",
    rating: 5,
    text: "Crispy leg piece broast and Special Zinger Cheese Burger were top quality. Authentic desi taste, clean packaging and courteous staff on WhatsApp."
  },
  {
    name: "Chaudhry Bilal Gujjar",
    location: "Purana Bazar, Kamalia",
    rating: 5,
    text: "Tried their Special Rohu Fish Fry and Chicken Chowmein last weekend. Super fresh, crunchy river fish. Sahiwal Broast never compromises on quality!"
  }
];

// =============================================================================
// CART STATE & LOCALSTORAGE
// =============================================================================
let cart = [];

function loadCart() {
  try {
    const saved = localStorage.getItem("sahiwal_broast_cart_v2");
    if (saved) {
      cart = JSON.parse(saved);
    }
  } catch (e) {
    console.error("Cart storage error:", e);
    cart = [];
  }
}

function saveCart() {
  try {
    localStorage.setItem("sahiwal_broast_cart_v2", JSON.stringify(cart));
  } catch (e) {
    console.error("Failed to save cart:", e);
  }
  updateCartUI();
}

function addToCart(itemId, customDeal = null) {
  if (customDeal) {
    const existing = cart.find(i => i.id === customDeal.id);
    if (existing) {
      existing.qty += 1;
    } else {
      cart.push({ ...customDeal, qty: 1 });
    }
    showToast(`Added "${customDeal.name}" to cart! 🍗`);
    saveCart();
    return;
  }

  const item = MENU_ITEMS.find(i => i.id === itemId);
  if (!item) return;

  const existing = cart.find(i => i.id === itemId);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({
      id: item.id,
      name: item.name,
      nameUrdu: item.nameUrdu,
      price: item.price,
      qty: 1
    });
  }

  showToast(`Added "${item.name}" (Rs. ${item.price}) to order! 🍗`);
  saveCart();
}

function updateItemQty(itemId, delta) {
  const item = cart.find(i => i.id === itemId);
  if (!item) return;

  item.qty += delta;
  if (item.qty <= 0) {
    cart = cart.filter(i => i.id !== itemId);
  }
  saveCart();
}

function clearCart() {
  cart = [];
  saveCart();
}

function calculateTotal() {
  return cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
}

function calculateCount() {
  return cart.reduce((sum, item) => sum + item.qty, 0);
}

// =============================================================================
// DOM READY INITIALIZATION
// =============================================================================
document.addEventListener("DOMContentLoaded", () => {
  initPreloader();
  initCustomCursor();
  initNavbar();
  renderMenu("all");
  initMenuTabs();
  initDealsTilt();
  initWhyUsCounters();
  initReviewsCarousel();
  initCartDrawer();
  initWhatsAppLinks();
  initContactForm();
  initGSAPAnimations();
  loadCart();
  updateCartUI();
});

// =============================================================================
// 1. PRELOADER SCREEN
// =============================================================================
function initPreloader() {
  const preloader = document.getElementById("preloader");
  const bar = document.querySelector(".preloader-bar");
  const num = document.querySelector(".preloader-num");

  if (!preloader) return;

  let progress = 0;
  const interval = setInterval(() => {
    progress += Math.floor(Math.random() * 14) + 8;
    if (progress >= 100) {
      progress = 100;
      clearInterval(interval);
      if (bar) bar.style.width = "100%";
      if (num) num.textContent = "100%";

      setTimeout(() => {
        preloader.classList.add("loaded");
        document.body.style.overflow = "auto";
      }, 350);
    } else {
      if (bar) bar.style.width = `${progress}%`;
      if (num) num.textContent = `${progress}%`;
    }
  }, 45);
}

// =============================================================================
// 2. CUSTOM CURSOR (DESKTOP)
// =============================================================================
function initCustomCursor() {
  if (!window.matchMedia("(pointer: fine)").matches) return;

  const dot = document.querySelector(".custom-cursor-dot");
  const ring = document.querySelector(".custom-cursor-ring");
  if (!dot || !ring) return;

  let mouseX = 0, mouseY = 0;
  let ringX = 0, ringY = 0;

  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
  });

  function renderRing() {
    ringX += (mouseX - ringX) * 0.18;
    ringY += (mouseY - ringY) * 0.18;
    ring.style.transform = `translate(${ringX}px, ${ringY}px)`;
    requestAnimationFrame(renderRing);
  }
  requestAnimationFrame(renderRing);

  const interactables = document.querySelectorAll("a, button, .menu-card, .deal-card, .tab-btn");
  interactables.forEach(el => {
    el.addEventListener("mouseenter", () => document.body.classList.add("cursor-hover"));
    el.addEventListener("mouseleave", () => document.body.classList.remove("cursor-hover"));
  });
}

// =============================================================================
// 3. NAVBAR & MOBILE DRAWER
// =============================================================================
function initNavbar() {
  const navbar = document.querySelector(".navbar");
  const hamburger = document.querySelector(".hamburger");
  const mobileNav = document.querySelector(".mobile-nav");
  const backdrop = document.querySelector(".mobile-nav-backdrop");
  const mobileLinks = document.querySelectorAll(".mobile-nav-link");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      navbar?.classList.add("scrolled");
    } else {
      navbar?.classList.remove("scrolled");
    }
  }, { passive: true });

  function toggleMobileMenu() {
    const isOpen = mobileNav?.classList.contains("open");
    if (isOpen) {
      hamburger?.classList.remove("open");
      mobileNav?.classList.remove("open");
      backdrop?.classList.remove("open");
      document.body.style.overflow = "auto";
    } else {
      hamburger?.classList.add("open");
      mobileNav?.classList.add("open");
      backdrop?.classList.add("open");
      document.body.style.overflow = "hidden";
    }
  }

  hamburger?.addEventListener("click", toggleMobileMenu);
  backdrop?.addEventListener("click", toggleMobileMenu);

  mobileLinks.forEach(link => {
    link.addEventListener("click", () => {
      toggleMobileMenu();
    });
  });

  const sections = document.querySelectorAll("section[id]");
  window.addEventListener("scroll", () => {
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute("id");

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document.querySelectorAll(`.nav-link[href*="#${sectionId}"]`).forEach(link => link.classList.add("active"));
      } else {
        document.querySelectorAll(`.nav-link[href*="#${sectionId}"]`).forEach(link => link.classList.remove("active"));
      }
    });
  }, { passive: true });
}

// =============================================================================
// 4. MENU FILTERING & TOP 3 EXPAND LOGIC
// =============================================================================
let isMenuExpanded = false;
let currentMenuCategory = "all";

// The 3 primary flagship dishes to display at the top
const TOP_3_FLAGSHIP_IDS = ["broast-leg", "karahi-chicken-half", "burger-sp-zinger-cheese"];

function initMenuTabs() {
  const tabs = document.querySelectorAll(".tab-btn");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      currentMenuCategory = tab.getAttribute("data-category") || "all";
      renderMenu(currentMenuCategory);
    });
  });
}

function renderMenu(category) {
  const container = document.getElementById("menuGrid");
  const expandWrap = document.getElementById("menuExpandWrap");
  if (!container) return;

  currentMenuCategory = category;

  // Filter items by category
  let categoryItems = category === "all"
    ? MENU_ITEMS
    : MENU_ITEMS.filter(item => item.category === category);

  // For "all", place the flagship 3 items at the very top
  if (category === "all") {
    const flagshipItems = [];
    const restItems = [];
    categoryItems.forEach(item => {
      if (TOP_3_FLAGSHIP_IDS.includes(item.id)) {
        flagshipItems.push(item);
      } else {
        restItems.push(item);
      }
    });
    flagshipItems.sort((a, b) => TOP_3_FLAGSHIP_IDS.indexOf(a.id) - TOP_3_FLAGSHIP_IDS.indexOf(b.id));
    categoryItems = [...flagshipItems, ...restItems];
  }

  const totalCount = categoryItems.length;
  const itemsToDisplay = isMenuExpanded ? categoryItems : categoryItems.slice(0, 3);
  const remainingCount = totalCount - 3;

  container.innerHTML = itemsToDisplay.map(item => `
    <div class="menu-card" data-category="${item.category}">
      <div class="card-top">
        <span class="card-tag ${item.tag === 'Bestseller' || item.tag === 'Top Bestseller' ? 'bestseller' : ''}">${item.tag}</span>
        <div class="card-img-wrap">
          <img src="${item.image}" alt="${item.name}" loading="lazy" class="dish-photo" onerror="this.src='./sources/broast.jpg'" />
        </div>
      </div>
      <div class="card-info">
        <div class="card-header-row">
          <h3 class="card-title">${item.name}</h3>
        </div>
        <div class="card-urdu-title urdu-text">${item.nameUrdu}</div>
        <p class="card-desc">${item.desc}</p>
      </div>
      <div class="card-bottom">
        <div class="price-wrap">
          <span class="sample-badge">Official Menu Price</span>
          <span class="price-val">Rs. ${item.price.toLocaleString()}</span>
        </div>
        <button type="button" class="btn-add-cart" onclick="addToCart('${item.id}')" aria-label="Add ${item.name} to cart">
          <span>+ Add</span>
        </button>
      </div>
    </div>
  `).join("");

  // Update View All / Expand button
  if (expandWrap) {
    if (totalCount <= 3) {
      expandWrap.innerHTML = "";
    } else if (!isMenuExpanded) {
      expandWrap.innerHTML = `
        <div class="menu-count-badge">
          <span>⭐ Showing Top 3 Featured Dishes</span>
          <span>•</span>
          <span>${remainingCount} More Dishes in Menu</span>
        </div>
        <button type="button" class="btn-menu-expand" onclick="toggleMenuExpand()" aria-expanded="false">
          <span>📖 View All Menu Items (${totalCount} Dishes) • تمام مینو دیکھیں</span>
          <span style="font-size: 1.25rem;">↓</span>
        </button>
      `;
    } else {
      expandWrap.innerHTML = `
        <div class="menu-count-badge">
          <span>✅ Showing All ${totalCount} Dishes</span>
        </div>
        <button type="button" class="btn-menu-expand expanded" onclick="toggleMenuExpand()" aria-expanded="true">
          <span>▲ Show Top 3 Only • کم دکھائیں</span>
        </button>
      `;
    }
  }
}

function toggleMenuExpand() {
  isMenuExpanded = !isMenuExpanded;
  renderMenu(currentMenuCategory);

  if (!isMenuExpanded) {
    const menuSection = document.getElementById("menu");
    menuSection?.scrollIntoView({ behavior: "smooth" });
  }
}

window.toggleMenuExpand = toggleMenuExpand;

// =============================================================================
// 5. DEALS TILT & QUICK ORDER
// =============================================================================
function initDealsTilt() {
  if (!window.matchMedia("(pointer: fine)").matches) return;

  const cards = document.querySelectorAll(".deal-card");
  cards.forEach(card => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -8;
      const rotateY = ((x - centerX) / centerX) * 8;
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)";
    });
  });
}

window.orderDealWhatsApp = function(dealName, dealPrice) {
  const dealItem = {
    id: `deal-${dealName.toLowerCase().replace(/\s+/g, '-')}`,
    name: `Special Deal: ${dealName}`,
    price: dealPrice
  };
  addToCart(dealItem.id, dealItem);
  openCartDrawer();
};

// =============================================================================
// 6. ANIMATED COUNTERS (WHY US SECTION)
// =============================================================================
function initWhyUsCounters() {
  const counterElements = document.querySelectorAll(".counter-number");
  if (!counterElements.length) return;

  let animated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        counterElements.forEach(el => {
          const target = parseFloat(el.getAttribute("data-target") || "0");
          const suffix = el.getAttribute("data-suffix") || "";
          const isDecimal = target % 1 !== 0;
          let current = 0;
          const duration = 1800;
          const stepTime = 30;
          const steps = duration / stepTime;
          const increment = target / steps;

          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              current = target;
              clearInterval(timer);
              el.textContent = isDecimal ? current.toFixed(1) + suffix : Math.round(current) + suffix;
            } else {
              el.textContent = isDecimal ? current.toFixed(1) + suffix : Math.round(current) + suffix;
            }
          }, stepTime);
        });
      }
    });
  }, { threshold: 0.35 });

  const whySection = document.getElementById("why-us");
  if (whySection) observer.observe(whySection);
}

// =============================================================================
// 7. REVIEWS CAROUSEL
// =============================================================================
function initReviewsCarousel() {
  const track = document.getElementById("reviewsTrack");
  const dotsContainer = document.getElementById("carouselDots");
  const prevBtn = document.getElementById("prevReviewBtn");
  const nextBtn = document.getElementById("nextReviewBtn");

  if (!track) return;

  track.innerHTML = SAMPLE_REVIEWS.map(r => `
    <div class="review-slide">
      <div class="review-card">
        <div class="quote-icon">“</div>
        <div class="review-stars">★★★★★</div>
        <p class="review-text">"${r.text}"</p>
        <div class="reviewer-name">${r.name}</div>
        <div class="reviewer-location">${r.location}</div>
        <div class="sample-review-notice">Customer Review • Sahiwal Broast Kamalia</div>
      </div>
    </div>
  `).join("");

  if (dotsContainer) {
    dotsContainer.innerHTML = SAMPLE_REVIEWS.map((_, i) => `
      <span class="carousel-dot ${i === 0 ? 'active' : ''}" data-index="${i}"></span>
    `).join("");
  }

  let currentIndex = 0;
  const totalSlides = SAMPLE_REVIEWS.length;
  let autoplayInterval;

  function goToSlide(index) {
    currentIndex = (index + totalSlides) % totalSlides;
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
    const dots = document.querySelectorAll(".carousel-dot");
    dots.forEach((dot, idx) => {
      dot.classList.toggle("active", idx === currentIndex);
    });
  }

  function startAutoplay() {
    stopAutoplay();
    autoplayInterval = setInterval(() => {
      goToSlide(currentIndex + 1);
    }, 5500);
  }

  function stopAutoplay() {
    if (autoplayInterval) clearInterval(autoplayInterval);
  }

  prevBtn?.addEventListener("click", () => {
    goToSlide(currentIndex - 1);
    startAutoplay();
  });

  nextBtn?.addEventListener("click", () => {
    goToSlide(currentIndex + 1);
    startAutoplay();
  });

  document.querySelectorAll(".carousel-dot").forEach(dot => {
    dot.addEventListener("click", () => {
      const idx = parseInt(dot.getAttribute("data-index") || "0", 10);
      goToSlide(idx);
      startAutoplay();
    });
  });

  const carouselWrap = document.querySelector(".reviews-carousel-wrap");
  carouselWrap?.addEventListener("mouseenter", stopAutoplay);
  carouselWrap?.addEventListener("mouseleave", startAutoplay);
  carouselWrap?.addEventListener("touchstart", stopAutoplay, { passive: true });
  carouselWrap?.addEventListener("touchend", startAutoplay, { passive: true });

  startAutoplay();
}

// =============================================================================
// 8. CART DRAWER & OFFICIAL WHATSAPP ORDER GENERATOR
// =============================================================================
function initCartDrawer() {
  const toggleBtns = document.querySelectorAll(".cart-toggle-btn");
  const closeBtn = document.querySelector(".btn-close-cart");
  const drawer = document.getElementById("cartDrawer");
  const backdrop = document.getElementById("cartBackdrop");
  const sendOrderBtn = document.getElementById("sendWhatsAppOrderBtn");

  toggleBtns.forEach(btn => {
    btn.addEventListener("click", openCartDrawer);
  });

  closeBtn?.addEventListener("click", closeCartDrawer);
  backdrop?.addEventListener("click", closeCartDrawer);

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && drawer?.classList.contains("open")) {
      closeCartDrawer();
    }
  });

  sendOrderBtn?.addEventListener("click", handleWhatsAppOrder);
}

function openCartDrawer() {
  const drawer = document.getElementById("cartDrawer");
  const backdrop = document.getElementById("cartBackdrop");
  drawer?.classList.add("open");
  backdrop?.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeCartDrawer() {
  const drawer = document.getElementById("cartDrawer");
  const backdrop = document.getElementById("cartBackdrop");
  drawer?.classList.remove("open");
  backdrop?.classList.remove("open");
  document.body.style.overflow = "auto";
}

function updateCartUI() {
  const itemsContainer = document.getElementById("cartItemsList");
  const countBadge = document.querySelectorAll(".cart-badge");
  const totalVal = document.getElementById("cartTotalVal");
  const emptyState = document.getElementById("cartEmptyState");
  const orderFooter = document.getElementById("cartFooter");

  const total = calculateTotal();
  const count = calculateCount();

  countBadge.forEach(badge => {
    badge.textContent = count;
    badge.style.display = count > 0 ? "inline-flex" : "none";
  });

  if (!itemsContainer) return;

  if (cart.length === 0) {
    itemsContainer.innerHTML = "";
    if (emptyState) emptyState.style.display = "block";
    if (orderFooter) orderFooter.style.display = "none";
    if (totalVal) totalVal.textContent = "Rs. 0";
    return;
  }

  if (emptyState) emptyState.style.display = "none";
  if (orderFooter) orderFooter.style.display = "block";

  itemsContainer.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">Rs. ${item.price.toLocaleString()} each</div>
      </div>
      <div class="cart-qty-ctrls">
        <button type="button" class="btn-qty" onclick="updateItemQty('${item.id}', -1)" aria-label="Decrease quantity">-</button>
        <span class="cart-qty-num">${item.qty}</span>
        <button type="button" class="btn-qty" onclick="updateItemQty('${item.id}', 1)" aria-label="Increase quantity">+</button>
      </div>
    </div>
  `).join("");

  if (totalVal) {
    totalVal.textContent = `Rs. ${total.toLocaleString()}`;
  }
}

// WhatsApp Order Payload Builder
function handleWhatsAppOrder() {
  if (cart.length === 0) {
    showToast("Please select items from the menu first! 🍗");
    return;
  }

  const nameInput = document.getElementById("customerName")?.value.trim() || "Valued Customer";
  const typeSelect = document.getElementById("orderType")?.value || "Home Delivery";
  const addressInput = document.getElementById("customerAddress")?.value.trim() || "Kamalia Area";
  const notesInput = document.getElementById("orderNotes")?.value.trim() || "";

  const subtotal = calculateTotal();
  const isDelivery = typeSelect.includes("Delivery");
  const packingFee = isDelivery ? PARCEL_BOX_FEE : 0;
  const grandTotal = subtotal + packingFee;

  let message = `🔥 *ORDER - ${RESTAURANT_NAME.toUpperCase()}* 🔥\n`;
  message += `━━━━━━━━━━━━━━━━━━━━\n`;
  message += `👤 *Customer Name:* ${nameInput}\n`;
  message += `🛵 *Order Type:* ${typeSelect}\n`;
  message += `📍 *Delivery Address:* ${addressInput}\n`;
  if (notesInput) {
    message += `📝 *Special Instructions:* ${notesInput}\n`;
  }
  message += `━━━━━━━━━━━━━━━━━━━━\n`;
  message += `📋 *ORDERED ITEMS:*\n`;

  cart.forEach((item, index) => {
    const itemTotal = item.price * item.qty;
    message += `${index + 1}. ${item.qty}x ${item.name} = Rs. ${itemTotal.toLocaleString()}\n`;
  });

  message += `━━━━━━━━━━━━━━━━━━━━\n`;
  message += `💵 *Subtotal:* Rs. ${subtotal.toLocaleString()}\n`;
  if (packingFee > 0) {
    message += `📦 *Parcel Packing:* Rs. ${packingFee} (ڈبہ پیکنگ)\n`;
  }
  message += `💰 *TOTAL ESTIMATE: Rs. ${grandTotal.toLocaleString()}*\n`;
  message += `⏰ *Timings:* 10:00 AM to 1:00 AM\n`;
  message += `📞 *Delivery Lines:* 0300-6914217 | 0332-7214217\n`;
  message += `━━━━━━━━━━━━━━━━━━━━\n`;
  message += `Please confirm my order and share delivery ETA. Thank you!`;

  const encodedUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(encodedUrl, "_blank");
}

// =============================================================================
// 9. WHATSAPP & CONTACT BUTTONS
// =============================================================================
function initWhatsAppLinks() {
  const floatingBtn = document.getElementById("floatingWhatsAppBtn");
  if (floatingBtn) {
    const defaultMsg = encodeURIComponent(`Assalam o Alaikum! I would like to order from Sahiwal Broast Kamalia menu.`);
    floatingBtn.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${defaultMsg}`;
  }

  const mapsBtns = document.querySelectorAll(".btn-maps-link");
  mapsBtns.forEach(btn => {
    btn.setAttribute("href", GOOGLE_MAPS_URL);
    btn.setAttribute("target", "_blank");
    btn.setAttribute("rel", "noopener noreferrer");
  });
}

function initContactForm() {
  const form = document.getElementById("inquiryForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("inquiryName")?.value.trim() || "Customer";
    const phone = document.getElementById("inquiryPhone")?.value.trim() || "";
    const msg = document.getElementById("inquiryMessage")?.value.trim() || "";

    let text = `Salam Sahiwal Broast Kamalia,\n`;
    text += `My name is ${name}${phone ? ` (${phone})` : ""}.\n`;
    text += `Inquiry: ${msg}\n\n(Sent from Sahiwal Broast Kamalia website)`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
    showToast("Opening WhatsApp... 💬");
  });
}

// =============================================================================
// 10. GSAP ANIMATIONS
// =============================================================================
function initGSAPAnimations() {
  if (typeof gsap === "undefined") return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  try {
    if (typeof ScrollTrigger !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);

      gsap.utils.toArray(".section-header").forEach((header) => {
        gsap.from(header, {
          scrollTrigger: {
            trigger: header,
            start: "top 85%",
            toggleActions: "play none none none"
          },
          opacity: 0,
          y: 35,
          duration: 0.9,
          ease: "power2.out"
        });
      });

      gsap.utils.toArray(".deals-grid .deal-card").forEach((card, index) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 88%",
            toggleActions: "play none none none"
          },
          opacity: 0,
          y: 45,
          duration: 0.8,
          delay: index * 0.15,
          ease: "back.out(1.2)"
        });
      });

      gsap.utils.toArray(".counters-grid .counter-card").forEach((card, index) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 88%",
            toggleActions: "play none none none"
          },
          opacity: 0,
          scale: 0.9,
          y: 30,
          duration: 0.7,
          delay: index * 0.12,
          ease: "power2.out"
        });
      });
    }

    const heroTl = gsap.timeline({ delay: 0.4 });
    heroTl.from(".hero-badge-row", { opacity: 0, y: -20, duration: 0.6 })
          .from(".hero-title", { opacity: 0, y: 30, duration: 0.8, ease: "power3.out" }, "-=0.3")
          .from(".hero-tagline, .hero-urdu-tagline", { opacity: 0, y: 20, duration: 0.6 }, "-=0.4")
          .from(".hero-desc", { opacity: 0, y: 20, duration: 0.6 }, "-=0.4")
          .from(".hero-cta-group", { opacity: 0, scale: 0.95, duration: 0.5 }, "-=0.3")
          .from(".hero-main-illustration", { opacity: 0, scale: 0.8, duration: 0.9, ease: "back.out(1.4)" }, "-=0.6")
          .from(".floating-sat-item", { opacity: 0, scale: 0.5, stagger: 0.15, duration: 0.7, ease: "back.out(1.5)" }, "-=0.5")
          .from(".rotating-badge-wrap", { opacity: 0, rotation: -90, duration: 0.8 }, "-=0.5");

  } catch (err) {
    console.warn("GSAP animation init error:", err);
  }
}

// =============================================================================
// TOAST FEEDBACK
// =============================================================================
let toastTimeout;
function showToast(message) {
  let toast = document.getElementById("toastMsg");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toastMsg";
    toast.className = "toast-msg";
    document.body.appendChild(toast);
  }

  toast.innerHTML = `<span>🍗</span> <span>${message}</span>`;
  toast.classList.add("show");

  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove("show");
  }, 2800);
}

// Global exposure
window.addToCart = addToCart;
window.updateItemQty = updateItemQty;
window.clearCart = clearCart;
window.openCartDrawer = openCartDrawer;
window.closeCartDrawer = closeCartDrawer;
