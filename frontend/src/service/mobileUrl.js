import create from 'zustand';

const mobileUrl = create((set) => ({
  resObj:[],
  mUrl: '',

  setResObj: (res) => {
    set((state) => ({
      resObj: res,
      Murl: res.data
    }));
  }
}));

export default mobileUrl;