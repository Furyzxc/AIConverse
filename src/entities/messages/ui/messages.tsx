import { useAppSelector } from "@shared/model/hooks.ts";
import { getMessages } from "@entities/messages/model/selector.ts";
import { Message } from "@shared/ui/message.tsx";
import s from '../lib/style.module.css'
import { Filler } from "@shared/ui/filler.tsx";

export const Messages = () => {
    const messages = useAppSelector(getMessages)

    window.onload = () => { window.scrollTo(0, document.body.scrollHeight) }
    return (
        <div className={s.messages}>
            {
                messages.length === 0
                    ? <Filler>Enter your first question</Filler>
                    : messages.map((message, id) => <Message {...message} key={id}/>)
            }
        </div>
    );
};