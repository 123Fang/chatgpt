import * as dotenv from 'dotenv'
import 'isomorphic-fetch'
import type { ChatGPTAPI, ChatMessage, SendMessageOptions } from 'chatgpt'
import { sendResponse } from './utils'

dotenv.config()

let apiModel: 'ChatGPTAPI'  | undefined

interface ChatContext {
  conversationId?: string
  parentMessageId?: string
}

const timeoutMs: number = !isNaN(+process.env.TIMEOUT_MS) ? +process.env.TIMEOUT_MS : 30 * 1000

if (!process.env.OPENAI_API_KEY)
  throw new Error('Missing OPENAI_API_KEY')

let api: ChatGPTAPI 

// To use ESM in CommonJS, you can use a dynamic import
(async () => {
  // More Info: https://github.com/transitive-bullshit/chatgpt-api
  const { ChatGPTAPI } = await import('chatgpt')

  if (process.env.OPENAI_API_KEY) {
    api = new ChatGPTAPI({ apiKey: process.env.OPENAI_API_KEY })
    apiModel = 'ChatGPTAPI'
  }
})()

async function chatReply(
  message: string,
  lastContext?: { conversationId?: string; parentMessageId?: string },
) {
  if (!message)
    return sendResponse({ type: 'Fail', message: 'Message is empty' })

  try {
    let options: SendMessageOptions = { timeoutMs }

    if (lastContext)
      options = { ...lastContext }

    const response = await api.sendMessage(message, { ...options })

    return sendResponse({ type: 'Success', data: response })
  }
  catch (error: any) {
    return sendResponse({ type: 'Fail', message: error.message })
  }
}

async function chatReplyProcess(
  message: string,
  lastContext?: { conversationId?: string; parentMessageId?: string },
  process?: (chat: ChatMessage) => void,
) {
  if (!message)
    return sendResponse({ type: 'Fail', message: 'Message is empty' })

  try {
    let options: SendMessageOptions = { timeoutMs }

    if (lastContext)
      options = { ...lastContext }

    const response = await api.sendMessage(message, {
      ...options,
      onProgress: (partialResponse) => {
        process?.(partialResponse)
      },
    })

    return sendResponse({ type: 'Success', data: response })
  }
  catch (error: any) {
    return sendResponse({ type: 'Fail', message: error.message })
  }
}


export type { ChatContext, ChatMessage }

export { chatReply, chatReplyProcess }
