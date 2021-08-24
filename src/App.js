import './App.css';
import TasksList from './components/TasksList';

function App() {
  return (
    <div className="App">
      <h1 style={{color: 'white', 
      fontFamily: 'Didot, Didot LT STD, Hoefler Text, Garamond, Times New Roman, serif',
      marginBottom: '15px',
      marginTop: '15px',
      userSelect: 'none'}}>What are your tasks for today?</h1>
      <TasksList />
    </div>
  );
}

export default App;
