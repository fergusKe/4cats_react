const { createStore, combineReducers } = Redux;
const { TodoApp, reducers } = window.App;

// 1. 將 reducers 集合物件轉換成一個 reducer 函數
const composedReducer = combineReducers(reducers);
// 2. 使用 reducer 函數，建立 Store 實例，Store 會將改變狀態邏輯委託給 reducer 實作
const store = createStore(composedReducer);

// 3. 將原本 index.html 中的程式移來這裡，記得移除原本的
ReactDOM.render(
	<TodoApp />,
	document.getElementById('app')
)