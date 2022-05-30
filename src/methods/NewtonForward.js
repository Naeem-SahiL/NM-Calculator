import React, { useState } from "react";
import math, { abs, all, create, pow,floor, index, map } from "mathjs";

function NewtonForward(){
  const [alert, SetAlert] = useState("");
  const [show, SetShow] = useState(false);
  const [ans, Setans] = useState(0);

    const [no, Setno] = useState(0);

    const [x1, Setx1] = useState(0);
    
    
  const [x, Setx] = useState('');
  const [y, Sety] = useState('');

//   var [X, SetX] = useState([]);
//   var [Y, SetY] = useState([]);

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

//    console.log(X)
//    console.log(Y)

   var delta =  new Array({arrayLength: no});
   for(var i = 1; i < no; i++)
   {
       delta[i] = new Array({arrayLength: no});
   }
   Y.map((val, i)=>{
    delta[i][0] = parseFloat(val);
   })
   

  // Calculating the forward difference
     // table
     for ( i = 1; i < no; i++) {
      for (var j = 0; j < no - i; j++)
          delta[j][i] = delta[j + 1][i - 1] - delta[j][i - 1];
  }
    // Value to interpolate at
    var value = x1;
    
   
      // Initializing u and sum
    var sum = delta[0][0];
    var u = (value - X[0]) / (X[1] - X[0]);
    for (var i = 1; i < no; i++) {
        sum = sum + (ucal(u, i) * delta[0][i]) /
                                     fact(i);
    }
    
    Setans(sum.toFixed(6))
    SetShow(true);
  };


  // Calculating u mentioned in the formula
    function ucal(u, n)
    {
      var temp = u;
      for (var i = 1; i < n; i++)
          temp = temp * (u - i);
      return temp;
    }
    
    // Calculating factorial of given number n
    function fact(n)
    {
        var f = 1;
        for(var i = 2; i <= n; i++)
            f *= i;
    
        return f;
    }
  const  closeAlert = () =>{
    SetShow(false);
  };

  
  return (
    <>
    <h4>NewtonForward</h4>
      <div className="container-method">
        
        <div className="row">
          <div className="col">
            <div className="row">
              <p>Enter no of records: </p>
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
              <p>Value to calculate f(x): </p>
              <div className="ml-2 ">
                <input
                  type="text"
                  value={x1 }
                  onChange={(e) => Setx1(e.target.value)}
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

export default NewtonForward