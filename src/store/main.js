export const useStore = defineStore("main", {
  state: () => {
    return {};
  },
  getters: {},
  actions: {},
  //持久化
  persist: {
    enabled: true,
    strategies: [
    //   {
    //     // 自定义key,默认就是仓库的key
    //     key: "token",
    //     // 自定义存储方式，默认sessionStorage
    //     storage: localStorage,
    //     // 指定要持久化的数据，默认所有 state 都会进行缓存，可以通过 paths 指定要持久化的字段，其他的则不会进行持久化。
    //     paths: ["token"],
    //   },
    //   {
    //     key: "menulist",
    //     storage: localStorage,
    //     paths: ["menulist"],
    //   },
    ],
  },
});
