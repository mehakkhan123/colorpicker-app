let colorBox = document.getElementById("colorBox")
        let hex = document.getElementById("hex")
       let tooltip = document.getElementById("tooltip")
let copyBtn = document.getElementById("copyBtn")
let colorInput = document.getElementById("colorInput")

colorBox.style.background=colorInput.value
hex.innerText = colorInput.value

copyBtn.addEventListener("click",()=>{
    navigator.clipboard.writeText(hex.innerText)
    copyBtn.innerText="text copied"
    copyBtn.style.background="#71a460"
    setTimeout(()=>{
       copyBtn.innerText="Copy to clipboard"
    copyBtn.style.background="#2563eb"
    },1000)
})


colorInput.addEventListener("change",()=>{
    colorBox.style.background=colorInput.value
    hex.innerText = colorInput.value
})