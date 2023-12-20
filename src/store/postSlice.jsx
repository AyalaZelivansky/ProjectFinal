import { createSlice } from '@reduxjs/toolkit'
const post = {
    postArr: [{
        id: 0,
        nameWirter: "Ayala",
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
        showPost: (state, actions) => {
            // state.bookaArr.map((item) => {
            //     return (
            //         < div key={item.id}>
            //             <div>{item.nameBook}</div>
            //             <div>{item.nameWirter}</div>
            //         </div >
            //     )
            // })
           
        }

    }
})
export const { showPost } = PostSlice.actions
export default PostSlice.reducer