let toastBox = document.querySelector("#toast-notefication")
let SuccessMsg = '<i class="fa-solid fa-circle-check"></i> Successfully Submitted !'
let InvalidMsg = '<i class="fa-solid fa-circle-exclamation"></i> Invalid Submit !'
let ErrorMsg = '<i class="fa-solid fa-circle-xmark"></i> Error , fix it  please !'



function showtoast(MSg){
    let toast = document.createElement("div")
    toast.classList.add("toast")
    toast.innerHTML= MSg
    toastBox.appendChild(toast)
    if(MSg.includes("Invalid")){
        toast.classList.add("invalid")
    }
    if(MSg.includes("Error")){
        toast.classList.add("Error")
    }
    setTimeout(() => {
        toast.remove()
    },6000)
}

