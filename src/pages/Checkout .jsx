
import CardForm from "../Components/CardForm";
import PurchaseSummary from "../Components/PurchaseSummary";

const Checkout = () => {
  
  return (
    <div style={{marginTop: "10px", color: "white", textAlign:"center"}}>
    <h1>Checkout</h1>
    <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
      <div style={{width:"40%",textAlign:"left"}}>
        <PurchaseSummary/>
      </div>
      <div style={{width:"30%"}}>
        <CardForm/>
      </div>
    </div>
      
      
    </div>
  );
};

export default Checkout;
