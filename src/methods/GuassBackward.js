import React, { useState } from "react";
import math, { abs, all, create, pow,floor, index, map } from "mathjs";

function GuassBackward(){
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
       delta[i] = new Array({arrayLength: no + 1});
   }
   Y.map((val, i)=>{
    delta[i][1] = parseFloat(val);
   })
   X.map((val, i)=>{
    delta[i][0] = parseFloat(val);
   })
   
   var i, j
   var value = x1;
   var u, h = X[1] - X[0], z, m = 1.0, fx = 0.0

   
    // Calculating the central difference table
    for( j=1; j<no; j++)	// loop to each column
		for( i=0; i<no-j; i++)	// loop to cell within a column
			delta[i][j+1] = delta[i+1][j] - delta[i][j];

        console.log(delta)
    // Value to interpolate at
    
    //Finding the value of u
	for( i=0; i<no; i++)
	{
		u = ( x1 - delta[i][0] ) / h;
		if( -0.5<=u && u<0 )
			break;
	}
	if( i === no ) //search unsuccessful
	{
		SetAlert("Condition -0.5<=u<0 not satisfied");
        SetShow(true)
		return;//exit program
	}
	else
		z = i;
	
	
	for( j=1, i=0; j<=no; j++)
	{
		fx += m * delta[z-i][j];
		
		if( j%2 == 1 )
			m *= (u-(i++)) /(j);
		else
			m *= (u+(i)) / (j);
		
		if( (z-i)<0 || (z-i)>(no-j-1) )
			break;	//checks validity of index in the table
	}
    Setans(fx)
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
    <h4>GuassBackward</h4>
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

export default GuassBackward