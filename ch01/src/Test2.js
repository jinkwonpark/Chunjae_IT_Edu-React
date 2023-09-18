/*
es5 방식 
 function Test2() {

 }
 */

/*
es6 방식
const Test2 = function(){

}
*/

// 기본 방식, arrow 함수
// 표현식과 내부 스타일링, 인라인 스타일링, 조건 연산자, if 문을 활용하여 컴포넌트 만들기
const Test2 = () => {
  return (
    <div className="App">Test2
    <h3 className="item_tit2">천재교육</h3>
    <h4 className="cate_tit2">풀스택 2기</h4>
    </div>
  )
}

export default Test2