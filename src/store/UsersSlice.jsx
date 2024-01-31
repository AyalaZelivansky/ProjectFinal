import { createSlice } from '@reduxjs/toolkit'
const users = {
    usersArr: [{
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


const UserSlice = createSlice({
    name: "user",
    initialState: users,
    reducers: {
        editing: (state, actions) => {
            state.usersArr.map((item) => {

                if (item.id === actions.payload.id) {
                    item.nameWirter = actions.payload.newInput;
                }
                console.log(item);

            })



        },

    }
})
export const { editing } = UserSlice.actions
export default UserSlice.reducer