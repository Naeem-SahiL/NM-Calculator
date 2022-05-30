import React, { useState } from "react";
import math, { abs, all, create, pow,floor, index, map } from "mathjs";

function Lagrange(){
  const [alert, SetAlert] = useState("");
  const [show, SetShow] = useState(false);
  const [ans, Setans] = useState(0);
  const [no, Setno] = useState(0);

    const [xp, Setxp] = useState(0);
   
  const [x, Setx] = useState('');
  const [y, Sety] = useState('');
  const math = create(all);

  var  X = [];
  var  Y = [];

  const test = () => {
   var Xarr = x.split(/[ ,]+/), Yarr = y.split(/[ ,]+/);

   Xarr.map((val, i)=>{
    X.push(parseFloat(val));
   })
   Yarr.map((val, i)=>{
    Y.push(parseFloat(val));
   })

   console.log(X)
   console.log(Y)
   
   var yp=0, p, i,j;
  
    /* Implementing Lagrange Interpolation */
    for(i=0;i<no;i++)
    {
      p=1;
      for(j=0;j<no;j++)
      {
          if(i!==j)
          {
            p = p* (xp - X[j])/(X[i] - X[j]);
            // console.log(X[i], X[j])
          }
      }
      console.log(p)

      yp = yp + p * Y[i];
      console.log(yp)
    }
    
    Setans(yp)

    SetShow(true);
  };

  const  closeAlert = () =>{
    SetShow(false);
  };

  
  return (
    <>
    <h4>Lagrange</h4>
      <div className="container-method">
        
        <div className="row">
          <div className="col">
            <div className="row">
              <p>Enter no of data: </p>
              <div className="ml-2 ">
                <input
                  type="text"
                  value={no }
                  onChange={(e) => Setno(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <p>Enter interpolation point:: </p>
              <div className="ml-2 ">
                <input
                  type="text"
                  value={xp }
                  onChange={(e) => Setxp(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
        
        {/*===========================================================*/}
        <div className="row">
          <div className="col">
            <div className="row">
              <p>Enter x values with spaces: </p>
              <div className="ml-2">
                <input
                  type="text"
                  style={{ width: "400px" }}
                  onChange={(e) => Setx(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="row">
              <p>Enter y values with spaces:  </p>
              <div className="ml-2">
                <input
                  type="text"
                  style={{ width: "400px" }}
                  onChange={(e) => Sety(e.target.value)}
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

export default Lagrange