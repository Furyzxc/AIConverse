import { isFetchBaseQueryError } from "@shared/api/isFetchBaseQueryError.ts";
import { AppDispatch } from "../../../app/appStore.ts";
import { DataResponse } from "@shared/types/api.ts";
import { addMessage } from "@entities/messages/model/slice.ts";

export const handleError = (dispatch: AppDispatch, error: unknown) => {
    if (isFetchBaseQueryError(error)) {
        if (typeof error.data === 'string') {
            dispatch(addMessage({text: error.data, author: 'gpt', isError: true}))
        } else  dispatch(addMessage({text: 'Some error occured.', author: 'gpt', isError: true}))
    }
    else {
        addMessage({text: 'Some error occured.', author: 'gpt', isError: true})
    }
}

export const handleSuccess = (dispatch: AppDispatch, data: DataResponse | undefined) => {
    // @ts-ignore
    const answer = data.choices[0].message.content

    dispatch(addMessage({text: answer, author: 'gpt', isError: false}))
}