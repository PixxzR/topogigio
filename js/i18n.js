/* ============================================
   TOPO GIGIO - i18n (FR default, EN / ES / DE / IT / SV)
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

    it: {
      nav_resto: "Il Ristorante", nav_carte: "Il Menù", nav_horaires: "Orari", nav_trouver: "Dove siamo",
      hero_tagline: "Pizze artigianali (base pomodoro e crema), hamburger gourmet,<br>kebab, tacos e molto altro. Da asporto, a Gémozac.",
      hero_cta1: "Vedi il menù", hero_cta2: "Ordina", hero_badge: "Da asporto, 6 giorni su 7",
      about_eyebrow: "Il Ristorante", about_title: "Benvenuti da <em>Topo Gigio</em>",
      about_p1: "A Gémozac, Topo Gigio è la casa della <strong>vera pizza artigianale</strong>, con base pomodoro o crema, preparata sul posto, ricca e gustosa. Ma non solo: hamburger, kebab, tacos, panini XXL, insalate fresche, tapas e dolci fatti in casa.",
      about_p2: "Tutto è fresco, preparato su ordinazione e da asporto. Dalla Margherita alla specialità <em>Topo Gigio</em>, ce n'è per tutti i gusti e tutti gli appetiti.",
      about_f1: "Pizze da 25 e 33 cm", about_f2: "Vendita da asporto", about_f3: "Aperto 6 giorni su 7",
      about_card_title: "In breve", about_l_cmd: "📞 Ordini", about_l_addr: "📍 Indirizzo", about_l_midi: "🕐 Pranzo", about_l_soir: "🌙 Sera",
      about_l_ferme: "🚫 Chiuso", about_v_ferme: "Lun. + sab. e dom. a pranzo", about_l_pay: "💳 Pagamento", about_v_pay: "Carta, contactless, carta buoni pasto", about_cta: "Chiama per ordinare",
      menu_eyebrow: "Il nostro menù", menu_title: "Il Menù Topo Gigio", menu_subtitle: "Tutto da asporto. Supplementi e salse in fondo alla pagina.",
      tab_pizzas: "🍕 Pizze", tab_tacos: "🌯 Tacos", tab_burgers: "🍔 Hamburger", tab_sandwichs: "🥙 Panini", tab_paninis: "🥪 Panini caldi", tab_assiettes: "🍽️ Piatti e Tapas", tab_salades: "🥗 Insalate", tab_barquettes: "🍗 Snack e Patatine", tab_desserts: "🍰 Dolci", tab_enfant: "🧒 Menù Bambini",
      pizza_note: "Tutte le nostre pizze sono disponibili da <strong>25 cm</strong> o <strong>33 cm</strong>. Scegli la base qui sotto", sub_tomate: "Base Pomodoro", sub_creme: "Base Crema", legend_name: "Nome e ingredienti", badge_speciale: "⭐ La specialità", badge_44: "🔥 4 carni + 4 formaggi",
      d_margherita: "Pomodoro, olive", d_reine: "Prosciutto cotto, funghi, olive", d_calzone: "Prosciutto cotto, uovo", d_royale: "Prosciutto cotto, bacon, funghi, cipolle, uovo", d_zola: "Chorizo, gorgonzola, uovo", d_napolitaine: "Acciughe, capperi, olive, cipolle, pomodori freschi", d_parmesan: "Prosciutto crudo, parmigiano, olive", d_carni: "Prosciutto cotto, prosciutto crudo, bacon, chorizo, carne macinata, merguez, carne kebab, pollo, cipolle", d_vegetarienne: "Peperoni, cipolle, funghi, capperi, olive", d_mexicaine: "Chorizo, peperoni, cipolle", d_barbecue: "Bacon, carne macinata, olive, cipolle, salsa barbecue", d_topogigio: "Bacon, carne macinata, funghi, prosciutto crudo, formaggio per hamburger", d_bolognaise: "Carne macinata, pesto, cipolle, uovo", d_orientale: "Merguez, peperoni, olive, cipolle",
      d_quatre: "Kebab, prosciutto crudo, prosciutto cotto, pollo, 4 formaggi", d_kebab: "Carne kebab, peperoni, cipolle, capperi, olive", d_tartiflette: "Bacon, patate, reblochon, cipolle", d_curry: "Pollo al curry, peperoni, cipolle, olive", d_raclette: "Prosciutto cotto, patate, raclette, cipolle", d_nordique: "Salmone affumicato, cipolle, capperi, olive", d_pesto: "Pollo, burrata, funghi, cipolle", d_carbonara: "Bacon, uovo, parmigiano", d_4fromages: "Mozzarella, formaggio di capra, raclette, gorgonzola", d_chevremiel: "Formaggio di capra, miele, noci", d_parisienne: "Prosciutto cotto, patate, camembert", d_pburger: "Carne macinata, chorizo, cheddar, cetriolini, cipolle, salsa burger", d_expresse: "Carne kebab, burrata, pesto", note_perso: "Componila tu: crea la tua pizza. Supplemento in base all'ingrediente, chiedici pure!",
      tacos_note: "A scelta: Kebab, Pollo, Manzo, Tenders, Nuggets, Vegetariano, Cordon Bleu, Messicano «&nbsp;piccante&nbsp;» (pollo Tex-Mex + salsa samurai) o Chakchouka (kebab, peperoni, cipolle, uovo, pomodoro)", tacos_garn: "Ingredienti: insalata, pomodoro, cipolle, patatine, salsa cheddar. Supplemento caprino, raclette o cheddar: 2€.",
      fc_simple: "Singolo", fc_double: "Doppio", fc_triple: "Triplo", fc_seul: "Solo", fc_frites: "+ Patatine", fc_boisson: "+ Bibita", fc_panini: "Il Panino", fc_enfant: "Menù Bambini",
      burg_classiques: "I Classici", burg_classiques_sub: "Hamburger di manzo o di pollo", burg_speciaux: "Le Specialità", burg_speciaux_sub: "Manzo Rösti · Manzo Bacon · Manzo Raclette · Pollo Rösti · Pollo Caprino · Pollo Raclette",
      sand_title: "Panini (pane o piadina)", sand_garn: "Ingredienti: insalata, pomodoro, cipolle.", sand_grands: "I Panini Grandi", tag_new: "Novità", sub_700: "circa 700 g", w_viandes: "Carni", d_sam: "Carne kebab + hamburger + cheddar + verdure crude, salsa a scelta", n_sam: "+ Patatine 13€ &nbsp;·&nbsp; + Bibita 14,5€", d_sam3: "Manzo + kebab + merguez + cheddar", n_sam3: "+ Patatine 15€ &nbsp;·&nbsp; + Bibita 17,5€ &nbsp;·&nbsp; Supplemento 1€", d_joe: "Kebab + manzo + pollo Tex-Mex + peperoni + cipolle + cheddar", n_joe: "+ Patatine 15€ &nbsp;·&nbsp; + Bibita 17,5€", d_duo: "Hamburger + pollo croccante + crème fraîche + emmental a fette + insalata", n_duo: "+ Patatine 13€ &nbsp;·&nbsp; + Bibita 14,5€", d_royal: "Merguez + hamburger + pollo croccante + uovo + raclette + salsa", n_royal: "+ Patatine 15€ &nbsp;·&nbsp; + Bibita 16,5€", d_crousty: "Riso cremoso + pollo fritto croccante e salsa (vaschetta)", n_crousty: "+ Bibita 10€",
      pan_note: "Panino al formaggio a scelta: Salmone, Kebab, Pollo BBQ, Pollo al curry, Manzo o Prosciutto cotto", pan_supp: "Supplementi 2€: kebab, formaggio di capra, cheddar, uovo, bacon, cubetti di bacon, petto d'anatra affumicato, nuggets, pollo, merguez, reblochon, raclette, chorizo, roquefort, feta.",
      ass_title: "I Piatti", i_ass1: "Piatto 1 Carne", d_ass1: "Carne kebab o hamburger + patatine + insalata", i_ass3: "Piatto 3 Carni", d_ass3: "Hamburger, kebab, merguez + patatine + insalata", ass_supp: "Carne extra 3€ &nbsp;·&nbsp; cheddar, uovo o formaggio di capra 2€.", tapas_title: "Le Tapas", tapas_list: "Calamari · Anelli di cipolla · Bastoncini di mozzarella · Bocconcini di formaggio · Mini involtini primavera · Bocconcini di camembert", i_barq_choix: "Vaschetta a scelta", d_tapas_unit: "Tapas al pezzo. Piccola 4€, Grande 6€", i_mixtapas: "Piatto Misto di Tapas", d_mixtapas: "Calamari, anelli di cipolla, bocconcini di formaggio, nuggets, alette di pollo, mini involtini primavera, con salse",
      sal_note: "Insalata sola 6€ &nbsp;·&nbsp; + Patatine 8€ &nbsp;·&nbsp; + Bibita 9,5€", i_sal_saumon: "Insalata al Salmone", i_sal_poulet: "Insalata di Pollo", i_sal_thon: "Insalata al Tonno", i_sal_ital: "Insalata Italiana", d_sal_ital: "Prosciutto crudo + parmigiano", i_sal_verte: "Insalata Verde Semplice", d_sal_verte: "Insalata, pomodoro, cipolle",
      barq_note: "Nuggets, tenders, alette di pollo, kebab e patatine, in vaschetta, da condividere!", pc3: "3 pz", pc4: "4 pz", pc6: "6 pz", pc9: "9 pz", pc12: "12 pz", size_p: "Piccola", size_g: "Grande", i_wings: "Alette di Pollo", i_frites: "Patatine", i_frites_cheddar: "Patatine al Cheddar",
      i_gaufre: "Waffle", d_gaufre: "Nutella o zucchero", i_moelleux: "Tortino al Cioccolato", i_sundae: "Sundae Vaniglia e Caramello", enf_note: "A scelta: Hamburger + patatine · Nuggets + patatine · Carne kebab + patatine · Tacos di pollo + patatine", sauces_title: "Le nostre Salse <span class=\"item-sub\">la vaschetta 0,20€</span>", order_cta: "Pronto per ordinare?", new_label: "✨ Novità",
      rev_eyebrow: "Recensioni", rev_title: "Amano Topo Gigio", rev_count: "248 recensioni Google", rev_all: "Vedi tutte le recensioni su Google", rev_src: "Recensione Google", hor_eyebrow: "Aperto 6 giorni su 7", hor_title: "Orari di apertura", hor_subtitle: "Chiuso il lunedì e il sabato e la domenica a pranzo", day_lun: "Lunedì", day_mar: "Martedì", day_mer: "Mercoledì", day_jeu: "Giovedì", day_ven: "Venerdì", day_sam: "Sabato", day_dim: "Domenica", closed: "Chiuso", midi_ferme: "(chiuso a pranzo)",
      loc_subtitle: "17260 Gémozac, da asporto", loc_btn1: "Indicazioni", loc_btn2: "Chiama", contact_eyebrow: "Contatti", contact_title: "Ordina da asporto", contact_subtitle: "Ordina per telefono, noi prepariamo e tu ritiri.", c_phone: "Telefono", c_addr: "Indirizzo", c_hours_closed: "Chiuso lun. e nel weekend a pranzo", pay_title: "Metodi di pagamento accettati", pay_cash: "Contanti", pay_contactless: "Contactless", pay_debit: "Carta di debito", pay_trcard: "Carta buoni pasto", footer_rights: "Da asporto a Gémozac. Tutti i diritti riservati."
    },

    sv: {
      nav_resto: "Restaurangen", nav_carte: "Meny", nav_horaires: "Öppettider", nav_trouver: "Hitta hit",
      hero_tagline: "Hantverksmässiga pizzor (tomat- eller crème fraîche-bas), gourmetburgare,<br>kebab, tacos och mycket mer. För avhämtning i Gémozac.",
      hero_cta1: "Se menyn", hero_cta2: "Beställ", hero_badge: "Avhämtning, 6 dagar i veckan",
      about_eyebrow: "Restaurangen", about_title: "Välkommen till <em>Topo Gigio</em>",
      about_p1: "I Gémozac är Topo Gigio hemmet för <strong>äkta hantverkspizza</strong>, med tomat- eller crème fraîche-bas, tillagad på plats, generös och smakrik. Men inte bara det: burgare, kebab, tacos, XXL-smörgåsar, fräscha sallader, tapas och hemlagade desserter.",
      about_p2: "Allt är färskt, lagas på beställning och är för avhämtning. Från Margherita till specialpizzan <em>Topo Gigio</em> finns något för alla smaker och aptiter.",
      about_f1: "Pizzor 25 &amp; 33 cm", about_f2: "Avhämtning", about_f3: "Öppet 6 dagar i veckan",
      about_card_title: "Snabböversikt", about_l_cmd: "📞 Beställning", about_l_addr: "📍 Adress", about_l_midi: "🕐 Lunch", about_l_soir: "🌙 Kväll",
      about_l_ferme: "🚫 Stängt", about_v_ferme: "Mån. + lör. och sön. lunch", about_l_pay: "💳 Betalning", about_v_pay: "Kort, kontaktlöst, måltidskort", about_cta: "Ring och beställ",
      menu_eyebrow: "Vår meny", menu_title: "Topo Gigios meny", menu_subtitle: "Allt är för avhämtning. Extra tillbehör och såser finns längst ner på sidan.",
      tab_pizzas: "🍕 Pizzor", tab_tacos: "🌯 Tacos", tab_burgers: "🍔 Burgare", tab_sandwichs: "🥙 Smörgåsar", tab_paninis: "🥪 Panini", tab_assiettes: "🍽️ Tallrikar &amp; tapas", tab_salades: "🥗 Sallader", tab_barquettes: "🍗 Snacks &amp; pommes", tab_desserts: "🍰 Desserter", tab_enfant: "🧒 Barnmeny",
      pizza_note: "Alla våra pizzor finns i <strong>25 cm</strong> eller <strong>33 cm</strong>. Välj bas nedan", sub_tomate: "Tomatbas", sub_creme: "Crème fraîche-bas", legend_name: "Namn &amp; ingredienser", badge_speciale: "⭐ Specialitet", badge_44: "🔥 4 kött + 4 ostar",
      d_margherita: "Tomat, oliver", d_reine: "Skinka, champinjoner, oliver", d_calzone: "Skinka, ägg", d_royale: "Skinka, bacon, champinjoner, lök, ägg", d_zola: "Chorizo, gorgonzola, ägg", d_napolitaine: "Ansjovis, kapris, oliver, lök, färska tomater", d_parmesan: "Lufttorkad skinka, parmesan, oliver", d_carni: "Kokt skinka, lufttorkad skinka, bacon, chorizo, köttfärs, merguez, kebabkött, kyckling, lök", d_vegetarienne: "Paprika, lök, champinjoner, kapris, oliver", d_mexicaine: "Chorizo, paprika, lök", d_barbecue: "Bacon, köttfärs, oliver, lök, barbecuesås", d_topogigio: "Bacon, köttfärs, champinjoner, serranoskinka, hamburgerost", d_bolognaise: "Köttfärs, pesto, lök, ägg", d_orientale: "Merguez, paprika, oliver, lök",
      d_quatre: "Kebab, lufttorkad skinka, kokt skinka, kyckling, 4 ostar", d_kebab: "Kebabkött, paprika, lök, kapris, oliver", d_tartiflette: "Bacon, potatis, reblochon, lök", d_curry: "Currykyckling, paprika, lök, oliver", d_raclette: "Skinka, potatis, racletteost, lök", d_nordique: "Rökt lax, lök, kapris, oliver", d_pesto: "Kyckling, burrata, champinjoner, lök", d_carbonara: "Bacon, ägg, parmesan", d_4fromages: "Mozzarella, getost, raclette, gorgonzola", d_chevremiel: "Getost, honung, valnötter", d_parisienne: "Kokt skinka, potatis, camembert", d_pburger: "Köttfärs, chorizo, cheddar, saltgurka, lök, hamburgersås", d_expresse: "Kebabkött, burrata, pesto", note_perso: "Komponera själv: skapa din egen pizza. Extra ingrediens prissätts styckvis, fråga oss!",
      tacos_note: "Välj mellan: Kebab, Kyckling, Biff, Tenders, Nuggets, Vegetarisk, Cordon Bleu, Mexikansk «&nbsp;stark&nbsp;» (Tex-Mex-kyckling + samurajsås) eller Chakchouka (kebab, paprika, lök, ägg, tomater)", tacos_garn: "Tillbehör: sallad, tomater, lök, pommes, cheddarsås. Extra getost, raclette eller cheddar: 2€.",
      fc_simple: "Enkel", fc_double: "Dubbel", fc_triple: "Trippel", fc_seul: "Utan tillbehör", fc_frites: "+ Pommes", fc_boisson: "+ Dryck", fc_panini: "Panini", fc_enfant: "Barnmeny",
      burg_classiques: "Klassikerna", burg_classiques_sub: "Nötburgare eller kycklingburgare", burg_speciaux: "Specialarna", burg_speciaux_sub: "Nöt Rösti · Nöt Bacon · Nöt Raclette · Kyckling Rösti · Kyckling Getost · Kyckling Raclette",
      sand_title: "Smörgåsar (bröd eller wrap)", sand_garn: "Tillbehör: sallad, tomater, lök.", sand_grands: "De stora smörgåsarna", tag_new: "Nyhet", sub_700: "ca 700 g", w_viandes: "Kött", d_sam: "Kebabkött + nötburgare + cheddar + råa grönsaker, valfri sås", n_sam: "+ Pommes 13€ &nbsp;·&nbsp; + Dryck 14,5€", d_sam3: "Biff + kebab + merguez + cheddar", n_sam3: "+ Pommes 15€ &nbsp;·&nbsp; + Dryck 17,5€ &nbsp;·&nbsp; Extra 1€", d_joe: "Kebab + biff + Tex-Mex-kyckling + paprika + lök + cheddar", n_joe: "+ Pommes 15€ &nbsp;·&nbsp; + Dryck 17,5€", d_duo: "Nötburgare + krispig kyckling + crème fraîche + skivad emmentaler + sallad", n_duo: "+ Pommes 13€ &nbsp;·&nbsp; + Dryck 14,5€", d_royal: "Merguez + nötburgare + krispig kyckling + ägg + raclette + sås", n_royal: "+ Pommes 15€ &nbsp;·&nbsp; + Dryck 16,5€", d_crousty: "Krämigt ris + krispig friterad kyckling och sås (låda)", n_crousty: "+ Dryck 10€",
      pan_note: "Panini med ost, välj mellan: Lax, Kebab, BBQ-kyckling, Currykyckling, Biff eller Kokt skinka", pan_supp: "Extra 2€: kebab, getost, cheddar, ägg, bacon, bacontärningar, rökt ankbröst, nuggets, kyckling, merguez, reblochon, raclette, chorizo, roquefort, feta.",
      ass_title: "Tallrikarna", i_ass1: "Tallrik med 1 kött", d_ass1: "Kebabkött eller nötburgare + pommes + sallad", i_ass3: "Tallrik med 3 kött", d_ass3: "Nötburgare, kebab, merguez + pommes + sallad", ass_supp: "Extra kött 3€ &nbsp;·&nbsp; cheddar, ägg eller getost 2€.", tapas_title: "Tapas", tapas_list: "Calamari · Lökringar · Mozzarellasticks · Ostbitar · Minivårrullar · Camembertbitar", i_barq_choix: "Valfri låda", d_tapas_unit: "Tapas styckvis. Liten 4€, Stor 6€", i_mixtapas: "Blandad tapastallrik", d_mixtapas: "Calamari, lökringar, ostbitar, nuggets, kycklingvingar, minivårrullar, med såser",
      sal_note: "Sallad 6€ &nbsp;·&nbsp; + Pommes 8€ &nbsp;·&nbsp; + Dryck 9,5€", i_sal_saumon: "Laxsallad", i_sal_poulet: "Kycklingsallad", i_sal_thon: "Tonfisksallad", i_sal_ital: "Italiensk sallad", d_sal_ital: "Lufttorkad skinka + parmesan", i_sal_verte: "Enkel grönsallad", d_sal_verte: "Sallad, tomater, lök",
      barq_note: "Nuggets, tenders, kycklingvingar, kebab och pommes i låda, perfekt att dela!", pc3: "3 st", pc4: "4 st", pc6: "6 st", pc9: "9 st", pc12: "12 st", size_p: "Liten", size_g: "Stor", i_wings: "Kycklingvingar", i_frites: "Pommes", i_frites_cheddar: "Pommes med cheddar",
      i_gaufre: "Våffla", d_gaufre: "Nutella eller socker", i_moelleux: "Chokladfondant", i_sundae: "Vanilj- &amp; karamellsundae", enf_note: "Välj mellan: Burgare + pommes · Nuggets + pommes · Kebabkött + pommes · Kycklingtacos + pommes", sauces_title: "Våra såser <span class=\"item-sub\">burk 0,20€</span>", order_cta: "Redo att beställa?", new_label: "✨ Nyheter",
      rev_eyebrow: "Kundrecensioner", rev_title: "De älskar Topo Gigio", rev_count: "248 Google-recensioner", rev_all: "Se alla recensioner på Google", rev_src: "Google-recension", hor_eyebrow: "Öppet 6 dagar i veckan", hor_title: "Öppettider", hor_subtitle: "Stängt på måndagar samt lördag och söndag lunch", day_lun: "Måndag", day_mar: "Tisdag", day_mer: "Onsdag", day_jeu: "Torsdag", day_ven: "Fredag", day_sam: "Lördag", day_dim: "Söndag", closed: "Stängt", midi_ferme: "(stängt vid lunch)",
      loc_subtitle: "17260 Gémozac, avhämtning", loc_btn1: "Vägbeskrivning", loc_btn2: "Ring", contact_eyebrow: "Kontakt", contact_title: "Beställ för avhämtning", contact_subtitle: "Beställ per telefon, vi lagar maten och du hämtar den.", c_phone: "Telefon", c_addr: "Adress", c_hours_closed: "Stängt mån. och helgluncher", pay_title: "Godkända betalningssätt", pay_cash: "Kontanter", pay_contactless: "Kontaktlöst", pay_debit: "Betalkort", pay_trcard: "Måltidskort", footer_rights: "Avhämtning i Gémozac. Alla rättigheter förbehållna."
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

  var SUPPORTED = ["fr", "en", "es", "de", "it", "sv"];
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
