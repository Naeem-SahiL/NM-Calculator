import { abs, all, create } from "mathjs";
import React, { useState } from "react";

function Secant(){
    const [alert, SetAlert] = useState("");
  const [show, SetShow] = useState(false);
  var [x0, SetX0] = useState(0);
  var [x1, SetX1] = useState(0);
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

    var _x0 = x0, _x1 = x1, x2, f0, f1, f2, e = tol;

	var step = 1;
     do
	 {
		  f0 = f(_x0);
		  f1 = f(_x1);
		  if(f0 == f1)
		  {
            SetShow(true);
            SetAlert("Mathematical error");
            console.log("alert");
            return;
		  }

		  x2 = _x1 - (_x1 - _x0) * f1/(f1-f0);
		  f2 = f(x2);
          list.push({ step: step, x0: _x0, x1: _x1, x2: x2, fx: f2 });
		  _x0 = _x1;
		  f0 = f1;
		  _x1 = x2;
		  f1 = f2;

		  step = step + 1;

		  if(step > itr)
		  {
               SetShow(true);
               SetAlert("Not Convergent.");
               console.log("alert");
               return;
		  }
	 }while(abs(f2)>e);

     SetAns(x2);
     SetShow(true);
  };
  const  closeAlert = () =>{
    SetShow(false);
  };
  return (
    <>
    <h4>Secant</h4>
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

          <div className="col">
            <div className="row">
              <p>Initial Guess 2: </p>
              <div className="ml-2">
                <input
                  type="text"
                  value={x1}
                  onChange={(e) => SetX1(e.target.value)}
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
                <th>x2</th>
                <th>f(x)</th>
              </tr>
              <tbody>
                {list.map((item, index) => (
                  <>
                    <tr key={index}>
                      <td>{item.step}</td>
                      <td>{item.x0}</td>
                      <td>{item.x1}</td>
                      <td>{item.x2}</td>
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

export default Secant