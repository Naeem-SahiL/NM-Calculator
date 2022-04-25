import { abs, all, create } from "mathjs";
import React, { useState } from "react";

function Bisection() {
  const [alert, SetAlert] = useState("");
  const [show, SetShow] = useState(false);
  const [x0, SetX0] = useState(0);
  const [x1, SetX1] = useState(0);
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
    }
    list.length = 0;

    const node = math.parse(str);
    const code = node.compile();

    const f = (x) => {
      console.log("f");
      return code.evaluate({ x: x });
    };
    if (f(x0) * f(x1) > 0.0) {
      SetShow(true);
      SetAlert("Wrong initial Gueses.Please retry!");
      console.log("alert");
      return;
    }
    var i = 1;
    var x2 = 0,
      _x1 = x1,
      _x0 = x0;
    var condition = true;
    var _fx = 0;
    while (condition) {
      x2 = _x0 / 2 + _x1 / 2;
      _fx = f(x2);
      list.push({ step: i, x0: _x0, x1: _x1, x2: x2, fx: _fx });

      if (f(_x0) * f(x2) < 0) {
        _x1 = x2;
      } else {
        _x0 = x2;
      }

      condition = abs(f(x2)) > tol && i < itr;
      i = i + 1;
    }
    SetAns(x2);
    SetShow(true);
  };
  return (
    <>
      <div className="container">
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

export default Bisection;
