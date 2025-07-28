const products = [
  { name: "Laptop", category: "Electronics" },
  { name: "Shirt", category: "Clothing" },
  { name: "Coffee Maker", category: "Home Appliance" },
  { name: "Headphones", category: "Electronics" },
  { name: "Jeans", category: "Clothing" },
];

const searchInput = document.querySelector('#searchInput');
const productList = document.querySelector('#productList');

function renderProducts(filteredProducts) {
  productList.innerHTML = ''; 

  if (filteredProducts.length === 0) {
    productList.innerHTML = `<p>No products found.</p>`;
    return;
  }

  filteredProducts.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <h4>${product.name}</h4>
      <p>Category: ${product.category}</p>
    `;
    productList.appendChild(card);
  });
}

// Initial render
renderProducts(products);

// ✅ 3. Attach real-time filter
searchInput.addEventListener('input', () => {
  const searchValue = searchInput.value.trim().toLowerCase();

  const filtered = products.filter(product =>
    product.name.toLowerCase().includes(searchValue) ||
    product.category.toLowerCase().includes(searchValue)
  );

  renderProducts(filtered);
});
