import create from 'zustand';

const useStore = create((set) => ({
  resObj: [],
  id: [],
  heartBeat: [],
  oxygen: [],
  temperature: [],
  cry: [],
  flipped: [],
  nickname: [],

  setResObj: (res) => {
    set((state) => ({
      resObj: res,
      id: res && res.map(r => {
        //console.log(r.id)
        return r.id
      }),
      nickname: res && res.map(r => {
        // const a = [r.nickname]
        // console.log(a)
        return r.nickname
      }),
      heartBeat: res && res.map((r, i)=> {
        //console.log(i, r.heartBeat)
        return r.heartBeat
      })
      ,
      oxygen: res && res.map(r => {
        //console.log(r.oxygen)
        return r.oxygen
      }),
      temperature: res && res.map(r => {
        //console.log(r.temperature)
        return r.temperature
      }),
      cry:res && res.map(r => {
        //console.log(r.cry)
        return r.cry
      }),
      flipped: res && res.map(r => {
        //console.log(r.flipped)
        return r.flipped
      })
    }));
  }

}));

export default useStore;