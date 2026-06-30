import { Dish, Chef } from './types';

export const DISHES: Dish[] = [
  // Recommended Dishes
  {
    id: 'rec-1',
    name: 'Grilled Chicken Florentine',
    price: 34.00,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1598515214211-89d3e73ae83b?auto=format&fit=crop&q=80&w=600',
    category: 'specials',
    description: 'Tender chicken breast grilled with rosemary and garlic, served over a bed of creamy creamed spinach.',
    tags: ['Best Seller', 'Gluten Free'],
    isRecommended: true
  },
  {
    id: 'rec-2',
    name: 'Sagatilli Fumora Pasta',
    price: 28.50,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=600',
    category: 'pasta',
    description: 'Handcrafted ridged pasta tossed in a smoky pomodoro sauce with cherry tomatoes and fresh burrata.',
    tags: ['Signature', 'Handmade'],
    isRecommended: true
  },
  {
    id: 'rec-3',
    name: 'Shrimp Potico Scampi',
    price: 32.00,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1625938146369-adc83368bda7?auto=format&fit=crop&q=80&w=600',
    category: 'specials',
    description: 'Jumbo prawns pan-seared in white wine butter sauce with fresh lemon juice, parsley, and garlic.',
    tags: ['Seafood', 'Fresh'],
    isRecommended: true
  },
  {
    id: 'rec-4',
    name: 'Vegetable Harvest Stir Fry',
    price: 24.00,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=600',
    category: 'salad',
    description: 'Seasonal organic vegetables stir-fried in a ginger-sesame glaze, served over wild brown rice.',
    tags: ['Vegan', 'Low Carb'],
    isRecommended: true
  },

  // Today's Specials
  {
    id: 'spec-1',
    name: 'Prime Tomahawk Ribeye Steak',
    price: 122.00,
    rating: 4.95,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=600',
    category: 'specials',
    description: 'Dry-aged wood-fired Tomahawk served with black truffle compound butter and roasted fingerling potatoes.',
    tags: ['Dry Aged', 'Premium'],
    isTodaySpecial: true
  },
  {
    id: 'spec-2',
    name: 'Saffron Seafood Risotto',
    price: 89.00,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&q=80&w=600',
    category: 'specials',
    description: 'Acquerello Carnaroli rice cooked in a saffron shellfish broth with lobster, mussels, and scallops.',
    tags: ['Exotic', 'Seafood'],
    isTodaySpecial: true
  },
  {
    id: 'spec-3',
    name: 'Truffle Mageritina Pizza',
    price: 45.00,
    rating: 4.85,
    image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&q=80&w=600',
    category: 'pizza',
    description: 'Neapolitan crust topped with fresh buffalo mozzarella, heirloom pomodoro, and shaved black summer truffles.',
    tags: ['Vegetarian', 'Truffle'],
    isTodaySpecial: true
  },

  // Full Menu
  {
    id: 'menu-1',
    name: 'Cacio e Pepe Roman',
    price: 22.00,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?auto=format&fit=crop&q=80&w=600',
    category: 'pasta',
    description: 'Traditional Roman pasta tossed with premium Pecorino Romano cheese and freshly cracked black peppercorns.'
  },
  {
    id: 'menu-2',
    name: 'Charcoal Smoked Wagyu Burger',
    price: 29.00,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=600',
    category: 'burger',
    description: 'A5 Wagyu patty smoked with oak wood chips, caramelized onion jam, and aged cheddar on a toasted brioche bun.'
  },
  {
    id: 'menu-3',
    name: 'Crispy Atlantic Salmon',
    price: 36.00,
    rating: 4.75,
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80&w=600',
    category: 'specials',
    description: 'Pan-roasted wild-caught salmon with a crispy skin, served with asparagus spears and a dill hollandaise sauce.'
  },
  {
    id: 'menu-4',
    name: 'Burrata & Fig Prosciutto Pizza',
    price: 31.00,
    rating: 4.85,
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=600',
    category: 'pizza',
    description: 'Creamy local burrata cheese, organic fresh figs, thin 24-month aged San Daniele prosciutto, and hot honey drizzle.'
  },
  {
    id: 'menu-5',
    name: 'Tuscan Kale & Quinoa Salad',
    price: 19.00,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=600',
    category: 'salad',
    description: 'Finely shredded organic black Tuscan kale, red quinoa, toasted pine nuts, and lemon-tahini vinaigrette.'
  },
  {
    id: 'menu-6',
    name: 'Gold Leaf Hazelnut Tart',
    price: 18.00,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&q=80&w=600',
    category: 'dessert',
    description: 'Dark Belgian chocolate ganache tart infused with hazelnut praline, crowned with edible 24-karat gold leaf.'
  },
  {
    id: 'menu-7',
    name: 'Grand Pistachio Soufflé',
    price: 21.00,
    rating: 4.95,
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&q=80&w=600',
    category: 'dessert',
    description: 'Delicately baked warm soufflé using Sicilian pistachios, served with vanilla bean ice cream.'
  },
  {
    id: 'menu-8',
    name: 'Smoked Jalapeño Pepper Burger',
    price: 25.00,
    rating: 4.65,
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&q=80&w=600',
    category: 'burger',
    description: 'Spiced beef patty topped with smoked jalapeño relays, pepper jack cheese, and roasted chipotle garlic aioli.'
  }
];

export const CHEFS: Chef[] = [
  {
    id: 'chef-1',
    name: 'Chef James Alistair',
    role: 'Executive Chef & Culinary Director',
    image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80&w=500',
    bio: 'Boasting over 15 years in Michelin-starred Parisian kitchens, James designs our sensory-driven seasonal menu combinations with architectural precision.',
    socials: { instagram: '@chef_alistair', twitter: '@jamescuisine' }
  },
  {
    id: 'chef-2',
    name: 'Chef Sophia Moretti',
    role: 'Master Pastry Chef & Baker',
    image: 'https://images.unsplash.com/photo-1581299894007-aaa50297cf16?auto=format&fit=crop&q=80&w=500',
    bio: 'Sophia, trained in Milan, infuses classical baking methodologies with modern dessert concepts, curating delicate, multi-textural pastry sensations.',
    socials: { instagram: '@sophia_moretti_pastry' }
  },
  {
    id: 'chef-3',
    name: 'Chef Marcus Thorne',
    role: 'Head of Grilling & Smoke Craft',
    image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&q=80&w=500',
    bio: 'Marcus is an authority in wood-fired open flame cooking and dry-aging operations, selecting artisanal hardwoods to construct deep, complex smoke profiles.',
    socials: { twitter: '@marcusthorne_smoke' }
  }
];

export const SECURITY_SECTIONS = [
  {
    id: 'sec-architecture',
    title: '1. Underlying Code Architecture',
    subtitle: 'Full-Stack SPA with Vite, React, & Tailwind v4',
    content: `This culinary application is developed using **React 19** with **Vite** as the build engine. State management uses lightweight **React Hooks** (\`useState\`, \`useMemo\`, \`useCallback\`) preventing unnecessary tree re-renders, and is structured for transition fluidity using **Motion** animations.

### Key Directory Layout:
- **\`/src/types.ts\`**: Strict typescript definitions establishing models for dishes, bookings, and state.
- **\`/src/data.ts\`**: Centralized structured content store to optimize performance and bundle sizes.
- **\`/src/components/*\`**: Modularized, encapsulated components separating user interfaces (Hero, Menu, Table Map) from logical concerns.
- **\`/src/index.css\`**: Unified utility layout featuring imported custom typography and custom color palettes mapped to Tailwind classes.`,
    badge: 'Structure'
  },
  {
    id: 'sec-validation',
    title: '2. Input Validation & Defense-in-Depth',
    subtitle: 'Preventing Injection and Client-Side Manipulation',
    content: `Every interactive mechanism in this app (reservation forms, newsletter subscriptions, custom search queries) implements rigorous schema constraints. 

### Security Protocols Enforced:
1. **Type Coercion & Escaping**: All inputs are immediately sanitized and parsed. Any character sequences resembling JavaScript or HTML code are HTML-escaped to completely neutralize **Cross-Site Scripting (XSS)** vectors.
2. **Regex Anchoring**: Form inputs such as emails and phone numbers are validated against strict anchored Regular Expressions (\`^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$\`) to prevent arbitrary string bypasses.
3. **Structured Binding**: When reservation parameters are packaged, they are kept in immutable, strictly-typed React structures rather than being compiled dynamically, eliminating **NoSQL/SQL injection** hazards entirely.`,
    badge: 'XSS & Injection'
  },
  {
    id: 'sec-persistence',
    title: '3. Data Sanitization & Secure Storage',
    subtitle: 'Client State & Database Interactions',
    content: `For user reservation storage, this app simulates highly structured local database storage or bridges securely to server-side resources:

### Best Practices Utilized:
- **Defensive API Modeling**: In a full-stack context, data is run through middleware that strips out extra fields (e.g., parameter injection), preventing **Mass Assignment Vulnerabilities**.
- **Secure Storage Tokens**: Sensitive customer credentials or session IDs are never saved in unencrypted \`localStorage\`. They belong in secure, server-signed HTTP-Only cookies utilizing \`SameSite=Strict\`, \`Secure\`, and \`HttpOnly\` attributes to guarantee they cannot be harvested by malicious browser extensions or XSS scripts.`,
    badge: 'Data Security'
  },
  {
    id: 'sec-csrf',
    title: '4. CSRF Prevention & Network Defense',
    subtitle: 'Securing State-Changing Transactions',
    content: `State-modifying requests (like clicking "Reserve Table" or submitting email data) must be isolated from third-party cross-origin triggers:

### Implementations of Defense:
- **SameSite Cookies**: Session tokens must restrict cross-site sharing through modern cookie policies.
- **Anti-CSRF Tokens**: Form submissions require server-provided cryptographically secure pseudo-random tokens. The server validates that the payload token matches the user's session token.
- **CORS Constraints**: The backend configures highly restrictive Cross-Origin Resource Sharing guidelines, allowing only authorized origins to post requests to the booking API endpoints.`,
    badge: 'CSRF & CORS'
  }
];
