function CircArray() {
    let arr = [],
        currIndex = -1;

    return {
        setArray: function(newArray) {
            arr = newArray;
            currIndex = -1;
        },
        setCurrentValue: function(newValue) {
            arr[currIndex] = newValue;
        },
        toArray: function() {
            return arr;
        },
        status: function() {
            console.log({
                length: arr.length,
                currentIndex: currIndex,
                currentValue: arr[currIndex],
                arr: arr
            });
        },
        push: function(el) {
            arr.push(el);
        },
        prev: function() {
            if (0 > (currIndex - 1)) currIndex = arr.length - 1;
            else currIndex--;
            return arr[currIndex];
        },
        curr: function() {
            return arr[currIndex];
        },
        next: function() {
            if (arr.length <= (currIndex + 1)) currIndex = 0;
            else currIndex++;
            return arr[currIndex];
        }
    }
}