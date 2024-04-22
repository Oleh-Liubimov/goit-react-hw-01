/* eslint-disable react/prop-types */
import css from "./Profile.module.css"

function Profile({ image, name, tag, location, stats: { followers, views, likes } }) {
    return (
    <div className={css.wrapper}>
        <div className={css.userData}>
            <img className={css.userImg} src={image} alt="User avatar" />
           <p className={css.userName}>{name}</p>
           <p className={css.userTag}>@{tag}</p>
           <p className={css.userLocation}>{location}</p>
        </div>
        <ul className={css.profileList}>
            <li className={css.profileListItem}>
                <span className={css.statsText}>Folowers</span>
               <span className={css.statsNums}>{followers}</span>
            </li>
            <li className={css.profileListItem}>
                <span className={css.statsText}>Views</span>
               <span className={css.statsNums}>{views}</span>
            </li>
            <li className={css.profileListItem}>
                <span className={css.statsText}>Likes</span>
               <span className={css.statsNums}>{likes}</span>
            </li>
        </ul>
    </div>)
}

export default Profile