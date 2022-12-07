const allCurrent = document.querySelectorAll(".current");
const allPrevious = document.querySelectorAll(".previous");
const dailySelection = document.querySelector(".daily");
const weeklySelection = document.querySelector(".weekly");
const monthlySelection = document.querySelector(".monthly");
const selections = document.querySelectorAll(".selections > p");
console.log(selections)

fetch("./data.json")
.then(response =>  {
    return response.json()
})
.then(data => {
    data.forEach(ele => {
        for(let i = 0; i < allCurrent.length; i++) {
            if(allCurrent[i].parentElement.previousElementSibling.innerText === ele.title) {
                allCurrent[i].innerText = `${ele.timeframes.weekly.current}hrs`;
                allPrevious[i].innerText = `last Week - ${ele.timeframes.weekly.previous}hrs`;
            }
        } 
    });
    return data
})
.then(data => {
    selections.forEach(selection => {
        selection.addEventListener("click", () => {
            for(let i = 0; i < selections.length; i++) {
                if(selections[i].classList.contains("active")) {
                    selections[i].classList.remove("active");
                }
            }
            selection.classList.add("active");
            for(let j = 0; j < selections.length; j++) {
                if(selections[j].classList.contains("active")) {
                    if(selections[j] === weeklySelection) {
                        data.forEach(ele => {
                            for(let i = 0; i < allCurrent.length; i++) {
                                if(allCurrent[i].parentElement.previousElementSibling.innerText === ele.title) {
                                    allCurrent[i].innerText = `${ele.timeframes.weekly.current}hrs`;
                                    allPrevious[i].innerText = `last Week - ${ele.timeframes.weekly.previous}hrs`;
                                }
                            } 
                        });
                    }if(selections[j] === dailySelection) {
                        data.forEach(ele => {
                            for(let i = 0; i < allCurrent.length; i++) {
                                if(allCurrent[i].parentElement.previousElementSibling.innerText === ele.title) {
                                    allCurrent[i].innerText = `${ele.timeframes.daily.current}hrs`;
                                    allPrevious[i].innerText = `last day - ${ele.timeframes.daily.previous}hrs`;
                                }
                            } 
                        });
                    }if(selections[j] === monthlySelection) {
                        data.forEach(ele => {
                            for(let i = 0; i < allCurrent.length; i++) {
                                if(allCurrent[i].parentElement.previousElementSibling.innerText === ele.title) {
                                    allCurrent[i].innerText = `${ele.timeframes.monthly.current}hrs`;
                                    allPrevious[i].innerText = `last month - ${ele.timeframes.monthly.previous}hrs`;
                                }
                            } 
                        });
                    }
                }
            }
        });
    });
});