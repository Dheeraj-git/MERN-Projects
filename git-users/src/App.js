import React, { useEffect, useState } from 'react'
import './App.css'

const url = 'https://api.github.com/users'

const App = () => {
  const [users, setUsers] = useState([])
  const getUsers = async () => {
    const response = await fetch(url)
    const users = await response.json()
    setUsers(users)
  }
  useEffect(() => {
    getUsers()
  }, [])

  return (
    <div className='App'>
      <h3>git users</h3>
      <ul>
        {users.map((user) => {
          const { id, login, avatar_url, url } = user
          return (
            <li>
              <a href={url}>
                <div className='user' key={id}>
                  <img src={avatar_url} alt={login} />
                  <p>{login}</p>
                </div>
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default App
