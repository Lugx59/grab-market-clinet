/* 변수, 상수를 선언하는 곳 */

export const API_URL =
  process.env.NODE_ENV === 'production'
    ? 'my-repository-alpha-ebon.vercel.app' :
    "http:/localhost:8080/";/* localhost 한개만 익스포트 */