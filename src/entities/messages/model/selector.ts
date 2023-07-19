import { RootState } from "../../../app/appStore.ts";

export const getMessages = (state: RootState) => state.dialog.messages