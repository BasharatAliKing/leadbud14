    import React from 'react';

    const Circle = ({ percentages ,text }) => {
        const colors = ['#E61F1F', '#56F444', '#003CFF', '#00EDFF', '#FFA200'];
        let cumulativePercentage = 0;

        return (
         <div className='circle-container'>
            <svg viewBox="0 0 42 36" className="circular-chart">
                {percentages.map((percentage, index) => {
                    const startValue = cumulativePercentage;
                    cumulativePercentage += percentage;

                    return (
                        <circle
                            key={index}
                            className="circle"
                            stroke={colors[index]}
                            strokeDasharray={`${percentage} ${100 - percentage}`}
                            strokeDashoffset={20 - (100 * startValue) / 100}
                            strokeWidth="8.1"
                            fill="none"
                            r="16"
                            cx="18"
                            cy="18"
                        />
                        
                    );
                })}
            </svg>
            <div className="circle-text">{text}</div>
         </div>
        );
    };

    export default Circle;
    

    
