import MainPage from './components/MainPage';
import NewContact from './components/NewContact';

const background ={
  backgroundColor: 'black',
  padding: '40px'
}
function App() {
  return (
   <div style={background}>
      <MainPage />
      <NewContact />
   </div>
      

  );
}

export default App;
