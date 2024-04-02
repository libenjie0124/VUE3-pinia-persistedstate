import router from "@/route";
const mobileScreenWidth = 768;

// 监听窗口 resize 事件
window.addEventListener("resize", () => {
  const windowWidth = window.innerWidth;
  if (windowWidth < mobileScreenWidth) {
    router.push("/h5");
  } else {
    router.push("/web");
  }
});
