let milliSeconds = document.querySelector(".ms")
let nowTime = document.querySelector("span")
let tdFor = document.querySelector("#format")
let tdGmt = document.querySelector("#gmt")
let tdTimeZone = document.querySelector("#timeZone")
let tdDiff = document.querySelector("#diff")
let btn = document.querySelector(".btn")
let copyBtn = document.querySelector(".copy")
let input = document.querySelector("input[type='number']")
let table = document.querySelector("table")


btn.addEventListener('click', () => {
  table.style.display = `block`
  values(+input.value)
  let s = +input.value
  let gmt = new Date(s).toUTCString()
  tdGmt.innerText = gmt
  let nowTime = new Date(s)
  tdTimeZone.innerText = nowTime
  let timeYear = new Date().getFullYear()
  let nowYear = nowTime.getFullYear()
  let res = timeYear - nowYear
  // tdDiff.innerText = res
  if(res > 0){
    tdDiff.innerText = res + " year ago"
  }else if(res < 0){
    tdDiff.innerText = "in " + res + " year"
  }
})


function values(){
  if(input.value.length >0 && input.value.length <= 11){
    tdFor.innerText = "second"
  }else if(input.value.length > 11 && input.value.length <= 14){
    tdFor.innerText = "Millisecond (1/1 000 s)"
  }else if(input.value.length > 14 && input.value.length <= 17){
    tdFor.innerText = "Mikrosecond (1/1 000 000 s)"
  }else if(input.value.length <=0){
    tdFor.innerText = ""
    alert("Inputga son kiriting")
  }else{
    tdFor.innerText = "Nanosecond (1/1 000 000 000 s)"
  }
}

copyBtn.addEventListener('click', () => {
  let newTime = new Date().getTime()
  navigator.clipboard.writeText(newTime)
  copyBtn.innerText = "Copied!"
  setTimeout(() =>{
    copyBtn.innerText = "Copy"
  },1000)
})






setInterval(() =>{
  let ms = new Date().getTime()
  milliSeconds.innerText = ms
  let h = new Date().getHours()
  let m = new Date().getMinutes()
  let s = new Date().getSeconds()
  let res = h + ":" + m + ":" + s
  nowTime.innerHTML = res
},1000)