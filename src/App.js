import { useState } from 'react';
import { SketchPicker } from 'react-color'

const FONT_WEIGHTS = ['normal', 'bold', 'lighter', 'bolder', 100, 200, 300, 400, 500, 600, 700, 800,900];

function App() {
  const [text, setText] = useState('Modern Logo');
  const [color, setColor] = useState('#000');
  const [fontWeight, setFontWeight] = useState('bolder');

  return (
    <div className="">
      <div className="">
        <input 
          type="text" 
          value={text} 
          onChange={(e) => setText(e.target.value)}
          style={{
            color,
            lineHeight: 'unset',
            fontWeight
          }}
          className="shadow-lg p-5 text-3xl rounded-2xl text-center outline-none"
        />

      </div>

      <select value={fontWeight} onChange={e => setFontWeight(e.target.value)}>
        {FONT_WEIGHTS.map(weight => <option value={weight}>{weight}</option>)}
      </select>

      <SketchPicker onChange={color => setColor(color.hex)} color={color}/>
    </div>
  );
}

export default App;
