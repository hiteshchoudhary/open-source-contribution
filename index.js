console.log("LMAO")

function secondLargest(arr) {
    const uniqueArr = Array.from(new Set(arr))

    uniqueArr.sort((a, b) => {
        return b-a
    });

    if(uniqueArr.length >= 2){
        return uniqueArr[1];
    } else {
        return -1
    }
}
