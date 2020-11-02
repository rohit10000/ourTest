import React from 'react';

export const Loading = ({minHeight}) => {
    return(
        <div className="col-12" style={{minHeight: minHeight, display: "flex", justifyContent:"center", alignItems:"center"}}>
            <span className="fa fa-spinner fa-pulse fa-3x fa-fw text-warning"></span>
            <p>Loading . . .</p>
        </div>
    );
};
