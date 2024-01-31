import axios from 'axios'

const UsePost = () => {

    const post = async (url, data) => {
        // debugger
        try {
            // await axios.post(url,{
            //     headers: {
            //       'Accept': 'application/json'
            //     },
            //     data: data
            //   })
            await axios.post(url, data)

            alert("good post")
        } catch (error) {
            console.error(error)
        }
    }

    return post
}

export default UsePost