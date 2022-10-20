//创建一个对象
const red = {
	msg:'123'
}

//
export default (state=red,action)=>{
	console.log(1)
	let newState =JSON.parse(JSON.stringify(state))
	switch (action.type){
		case "a":
			newState.msg = action.value
			break;
		default:
			break;
	}
	return newState
}