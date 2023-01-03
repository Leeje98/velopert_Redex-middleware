import { combineReducers } from "redux";  
// combineReducers : 만들어진 reducer 들을 내보냄
// combineReducers 의 첫번째 인자에 객체 형태로 원하는 reducer 를 작성하고, 변수에 저장한다.
// 해당 변수를 createStore의 인자로 사용하면 다수의 reducer 를 store로 전달 할 수 있다.
import counter from "./counter";

const rootReducer = combineReducers({ counter })

export default rootReducer;