import css from "./Profile.module.css"

function Profile(userData) {
    return (
    <div className={css.wrapper}>
        <div className={css.userData}>
            <img className={css.userImg} src={userData.image} alt="User avatar" />
           <p className={css.userName}>{userData.name}</p>
           <p className={css.userTag}>@{userData.tag}</p>
           <p className={css.userLocation}>{ userData.location}</p>
        </div>
        <ul className={css.profileList}>
            <li className={css.profileListItem}>
                <span className={css.statsText}>Folowers</span>
               <span className={css.statsNums}>{userData.stats.followers}</span>
            </li>
            <li className={css.profileListItem}>
                <span className={css.statsText}>Views</span>
               <span className={css.statsNums}>{userData.stats.views}</span>
            </li>
            <li className={css.profileListItem}>
                <span className={css.statsText}>Likes</span>
               <span className={css.statsNums}>{ userData.stats.likes}</span>
            </li>
        </ul>
    </div>)
}

export default Profile