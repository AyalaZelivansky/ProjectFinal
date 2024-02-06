import { createSlice } from '@reduxjs/toolkit'
import UseGet from '../hooks/useGet'
import UsePut from '../hooks/usePut'
import UseDelete from '../hooks/useDelete'
import UsePost from '../hooks/usePost'
import axios from 'axios'

const postArr = {
    arr: []
}


const PostSlice = createSlice({
    name: "post",
    initialState: postArr,
    reducers: {

        postGet: (state, actions) => {

            const [httpGet, res] = UseGet();
            httpGet('https://localhost:44303/PostGet')
            state.arr = res

        },

        postPut: (state, actions) => {
            const httpPut = UsePut();
            httpPut('https://localhost:44303/PostPut' + actions.payload.id, actions.payload)

        },
        postPutLike: (state, actions) => {
            const put = async () => {
                try {
                    debugger
console.log(actions.payload);
                    const res = await axios.put('https://localhost:44303/PostLikePut' + actions.payload.id,actions.payload)
                    alert("good put")
                } catch (error) {
                    console.log(error);
                }
            }
            put()
            console.log(actions.payload);
        },
        postDelete: (state, actions) => {

            const httpDelete = UseDelete();
            httpDelete('https://localhost:44303/PostDelete' + actions.payload)
            console.log(actions.payload);
        },
         postPost: (state, actions) => {
            const httpPost = UsePost()
            httpPost('https://localhost:44303/PostPost', actions.payload)

        },

    }
})
export const { postGet, postPut, postDelete, postPost, postPutLike } = PostSlice.actions
export default PostSlice.reducer