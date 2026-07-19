/* ============================================
   TOPO GIGIO - i18n (FR default, EN / ES / DE)
   La version FR est dans le HTML (fallback + SEO).
   ============================================ */
(function () {
  "use strict";

  var I18N = {
    en: {
      // Nav
      nav_resto: "The Restaurant", nav_carte: "Menu", nav_horaires: "Hours", nav_trouver: "Find Us",
      // Hero
      hero_tagline: "Handmade pizzas (tomato &amp; cream base), gourmet burgers,<br>kebabs, tacos and much more. Takeaway, in Gémozac.",
      hero_cta1: "View menu", hero_cta2: "Order", hero_badge: "Takeaway, 6 days a week",
      // About
      about_eyebrow: "The Restaurant",
      about_title: "Welcome to <em>Topo Gigio</em>",
      about_p1: "In Gémozac, Topo Gigio is the home of <strong>real handmade pizza</strong>, tomato or cream base, made on the spot, generous and tasty. But not only that: burgers, kebabs, tacos, XXL sandwiches, fresh salads, tapas and homemade desserts.",
      about_p2: "Everything is fresh, made to order, and takeaway. From the Margherita to the signature <em>Topo Gigio</em>, there's something for every taste and appetite.",
      about_f1: "Pizzas 25 &amp; 33 cm", about_f2: "Takeaway", about_f3: "Open 6 days a week",
      about_card_title: "At a glance",
      about_l_cmd: "📞 Order", about_l_addr: "📍 Address", about_l_midi: "🕐 Lunch", about_l_soir: "🌙 Evening",
      about_l_ferme: "🚫 Closed", about_v_ferme: "Mon + Sat &amp; Sun lunch", about_l_pay: "💳 Payment", about_v_pay: "Card, contactless, meal-voucher card",
      about_cta: "Call to order",
      // Menu
      menu_eyebrow: "Our Menu", menu_title: "The Topo Gigio Menu",
      menu_subtitle: "Everything is takeaway. Extras and sauces at the bottom of the page.",
      tab_pizzas: "🍕 Pizzas", tab_tacos: "🌯 Tacos", tab_burgers: "🍔 Burgers", tab_sandwichs: "🥙 Sandwiches",
      tab_paninis: "🥪 Paninis", tab_assiettes: "🍽️ Plates &amp; Tapas", tab_salades: "🥗 Salads",
      tab_barquettes: "🍗 Snacks &amp; Fries", tab_desserts: "🍰 Desserts", tab_enfant: "🧒 Kids Menu",
      pizza_note: "All our pizzas in <strong>25 cm</strong> or <strong>33 cm</strong>. Choose the base below",
      sub_tomate: "Tomato Base", sub_creme: "Cream Base", legend_name: "Name &amp; topping",
      badge_speciale: "⭐ Signature", badge_44: "🔥 4 meats + 4 cheeses",
      // Pizza descriptions (tomato)
      d_margherita: "Tomato, olives",
      d_reine: "Ham, mushrooms, olives",
      d_calzone: "Ham, egg",
      d_royale: "Ham, bacon, mushrooms, onions, egg",
      d_zola: "Chorizo, gorgonzola, egg",
      d_napolitaine: "Anchovies, capers, olives, onions, fresh tomatoes",
      d_parmesan: "Cured ham, parmesan, olives",
      d_carni: "Cooked ham, cured ham, bacon, chorizo, ground beef, merguez, kebab meat, chicken, onions",
      d_vegetarienne: "Peppers, onions, mushrooms, capers, olives",
      d_mexicaine: "Chorizo, peppers, onions",
      d_barbecue: "Bacon, ground beef, olives, onions, barbecue sauce",
      d_topogigio: "Bacon, ground beef, mushrooms, Serrano ham, burger cheese",
      d_bolognaise: "Ground beef, pesto, onions, egg",
      d_orientale: "Merguez, peppers, olives, onions",
      // Pizza descriptions (cream)
      d_quatre: "Kebab, cured ham, cooked ham, chicken, 4 cheeses",
      d_kebab: "Kebab meat, peppers, onions, capers, olives",
      d_tartiflette: "Bacon, potatoes, reblochon cheese, onions",
      d_curry: "Curry chicken, peppers, onions, olives",
      d_raclette: "Ham, potatoes, raclette cheese, onions",
      d_nordique: "Smoked salmon, onions, capers, olives",
      d_pesto: "Chicken, burrata cheese, mushrooms, onions",
      d_carbonara: "Bacon, egg, parmesan",
      d_4fromages: "Mozzarella, goat cheese, raclette, gorgonzola",
      d_chevremiel: "Goat cheese, honey, walnuts",
      d_parisienne: "Cooked ham, potatoes, camembert",
      d_pburger: "Ground beef, chorizo, cheddar, pickles, onions, burger sauce",
      d_expresse: "Kebab meat, burrata cheese, pesto",
      note_perso: "Build Your Own: create your own pizza. Extra topping priced per item, just ask!",
      // Tacos
      tacos_note: "Your choice: Kebab, Chicken, Steak, Tenders, Nuggets, Vegetarian, Cordon Bleu, Mexican «&nbsp;spicy&nbsp;» (Tex-Mex chicken + samurai sauce) or Chakchouka (kebab, peppers, onions, egg, tomatoes)",
      tacos_garn: "Fillings: salad, tomatoes, onions, fries, cheddar sauce. Extra goat cheese, raclette or cheddar: €2.",
      // Formule labels
      fc_simple: "Single", fc_double: "Double", fc_triple: "Triple",
      fc_seul: "On its own", fc_frites: "+ Fries", fc_boisson: "+ Drink",
      fc_panini: "The Panini", fc_enfant: "Kids Menu",
      // Burgers
      burg_classiques: "The Classics", burg_classiques_sub: "Beef Burger or Chicken Burger",
      burg_speciaux: "The Specials", burg_speciaux_sub: "Beef Rosti · Beef Bacon · Beef Raclette · Chicken Rosti · Chicken Goat-cheese · Chicken Raclette",
      // Sandwiches
      sand_title: "Sandwiches (bread or wrap)", sand_garn: "Fillings: salad, tomatoes, onions.",
      sand_grands: "The Big Sandwiches", tag_new: "New", sub_700: "approx. 700g", w_viandes: "Meats",
      d_sam: "Kebab meat + beef patty + cheddar + raw veggies, sauce of your choice",
      n_sam: "+ Fries €13 &nbsp;·&nbsp; + Drink €14.5",
      d_sam3: "Steak + kebab + merguez + cheddar",
      n_sam3: "+ Fries €15 &nbsp;·&nbsp; + Drink €17.5 &nbsp;·&nbsp; Extra €1",
      d_joe: "Kebab + steak + Tex-Mex chicken + peppers + onions + cheddar",
      n_joe: "+ Fries €15 &nbsp;·&nbsp; + Drink €17.5",
      d_duo: "Beef patty + crispy chicken + crème fraîche + sliced emmental + salad",
      n_duo: "+ Fries €13 &nbsp;·&nbsp; + Drink €14.5",
      d_royal: "Merguez + beef patty + crispy chicken + egg + raclette + sauce",
      n_royal: "+ Fries €15 &nbsp;·&nbsp; + Drink €16.5",
      d_crousty: "Soft rice + crispy fried chicken and sauce (tray)",
      n_crousty: "+ Drink €10",
      // Paninis
      pan_note: "Cheese panini, your choice: Salmon, Kebab, BBQ Chicken, Curry Chicken, Steak or Cooked ham",
      pan_supp: "Extras €2: kebab, goat cheese, cheddar, egg, bacon, bacon bits, smoked duck, nuggets, chicken, merguez, reblochon, raclette, chorizo, roquefort, feta.",
      // Plates & Tapas
      ass_title: "The Plates", i_ass1: "1-Meat Plate", d_ass1: "Kebab meat or beef patty + fries + salad",
      i_ass3: "3-Meat Plate", d_ass3: "Beef patty, kebab, merguez + fries + salad",
      ass_supp: "Extra meat €3 &nbsp;·&nbsp; cheddar, egg or goat cheese €2.",
      tapas_title: "The Tapas", tapas_list: "Calamari · Onion rings · Mozzarella sticks · Cheese bites · Mini spring rolls · Camembert bites",
      i_barq_choix: "Tray, your choice", d_tapas_unit: "Tapas by the item. Small €4, Large €6",
      i_mixtapas: "Mixed Tapas Plate", d_mixtapas: "Calamari, onion rings, cheese bites, nuggets, chicken wings, mini spring rolls, with sauces",
      // Salads
      sal_note: "Salad on its own €6 &nbsp;·&nbsp; + Fries €8 &nbsp;·&nbsp; + Drink €9.5",
      i_sal_saumon: "Salmon Salad", i_sal_poulet: "Chicken Salad", i_sal_thon: "Tuna Salad",
      i_sal_ital: "Italian Salad", d_sal_ital: "Cured ham + parmesan",
      i_sal_verte: "Simple Green Salad", d_sal_verte: "Lettuce, tomatoes, onions",
      // Snacks & Fries
      barq_note: "Nuggets, tenders, chicken wings, kebab and fries, in a tray, to share!",
      pc3: "3 pcs", pc4: "4 pcs", pc6: "6 pcs", pc9: "9 pcs", pc12: "12 pcs",
      size_p: "Small", size_g: "Large", i_wings: "Chicken Wings", i_frites: "Fries", i_frites_cheddar: "Cheddar Fries",
      // Desserts
      i_gaufre: "Waffle", d_gaufre: "Nutella or sugar", i_moelleux: "Chocolate Fondant", i_sundae: "Vanilla &amp; Caramel Sundae",
      // Kids
      enf_note: "Your choice: Burger + fries · Nuggets + fries · Kebab meat + fries · Chicken tacos + fries",
      // Sauces
      sauces_title: "Our Sauces <span class=\"item-sub\">the pot €0.20</span>",
      order_cta: "Ready to order?", new_label: "✨ What's New",
      rev_eyebrow: "Customer reviews", rev_title: "They love Topo Gigio", rev_count: "248 Google reviews", rev_all: "See all reviews on Google", rev_src: "Google review",
      fav_label: "🏆 Our favourite review",
      fav_quote: "\"I order a 25 cm pizza and I get a 23.5 cm pizza… I'm someone who likes value for money, and this is not it!\"",
      fav_author: "A Google review, builder's tape measure in hand. Genuine.",
      fav_reply_tag: "Our reply",
      fav_reply: "And you know what? It was true. We've bought a tape measure of our own since then. The dough still does whatever it likes. We aim for 25 cm, promise. And the missing 1.5 cm, we make up for in cheese. 🧀",
      // Hours
      hor_eyebrow: "Open 6 days a week", hor_title: "Opening Hours",
      hor_subtitle: "Closed on Mondays, as well as Saturday &amp; Sunday lunchtimes",
      day_lun: "Monday", day_mar: "Tuesday", day_mer: "Wednesday", day_jeu: "Thursday", day_ven: "Friday", day_sam: "Saturday", day_dim: "Sunday",
      closed: "Closed", midi_ferme: "(lunch closed)",
      // Localisation
      loc_subtitle: "17260 Gémozac, takeaway", loc_btn1: "Directions", loc_btn2: "Call",
      // Contact
      contact_eyebrow: "Contact", contact_title: "Order takeaway",
      contact_subtitle: "Order by phone, we prepare it, you pick it up.",
      c_phone: "Phone", c_addr: "Address", c_hours_closed: "Closed Mon &amp; weekend lunch",
      pay_title: "Accepted payment methods", pay_cash: "Cash", pay_contactless: "Contactless", pay_debit: "Debit card", pay_trcard: "Meal-voucher card",
      footer_rights: "Takeaway in Gémozac. All rights reserved."
    },

    es: {
      nav_resto: "El Restaurante", nav_carte: "La Carta", nav_horaires: "Horarios", nav_trouver: "Cómo llegar",
      hero_tagline: "Pizzas artesanales (base tomate y crema), hamburguesas gourmet,<br>kebabs, tacos y mucho más. Para llevar, en Gémozac.",
      hero_cta1: "Ver la carta", hero_cta2: "Pedir", hero_badge: "Para llevar, 6 días a la semana",
      about_eyebrow: "El Restaurante",
      about_title: "Bienvenido a <em>Topo Gigio</em>",
      about_p1: "En Gémozac, Topo Gigio es la casa de la <strong>auténtica pizza artesanal</strong>, base tomate o crema, hecha al momento, generosa y sabrosa. Pero no solo eso: hamburguesas, kebabs, tacos, sándwiches XXL, ensaladas frescas, tapas y postres caseros.",
      about_p2: "Todo es fresco, hecho al momento y para llevar. De la Margherita a la especial <em>Topo Gigio</em>, hay para todos los gustos y apetitos.",
      about_f1: "Pizzas 25 y 33 cm", about_f2: "Para llevar", about_f3: "Abierto 6 días/semana",
      about_card_title: "De un vistazo",
      about_l_cmd: "📞 Pedidos", about_l_addr: "📍 Dirección", about_l_midi: "🕐 Mediodía", about_l_soir: "🌙 Noche",
      about_l_ferme: "🚫 Cerrado", about_v_ferme: "Lun + sáb. y dom. mediodía", about_l_pay: "💳 Pago", about_v_pay: "Tarjeta, contactless, tarjeta ticket restaurante",
      about_cta: "Llamar para pedir",
      menu_eyebrow: "Nuestra Carta", menu_title: "La Carta Topo Gigio",
      menu_subtitle: "Todo para llevar. Suplementos y salsas al final de la página.",
      tab_pizzas: "🍕 Pizzas", tab_tacos: "🌯 Tacos", tab_burgers: "🍔 Hamburguesas", tab_sandwichs: "🥙 Sándwiches",
      tab_paninis: "🥪 Paninis", tab_assiettes: "🍽️ Platos y Tapas", tab_salades: "🥗 Ensaladas",
      tab_barquettes: "🍗 Snacks y Patatas", tab_desserts: "🍰 Postres", tab_enfant: "🧒 Menú Infantil",
      pizza_note: "Todas nuestras pizzas en <strong>25 cm</strong> o <strong>33 cm</strong>. Elige la base abajo",
      sub_tomate: "Base Tomate", sub_creme: "Base Crema", legend_name: "Nombre e ingredientes",
      badge_speciale: "⭐ La especial", badge_44: "🔥 4 carnes + 4 quesos",
      d_margherita: "Tomate, aceitunas",
      d_reine: "Jamón, champiñones, aceitunas",
      d_calzone: "Jamón, huevo",
      d_royale: "Jamón, bacon, champiñones, cebolla, huevo",
      d_zola: "Chorizo, gorgonzola, huevo",
      d_napolitaine: "Anchoas, alcaparras, aceitunas, cebolla, tomate fresco",
      d_parmesan: "Jamón serrano, parmesano, aceitunas",
      d_carni: "Jamón cocido, jamón serrano, bacon, chorizo, carne picada, merguez, carne kebab, pollo, cebolla",
      d_vegetarienne: "Pimientos, cebolla, champiñones, alcaparras, aceitunas",
      d_mexicaine: "Chorizo, pimientos, cebolla",
      d_barbecue: "Bacon, carne picada, aceitunas, cebolla, salsa barbacoa",
      d_topogigio: "Bacon, carne picada, champiñones, jamón serrano, queso para hamburguesa",
      d_bolognaise: "Carne picada, pesto, cebolla, huevo",
      d_orientale: "Merguez, pimientos, aceitunas, cebolla",
      d_quatre: "Kebab, jamón serrano, jamón cocido, pollo, 4 quesos",
      d_kebab: "Carne kebab, pimientos, cebolla, alcaparras, aceitunas",
      d_tartiflette: "Bacon, patatas, queso reblochon, cebolla",
      d_curry: "Pollo al curry, pimientos, cebolla, aceitunas",
      d_raclette: "Jamón, patatas, queso raclette, cebolla",
      d_nordique: "Salmón ahumado, cebolla, alcaparras, aceitunas",
      d_pesto: "Pollo, queso burrata, champiñones, cebolla",
      d_carbonara: "Bacon, huevo, parmesano",
      d_4fromages: "Mozzarella, queso de cabra, raclette, gorgonzola",
      d_chevremiel: "Queso de cabra, miel, nueces",
      d_parisienne: "Jamón cocido, patatas, camembert",
      d_pburger: "Carne picada, chorizo, cheddar, pepinillos, cebolla, salsa burger",
      d_expresse: "Carne kebab, queso burrata, pesto",
      note_perso: "A tu gusto: crea tu propia pizza. Ingrediente extra según el tipo, ¡pregúntanos!",
      tacos_note: "A elegir: Kebab, Pollo, Ternera, Tenders, Nuggets, Vegetariano, Cordon Bleu, Mexicano «&nbsp;picante&nbsp;» (pollo Tex-Mex + salsa samurái) o Chakchouka (kebab, pimientos, cebolla, huevo, tomate)",
      tacos_garn: "Ingredientes: ensalada, tomate, cebolla, patatas, salsa cheddar. Extra queso de cabra, raclette o cheddar: 2€.",
      fc_simple: "Sencillo", fc_double: "Doble", fc_triple: "Triple",
      fc_seul: "Solo", fc_frites: "+ Patatas", fc_boisson: "+ Bebida",
      fc_panini: "El Panini", fc_enfant: "Menú Infantil",
      burg_classiques: "Los Clásicos", burg_classiques_sub: "Hamburguesa de ternera o de pollo",
      burg_speciaux: "Los Especiales", burg_speciaux_sub: "Ternera Rosti · Ternera Bacon · Ternera Raclette · Pollo Rosti · Pollo Cabra · Pollo Raclette",
      sand_title: "Sándwiches (pan o durum)", sand_garn: "Ingredientes: ensalada, tomate, cebolla.",
      sand_grands: "Los Grandes Sándwiches", tag_new: "Nuevo", sub_700: "aprox. 700g", w_viandes: "Carnes",
      d_sam: "Carne kebab + hamburguesa + cheddar + verduras, salsa a elegir",
      n_sam: "+ Patatas 13€ &nbsp;·&nbsp; + Bebida 14,5€",
      d_sam3: "Ternera + kebab + merguez + cheddar",
      n_sam3: "+ Patatas 15€ &nbsp;·&nbsp; + Bebida 17,5€ &nbsp;·&nbsp; Extra 1€",
      d_joe: "Kebab + ternera + pollo Tex-Mex + pimientos + cebolla + cheddar",
      n_joe: "+ Patatas 15€ &nbsp;·&nbsp; + Bebida 17,5€",
      d_duo: "Hamburguesa + pollo crujiente + crema fresca + emmental en lonchas + ensalada",
      n_duo: "+ Patatas 13€ &nbsp;·&nbsp; + Bebida 14,5€",
      d_royal: "Merguez + hamburguesa + pollo crujiente + huevo + raclette + salsa",
      n_royal: "+ Patatas 15€ &nbsp;·&nbsp; + Bebida 16,5€",
      d_crousty: "Arroz meloso + pollo frito crujiente y salsa (ración)",
      n_crousty: "+ Bebida 10€",
      pan_note: "Panini con queso a elegir: Salmón, Kebab, Pollo BBQ, Pollo al curry, Ternera o Jamón cocido",
      pan_supp: "Extras 2€: kebab, queso de cabra, cheddar, huevo, bacon, taquitos de bacon, magret de pato, nuggets, pollo, merguez, reblochon, raclette, chorizo, roquefort, feta.",
      ass_title: "Los Platos", i_ass1: "Plato 1 Carne", d_ass1: "Carne kebab o hamburguesa + patatas + ensalada",
      i_ass3: "Plato 3 Carnes", d_ass3: "Hamburguesa, kebab, merguez + patatas + ensalada",
      ass_supp: "Extra carne 3€ &nbsp;·&nbsp; cheddar, huevo o queso de cabra 2€.",
      tapas_title: "Las Tapas", tapas_list: "Calamares · Aros de cebolla · Palitos de mozzarella · Bocaditos de queso · Mini rollitos · Bocaditos de camembert",
      i_barq_choix: "Ración a elegir", d_tapas_unit: "Tapas por unidad. Pequeña 4€, Grande 6€",
      i_mixtapas: "Plato Mixto de Tapas", d_mixtapas: "Calamares, aros de cebolla, bocaditos de queso, nuggets, alitas de pollo, mini rollitos, con salsas",
      sal_note: "Ensalada sola 6€ &nbsp;·&nbsp; + Patatas 8€ &nbsp;·&nbsp; + Bebida 9,5€",
      i_sal_saumon: "Ensalada de Salmón", i_sal_poulet: "Ensalada de Pollo", i_sal_thon: "Ensalada de Atún",
      i_sal_ital: "Ensalada Italiana", d_sal_ital: "Jamón serrano + parmesano",
      i_sal_verte: "Ensalada Verde Simple", d_sal_verte: "Lechuga, tomate, cebolla",
      barq_note: "Nuggets, tenders, alitas de pollo, kebab y patatas, en ración, ¡para picar!",
      pc3: "3 uds", pc4: "4 uds", pc6: "6 uds", pc9: "9 uds", pc12: "12 uds",
      size_p: "Pequeña", size_g: "Grande", i_wings: "Alitas de Pollo", i_frites: "Patatas", i_frites_cheddar: "Patatas con Cheddar",
      i_gaufre: "Gofre", d_gaufre: "Nutella o azúcar", i_moelleux: "Coulant de Chocolate", i_sundae: "Sundae Vainilla y Caramelo",
      enf_note: "A elegir: Hamburguesa + patatas · Nuggets + patatas · Carne kebab + patatas · Tacos de pollo + patatas",
      sauces_title: "Nuestras Salsas <span class=\"item-sub\">el bote 0,20€</span>",
      order_cta: "¿Listo para pedir?", new_label: "✨ Novedades",
      rev_eyebrow: "Opiniones", rev_title: "Les encanta Topo Gigio", rev_count: "248 reseñas de Google", rev_all: "Ver todas las opiniones en Google", rev_src: "Reseña de Google",
      fav_label: "🏆 Nuestra reseña favorita",
      fav_quote: "«Pido una pizza de 25 cm y me dan una de 23,5 cm… soy de los que quieren que su dinero valga la pena, ¡y aquí no es el caso!»",
      fav_author: "Una reseña de Google, cinta métrica de obra en mano. Auténtica.",
      fav_reply_tag: "Nuestra respuesta",
      fav_reply: "¿Y sabéis qué? Era verdad. Desde entonces nos hemos comprado una cinta métrica nosotros también. La masa sigue haciendo lo que quiere. Apuntamos a 25 cm, prometido. Y los 1,5 cm que faltan los compensamos en queso. 🧀",
      hor_eyebrow: "Abierto 6 días/semana", hor_title: "Horario de apertura",
      hor_subtitle: "Cerrado los lunes, y sábados y domingos al mediodía",
      day_lun: "Lunes", day_mar: "Martes", day_mer: "Miércoles", day_jeu: "Jueves", day_ven: "Viernes", day_sam: "Sábado", day_dim: "Domingo",
      closed: "Cerrado", midi_ferme: "(mediodía cerrado)",
      loc_subtitle: "17260 Gémozac, para llevar", loc_btn1: "Cómo llegar", loc_btn2: "Llamar",
      contact_eyebrow: "Contacto", contact_title: "Pide para llevar",
      contact_subtitle: "Pide por teléfono, lo preparamos, lo recoges.",
      c_phone: "Teléfono", c_addr: "Dirección", c_hours_closed: "Cerrado lun. y fin de semana mediodía",
      pay_title: "Métodos de pago aceptados", pay_cash: "Efectivo", pay_contactless: "Contactless", pay_debit: "Tarjeta de débito", pay_trcard: "Tarjeta ticket restaurante",
      footer_rights: "Para llevar en Gémozac. Todos los derechos reservados."
    },

    de: {
      nav_resto: "Das Restaurant", nav_carte: "Speisekarte", nav_horaires: "Öffnungszeiten", nav_trouver: "Anfahrt",
      hero_tagline: "Hausgemachte Pizzen (Tomaten- &amp; Sahnebasis), Gourmet-Burger,<br>Kebabs, Tacos und vieles mehr. Zum Mitnehmen, in Gémozac.",
      hero_cta1: "Zur Karte", hero_cta2: "Bestellen", hero_badge: "Zum Mitnehmen, 6 Tage/Woche",
      about_eyebrow: "Das Restaurant",
      about_title: "Willkommen bei <em>Topo Gigio</em>",
      about_p1: "In Gémozac ist Topo Gigio die Heimat der <strong>echten hausgemachten Pizza</strong>, Tomaten- oder Sahnebasis, frisch zubereitet, großzügig und lecker. Aber nicht nur das: Burger, Kebabs, Tacos, XXL-Sandwiches, frische Salate, Tapas und hausgemachte Desserts.",
      about_p2: "Alles frisch, auf Bestellung zubereitet und zum Mitnehmen. Von der Margherita bis zur Spezialität <em>Topo Gigio</em> ist für jeden Geschmack und Appetit etwas dabei.",
      about_f1: "Pizzen 25 &amp; 33 cm", about_f2: "Zum Mitnehmen", about_f3: "6 Tage/Woche geöffnet",
      about_card_title: "Auf einen Blick",
      about_l_cmd: "📞 Bestellung", about_l_addr: "📍 Adresse", about_l_midi: "🕐 Mittag", about_l_soir: "🌙 Abend",
      about_l_ferme: "🚫 Geschlossen", about_v_ferme: "Mo + Sa & So mittags", about_l_pay: "💳 Zahlung", about_v_pay: "Karte, kontaktlos, Essensgutschein-Karte",
      about_cta: "Zum Bestellen anrufen",
      menu_eyebrow: "Unsere Karte", menu_title: "Die Topo-Gigio-Karte",
      menu_subtitle: "Alles zum Mitnehmen. Extras und Saucen am Seitenende.",
      tab_pizzas: "🍕 Pizzen", tab_tacos: "🌯 Tacos", tab_burgers: "🍔 Burger", tab_sandwichs: "🥙 Sandwiches",
      tab_paninis: "🥪 Paninis", tab_assiettes: "🍽️ Teller &amp; Tapas", tab_salades: "🥗 Salate",
      tab_barquettes: "🍗 Snacks &amp; Pommes", tab_desserts: "🍰 Nachtisch", tab_enfant: "🧒 Kindermenü",
      pizza_note: "Alle Pizzen in <strong>25 cm</strong> oder <strong>33 cm</strong>. Wählen Sie unten die Basis",
      sub_tomate: "Tomatenbasis", sub_creme: "Sahnebasis", legend_name: "Name &amp; Belag",
      badge_speciale: "⭐ Die Spezialität", badge_44: "🔥 4 Fleisch + 4 Käse",
      d_margherita: "Tomate, Oliven",
      d_reine: "Schinken, Champignons, Oliven",
      d_calzone: "Schinken, Ei",
      d_royale: "Schinken, Speck, Champignons, Zwiebeln, Ei",
      d_zola: "Chorizo, Gorgonzola, Ei",
      d_napolitaine: "Sardellen, Kapern, Oliven, Zwiebeln, frische Tomaten",
      d_parmesan: "Roher Schinken, Parmesan, Oliven",
      d_carni: "Kochschinken, roher Schinken, Speck, Chorizo, Hackfleisch, Merguez, Kebabfleisch, Hähnchen, Zwiebeln",
      d_vegetarienne: "Paprika, Zwiebeln, Champignons, Kapern, Oliven",
      d_mexicaine: "Chorizo, Paprika, Zwiebeln",
      d_barbecue: "Speck, Hackfleisch, Oliven, Zwiebeln, Barbecuesauce",
      d_topogigio: "Speck, Hackfleisch, Champignons, Serrano-Schinken, Burgerkäse",
      d_bolognaise: "Hackfleisch, Pesto, Zwiebeln, Ei",
      d_orientale: "Merguez, Paprika, Oliven, Zwiebeln",
      d_quatre: "Kebab, roher Schinken, Kochschinken, Hähnchen, 4 Käsesorten",
      d_kebab: "Kebabfleisch, Paprika, Zwiebeln, Kapern, Oliven",
      d_tartiflette: "Speck, Kartoffeln, Reblochon-Käse, Zwiebeln",
      d_curry: "Curry-Hähnchen, Paprika, Zwiebeln, Oliven",
      d_raclette: "Schinken, Kartoffeln, Raclette-Käse, Zwiebeln",
      d_nordique: "Räucherlachs, Zwiebeln, Kapern, Oliven",
      d_pesto: "Hähnchen, Burrata, Champignons, Zwiebeln",
      d_carbonara: "Speck, Ei, Parmesan",
      d_4fromages: "Mozzarella, Ziegenkäse, Raclette, Gorgonzola",
      d_chevremiel: "Ziegenkäse, Honig, Walnüsse",
      d_parisienne: "Kochschinken, Kartoffeln, Camembert",
      d_pburger: "Hackfleisch, Chorizo, Cheddar, Gewürzgurken, Zwiebeln, Burgersauce",
      d_expresse: "Kebabfleisch, Burrata, Pesto",
      note_perso: "Selbst gemacht: Stellen Sie Ihre eigene Pizza zusammen. Extra-Belag je nach Zutat, fragen Sie uns!",
      tacos_note: "Zur Wahl: Kebab, Hähnchen, Steak, Tenders, Nuggets, Vegetarisch, Cordon Bleu, Mexikaner «&nbsp;scharf&nbsp;» (Tex-Mex-Hähnchen + Samurai-Sauce) oder Chakchouka (Kebab, Paprika, Zwiebeln, Ei, Tomaten)",
      tacos_garn: "Beilagen: Salat, Tomaten, Zwiebeln, Pommes, Cheddar-Sauce. Extra Ziegenkäse, Raclette oder Cheddar: 2€.",
      fc_simple: "Einfach", fc_double: "Doppelt", fc_triple: "Dreifach",
      fc_seul: "Nur Gericht", fc_frites: "+ Pommes", fc_boisson: "+ Getränk",
      fc_panini: "Das Panini", fc_enfant: "Kindermenü",
      burg_classiques: "Die Klassiker", burg_classiques_sub: "Rind-Burger oder Hähnchen-Burger",
      burg_speciaux: "Die Spezialitäten", burg_speciaux_sub: "Rind Rösti · Rind Bacon · Rind Raclette · Hähnchen Rösti · Hähnchen Ziegenkäse · Hähnchen Raclette",
      sand_title: "Sandwiches (Brot oder Wrap)", sand_garn: "Beilagen: Salat, Tomaten, Zwiebeln.",
      sand_grands: "Die großen Sandwiches", tag_new: "Neu", sub_700: "ca. 700g", w_viandes: "Fleisch",
      d_sam: "Kebabfleisch + Rindfrikadelle + Cheddar + Rohkost, Sauce nach Wahl",
      n_sam: "+ Pommes 13€ &nbsp;·&nbsp; + Getränk 14,5€",
      d_sam3: "Steak + Kebab + Merguez + Cheddar",
      n_sam3: "+ Pommes 15€ &nbsp;·&nbsp; + Getränk 17,5€ &nbsp;·&nbsp; Extra 1€",
      d_joe: "Kebab + Steak + Tex-Mex-Hähnchen + Paprika + Zwiebeln + Cheddar",
      n_joe: "+ Pommes 15€ &nbsp;·&nbsp; + Getränk 17,5€",
      d_duo: "Rindfrikadelle + knuspriges Hähnchen + Crème fraîche + Emmentaler-Scheibe + Salat",
      n_duo: "+ Pommes 13€ &nbsp;·&nbsp; + Getränk 14,5€",
      d_royal: "Merguez + Rindfrikadelle + knuspriges Hähnchen + Ei + Raclette + Sauce",
      n_royal: "+ Pommes 15€ &nbsp;·&nbsp; + Getränk 16,5€",
      d_crousty: "Cremiger Reis + knuspriges Brathähnchen und Sauce (Schale)",
      n_crousty: "+ Getränk 10€",
      pan_note: "Käse-Panini zur Wahl: Lachs, Kebab, BBQ-Hähnchen, Curry-Hähnchen, Steak oder Kochschinken",
      pan_supp: "Extras 2€: Kebab, Ziegenkäse, Cheddar, Ei, Bacon, Speckwürfel, geräucherte Entenbrust, Nuggets, Hähnchen, Merguez, Reblochon, Raclette, Chorizo, Roquefort, Feta.",
      ass_title: "Die Teller", i_ass1: "Teller 1 Fleisch", d_ass1: "Kebabfleisch oder Rindfrikadelle + Pommes + Salat",
      i_ass3: "Teller 3 Fleisch", d_ass3: "Rindfrikadelle, Kebab, Merguez + Pommes + Salat",
      ass_supp: "Extra Fleisch 3€ &nbsp;·&nbsp; Cheddar, Ei oder Ziegenkäse 2€.",
      tapas_title: "Die Tapas", tapas_list: "Calamari · Zwiebelringe · Mozzarella-Sticks · Käsebällchen · Mini-Frühlingsrollen · Camembert-Häppchen",
      i_barq_choix: "Schale zur Wahl", d_tapas_unit: "Tapas pro Stück. Klein 4€, Groß 6€",
      i_mixtapas: "Gemischter Tapas-Teller", d_mixtapas: "Calamari, Zwiebelringe, Käsebällchen, Nuggets, Chicken Wings, Mini-Frühlingsrollen, mit Saucen",
      sal_note: "Salat pur 6€ &nbsp;·&nbsp; + Pommes 8€ &nbsp;·&nbsp; + Getränk 9,5€",
      i_sal_saumon: "Lachssalat", i_sal_poulet: "Hähnchensalat", i_sal_thon: "Thunfischsalat",
      i_sal_ital: "Italienischer Salat", d_sal_ital: "Roher Schinken + Parmesan",
      i_sal_verte: "Einfacher grüner Salat", d_sal_verte: "Salat, Tomaten, Zwiebeln",
      barq_note: "Nuggets, Tenders, Chicken Wings, Kebab und Pommes, in der Schale, zum Teilen!",
      pc3: "3 Stk", pc4: "4 Stk", pc6: "6 Stk", pc9: "9 Stk", pc12: "12 Stk",
      size_p: "Klein", size_g: "Groß", i_wings: "Chicken Wings", i_frites: "Pommes", i_frites_cheddar: "Pommes mit Cheddar",
      i_gaufre: "Waffel", d_gaufre: "Nutella oder Zucker", i_moelleux: "Schokoküchlein", i_sundae: "Sundae Vanille &amp; Karamell",
      enf_note: "Zur Wahl: Burger + Pommes · Nuggets + Pommes · Kebabfleisch + Pommes · Hähnchen-Tacos + Pommes",
      sauces_title: "Unsere Saucen <span class=\"item-sub\">der Becher 0,20€</span>",
      order_cta: "Bereit zu bestellen?", new_label: "✨ Neu",
      rev_eyebrow: "Kundenbewertungen", rev_title: "Sie lieben Topo Gigio", rev_count: "248 Google-Bewertungen", rev_all: "Alle Bewertungen auf Google ansehen", rev_src: "Google-Bewertung",
      fav_label: "🏆 Unsere Lieblingsbewertung",
      fav_quote: "„Ich bestelle eine 25-cm-Pizza und bekomme eine 23,5-cm-Pizza… ich möchte für mein Geld etwas bekommen, und das ist hier nicht der Fall!\"",
      fav_author: "Eine Google-Bewertung, Bau-Maßband in der Hand. Echt.",
      fav_reply_tag: "Unsere Antwort",
      fav_reply: "Und wissen Sie was? Es stimmte. Seitdem haben wir uns selbst ein Maßband gekauft. Der Teig macht trotzdem, was er will. Wir zielen auf 25 cm, versprochen. Und die fehlenden 1,5 cm gleichen wir mit Käse aus. 🧀",
      hor_eyebrow: "6 Tage/Woche geöffnet", hor_title: "Öffnungszeiten",
      hor_subtitle: "Montags geschlossen, sowie Samstag- &amp; Sonntagmittag",
      day_lun: "Montag", day_mar: "Dienstag", day_mer: "Mittwoch", day_jeu: "Donnerstag", day_ven: "Freitag", day_sam: "Samstag", day_dim: "Sonntag",
      closed: "Geschlossen", midi_ferme: "(mittags geschlossen)",
      loc_subtitle: "17260 Gémozac, zum Mitnehmen", loc_btn1: "Route", loc_btn2: "Anrufen",
      contact_eyebrow: "Kontakt", contact_title: "Zum Mitnehmen bestellen",
      contact_subtitle: "Telefonisch bestellen, wir bereiten es zu, Sie holen es ab.",
      c_phone: "Telefon", c_addr: "Adresse", c_hours_closed: "Mo & Wochenende mittags geschlossen",
      pay_title: "Akzeptierte Zahlungsmittel", pay_cash: "Bargeld", pay_contactless: "Kontaktlos", pay_debit: "EC-Karte", pay_trcard: "Essensgutschein-Karte",
      footer_rights: "Zum Mitnehmen in Gémozac. Alle Rechte vorbehalten."
    }
  };

  var SUPPORTED = ["fr", "en", "es", "de"];
  var STORE_KEY = "tg_lang";

  function pickInitial() {
    var saved = null;
    try { saved = localStorage.getItem(STORE_KEY); } catch (e) {}
    if (saved && SUPPORTED.indexOf(saved) !== -1) return saved;
    var nav = (navigator.language || navigator.userLanguage || "fr").slice(0, 2).toLowerCase();
    return SUPPORTED.indexOf(nav) !== -1 ? nav : "fr";
  }

  function apply(lang) {
    var nodes = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < nodes.length; i++) {
      var el = nodes[i];
      var key = el.getAttribute("data-i18n");
      if (el.dataset.i18nFr === undefined) el.dataset.i18nFr = el.innerHTML;
      if (lang === "fr" || !I18N[lang] || I18N[lang][key] === undefined) {
        el.innerHTML = el.dataset.i18nFr;
      } else {
        el.innerHTML = I18N[lang][key];
      }
    }
    document.documentElement.setAttribute("lang", lang);
    var btns = document.querySelectorAll(".lang-opt");
    for (var j = 0; j < btns.length; j++) {
      btns[j].classList.toggle("active", btns[j].getAttribute("data-lang") === lang);
    }
    try { localStorage.setItem(STORE_KEY, lang); } catch (e) {}
  }

  function init() {
    var current = pickInitial();
    apply(current);
    var sw = document.getElementById("langSwitch");
    if (sw) {
      sw.addEventListener("click", function (e) {
        var b = e.target.closest("[data-lang]");
        if (!b) return;
        apply(b.getAttribute("data-lang"));
      });
    }
    // expose for other scripts if needed
    window.TGI18n = { apply: apply, current: function () { return document.documentElement.getAttribute("lang"); } };
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
