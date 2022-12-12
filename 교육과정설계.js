function solution(need, plan){
    let answer="YES";

    //매개변수 need를 split 함수를 이용해 스트링열을 배열로 변수 저장 ['C','B','A']
    let queue=need.split('');

    //plan 매개변수를 for of 반복문을 통해 요소 출력
    for(let x of plan){

        //queue 배열에 x 요소가 포함되어 있다면.
        if(queue.includes(x)){

            //x 요소가 queue.shift()를 통해 추출해낸 queue 배열 첫번째 요소가 아니라면 NO 를 리턴한다.
            // 또한 queue.shift() 를 실행했기때문에 추출해낸 queue 배열 첫번째 요소가 맞다면
            // 반복문이 끝날때까지 queue에 x요소가 포함되어있다면 queue 첫번째 요소를 제거한다.
            if(x!==queue.shift()) return "NO";
        }
    }

    // queue배열에 1개 이상 요소가 남아 있다면 NO를 리턴한다.
    // queue배열에 1개 이상 남아있다는것은 if(queue.includes(x)) 조건에 해당되지않은 요소가 남아있는것이다.
    if(queue.length>0) return "NO";

    return answer;
}

let a="CBA";
let b="CBDAGE";
console.log(solution(a, b));
