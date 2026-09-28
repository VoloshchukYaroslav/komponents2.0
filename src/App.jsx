import Statistics from "./componets/Statistics.jsx"
import FriendList from "./componets/FriendList.jsx"
import TransactionHistory from "./componets/TransactionHistory.jsx"
import Products from "./componets/Products.jsx"
import Profile from "./componets/Profile.jsx"
import data from "./data.json"
import user from "./user.json"
import friends from "./friends.json"
import transactions from "./transactions.json"
import products from "./products.json"
import './App.css'

function App() {


  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats} />




      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />




      <FriendList friends={friends} />




      <TransactionHistory items={transactions} />;



      <Products items={products}/>
    </>
  )
}

export default App
