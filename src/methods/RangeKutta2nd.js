import React, { useState } from "react";
import math, { abs, all, create, pow,floor, index, map, evaluate, derivative } from "mathjs";

function RangeKutta2nd(){
  const [alert, SetAlert] = useState("");
  const [show, SetShow] = useState(false);
  const [ans, Setans] = useState(0);

    const [no, Setno] = useState(0);

    const [x0, Setx0] = useState(0);
    const [y0, Sety0] = useState(0);

    const [x, Setx] = useState(0);
    const [h, Seth] = useState(0);
    
  const [dydx, Setdydx] = useState('');


//   var [X, SetX] = useState([]);
//   var [Y, SetY] = useState([]);

  const math = create(all);

  
  const node = math.parse(dydx);
    const code = node.compile();

const dy_dx = (x, y) =>{
    return code.evaluate({x:x, y:y})
    // return (x + y - 2);
}
  const test = () =>{
    
    function dydx(x, y)
    {
        return (x + y - 2);
    }
     
    function rungeKutta(a, b, x, h)
    {
        a = parseFloat(a)
        b = parseFloat(b)
        x = parseFloat(x)
        h = parseFloat(h)
        // Count number of iterations
        // using step size or
        // step height h
        let n = ((x - a) / h);
        let k1, k2;
     
        // Iterate for number of iterations
        let y = b;
        for (let i = 1; i <= n; i++) {
            // Apply Runge Kutta Formulas
            // to find next value of y
            k1 = h * dy_dx(a, y);
            k2 = h * dy_dx(a + 0.5 * h,
                          y + 0.5 * k1);
     
            // Update next value of y
            y = y + (1.0 / 6.0) * (k1 + 2 * k2);
            // Update next value of x
            a = a + h;
        }
     
        return y;
    }
 
     
    var res = rungeKutta(x0, y0, x, h).toFixed(6);

    SetShow(true)
    Setans(res)
  }
  
  const  closeAlert = () =>{
    SetShow(false);
  };

  
  return (
    <>
    <h4>RangeKutta 2nd order</h4>
      <div className="container-method">
        
        <div className="row">
          <div className="col">
            <div className="row">
              <p>Enter x0: </p>
              <div className="ml-2 ">
                <input
                  type="text"
                  value={x0 }
                  onChange={(e) => Setx0(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <p>Enter y0: </p>
              <div className="ml-2 ">
                <input
                  type="text"
                  value={y0 }
                  onChange={(e) => Sety0(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="row">
              <p>Enter x: </p>
              <div className="ml-2 ">
                <input
                  type="text"
                  value={x }
                  onChange={(e) => Setx(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <p>Enter h: </p>
              <div className="ml-2 ">
                <input
                  type="text"
                  value={h }
                  onChange={(e) => Seth(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
        
        {/*===========================================================*/}
        <div className="row">
          <div className="col">
            <div className="row">
              <p>Enter dy/dx: </p>
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


export default RangeKutta2nd