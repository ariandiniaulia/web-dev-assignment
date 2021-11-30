const list = document.getElementById('list')
function add(){
    let newtext = document.getElementById('new_text')

    let newlist= "<li> <span>" + newtext.value + "</span>" + "<span onclick='removeItem(this)'> (X) </span>" + "</li>"

    list.insertAdjacentHTML('afterbegin', newlist)
    newtext.value = ""
    
}
function removeItem(el) {
    el.parentElement.remove()
}