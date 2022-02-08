import axios from 'axios';


class User {
    async login (email, password){
        try {
            const res = await axios({
                method: "post",
                url: 'http://jolove.kro.kr/api/auth/login',
                data: {
                    email: email,
                    password: password,
                },
            });
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    };

    /*signup (email, password, name){
        axios({
            method: "post",
            url: '',
            data: {
                email: email,
                password: password,
                name: name
            },
        })
        .then((res) => {
            window.alert(res.data.result);
        })
        .catch((error) => {
            console.log(error);
        })
    }*/
};


export default User;