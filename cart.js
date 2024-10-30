let cart = [];
        function addToCart(productName, price) {
            cart.push({ name: productName, price: price });
            document.getElementById('cart-count').innerText = cart.length;
            updateCartModal();
            alert(`${productName} has been added to your cart!`);
        }

        function updateCartModal() {
            const cartItemsContainer = document.getElementById('cart-items');
            cartItemsContainer.innerHTML = ''; 
            cart.forEach(item => {
                const listItem = document.createElement('li');
                listItem.className = 'list-group-item';
                listItem.innerText = `${item.name} - ${item.price.toFixed(2)}`;
                cartItemsContainer.appendChild(listItem);
            });
        }