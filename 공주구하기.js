function solution(n, k){
    let answer;

    // Array.from 을 이용해 매개변수(배열 길이) n값의 길이만큼의 인덱스 i + 1 값 (i는 0부터 시작이니) 로 채우는 배열을 생성한다.
    let queue=Array.from({length:n}, (v, i)=>i+1);

    //while 반복문을 사용해 queue.length 값이 0이 될때(false) 까지 반복문 생성
    while(queue.length){

        //삭제할 자리번호(k) 앞전까지 반복문 실행
        for(let i=1; i<k; i++) {

            //삭제할 자리번호(k) 앞전까지 맨앞 요소를 queue 배열에서 삭제 후 다시 집어넣는 행동을 반복 shift()는 배열 맨앞요소를 제거해준다.
            queue.push(queue.shift());
        }

        //위의 for문은 삭제할 자리번호(k) 앞전까지 반복문을 실행하니 여기서 shift()를 실행하면 해당 자리번호(k)가 삭제된다.
        queue.shift();

        //만약 queue 배열의 길이가 1이라면 answer에 queue.shift()를 사용해 마지막 배열요소를 저장하고,
        // 마지막 배열요소또한 shift()를 통해 제거되었으니 queue의 길이는 0이되어 while문을 탈출하게된다.
        if(queue.length===1) answer=queue.shift();
    }
    return answer;
}

console.log(solution(8, 3));