import React from 'react';
import { useSelector } from 'react-redux'; // Hoặc context API
import { useHistory } from 'react-router-dom';
function withAuth(ComponentToProtect) {
  
  function ProtectedComponent(props) {
    const history=useHistory()
    const isLoggedIn = useSelector(state => state.userReducer.isLogin);
    
     // Kiểm tra xem đã đăng nhập chưa

    if (!isLoggedIn) {
      // Nếu chưa đăng nhập, bạn có thể chuyển hướng hoặc hiển thị thông báo tại đây
      history.push('/sign-in')
      console.log("result",isLoggedIn)
    }
console.log(isLoggedIn)
    return <ComponentToProtect {...props} />;
  }

  return ProtectedComponent;
}

export default withAuth;

// import React from 'react';
// import withAuth from './path/to/withAuth';

// function ProtectedComponent(props) {
//   return (
//     <div>
//       {/* Nội dung của component bảo vệ */}
//     </div>
//   );
// }

// export default withAuth(ProtectedComponent);