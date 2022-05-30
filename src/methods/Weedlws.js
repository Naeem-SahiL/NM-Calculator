import React, { useState } from "react";
import math, { abs, all, create, pow,floor, index, map, evaluate, derivative } from "mathjs";

function Weedlws(){
  const [alert, SetAlert] = useState("");
  const [show, SetShow] = useState(false);
  const [ans, Setans] = useState(0);


    const [a, Seta] = useState(0);
    const [b, Setb] = useState(0);
    
  const [dydx, Setdydx] = useState('');


//   var [X, SetX] = useState([]);
//   var [Y, SetY] = useState([]);

  const math = create(all);

  
  const node = math.parse(dydx);
    const code = node.compile();

const y = (x, y) =>{
    return code.evaluate({x:x, y:y})
    // return (x + y - 2);
}
  const test = () =>{
   

    // Javascript program to Implement Weedle's Rule
    
    // A sample function f(x) = 1/(1+x^2)
    // function y(x)
    // {
    //     let num = 1;
    //     let denom = 1.0 + x * x;
    
    //     return num / denom;
    // }
    
    // Function to find the integral value
    // of f(x) with step size h, with
    // initial lower limit and upper limit
    // a and b
    function WeedleRule(a1, b1)
    {
        
        // Find step size h
        let h = (b1 - a1) / 6;
    
        // To store the final sum
        let sum = 0;
    
        // Find sum using Weedle's Formula
        sum = sum + (((3 * h) / 10) *
            (y(a1) + y(a1 + 2 * h) + 5 * y(a1 + h) +
                6 * y(a1 + 3 * h) + y(a1 + 4 * h) +
                5 * y(a1 + 5 * h) + y(a1 + 6 * h)));
    
        // Return the final sum
        return sum.toFixed(6);
    }
    
    // Driver code
    
    // // lower limit and upper limit
    // let a = 0, b = 6;
    
    // Function Call
    let num = WeedleRule(a, b);
    // document.write("f(x) = " + num);
    
    SetShow(true)
    Setans(num)
  }
  
  const  closeAlert = () =>{
    SetShow(false);
  };

  
  return (
    <>
    <h4>Weedles</h4>
      <div className="container-method">
        
        <div className="row">
          <div className="col">
            <div className="row">
              <p>Enter a: </p>
              <div className="ml-2 ">
                <input
                  type="text"
                  value={a }
                  onChange={(e) => Seta(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <p>Enter b: </p>
              <div className="ml-2 ">
                <input
                  type="text"
                  value={b }
                  onChange={(e) => Setb(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
        
        
        {/*===========================================================*/}
        <div className="row">
          <div className="col">
            <div className="row">
              <p>Enter function: </p>
              <div className="ml-2">
                <input
                  type="text"
                  style={{ width: "400px" }}
                  onChange={(e) => Setdydx(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col">
            <button onClick={test}>Evaluate</button>
        </div>
        
        <div className="row d-flex justify-content-center">
          {show ? (
            <div class="container " role="alert">
              {alert}
              <button onClick={()=>closeAlert()}>Close</button>
            </div>
          ) : null}
        </div>
      </div>
      
      <hr />
      <h2>Result</h2>
      {show ? (
        <>
          <div className="container">
            
           <h5>{ans}</h5>
          </div>
        </>
      ) : null}
    </>
  );
}



export default Weedlws