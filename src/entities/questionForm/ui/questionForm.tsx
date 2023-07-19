import { Field, Formik, Form } from "formik";
import { useEffect } from "react";
import { useRequestAnswerMutation } from "@shared/api/api.ts";
import { Button } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

import s from "../lib/style.module.css"
import { handleError, handleSuccess } from "../lib/utils.ts";
import { form } from "../lib/form-init.ts";

import { useAppDispatch } from "@shared/model/hooks.ts";
import { Preloader } from "@shared/ui/preloader.tsx";

export const QuestionForm = () => {
    const dispatch = useAppDispatch()

    const [requestAnswer, {isLoading, isSuccess, isError, error, data}] = useRequestAnswerMutation()

    useEffect(() => {
        if (isError) handleError(dispatch, error)
    }, [error]);

    useEffect(() => {
        if (isSuccess) handleSuccess(dispatch, data)
    }, [isSuccess]);

    return (
        <Formik initialValues={form.initialValues} onSubmit={form.handleSubmit(requestAnswer, dispatch)}
                validate={form.validate}>
            {({isValid}) => (
            <Form className={s.dialogsForm}>
                    <Field name='input' className={s.input} placeholder='Send a message' autoComplete='off'/>

                {<Button variant="text" endIcon={isLoading ? <Preloader/> :
                    <SendIcon sx={{color: isValid ? '#10A37F' : '#61626FFF', width: '25px', height: '25px'}}/>} type='submit'
                         sx={{height: '100%', width: '100%'}} disabled={isLoading}>
                </Button>}
        </Form>
)}
</Formik>
)
};