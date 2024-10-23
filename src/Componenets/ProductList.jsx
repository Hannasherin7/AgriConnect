import axios from 'axios';
import React, { useEffect, useState } from 'react';

export const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [orderData, setOrderData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        pincode: '',
        paymentMethod: '',
        orderQuantity: 1
    });
    const [totalAmount, setTotalAmount] = useState(0);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        // Fetch products from the backend
        axios.get("http://localhost:7000/viewpro")
            .then((response) => setProducts(response.data))
            .catch((error) => console.error("Error fetching products:", error));
    }, []);

    const handleInputChange = (e) => {
        setOrderData({ ...orderData, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        if (selectedProduct) {
            setTotalAmount(selectedProduct.price * orderData.orderQuantity);
        }
    }, [orderData.orderQuantity, selectedProduct]);

    const placeOrder = () => {
        // Check if all fields are filled
        if (orderData.name && orderData.email && orderData.phone && orderData.address && orderData.pincode && orderData.paymentMethod) {
            // Make a POST request to place the order
            axios.post("http://localhost:7000/order", {
                ...orderData,
                productId: selectedProduct._id
            })
                .then((response) => {
                    if (response.data.status === "success") {
                        alert("Order placed successfully!");
                        setSelectedProduct(null);
                    } else {
                        alert(response.data.message);
                    }
                })
                .catch((error) => console.error("Order error:", error));
        } else {
            alert("Please fill all fields.");
        }
    };

    // Filter products based on search term
    const filteredProducts = products.filter(product =>
        product.pname.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div style={{ 
            backgroundImage: "url('https://wallpapers.com/images/hd/aesthetic-astronaut-flower-field-laptop-4ndqwiauwee5jpze.jpg')", 
            backgroundSize: 'cover', 
            height: '100vh', 
            padding: '20px' 
        }}>
            <h1 style={{ color: 'black', textAlign: 'center' }}>Product List</h1>

            {/* Search Bar */}
            <input 
                type="text" 
                placeholder="Search for products..." 
                value={searchTerm} 
                onChange={(e) => setSearchTerm(e.target.value)} 
                style={{ 
                    width: '100%', 
                    padding: '10px', 
                    borderRadius: '5px', 
                    border: '1px solid #ccc', 
                    marginBottom: '20px',
                    background: 'rgba(255, 255, 255, 0.7)', 
                    backdropFilter: 'blur(5px)',
                    color: 'black' 
                }} 
            />

            <div className="row">
                {filteredProducts.map(product => (
                    <div key={product._id} className="col-4">
                        <div style={{ 
                            background: 'rgba(255, 255, 255, 0.8)', 
                            borderRadius: '15px', 
                            backdropFilter: 'blur(10px)', 
                            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)', 
                            padding: '20px' 
                        }} className="card">
                            <img src={product.image} className="card-img-top" alt={product.pname} />
                            <div className="card-body">
                                <h5 style={{ color: 'black' }}>{product.pname}</h5>
                                <p style={{ color: 'black' }}>{product.pdescription}</p>
                                <p style={{ color: 'black' }}>Price: ${product.price}</p>
                                <p style={{ color: 'black' }}>Stock: {product.quantity}</p>
                                <button onClick={() => setSelectedProduct(product)} className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {selectedProduct && (
                <div style={{ 
                    background: 'rgba(255, 255, 255, 0.8)', 
                    borderRadius: '15px', 
                    backdropFilter: 'blur(10px)', 
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)', 
                }} className="modal show d-block">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Place Order</h5>
                                <button onClick={() => setSelectedProduct(null)}>&times;</button>
                            </div>
                            <div className="modal-body">
                                <p style={{ color: 'black' }}>Product: {selectedProduct.pname}</p>
                                <p style={{ color: 'black' }}>Price: ${selectedProduct.price}</p>

                                {/* Order Data Inputs */}
                                <input type="text" name="name" placeholder="Name" value={orderData.name} onChange={handleInputChange} className="form-control mb-3" />
                                <input type="email" name="email" placeholder="Email" value={orderData.email} onChange={handleInputChange} className="form-control mb-3" />
                                <input type="text" name="phone" placeholder="Phone" value={orderData.phone} onChange={handleInputChange} className="form-control mb-3" />
                                <input type="text" name="address" placeholder="Address" value={orderData.address} onChange={handleInputChange} className="form-control mb-3" />
                                <input type="text" name="pincode" placeholder="Pincode" value={orderData.pincode} onChange={handleInputChange} className="form-control mb-3" />
                                <input type="number" name="orderQuantity" placeholder="Quantity" value={orderData.orderQuantity} onChange={handleInputChange} className="form-control mb-3" min="1" max={selectedProduct.quantity} />
                                <select name="paymentMethod" value={orderData.paymentMethod} onChange={handleInputChange} className="form-control mb-3">
                                    <option value="">Select Payment Method</option>
                                    <option value="credit_card">Credit Card</option>
                                    <option value="paypal">PayPal</option>
                                    <option value="cash_on_delivery">Cash on Delivery</option>
                                </select>
                                <p style={{ color: 'black' }}>Total: ${totalAmount}</p>
                            </div>
                            <div className="modal-footer">
                                <button onClick={placeOrder} className="btn btn-primary">Place Order</button>
                                <button onClick={() => setSelectedProduct(null)} className="btn btn-secondary">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
