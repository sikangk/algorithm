function solution(meeting){
    let answer=0;

    meeting.sort((a,b) =>{
        if(a[1] === b[1]) return a[0] - b[0]

        return a[1] - b[1];
    })

    let et = 0;

    for(let el of meeting){
        if(el[0] >= et) {
            answer = answer + 1;
            et = el[1]
        }
    }

    return answer;

}

let arr=[[1, 4], [2, 3], [3, 5], [4, 6], [5, 7]];
console.log(solution(arr));
