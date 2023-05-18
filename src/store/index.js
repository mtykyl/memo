import { createStore } from 'vuex'
import { VuexPersistence } from 'vuex-persist'

//ブラウザのlocalstorageに保存してデータを残す
const VuexPersist = new VuexPersistence({
  storage:localStorage
})

export default createStore({
  //状態管理：どんなデータを保存するか
  state: {
    count:0,
    memos:[]
  },
  //storeに入ったデータを取得
  getters: {
    getCount:(state)=>{
      return state.memos.length
    },
    getAll:(state)=>{
      return state.memos
    },
    getMemoById:(state)=>(id)=>{
      return state.memos.find(memo=>memo.id === id)
    }
  },
  //stateの状態を変化させる
  mutations: {
    //localstorageに保存するための記載
    RESTORE_MUTATION:VuexPersist.RESTORE_MUTATION,
    // memoを保存する
    save(state,newMemo){
      if(newMemo.id){
        let x = state.memos.find(memo=>memo.id ==newMemo.id)
        x.title = newMemo.title
        x.content = newMemo.content
      }
      else{
      newMemo.id = ++state.count
      state.memos.unshift(newMemo)
    }
  },
  delete(state,id){
state.memos = state.memos.filter(memo => memo.id !== id)
  }
  },
  //非同期処理
  // actions: {
  // },
  //stateを複数定義してmoduleとしてまとめる
  // modules: {
  // },
  plugins:[VuexPersist.plugin]
})
