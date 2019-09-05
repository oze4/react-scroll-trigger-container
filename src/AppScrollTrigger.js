import React, { useState } from 'react';
import ScrollTrigger from './react-scroll-trigger.js';
import './style.css';

let containerStyle = {
    height: '400px',
    overflow: 'scroll',
    border: '1px dashed black'
}

let fakePageStyle = {
    height: '300px',
    width: '300px',
    border: '2px solid blue'
}

const TOTAL_FAKE_PAGES = 6;


export default function AppScrollTrigger() {
    const [progressData, setProgressData] = useState();
    let myRef;

    const handleOnProgress = progress => {
        setProgressData(progress);
    }

    return (
        <>
            <div ref={r => myRef = r} style={containerStyle} >
                {Array.from(new Array(TOTAL_FAKE_PAGES), (el, index) => (
                    <ScrollTrigger containerRef={myRef} onProgress={handleOnProgress} >
                        <div style={fakePageStyle}>
                        </div>
                    </ScrollTrigger>
                ))}
            </div>
            <div className="sticky">
                <pre>{JSON.stringify(progressData, null, 2)}</pre>
            </div>
            {Array.from(new Array(50), (el, index) => (
                <p key={index}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse scelerisque, lectus in pharetra blandit, augue mauris pulvinar erat, ut euismod nibh lectus sed diam. Nulla fringilla ultrices ligula. Aliquam vitae felis metus. Maecenas lacinia bibendum accumsan. Curabitur lobortis convallis purus non imperdiet. Morbi ut vulputate mauris. Curabitur lacinia faucibus volutpat. Nulla elit tortor, rhoncus ut luctus eget, blandit in risus. Integer accumsan ullamcorper lorem id porttitor. Aliquam vitae libero eget magna mollis gravida.</p>
            ))}
        </>
    );
}