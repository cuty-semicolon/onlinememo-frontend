const today = new Date(); // 오늘 날짜
let month = today.getMonth() + 1; // 오늘의 달
let year = today.getFullYear(); // 오늘의 년도

const main = () => {
    let cnt = 1;
    const lastday = new Date(year,month,0).getDate(); //그 달의 마지막날
    // let Dotw = new Date().getDay(); // 오늘의 요일
    const firstDotw = new Date(year,month,0-lastday+1).getDay();
    if(month > 12) {
        month = 1;
        year += 1;
    }
    if(month < 1){
        month = 12;
        year -= 1;
    }
    document.getElementsByClassName("month")[0].innerHTML = `<div>${year}년 ${month}월</div>`; //몇년 몇월인지 넣기
    for(let z = 1;z<=firstDotw;z++){
        document.getElementsByClassName("show")[0].innerHTML += `<button class="calenderline"></button>`;    
    }
    for(let i=0;i<4;i++){
        for(let j =cnt;j<cnt+7;j++){
            document.getElementsByClassName("show")[0].innerHTML += `<button class="calenderline" id="calender${cnt}" onclick="clickcalender(${cnt})"><p>${cnt}</p></button>`;            
            cnt++;
            if(cnt > lastday) break;
        }
        if(cnt > lastday) break;
    }
}
main();
const beforemonth = () => {
    month -= 1;
    document.getElementsByClassName("show")[0].innerHTML = ""
    main();
}
const nextmonth = () => {
    month += 1;
    document.getElementsByClassName("show")[0].innerHTML = ""
    main();
}
const clickcalender = (e) => {
    location.href = "calenderin.html?month="+month+"&day="+e;
}