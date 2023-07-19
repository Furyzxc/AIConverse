export interface DataResponse {
    choices: [{
        finish_reason: string
        index: number
        message: {
            content: string  //answer
            role: string // 'assistant'
        }
    }]

    created: number
    id: string
    model: string // "gpt-3.5-turbo-0613"
    object: string // "chat.completion"
    usage: {
        prompt_tokens: number
        completion_tokens: number,
        total_tokens: number
    }
}
