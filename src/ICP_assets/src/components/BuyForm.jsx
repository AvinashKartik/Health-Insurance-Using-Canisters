import React from "react";

function BuyForm(){

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
            <div style={{padding: '20px'}}>
                <label for="hospitalName">Hospital Name : </label>
                <input type="text" name="hospitalName" onChange={handleChange}></input><br/>
            </div>
            <div style={{padding: '20px'}}>
                <label for="cause">Cause : </label>
                <input type="text" name="cause" onChange={handleChange}></input><br/>
            </div>
            <div style={{padding: '20px'}}>
                <label for="amount">Amount : </label>
                <input type="text" name="amount" onChange={handleChange}></input><br/>
            </div>
            <button type="submit" onClick={handleSubmit}>Submit</button>
        </form> 
    );

}

export default BuyForm;