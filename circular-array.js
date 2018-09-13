function CircArray(arrLength) {
    let arr = [],
        currIndex = -1;

    let status = function() {
        console.log({
            length: arr.length,
            currentIndex: currIndex,
            currentValue: arr[currIndex],
            arr: arr
        });
    };

    let setArray = function(newArray) {
        arr = newArray;
    };

    let toArray = function() {
        return arr;
    };

    let push = function(el) {
        arr.push(el);
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

    return {
        setArray: setArray,
        toArray: toArray,
        status: status,
        push: push,

        prev: prev,
        curr: current,
        next: next
    }
}