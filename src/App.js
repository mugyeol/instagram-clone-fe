
import { useDispatch } from 'react-redux';
import { $getToken } from './dataManager/myQueries';
import GlobalStyle from './GlobalStyle';
import ModalContainer from './modal/ModalContainer';
import { __getUser } from './redux/modules/userSlice';
import Router from './Router';
function App() {
  const dispatch = useDispatch()
  if($getToken()){
    dispatch(__getUser())
  }
  return (
   <>
   <GlobalStyle/>
   <Router/>
   </>
  );
}

export default App;
