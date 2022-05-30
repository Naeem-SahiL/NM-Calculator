import React, { useState } from "react";
import math, { abs, all, create, pow,floor, index, map, evaluate, derivative } from "mathjs";

function Simpson3by8(){
  const [alert, SetAlert] = useState("");
  const [show, SetShow] = useState(false);
  const [ans, Setans] = useState(0);


    var [a, Seta] = useState(0);
    var [b, Setb1] = useState(0);
    var [n, Setn] = useState(0);
    
  const [dydx, Setdydx] = useState('');


//   var [X, SetX] = useState([]);
//   var [Y, SetY] = useState([]);

  const math = create(all);

  
  const node = math.parse(dydx);
    const code = node.compile();

const f = (x) =>{
    return code.evaluate({x:x})
    // return (x + y - 2);
}
  const test = () =>{
      b = parseFloat(b)
      a = parseFloat(a)
      n = parseFloat(n)
    var i,h,x,sum=0,integral;
    console.log(a)
    console.log(b)
    console.log(n)
    h=abs(b-a)/n;
    console.log(h)
    for(i=1;i<n;i++){
        x=a+i*h;
        if(i%3===0){
        sum=sum+2*f(x);
        }
        else{
        sum=sum+3*f(x);
        }
    }
    integral=(3*h/8)*(f(a)+f(b)+sum);
    SetShow(true)
    Setans(integral)
  }
  
  const  closeAlert = () =>{
    SetShow(false);
  };

  
  return (
    <>
    <h4>Simpson3by8</h4>
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
                  onChange={(e) => Setb1(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          
          <div className="col">
            <div className="row">
              <p>Enter n in multiple of 3: </p>
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




export default Simpson3by8