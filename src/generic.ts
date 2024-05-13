type Input= Number| String;

function firstEle<T>(arr:T[]){
    return arr[0]
}

const value=firstEle(["Manav"])
value.toLowerCase()