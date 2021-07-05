// const url = location.search;
// console.log(url)
function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    const regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
const month = getParameterByName("month");
console.log(month);
const day = getParameterByName("day");
console.log(day);
document.getElementsByClassName("day")[0].innerHTML = `${month}월 ${day}일`

const modal = document.getElementById("mymodal");
const inputmodal = () => {
    modal.style.display = "block";
    modal.style.display = "flex";
}
window.addEventListener("click",(e)=>{
    if(e.target == modal) modal.style.display = "none";
})
let cnt = 0;
const screen = document.getElementsByClassName("screen")[0];
const uploadmemo = () => {
    const temp = document.createElement('ul');
    const info = document.getElementsByClassName("memohead")[0]
    temp.setAttribute("class","upload");
    temp.setAttribute("id","up"+cnt);
    const head = document.createElement("li");
    head.setAttribute("class","memoheadcontent");
    const content = document.createElement("li");
    const main = document.getElementsByClassName("memoinput")[0];
    const optionmenu = document.createElement("li");
    if(info.value.length > 0 && main.value.length > 0){
        temp.innerHTML += `<ul class="optionul" id="option${cnt}"><button onclick="remove(${cnt})" class="delete">삭제</button><button onclick="update(${cnt})">수정</button></ul>`
        temp.appendChild(head);
        head.innerHTML += `<div id="fixct${cnt}">${info.value}</div>`;
        optionmenu.innerHTML += `<button class="option" onclick="option(${cnt})"><p>&middot;&middot;&middot;</p></button>`
        head.appendChild(optionmenu);
        content.setAttribute("class","modalmain");
        content.setAttribute("id","fix"+cnt)
        content.innerHTML += main.value;
        temp.appendChild(content);
        screen.appendChild(temp);
        modal.style.display = "none";
        info.value = "";
        main.value ="";
        cnt++;
    } else alert("제목과 내용 모두 입력하세요");
}
const option = (e) => {
    if(status == 1){
        document.getElementById("option"+e).style.display = "none";
        status = 0;
    } else {
        document.getElementById("option"+e).style.display = "block";
        status = 1;
    }
}
const remove = (e) => {
    const li = document.getElementById("up"+e);
    screen.removeChild(li)   
}
const update = (e) => {
    const fixhead = prompt("수정할 제목을 입력하세요(없으면 enter)");
    const  fixcontent = prompt("수정할 내용을 입력하세요(없으면 enter)")
    if(fixhead.length > 0){
        document.getElementById("fixct"+e).innerHTML = fixhead;
    }
    if(fixcontent.length > 0){
        document.getElementById("fix"+e).innerHTML = fixcontent;
    }
}