import s from "./style.module.css";
import {ReactNode} from "react";

interface FillerProps {
    children: ReactNode
}

export const Filler = ({children}: FillerProps) => {
    return (
        <div className={s.container}>
            <div className={s.new}>{children}</div>
        </div>
    );
};