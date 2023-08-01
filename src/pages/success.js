import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BsBagCheckFill } from 'react-icons/bs';
import { useRouter } from 'next/router';

import { useStateContext } from "../../context/StateContext";

export const Success = () => {
    const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();


    return (
        <div>success</div>
    )
}

export default Success


