function solution(arr){
    // 배열 얕은복사로 인해 arr가 바뀌면 answer도 바뀜
    let answer=arr;

    // arr 요소와 arr요소의 나머지 요소를 비교를 위해 이중 for문
    for(let i=0; i<arr.length; i++){

        //tmp에 비교할 요소를 저장 , j 변수를 아래 for문 스코프 밖에서 사용을 위해 선언
        let tmp=arr[i], j;

        //arr[i] 요소의 앞부분과 비교를 위해 j는 i - 1 부터 시작해서 j가 -1이 될때까지 j는 감소한다.
        for(j=i-1; j>=0; j--){

            //arr[j] (arr[i-1]) 가 tmp (arr[i]) 보다 크면 arr[j+1] 인덱스에 arr[j]를 저장한다.
            if(arr[j]>tmp) arr[j+1]=arr[j];

            //for문을 다돌아서 만약 arr[j]가 tmp보다 작다면 for문을 탈출한다.
            else break;
        }
        //j--로 감소로 인해 +1을 해주어 더 작은값 tmp를 arr[j+1]에 저장한다.
        arr[j+1]=tmp;


    }
    return answer;
}

let arr=[11, 7, 5, 6, 10, 9];
console.log(solution(arr));
