const actions = {
    getUser: (data) => {
      
      return {
        type: 'GETUSER',
        payload: data,
      };
    },
    logout :()=>{
      return {
        type:'LOGOUT',
        
      }
    }  
  }
export default actions;