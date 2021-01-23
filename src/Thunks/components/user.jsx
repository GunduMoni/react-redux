import React from 'react';

export default function User({ RollId, Standard, FullName })
{
    return(
    <div>
        <h3>Roll Number : {RollId}</h3>
        Standard : {Standard}<br/>
        Name : {FullName}<br/>
    </div>)
}