// 전달받은 액션을 출력하고 다음으로 넘기기
const myLogger = store => next => action  => {
    console.log(action); // 액션을 출력
    const result = next(action); // 다음 미들웨어(또는 리듀서)에게 액션을 전달함
    console.log('\t', store.getState())
    return result; // 여기서 반환하는 값은 dispatch(액션)의 결과물이 됩니다. 기본: undefined
};

export default myLogger;