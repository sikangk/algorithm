function solution(s){  
    let answer;

    //스트링 중 숫자만 담을 stack 배열 
    let stack=[];

    // for of으로 s 매개변수 요소 추출
    for(let x of s){

        //isNaN에 반대 (!) 즉 숫자일시 stack 배열에 해당 요소 삽입
        if(!isNaN(x)) stack.push(Number(x));
        
        // 숫자가 아닌 + , * , - , / 일시
        else{
            //계산될 오른쪽에 위치할 숫자, stack배열에서 가장 최근에 삽입된 요소 ex) 1+2 일시 2를 뜻함
            let rt=stack.pop();
            
            // 계산될 왼쪽에 위치할 숫자, stack 배열에서 마지막에서 두번째로 삽입된 요소  ex) 1+2 일시 1을 뜻함
            let lt=stack.pop();

            //x가 + 일시 lt + rt 계산후 stack 배열 삽입
            if(x==='+') stack.push(lt+rt);

            //x가 - 일시 lt - rt 계산후 stack 배열 삽입
            else if(x==='-') stack.push(lt-rt);

            //x가 * 일시 lt * rt 계산후 stack 배열 삽입
            else if(x==='*') stack.push(lt*rt);

            //x가 / 일시 lt / rt 계산후 stack 배열 삽입
            else if(x==='/') stack.push(lt/rt);
        }
    }

    //위의 연산이 끝나면 결국 stack배열 0번째 인덱스에는 연산결과값이 남게됨
    answer=stack[0];
    return answer;
}

let str="352+*9-";
console.log(solution(str));