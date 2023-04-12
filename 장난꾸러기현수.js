function solution(arr){
    let answer=[];
    let asc = [...arr].sort((a,b) => a-b);

    for(let i in arr){
        if(arr[i] !== asc[i]) answer.push(Number(i)+1);
    }
    return answer;
}

let arr=[120, 125, 152, 130, 135, 135, 143, 127, 160];
console.log(solution(arr));
