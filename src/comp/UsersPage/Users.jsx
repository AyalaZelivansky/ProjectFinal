import { useSelector, useDispatch } from 'react-redux'
import UserShow from "./UsersShow"
import { userGet } from "../../store/UsersSlice"
import Button from '@mui/material/Button';
import FormDialog from "../Editing";
import {useState } from "react"


const User = () => {
    const dispatch = useDispatch()
    dispatch(userGet())

    const users = useSelector((myStore) => myStore.UserSlice.arr);
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);       
    };

    const onClose = () => {
        setOpen(false);
    };

    return (
        <>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>

                <Button size="small" variant="outlined" onClick={() => { handleClickOpen() }}>
                    add
                </Button>
                {open && <FormDialog page={"addUser"} openFunc={onClose} p={{todo:false,user:true,post:false}}/>}

                {
                    users.map((item) => {
                        return (
                            <UserShow id={item.id} text={item} />
                        )
                    })
                }</div>
        </>

    )
}

export default User
