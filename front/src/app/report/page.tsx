'use client'

import { useState } from 'react';
import './styles.css'; // Adjust the path as necessary

function Report() {
    const [isGenerating, setIsGenerating] = useState(false);

    const handleGenerateReport = () => {
        setIsGenerating(true);
        //Here you would add the logic to generate the report
        //Right now its only simulating a delay
        setTimeout(() => {
            setIsGenerating(false);
            alert('Report generated!'); //popup when delay is done

        }, 2000);// delay of 2000 milliseconds/2 Seconds
    };

    return (
        <div>  {/* Added this wrapper div */}
            <h1 className="title">City Report</h1>
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <button 
                    onClick={handleGenerateReport}
                    disabled={isGenerating}
                    //Design of the button
                    style={{
                        padding: '10px 20px',
                        fontSize: '1rem',
                        backgroundColor: isGenerating ? '#cccccc' : '#007bff',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: isGenerating ? 'not-allowed' : 'pointer'
                    }}
                >
                    {isGenerating ? 'Generating...' : 'Generate Report'}
                </button>
            </div>
        </div>
    );
}

export default Report;