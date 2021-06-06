import PostMessage from '../models/postMessages.js'

//
export const getPosts = async (req, res) => {

    try {
        const postMessage = await PostMessage.find();

        res.status(200).json(postMessage);
    } catch (error) {
        //  console.log(error)
        res.status(404).json({ message: error.message });
    }
}

export const createPost = (req, res) => {

}