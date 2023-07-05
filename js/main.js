let milliSeconds = document.querySelector(".ms")
let nowTime = document.querySelector("span")






setInterval(() =>{
  let ms = new Date().getTime()
  milliSeconds.innerText = ms
  let h = new Date().getHours()
  let m = new Date().getMinutes()
  let s = new Date().getSeconds()
  let res = h + ":" + m + ":" + s
  nowTime.innerHTML = res
},1000)