import axios from 'axios';
axios.defaults.withCredentials = true;

class Mobile {
  async mobileControl (control) {
    try{
      const res = await axios({
        method: "post",
        url: 'https://jolove.kro.kr/api/mobile/control',
        data: {
          control: control
        }
      });
      console.log(res);
    }catch (error) {
      console.log(error);
    }
  }
}

export default Mobile;