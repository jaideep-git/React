import React, { useState, useEffect, useRef } from "react";

const Dropdown = ({ options, selected, onSelectedChange }) => {
    const [open, setOpen] = useState(false);
    const ref = useRef();
    
    // * Event Bubbling
    /**
     * addEventlistner > onClick (React Event listner)
     * Event Bubbling order- body -> item -> Dropdown div
     */

    useEffect(() => {
        document.body.addEventListener(
            "click",
            (event) => {
                if (ref.current.contains(event.target)) {
                    return;
                }
                    
                setOpen(false);
            },

            { capture: true }
          );
    }, []);

    const renderedOptions = options.map((option) => {
        if (option.value === selected.value) {
            return null
        }

        return (
            <div
                key={option.value}
                className="item"
                onClick={() => onSelectedChange(option)}
            >
                {option.label}
            </div>
        )
    })

    return (
        <div ref={ref} className="ui form">
            <div className="field">
                <label className="label">Select a Color</label>
                <div 
                    onClick={() => setOpen(!open)}
                    className={`ui selection dropdown ${ open ? 'visible active' : ''}`}
                >
                    <i className="dropdown icon"></i>
                    <div className="text">{ selected.label }</div>
                    <div className={`menu ${open ? 'visible transition' : ''}`}>
                        {renderedOptions}
                    </div>
                </div>
            </div>
            <h3 style={{color:selected.value}}>{ selected.label }</h3>
        </div>
    )
}

export default Dropdown