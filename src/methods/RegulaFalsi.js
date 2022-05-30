import { abs, all, create } from "mathjs";
import React, { useState } from "react";

function RegulaFalsi(){
    const [alert, SetAlert] = useState("");
  const [show, SetShow] = useState(false);
  var [x0, SetX0] = useState(0);
  var [x1, SetX1] = useState(0);
  const [str, SetStr] = useState("");
//   const [itr, SetItr] = useState(100);
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

    var _x0 = x0, _x1 = x1, x, f0, f1, _f, e = tol;
	var step = 1; 

    f0 = f(x0);
	f1 = f(x1);

    if( f0 * f1 > 0.0)
	 {
        SetShow(true);
        SetAlert("Wrong initial Gueses.Please retry!");
        console.log("alert");
        return;
	 }
     do
	 {
		  /* Applying False Position Method */
		  /* x is next approximated root using False Position method */
		  x = x0 - (_x0-_x1) * f0/ (f0-f1);
		  _f = f(x);
          list.push({ step: step, x0: _x0, x1: _x1, x2: x, fx: _f });

		  if( f0 * _f < 0)
		  {
			   x1 = x;
			   f1 = _f;
		  }
		  else
		  {
			   x0 = x;
			   f0 = _f;
		  }
		  step = step + 1;
	 }while(abs(f(x))>e);
     SetAns(x);
     SetShow(true);
  };
  const  closeAlert = () =>{
    SetShow(false);
  };
  return (
    <>
    <h4>Regula Falsi</h4>
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
          {/* <div className="col">
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
          </div> */}
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


export default RegulaFalsi;