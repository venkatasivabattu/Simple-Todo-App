import {useState} from 'react'
import './App.css';
function App(){
  let [sid,upSid]=useState(4);
  let [todo,updateTodo]=useState('');
  let [todoList,updateTOdolist]=useState([
    {
      id:2,
      task:'skipping'
    },
    {
      id:3,
      task:'skimming'
    },
  ]);

  function deleteFun(id){
    var up=todoList.filter(
      (todo)=>{
        if(todo.id!==id){
          return todo;
        }
      }
    )
    updateTOdolist(up);

  }
  
  function updateFun(){
    if(todo===''){
      alert("enter some task")
    }
    else{
    updateTOdolist(
      [
        ...todoList,
        {
          id:sid,
          task:todo
        }
      ]
    )
    upSid(sid+1);
    updateTodo('');
     
    }
  }

  return (
    <div className='fdiv'>
      <h2>Todo App</h2>
      <div className='form'>
        <input type='text' value={todo} onChange={(e)=>{
          updateTodo(e.target.value)
        }}/>
        <button onClick={()=>{
          updateFun();
        }}>add</button>
      </div>
      <div className='uld'>
      <ul>
       {
        
        todoList.map((todo)=>{
            return (<li key={todo.id}>
                <p>{todo.task}{todo.id}</p>
                <button onClick={()=>{
                  deleteFun(todo.id)
                }}>❌</button>
            </li>)

        })
       }

      </ul>
      </div>
        
    </div>
  );
  

}
export default App;