import React, { useState } from "react";
import math, { abs, all, create, pow,floor, index, map } from "mathjs";

function Bessel(){
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
   

    // Calculating the central difference table
    for( i = 1; i < no; i++)
    for(var j = 0; j < no - i; j++)
        delta[j][i] = delta[j + 1][i - 1] - delta[j][i - 1];

        console.log(delta)
    // Value to interpolate at
    var value = x1;
    
    // Initializing u and sum
    var sum = (delta[2][0] + delta[3][0]) / 2;
    
    // k is origin thats is f(0)
    var k;
    
    // Origin for odd
    if ((no % 2) > 0)
        k = no / 2;
    else
    
        // Origin for even
        k = no / 2 - 1;
   
    
    var u = (value - X[k]) / (X[1] - X[0]);
    console.log(sum, u)
    // Solving using bessel's formula
    for(i = 1; i < no; i++)
    {
        if ((i % 2) > 0)
            sum = sum + ((u - 0.5) *
            ucal(u, i - 1) * delta[k][i]) / fact(i);
        else
            sum = sum + (ucal(u, i) *
            (delta[k][i] + delta[--k][i]) / (fact(i) * 2));
        console.log(sum)
    }
    Setans(sum.toFixed(6))
    SetShow(true);
  };


  // Calculating u mentioned in the formula
    function ucal(u, n)
    {
        if (n == 0)
            return 1;
    
        var temp = u;
        for(var i = 1; i <= n / 2; i++)
            temp = temp * (u - i);
    
        for(var i = 1; i < n / 2; i++)
            temp = temp * (u + i);
    
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
    <h4>Bessel</h4>
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

export default Bessel