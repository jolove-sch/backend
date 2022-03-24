import create from 'zustand';

const useStore = create((set) => ({
  resObj: [],
  heartBeat: [],
  oxygen: [],
  temperature: [],
  cry: [],
  flipped: [],

  setResObj: (res) => {
    set((state) => ({
      resObj: res,
      heartBeat: res.heartBeat,
      oxygen: res.oxygen,
      temperature: res.temperature,
      cry: res.cry,
      flipped: res.flipped
    }));
  }
}));

export default useStore;