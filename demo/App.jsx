import React, {Component, Fragment} from 'react';

class App extends Component {
	state={
		num:1
	}
	render() {
		return (
			<Fragment>
				<h2>数字为:{this.state.num}</h2>
				<button onClick={this.addNum.bind(this)}>+1</button>
			</Fragment>
		);
	}
	addNum(){
		this.setState({
			num:this.state.num+1
		},()=>{
			console.log(this.state.num)
		})
	}
}

export default App;