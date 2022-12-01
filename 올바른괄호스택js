function solution(s) {
  let answer = "YES";
  let stack = [];

  for (let a of s) {
   
    if (a === "(") stack.push(a);
    else {
      if (stack.length === 0) return "NO";
      stack.pop();
    }
  }
  
  if(stack.length > 0) return "NO"

  return answer;
}

let a = "(()(()))(()";

console.log(solution(a));
