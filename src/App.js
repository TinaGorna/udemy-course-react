import React, {useState} from 'react';
import './App.css';
import Progress from "./components/progress/Progress";

const App = () => {
    const [percent, setPercent] = useState(0);
    const interval = setInterval(()=> {
        if (percent >=100) {
            setPercent(100);
        }else {
            setPercent(percent + 20)
        };
        clearInterval(interval);
    }, 1000)
  return (
      <div>
        <Progress percent={percent}/>
      </div>
  )
}
export default App;
