import React ,{useState} from 'react'
import "./App.css";

function App() {
  const [hori, setHori] = useState(10)
  const [ver, setVer] = useState(10)
  const [blur, setBlur] = useState(10)
  const [color, setColor] = useState("black")
  
 
     
     
 
  return (
    <div className="App">
      <div className="controls">
        <form action="#">
          <p class="range-field">
            
            <label>Horizontal Length</label>
            <input type="range" id="test5" min="-100" max="100"   value={hori} onChange={(e)=>setHori(e.target.value)}/>
            <label>Vertical Length</label>
            <input type="range" id="test5" min="-200" max="200"  value={ver} onChange={(e)=>setVer(e.target.value)}/>
            <label>blur Length</label>
            
            <input type="range" id="test5" min="0" max="100"  value={blur} onChange={(e)=>setBlur(e.target.value)}/>
            <label>color</label>
            <input type="color" value={color} onChange={(e)=>setColor(e.target.value)}/>
            
          </p>
        </form>
      </div>
      <div className="output">
        <div className="box" style={{boxShadow:`${hori}px ${ver}px ${blur}px ${color}`}}>
          <h2>Samsung offer</h2>
          <h3>{hori}&#128156;{ver}&#128156;{blur}</h3>
        </div>
      </div>
    </div>
  );
}

export default App;
