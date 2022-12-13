
function solution(arr){

    // arr 배열 매개변수 얕은복사 저장 얕은복사라 arr가 바뀌면 answer도 바뀜
    let answer=arr;

    //요소와 요소를 비교해 어떤 요소가 더 작은지 찾기 위해 이중 For문 실행
    for(let i=0; i<arr.length; i++){

        //비교할 인덱스
        let idx=i;

        //idx 와 비교를 위해 for문 실행
        for(let j=i+1; j<arr.length; j++){

            //arr[idx] 보다 arr[j] 가 작다면 idx 는 j가 된다 계속 해서 작은걸 찾아야하니 제일 작은 요소 인덱스를 idx에 저장
            if(arr[j]<arr[idx]) idx=j;
        }

        //비교했던 arr[i] 와 arr[idx] 의 위치 변경
        [arr[i], arr[idx]] = [arr[idx], arr[i]];
    }
    return answer;
}

let arr=[13, 5, 11, 7, 23, 15];
console.log(solution(arr));




// function solution1(arr){
//     let answer;
//
//     answer = arr.sort((a,b) => a-b);
//
//     return answer;
// }
//
// let arr=[13, 5, 11, 7, 23, 15];
// console.log(solution1(arr));





