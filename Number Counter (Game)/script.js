const main = document.querySelector('.main');
const minus = document.querySelector('#minus');
const refresh = document.querySelector('#refresh');
const add = document.querySelector('#add');
const counting = document.querySelector('.counting');
let count = counting.value;

//refresh the value to 0 feature
refresh.addEventListener('click', (e) => {
    counting.value = 0;
    count = counting.value;
});

//adding numbers feature
add.addEventListener('click', (e) => {
    count = Number(count);
    
    function adding(num) {
        let addNum = num + 1;
        count = addNum;
    }

    adding(count);
    counting.value = count;
});

//reducing the numbers feature
minus.addEventListener('click', () => {
    count = Number(count);

    function minus(num) {
        let minusNum = num - 1;
        count = minusNum;
    }

    minus(count);
    counting.value = count;
    globalCount = counting.value;
});
