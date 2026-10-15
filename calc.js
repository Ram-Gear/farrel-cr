// Farrel CR calculation engine: auto-translated cell-for-cell from Roger Blake's farrel-cr-to-cttt.xls (Sheet1).
// Constants (pi=3.141592654, deg->rad 0.017453293, rad->deg 57.29577951) are kept exactly as in the spreadsheet.
(function(root){
const EXAMPLE={"D23": 2.5, "D24": 33, "D25": 142, "D26": 20, "D27": 30, "D28": 35, "D29": 14.16, "D30": 57.12, "D31": -0.004, "D32": 0, "D33": 0.022, "D34": 0.027};
const INPUTS=Object.keys(EXAMPLE);
function calc(inp){
  const c=Object.assign({},inp);
  c.F23=c.D24/c.D23;
  c.F24=c.D25/c.D23;
  c.F25=(c.D29-c.F23)/2;
  c.I25=3.141592654/2;
  c.F26=(c.D30-c.F24)/2;
  c.I26=Math.tan(c.D26*0.017453293);
  c.F27=0.8/c.D23;
  c.I27=Math.cos(c.D26*0.017453293);
  c.F28=c.F27;
  c.F29=(c.D24+c.D25)/c.D23/2;
  c.F30=c.D28/c.F29;
  c.I30=Math.cos(c.D27*0.017453293);
  c.I31=Math.tan(c.D27*0.017453293);
  c.I32=Math.atan(c.I31*c.F30)*57.29577951;
  c.F33=c.F25-c.F28-c.D31;
  c.G33=c.F25-c.F28-c.D32;
  c.I33=Math.cos(c.I32*0.017453293);
  c.F34=c.F26-c.F28-c.D33;
  c.G34=c.F26-c.F28-c.D34;
  c.I34=c.I26-(c.D26*0.017453293);
  c.I36=3.141592654/c.D23;
  c.I37=c.I36*c.F30;
  c.I23=c.F23*c.F30;
  c.I24=c.F24*c.F30;
  c.I28=Math.acos(c.I27/c.F30)*57.29577951;
  c.I29=Math.tan(c.I28*0.017453293);
  c.I35=c.I29-(c.I28*0.017453293);
  c.F37=c.I23*(((c.I25+(2*c.I26*c.F33*c.D23))/c.D24)+c.I34-c.I35);
  c.G37=c.I23*(((c.I25+(2*c.I26*c.G33*c.D23))/c.D24)+c.I34-c.I35);
  c.F38=c.I24*(((c.I25+(2*c.I26*c.F34*c.D23))/c.D25)+c.I34-c.I35);
  c.G38=c.I24*(((c.I25+(2*c.I26*c.G34*c.D23))/c.D25)+c.I34-c.I35);
  c.F40=c.F23*((c.F37/c.I23)-c.I34+c.I35);
  c.G40=c.F23*((c.G37/c.I23)-c.I34+c.I35);
  c.F41=c.F24*((c.F38/c.I24)-c.I34+c.I35);
  c.G41=c.F24*((c.G38/c.I24)-c.I34+c.I35);
  c.F43=(c.I37-c.G37-c.G38)*c.I33;
  c.G43=(c.I37-c.F37-c.F38)*c.I33;
  return c;
}
const api={calc,EXAMPLE,INPUTS};
if(typeof module!=='undefined')module.exports=api;else root.FarrelCR=api;
})(this);
