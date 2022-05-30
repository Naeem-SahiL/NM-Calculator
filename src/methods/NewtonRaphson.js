import React, { useState } from "react";
import math, { abs, all, create, derivative } from "mathjs";

function NewtonRaphson(){
    const [alert, SetAlert] = useState("");
  const [show, SetShow] = useState(false);
  var [x0, SetX0] = useState(0);
  const [str, SetStr] = useState("");
  const [itr, SetItr] = useState(100);
  const [tol, SetTol] = useState(0.0001);
  const [ans, SetAns] = useState(0);
  var [result, SetResult] = useState(2);

  const [list, setList] = useState([]);

  const math = create(all);

  const test = () => {
    if (str.length < 1) {
      SetShow(true);
      SetAlert("Please enter an exprssion!");
      return;
    }
    list.length = 0;

    const node = math.parse(str);
    const code = node.compile();

    const f = (x) => {
      console.log(code.evaluate({ x: x }));
      return code.evaluate({ x: x });
    };

    const der = derivative(str, 'x').toString();

    const dernode = math.parse(der);
    const dercode = dernode.compile();

    const df = (x) => {
        console.log(dercode.evaluate({ x: x }));
        return dercode.evaluate({ x: x });
      };

    console.log(df(2))
    var _x0 = x0, x1, f0, f1, g0, e = tol;
	var step = 1; 
     do
	 {

        g0 = df(_x0);
        f0 = f(_x0);
        if(g0 == 0.0)
        {
            SetShow(true);
            SetAlert("Mathematical Error.");
            console.log("alert");
            return;
        }

        x1 = _x0 - f0/g0;

        list.push({ step: step, x0: _x0, x1: x1, fx: f(x1) });

        _x0 = x1;

        step = step + 1;

        if(step > itr){
            SetShow(true);
            SetAlert("Not Convergent");
            console.log("alert");
            return;
        }

        f1 = f(x1);
		 
	 }while(abs(f1)>e);
     SetAns(x1);
     SetShow(true);
  };
  const  closeAlert = () =>{
    SetShow(false);
  };
  return (
    <>
    <h4>Newton Raphson</h4>
      <div className="container-method">
        <div className="row">
          <div className="col">
            <div className="row">
              <p>Initial Guess 1: </p>
              <div className="ml-2">
                <input
                  type="text"
                  value={x0}
                  onChange={(e) => SetX0(e.target.value)}
                />
              </div>
            </div>
          </div>

          
        </div>
        <div className="row">
          <div className="col">
            <div className="row">
              <p>Enter Tolerance: </p>
              <div className="ml-2 ">
                <input
                  type="text"
                  value={tol}
                  onChange={(e) => SetTol(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <p>No of iterations: </p>
              <div className="ml-2">
                <input
                  type="number"
                  value={itr}
                  onChange={(e) => SetItr(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-8">
            <div className="row">
              <p>Enter Expression: </p>
              <div className="ml-2">
                <input
                  type="text"
                  style={{ width: "400px" }}
                  onChange={(e) => SetStr(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="col">
            <button onClick={test}>Evaluate</button>
          </div>
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
            <table className="table">
              <tr>
                <th>Step</th>
                <th>x0</th>
                <th>x1</th>
                <th>f(x)</th>
              </tr>
              <tbody>
                {list.map((item, index) => (
                  <>
                    <tr key={index}>
                      <td>{item.step}</td>
                      <td>{item.x0}</td>
                      <td>{item.x1}</td>
                      <td>{item.fx}</td>
                    </tr>
                  </>
                ))}
              </tbody>
            </table>
            <hr />
            <div className="row result">
              <h5>Root: {ans}</h5>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}
export default NewtonRaphson