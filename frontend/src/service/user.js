import axios from 'axios';

axios.defaults.withCredentials = true;

class User {
    async login (email, password){
        try {
            const res = await axios({
                method: "post",
                url: 'https://jolove.kro.kr/api/auth/login',
                data: {
                    email: email,
                    password: password,
                }
            });
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    };

    async signup (email, password, phoneNumber){
        try {
            const res = await axios({
                method: "post",
                url: 'http://jolove.kro.kr/api/auth/sign',
                data: {
                    email: email,
                    password: password,
                    phoneNumber: phoneNumber,
                },
            });
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    };


    /*logout() {
        const history = useHistory();
        history.replaceState('./');
    }*/
};


export default User;