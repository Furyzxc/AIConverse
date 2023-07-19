import '@shared/styles/globalStyle.css'

import { Header } from "@features/header";
import { Hero } from "@features/hero";
import { AnimatedBg } from "@shared/ui/animatedBg.tsx";


export const AppEntry = () => {
    return (
        <div className='App'>
            <div>
                <AnimatedBg/>
                <Header/>
            </div>
            <Hero/>
        </div>
    )
}
