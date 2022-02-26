import React from 'react'

import { useNavigate, useParams } from 'react-router-dom'

function UserName() {
    const params = useParams();
    const navigate = useNavigate();
    const goBackHandler=()=>{
        navigate('/welcome')
    }
    return (
        <div>
            <p>Hello {params.userName}</p>
            <button onClick={goBackHandler}>Log Out</button>
        </div>
    )
}

export default UserName
