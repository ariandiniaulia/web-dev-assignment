function setDarkMode(isDark){
    var darkBtn = document.getElementById('darkBtn')
    var ilghtBtn = document.getElementById('lightBtn')
    if(isDark){
        lightBtn.style.display = "block"
        darkBtn.style.display = "none"
    } else {
        lightBtn.style.display = "none"
        darkBtn.style.display = "block"
        
    }
    document.body.classList.toggle("darkmode");
}