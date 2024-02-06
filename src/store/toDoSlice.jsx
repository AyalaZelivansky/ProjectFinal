import { createSlice } from '@reduxjs/toolkit'
import UseGet from '../hooks/useGet'
import UseDelete from '../hooks/useDelete'
import UsePut from '../hooks/usePut'
import UsePost from '../hooks/usePost'


const todoArr = {
    arr: []
}
const ToDoSlice = createSlice({
    name: "todo",
    initialState: todoArr,
    reducers: {

          todoGet: (state, actions) => {
            
            const [httpGet, res] = UseGet();
            httpGet('https://localhost:44303/ToDoGet')
            state.arr = res
        },
        todoDelete:(state, actions) => {
            
            const httpDelete = UseDelete();
            httpDelete('https://localhost:44303/ToDelete'+actions.payload)
            console.log(actions.payload);
        },
        todoPut:(state, actions) => {
            const httpPut = UsePut();
            httpPut('https://localhost:44303/ToPut'+actions.payload.id,actions.payload)

        },
        todoPost:(state, actions) => {
            const httpPost = UsePost()
            httpPost('https://localhost:44303/ToDoPost',actions.payload)

        },

    }
})
export const { deleteItem,todoGet,todoDelete,todoPut,todoPost } = ToDoSlice.actions
export default ToDoSlice.reducer