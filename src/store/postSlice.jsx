import { createSlice } from '@reduxjs/toolkit'
import UseGet from '../hooks/useGet'
import UsePut from '../hooks/usePut'
import UseDelete from '../hooks/useDelete'
import UsePost from '../hooks/usePost'
const postArr = {
    arr: []
}


const PostSlice = createSlice({
    name: "post",
    initialState: postArr,
    reducers: {
        editing: (state, actions) => {
            state.todoArr.map((item) => {

                if (item.id === actions.payload.id) {
                    item.nameWirter = actions.payload.newInput;

                }
                console.log(item);

            })



        },
        postGet: (state, actions) => {
      
          const [httpGet, res] = UseGet();
          httpGet('https://localhost:44303/PostGet')
          state.arr = res
          
      },
      
        postPut:(state, actions) => {
            debugger
            const httpPut = UsePut();
            httpPut('https://localhost:44303/PostPut'+actions.payload.id,actions.payload)

            console.log(actions.payload);
        },
        postDelete:(state, actions) => {
            
            const httpDelete = UseDelete();
            httpDelete('https://localhost:44303/PostDelete'+actions.payload)
            console.log(actions.payload);
            // state.arr = res
        } ,  postPost:(state, actions) => {
            // debugger
            const httpPost = UsePost()
            httpPost('https://localhost:44303/PostPost',actions.payload)

            console.log(actions.payload);
            // state.arr = res
        },

    }
})
export const { editing ,postGet,postPut,postDelete,postPost} = PostSlice.actions
export default PostSlice.reducer