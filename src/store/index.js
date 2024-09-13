import { defineStore } from "pinia";

export const mainStore = defineStore("main", {
  state: () => {
    return {
      imgLoadStatus: false, // 壁紙載入狀態
      innerWidth: null, // 目前視窗寬度
      coverType: "0", // 壁紙種類
      siteStartShow: true, // 建站日期顯示
      musicClick: false, // 音樂鏈接是否跳轉
      musicIsOk: false, // 音樂是否載入完成
      musicVolume: 0.18, // 音樂音量;
      musicOpenState: false, // 音樂面板開啟狀態
      backgroundShow: false, // 壁紙展示狀態
      boxOpenState: false, // 盒子開啟狀態
      mobileOpenState: false, // 移動端開啟狀態
      mobileFuncState: false, // 移動端功能區開啟狀態
      setOpenState: false, // 設定頁面開啟狀態
      playerState: false, // 目前播放狀態
      playerTitle: null, // 目前播放歌曲名
      playerArtist: null, // 目前播放歌手名
      playerLrc: "歌詞載入中", // 目前播放歌詞
      playerLrcShow: true, // 是否顯示底欄歌詞
      footerBlur: true, // 底欄模糊
      playerAutoplay: true, // 是否自動播放
      playerLoop: "all", // 循環播放 "all", "one", "none"
      playerOrder: "random", // 循環順序 "list", "random"
    };
  },
  getters: {
    // 獲取歌詞
    getPlayerLrc(state) {
      return state.playerLrc;
    },
    // 獲取歌曲資訊
    getPlayerData(state) {
      return {
        name: state.playerTitle,
        artist: state.playerArtist,
      };
    },
    // 獲取頁面寬度
    getInnerWidth(state) {
      return state.innerWidth;
    },
  },
  actions: {
    // 更改當前頁面寬度
    setInnerWidth(value) {
      this.innerWidth = value;
      if (value >= 720) {
        this.mobileOpenState = false;
        this.mobileFuncState = false;
      }
    },
    // 更改播放狀態
    setPlayerState(value) {
      if (value) {
        this.playerState = false;
      } else {
        this.playerState = true;
      }
    },
    // 更改歌詞
    setPlayerLrc(value) {
      this.playerLrc = value;
    },
    // 更改歌曲數據
    setPlayerData(title, artist) {
      this.playerTitle = title;
      this.playerArtist = artist;
    },
    // 更改壁紙載入狀態
    setImgLoadStatus(value) {
      this.imgLoadStatus = value;
    },
  },
  persist: {
    key: "data",
    storage: window.localStorage,
    paths: [
      "coverType",
      "musicVolume",
      "siteStartShow",
      "musicClick",
      "playerLrcShow",
      "footerBlur",
      "playerAutoplay",
      "playerLoop",
      "playerOrder",
    ],
  },
});
