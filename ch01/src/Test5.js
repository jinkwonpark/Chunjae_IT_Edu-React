// 구조 할당(props)의 사용
// props는 객체 단위로 데이터를 주고 받을 때 유리하다
const Test5 = (props) => {
  return (
    <div class="App">
        <h2>저의 이름은 {props.irum} 입니다.</h2>
        <h2>나이는 {props.age}세 입니다.</h2>
        <h2>사는 곳은 {props.addr} 입니다.</h2>
        <hr />
    </div>
  )
}

Test5.defaultProps = {
    irum : '박진권',
    age : 27,
    addr : '가산동'
}

export default Test5