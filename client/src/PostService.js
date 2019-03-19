import axios from 'axios';


var url = 'http://localhost:5000/api/posts/';


class PostService {
    // Get Posts
    static getPosts() {
        return new Promise(async (resolve, reject) =>{
            try {
                var res = await axios.get(url);
                var data = res.data;
                resolve(
                    data.map(post => ({
                      ...post,
                      createdAt: new Date(post.createdAt)
                    }))
                );
            } catch(err) {
                reject(err);
            }
        });
    }

    // Create Posts
    static insertPost(text) {
        return axios.post(url, {
            text
        });
    }

    // Delete Posts
    static deletePost(id) {
        return axios.delete(`${url}${id}`);
    }

}


export default PostService;