import "./styles.css";

export default function UserCards(
  {
    profileImage,
    name,
    userName,
    numberFollowigns,
    numberFollows
  }
) {
  return (
    <div className="card">
      <img className="profile" src={profileImage} alt="Profile" />
      <span className="name">
        {name}
      </span>
      <span className="user-name">
        @{userName}
      </span>
      <div className="connections">
        {numberFollowigns} seguidores
        <br />
        {numberFollows} seguindo
      </div>
    </div>
  )
}
