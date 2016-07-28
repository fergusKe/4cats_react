class TodoApp extends React.Component {
	render() {
		return <div>TodoApp</div>
	}
}

window.App.TodoApp = TodoApp;



// 學習筆記
// [React] 建立元件的三種方法

// 第一種. 使用 ES6 的類別 (classes)
// class TodoApp extends React.Component {
//   render() {
//     return <div>TodoApp</div>;
//   }
// }

// 第二種. 使用 React.createClass API，通常用於 ES5 中
// const TodoApp = React.createClass({
//   render() {
//     return <div>TodoApp</div>;
//   }
// });

// 第三種. 使用 function，通常用在元件只需要定義 render 方法時
// const TodoApp = function() {
//   return <div>TodoApp</div>;
// };