import { useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux'
// import ToDoShow from "./todoShow"
import CardShow from "./toDoShow"

const ToDo = () => {

    const toDolist = useSelector((myStore) => myStore.ToDoSlice.todoArr)
    console.log(toDolist);
 
    return (
        <>
        <div style={{display:'flex',flexWrap:'wrap'}}>
            {
            
            toDolist.map((item) => {
                console.log("tryy");
                return (
                    <CardShow id={item.id} text={item.nameWirter} />
                )
            })
        }</div>
        </>

    )
}

export default ToDo
