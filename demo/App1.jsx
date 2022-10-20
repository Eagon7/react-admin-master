import React, {Fragment} from 'react';
import {connect} from "react-redux";


function App1(props) {

	return (
		<Fragment>
			<div>{props.msg}</div>
			<button onClick={props.changeMsg}>修改msg</button>
		</Fragment>
	);


}

let mapStateToProps=(state)=>{
	return {
		msg: state.msg
	}
}
let mapDispatchToProps=(dispatch)=>{
	return{
		changeMsg(){
			const action = {type:'changeMsgFn',value:'你好啊啊啊'}
			dispatch(action)
		}
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(App1);// 链接App1到store
