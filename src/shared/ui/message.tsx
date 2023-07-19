import s from './style.module.css'

import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DoneIcon from '@mui/icons-material/Done';

import chatGPT from '@assets/chatgptIcon.svg'
import { useCopyText } from "@shared/model/hooks.ts"
import { MessageTypes } from "@shared/types/message.ts";
import { useState } from "react";

export const Message = ({text, author, isError}: MessageTypes) => {

    const msgClses = [s.message, author === 'me' ? s.question : s.answer, isError && s.error]

    const {textRef, copyText} = useCopyText()

    const [selected, setSelected] = useState(false);

    const handleClick = () => {
        setSelected(true)
        setTimeout(() => setSelected(false), 2000)
    }

    return (
        <div className={msgClses.join(' ')}>
            {author === 'me'
                ? <PersonOutlineIcon sx={{color: 'white'}} fontSize={"large"} className={s.icon}/>
                : (<img className={s.icon} src={chatGPT} alt=" "/>)}
            {/*// @ts-ignore*/}
            <p className={s.text} ref={textRef}>
                {text}
            </p>
            <div className={s.btns} onClick={handleClick}>
                {!selected
                    ? <ContentCopyIcon onClick={copyText} sx={{height: '17px'}}/>
                    : <DoneIcon sx={{height: '17px'}}/>}

            </div>
        </div>
    )
};