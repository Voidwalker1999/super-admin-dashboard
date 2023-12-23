import React, { useState } from 'react';
import './App.css';

function Ecommerce() {
    const [deliveryToggle, setDeliveryToggle] = useState(false);
    const [pickupToggle, setPickupToggle] = useState(false);

    const handleDeliveryToggle = () => {
        setDeliveryToggle(!deliveryToggle);
    };

    const handlePickupToggle = () => {
        setPickupToggle(!pickupToggle);
    };

    return (
        <div>
            <div id="deliverySection">
                <label htmlFor="deliveryToggle" id="deliveryLabel">Delivery:</label>
                <div id="deliveryToggleContainer">
                    <label className={`switch ${deliveryToggle ? 'on' : ''}`}>
                        <input
                            type="checkbox"
                            id="deliveryToggle"
                            checked={deliveryToggle}
                            onChange={handleDeliveryToggle}
                        />
                        <span className="slider" id="deliverySlider"></span>
                    </label>
                </div>
            </div>
            <div id="pickupSection">
                <label htmlFor="pickupToggle" id="pickupLabel">Pickup Location:</label>
                <div id="pickupToggleContainer">
                    <label className={`switch ${pickupToggle ? 'on' : ''}`}>
                        <input
                            type="checkbox"
                            id="pickupToggle"
                            checked={pickupToggle}
                            onChange={handlePickupToggle}
                        />
                        <span className="slider" id="pickupSlider"></span>
                    </label>
                </div>
            </div>
        </div>
    );
}

export default Ecommerce;
