function solution(size, arr){

    // 0으로 이루어진 size크기의 배열 생성
    let answer=Array.from({length:size}, ()=>0);

    // 매개변수 arr 배열을 forEach를 통해 요소 호출
    arr.forEach(x => {

        // 반복문을 통해 x 요소가 answer 배열에 포함되어있을경우 저장될 변수
        let pos=-1;

        // answer배열에 x요소가 포함되어있는지 찾는 반복문
        for(let i=0; i<size; i++) if(x===answer[i]) pos=i;

        //pos가 -1이면 answer배열에 x요소가 없을경우
        if(pos===-1){

            //size의 -1이 초기값 (배열의 마지막 인덱스 앞) 부터 1번째 인덱스까지 감소하며 반복문
            for(let i=size-1; i>=1; i--){

                // answer[i] 는 answer[i-1]이 됨 즉 자신보다 앞의 인덱스요소가 자신이됨
                answer[i]=answer[i-1];
            }
        }
        // pos가 -1이 아니고 answer에 x요소가 포함이 되었을경우 즉 pos 변수에 x요소가 포함된 인덱스번호가 저장되었을경우
        else{
            // i는 pos(x요소의 인덱스) 부터 1번째 인덱스 까지 감소하며 반복문
            for(let i=pos; i>=1; i--){

                // answer[i] 는 answer[i-1]이 됨 즉 자신보다 앞의 인덱스요소가 자신이됨
                // pos 부터 감소하며 반복문이 되기때문에 pos 자리에 있는 값은 앞의 인덱스에 매꿔지며 사라짐.
                answer[i]=answer[i-1];
            }
        }

        // answer 배열의 첫번째 인덱스는 무조건 x 요소
        answer[0]=x;
    });

    return answer;
}

let arr=[1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(solution(5, arr));
