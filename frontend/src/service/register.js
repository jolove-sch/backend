import axios from 'axios';


class register {
    async mobilRegister (email, serialNumber){
        try {
            const res = await axios({
                method: "post",
                url: 'http://jolove.kro.kr/api/mobile',
                data: {
                    email: email,
                    serialNumber: serialNumber,
                },
            });
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    };

    async bandRegister (email, serialNumber){
        try {
            const res = await axios({
                method: "post",
                url: 'http://jolove.kro.kr/api/band',
                data: {
                    email: email,
                    serialNumber: serialNumber,
                },
            });
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    };



}

export default register;