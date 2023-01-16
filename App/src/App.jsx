import UserCards from "./components/UserCards";
import userInfo from "./data";

export default function App() {
  return (
    <div className="user-cards">
      {userInfo.map(info => <UserCards key={info.id} {...info} />)}
    </div>
  );
}
