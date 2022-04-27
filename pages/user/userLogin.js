import React, { useEffect, useState } from 'react'
import UserLogin from 'react'
import { useSelector } from 'react-redux'

const UserLoginPage =()=> {
    const onSubmit =e=> {
        e.preventDefault()
        const { userid, password } = form 
    }
    const onChange =e=> {
        e.preventDefault()
        
    }
    return (<UserLogin onSubmit = {onSubmit} onChange={onChange} form={form}/>)
}
export default UserLoginPage