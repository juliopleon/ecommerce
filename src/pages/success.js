import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BsBagCheckFill } from 'react-icons/bs';


import { useStateContext } from "../../context/StateContext";

export const Success = () => {
    const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();



    return (
        <div className="success-wrapper">
            <div className="success">
                <p className="icon">
                    <BsBagCheckFill />
                </p>
                <h2>Thank you for your order!</h2>
            </div>

        </div>
    )
}

export default Success


