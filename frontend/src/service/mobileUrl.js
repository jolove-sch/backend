import create from 'zustand';

const mobileUrl = create((set) => ({
  resObj:[],
  mUrl: '',

  setResObj: (res) => {
    set((state) => ({
      resObj: res,
      mUrl: res.data
    }));
  }
}));

export default mobileUrl;