const Menu = ({ addToCart }) => {
    const snacks = [
        { name: 'Chips', price: 199, image: '/images/chips.jpg' },
        { name: 'Cookies', price: 249, image: '/images/cookie.webp' },
        { name: 'Pretzel', price: 179, image: '/images/pretzel.webp' },
        { name: 'Samosa', price: 30, image: '/images/samosa.jpg' },
        { name: 'Margheritta Pizza', price: 1199, image: '/images/margheritta_pizza.webp' },
        { name: 'BBQ Chicken Pizza', price: 1399, image: '/images/bbq_pizza.jpg' },
        { name: 'Supreme Pizza', price: 1999, image: '/images/supreme_pizza.jpg' },
        { name: 'Pepperonni Pizza', price: 1799, image: '/images/pepperoni_pizza.webp' },
        { name: 'Spicy Chicken Burger', price: 499, image: '/images/burger.webp' }
    ]

    const cakes = [
        { name: 'Chocolate Cake', price: 1299, image: '/images/c_choco.jpg' },
        { name: 'Vanilla Cake', price: 1199, image: '/images/c_vanilla.jpg' },
        { name: 'Red Velvet Cake', price: 1499, image: '/images/c_red_velvet.webp' }
    ]

    const MenuItem = ({ item }) => (
        <div className="item">
            <img src={item.image} alt={item.name} loading="lazy" />
            <div className="item_container">
                <div>
                    <h4>{item.name}</h4>
                    <p className="price">{item.price} PKR</p>
                </div>
                <button className="addToCart" onClick={() => addToCart(item)}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36">
                        <path d="M4.00488 16V4H2.00488V2H5.00488C5.55717 2 6.00488 2.44772 6.00488 3V15H18.4433L20.4433 7H8.00488V5H21.7241C22.2764 5 22.7241 5.44772 22.7241 6C22.7241 6.08176 22.7141 6.16322 22.6942 6.24254L20.1942 16.2425C20.083 16.6877 19.683 17 19.2241 17H5.00488C4.4526 17 4.00488 16.5523 4.00488 16ZM6.00488 23C4.90031 23 4.00488 22.1046 4.00488 21C4.00488 19.8954 4.90031 19 6.00488 19C7.10945 19 8.00488 19.8954 8.00488 21C8.00488 22.1046 7.10945 23 6.00488 23ZM18.0049 23C16.9003 23 16.0049 22.1046 16.0049 21C16.0049 19.8954 16.9003 19 18.0049 19C19.1095 19 20.0049 19.8954 20.0049 21C20.0049 22.1046 19.1095 23 18.0049 23Z" fill="currentColor"></path>
                    </svg>
                </button>
            </div>
        </div>
    )

    return (
        <section id="order">
            <h2>A little hungry?</h2>
            <h3>Our Snacks</h3>
            <div className="item_list">
                {snacks.map((item, index) => (
                    <MenuItem key={index} item={item} />
                ))}
            </div>
            <h3>Our Cakes</h3>
            <div className="item_list">
                {cakes.map((item, index) => (
                    <MenuItem key={index} item={item} />
                ))}
            </div>
            <p style={{fontSize: '1.3em' ,textAlign: 'center', marginTop: '40px', fontStyle: 'italic', color: '#999999' }}>
                Web Engineering Project
            </p>
        </section>
        
    )
}

export default Menu 