
import './App.css'
import Profile from './components/profile/Profile'
import userData from "./userData.json"
import friends from "./friends.json"
import FriendList from './components/friendList/FriendList'
import TransactionHistory from './components/transactionHistory/TransactionHistory'
import trancastions from "../src/transactions.json"


function App() {
  

  return (
    <>
       <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      /> 
      <FriendList friends={friends} />
      <TransactionHistory items={trancastions}/>
    </>
  )
}

export default App
