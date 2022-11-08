
import { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import {AppContext} from './components/Context'
import './App.css';

function App() {

  const {state, dispatch} = useContext(AppContext)

  const navigate = useNavigate()

  const [data, setData] = useState({
    user: '',
    pass: ''
  })

  const [users, setUsers] = useState([])

  useEffect(() => {
    console.log('useEffect runs')
    async function getData() {

      const response = await fetch('https://jsonplaceholder.typicode.com/users')

      const data = await response.json()
      console.log("🚀 ~ getData ~ response", data)

      setUsers([...data])
    }

    getData()

  }, [])

  const handleSubmit = e => {
    
    e.preventDefault()
    console.log("🚀 ~ handleSubmit ~ handleSubmit")

    const user = users.find(item => item.username === data.user)

    if (!user) alert('wrong user')
    else {
      dispatch({
        type: 'insertUser',
        payload: user
      })
      navigate('/posts')
    
    }
  }

  console.log("🚀 ~ App ~ return", state, data, users)
  return (
      <div className='flex 
        justify-center 
        items-center 
        flex-wrap 
        gap-[20px]
        h-[100vh]
        flex-col
        '>
          <h2>Login to e04 AI social app</h2>
          <form 
            className='flex 
            justify-center 
            items-center 
            gap-[20px]
            flex-col
            '
            onSubmit={handleSubmit}>

            <input 
              className='border-2 border-slate-500 p-2'
              placeholder='type your name' 
              value={data.user}
              onChange={e => setData({...data, user: e.target.value})}
            />
            <input 
              className='border-2 border-slate-500 p-2'
              placeholder='type your pass' 
              value={data.pass}
              onChange={e => setData(prevState => {
                return {...prevState, pass: e.target.value}})}
            />
            <input 
              className='border-2 border-slate-500 p-2 cursor-pointer'
              type='submit' 
            />
          </form>
      </div>
  )
}

export default App;