const products = [
  {
    name: 'Esodec DSR',
    image: 'esodec-dsr.jpg',
    artwork: 'IMG-20261104-WA0000.jpg',
    form: 'oral',
    category: 'Capsules',
    composition: 'Esomeprazole 40 mg + Domperidone 30 mg SR capsules',
    visualType: 'illustration',
  },
  {
    name: 'Noxaget 60',
    image: 'noxaget-60.jpg',
    artwork: 'IMG-20261104-WA0001.jpg',
    form: 'injectables',
    category: 'Injection',
    composition: 'Enoxaparin 60 mg / 0.6 ml injection',
    visualType: 'illustration',
  },
  {
    name: 'Bendler',
    image: 'bendler.jpg',
    artwork: 'IMG-20261104-WA0002.jpg',
    form: 'oral',
    category: 'Oral suspension',
    composition: 'Albendazole oral suspension IP, 400 mg / 10 ml',
  },
  {
    name: 'Apzole 40',
    image: 'apzole-40.jpg',
    artwork: 'IMG-20261104-WA0003.jpg',
    form: 'tablets',
    category: 'Tablets',
    composition: 'Pantoprazole 40 mg tablets',
  },
  {
    name: 'Midtol',
    image: 'midtol.jpg',
    artwork: 'IMG-20261104-WA0005.jpg',
    form: 'injectables',
    category: 'Injection',
    composition: 'Methylprednisolone sodium succinate injection; strength shown as 40 mg / 125 mg on the supplied artwork',
    visualType: 'illustration',
  },
  {
    name: 'Minotrex-S',
    image: 'minotrex-s.jpg',
    artwork: 'IMG-20261104-WA0007.jpg',
    form: 'injectables',
    category: 'Injection',
    composition: 'Meropenem + Sulbactam, 1.5 g injection',
  },
  {
    name: 'Para SG',
    image: 'para-sg.jpg',
    artwork: 'IMG-20261104-WA0008.jpg',
    form: 'injectables',
    category: 'Infusion',
    composition: 'Paracetamol infusion, 1 g / 100 ml',
    visualType: 'illustration',
  },
  {
    name: 'Amox SG',
    image: 'amox-sg.jpg',
    artwork: 'IMG-20261104-WA0010.jpg',
    form: 'tablets',
    category: 'Tablets',
    composition: 'Amoxycillin + Clavulanic Acid, 625 mg tablet',
  },
  {
    name: 'Enzacef-200',
    image: 'enzacef-200.jpg',
    artwork: 'IMG-20261104-WA0012.jpg',
    form: 'tablets',
    category: 'Tablets',
    composition: 'Cefixime 200 mg + Lactic Acid Bacillus 60 million spores',
  },
  {
    name: 'Enox SG',
    image: 'enox-sg.jpg',
    artwork: 'IMG-20261104-WA0014.jpg',
    form: 'injectables',
    category: 'Injection',
    composition: 'Enoxaparin 40 mg / 0.4 ml injection',
    visualType: 'illustration',
  },
  {
    name: 'Tofalase-5',
    image: 'tofalase-5.jpg',
    artwork: 'IMG-20261104-WA0015.jpg',
    form: 'tablets',
    category: 'Tablets',
    composition: 'Tofacitinib 5 mg tablets',
  },
  {
    name: 'Flupena-150',
    image: 'flupena-150.jpg',
    artwork: 'IMG-20261104-WA0016.jpg',
    form: 'tablets',
    category: 'Tablets',
    composition: 'Fluconazole 150 mg tablets',
  },
  {
    name: 'Fienfer-XT',
    image: 'fienfer-xt.jpg',
    artwork: 'IMG-20261104-WA0017.jpg',
    form: 'oral',
    category: 'Oral suspension',
    composition: 'Ferrous Ascorbate + Folic Acid suspension',
  },
  {
    name: 'Abinza-400',
    image: 'abinza-400.jpg',
    artwork: 'IMG-20261104-WA0018.jpg',
    form: 'tablets',
    category: 'Tablets',
    composition: 'Albendazole 400 mg tablets',
  },
  {
    name: 'Ketavin',
    image: 'ketavin.jpg',
    artwork: 'IMG-20261104-WA0019.jpg',
    form: 'other',
    category: 'Topical care',
    composition: 'Ketoconazole + Zinc Pyrithione; product artwork describes a 100 ml shampoo / lotion',
  },
  {
    name: 'Metroyl-600',
    image: 'metroyl-600.jpg',
    artwork: 'IMG-20261104-WA0020.jpg',
    form: 'tablets',
    category: 'Extended-release tablets',
    composition: 'Metronidazole extended-release tablets USP, 600 mg',
  },
  {
    name: 'Minotrex',
    image: 'minotrex.jpg',
    artwork: 'IMG-20261104-WA0021.jpg',
    form: 'injectables',
    category: 'Injection',
    composition: 'Meropenem 1 g injection, I.V.',
  },
  {
    name: 'Ketorconz 10',
    image: 'ketorconz-10.jpg',
    artwork: 'IMG-20261104-WA0022.jpg',
    form: 'tablets',
    category: 'Dispersible tablets',
    composition: 'Ketorolac Tromethamine 10 mg dispersible tablets',
  },
  {
    name: 'Apzole DSR',
    image: 'apzole-dsr.jpg',
    artwork: 'IMG-20261104-WA0023.jpg',
    form: 'oral',
    category: 'Capsules',
    composition: 'Pantoprazole 40 mg + Domperidone 30 mg (SR) capsules',
    visualType: 'illustration',
  },
];

const productGrid = document.querySelector('#product-grid');
const searchInput = document.querySelector('#product-search');
const emptyState = document.querySelector('#empty-state');
const productCount = document.querySelector('#product-count');
const productDialog = document.querySelector('#product-dialog');
let activeFilter = 'all';
let revealObserver;

function observeReveals(root = document) {
  const elements = root.querySelectorAll('.reveal:not(.is-visible)');
  if (!('IntersectionObserver' in window)) {
    elements.forEach((element) => element.classList.add('is-visible'));
    return;
  }
  elements.forEach((element) => revealObserver.observe(element));
}

function makeProductCard(product, index) {
  const card = document.createElement('article');
  card.className = 'product-card reveal';
  card.style.setProperty('--reveal-delay', `${(index % 4) * 55}ms`);
  card.dataset.form = product.form;
  card.dataset.name = product.name.toLowerCase();
  card.innerHTML = `
    <button class="product-image" type="button" data-product="${index}" aria-label="View ${product.name} details">
      <img src="public/products/catalog/${product.image}" alt="${product.name} ${product.visualType || 'product packaging'}" loading="lazy" decoding="async" />
    </button>
    <div class="product-card-body">
      <div class="product-card-top">
        <span class="product-category">${product.category}</span>
        <span class="product-number">SG / ${String(index + 1).padStart(2, '0')}</span>
      </div>
      <h3>${product.name}</h3>
      <button class="card-link" type="button" data-product="${index}">Explore product <span class="arrow" aria-hidden="true"><svg viewBox="0 0 16 16"><path d="M2.5 8h11M9 3.5 13.5 8 9 12.5"/></svg></span></button>
    </div>
  `;
  return card;
}

function renderProducts() {
  const query = searchInput.value.trim().toLowerCase();
  const visibleProducts = products.filter((product) => {
    const matchesForm = activeFilter === 'all' || product.form === activeFilter;
    const searchableText = `${product.name} ${product.category} ${product.composition}`.toLowerCase();
    return matchesForm && searchableText.includes(query);
  });
  productGrid.replaceChildren(...visibleProducts.map((product) => makeProductCard(product, products.indexOf(product))));
  productCount.textContent = String(visibleProducts.length).padStart(2, '0');
  emptyState.hidden = visibleProducts.length > 0;
  observeReveals(productGrid);
}

function openProduct(product) {
  const imagePath = `public/products/catalog/${product.image}`;
  const artworkPath = `public/products/${product.artwork}`;
  document.querySelector('#dialog-image').src = imagePath;
  document.querySelector('#dialog-image').alt = `${product.name} ${product.visualType || 'product packaging'}`;
  document.querySelector('#dialog-category').textContent = product.category;
  document.querySelector('#dialog-title').textContent = product.name;
  document.querySelector('#dialog-composition').textContent = product.composition;
  document.querySelector('#dialog-contact').href =
    `mailto:sgpharma.innovate@gmail.com?subject=${encodeURIComponent(`Product enquiry: ${product.name}`)}`;
  document.querySelector('#dialog-artwork-image').src = artworkPath;
  document.querySelector('#dialog-artwork-image').alt = `Supplied product artwork with details for ${product.name}`;
  document.querySelector('#dialog-artwork-link').href = artworkPath;
  productDialog.showModal();
  document.querySelector('.dialog-close').focus();
}

document.querySelectorAll('.filter-button').forEach((button) => {
  button.addEventListener('click', () => {
    activeFilter = button.dataset.filter;
    document.querySelectorAll('.filter-button').forEach((filterButton) => {
      const selected = filterButton === button;
      filterButton.classList.toggle('is-active', selected);
      filterButton.setAttribute('aria-pressed', String(selected));
    });
    renderProducts();
  });
});

searchInput.addEventListener('input', renderProducts);

productGrid.addEventListener('click', (event) => {
  const button = event.target.closest('[data-product]');
  if (button) openProduct(products[Number(button.dataset.product)]);
});

document.querySelector('.dialog-close').addEventListener('click', () => productDialog.close());
productDialog.addEventListener('cancel', (event) => {
  event.preventDefault();
  productDialog.close();
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && productDialog.open) productDialog.close();
});
productDialog.addEventListener('click', (event) => {
  if (event.target === productDialog) productDialog.close();
});

const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#primary-navigation');
menuToggle.addEventListener('click', () => {
  const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!expanded));
  menuToggle.setAttribute('aria-label', expanded ? 'Open navigation' : 'Close navigation');
  navigation.classList.toggle('is-open', !expanded);
});
navigation.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open navigation');
    navigation.classList.remove('is-open');
  });
});

document.querySelector('#current-year').textContent = String(new Date().getFullYear());
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
} else {
  revealObserver = { observe: (element) => element.classList.add('is-visible') };
}
renderProducts();
observeReveals();
