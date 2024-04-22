/* eslint-disable react/prop-types */
import css from "./friendList.module.css";
import FriendListItem from "../friendListItem/FriendListItem";

function FriendList({ friends }) {
  return (
    <ul className={css.friendsList}>
      {friends.map((friend) => (
        <li className={css.listItem} key={friend.id}>
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
}

export default FriendList;
