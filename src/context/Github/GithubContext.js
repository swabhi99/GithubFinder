 import { createContext,useReducer } from "react";
 import githubReducer from "./GithubReducers";

 const GithubContext = createContext();

 export const GithubProvider = ({children})=>{
    
      const initialState = {
          users:[],
          loading:false
      }     
     
       const[state,dispatch] = useReducer(githubReducer,initialState)
       
       //Search Users

        const searchUser = async (text)=>{
            const params = new URLSearchParams({
                q:text
            })
            setLoading()
            const response =  await fetch(`https://api.github.com/search/users?${params}`)
              const {items} = await response.json()
              dispatch({
                  type:'GET_USER',
                  payload:items
              })
          } 
         // SETLOADING
           const setLoading = ()=>{dispatch({type:'SET_LOADING'})}

          return <GithubContext.Provider value={{
              users:state.users,loading:state.loading,searchUser
          }}>
                {children}
          </GithubContext.Provider>
 }
 export default GithubContext





















// import { createContext,useState } from "react";

// const GithubContext = createContext()

// export const GithubProvider = ({children})=>{
//     const[users,setUsers] = useState([])
//     const[loading,setLoading] = useState(true)
//     const fetchUser = async ()=>{
//         const response =  await fetch(`https://api.github.com/users`)
//           const data = await response.json()
//          console.log(data)
//          setUsers(data)
//          setLoading(false)
//       } 
//       return<GithubContext.Provider value={{
//           users, loading, fetchUser
//       }}>
//           {children}
//       </GithubContext.Provider>
// }

// export default GithubContext