// n 밀리세컨드동안 기다리는 프로미스를 만들어주는 함수

const sleep = n => new Promise(resolve => setTimeout(resolve, n));

//
const posts = [
    {
        id: 1,
        title: "리덕스 미들웨어를 공부합시다.",
        body: "리덕스 미들웨어를 만들어 봅시다."
    },
    {
        id: 2,
        title: "redux-thunk를 사용해봅시다.",
        body: "redux-thunk를 사용해서 비동기 작업을 처리해봅시다."
    },
    {
        id: 3,
        title: "redux-saga도 공부해봅시다.",
        body: "나중엔 redux-saga를 사용해서 비동기 작업을 처리해보세요."
    }
]

// 포스트 목록을 가져오는 비동기 함수
export const getPosts = async () => {
    await sleep(500); // 0.5초 쉬기
    return posts;
}

// ID로 포스트를 조회하는 비동기 함수
export const getPostById = async id => {
    await sleep(500); // 0.5초 쉬기
    return posts.find(post => post.id === id); // id로 찾아서 반환
}