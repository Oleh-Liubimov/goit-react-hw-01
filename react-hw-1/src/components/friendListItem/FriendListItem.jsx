import css from "./FriendListItem.module.css"

function FriendListItem(avatar, name, isOnline) {
    return (
        <div>
            <img className={css.cardImg} src={avatar} alt="Avatar" width="48" />
            <p className={css.cardName}>{name}</p>
            <p className={css.cardStatus}>{isOnline}</p>
        </div>
    )
}

export default FriendListItem