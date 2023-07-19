import s from './style.module.css'

export const AnimatedBg = () => {
    return (
        <div>
            <div className={s.starsec}></div>
            <div className={s.starthird}></div>
            <div className={s.starfourt}></div>
            <div className={s.starfifth}></div>
        </div>
    );
}