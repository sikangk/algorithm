function solution(times){
    let answer = Number.MIN_SAFE_INTEGER;

    let timeLine = [];

    for(let i=0; i<times.length; i++){
        timeLine.push([times[i][0],'s']);
        timeLine.push([times[i][1],'e']);
    }


    timeLine.sort((a,b) =>{
        if(a[0] === b[0]) return a[1].charCodeAt(0) - b[1].charCodeAt(0);
        else return a[0] - b[0];
    })

    let cnt = 0;
    for(let x of timeLine){
        console.log(x[1],'x');
        if(x[1] === 's') cnt++
        else cnt--;
        answer = Math.max(answer,cnt);
    }

    return answer;
}

let arr=[[14, 18], [12, 15], [15, 20], [20, 30], [5, 14]];
console.log(solution(arr));
