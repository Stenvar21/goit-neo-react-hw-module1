import "./App.css";
import profile from "./data/profile.json";
import Profile from "./components/Profile/Profile";
import friends from "./data/friends.json";
import FriendList from "./components/FriendList/FriendList";
import transaction from "./data/transaction.json";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";

function App() {
  return (
    <>
      <Profile
        name={profile.username}
        tag={profile.tag}
        location={profile.location}
        image={profile.avatar}
        stats={profile.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transaction} />
    </>
  );
}

export default App;
