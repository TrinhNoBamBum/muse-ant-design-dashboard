
const initialState = {
  isLogin:false,
  data:{}
};
  const reducer = (state = initialState, action) => {
    const payload = action.payload;
    switch (action.type) {
      case 'GETUSER':
        return {...state,data:payload, isLogin:true}
      case 'LOGOUT':
        return {...state,data:{},isLogin:false}
      default:
        return state;
    }
  };
export default reducer;