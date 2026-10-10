/**
 * AURA LUXE — Core Frontend Store Engine
 * Handles State, Catalog Filtering, Cart Drawer, Wishlist, Quick View,
 * Checkout Flow, Toast Notifications, and Canvas Confetti.
 */

// ==========================================
// 1. PRODUCT CATALOG DATA
// ==========================================
const PRODUCTS = [
  {
    id: 'h1',
    title: 'AURA Spatial Wireless ANC Headphones',
    category: 'audio',
    price: 349,
    originalPrice: 429,
    rating: 4.9,
    reviews: 1420,
    badge: 'Sale',
    badgeType: 'sale',
    image: 'assets/headphones.jpg',
    description: 'Custom 40mm bio-cellulose drivers tuned for planar-like precision. Hybrid Active Noise Cancellation eliminates 98% of ambient noise, paired with breathable lambskin memory foam ear cushions.',
    colors: [
      { name: 'Matte Obsidian', hex: '#18181b' },
      { name: 'Titanium Slate', hex: '#64748b' },
      { name: 'Warm Champagne', hex: '#d97706' }
    ],
    specs: ['48-Hour Battery Life', 'Lossless Bluetooth 5.4', 'Aura Spatial Audio 360°', 'Aircraft Grade Aluminum'],
    stock: 8,
    isFeatured: true
  },
  {
    id: 'w1',
    title: 'AURA Apex Titanium Smart Watch',
    category: 'wearables',
    price: 399,
    originalPrice: 499,
    rating: 4.95,
    reviews: 980,
    badge: 'Hot',
    badgeType: 'hot',
    image: 'assets/smartwatch.jpg',
    description: 'Milled from a solid block of Grade 5 titanium. Features an edge-to-edge sapphire crystal AMOLED touch display, dual-frequency GPS, medical-grade ECG sensor, and 100m water resistance.',
    colors: [
      { name: 'Titanium Brushed', hex: '#71717a' },
      { name: 'Midnight DLC', hex: '#09090b' },
      { name: 'Oceanic Blue', hex: '#0284c7' }
    ],
    specs: ['14-Day Battery Life', 'Sapphire Crystal Glass', 'Grade 5 Titanium Body', 'ECG & SpO2 Biometrics'],
    stock: 5,
    isFeatured: true
  },
  {
    id: 'k1',
    title: 'AURA Stealth 75% Mechanical Keyboard',
    category: 'workspace',
    price: 189,
    originalPrice: 220,
    rating: 4.85,
    reviews: 640,
    badge: 'New',
    badgeType: 'new',
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80',
    description: 'Acoustically tuned gasket-mounted mechanical keyboard with pre-lubed silent linear switches, CNC aluminum chassis, PBT double-shot keycaps, and hot-swappable PCB.',
    colors: [
      { name: 'Obsidian Black', hex: '#18181b' },
      { name: 'Polar White', hex: '#e2e8f0' },
      { name: 'Cyber Violet', hex: '#7c3aed' }
    ],
    specs: ['Gasket Mount Architecture', 'Pre-lubed Silent Switches', 'Wireless 2.4G & BT 5.3', 'Hot-Swappable Sockets'],
    stock: 14,
    isFeatured: true
  },
  {
    id: 'a1',
    title: 'AURA Sphere Ambient Acoustic Speaker',
    category: 'audio',
    price: 279,
    originalPrice: 320,
    rating: 4.88,
    reviews: 412,
    badge: null,
    image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=80',
    description: 'Cylindrical 360-degree room acoustic dispersion with dual passive radiators, cast iron weighted base, woven acoustic mesh fabric, and Wi-Fi AirPlay 2 / Spotify Connect integration.',
    colors: [
      { name: 'Charcoal', hex: '#27272a' },
      { name: 'Natural Sand', hex: '#d6d3d1' }
    ],
    specs: ['360° Omnidirectional', '60W RMS Pure Sound', 'AirPlay 2 & Cast', 'Cast Iron Acoustic Core'],
    stock: 9,
    isFeatured: false
  },
  {
    id: 'l1',
    title: 'AURA Halo Minimalist Mag-Desk Lamp',
    category: 'workspace',
    price: 149,
    originalPrice: 179,
    rating: 4.8,
    reviews: 320,
    badge: 'Sale',
    badgeType: 'sale',
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80',
    description: 'Ultra-thin architectural task light with magnetic cantilever arm, high CRI 98 glare-free LED bar, continuous touch dimming, and integrated Qi wireless charging pad in the base.',
    colors: [
      { name: 'Matte Black', hex: '#18181b' },
      { name: 'Silver Anodized', hex: '#a1a1aa' }
    ],
    specs: ['CRI 98 Natural Light', 'Mag-Cantilever Pivot', '15W Wireless Qi Base', 'Zero Screen Glare'],
    stock: 12,
    isFeatured: false
  },
  {
    id: 'e1',
    title: 'AURA Carbon MagSafe Bifold Wallet',
    category: 'edc',
    price: 79,
    originalPrice: 95,
    rating: 4.9,
    reviews: 890,
    badge: 'Hot',
    badgeType: 'hot',
    image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=800&q=80',
    description: 'Aerospace forged carbon fiber frame paired with top-grain Italian leather. Holds up to 10 cards with instant thumb-slide ejection, RFID shielding, and integrated Apple Find My tracker slot.',
    colors: [
      { name: 'Forged Carbon', hex: '#1c1917' },
      { name: 'Cognac Leather', hex: '#9a3412' }
    ],
    specs: ['Forged Carbon Fiber', 'Quick Card Pop-Up', 'RFID Anti-Theft Protection', 'Apple Find My Compatible'],
    stock: 22,
    isFeatured: true
  },
  {
    id: 'e2',
    title: 'AURA Horizon Smart Polarized Sunglasses',
    category: 'wearables',
    price: 219,
    originalPrice: 260,
    rating: 4.75,
    reviews: 195,
    badge: 'New',
    badgeType: 'new',
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80',
    description: 'Ultra-lightweight TR90 frames with electrochromic lenses that tint automatically based on sunlight. Integrated directional open-ear micro-speakers for crystal calls and podcasts.',
    colors: [
      { name: 'Gloss Onyx', hex: '#09090b' },
      { name: 'Tortoise Matte', hex: '#451a03' }
    ],
    specs: ['Auto-Tinting Lenses', 'Directional Micro Audio', 'Dual Beamforming Mics', 'IPX4 Water Resistant'],
    stock: 7,
    isFeatured: false
  },
  {
    id: 'w2',
    title: 'AURA Precision Stylus & Mag-Dock',
    category: 'workspace',
    price: 99,
    originalPrice: 120,
    rating: 4.78,
    reviews: 210,
    badge: null,
    image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=800&q=80',
    description: 'Surgical brass weighted stylus with replaceable conductive titanium nibs. Delivers pixel-accurate tilt and 4096 pressure sensitivity levels for tablets and touch displays.',
    colors: [
      { name: 'Space Grey', hex: '#3f3f46' },
      { name: 'Raw Brass', hex: '#ca8a04' }
    ],
    specs: ['4096 Pressure Levels', 'Tilt Sensitivity', 'Wireless Induction Dock', 'Solid Brass Core'],
    stock: 15,
    isFeatured: false
  },
  {
    id: 'e3',
    title: 'AURA Thermal Hydro Vessel 750ml',
    category: 'edc',
    price: 49,
    originalPrice: 59,
    rating: 4.82,
    reviews: 530,
    badge: null,
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=800&q=80',
    description: 'Double-walled vacuum insulated surgical steel with a ceramic interior coating to preserve beverage purity. Keeps liquids iced for 36 hours or piping hot for 18 hours.',
    colors: [
      { name: 'Matte Obsidian', hex: '#18181b' },
      { name: 'Alpine Frost', hex: '#cbd5e1' },
      { name: 'Desert Dune', hex: '#a8a29e' }
    ],
    specs: ['Triple Wall Vacuum', 'Ceramic Shield Lining', 'Leakproof Magnetic Cap', 'BPA & Toxin Free'],
    stock: 30,
    isFeatured: false
  },
  {
    id: 'w3',
    title: 'AURA Trio 3-in-1 Fast Wireless Station',
    category: 'workspace',
    price: 119,
    originalPrice: 145,
    rating: 4.91,
    reviews: 740,
    badge: 'Hot',
    badgeType: 'hot',
    image: 'https://images.unsplash.com/photo-1622445262464-84b1456045b6?auto=format&fit=crop&w=800&q=80',
    description: 'Simultaneously fast-charges your phone, smartwatch, and wireless earbuds using MagSafe-compatible 15W high-density magnetic coils. Wrapped in anodized space grey aluminum.',
    colors: [
      { name: 'Anodized Grey', hex: '#3f3f46' },
      { name: 'Midnight Onyx', hex: '#09090b' }
    ],
    specs: ['15W MagSafe Fast Charge', 'Apple & Qi Certified', 'Weighted Aluminum Base', 'Integrated Heat Shield'],
    stock: 18,
    isFeatured: true
  }
];

// ==========================================
// 2. STATE MANAGEMENT
// ==========================================
const state = {
  products: PRODUCTS,
  filteredProducts: [...PRODUCTS],
  cart: JSON.parse(localStorage.getItem('aura_cart') || '[]'),
  wishlist: JSON.parse(localStorage.getItem('aura_wishlist') || '[]'),
  filters: {
    category: 'all',
    searchQuery: '',
    maxPrice: 500,
    sortBy: 'featured'
  },
  discount: JSON.parse(localStorage.getItem('aura_discount') || 'null'),
  theme: localStorage.getItem('aura_theme') || 'dark'
};

// Available Promo Codes
const PROMO_CODES = {
  'AURA20': { type: 'percent', value: 0.20, label: 'AURA20 (-20%)' },
  'FREESHIP': { type: 'shipping', value: 0, label: 'FREESHIP (Free Delivery)' },
  'VIP50': { type: 'fixed', value: 50, minSpend: 250, label: 'VIP50 (-$50)' },
  'WELCOME15': { type: 'percent', value: 0.15, label: 'WELCOME15 (-15%)' }
};

// ==========================================
// 3. INITIALIZATION
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initEventListeners();
  applyFiltersAndSort();
  updateCartCounters();
  updateWishlistCounters();
  setupConfettiCanvas();
});

// ==========================================
// 4. THEME MANAGEMENT
// ==========================================
function initTheme() {
  document.documentElement.setAttribute('data-theme', state.theme);
  updateThemeIcons();
}

function toggleTheme() {
  state.theme = state.theme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', state.theme);
  localStorage.setItem('aura_theme', state.theme);
  updateThemeIcons();
  showToast(`Switched to ${state.theme.toUpperCase()} mode`, 'info');
}

function updateThemeIcons() {
  const moonIcon = document.getElementById('theme-moon-icon');
  const sunIcon = document.getElementById('theme-sun-icon');
  if (state.theme === 'dark') {
    moonIcon.classList.remove('hidden');
    sunIcon.classList.add('hidden');
  } else {
    moonIcon.classList.add('hidden');
    sunIcon.classList.remove('hidden');
  }
}

// ==========================================
// 5. EVENT LISTENERS
// ==========================================
function initEventListeners() {
  // Theme Toggle Button
  document.getElementById('theme-toggle-btn')?.addEventListener('click', toggleTheme);

  // Search input
  const searchInput = document.getElementById('catalog-search');
  const clearSearchBtn = document.getElementById('clear-search-btn');

  searchInput?.addEventListener('input', (e) => {
    state.filters.searchQuery = e.target.value.trim().toLowerCase();
    if (state.filters.searchQuery.length > 0) {
      clearSearchBtn.classList.remove('hidden');
    } else {
      clearSearchBtn.classList.add('hidden');
    }
    applyFiltersAndSort();
  });

  clearSearchBtn?.addEventListener('click', () => {
    searchInput.value = '';
    state.filters.searchQuery = '';
    clearSearchBtn.classList.add('hidden');
    applyFiltersAndSort();
  });

  // Category filter tabs
  const categoryPills = document.querySelectorAll('.cat-pill');
  categoryPills.forEach(pill => {
    pill.addEventListener('click', () => {
      categoryPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      state.filters.category = pill.dataset.category;
      applyFiltersAndSort();
    });
  });

  // Price range slider
  const priceSlider = document.getElementById('price-filter');
  const priceLabel = document.getElementById('price-val-label');
  priceSlider?.addEventListener('input', (e) => {
    const val = Number(e.target.value);
    state.filters.maxPrice = val;
    priceLabel.textContent = `$${val}`;
    applyFiltersAndSort();
  });

  // Sort dropdown
  const sortSelect = document.getElementById('sort-select');
  sortSelect?.addEventListener('change', (e) => {
    state.filters.sortBy = e.target.value;
    applyFiltersAndSort();
  });

  // Cart Drawer open/close
  document.getElementById('cart-btn')?.addEventListener('click', openCartDrawer);
  document.getElementById('cart-close-btn')?.addEventListener('click', closeCartDrawer);
  document.getElementById('cart-backdrop')?.addEventListener('click', closeCartDrawer);

  // Wishlist Drawer open/close
  document.getElementById('wishlist-btn')?.addEventListener('click', openWishlistDrawer);
  document.getElementById('wishlist-close-btn')?.addEventListener('click', closeWishlistDrawer);
  document.getElementById('wishlist-backdrop')?.addEventListener('click', closeWishlistDrawer);

  // Modals backdrop clicks
  document.getElementById('quickview-close-btn')?.addEventListener('click', closeQuickView);
  document.getElementById('quickview-backdrop')?.addEventListener('click', closeQuickView);

  document.getElementById('checkout-close-btn')?.addEventListener('click', closeCheckoutModal);
  document.getElementById('checkout-backdrop')?.addEventListener('click', closeCheckoutModal);

  // Mobile menu
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const mobileDrawer = document.getElementById('mobile-nav-drawer');
  const mobileOverlay = document.getElementById('mobile-nav-overlay');
  const mobileClose = document.getElementById('mobile-nav-close');

  mobileToggle?.addEventListener('click', () => {
    mobileDrawer.classList.add('active');
    mobileOverlay.classList.add('active');
  });

  const closeMobile = () => {
    mobileDrawer.classList.remove('active');
    mobileOverlay.classList.remove('active');
  };

  mobileClose?.addEventListener('click', closeMobile);
  mobileOverlay?.addEventListener('click', closeMobile);
  document.querySelectorAll('.mobile-link').forEach(l => l.addEventListener('click', closeMobile));

  // Esc key closes any open modal/drawer
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeCartDrawer();
      closeWishlistDrawer();
      closeQuickView();
      closeCheckoutModal();
      closeMobile();
    }
  });
}

// ==========================================
// 6. FILTERING & SORTING LOGIC
// ==========================================
function applyFiltersAndSort() {
  const { category, searchQuery, maxPrice, sortBy } = state.filters;

  let results = state.products.filter(item => {
    // Category match
    const matchCat = (category === 'all') || (item.category === category);

    // Search query match
    const matchSearch = !searchQuery || 
      item.title.toLowerCase().includes(searchQuery) ||
      item.description.toLowerCase().includes(searchQuery) ||
      item.category.toLowerCase().includes(searchQuery);

    // Price match
    const matchPrice = item.price <= maxPrice;

    return matchCat && matchSearch && matchPrice;
  });

  // Sorting
  switch (sortBy) {
    case 'price-asc':
      results.sort((a, b) => a.price - b.price);
      break;
    case 'price-desc':
      results.sort((a, b) => b.price - a.price);
      break;
    case 'rating':
      results.sort((a, b) => b.rating - a.rating);
      break;
    case 'popular':
      results.sort((a, b) => b.reviews - a.reviews);
      break;
    case 'featured':
    default:
      results.sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0));
      break;
  }

  state.filteredProducts = results;
  renderProductGrid();

  // Update counters
  const showingCount = document.getElementById('showing-count');
  if (showingCount) showingCount.textContent = results.length;
}

function resetAllFilters() {
  state.filters.category = 'all';
  state.filters.searchQuery = '';
  state.filters.maxPrice = 500;
  state.filters.sortBy = 'featured';

  // Reset UI elements
  document.getElementById('catalog-search').value = '';
  document.getElementById('clear-search-btn').classList.add('hidden');
  document.getElementById('price-filter').value = 500;
  document.getElementById('price-val-label').textContent = '$500';
  document.getElementById('sort-select').value = 'featured';

  document.querySelectorAll('.cat-pill').forEach((pill, idx) => {
    if (idx === 0) pill.classList.add('active');
    else pill.classList.remove('active');
  });

  applyFiltersAndSort();
  showToast('Filters reset to default catalog', 'info');
}

// ==========================================
// 7. RENDER PRODUCT GRID
// ==========================================
function renderProductGrid() {
  const grid = document.getElementById('product-grid');
  const emptyState = document.getElementById('empty-state');
  if (!grid) return;

  if (state.filteredProducts.length === 0) {
    grid.innerHTML = '';
    emptyState.classList.remove('hidden');
    return;
  }

  emptyState.classList.add('hidden');

  grid.innerHTML = state.filteredProducts.map(p => {
    const isWishlisted = state.wishlist.includes(p.id);
    const badgeHtml = p.badge ? `<span class="card-badge badge-${p.badgeType}">${p.badge}</span>` : '';
    const origPriceHtml = p.originalPrice ? `<span class="original-price">$${p.originalPrice}</span>` : '';

    return `
      <article class="product-card" data-id="${p.id}">
        <div class="card-media">
          ${badgeHtml}
          <button class="card-wishlist-btn ${isWishlisted ? 'active' : ''}" 
                  onclick="toggleWishlist('${p.id}', event)" 
                  title="${isWishlisted ? 'Remove from wishlist' : 'Save to wishlist'}"
                  aria-label="Toggle wishlist">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </button>
          
          <img src="${p.image}" alt="${p.title}" class="product-img" loading="lazy">

          <div class="card-overlay">
            <button class="quickview-btn" onclick="quickViewProduct('${p.id}')">
              Quick View
            </button>
          </div>
        </div>

        <div class="card-details">
          <span class="card-category">${p.category}</span>
          <h3 class="card-title">${p.title}</h3>
          
          <div class="card-rating">
            <div class="stars-gold">${'★'.repeat(Math.round(p.rating))}</div>
            <span class="rating-count">(${p.reviews.toLocaleString()})</span>
          </div>

          <div class="card-footer">
            <div class="price-wrap">
              <span class="current-price">$${p.price}</span>
              ${origPriceHtml}
            </div>
            <button class="add-cart-btn" onclick="addToCart('${p.id}')" title="Add to cart" aria-label="Add to cart">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </button>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

// ==========================================
// 8. CART DRAWER & LOGIC
// ==========================================
function addToCart(productId, quantity = 1, selectedColor = null) {
  const product = state.products.find(p => p.id === productId);
  if (!product) return;

  const color = selectedColor || product.colors[0].name;

  const existingItemIndex = state.cart.findIndex(
    item => item.id === productId && item.color === color
  );

  if (existingItemIndex > -1) {
    state.cart[existingItemIndex].qty += quantity;
  } else {
    state.cart.push({
      id: productId,
      qty: quantity,
      color: color
    });
  }

  saveCart();
  updateCartCounters();
  renderCartItems();

  showToast(`Added "${product.title}" to cart`, 'success');

  // Gentle micro bounce on cart button in header
  const cartBtn = document.getElementById('cart-btn');
  if (cartBtn) {
    cartBtn.style.transform = 'scale(1.12)';
    setTimeout(() => { cartBtn.style.transform = ''; }, 250);
  }
}

function updateCartItemQty(index, change) {
  if (!state.cart[index]) return;
  state.cart[index].qty += change;

  if (state.cart[index].qty <= 0) {
    removeCartItem(index);
    return;
  }

  saveCart();
  updateCartCounters();
  renderCartItems();
}

function removeCartItem(index) {
  const removed = state.cart[index];
  const prod = state.products.find(p => p.id === removed.id);
  state.cart.splice(index, 1);
  saveCart();
  updateCartCounters();
  renderCartItems();

  if (prod) {
    showToast(`Removed "${prod.title}" from cart`, 'info');
  }
}

function saveCart() {
  localStorage.setItem('aura_cart', JSON.stringify(state.cart));
}

function openCartDrawer() {
  renderCartItems();
  document.getElementById('cart-drawer')?.classList.add('active');
  document.getElementById('cart-backdrop')?.classList.add('active');
}

function closeCartDrawer() {
  document.getElementById('cart-drawer')?.classList.remove('active');
  document.getElementById('cart-backdrop')?.classList.remove('active');
}

function updateCartCounters() {
  const totalQty = state.cart.reduce((sum, item) => sum + item.qty, 0);
  const cartCountBadge = document.getElementById('cart-count');
  const cartHeaderTotal = document.getElementById('cart-header-total');
  const cartTotalQty = document.getElementById('cart-total-qty');

  let subtotal = 0;
  state.cart.forEach(item => {
    const prod = state.products.find(p => p.id === item.id);
    if (prod) subtotal += prod.price * item.qty;
  });

  if (cartCountBadge) cartCountBadge.textContent = totalQty;
  if (cartTotalQty) cartTotalQty.textContent = totalQty;
  if (cartHeaderTotal) cartHeaderTotal.textContent = `$${subtotal.toFixed(2)}`;
}

function renderCartItems() {
  const container = document.getElementById('cart-items-container');
  if (!container) return;

  if (state.cart.length === 0) {
    container.innerHTML = `
      <div class="cart-empty-state">
        <div class="cart-empty-icon">
          <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <path d="M16 10a4 4 0 0 1-8 0"></path>
          </svg>
        </div>
        <h4>Your cart is empty</h4>
        <p style="color: var(--text-secondary); font-size: 0.88rem; margin: 8px 0 18px;">
          Explore our collection of precision gear and add items to begin.
        </p>
        <button class="btn btn-secondary" onclick="closeCartDrawer()">Start Exploring</button>
      </div>
    `;

    updateCartPricingSummary(0);
    return;
  }

  let subtotal = 0;

  container.innerHTML = state.cart.map((item, index) => {
    const product = state.products.find(p => p.id === item.id);
    if (!product) return '';

    const itemTotal = product.price * item.qty;
    subtotal += itemTotal;

    return `
      <div class="cart-item">
        <img src="${product.image}" alt="${product.title}" class="cart-item-img">
        <div class="cart-item-info">
          <div class="cart-item-top">
            <div>
              <h4 class="cart-item-title">${product.title}</h4>
              <span class="cart-item-color">Variant: ${item.color}</span>
            </div>
            <button class="cart-item-remove" onclick="removeCartItem(${index})" title="Remove item">&times;</button>
          </div>

          <div class="cart-item-bottom">
            <div class="qty-control">
              <button class="qty-btn" onclick="updateCartItemQty(${index}, -1)" aria-label="Decrease quantity">-</button>
              <span class="qty-val">${item.qty}</span>
              <button class="qty-btn" onclick="updateCartItemQty(${index}, 1)" aria-label="Increase quantity">+</button>
            </div>
            <span class="cart-item-price">$${itemTotal.toFixed(2)}</span>
          </div>
        </div>
      </div>
    `;
  }).join('');

  updateCartPricingSummary(subtotal);
}

function updateCartPricingSummary(subtotal) {
  // Free Shipping Calculation ($150 target)
  const freeShipThreshold = 150;
  const progressText = document.getElementById('shipping-progress-text');
  const progressBar = document.getElementById('shipping-progress-bar');
  const progressPercent = document.getElementById('shipping-percent');

  if (progressText && progressBar) {
    if (subtotal >= freeShipThreshold || (state.discount && state.discount.type === 'shipping')) {
      progressText.innerHTML = `<strong>Unlocked!</strong> You have Free Worldwide Express Delivery`;
      progressBar.style.width = '100%';
      progressPercent.textContent = '100%';
    } else {
      const remaining = freeShipThreshold - subtotal;
      const pct = Math.min(100, Math.round((subtotal / freeShipThreshold) * 100));
      progressText.textContent = `Add $${remaining.toFixed(2)} more for Free Worldwide Express Delivery`;
      progressBar.style.width = `${pct}%`;
      progressPercent.textContent = `${pct}%`;
    }
  }

  // Discount Calculation
  let discountAmount = 0;
  const appliedDiscountRow = document.getElementById('applied-discount-row');
  const discountSummaryLine = document.getElementById('discount-summary-line');
  const appliedDiscountLabel = document.getElementById('applied-discount-label');

  if (state.discount && subtotal > 0) {
    if (state.discount.type === 'percent') {
      discountAmount = subtotal * state.discount.value;
    } else if (state.discount.type === 'fixed') {
      discountAmount = Math.min(subtotal, state.discount.value);
    }

    if (appliedDiscountRow) appliedDiscountRow.classList.remove('hidden');
    if (discountSummaryLine) discountSummaryLine.classList.remove('hidden');
    if (appliedDiscountLabel) appliedDiscountLabel.textContent = state.discount.label;
  } else {
    if (appliedDiscountRow) appliedDiscountRow.classList.add('hidden');
    if (discountSummaryLine) discountSummaryLine.classList.add('hidden');
  }

  // Shipping cost
  let shipping = 0;
  if (subtotal > 0) {
    if (subtotal >= freeShipThreshold || (state.discount && state.discount.type === 'shipping')) {
      shipping = 0;
    } else {
      shipping = 15.00;
    }
  }

  // Tax (8% estimated)
  const tax = subtotal > 0 ? (subtotal - discountAmount) * 0.08 : 0;
  const grandTotal = Math.max(0, subtotal - discountAmount + shipping + tax);

  // Set DOM text
  document.getElementById('cart-subtotal').textContent = `$${subtotal.toFixed(2)}`;
  document.getElementById('cart-discount').textContent = `-$${discountAmount.toFixed(2)}`;
  document.getElementById('cart-shipping').textContent = shipping === 0 ? (subtotal > 0 ? 'FREE' : '$0.00') : `$${shipping.toFixed(2)}`;
  document.getElementById('cart-tax').textContent = `$${tax.toFixed(2)}`;
  document.getElementById('cart-grand-total').textContent = `$${grandTotal.toFixed(2)}`;
  document.getElementById('checkout-btn-total').textContent = `$${grandTotal.toFixed(2)}`;

  const proceedBtn = document.getElementById('proceed-checkout-btn');
  if (proceedBtn) {
    proceedBtn.disabled = subtotal === 0;
    proceedBtn.style.opacity = subtotal === 0 ? '0.5' : '1';
  }
}

// ==========================================
// 9. PROMO CODE COUPON SYSTEM
// ==========================================
function applyCoupon() {
  const input = document.getElementById('promo-code-input');
  if (!input) return;

  const code = input.value.trim().toUpperCase();
  if (!code) {
    showToast('Please enter a coupon code', 'info');
    return;
  }

  if (PROMO_CODES[code]) {
    const promo = PROMO_CODES[code];
    let subtotal = 0;
    state.cart.forEach(item => {
      const prod = state.products.find(p => p.id === item.id);
      if (prod) subtotal += prod.price * item.qty;
    });

    if (promo.minSpend && subtotal < promo.minSpend) {
      showToast(`Code "${code}" requires minimum $${promo.minSpend} order`, 'info');
      return;
    }

    state.discount = { code, ...promo };
    localStorage.setItem('aura_discount', JSON.stringify(state.discount));
    input.value = '';
    renderCartItems();
    showToast(`Success! Coupon "${code}" applied`, 'success');
  } else {
    showToast(`Invalid coupon code. Try "AURA20" or "FREESHIP"`, 'info');
  }
}

function removeCoupon() {
  state.discount = null;
  localStorage.removeItem('aura_discount');
  renderCartItems();
  showToast('Coupon removed', 'info');
}

function copyPromo(code) {
  navigator.clipboard?.writeText(code);
  const input = document.getElementById('promo-code-input');
  if (input) input.value = code;
  openCartDrawer();
  applyCoupon();
}

// ==========================================
// 10. WISHLIST MANAGEMENT
// ==========================================
function toggleWishlist(productId, event) {
  if (event) event.stopPropagation();

  const idx = state.wishlist.indexOf(productId);
  const product = state.products.find(p => p.id === productId);

  if (idx > -1) {
    state.wishlist.splice(idx, 1);
    showToast(`Removed "${product?.title}" from wishlist`, 'info');
  } else {
    state.wishlist.push(productId);
    showToast(`Saved "${product?.title}" to wishlist`, 'success');
  }

  localStorage.setItem('aura_wishlist', JSON.stringify(state.wishlist));
  updateWishlistCounters();
  renderProductGrid();
  renderWishlistItems();
}

function updateWishlistCounters() {
  const badge = document.getElementById('wishlist-count');
  const drawerCount = document.getElementById('wishlist-drawer-count');
  if (badge) badge.textContent = state.wishlist.length;
  if (drawerCount) drawerCount.textContent = state.wishlist.length;
}

function openWishlistDrawer() {
  renderWishlistItems();
  document.getElementById('wishlist-drawer')?.classList.add('active');
  document.getElementById('wishlist-backdrop')?.classList.add('active');
}

function closeWishlistDrawer() {
  document.getElementById('wishlist-drawer')?.classList.remove('active');
  document.getElementById('wishlist-backdrop')?.classList.remove('active');
}

function renderWishlistItems() {
  const container = document.getElementById('wishlist-items-container');
  if (!container) return;

  if (state.wishlist.length === 0) {
    container.innerHTML = `
      <div class="cart-empty-state">
        <div class="cart-empty-icon">
          <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </div>
        <h4>No saved items yet</h4>
        <p style="color: var(--text-secondary); font-size: 0.88rem; margin: 8px 0 16px;">
          Click the heart icon on any product to save it to your personal wishlist.
        </p>
      </div>
    `;
    return;
  }

  container.innerHTML = state.wishlist.map(id => {
    const p = state.products.find(prod => prod.id === id);
    if (!p) return '';

    return `
      <div class="cart-item">
        <img src="${p.image}" alt="${p.title}" class="cart-item-img">
        <div class="cart-item-info">
          <div class="cart-item-top">
            <h4 class="cart-item-title">${p.title}</h4>
            <button class="cart-item-remove" onclick="toggleWishlist('${p.id}')" title="Remove">&times;</button>
          </div>
          <span class="cart-item-price" style="margin: 6px 0;">$${p.price}</span>
          <div style="display: flex; gap: 8px;">
            <button class="btn btn-primary" style="padding: 6px 14px; font-size: 0.8rem;" onclick="addToCart('${p.id}'); toggleWishlist('${p.id}');">
              Move to Cart
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// ==========================================
// 11. QUICK VIEW MODAL
// ==========================================
function quickViewProduct(productId) {
  const p = state.products.find(item => item.id === productId);
  if (!p) return;

  const content = document.getElementById('quickview-content');
  if (!content) return;

  let activeColor = p.colors[0].name;

  content.innerHTML = `
    <div class="quickview-gallery">
      <img src="${p.image}" alt="${p.title}" class="quickview-img" id="qv-main-img">
    </div>
    <div class="quickview-details">
      <span class="qv-category">${p.category} &bull; IN STOCK (${p.stock} Available)</span>
      <h2 class="qv-title">${p.title}</h2>
      
      <div class="qv-rating-row">
        <div class="stars-gold">${'★'.repeat(Math.round(p.rating))}</div>
        <span class="rating-count">${p.rating} / 5.0 (${p.reviews} verified reviews)</span>
      </div>

      <div class="qv-price-row">
        <span class="qv-price">$${p.price}</span>
        ${p.originalPrice ? `<span class="qv-orig-price">$${p.originalPrice}</span>` : ''}
      </div>

      <p class="qv-desc">${p.description}</p>

      <div class="qv-options-block">
        <span class="qv-option-label">Finish / Color: <strong id="qv-selected-color-name">${activeColor}</strong></span>
        <div class="color-swatches">
          ${p.colors.map((c, i) => `
            <button class="color-swatch ${i === 0 ? 'active' : ''}" 
                    style="background: ${c.hex};" 
                    title="${c.name}" 
                    onclick="selectQvColor('${c.name}', this)"></button>
          `).join('')}
        </div>
      </div>

      <div class="qv-options-block">
        <span class="qv-option-label">Engineered Specifications:</span>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; font-size: 0.78rem; color: var(--text-secondary);">
          ${p.specs.map(s => `<div>&bull; ${s}</div>`).join('')}
        </div>
      </div>

      <div class="qv-cta-row">
        <button class="btn btn-primary btn-lg" style="flex: 1;" onclick="addQuickViewToCart('${p.id}')">
          Add to Cart &bull; $${p.price}
        </button>
        <button class="btn btn-secondary btn-lg" onclick="toggleWishlist('${p.id}')">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="${state.wishlist.includes(p.id) ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </button>
      </div>
    </div>
  `;

  document.getElementById('quickview-modal')?.classList.add('active');
  document.getElementById('quickview-backdrop')?.classList.add('active');
}

function selectQvColor(colorName, el) {
  document.querySelectorAll('.color-swatch').forEach(s => s.classList.remove('active'));
  el.classList.add('active');
  const label = document.getElementById('qv-selected-color-name');
  if (label) label.textContent = colorName;
}

function addQuickViewToCart(productId) {
  const activeColor = document.getElementById('qv-selected-color-name')?.textContent || null;
  addToCart(productId, 1, activeColor);
  closeQuickView();
  openCartDrawer();
}

function closeQuickView() {
  document.getElementById('quickview-modal')?.classList.remove('active');
  document.getElementById('quickview-backdrop')?.classList.remove('active');
}

// ==========================================
// 12. CHECKOUT FLOW SIMULATION
// ==========================================
function openCheckoutModal() {
  if (state.cart.length === 0) {
    showToast('Your cart is empty', 'info');
    return;
  }

  closeCartDrawer();
  renderCheckoutSummary();

  // Reset to form view
  document.getElementById('checkout-step-container')?.classList.remove('hidden');
  document.getElementById('checkout-success-view')?.classList.add('hidden');

  document.getElementById('checkout-modal')?.classList.add('active');
  document.getElementById('checkout-backdrop')?.classList.add('active');
}

function closeCheckoutModal() {
  document.getElementById('checkout-modal')?.classList.remove('active');
  document.getElementById('checkout-backdrop')?.classList.remove('active');
}

function renderCheckoutSummary() {
  const previewList = document.getElementById('checkout-preview-list');
  if (!previewList) return;

  let subtotal = 0;

  previewList.innerHTML = state.cart.map(item => {
    const prod = state.products.find(p => p.id === item.id);
    if (!prod) return '';

    const itemTotal = prod.price * item.qty;
    subtotal += itemTotal;

    return `
      <div class="co-preview-item">
        <div class="co-item-left">
          <img src="${prod.image}" alt="${prod.title}" class="co-item-thumb">
          <div>
            <div class="co-item-title">${prod.title}</div>
            <div class="co-item-qty">Qty: ${item.qty} &bull; ${item.color}</div>
          </div>
        </div>
        <div class="co-item-price">$${itemTotal.toFixed(2)}</div>
      </div>
    `;
  }).join('');

  // Discount
  let discount = 0;
  if (state.discount) {
    if (state.discount.type === 'percent') discount = subtotal * state.discount.value;
    else if (state.discount.type === 'fixed') discount = Math.min(subtotal, state.discount.value);
  }

  const shipping = (subtotal >= 150 || (state.discount && state.discount.type === 'shipping')) ? 0 : 15.00;
  const tax = (subtotal - discount) * 0.08;
  const total = Math.max(0, subtotal - discount + shipping + tax);

  document.getElementById('co-subtotal').textContent = `$${subtotal.toFixed(2)}`;
  
  const discountRow = document.getElementById('co-discount-row');
  if (discount > 0) {
    discountRow.classList.remove('hidden');
    document.getElementById('co-discount').textContent = `-$${discount.toFixed(2)}`;
  } else {
    discountRow.classList.add('hidden');
  }

  document.getElementById('co-shipping').textContent = shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`;
  document.getElementById('co-tax').textContent = `$${tax.toFixed(2)}`;
  document.getElementById('co-total').textContent = `$${total.toFixed(2)}`;
  document.getElementById('modal-pay-total').textContent = `$${total.toFixed(2)}`;
}

function autoFillCheckout(method) {
  if (method === 'apple') {
    document.getElementById('ship-name').value = 'Alex Mercer';
    document.getElementById('ship-email').value = 'alex.mercer@appleid.com';
    document.getElementById('card-num').value = '•••• •••• •••• 9921 (Apple Pay)';
    showToast('Apple Pay card credentials loaded', 'success');
  } else {
    document.getElementById('ship-name').value = 'Alex Mercer';
    document.getElementById('ship-email').value = 'alex.mercer@gmail.com';
    document.getElementById('card-num').value = '•••• •••• •••• 8840 (Google Pay)';
    showToast('Google Pay card credentials loaded', 'success');
  }
}

function handlePlaceOrder(event) {
  event.preventDefault();

  const submitBtn = document.getElementById('pay-submit-btn');
  const spinner = document.getElementById('pay-spinner');
  const btnText = submitBtn.querySelector('.btn-text');

  // Show realistic authorizing animation
  submitBtn.disabled = true;
  spinner.classList.remove('hidden');
  btnText.classList.add('hidden');

  setTimeout(() => {
    submitBtn.disabled = false;
    spinner.classList.add('hidden');
    btnText.classList.remove('hidden');

    // Trigger celebration view
    const customerName = document.getElementById('ship-name').value.split(' ')[0] || 'Valued Client';
    const orderTotal = document.getElementById('co-total').textContent;
    const randomOrderId = `#AURA-${Math.floor(10000 + Math.random() * 90000)}`;

    // Set delivery date (+3 days from now)
    const delivDate = new Date();
    delivDate.setDate(delivDate.getDate() + 3);
    const dateFormatted = delivDate.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' });

    document.getElementById('success-customer-name').textContent = customerName;
    document.getElementById('success-order-id').textContent = randomOrderId;
    document.getElementById('success-delivery-date').textContent = dateFormatted;
    document.getElementById('success-total-charged').textContent = orderTotal;

    // Switch views
    document.getElementById('checkout-step-container').classList.add('hidden');
    document.getElementById('checkout-success-view').classList.remove('hidden');

    // Fire Confetti explosion!
    launchConfetti();

    // Clear cart
    state.cart = [];
    saveCart();
    updateCartCounters();
  }, 1400);
}

function closeCheckoutAndReset() {
  closeCheckoutModal();
  showToast('Thank you for shopping with AURA LUXE', 'success');
}

function printReceipt() {
  window.print();
}

// ==========================================
// 13. NEWSLETTER & SUPPORT
// ==========================================
function handleNewsletter(event) {
  event.preventDefault();
  const input = document.getElementById('newsletter-email');
  if (!input) return;

  const email = input.value.trim();
  if (!email) return;

  input.value = '';
  showToast(`Welcome! Use code "WELCOME15" for 15% off at checkout`, 'success', 6000);
  copyPromo('WELCOME15');
}

function showSupportModal() {
  showToast('Connecting to 24/7 Priority Concierge...', 'info');
}

// ==========================================
// 14. TOAST NOTIFICATION SYSTEM
// ==========================================
function showToast(message, type = 'info', duration = 3500) {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;

  const iconSvg = type === 'success' 
    ? `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg>`
    : `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>`;

  toast.innerHTML = `
    <div class="toast-icon">${iconSvg}</div>
    <div class="toast-content">
      <span class="toast-title">${type === 'success' ? 'Confirmed' : 'Notification'}</span>
      <span class="toast-desc">${message}</span>
    </div>
    <button class="toast-close" onclick="this.parentElement.remove()">&times;</button>
  `;

  container.appendChild(toast);

  // Trigger animation
  requestAnimationFrame(() => {
    toast.classList.add('show');
  });

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, duration);
}

// ==========================================
// 15. CELEBRATION CANVAS CONFETTI
// ==========================================
let confettiParticles = [];
let confettiAnimationId = null;

function setupConfettiCanvas() {
  const canvas = document.getElementById('confetti-canvas');
  if (!canvas) return;

  const resize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };
  resize();
  window.addEventListener('resize', resize);
}

function launchConfetti() {
  const canvas = document.getElementById('confetti-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  confettiParticles = [];
  const colors = ['#8b5cf6', '#06b6d4', '#10b981', '#f59e0b', '#f43f5e', '#ffffff'];

  for (let i = 0; i < 120; i++) {
    confettiParticles.push({
      x: canvas.width / 2,
      y: canvas.height / 2,
      w: Math.random() * 10 + 6,
      h: Math.random() * 6 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      vx: (Math.random() - 0.5) * 18,
      vy: (Math.random() - 0.7) * 20,
      gravity: 0.35,
      rotation: Math.random() * 360,
      vRot: (Math.random() - 0.5) * 10,
      alpha: 1
    });
  }

  if (confettiAnimationId) cancelAnimationFrame(confettiAnimationId);

  function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let alive = false;

    confettiParticles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += p.gravity;
      p.rotation += p.vRot;
      p.alpha -= 0.007;

      if (p.alpha > 0) {
        alive = true;
        ctx.save();
        ctx.globalAlpha = Math.max(0, p.alpha);
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        ctx.restore();
      }
    });

    if (alive) {
      confettiAnimationId = requestAnimationFrame(render);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }

  render();
}
