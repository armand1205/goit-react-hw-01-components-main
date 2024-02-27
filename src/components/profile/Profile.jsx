import styles from './Profile.module.css'
import PropTypes from 'prop-types';

const Profile = ({condition}) => {
    return <div className={styles.black}>
        {condition && <h2>Titlu</h2>}
        <p>Profile Page</p>
    </div>
}

Profile.propTypes = {
    condition: PropTypes.bool
}

export default Profile