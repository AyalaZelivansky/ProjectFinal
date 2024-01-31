import { useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux'
import UserShow from "./UsersShow"

const User = () => {

    const users=useSelector((myStore)=>myStore.UserSlice.usersArr)
    console.log(users);
  
    return (
        <>
        <div style={{display:'flex',flexWrap:'wrap'}}>
            {
            users.map((item) => {               
                return (
                    <UserShow id={item.id} text={item.nameWirter} />
                )
            })
        }</div>
        </>

    )
}

export default User
