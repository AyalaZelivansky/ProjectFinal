import { createSlice } from '@reduxjs/toolkit'
import UseGet from '../hooks/useGet';
import UsePut from '../hooks/usePut';
import UseDelete from '../hooks/useDelete';
import UsePost from '../hooks/usePost';
const userArr = {
    arr: []
}


const UserSlice = createSlice({
    name: "user",
    initialState: userArr,
    reducers: {
        userGet: (state, actions) => {
            
            const [httpGet, res] = UseGet();
            httpGet('https://localhost:44303/UserGet')
            state.arr = res

        },
        userPut: (state, actions) => {
            const httpPut = UsePut();
            httpPut('https://localhost:44303/UserPut' + actions.payload.id, actions.payload)

            console.log(actions.payload);
        },
        userDelete: (state, actions) => {

            const httpDelete = UseDelete();
            httpDelete('https://localhost:44303/UserDelete' + actions.payload)
            console.log(actions.payload);
        },
        userPost: (state, actions) => {
            const httpPost = UsePost()
            httpPost('https://localhost:44303/UserPost', actions.payload)

        },


    }
})
export const { userGet,userPut,userDelete,userPost } = UserSlice.actions
export default UserSlice.reducer