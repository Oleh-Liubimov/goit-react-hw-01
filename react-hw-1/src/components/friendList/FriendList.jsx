/* eslint-disable react/prop-types */
import css from "./FriendList.module.css";
import FriendListItem from "../friendListItem/FriendListItem";

function FriendList({ friends }) {
  const friendsList = friends.map((friend) => {
    <li key={friend.id} className={css.listItem}>
      <FriendListItem
        avatar={friend.avatar}
        name={friend.name}
        isOnline={friend.isOnline}
      />
    </li>;
  });

  return (
    <ul className={css.friendsList}>
      {friendsList}
    </ul>
  );
}

export default FriendList;
