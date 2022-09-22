import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  return (
    <div className='App'>
      {/* <Counter></Counter> */}
      <ExternalUsers></ExternalUsers>

    </div>

  );
}

function ExternalUsers(){
  const [users, setUsers] = useState([])
  useEffect( ()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res =>res.json())
    .then(data => setUsers(data))
  }, [])

  return (
    <div>
      <h2>External Users</h2>
      <p>{users.length}</p>
      {
        users.map(user => <User name={user.name} email={user.email} website={user.website} phone={user.phone} username={user.username} ></User>)
      }
    </div>
  )
}


function User(props){
  return (
    <div className='user-info'>
      <h3>Name: {props.name}</h3>
      <p>Email: {props.email}</p>
      <p>Website: {props.website}</p>
      <p>Phone: {props.phone}</p>
      <p>User Name: {props.username}</p>
    </div>
  )
}

// function Counter(){
//   const [count, setCount] = useState(22)

//   const increaseCount = () =>setCount(count + 1);
//   const decreaseCount = () =>setCount(count - 1);
//   const doubleCount = () =>setCount(count *2)
//   const divisionCount = () =>setCount(count /2)
  
//   {
//     const newCount = count + 1;
//     setCount(count + 1);
//   }
//   return (
//     <div>
//       <div className='count-text'>
//       <h1 className='count'>Count: {count}</h1>
//       </div>
//       <button className='card-btn' onClick={increaseCount}>Increase</button>
//       <button className='card-btn' onClick={decreaseCount}>Decrease</button>
//       <button className='card-btn' onClick={doubleCount}>Double Count</button>
//       <button className='card-btn' onClick={divisionCount}>division</button>
//     </div>

// );
// }

export default App;
