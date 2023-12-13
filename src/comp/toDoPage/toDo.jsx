import { useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux'
import ToDoShow from "./todoShow"
import ToDoShow2 from "./toDoShow2"

const ToDo = () => {

    const toDolist = useSelector((myStore) => myStore.ToDoSlice.todoArr)
    console.log(toDolist);
    // useEffect(() => {
    //     console.log("use");
    //     todolist.map((item) => {
    //         console.log("222");
    //         <ToDoShow id={item.id} text={item.nameWirter} />

    //     })

    // }, [])
    return (
        <>
        <div style={{display:'flex',flexWrap:'wrap'}}>
            {
            toDolist.map((item) => {
                return (
                    <ToDoShow2 id={item.id} text={item.nameWirter} />
                )
            })
        }</div>
        </>

    )
}

export default ToDo
