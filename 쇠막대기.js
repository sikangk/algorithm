function solution(s) {
    let answer = 0;

    // stack 배열에 쌓일 '(' 는 잘린 쇠막대기 갯수와도 같음.
    let stack = [];

    // ')'요소를 만났을때 ')'요소 앞에 '('면 레이저 , ')'면 잘린 막대기의 끝 의 유무를 알아야하니 for문 실행
    for (let i = 0; i < s.length; i++) {

        // 요소가 '('일때 스택배열에다가 푸쉬
        if (s[i] === '(') stack.push('(');

        // 요소가 ')' 일때
        else {

            // ')'일땐 반드시 '(' 하나를 pop() 함수로 빼줘야함.
            stack.pop();

            // ')'요소일때 해당 앞에 인덱스 요소가 '(' 일경우 레이저이니 answer에 해당 잘린 쇠막대기 수를 중첩해서 더해줌.
            //stack 배열에 있는 '(' 들은 잘린 쇠막대기 수와도 같다. 그래서 answer+=stack.length 를 해준다.
            if (s[i - 1] === '(') answer += stack.length;

            // ')' 요소일때 해당 앞에 인덱스 요소가 ')' 일경우 막대기의 끝에 도달했다는것을 뜻한다. 그럴시엔 잘린 막대기는 하나이니 +1을 해준다.
            else answer++;

        }
    }
    return answer;
}

let a = "()(((()())(())()))(())";
console.log(solution(a));

