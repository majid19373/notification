
import { MessageType } from '../../types';
import Header from '../header/Header';
import Message from '../message/Message';
import styles from './Container.module.css';


const messages: MessageType[] = [
    {
        id: 1,
        name: 'full name',
        avatar: "/public/vite.svg",
        message: 'Lorem provident sapiente.',
        time: 1,
        isNotRead: true
    },
    {
        id: 2,
        name: 'full name',
        avatar: "/public/vite.svg",
        message: 'Lorem provident sapiente.',
        time: 2,
        isNotRead: false
    },
    {
        id: 3,
        name: 'full name',
        avatar: "/public/vite.svg",
        message: 'Lorem provident sapiente.',
        time: 3,
        isNotRead: false
    },
    {
        id: 4,
        name: 'full name',
        avatar: "/public/vite.svg",
        message: 'Lorem provident sapiente.',
        time: 5,
        isNotRead: false
    },
]

const Container = () => {
    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.messages}>
                {messages.map(item => (
                    <Message
                        key={item.id}
                        message={item}
                    />
                ))}
            </div>
        </div>
    )
}

export default Container