import s from './style.module.css'
import chatGPT from '@assets/chatgptIcon.svg'

export const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.text}>AIConverse</div>
            <img src={chatGPT}/>
        </div>
    );
};