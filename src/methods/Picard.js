import React, { useState } from "react";
import math, { abs, all, create, derivative } from "mathjs";

function Picard(){
  const [alert, SetAlert] = useState("");
  const [show, SetShow] = useState(false);

  const [fx1, Setfx1] = useState('');
  const [fx2, Setfx2] = useState('');
  const [fx3, Setfx3] = useState('');
  

  const [start_value , Setstart_value] = useState(0);
  const [end_value  , Setend_value ] = useState(0);

  const [itr, SetItr] = useState(100);
  const [tol, SetTol] = useState(0);
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
    list.length = 0;

    const nodef1 = math.parse(fx1);
    const codef1 = nodef1.compile();

    const nodef2 = math.parse(fx2);
    const codef2 = nodef2.compile();

    const nodef3 = math.parse(fx3);
    const codef3 = nodef3.compile();

    const f1 = (x) => {
      return codef1.evaluate({  x: x });
    };
    const f2 = (x) => {
      return codef2.evaluate({  x: x });
    };
    const f3 = (x) => {
      return codef3.evaluate({  x: x });
    };

    
    var temp;
    var y1 = [30], y2 = [30], y3 = [30];
    var count;
    
    for (temp = start_value, count = 0;
         temp <= end_value;
         temp = temp + tol, count++) {
  
        y1[count] = f1(temp);
        y2[count] = f2(temp);
        y3[count] = f3(temp);

    }

    
    for (temp = start_value;
         temp <= end_value;
         temp = temp + tol) {
  
       
        list.push({x: temp});
    }

    for (temp = start_value, count = 0;
         temp <= end_value;
         temp = temp + tol, count++) {
  
        list.push({y1: y1[count]});
    }
    
    for (temp = start_value, count = 0;
         temp <= end_value;
         temp = temp + tol, count++) {
  
        list.push({y2: y2[count]});
    }
    for (temp = start_value, count = 0;
         temp <= end_value;
         temp = temp + tol, count++) {
  
        list.push({y3: y3[count]});
    }

    SetShow(true);
  };
  const  closeAlert = () =>{
    SetShow(false);
  };
  return (
    <>
    <h4>Picard</h4>
      <div className="container-method">
        
        <div className="row">
          <div className="col">
            <div className="row">
              <p>Enter start value: </p>
              <div className="ml-2 ">
                <input
                  type="text"
                  value={start_value }
                  onChange={(e) => Setstart_value(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <p>Enter end value: </p>
              <div className="ml-2 ">
                <input
                  type="text"
                  value={end_value }
                  onChange={(e) => Setend_value(e.target.value)}
                />
              </div>
            </div>
          </div>
          
        </div>
        <div className="row">
            <div className="col">
                <div className="row">
                <p>Enter tolerance: </p>
                <div className="ml-2 ">
                    <input
                    type="text"
                    value={tol }
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
                <th>x</th>
                <th>y1</th>
                <th>y2</th>
                <th>y3</th>
              </tr>
              <tbody>
                {list.map((item, index) => (
                  <>
                    <tr key={index}>
                      <td>{item.x}</td>
                      <td>{item.y1}</td>
                      <td>{item.y2}</td>
                      <td>{item.y3}</td>
                    </tr>
                  </>
                ))}
              </tbody>
            </table>
           
          </div>
        </>
      ) : null}
    </>
  );
}
export default Picard