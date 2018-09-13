function CircArray(arrLength) {
    if (!arrLength) arrLength = 10;
    arrLength = isNaN(arrLength) ? 10 : parseInt(arrLength);

    let arr = [],
        currIndex = -1;

    let construct = function() {
        arr = getArr();
    };

    let randomInteger = function(min, max) {
        let rand = min - 0.5 + Math.random() * (max - min + 1);
        rand = Math.round(rand);
        return rand;
    };

    let getArr = function() {
        let arr = [];
        for (let i=0; i < arrLength; i++) {
            arr.push(randomInteger(0, 9));
        }
        return arr;
    };

    let status = function() {
        console.log({
            length: arr.length,
            currentIndex: currIndex,
            currentValue: arr[currIndex],
            arr: arr
        });
    };

    let prev = function() {
        if (0 > (currIndex - 1)) currIndex = arr.length - 1;
        else currIndex--;
        return arr[currIndex];
    };

    let current = function() {
        return arr[currIndex];
    };

    let next = function() {
        if (arr.length <= (currIndex + 1)) currIndex = 0;
        else currIndex++;
        return arr[currIndex];
    };

    construct();

    return {
        status: status,
        prev: prev,
        curr: current,
        next: next
    }
}