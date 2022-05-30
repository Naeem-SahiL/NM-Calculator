import React, { useState } from "react";
import math, { abs, all, create, pow,floor, index, map } from "mathjs";

function Stirling(){
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
   

    var h, a, u, y1 = 0, N1 = 1, d = 1,
    N2 = 1, d2 = 1, temp1 = 1, temp2 = 1,
    k = 1, l = 1;

    var i, j, s;
    h = X[1] - X[0];
    console.log('X',X);
    
    console.log('h',h);
    s = math.floor(no / 2);
    console.log('s',s)
    a = X[s];
    console.log('a',a);
    u = (x1 - a) / h;
    console.log('u',u);
    console.log(pow(u, k));
    // Preparing the forward difference
    // table
    for (i = 0; i < no - 1; ++i) {
        delta[i][0] = Y[i + 1] - Y[i];
    }
    for (i = 1; i < no - 1; ++i) {
        for (j = 0; j < no - i - 1; ++j) {
            delta[j][i] = delta[j + 1][i - 1]
                        - delta[j][i - 1];
        }
    }
    console.log(delta)

    // Calculating f(x) using the Stirling
    // formula
    y1 = Y[s];

    for (i = 1; i <= no - 1; ++i) {
        if (i % 2 !== 0) {
            if (k !== 2) {
                temp1 *= (pow(u, k) - pow((k - 1), 2));
                
            }
            else {
                temp1 *= (pow(u, 2) -
                        pow((k - 1), 2));
            }
            console.log(temp1);
            ++k;
            d *= i;
            s = floor((no - i) / 2);
            y1 += (temp1 / (2 * d)) *
                    (delta[s][i - 1] +
                    delta[s - 1][i - 1]);
        }
        else {
            temp2 *= (pow(u, 2) -
                    pow((l - 1), 2));
            ++l;
            d *= i;
            s = floor((no - i) / 2);
            y1 += (temp2 / (d)) *
                (delta[s][i - 1]);
        }
    }

    Setans(y1)

    SetShow(true);
  };

  const  closeAlert = () =>{
    SetShow(false);
  };

  
  return (
    <>
    <h4>Stirling</h4>
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

export default Stirling