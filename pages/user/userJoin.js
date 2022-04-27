import React, { useEffect, useState} from 'react'
import UserJoin from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userJoin } from "@/modules"

const UserJoinPage = () => {
    const dispatch = useDispatch()
    const { form, auth, user} = useSelector(({auth,user}) => ({
        auth : auth.auth, 
        user : user.user,
        authError : auth.authError,
        form : auth.userJoin}))
    const onSubmit = e => {
        e.preventDefault()
        const {userid, name, email, password, phone, birth, address} = form
        alert(" phase 1"+JSON.stringify(form))
        dispatch(userJoin({userid, name, email, password, phone, birth, address}))
    }

    const onChange = e => {
        e.preventDefault()
    }
    return (<UserJoin onSubmit = {onSubmit} onChange={onChange} form={form}/>)
}

export default UserJoinPage