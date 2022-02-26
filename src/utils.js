export function moveDown(arr, key){
    if(key+1 >= arr.length || key<0){
        return arr
    }
    return [...arr.slice(0,key), arr[key+1], arr[key], ...arr.slice(key+2)]
}

export function moveUp(arr, key){
    if(key <= 0 || key+1>arr.length){
        return arr
    }
    return [...arr.slice(0,key-1), arr[key], arr[key-1], ...arr.slice(key+1)]
}