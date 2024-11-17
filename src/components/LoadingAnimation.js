import React from 'react';



export const LoadingAnimation = () => {
    return (

        <>
            <div className="progress-container">
          <div className="progress-bar"></div>
        </div>
        <div className="text-container">
        <div className="loading-text initial">Loading</div>
        <div className="loading-text complete">Complete</div>
      </div>
      <div className="percentage">0</div>
</>

)
}