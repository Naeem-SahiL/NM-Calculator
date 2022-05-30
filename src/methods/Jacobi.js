import React, { useState } from "react";
import math, { abs, all, create, derivative } from "mathjs";

function Jacobi(){
  const [alert, SetAlert] = useState("");
  const [show, SetShow] = useState(false);

  const [fx1, Setfx1] = useState('');
  const [fx2, Setfx2] = useState('');
  const [fx3, Setfx3] = useState('');
  
  const [itr, SetItr] = useState(100);
  const [tol, SetTol] = useState(0.0001);
  const [ansx, SetAnsx] = useState(0);
  const [ansy, SetAnsy] = useState(0);
  const [ansz, SetAnsz] = useState(0);
  const [list, setList] = useState([]);

  const math = create(all);

  const test = () => {
    if (fx1.length < 1 && fx2.length < 1 && fx3.length < 1) {
      SetShow(true);
      SetAlert("Please enter all expressions");
      return;
    }

    var  x0=0, y0=0, z0=0, x1, y1, z1, e1, e2, e3, e = tol, step = 1;
    list.length = 0;

    const nodef1 = math.parse(fx1);
    const codef1 = nodef1.compile();

    const nodef2 = math.parse(fx2);
    const codef2 = nodef2.compile();

    const nodef3 = math.parse(fx3);
    const codef3 = nodef3.compile();

    const f1 = (x, y, z) => {
      return codef1.evaluate({  x: x, y: y, z:z });
    };
    const f2 = (x, y, z) => {
      return codef2.evaluate({  x: x, y: y, z:z });
    };
    const f3 = (x, y, z) => {
      return codef3.evaluate({  x: x, y: y, z:z });
    };

    
    

    do{
        /* Calculation */
        x1 = f1(x0,y0,z0);
        y1 = f2(x0,y0,z0);
        z1 = f3(x0,y0,z0);

        list.push({ step: step, x1: x1, y1: y1, z1: z1 });
        /* Error */
        e1 = abs(x0-x1);
        e2 = abs(y0-y1);
        e3 = abs(z0-z1);

        step++;
        /* Set value for next iteration */
        x0 = x1;
        y0 = y1;
        z0 = z1;
		 
	 }while(e1>e && e2>e && e3>e);

     SetAnsx(x1);
     SetAnsy(y1);
     SetAnsz(z1);
     SetShow(true);
  };
  const  closeAlert = () =>{
    SetShow(false);
  };
  return (
    <>
    <h4>Jacobi</h4>
      <div className="container-method">
        
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
          
        </div>
        {/*===========================================================*/}
        <div className="row">
          <div className="col">
            <div className="row">
              <p>Expression 1: </p>
              <div className="ml-2">
                <input
                  type="text"
                  style={{ width: "400px" }}
                  onChange={(e) => Setfx1(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="row">
              <p>Expression 2: </p>
              <div className="ml-2">
                <input
                  type="text"
                  style={{ width: "400px" }}
                  onChange={(e) => Setfx2(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="row">
              <p>Expression 3: </p>
              <div className="ml-2">
                <input
                  type="text"
                  style={{ width: "400px" }}
                  onChange={(e) => Setfx3(e.target.value)}
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
            <table className="table">
              <tr>
                <th>Step</th>
                <th>x1</th>
                <th>y1</th>
                <th>z1</th>
              </tr>
              <tbody>
                {list.map((item, index) => (
                  <>
                    <tr key={index}>
                      <td>{item.step}</td>
                      <td>{item.x1}</td>
                      <td>{item.y1}</td>
                      <td>{item.z1}</td>
                    </tr>
                  </>
                ))}
              </tbody>
            </table>
            <hr />
            <div className="row result">
                <table className="table">
                    <tr>
                    <td><h5>x1: {ansx}</h5></td>
                    <td><h5>y1: {ansy}</h5></td>
                    <td><h5>z1: {ansz}</h5></td>
                    </tr>
                </table>
              
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}

export default Jacobi