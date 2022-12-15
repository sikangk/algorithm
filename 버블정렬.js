function solution(arr){
    let answer = arr;



    for(let i = 0; i < arr.length - 1; i++){

        //얕은복사로 인해 arr가 바뀌면 answer 값도 바뀜
        let answer=arr;

        //버블 정렬은 특정요소와 그 특정요소의 인덱스 +1 요소와 크기를 비교하기 때문에
        // 맨마지막 요소는 해당 마지막요소의 +1 인덱스가 없기때문에 arr.length -1 까지의 길이만 반복문을 실행한다.
        for(let i=0; i<arr.length-1; i++){

            //버블정렬은 맨마지막요소가 차례차례 가장 큰 수가 뒤로오기 때문에,
            //이미 비교가 끝난 마지막 요소는 또다시 비교해줄 필요가없다.
            //그래서 arr.length - i - 1 까지의 반복문을 실행한다.
            for(let j=0; j<arr.length-i-1; j++){

                //arr[j] = 특정요소와 arr[j+1] = 특정요소 인덱스 + 1 값을 비교 조건
                if(arr[j]>arr[j+1]){

                    // arr[j]가 arr[j+1] 보다 크다면 서로의 위치를 바꿔준다.
                    [arr[j], arr[j+1]]=[arr[j+1], arr[j]];
                }
            }
        }
        return answer;



    }

    return answer;
}

let arr=[13, 5, 11, 7, 23, 15];
console.log(solution(arr));
