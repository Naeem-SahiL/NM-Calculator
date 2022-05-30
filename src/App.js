import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import { create, all, abs } from "mathjs";
import Bisection from "./methods/Bisection";
import Sidebar from "./components/Sidebar";
import RegulaFalsi from "./methods/RegulaFalsi";
import Secant from "./methods/Secant";
import NewtonRaphson from "./methods/NewtonRaphson";
import Jacobi from "./methods/Jacobi";
import GuassSeidel from "./methods/GuassSeidel";
import Picard from "./methods/Picard";
import NewtonForward from "./methods/NewtonForward";
import Stirling from "./methods/Stirling";
import Lagrange from "./methods/Lagrange";
import Bessel from "./methods/Bessel";
import GuasssForward from "./methods/GuasssForward";
import GuassBackward from "./methods/GuassBackward";
import NewtonBackward from "./methods/NewtonBackward";
import RangeKutta2nd from "./methods/RangeKutta2nd";
import Weedlws from "./methods/Weedlws";
import Simpson1by3 from "./methods/Simpson1by3";
import Simpson3by8 from "./methods/Simpson3by8";
// create a mathjs instance with configuration

function App() {
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

  // const test = () => {
  //   if (str.length < 1) {
  //     SetShow(true);
  //     SetAlert("Please enter an exprssion!");
  //   }
  //   list.length = 0;

  //   const node = math.parse(str);
  //   const code = node.compile();

  //   const f = (x) => {
  //     console.log("f");
  //     return code.evaluate({ x: x });
  //   };
  //   if (f(x0) * f(x1) > 0.0) {
  //     SetShow(true);
  //     SetAlert("Wrong initial Gueses.Please retry!");
  //     console.log("alert");
  //     return;
  //   }
  //   var i = 1;
  //   var x2 = 0,
  //     _x1 = x1,
  //     _x0 = x0;
  //   var condition = true;
  //   var _fx = 0;
  //   while (condition) {
  //     x2 = _x0 / 2 + _x1 / 2;
  //     _fx = f(x2);
  //     list.push({ step: i, x0: _x0, x1: _x1, x2: x2, fx: _fx });

  //     if (f(_x0) * f(x2) < 0) {
  //       _x1 = x2;
  //     } else {
  //       _x0 = x2;
  //     }

  //     condition = abs(f(x2)) > tol && i < itr;
  //     i = i + 1;
  //   }
  //   SetAns(x2);
  //   SetShow(true);
  // };

  return (
    <BrowserRouter>
      <div className="App">
        <h1>NM Caculator</h1>
        <div className="container d-flex home">

          <div className="sidebar">
            <Sidebar/>
          </div>

          <div className="content">
            <div className="container app">
              <Routes>
                <Route exact path='/' element={<Bisection/>}/>
                <Route path='/regulafalsi' element={<RegulaFalsi/>}/>
                <Route path='/secant' element={<Secant/>}/>
                <Route path='/newtonraphson' element={<NewtonRaphson/>}/>
                <Route path='/jacobi' element={<Jacobi/>}/>
                <Route path='/guassseidel' element={<GuassSeidel/>}/>
                <Route path='/picard' element={<Picard/>}/>
                <Route path='/newtonforward' element={<NewtonForward/>}/>
                <Route path='/newtonbackward' element={<NewtonBackward/>}/>
                <Route path='/stirling' element={<Stirling/>}/>
                <Route path='/lagrange' element={<Lagrange/>}/>
                <Route path='/bessel' element={<Bessel/>}/>
                <Route path='/guassforward' element={<GuasssForward/>}/>
                <Route path='/guassbackward' element={<GuassBackward/>}/>
                <Route path='/rangekutta2nd' element={<RangeKutta2nd/>}/>
                <Route path='/weedle' element={<Weedlws/>}/>
                <Route path='/simpson1by3' element={<Simpson1by3/>}/>
                <Route path='/simpson3by8' element={<Simpson3by8/>}/>
              </Routes>  
                         
            </div>
          </div>
        </div>
      </div>
      </BrowserRouter> 
  );
}

export default App;
