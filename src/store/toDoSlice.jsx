import { createSlice } from '@reduxjs/toolkit'
import UseGet from '../hooks/useGet'
import UseDelete from '../hooks/useDelete'
import UsePut from '../hooks/usePut'
import UsePost from '../hooks/usePost'
// const todo = {
//     todoArr: [{
//         id: 0,
//         nameWirter: "Ayala",
//         nameBook: "my life",
//         price: 8
//     }, {
//         id: 1,

//         nameWirter: "Rut",
//         nameBook: "A",
//         price: 8

//     }, {
//         id: 2,

//         nameWirter: "a",
//         nameBook: "b",
//         price: 8

//     }, {
//         id: 3,

//         nameWirter: "a",
//         nameBook: "c",
//         price: 8

//     }, {
//         id: 4,

//         nameWirter: "a",
//         nameBook: "d",
//         price: 8

//     }, {
//         id: 5,

//         nameWirter: "a",
//         nameBook: "e",
//         price: 8

//     }]
// }

const todoArr = {
    arr: []
}
const ToDoSlice = createSlice({
    name: "todo",
    initialState: todoArr,
    reducers: {
        editing: (state, actions) => {
            state.todoArr.map((item) => {
                // console.log(actions);

                if (item.id === actions.payload.id) {
                    item.nameWirter = actions.payload.newInput;
                    // console.log(item.nameWirter);

                }
                console.log(item);

                // console.log(state.todoArr);
                // return (
                //     < div key={item.id}>
                //         <div>{item.nameBook}</div>
                //         <div>{item.nameWirter}</div>
                //     </div >
                // )
            })



        },

        deleteItem: (state, actions) => {
            console.log(state.arr);
            //  state.todoArr.map((item) => {
            //     console.log("item")
            //     // console.log(item);

            //     if (item.id === actions.payload.id) {
            //         // item=null;
            //         console.log("delete");

            //     }
            //     console.log("arr")
            //     // console.log(state.todoArr[0]);

            // })
            state.arr[0].nameBook = "yali"
            console.log(state.arr[0].nameBook);
            // state.todoArr[actions.payload.id]=null;


        }
        ,  todoGet: (state, actions) => {
            
            const [httpGet, res] = UseGet();
            httpGet('https://localhost:44303/ToDoGet')
            state.arr = res
            // console.log(state.arr[0]+" state.arr");
        },
        todoDelete:(state, actions) => {
            
            const httpDelete = UseDelete();
            httpDelete('https://localhost:44303/ToDelete'+actions.payload)
            console.log(actions.payload);
            // state.arr = res
        },
        todoPut:(state, actions) => {
            // debugger
            const httpPut = UsePut();
            httpPut('https://localhost:44303/ToPut'+actions.payload.id,actions.payload)

            console.log(actions.payload);
            // state.arr = res
        },
        todoPost:(state, actions) => {
            // debugger
            const httpPost = UsePost()
            httpPost('https://localhost:44303/ToDoPost',actions.payload)

            console.log(actions.payload);
            // state.arr = res
        },

    }
})
export const { editing, deleteItem,todoGet,todoDelete,todoPut,todoPost } = ToDoSlice.actions
export default ToDoSlice.reducer