
let box = document.getElementsByClassName("ox");
let boxSize=box[0].offsetWidth+50;
let inner = document.getElementsByClassName("inner")[0];
let count = 0;
function next() {
    let boxNum = box.length;
    if (count < boxNum - 1) {
        count++;
        inner.style.transform = `translateX(${-boxSize * count}px)`;
    }
}
function pre() {
    let boxNum = box.length;
    if (count < boxNum && count != 0) {
        --count;
        inner.style.transform = `translateX(-${boxSize * count}px)`;
    }
}
function changeIcon(icon){
    console.log(icon);
    if(icon.classList.contains('fa-regular')===true){
        icon.classList.remove('fa-regular');
        icon.classList.add('fa');
    }
    else{
        icon.classList.add('fa-regular');
    }
}