// Define an array of products
const products = [
    { id: 1, name: "Laptop", price: 800, category: "Electronics" },
    { id: 2, name: "Shoes", price: 50, category: "Fashion" },
    { id: 3, name: "Phone", price: 600, category: "Electronics" },
    { id: 4, name: "Watch", price: 100, category: "Fashion" },
  ];
  
  // Use `const` and `let`
  const discountPercentage = 10;
  let discountedProducts = [];
  
  // Arrow function to calculate discounted price
  const applyDiscount = (price) => price - (price * discountPercentage) / 100;
  
  // Map: Create a new array with discounted prices
  discountedProducts = products.map((product) => ({
    ...product,
    discountedPrice: applyDiscount(product.price),
  }));
  
  console.log("Discounted Products:", discountedProducts);
  
  // Filter: Get only products from the 'Electronics' category
  const electronics = products.filter(
    (product) => product.category === "Electronics"
  );
  
  console.log("Electronics Products:", electronics);
  
  // Reduce: Calculate the total price of all products
  const totalPrice = products.reduce(
    (accumulator, product) => accumulator + product.price,
    0
  );
  
  console.log("Total Price of All Products:", totalPrice);
  
  // Destructuring: Extract values from an object
  const { name, price } = products[0];
  console.log(`First Product: Name = ${name}, Price = ${price}`);