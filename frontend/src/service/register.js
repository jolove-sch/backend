import axios from 'axios';


class register {
    async mobilRegister (email, serialNumber, nickname){
        try {
            const res = await axios({
                method: "post",
                url: 'https://jolove.kro.kr/api/mobile',
                data: {
                    email: email,
                    serialNumber: serialNumber,
                    nickName: nickname
                },
            },
            {
                withCredentials: true
            }
            );
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    };

    async bandRegister (email, serialNumber, nickname){
        try {
            const res = await axios({
                method: "post",
                url: 'https://jolove.kro.kr/api/band',
                data: {
                    email: email,
                    serialNumber: serialNumber,
                    nickname: nickname
                },
            });
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    };



}

export default register;