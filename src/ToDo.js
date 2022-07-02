import {useState} from 'react';

function ToDo() {
    const [toDo, setToDo] = useState("");
    const [toDos, setToDos] = useState([]);
    const onChange = (e) => {
        setToDo(e.target.value);
    }
    const onSubmit = (e) => {
        e.preventDefault();
        if(toDo === ""){
            return; 
        }
        setToDos((currentArray) => {
            const newArray = [toDo, ...currentArray]; 
            console.log(newArray); 
            return newArray;})
        setToDo("");
    }
    const deleteBtn = (index) => {
        setToDos(toDos.filter((item, todoIndex) => (index) !== todoIndex));
        };
    return(
    <div>
        <h1>My ToDos {toDos.length}</h1>
        <form onSubmit={onSubmit}>
            <input onChange={onChange} value={toDo} type='text' placeholder='Write your to do...' />
            <button>Add To Do</button>
        </form>
        <hr />
        <ul style={{listStyle:'none'}}>
            {toDos.map((item,index)=>
            <li style={{display:'flex', alignItem:'center'}} key={index}>
             {item.toUpperCase()}
             <button style={{marginLeft: '10px',color:'skyblue', border:'2px solid skyblue', background: 'none', cursor:'pointer'}} onClick={() => deleteBtn(index)}><span>X</span></button>
            </li>)}
        </ul>
    </div>
    );
}

export default ToDo;