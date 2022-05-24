import React from "react";
import Header from "./UserHeader";

function BuyForm(props){

    const initialFormData = Object.freeze({
        deductible : "",
        coInsurance: "",
        companyName: "",
        hospitalName: "",
        cause:"",
        amount:""
    });

    const [formData, updateFormData] = React.useState(initialFormData);

    const handleChange = (e) => {
        // console.log(formData)
        updateFormData({
          ...formData,
      
          
        });

      };

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(updateFormData.deductible);

    }

    return(
        <>
        <Header uname = {props.uname} Buy = {props.Buy} Claim = {props.Claim}/>
        <form style={{textAlign: 'center', paddingTop:'200px'}}>
            <div style={{padding: '20px'}}>
                <label for="deductible">Deductible : </label>
                <input type="text" name="deductible" id="deductible" onChange={handleChange}></input><br/>
            </div>
            <div style={{padding: '20px'}}>
                <label for="co-insurance">Co-Insurance : </label>
                <input type="text" name="coInsurance" onChange={handleChange}></input><br/>
            </div>
            <div style={{padding: '20px'}}>
                <label for="companyName">Insurance Company : </label>
                <input type="text" name="companyName" onChange={handleChange}></input><br/>
            </div>
            <button type="submit" onClick={handleSubmit}>Submit</button>
        </form> 
        </>
        // <form style={{textAlign: 'center', paddingTop:'200px'}}>
        //     <div style={{padding: '20px'}}>
        //         <label for="deductible">Deductible : </label>
        //         <input type="text" name="deductible" id="deductible" onChange={handleChange}></input><br/>
        //     </div>
        //     <div style={{padding: '20px'}}>
        //         <label for="co-insurance">Co-Insurance : </label>
        //         <input type="text" name="coInsurance" onChange={handleChange}></input><br/>
        //     </div>
        //     <div style={{padding: '20px'}}>
        //         <label for="companyName">Insurance Company : </label>
        //         <input type="text" name="companyName" onChange={handleChange}></input><br/>
        //     </div>
        //     <button type="submit" onClick={handleSubmit}>Submit</button>
        // </form> 
    );

}

export default BuyForm;