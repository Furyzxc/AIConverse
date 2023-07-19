import { AppDispatch } from "../../../app/appStore.ts";
import { addMessage } from "@entities/messages/model/slice.ts";
import { FormikErrors, FormikHelpers } from "formik";

interface FormValues {
    input: string
}

export const form = {
    initialValues: { input: '' } as FormValues,

    handleSubmit: (requestAnswer: (question: string) => void, dispatch: AppDispatch) => ({input}: FormValues, {resetForm}: FormikHelpers<FormValues>) => {
        requestAnswer(input)
        dispatch(addMessage({text: input, author: 'me', isError: false}))

        resetForm()
    },

    validate: ({input}: FormValues) => {
        const errors: FormikErrors<FormValues> = {}

        if (!input) errors.input = ''

        return errors
    }
}