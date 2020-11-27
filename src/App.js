import "./App.css";
import myStyle from "./styles";
import logo from "./imgs/eth.png";

function App() {
  const classes = myStyle();

  return (
    <div className={classes.body}>
      <br />

      <div className={classes.div1}>
        Hello everyone div1
      </div>
      <div className={classes.div2}>hello everyone div2 </div>
    
    </div>
  );
}

export default App;
