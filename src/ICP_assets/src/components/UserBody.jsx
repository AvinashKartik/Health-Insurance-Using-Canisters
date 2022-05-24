import React from 'react'

const UserBody = () => {
    return (
        <div style={{textAlign:"center", marginTop:"250px"}}>
            <a href="/buyForm">
                <button style={{display: 'inline-block', marginRight: '20px'}}>Buy Insurance</button>
            </a>
            <a href='claimForm'>
                <button href="/claimForm" style={{display: 'inline-block', marginRight: '20px'}}>Claim Insurance</button>
            </a>
        </div>
    )
}

export default UserBody;