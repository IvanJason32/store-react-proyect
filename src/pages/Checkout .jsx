
import CardForm from "../Components/CardForm";
import PurchaseSummary from "../Components/PurchaseSummary";

const Checkout = () => {
  
  return (
    <div style={{marginTop: "10px", color: "white", textAlign:"center",gap:"1rem"}}>
    <h1>Checkout</h1>
    <div style={{display:"flex", justifyContent:"center", margintop: "7rem",marginbottom:"7rem"}} className="component-container">
      <div style={{textAlign:"left",marginTop:"-14px"}} className="purchase-component-container">
        <PurchaseSummary/>
      </div>
      <div className="card-component-container">
        <CardForm/>
      </div>
    </div>
      
      
    </div>
  );
};

export default Checkout;
