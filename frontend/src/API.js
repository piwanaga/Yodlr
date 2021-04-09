/**API to interact with backend routes */

import axios from 'axios'

const BASE_URL = 'http://localhost:3001/users'

class API {
    /**Get list of users */
    static async getUsers() {
        const res = await axios.get(BASE_URL);
        return res.data;
    };

    /**Create new user with data from RegisterForm */
    static async createUser(data) {
        const res = await axios.post(BASE_URL, data);
        return res.data;
    };

    /**Update user state by id
     * - change from 'pending' to 'active' and vice versa
     */
    static async updateUserState(id) {
        const res = await axios.patch(BASE_URL + `/${id}`);
        return res.data;
    };

    /**Delete user by id*/
    static async deleteUser(id) {
        await axios.delete(BASE_URL + `/${id}`)
    }
};

export default API;