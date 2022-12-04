function solution(board, moves){
  //스택 배열에서 같은 숫자를 만났을때 터질때 증가할 숫자
  let answer=0;

  //크레인으로 뽑은 숫자를 저장할 스택 변수
  let stack=[];

  //크레인 배열을 forEach 함수를 통해 각각 요소를 추출
  moves.forEach(pos => {
    
      for(let i=0; i<board.length; i++){

        //하나의 열에서 0 이아닌 숫자를 무조건 추출해야하니 열은 크레인 배열의 요소 pos로 고정, 단 index는 0부터시작이니 pos-1
          if(board[i][pos-1]!==0){
            
            //0이 아닌 숫자일시 tmp 변수에다가 해당 값을 저장 후 (크레인으로 꺼냄)
              let tmp=board[i][pos-1];

            // 크레인으로 꺼냈으니 0으로 변경
              board[i][pos-1]=0;

            //만약 스택배열의 맨마지막 요소와 방금 크레인으로 꺼낸 숫자과 동일 할시,  
              if(tmp===stack[stack.length-1]){

                // 스택배열 마지막 요소 제거
                  stack.pop();
                
                //터진 수만큼 증가 시키기
                  answer+=2;
              }
              // 해당 조건이 아닐시 그냥 스택배열에 tmp를 push
              else stack.push(tmp);
              //0이 아닌 숫자를 만났을때 하나만 stack배열에다가 넣어야 하니 break 를써서 for문을 탈출 시켜야 한다.
              break;
          }
      }
  });
                  
  return answer;
}

let a=[[0,0,0,0,0],
     [0,0,1,0,3],
     [0,2,5,0,1],
     [4,2,4,4,2],
     [3,5,1,3,1]];

let b=[1, 5, 3, 5, 1, 2, 1, 4];
console.log(solution(a, b));