import { evaluate } from "mathjs";

const f = (x,str,SetResult) =>{ 
    var expr = `x = `+x;
    SetResult(evaluate(expr))
    var c = evaluate(str)
    SetResult(c)
}
export {f}