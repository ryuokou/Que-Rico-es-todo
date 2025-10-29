// Datos del menú
const menuItems = [
    {
        id: 1,
        name: "carne baby beef",
        description: "baby beef a la plancha con un tomate relleno de chimichurri 200gm",
        price: 40000.00,
        category: "especiales",
        image: "imagen/BABY-BEEF.webp"
    },
    {
        id: 2,
        name: "burro crocante",
        description: "cuatro porciones de burrito de pollo desmechada cada uno 45gramos, con queso, lechuga y tomate en tortilla de harina",
        price: 20000.00,
        category: "especiales",
        image: "imagen/01.jpg"
    },
    {
        id: 3,
        name: "porcion de pechuga de pollo",
        description: "la pechuga a la plancha",
        price: 10000.00,
        category: "porciones",
        image: "imagen/355152-filetes-pechuga-pollo-plancha.jpg"
    },
    {
        id: 4,
        name: "porcion de papa a la francesa",
        description: "Porción de papas fritas crujientes",
        price: 5000.00,
        category: "porciones",
        image: "imagen/5617652-serving-of-french-fries.jpg"
    },
    {
        id: 5,
        name: "hamburguesa",
        description: "Hamburguesa de carne con queso, lechuga y tomate huevo y tocineta",
        price: 15000.00,
        category: "especiales",
        image: "imagen/02.jpg"
    },
    {
        id: 6,
        name: "tacos de carne desmechada",
        description: "Tacos de carne desmechada con cebolla y queso gratinado con pico de gallo",
        price: 30000.00,
        category: "especiales",
        image: "imagen/04.jpg"
    },
    {
        id: 8,
        name: "tacos especiales",
        description: "tres Tacos de carne y pollo de 45gramos cada uno con lechuga, salsa",
        price: 20000.00,
        category: "especiales",
        image: "imagen/03.jpg"
    },
    {
        id: 9,
        name: "Jugo de mango",
        description: "Sin azúcar",
        price: 1000.00,
        category: "bebidas",
        image: "imagen/54798032_10161521102315015_2456903198061887488_n.jpg"
    },
    {
        id: 10,
        name: "porcion de ensalada de frutas",
        description: "ensalada de frutas con lechuga, zanahoria, manzana, mango y fresas",
        price: 8000.00,
        category: "porciones",
        image: "imagen/Ensalada-de-frutas-tropical.jpg",
        
    },
    {
        id: 11,
        name: "porcion de tajadas de maduro",
        description: "Tajadas de plátano maduro fritas",
        price: 4000.00,
        category: "porciones",
        image: "imagen/Tajadas-maduras.jpg"
    },
    {
        id: 12,
        name: "Agua de Panela con Limón",
        description: "Bebida tradicional caliente o fría con panela y limón",
        price: 1000.00,
        category: "bebidas",
        image: "imagen/aguapanela.fa8edf7f.jpg"
    },
    {
        id: 13,
        name: "ensalada",
        description: "ensalada fresca con lechuga tomate y cebolla",
        price: 6000.00,
        category: "porciones",
        image: "imagen/ensalada-de-lechuga-y-tomate-foto-cerca.webp"
    },
    {
        id: 14,
        name: "porcion de tajadas de platano",
        description: "Tajadas de plátano fritas con queso rallado",
        price: 3000.00,
        category: "porciones",
        image: "imagen/fc8420d3af100d024a4f6895cf019f15.jpg"
    }
    ,
    {
        id: 15,
        name: "porcion de carne de res",
        description: "Carne de res a la plancha",
        price: 8000.00,
        category: "porciones",
        image: "imagen/f.elconfidencial.com_original_fb4_819_70a_fb481970a34b4ce8d2a05d03283856f2.jpg"
    },
    {
        id: 16,
        name: "porcion de lomo de cerdo",
        description: "Lomo de cerdo a la plancha",
        price: 8000.00,
        category: "porciones",
        image: "imagen/lomo_cerdo_plancha-80e.webp"
    },
    {
        id: 17,
        name: "porcion de patacones",
        description: "patacones de plátano verde",
        price: 5000.00,
        category: "porciones",
        image: "imagen/patacones.jpg"
    },
    {
        id: 18,
        name: "porcion de yuquitas",
        description: "yuquitas fritas crujientes",
        price: 5000.00,
        category: "porciones",
        image: "imagen/11-yuquitas-con-actifry.jpg"
    },
    {
        id: 19,
        name: "pollo entero",
        description: "pollo asado con papas criolla y un sabor unico",
        price: 45000.00,
        category: "especiales",
        image: "imagen/LeCTEz82B_1200x630__1.jpg"
    },
     {
        id: 20,
        name: "ensalada especial",
        description: " ensalada de frutas de piñal,frezas,uvas y banano",
        price: 25000.00,
        category: "especiales",
        image: "imagen/06.jpg"
    },
     {
        id: 21,
        name: "huevo frito",
        description: "huevo frito o al gusto",
        price: 4000.00,
        category: "porciones",
        image: "imagen/huevo_frito-15c.webp"
    },
     {
        id: 22,
        name: "empanada",
        description: "cuatro empanada de queso y jamon",
        price: 10000.00,
        category: "especiales",
        image: "imagen/mini-empanadas-mosaico-frozen6.webp"
    },
    {
        id: 23,
        name: "ensalada de atun",
        description: "ensalada de atun con lechuga, tomate y cebolla",
        price: 25000.00,
        category: "especiales",
        image: "imagen/IMG-20251024-WA0002.jpg"
    },
     {
        id: 24,
        name: "filete de pescado basa",
        description: "filete de pescado basa a la plancha con papa salada",
        price: 19000.00,
        category: "especiales",
        image: "imagen/IMG-20251024-WA0005.jpg"
    },
     {
        id: 25,
        name: "mojarra",
        description: "mojarra con patacon y ensalada",
        price: 19000.00,
        category: "especiales",
        image: "imagen/IMG-20251024-WA0006.jpg"
    },
     {
        id: 26,
        name: "ratatouille",
        description: "plato especial ratatouille con verduras frescas. dato importante este plato tarda una hora en prepararse",
        price: 65000.00,
        category: "especiales",
        image: "imagen/IMG-20251024-WA0008.jpg"
    },
     {
        id: 27,
        name: "jugo especial",
        description: "jugo natural de piña,apio,pepino,espinaca",
        price: 10000.00,
        category: "bebidas",
        image: "imagen/IMG-20251024-WA0015.jpg"
    },
     {
        id: 28,
        name: "jugo especial",
        description: "jugo natural de apio,piña,acelga,manzana",
        price: 10000.00,
        category: "bebidas",
        image: "imagen/IMG-20251024-WA0014.jpg"
    },
     {
        id: 29,
        name: "jugo especial",
        description: "jugo natural de kiwi,pepino,espinaca",
        price: 13000.00,
        category: "bebidas",
        image: "imagen/IMG-20251024-WA0013.jpg"
    },
     {
        id: 30,
        name: "jugo especial",
        description: "jugo natural de piña,apio,pepino,nopales",
        price: 10000.00,
        category: "bebidas",
        image: "imagen/IMG-20251024-WA0012.jpg"
    },
     {
        id: 31,
        name: "jugo especial",
        description: "jugo natural de apio,kiwi,manzana,nopales",
        price: 15000.00,
        category: "bebidas",
        image: "imagen/IMG-20251024-WA0011.jpg"
    },
     {
        id: 32,
        name: "jugo especial",
        description: "jugo natural de apio,pepino,manzana,espinaca",
        price: 15000.00,
        category: "bebidas",
        image: "imagen/IMG-20251024-WA0010.jpg"
    }
    ,
     {
        id: 33,
        name: "jugo de naranja",
        description: "jugo natural de naranja con azucar o sin azucar",
        price: 5000.00,
        category: "bebidas",
        image: "imagen/IMG-20251024-WA0016.jpg"
    },
     {
        id: 34,
        name: "jugo de guayaba",
        description: "jugo natural de guayaba con azucar o sin azucar",
        price: 2000.00,
        category: "bebidas",
        image: "imagen/IMG-20251024-WA0017.jpg"
    },
     {
        id: 35,
        name: "jugo de lulo",
        description: "jugo natural de lulo con azucar o sin azucar",
        price: 3000.00,
        category: "bebidas",
        image: "imagen/IMG-20251024-WA0018.jpg"
    },
     {
        id: 36,
        name: "jugo de guanabana",
        description: "jugo natural de guanabana con azucar o sin azucar",
        price: 10000.00,
        category: "bebidas",
        image: "imagen/IMG-20251024-WA0020.jpg"
    },
     {
        id: 37,
        name: "jugo de natural de mora",
        description: "jugo natural de mora con azucar o sin azucar",
        price: 2000.00,
        category: "bebidas",
        image: "imagen/IMG-20251024-WA0021.jpg"
    },
     {
        id: 38,
        name: "jugo de natural de zanahoria y naranja",
        description: "jugo natural de zanahoria y naranja con azucar o sin azucar",
        price: 5000.00,
        category: "bebidas",
        image: "imagen/IMG-20251024-WA0022.jpg"
    }
];

// Carrito de compras
let cart = [];

// Almacenar los productos del carrito en un array para poder editarlos
let cartProducts = [];

// Configuración del restaurante
const config = {
    name: "Sabores de Casa",
    phone: "+573228418483", // Tu número de WhatsApp
    email: "info@saboresdeacasa.com",
    currency: "$",
    deliveryFee: 3.50,
    minOrderAmount: 15.00
};

// Función utilitaria para calcular el total del carrito
function calculateCartTotal() {
    return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

// Función para formatear el precio en formato colombiano
function formatPrice(price) {
    return `$${price.toLocaleString('es-CO', {minimumFractionDigits: 0, maximumFractionDigits: 0})}`;
}

// Función para actualizar el total del carrito con formato correcto
function updateCartTotal() {
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const totalElement = document.getElementById('totalPrice');
    if (totalElement) {
        totalElement.textContent = total.toLocaleString('es-CO', {minimumFractionDigits: 0, maximumFractionDigits: 0});
    }
}

// Renderizar menú
function renderMenu(items = menuItems) {
    const menuGrid = document.getElementById('menuGrid');
    menuGrid.innerHTML = '';

    items.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';
        menuItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}" onerror="this.src='https://via.placeholder.com/400x300/3498db/ffffff?text=${encodeURIComponent(item.name)}'">
            <div class="item-info">
                <div class="item-name">${item.name}</div>
                <div class="item-description">${item.description}</div>
                <div class="item-price">${formatPrice(item.price)}</div>
                <button class="add-to-cart" onclick="addToCart(${item.id})">
                    <i class="fas fa-plus"></i> Agregar al Carrito
                </button>
            </div>
        `;
        menuGrid.appendChild(menuItem);
    });
}

// Filtrar por categoría
function filterCategory(category) {
    const buttons = document.querySelectorAll('.tab-button');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    if (category === 'all') {
        renderMenu(menuItems);
    } else {
        const filtered = menuItems.filter(item => item.category === category);
        renderMenu(filtered);
    }
}

// Agregar al carrito
function addToCart(itemId) {
    const item = menuItems.find(item => item.id === itemId);
    const existingItem = cart.find(cartItem => cartItem.id === itemId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...item, quantity: 1 });
    }

    updateCartUI();
    showNotification(`${item.name} agregado al carrito`);
}

// Actualizar interfaz del carrito
function updateCartUI() {
    const cartCount = document.getElementById('cartCount');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;

    renderCartItems();
    updateTotal();
}

// Renderizar items del carrito
function renderCartItems() {
    const cartItems = document.getElementById('cartItems');
    cartItems.innerHTML = '';

    if (cart.length === 0) {
        cartItems.innerHTML = '<p style="text-align: center; color: #7f8c8d; padding: 2rem;">Tu carrito está vacío</p>';
        return;
    }

    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">${formatPrice(item.price)}</div>
            </div>
            <div class="quantity-controls">
                <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                <span class="quantity">${item.quantity}</span>
                <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                <button class="quantity-btn" onclick="removeFromCart(${item.id})" style="background: #e74c3c;">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;
        cartItems.appendChild(cartItem);
    });
}

// Actualizar cantidad
function updateQuantity(itemId, change) {
    const item = cart.find(item => item.id === itemId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(itemId);
        } else {
            updateCartUI();
        }
    }
}

// Remover del carrito
function removeFromCart(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    updateCartUI();
}

// Actualizar total
// Reemplaza tu función updateTotal por esta:
function updateTotal() {
    let total = calculateCartTotal();
    let descuento = 0;
    // Verifica si el usuario está logueado y ha gastado más de 100000
    if (currentUser && currentUser.orders) {
        const totalGastado = currentUser.orders.reduce((sum, order) => sum + order.total, 0);
        if (totalGastado > 100000) {
            descuento = total * 0.15;
            total = total - descuento;
            // Muestra un mensaje de descuento en el carrito
            let descuentoMsg = document.getElementById('descuentoMsg');
            if (!descuentoMsg) {
                descuentoMsg = document.createElement('div');
                descuentoMsg.id = 'descuentoMsg';
                descuentoMsg.style.color = '#27ae60';
                descuentoMsg.style.fontWeight = 'bold';
                document.querySelector('.cart-total').appendChild(descuentoMsg);
            }
            descuentoMsg.textContent = `¡Tienes 15% de descuento por ser cliente VIP! -${formatPrice(descuento)}`;
        } else {
            // Si no aplica el descuento, borra el mensaje si existe
            const descuentoMsg = document.getElementById('descuentoMsg');
            if (descuentoMsg) descuentoMsg.remove();
        }
    }
    document.getElementById('totalPrice').textContent = total.toFixed(2);
}

// Toggle carrito
function toggleCart() {
    const modal = document.getElementById('cartModal');
    modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
}

// Checkout
function checkout() {
    if (cart.length === 0) {
        alert('Tu carrito está vacío');
        return;
    }

    // Mostrar modal de datos del cliente
    document.getElementById('customerModal').style.display = 'block';
    toggleCart(); // Cerrar carrito
}

// Cerrar modal de datos del cliente
function closeCustomerModal() {
    document.getElementById('customerModal').style.display = 'none';
    document.getElementById('customerForm').reset();
}

// Procesar formulario de datos del cliente
document.addEventListener('DOMContentLoaded', function() {
    const customerForm = document.getElementById('customerForm');
    
    if (customerForm) {
        customerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Obtener datos del formulario
            const customerName = document.getElementById('customerName').value.trim();
            const customerPhone = document.getElementById('customerPhone').value.trim();
            const customerAddress = document.getElementById('customerAddress').value.trim();
            const customerApartment = document.getElementById('customerApartment').value.trim();
            const customerNotes = document.getElementById('customerNotes').value.trim();
            
            // Validar campos requeridos
            if (!customerName || !customerPhone || !customerAddress) {
                alert('Por favor completa todos los campos obligatorios (*)');
                return;
            }
            
            // Validar formato de teléfono (números colombianos)
            const phoneRegex = /^[3][0-9]{9}$/;
            if (!phoneRegex.test(customerPhone.replace(/\s/g, ''))) {
                alert('Por favor ingresa un número de teléfono válido (ej: 3138776171)');
                return;
            }
            
            // Generar mensaje para WhatsApp
            sendToWhatsApp(customerName, customerPhone, customerAddress, customerApartment, customerNotes);
        });
    }
    
    renderMenu();
});

// Enviar pedido por WhatsApp
function sendToWhatsApp(name, phone, address, apartment, notes) {
    const total = calculateCartTotal();
    const orderDate = new Date().toLocaleDateString('es-CO', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
    
    // Crear resumen del pedido
    let orderSummary = "🍽️ *NUEVO PEDIDO - SABORES DE CASA* 🍽️\n\n";
    orderSummary += `📅 *Fecha:* ${orderDate}\n\n`;
    orderSummary += "📋 *PEDIDO:*\n";
    
    cart.forEach((item, index) => {
        orderSummary += `${index + 1}. *${item.name}*\n`;
        orderSummary += `   • Cantidad: ${item.quantity}\n`;
        orderSummary += `   • Precio unitario: ${formatPrice(item.price)}\n`;
        orderSummary += `   • Subtotal: ${formatPrice(item.price * item.quantity)}\n\n`;
    });
    
    orderSummary += `💰 *TOTAL: ${formatPrice(total)}*\n\n`;
    
    // Datos del cliente
    orderSummary += "👤 *DATOS DEL CLIENTE:*\n";
    orderSummary += `• *Nombre:* ${name}\n`;
    orderSummary += `• *Teléfono:* ${phone}\n`;
    orderSummary += `• *Dirección:* ${address}\n`;
    
    if (apartment) {
        orderSummary += `• *Apartamento/Casa:* ${apartment}\n`;
    }
    
    if (notes) {
        orderSummary += `• *Notas:* ${notes}\n`;
    }
    
    orderSummary += "\n✅ *Pedido confirmado*\n";
    orderSummary += "⏰ Tiempo estimado de entrega: 10-15 minutos\n";
    orderSummary += "📞 El cliente será contactado para confirmar la entrega";
    
    // Codificar mensaje para URL
    const encodedMessage = encodeURIComponent(orderSummary);
    
    // URL de WhatsApp (sin el + en el número)
    const whatsappURL = `https://wa.me/573228418483?text=${encodedMessage}`;
    
    // Abrir WhatsApp
    window.open(whatsappURL, '_blank');
    
    // Limpiar carrito y cerrar modal
    // Guardar pedido en historial del usuario (importante para el descuento)
    saveOrderToHistory({
        name,
        phone,
        address,
        apartment,
        notes
    });
    cart = [];
    updateCartUI();
    closeCustomerModal();
    
    // Mostrar confirmación al cliente
    showNotification('Pedido enviado exitosamente por WhatsApp');
    
    // Mostrar mensaje de confirmación más detallado
    setTimeout(() => {
        alert(`¡Gracias ${name}!\n\nTu pedido ha sido enviado por WhatsApp.\n\nTotal: ${formatPrice(total)}\n\nRecibirás una llamada pronto para confirmar tu pedido y coordinar la entrega.`);
    }, 1000);
}

// Mostrar notificación
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Cerrar modal al hacer clic fuera
window.onclick = function(event) {
    const cartModal = document.getElementById('cartModal');
    const customerModal = document.getElementById('customerModal');
    
    if (event.target === cartModal) {
        cartModal.style.display = 'none';
    }
    
    if (event.target === customerModal) {
        customerModal.style.display = 'none';
    }
}

// Inicializar la página
document.addEventListener('DOMContentLoaded', function() {
    renderMenu();
});

// Funciones utilitarias adicionales
const Utils = {
    // Validar pedido mínimo
    validateMinOrder: function() {
        return calculateCartTotal() >= config.minOrderAmount;
    },

    // Calcular total con delivery
    calculateTotalWithDelivery: function() {
        return calculateCartTotal() + config.deliveryFee;
    },

    // Buscar platos
    searchItems: function(searchTerm) {
        const term = searchTerm.toLowerCase();
        return menuItems.filter(item => 
            item.name.toLowerCase().includes(term) ||
            item.description.toLowerCase().includes(term)
        );
    },

    // Obtener platos por categoría
    getItemsByCategory: function(category) {
        return menuItems.filter(item => item.category === category);
    },

    // Obtener platos populares (ordenados por precio)
    getPopularItems: function(limit = 3) {
        return [...menuItems].sort((a, b) => b.price - a.price).slice(0, limit);
    }
};

// Diferenciar entre agregar nuevo y editar existente
let editingIndex = null;

// Botón para agregar un nuevo almuerzo personalizado
function openCustomLunchModalForNew() {
    editingIndex = null;
    document.getElementById('customLunchForm').reset();
    openCustomLunchModal();
}
function openCustomLunchModal() {
    document.getElementById('customLunchModal').style.display = 'block';
}
function closeCustomLunchModal() {
    document.getElementById('customLunchModal').style.display = 'none';
    editingIndex = null;
    document.getElementById('customLunchForm').reset();
}
function editCartItem(idx) {
    const item = cartProducts[idx];
    document.querySelectorAll('input[name="entrada"]').forEach(r => r.checked = (r.value === (item.entrada || "")));
    document.getElementById('lunchPrincipio').value = item.principio || "";
    document.getElementById('lunchProtein').value = item.protein || "";
    document.getElementById('lunchJugo').value = item.jugo || "";
    document.querySelectorAll('input[name="azucar"]').forEach(r => r.checked = (r.value === (item.azucar || "")));
    editingIndex = idx;
    openCustomLunchModal();
}
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('customLunchForm');
    if(form){
        form.onsubmit = function(e) {
            e.preventDefault();
            const entrada = form.entrada.value;
            const principio = form.principio.value;
            const protein = form.protein.value;
            const jugo = form.jugo.value;
            const azucar = form.azucar.value;
            addCustomLunchToCart({entrada, principio, protein, jugo, azucar}, editingIndex);
            closeCustomLunchModal();
        }
    }
});

// Agregar producto personalizado al carrito
function addCustomLunchToCart({entrada, principio, protein, jugo, azucar}, editIndex = null) {
    const precioPersonalizado = 16000; // Precio fijo para el almuerzo personalizado
    const customProduct = {
        id: Date.now(), // id único temporal
        name: "Almuerzo normal completo",
        description: `Entrada: ${entrada || '-'}, Principio: ${principio || '-'}, Proteína: ${protein || '-'}, Jugo: ${jugo || '-'} (${azucar || '-'})`,
        price: precioPersonalizado,
        quantity: 1
    };
    if (editIndex !== null) {
        // Editar producto existente en cartProducts
        cartProducts[editIndex] = {
            nombre: "Almuerzo normal completo",
            entrada,
            principio,
            protein,
            jugo,
            azucar,
            price: precioPersonalizado
        };
        // También actualizar en cart (buscar por name y description)
        const idx = cart.findIndex(item =>
            item.name === "Almuerzo normal completo" &&
            item.description === customProduct.description
        );
        if (idx !== -1) {
            cart[idx] = { ...customProduct };
        }
    } else {
        // Agregar nuevo producto personalizado a cartProducts
        cartProducts.push({
            nombre: "Almuerzo normal completo",
            entrada,
            principio,
            protein,
            jugo,
            azucar,
            price: precioPersonalizado
        });
        // Agregar también al carrito principal
        cart.push(customProduct);
    }
    renderCart();
    updateCartUI();
}

// Función para renderizar el carrito
function renderCart() {
    const cartItems = document.getElementById('cartItems');
    cartItems.innerHTML = '';
    cartProducts.forEach((item, idx) => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'cart-item';
        itemDiv.innerHTML = `
            <strong>${item.nombre}</strong><br>
            <span>
                Entrada: ${item.entrada || '-'}, 
                Principio: ${item.principio || '-'}, 
                Proteína: ${item.protein || '-'}, 
                Jugo: ${item.jugo || '-'} (${item.azucar || '-'})
            </span><br>
            <span><b>Precio:</b> ${formatPrice(item.price) ? item.price.toLocaleString('es-CO') : '-'}</span>
            <button class="remove-btn" onclick="removeCartItem(${idx})">Eliminar</button>
            <button class="edit-btn" onclick="editCartItem(${idx})">Editar</button>
        `;
        cartItems.appendChild(itemDiv);
    });
    updateCartCount();
}

// Eliminar producto del carrito
function removeCartItem(idx) {
    cartProducts.splice(idx, 1);
    renderCart();
}

// Actualiza el contador del carrito
function updateCartCount() {
    document.getElementById('cartCount').textContent = cartProducts.length;
}

// Sistema de usuarios
let currentUser = null;

// Cargar usuario al iniciar la página
document.addEventListener('DOMContentLoaded', function() {
    loadCurrentUser();
});

// Cargar usuario desde localStorage
function loadCurrentUser() {
    const savedUser = localStorage.getItem('todoRicoUser');
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
        updateUserButton();
        preloadUserData();
    }
}

// Actualizar botón de usuario
function updateUserButton() {
    const userButton = document.getElementById('userButton');
    const userButtonText = document.getElementById('userButtonText');
    
    if (currentUser) {
        userButton.classList.add('logged-in');
        userButtonText.textContent = currentUser.name.split(' ')[0]; // Solo primer nombre
    } else {
        userButton.classList.remove('logged-in');
        userButtonText.textContent = 'Iniciar Sesión';
    }
}

// Mostrar/ocultar modal de usuario
function toggleUserModal() {
    if (currentUser) {
        // Si está logueado, mostrar menú de usuario
        showUserMenu();
    } else {
        // Si no está logueado, mostrar login
        document.getElementById('userModal').style.display = 'flex';
        showLoginForm();
    }
}

// Cerrar modal de usuario
function closeUserModal() {
    document.getElementById('userModal').style.display = 'none';
}

// Mostrar formulario de login
function showLoginForm() {
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('registerForm').style.display = 'none';
    document.getElementById('userModalTitle').textContent = 'Iniciar Sesión';
}

// Mostrar formulario de registro
function showRegisterForm() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('registerForm').style.display = 'block';
    document.getElementById('userModalTitle').textContent = 'Registrarse';
}

// Registrar usuario
function registerUser(event) {
    event.preventDefault();
    
    const name = document.getElementById('regName').value;
    const phone = document.getElementById('regPhone').value;
    const password = document.getElementById('regPassword').value;
    const address = document.getElementById('regAddress').value;
    const apartment = document.getElementById('regApartment').value;
    
    // Validar que la contraseña tenga al menos 6 caracteres
    if (password.length < 6) {
        alert('La contraseña debe tener al menos 6 caracteres');
        return;
    }
    
    // Verificar si el usuario ya existe
    const existingUsers = JSON.parse(localStorage.getItem('todoRicoUsers') || '[]');
    if (existingUsers.find(user => user.phone === phone)) {
        alert('Ya existe una cuenta con este número de teléfono');
        return;
    }
    
    // Crear nuevo usuario
    const newUser = {
        id: Date.now(),
        name,
        phone,
        password,
        address,
        apartment,
        registeredAt: new Date().toISOString(),
        orders: []
    };
    
    // Guardar en lista de usuarios
    existingUsers.push(newUser);
    localStorage.setItem('todoRicoUsers', JSON.stringify(existingUsers));
    
    // Loguar automáticamente
    currentUser = newUser;
    localStorage.setItem('todoRicoUser', JSON.stringify(currentUser));
    
    // Actualizar UI
    updateUserButton();
    preloadUserData();
    closeUserModal();
    
    alert('¡Cuenta creada exitosamente! Bienvenido a ¡Todo Rico!');
}

// Iniciar sesión
function loginUser(event) {
    event.preventDefault();
    
    const phone = document.getElementById('loginPhone').value;
    const password = document.getElementById('loginPassword').value;
    
    // Buscar usuario
    const existingUsers = JSON.parse(localStorage.getItem('todoRicoUsers') || '[]');
    const user = existingUsers.find(u => u.phone === phone && u.password === password);
    
    if (user) {
        currentUser = user;
        localStorage.setItem('todoRicoUser', JSON.stringify(currentUser));
        updateUserButton();
        preloadUserData();
        closeUserModal();
        alert(`¡Bienvenido de vuelta, ${user.name.split(' ')[0]}!`);
    } else {
        alert('Teléfono o contraseña incorrectos');
    }
}

// Precargar datos del usuario en el formulario de entrega
function preloadUserData() {
    if (currentUser) {
        document.getElementById('customerName').value = currentUser.name;
        document.getElementById('customerPhone').value = currentUser.phone;
        document.getElementById('customerAddress').value = currentUser.address;
        document.getElementById('customerApartment').value = currentUser.apartment || '';
    }
}

// Mostrar menú de usuario (cuando está logueado)
function showUserMenu() {
    const options = [
        '1. Ver mi perfil',
        '2. Historial de pedidos',
        '3. Cerrar sesión'
    ];
    
    const choice = prompt(`Hola ${currentUser.name.split(' ')[0]}!\n\n${options.join('\n')}\n\nElige una opción (1-3):`);
    
    switch(choice) {
        case '1':
            showUserProfile();
            break;
        case '2':
            showOrderHistory();
            break;
        case '3':
            logoutUser();
            break;
    }
}

// Mostrar perfil de usuario
function showUserProfile() {
    alert(`Perfil de Usuario:\n\nNombre: ${currentUser.name}\nTeléfono: ${currentUser.phone}\nDirección: ${currentUser.address}\nApartamento: ${currentUser.apartment || 'No especificado'}\nMiembro desde: ${new Date(currentUser.registeredAt).toLocaleDateString()}`);
}

// Mostrar historial de pedidos
function showOrderHistory() {
    if (currentUser.orders.length === 0) {
        alert('Aún no has realizado pedidos. ¡Haz tu primer pedido!');
    } else {
        let history = 'Historial de Pedidos:\n\n';
        currentUser.orders.forEach((order, index) => {
            history += `${index + 1}. ${new Date(order.date).toLocaleDateString()} - Total: $${order.total.toLocaleString('es-CO')}\n`;
        });
        alert(history);
    }
}

// Cerrar sesión
function logoutUser() {
    currentUser = null;
    localStorage.removeItem('todoRicoUser');
    updateUserButton();
    
    // Limpiar formulario de entrega
    document.getElementById('customerName').value = '';
    document.getElementById('customerPhone').value = '';
    document.getElementById('customerAddress').value = '';
    document.getElementById('customerApartment').value = '';
    
    alert('Sesión cerrada. ¡Gracias por visitarnos!');
}

// Guardar pedido en historial del usuario
function saveOrderToHistory(orderData) {
    if (currentUser) {
        const order = {
            id: Date.now(),
            date: new Date().toISOString(),
            items: [...cart],
            total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
            customerData: orderData
        };
        
        currentUser.orders.push(order);
        
        // Actualizar en localStorage
        localStorage.setItem('todoRicoUser', JSON.stringify(currentUser));
        
        // Actualizar en lista de usuarios
        const existingUsers = JSON.parse(localStorage.getItem('todoRicoUsers') || '[]');
        const userIndex = existingUsers.findIndex(u => u.id === currentUser.id);
        if (userIndex !== -1) {
            existingUsers[userIndex] = currentUser;
            localStorage.setItem('todoRicoUsers', JSON.stringify(existingUsers));
        }
    }
}

// Dashboard de Usuario Mejorado
function showUserMenu() {
    document.getElementById('userDashboard').style.display = 'flex';
    loadUserDashboard();
}

function closeUserDashboard() {
    document.getElementById('userDashboard').style.display = 'none';
}

function showDashboardSection(sectionName) {
    // Ocultar todas las secciones
    document.querySelectorAll('.dashboard-section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Desactivar todos los botones de navegación
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Mostrar la sección seleccionada
    document.getElementById(sectionName + 'Section').classList.add('active');
    
    // Activar el botón correspondiente
    event.target.classList.add('active');
    
    // Cargar datos específicos de cada sección
    switch(sectionName) {
        case 'profile':
            loadProfileData();
            break;
        case 'orders':
            loadOrdersData();
            break;
        case 'addresses':
            loadAddressesData();
            break;
        case 'settings':
            loadSettingsData();
            break;
    }
}

function loadUserDashboard() {
    if (currentUser) {
        // Cargar información básica del usuario
        document.getElementById('profileName').textContent = currentUser.name;
        document.getElementById('profilePhone').textContent = currentUser.phone;
        
        const memberDate = new Date(currentUser.registeredAt).toLocaleDateString('es-CO');
        document.getElementById('memberDate').textContent = memberDate;
        
        // Cargar estadísticas
        loadOrdersStats();
        loadProfileData();
    }
}

function loadProfileData() {
    if (currentUser) {
        document.getElementById('editName').value = currentUser.name || '';
        document.getElementById('editPhone').value = currentUser.phone || '';
        document.getElementById('editEmail').value = currentUser.email || '';
    }
}

function loadOrdersStats() {
    if (currentUser && currentUser.orders) {
        const totalOrders = currentUser.orders.length;
        const totalSpent = currentUser.orders.reduce((sum, order) => sum + order.total, 0);
        
        document.getElementById('totalOrders').textContent = totalOrders;
        document.getElementById('totalSpent').textContent = totalSpent.toLocaleString('es-CO');
    }
}

function loadOrdersData() {
    const ordersList = document.getElementById('ordersList');
    
    if (!currentUser || !currentUser.orders || currentUser.orders.length === 0) {
        ordersList.innerHTML = `
            <div style="text-align:center;padding:40px;color:#666;">
                <i class="fas fa-receipt" style="font-size:3rem;margin-bottom:15px;opacity:0.3;"></i>
                <p>Aún no has realizado pedidos</p>
                <p>¡Haz tu primer pedido ahora!</p>
            </div>
        `;
        return;
    }
    
    const ordersHTML = currentUser.orders.map((order, index) => {
        const orderDate = new Date(order.date).toLocaleDateString('es-CO');
        const orderTime = new Date(order.date).toLocaleTimeString('es-CO', {hour: '2-digit', minute: '2-digit'});
        const itemsCount = order.items.length;
        const status = getOrderStatus(order.date);
        
        return `
            <div class="order-item">
                <div class="order-header">
                    <span class="order-id">Pedido #${order.id.toString().slice(-6)}</span>
                    <span class="order-status ${status.class}">${status.text}</span>
                </div>
                <div class="order-date">${orderDate} a las ${orderTime}</div>
                <div class="order-items">
                    ${itemsCount} producto${itemsCount > 1 ? 's' : ''} • ${order.customerData.address}
                </div>
                <div class="order-total">Total: $${order.total.toLocaleString('es-CO')}</div>
            </div>
        `;
    }).reverse().join('');
    
    ordersList.innerHTML = ordersHTML;
}

function getOrderStatus(orderDate) {
    const now = new Date();
    const orderTime = new Date(orderDate);
    const diffHours = (now - orderTime) / (1000 * 60 * 60);
    
    if (diffHours < 1) {
        return { class: 'pending', text: 'En preparación' };
    } else if (diffHours < 2) {
        return { class: 'pending', text: 'En camino' };
    } else {
        return { class: 'delivered', text: 'Entregado' };
    }
}

function loadAddressesData() {
    const addressesList = document.getElementById('addressesList');
    const addresses = currentUser.addresses || [];
    
    if (addresses.length === 0) {
        addressesList.innerHTML = `
            <div style="text-align:center;padding:40px;color:#666;">
                <i class="fas fa-map-marker-alt" style="font-size:3rem;margin-bottom:15px;opacity:0.3;"></i>
                <p>No tienes direcciones guardadas</p>
                <p>Agrega una dirección para pedidos más rápidos</p>
            </div>
        `;
        return;
    }
    
    const addressesHTML = addresses.map((address, index) => `
        <div class="address-item">
            <div class="address-actions">
                <button class="address-btn" onclick="editAddress(${index})" title="Editar">
                    <i class="fas fa-edit"></i>
                </button>
                <button class="address-btn" onclick="deleteAddress(${index})" title="Eliminar">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
            <div class="address-name">${address.name}</div>
            <div class="address-details">
                ${address.street}<br>
                ${address.apartment ? address.apartment + '<br>' : ''}
                ${address.notes ? '<em>' + address.notes + '</em>' : ''}
            </div>
        </div>
    `).join('');
    
    addressesList.innerHTML = addressesHTML;
}

function showAddAddressForm() {
    document.getElementById('addAddressForm').style.display = 'block';
}

function cancelAddAddress() {
    document.getElementById('addAddressForm').style.display = 'none';
    document.getElementById('addAddressForm').querySelector('form').reset();
}

function saveNewAddress(event) {
    event.preventDefault();
    
    const newAddress = {
        name: document.getElementById('newAddressName').value,
        street: document.getElementById('newAddressStreet').value,
        apartment: document.getElementById('newAddressApt').value,
        notes: document.getElementById('newAddressNotes').value
    };
    
    if (!currentUser.addresses) {
        currentUser.addresses = [];
    }
    
    currentUser.addresses.push(newAddress);
    
    // Actualizar en localStorage
    localStorage.setItem('todoRicoUser', JSON.stringify(currentUser));
    updateUserInDatabase();
    
    // Recargar la lista
    loadAddressesData();
    cancelAddAddress();
    
    alert('Dirección guardada exitosamente');
}

function deleteAddress(index) {
    if (confirm('¿Estás seguro de eliminar esta dirección?')) {
        currentUser.addresses.splice(index, 1);
        localStorage.setItem('todoRicoUser', JSON.stringify(currentUser));
        updateUserInDatabase();
        loadAddressesData();
    }
}

function loadSettingsData() {
    // Cargar configuraciones guardadas
    const settings = currentUser.settings || {};
    
    document.getElementById('emailNotifications').checked = settings.emailNotifications !== false;
    document.getElementById('promoNotifications').checked = settings.promoNotifications !== false;
}

function showChangePasswordForm() {
    const newPassword = prompt('Ingresa tu nueva contraseña (mínimo 6 caracteres):');
    
    if (newPassword && newPassword.length >= 6) {
        currentUser.password = newPassword;
        localStorage.setItem('todoRicoUser', JSON.stringify(currentUser));
        updateUserInDatabase();
        alert('Contraseña actualizada exitosamente');
    } else if (newPassword) {
        alert('La contraseña debe tener al menos 6 caracteres');
    }
}

function updateUserInDatabase() {
    // Actualizar en la lista de usuarios
    const existingUsers = JSON.parse(localStorage.getItem('todoRicoUsers') || '[]');
    const userIndex = existingUsers.findIndex(u => u.id === currentUser.id);
    if (userIndex !== -1) {
        existingUsers[userIndex] = currentUser;
        localStorage.setItem('todoRicoUsers', JSON.stringify(existingUsers));
    }
}

// Actualizar el evento de submit del perfil
document.addEventListener('DOMContentLoaded', function() {
    const editProfileForm = document.getElementById('editProfileForm');
    if (editProfileForm) {
        editProfileForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            currentUser.name = document.getElementById('editName').value;
            currentUser.phone = document.getElementById('editPhone').value;
            currentUser.email = document.getElementById('editEmail').value;
            
            localStorage.setItem('todoRicoUser', JSON.stringify(currentUser));
            updateUserInDatabase();
            updateUserButton();
            
            alert('Perfil actualizado exitosamente');
        });
    }
});

// Optimizaciones para Core Web Vitals
document.addEventListener('DOMContentLoaded', function() {
    // Lazy loading para imágenes
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.loading = 'lazy';
    });
    
    // Preload crítico
    const criticalResources = [
        'styles.css',
        'imagen/08.jpg' // Imagen de fondo
    ];
    
    criticalResources.forEach(resource => {
        const link = document.createElement('link');
        link.rel = 'preload';
        if (resource.endsWith('.css')) {
            link.as = 'style';
        } else {
            link.as = 'image';
        }
        link.href = resource;
        document.head.appendChild(link);
    });
});

// Mejorar rendimiento del scroll
let ticking = false;
function updateOnScroll() {
    // Animaciones optimizadas aquí
    ticking = false;
}

document.addEventListener('scroll', function() {
    if (!ticking) {
        requestAnimationFrame(updateOnScroll);
        ticking = true;
    }
});

// Chef Virtual - ¡LA REVOLUCIÓN DE TODO RICO!
let chefActive = true;
let chefMessages = [];
let currentScrollPosition = 0;

// Base de conocimiento del Chef Rico
const chefKnowledge = {
        healthy: [
        "Si buscas bajar de peso o comer saludable, te recomiendo nuestras ensaladas frescas, la pechuga de pollo a la plancha o el filete de pescado basa. Son opciones ligeras y deliciosas 🥗🐟🍗",
        "Para una buena digestión, prueba la ensalada de frutas o el jugo de mango sin azúcar. También puedes pedir agua de panela con limón, es natural y refrescante 🍹🍋",
        "¿Necesitas energía? Elige la carne baby beef o el almuerzo completo con arroz y proteína. ¡Te dará fuerza para todo el día! 💪🥩🍚",
        "Si buscas proteína, la pechuga de pollo, la carne de res y el lomo de cerdo son excelentes opciones. Puedes acompañarlas con ensalada para balancear tu plato 🍖🥗",
        "Para los niños, recomiendo las empanadas de queso y jamón, el burro crocante o el pollo asado. Son platos suaves y les encantan 👦👧🍗"
    ],
    greetings: [
        "¡Hola! Soy el Chef Rico 👨‍🍳 ¿En qué puedo ayudarte hoy?",
        "¡Bienvenido a Todo Rico! Estoy aquí para hacer tu experiencia deliciosa 🍽️",
        "¡Hola, amante de la buena comida! ¿Listo para descubrir sabores increíbles? 🤤"
    ],
    
    recommendations: [
        "Mi recomendación especial de hoy es nuestro Almuerzo Completo 🍽️ ¡Puedes armarlo completamente a tu gusto!",
        "Para una experiencia única, te sugiero combinar nuestra pechuga jugosa con arroz y ensalada fresca 🥗",
        "Si buscas algo reconfortante, nada como una buena porción de nuestro guiso casero 🍲"
    ],
    
    combinations: [
        "¡Excelente pregunta! Puedes combinar cualquier proteína con nuestros acompañamientos: arroz, papa, yuca, ensalada... ¡Las posibilidades son infinitas! 🎨",
        "Mi tip de chef: La pechuga va perfecta con arroz , la carne con papa criolla, y el pollo con ensalada César 👨‍🍳",
        "Para una combinación balanceada, siempre incluye una proteína, un carbohidrato y vegetales frescos 🥬🍖🍚"
    ],
    
    popular: [
        "¡Nuestro plato más popular es definitivamente el Almuerzo Completo! 🔥 Los clientes aman poder personalizarlo",
        "La pechuga a la plancha con arroz es un favorito absoluto 😍",
        "Muchos clientes repiten nuestro pollo al ajillo con papa criolla ¡Es irresistible! 🤤"
    ],
    
    tips: [
        "💡 Tip de Chef: Siempre pedimos los vegetales frescos del día para garantizar máxima calidad",
        "🔥 Secreto de cocina: Marinamos nuestras carnes por 24 horas para un sabor único",
        "⭐ Recomendación: Agrega nuestro chimichurri casero, ¡hace la diferencia!"
    ]
};

// Mensajes contextuales según el scroll
const contextualMessages = {
    menu: [
        "¿Ves algo que te llame la atención? ¡Puedo explicarte cualquier plato! 🍽️",
        "Cada uno de nuestros platos está preparado con amor y los mejores ingredientes 💚",
        "¿Indeciso? ¡Déjame ayudarte a encontrar tu combinación perfecta! 🎯"
    ],
    hero: [
        "¡Bienvenido a Todo Rico! Donde cada plato cuenta una historia deliciosa 📖",
        "¿Primera vez aquí? ¡Te voy a contar por qué somos especiales! ✨"
    ]
};

// Inicializar Chef Virtual
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(showChefGreeting, 6000); // Aparece después de la animación de carga
    setupScrollListener();
});

function showChefGreeting() {
    if (!chefActive) return;
    
    const greeting = chefKnowledge.greetings[Math.floor(Math.random() * chefKnowledge.greetings.length)];
    showChefMessage(greeting);
    
    // Auto-ocultar el mensaje después de 8 segundos
    setTimeout(() => {
        const bubble = document.getElementById('chefSpeech');
        if (bubble) {
            bubble.style.opacity = '0.7';
            bubble.style.transform = 'scale(0.9)';
        }
    }, 8000);
}

function showChefMessage(message, typing = true) {
    const chefMessage = document.getElementById('chefMessage');
    const typingIndicator = document.getElementById('typingIndicator');
    const bubble = document.getElementById('chefSpeech');
    
    // Resetear estilos
    bubble.style.opacity = '1';
    bubble.style.transform = 'scale(1)';
    
    if (typing) {
        // Mostrar indicador de escritura
        chefMessage.style.display = 'none';
        typingIndicator.style.display = 'flex';
        
        setTimeout(() => {
            typingIndicator.style.display = 'none';
            chefMessage.textContent = message;
            chefMessage.style.display = 'block';
            
            // Animación de aparición del mensaje
            chefMessage.style.opacity = '0';
            chefMessage.style.transform = 'translateY(10px)';
            
            setTimeout(() => {
                chefMessage.style.transition = 'all 0.3s ease';
                chefMessage.style.opacity = '1';
                chefMessage.style.transform = 'translateY(0)';
            }, 50);
            
        }, 1500);
    } else {
        chefMessage.textContent = message;
    }
}

function toggleChef() {
    const chatModal = document.getElementById('chefChat');
    const isVisible = chatModal.style.display === 'block';
    
    if (isVisible) {
        closeChefChat();
    } else {
        openChefChat();
    }
}

function openChefChat() {
    const chatModal = document.getElementById('chefChat');
    chatModal.style.display = 'block';
    // Agregar mensaje de bienvenida si no hay mensajes
    const messagesContainer = document.getElementById('chatMessages');
    if (chefMessages.length === 0) {
        addChefChatMessage("¡Perfecto! Ahora podemos charlar mejor. ¿En qué te puedo ayudar? 😊");
        // Mensaje de ejemplos de preguntas
        addChefChatMessage("Ejemplos de preguntas que puedes hacerme:\n• ¿Qué me recomiendas para bajar de peso?\n• ¿Qué plato es bueno para la digestión?\n• ¿Qué puedo pedir para tener más energía?\n• ¿Qué plato tiene más proteína?\n• ¿Qué recomiendas para niños?\n¡O pregúntame por cualquier plato del menú!");
    }
}

function closeChefChat() {
    const chatModal = document.getElementById('chefChat');
    chatModal.style.display = 'none';
}

function addChefChatMessage(message) {
    const messagesContainer = document.getElementById('chatMessages');
    chefMessages.push(message);
    
    const messageElement = document.createElement('div');
    messageElement.className = 'chef-message';
    messageElement.innerHTML = `
        <span class="message-avatar">👨‍🍳</span>
        <div class="message-content">
            <p>${message}</p>
        </div>
    `;
    
    messagesContainer.appendChild(messageElement);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function askChef(question) {
    // Agregar pregunta del usuario
    addUserMessage(question);

    // Generar respuesta del chef
    let response = "";
    const q = question.toLowerCase();

    if (q.includes('bajar de peso') || q.includes('saludable') || q.includes('ligero')) {
        response = chefKnowledge.healthy[0];
    } else if (q.includes('digestión') || q.includes('digestivo') || q.includes('estreñimiento')) {
        response = chefKnowledge.healthy[1];
    } else if (q.includes('energía') || q.includes('cansancio') || q.includes('fuerza')) {
        response = chefKnowledge.healthy[2];
    } else if (q.includes('proteína') || q.includes('musculo') || q.includes('fuerte')) {
        response = chefKnowledge.healthy[3];
    } else if (q.includes('niño') || q.includes('niña') || q.includes('infantil') || q.includes('niños')) {
        response = chefKnowledge.healthy[4];
    } else if (q.includes('recomendación') || q.includes('recomienda')) {
        response = chefKnowledge.recommendations[Math.floor(Math.random() * chefKnowledge.recommendations.length)];
    } else if (q.includes('combinar') || q.includes('combinación')) {
        response = chefKnowledge.combinations[Math.floor(Math.random() * chefKnowledge.combinations.length)];
    } else if (q.includes('popular') || q.includes('favorito')) {
        response = chefKnowledge.popular[Math.floor(Math.random() * chefKnowledge.popular.length)];
    } else {
        response = chefKnowledge.tips[Math.floor(Math.random() * chefKnowledge.tips.length)];
    }

    // Simular tiempo de respuesta
    setTimeout(() => {
        addChefChatMessage(response);
    }, 1000);
}

function addUserMessage(message) {
    const messagesContainer = document.getElementById('chatMessages');
    
    const messageElement = document.createElement('div');
    messageElement.className = 'user-message';
    messageElement.innerHTML = `
        <div class="user-message-content">
            <p>${message}</p>
        </div>
    `;
    
    messagesContainer.appendChild(messageElement);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// Detector de scroll para mensajes contextuales
function setupScrollListener() {
    let lastMessageTime = 0;
    
    window.addEventListener('scroll', function() {
        const now = Date.now();
        
        // Evitar spam de mensajes
        if (now - lastMessageTime < 10000) return;
        
        const scrollPosition = window.scrollY;
        const menuSection = document.querySelector('.menu-section');
        const heroSection = document.querySelector('.hero');
        
        if (menuSection && isInViewport(menuSection) && !document.getElementById('chefChat').style.display === 'block') {
            const message = contextualMessages.menu[Math.floor(Math.random() * contextualMessages.menu.length)];
            showChefMessage(message);
            lastMessageTime = now;
        }
    });
}

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Interacciones especiales con productos
function onProductHover(productName) {
    if (!chefActive) return;
    
    const productMessages = {
        'almuerzo-completo': "¡Excelente elección! Este es nuestro plato estrella 🌟 Puedes armarlo completamente a tu gusto",
        'pechuga': "¡La pechuga! Jugosa, tierna y perfecta con cualquier acompañamiento 🍖",
        'pollo': "Nuestro pollo es marinado por 24 horas para un sabor único 🐔",
        'carne': "Carne premium, perfectamente condimentada al punto que prefieras 🥩"
    };
    
    const message = productMessages[productName] || "¡Esa es una opción deliciosa! ¿Te cuento más sobre este plato? 😋";
    
    setTimeout(() => {
        showChefMessage(message);
    }, 1000);
}

// Agregar estilos para mensajes de usuario
const userMessageStyle = `
.user-message {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 15px;
    animation: messageSlideIn 0.3s ease-out;
}

.user-message-content {
    background: linear-gradient(135deg, #6a1b9a 0%, #8e24aa 100%);
    color: white;
    border-radius: 15px;
    padding: 12px 15px;
    max-width: 250px;
    line-height: 1.4;
}

.user-message-content p {
    margin: 0;
}
`;

// Agregar estilos al documento
const styleSheet = document.createElement('style');
styleSheet.textContent = userMessageStyle;
document.head.appendChild(styleSheet);
