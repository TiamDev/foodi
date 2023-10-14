
let box = document.getElementsByClassName("ox");
let inner = document.getElementsByClassName("inner")[0];
let count = 0;
function next() {
    let boxNum = box.length;
    console.log(boxNum + " boxs");
    if (count < boxNum - 1) {
        count++;
        console.log(boxNum - 1 + "---" + count);
        inner.style.transform = `translateX(${-370 * count}px)`;
    }


}
function pre() {
    let boxNum = box.length;
    if (count < boxNum && count != 0) {
        --count;
        inner.style.transform = `translateX(-${370 * count}px)`;
    }
}