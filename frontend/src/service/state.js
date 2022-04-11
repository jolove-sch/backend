import React, {Component} from 'react';
import axios from 'axios';

class State extends Component {

    getData = async () => {
        let babystate = await axios.get('http://jolove.kro.kr/api/band/status/test2');
        babystate = babystate.data.data;
        console.log(babystate);
    }
}

export default State;