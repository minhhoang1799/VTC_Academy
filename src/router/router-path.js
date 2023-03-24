import  MODULE_PAGES  from "../pages";


export const ROUTER_PAGE = [
 {
   key: "home",
   name: "Việc làm",
   exact: true,
   path: "/",
   component: MODULE_PAGES.Home,
   private: false
 },
  {
   key: "recruitment",
   name: "Nhà tuyển dụng",
   exact: true,
   path: "/recruitment",
   component: MODULE_PAGES.Recruiment,
   private: false
 },
  {
   key: "secret",
   name: "Bí quyết tìm việc",
   exact: true,
   path: "/secret",
   component: MODULE_PAGES.Secret,
   private: false
 },
 {
   key: "about",
   name: "Giới thiệu",
   exact: true,
   path: "/about",
   component: MODULE_PAGES.About,
   private: false
 },
 {
   key: "news",
   name: "Tin tức",
   exact: true,
   path: "/news",
   component: MODULE_PAGES.News,
   private: false
 },
  {
   key: "contact",
   name: "Liên hệ",
   exact: true,
   path: "/contact",
   component: MODULE_PAGES.Contact,
   private: false
 },
   {
   key: "login",
   name: "Đăng nhập",
   exact: true,
   path: "/login",
   component: MODULE_PAGES.Login,
   private: true
 },
 {
  key: "error",
  component: MODULE_PAGES.Error
 }
];
export const ROUTER_LINK = [
 {
   key: "home",
   name: "Việc làm",
   exact: true,
   path: "/",
   component: MODULE_PAGES.Home,
   private: false
 },
  {
   key: "recruitment",
   name: "Nhà tuyển dụng",
   exact: true,
   path: "/recruitment",
   component: MODULE_PAGES.Recruiment,
   private: false
 },
  {
   key: "secret",
   name: "Bí quyết tìm việc",
   exact: true,
   path: "/secret",
   component: MODULE_PAGES.Secret,
   private: false
 },
 {
   key: "about",
   name: "Giới thiệu",
   exact: true,
   path: "/about",
   component: MODULE_PAGES.About,
   private: false
 },
 {
   key: "news",
   name: "Tin tức",
   exact: true,
   path: "/news",
   component: MODULE_PAGES.News,
   private: false
 },
 {
  key: "error",
  component: MODULE_PAGES.Error
 }
];

