import React, { useState } from "react";
import math, { abs, all, create, pow,floor, index, map, evaluate, derivative } from "mathjs";

function Simpson1by3(){
  const [alert, SetAlert] = useState("");
  const [show, SetShow] = useState(false);
  const [ans, Setans] = useState(0);


    const [a, Seta] = useState(0);
    const [b, Setb] = useState(0);
    const [n, Setn] = useState(0);
    
  const [dydx, Setdydx] = useState('');


//   var [X, SetX] = useState([]);
//   var [Y, SetY] = useState([]);

  const math = create(all);

  
  const node = math.parse(dydx);
    const code = node.compile();

const func = (x, y) =>{
    return code.evaluate({x:x, y:y})
    // return (x + y - 2);
}
  const test = () =>{
   


// JavaScriptprogram for simpson's 1/3 rule

	

	// Function for approximate integral
	function simpsons_(ll, ul, n)
	{
	
        ll = parseFloat(ll)
         ul = parseFloat(ul)
          n = parseFloat(n)
		// Calculating the value of h
		let h = (ul - ll) / n;

		// Array for storing value of x
		// and f(x)
		let x = [];
		let fx= [];

		// Calculating values of x and f(x)
		for (let i = 0; i <= n; i++) {
			x[i] = ll + i * h;
			fx[i] = func(x[i]);
		}

		// Calculating result
		let res = 0;
		for (let i = 0; i <= n; i++) {
			if (i == 0 || i == n)
				res += fx[i];
			else if (i % 2 != 0)
				res += 4 * fx[i];
			else
				res += 2 * fx[i];
		}
		
		res = res * (h / 3);
		return res;
	}
	
// // Driver code
				
// 		// Lower limit
// 		let lower_limit = 4;
		
// 		// Upper limit
// 		let upper_limit = 5.2;
		
// 		// Number of interval
// 		let n = 6;
	var num = simpsons_(a, b, n)

    SetShow(true)
    Setans(num)
  }
  
  const  closeAlert = () =>{
    SetShow(false);
  };

  
  return (
    <>
    <h4>Simpson1by3</h4>
      <div className="container-method">
        
        <div className="row">
          <div className="col">
            <div className="row">
              <p>Enter upperlimit: </p>
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
              <p>Enter lower limit: </p>
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
        <div className="row">
          
          <div className="col">
            <div className="row">
              <p>Enter n: </p>
              <div className="ml-2 ">
                <input
                  type="text"
                  value={n }
                  onChange={(e) => Setn(e.target.value)}
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



export default Simpson1by3