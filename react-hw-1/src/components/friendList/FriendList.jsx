import FriendListItem from "./components/friendListItem/FriendListItem.jsx"
import css from "./FriendList.module.css"


function FriendList(friends) {

    return (
        friends.map((friend) => {
            <ul className={css.friendsList}>
              <li className={css.friendsListItem}>
                <FriendListItem
                  avatar={friend.avatar}
                  name={friend.name}
                  isOnline={friend.isOnline}
                />
              </li>
            </ul>;
        })
    )
}

export default FriendList