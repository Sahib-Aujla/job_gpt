import React from 'react'
import { Input } from './input'

const ChatBox = () => {
  return (
    <div className="z-[500] w-[500px] h-[600px] fixed bottom-8 right-8">
      <div></div>
      <div>
        <Input
          placeholder="Enter Open API key"
          type="text"
          className="flex-grow text-sm px-4 py-2 rounded-md bg-gray-700 text-gray-200 border border-gray-600 focus:ring-2 focus:ring-blue-500 outline-none"
        />
      </div>
    </div>
  )
}

export default ChatBox
