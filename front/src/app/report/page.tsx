'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import './styles.css'; // Adjust the path as necessary

function Report() {
    const [isGenerating, setIsGenerating] = useState(false);
    const router = useRouter();
//Manages the generate report button
    const handleGenerateReport = () => {
        setIsGenerating(true);
        setTimeout(() => {
            setIsGenerating(false);
            alert('Report generated!');
        }, 1000);
    };
//manages the back arrow that goes back to 
    const handleBackClick = () => {
        router.push('/');
    };

    return (
        <div>
            <h1 className="title">City Report</h1>
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <button 
                    onClick={handleGenerateReport}
                    disabled={isGenerating}
                    style={{
                        padding: '10px 20px',
                        fontSize: '1rem',
                        backgroundColor: isGenerating ? '#cccccc' : 'red',
                        color: 'black',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: isGenerating ? 'not-allowed' : 'pointer',
                        marginRight: '10px'
                    }}
                >
                    {isGenerating ? 'Generating...' : 'Generate Report'}
                </button>
                <button 
                    onClick={handleBackClick}
                    style={{
                        padding: '10px 20px',
                        fontSize: '1rem',
                        backgroundColor: '#6c757d',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer'
                    }}
                >
                    Back to Map
                </button>
            </div>
        </div>
    );
}

export default Report;