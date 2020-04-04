// 不直接用localStorage.city是为了防止有些浏览器禁用localStorage.city
let defaultCity = '上海'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {}

export default {
  city: defaultCity
}
