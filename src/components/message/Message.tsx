
import { Dispatch, SetStateAction } from 'react';
import { MessageType } from '../../types';
import styles from './Message.module.css';

interface Props {
    messages: MessageType[];
    message: MessageType;
    setMessages: Dispatch<SetStateAction<MessageType[]>>;
}

const Message = ({ messages, message, setMessages }: Props) => {

    const handleCLick = () => {
        if(!message.isNotRead) {
            return false;
        }

        const thisMessageIndex = messages.findIndex(item => item.id === message.id);
        const cloneMessages: MessageType[] = [...messages]
        cloneMessages[thisMessageIndex].isNotRead = false;
        setMessages(cloneMessages);

    }
    return (
        <div onClick={handleCLick} className={`${styles.card} ${message.isNotRead ? styles.notRead : ''}`}>
            <div className={styles.avatarCard}>
                <img className={styles.avatar} src={message.avatar} alt="" />
            </div>
            <div className={styles.messageCard}>
                <div className={styles.messageParagraph}> 
                    <h2 className={styles.messageName}>{message.name}</h2>
                    <span className={styles.message}>{message.message}</span>
                    {message.isNotRead ? <span className={styles.messageAlarm}></span> : null}
                </div>
                <span>{message.time}m ago</span>
            </div>
        </div>
    )
}

export default Message