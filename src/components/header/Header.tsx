import styles from './Header.module.css'

const Header = () => {
    return (
        <header className={styles.header}>
            <h1 className={styles.heading}>
                Notifications
                <span className={styles.count}>3</span>
            </h1>
            <span role='button'>Mark all as read</span>
        </header>
    )
}

export default Header