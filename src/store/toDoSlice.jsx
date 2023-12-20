import { createSlice } from '@reduxjs/toolkit'
const todo = {
    todoArr: [{
        id: 0,
        nameWirter: "Ayala",
        nameBook: "my life",
        price: 8
    }, {
        id: 1,

        nameWirter: "Rut",
        nameBook: "A",
        price: 8

    }, {
        id: 2,

        nameWirter: "a",
        nameBook: "b",
        price: 8

    }, {
        id: 3,

        nameWirter: "a",
        nameBook: "c",
        price: 8

    }, {
        id: 4,

        nameWirter: "a",
        nameBook: "d",
        price: 8

    }, {
        id: 5,

        nameWirter: "a",
        nameBook: "e",
        price: 8

    }]
}


const ToDoSlice = createSlice({
    name: "todo",
    initialState: todo,
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
            console.log(state.todoArr);
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
            state.todoArr[0].nameBook = "yali"
            console.log(state.todoArr[0].nameBook);
            // state.todoArr[actions.payload.id]=null;


        }

    }
})
export const { editing, deleteItem } = ToDoSlice.actions
export default ToDoSlice.reducer