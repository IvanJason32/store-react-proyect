import { useState } from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PurchaseSummary = () => {
    const { items, totalItems, totalPrice } = useSelector((store) => store.cart);
    console.log(items)
    console.log(totalItems)
    return (
    <div style={{display:"flex",flexDirection:"column", marginTop: "10px", color: "white"}}>
    <h3>Product Description</h3><br/>
    <p>Amount: ${totalPrice}</p><br/>
    <p>Store: Ecommerce</p><br/>
    <div>
        <p>Product Description:</p>
        {items.map((p,i)=>{
            return (
                <span key={p.item_id}>{p.quantity} x {p.name}{i<totalItems-1 ? ",":""} </span>
            )
        })}
    </div>
    </div>
    );
}

export default PurchaseSummary;