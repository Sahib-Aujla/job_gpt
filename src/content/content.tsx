import { Button } from '@/components/ui/button'
import ChatBox from '@/components/ui/ChatBox'
import React, { useState } from 'react'

const ContentPage: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false)
  return (
    <>
      {!isExpanded ? (
        <div className="z-50 fixed bottom-8 right-8">
          <Button
            onClick={() => setIsExpanded(true)}
            className="w-[100px] h-[80px]"
          >
            Ask AI
          </Button>
        </div>
      ) : (
        <ChatBox />
      )}
    </>
  )
}

export default ContentPage
