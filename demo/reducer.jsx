import React, {Fragment} from 'react';
import {connect} from "react-redux";
function Reducer(props) {
	return (
		<Fragment>
			<div>reducer{props.msg}</div>
			<button onClick={props.change}>更改</button>
		</Fragment>
	);
}
const mapStateToProps =(state)=>{
	return {
		msg: state.msg
	}
}
const mapDispatchToProps=(dispatch)=>{
	return{
		change(){
			const a = {type:'a',value:'更改后'}
			dispatch(a)
		}
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(Reducer);