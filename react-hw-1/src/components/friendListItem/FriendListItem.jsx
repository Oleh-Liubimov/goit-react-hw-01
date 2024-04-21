/* eslint-disable react/prop-types */
import css from "./FriendListItem.module.css"

function FriendListItem({ avatar, name, isOnline }) {
    return (
      <div>
        <img className={css.cardImg} src={avatar} alt="Avatar" width="48" />
        <p className={css.cardName}>{name}</p>
        {isOnline ?
            (<p className={css.cardStatusOnline}>Online</p>) :
            (<p className={css.cardStatusOffline}>Offline</p>)}
      </div>
    );
}

export default FriendListItem