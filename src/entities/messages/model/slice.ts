import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MessageTypes } from "@shared/types/message.ts";

interface Dialog {
    messages: MessageTypes[],
}

const initialState: Dialog = {
    messages: []
}

export const dialogSlice = createSlice({
    name: 'dialog',
    initialState,
    reducers: {
        addMessage(state, { payload }: PayloadAction<MessageTypes>){
            payload.text && state.messages.push(payload)
        }
    }
})

export const {
    addMessage,
} = dialogSlice.actions