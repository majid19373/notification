
import { MessageType } from '../../types'
import styles from './Message.module.css'

interface Props {
    message: MessageType
}

const Message = ({ message }: Props) => {
    return (
        <div className={`${styles.card} ${message.isNotRead ? styles.notRead : ''}`}>
            <div className={styles.avatarCard}>
                <img className={styles.avatar} src={message.avatar} alt="" />
            </div>
            <div className={styles.messageCard}>
                <p className={styles.messageParagraph}> 
                    <h2 className={styles.messageName}>{message.name}</h2>
                    <span className={styles.message}>{message.message}</span>
                    {message.isNotRead ? <span className={styles.messageAlarm}></span> : null}
                </p>
                <span>{message.time}m ago</span>
            </div>
        </div>
    )
}

export default Message