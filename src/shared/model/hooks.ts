import { useSelector, TypedUseSelectorHook, useDispatch } from 'react-redux'
import { AppDispatch, RootState } from "../../app/appStore.ts";
import React, { useRef } from "react";

export const useAppDispatch = useDispatch<AppDispatch>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const useCopyText = (): { copyText: () => void; textRef: React.MutableRefObject<HTMLElement | undefined> } => {
    const textRef = useRef<HTMLElement>();

    const copyText = () => {
        if (textRef.current) {
            const text = textRef.current.textContent;
            navigator.clipboard.writeText(text || '').then()
        }
    };

    return {textRef, copyText};
}