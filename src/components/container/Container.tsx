
import { useEffect, useState } from 'react';
import { MessageType } from '../../types';
import Header from '../header/Header';
import Message from '../message/Message';
import styles from './Container.module.css';


const messages: MessageType[] = [
    {
        id: 1,
        name: 'John Doe',
        avatar: "/public/vite.svg",
        message: 'Lorem provident sapiente.',
        time: 1,
        isNotRead: true
    },
    {
        id: 2,
        name: 'Asghar Daynasor',
        avatar: "/public/vite.svg",
        message: 'Lorem provident sapiente.',
        time: 2,
        isNotRead: true
    },
    {
        id: 3,
        name: 'Karim Abrou khafan',
        avatar: "/public/vite.svg",
        message: 'Lorem provident sapiente.',
        time: 3,
        isNotRead: false
    },
    {
        id: 4,
        name: 'Mammad',
        avatar: "/public/vite.svg",
        message: 'Lorem provident sapiente.',
        time: 5,
        isNotRead: false
    },
    {
        id: 5,
        name: 'Mojtaba',
        avatar: "/public/vite.svg",
        message: 'Lorem provident sapiente.',
        time: 15,
        isNotRead: false
    },
    {
        id: 6,
        name: 'Kamal',
        avatar: "/public/vite.svg",
        message: 'Lorem provident sapiente.',
        time: 25,
        isNotRead: false
    },
]

const Container = () => {
    const [data, setData] = useState<MessageType[]>(messages);
    const [unradCount, setUnreadCount] = useState<number>(0);

    useEffect(() => {
        // The first method
        /* const count = data.reduce((accumulator, currentValue) => {
            if(currentValue.isNotRead){
                accumulator++; 
            }
            return accumulator;
        }, 0);
        setUnreadCount(count) */
        /* *********************************************************************** */
        // The second method
        let count = 0;
        data.forEach(item => {
            if(item.isNotRead){
                count++;
            }
        });
        setUnreadCount(count)
        
    }, [data]);

    return (
        <div className={styles.container}>
            <Header messages={data} setMessages={setData} unradCount={unradCount} />
            <div className={styles.messages}>
                {data.map(item => (
                    <Message
                        key={item.id}
                        message={item}
                        setMessages={setData}
                        messages={data}
                    />
                ))}
            </div>
        </div>
    )
}

export default Container