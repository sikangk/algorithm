function solution(arr) {

    // answer에 arr 얕은복사 , arr 값이 바뀌면 answer 도 바뀜.
    let answer = arr;

    // 기존의 버블정렬 형태로 이중 for문 실행, 맨마지막 인덱스는 비교할 인덱스가 없으니 arr.length - 1 까지만 For문 실행
    for (let i = 0; i < arr.length - 1; i++) {

        //버블 정렬의 형태기 때문에 마찬가지로
        // 비교가 완료된 맨마지막 index 는 비교할 필요가 없기 때문에 arr.length - i - 1; 까지 For문을 실행한다.
        for (let j = 0; j < arr.length - i - 1; j++) {

            // 앞에있는 인덱스 arr[j]  가 양수이고 , 뒤에있는 인덱스 arr[j + 1] 가 음수일때
            if (arr[j] > 0 && arr[j + 1] < 0) {

                // 서로의 위치를 바꾼다.
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return answer;
}

let arr = [1, 2, 3, -3, -2, 5, 6, -6];
console.log(solution(arr));
