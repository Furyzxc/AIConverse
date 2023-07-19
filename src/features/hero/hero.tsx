import s from './style.module.css'

import { Messages } from "@entities/messages/ui/messages.tsx";
import { QuestionForm } from "@entities/questionForm/ui/questionForm.tsx";

export const Hero = () => {
    return (
        <div className={s.hero + ' height'}>
            <Messages />
            <QuestionForm />
        </div>
    );
};