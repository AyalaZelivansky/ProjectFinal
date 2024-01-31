import axios from 'axios'

const UsePut = () => {

    const put = async (url, data) => {
        debugger
        try {
            await axios.put(url, data)
            alert("good put")
        } catch (error) {
            // console.error(error)
            console.log("erorrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr");
        }
    }

    return put
}

export default UsePut