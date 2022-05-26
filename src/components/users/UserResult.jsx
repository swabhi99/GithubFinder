import React, { useEffect,  useContext } from 'react'
import Spinner from '../layouts/Spinner'
import UserItem from './UserItem'
import GithubContext from '../../context/Github/GithubContext'

function UserResult() {
    const {users,loading,fetchUser} = useContext(GithubContext)
    useEffect(()=>{
        // fetchUser()
    },[])

    if(loading){
      return <Spinner/>
    }
    else{
  return (
    <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
      {
        users.map((user)=>{
          return <UserItem user={user} key={user.id}>{user.login}</UserItem>
        })
        
      }
    </div>
  )
    }
}

export default UserResult