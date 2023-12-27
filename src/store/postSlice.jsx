import { createSlice } from '@reduxjs/toolkit'
const post = {
    postArr: [{
        id: 0,
        nameWirter: "Ayala aaaa ssssssssssssss ddddddddddddd ddddddddddddddddddd fffffffffffff rrrrrrrrrrrrrr ttttttttttt rererere uuuuuuuuuuu kkkkkkkkkkkkkkk lllllllllllll aaaaaaaaaa cccccccccccccc ddddddddddd jjjjjjjj lllllllllll jjjjjjjjjjjjjjjjj jjjjjjjjjjjjjjjjjjjj",
        nameBook: "my life",
        price:8
    }, {
        id: 1,

        nameWirter: "Rut",
        nameBook: "A",
        price:8

    }, {
        id: 2,

        nameWirter: "a",
        nameBook: "b",
        price:8

    }, {
        id: 3,

        nameWirter: "a",
        nameBook: "c",
        price:8

    }, {
        id: 4,

        nameWirter: "a",
        nameBook: "d",
        price:8

    }, {
        id: 5,

        nameWirter: "a",
        nameBook: "e",
        price:8

    }]
}


const PostSlice = createSlice({
    name: "post",
    initialState: post,
    reducers: {
        editing: (state, actions) => {
            state.todoArr.map((item) => {

                if (item.id === actions.payload.id) {
                    item.nameWirter = actions.payload.newInput;

                }
                console.log(item);

            })



        },

    }
})
export const { editing } = PostSlice.actions
export default PostSlice.reducer