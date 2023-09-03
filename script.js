const myDate = document.querySelector('#myDate');
const btn = document.querySelector('#btn');
const result = document.querySelector('#result');

function howDate() {
    const nowDate = new Date();
    const hpDate = myDate.value;


    if(hpDate =='') {
        result.textContent = 'Пожалуйста, введите дату рождения.'
        result.style.color = 'red';
    } else {
        const newHpDay = new Date(hpDate);

        const howDate = newHpDay - nowDate;
        const msInDay = 24*60*60*1000;

        const resDate = Math.floor(howDate/ msInDay);
        let minNum = resDate%10;
        dayname='';

        if(resDate > 10 && [11, 12, 13, 14].includes(resDate%100)){
            dayname = 'дней';
        }
        else if(minNum ==1){
            dayname = 'день';
        }
        else if([2,3,4].includes(minNum)) {
            dayname= 'дня';
        }
        else if([5,6,7,8,9,0].includes(minNum)){
            dayname='дней';
        }
        else{
            dayname='дней';
        }

        result.textContent = `До вашего дня рождения осталось ${resDate} ${dayname}`;
        result.style.color='black';

    }


}

btn.addEventListener("click", howDate);

