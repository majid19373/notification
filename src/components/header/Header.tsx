import { Dispatch, SetStateAction } from 'react';
import { MessageType } from '../../types';
import styles from './Header.module.css';

interface Props {
    messages: MessageType[];
    setMessages: Dispatch<SetStateAction<MessageType[]>>;
    unradCount: number;
}

const Header = ({ messages, setMessages, unradCount }: Props) => {
    const handleClick = (): void => {
        const cloneMessages: MessageType[] = [...messages]
        const newMessages = cloneMessages.map(item => {
            return {
                ...item,
                isNotRead: false
            }
        });
        setMessages(newMessages);
    }
    return (
        <header className={styles.header}>
            <h1 className={styles.heading}>
                Notifications
                {unradCount ? <span className={styles.count}>{unradCount}</span> : null}
                
            </h1>
            <span className={styles.button} onClick={handleClick} role='button'>Mark all as read</span>
        </header>
    )
}

export default Header