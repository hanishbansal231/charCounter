const charVal = document.getElementById('textarea');
let totalCount = document.querySelector('.totalCount span');
let remainingCount = document.querySelector('.remainingCount span');
let charNum = 0;
let totalNum = 150;

const updateValue = () => {
    charNum = charVal.value.length;
    totalCount.innerText = charNum;
    remainingCount.innerText = totalNum - charNum;
};

charVal.addEventListener('keyup', () => updateValue());

const copyText = () =>{
    charVal.select();
    charVal.setSelectionRange(0,9999);
    navigator.clipboard.writeText(charVal.value);
}