import React, { useState } from "react";
import './getTouch.css';
import Navbar from "./navbar";
import Deneme from "./more/directedBy";
import { useNavigate } from "react-router-dom";
import { doSomething } from "./more/directedBy";




function Form(props) {



 
  const [count,setCount] = useState(1);


  var x=4;


  function set(e){

    var getValue = e.target.value;
    var checkBox= document.getElementById("checkBox");
        console.log(checkBox)

        e.preventDefault()

      if(document.getElementById("name").value!="" && document.getElementById("surname").value!="" &&
         document.getElementById("country").value!="" && document.getElementById("city").value!="" &&
         document.getElementById("textArea").value!="" && getValue!=1 && checkBox.checked==true ) {
                 setCount(count+1)
                  document.querySelector("#example").innerHTML= count;
                  alert("Thank you! Now, We are 1 more person.")


                  //Clear
          
                  var clearName, clearSurname, clearCountry, clearCity, clearMessage;
                  clearSurname = document.getElementById("surname").value="";
                  clearCountry = document.getElementById("country").value="";
                  clearCity = document.getElementById("city").value="";
                  clearMessage = document.getElementById("textArea").value="";
                  clearName = document.getElementById("name").value="";

                  var checkBoxFalse, selectionDefault;

                  checkBoxFalse = checkBox.checked=false;
                 // selectionDefault = document.getElementById("option1")= ;



        }


  }









  return (
    <div id="container">


      <form className="row g-3 generalSize">


        <div className="col-md-6">
          <label for="inputEmail4" className="form-label">Name</label>
          <input id='name' type="text" className="form-control nameItems" />
        </div>
        <div className="col-md-6">
          <label for="inputPassword4" className="form-label">Surname</label>
          <input id='surname' type="text" className="form-control nameItems" />
        </div>

        <div className="col-md-6">
          <label for="inputAddress2" className="form-label">Country</label>
          <input id="country" type="text" className="form-control nameItems"  placeholder="Apartment, studio, or floor" />
        </div>
        <div className="col-md-6">
          <label for="inputCity" className="form-label">City/State</label>
          <input id="city" type="text" className="form-control nameItems"/>
        </div>
        <div className="form-group col-md-2">
          <label for="inputState">Gender</label>
          <select id="inputState" className="form-control">
            <option id="option1" value="1" selected>Choose...</option>
            <option>Male</option>
            <option>Female</option>
            <option>Others</option>

          </select>
        </div>
        <div className="col-12">
          <label for="inputZip" className="form-label">Message</label>
          <textarea className="form-control" id="textArea" rows="3"></textarea>
        </div>
        <div className="col-12">
          <div className="form-check">
            <input className="form-check-input" id="checkBox" type="checkbox" />
            <label className="form-check-label" for="gridCheck">
              I agree to the publication of my message and personal details.
            </label>
          </div>
        </div>
        <div className="col-12">
          <button style={{width:"80px", display:"inline"}} onClick={ e => {set(e);}} type="button" className="btn btn-primary">Sign in</button>
        </div>
      </form>
    </div>

  );
}

export default Form;