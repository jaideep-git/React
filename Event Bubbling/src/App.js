import React, { useState } from 'react';
import Dropdown from './components/Dropdown';

const options = [
    {
      label: "The Color Red",
      value: "red",
    },
    {
      label: "The Color Green",
      value: "green",
    },
    {
      label: "A Shade of Blue",
      value: "blue",
    },
  ];

function App() {
    const [selected, setSelected] = useState(options[0])
    
    return (
        <div>
            <Dropdown
                options={options}
                selected={selected}
                onSelectedChange={setSelected}
            />
        </div>
    );
}

export default App;
