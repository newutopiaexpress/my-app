"use client"
import React, { useEffect } from 'react'
 
const Chatbot = () => {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js'
    script.async = true
    document.body.appendChild(script)
 
    script.onload = () => {
      window.botpressWebChat.init({
        botId: 'fa1f6d67-319d-4705-b19e-883004718673',
        hostUrl: 'https://cdn.botpress.cloud/webchat/v1',
        messagingUrl: 'https://messaging.botpress.cloud',
        clientId: 'fa1f6d67-319d-4705-b19e-883004718673',
        stylesheet: 'https://utopia.express/botpress.css',
      })
    }
  }, [])
 
  return <div id="webchat" />
}
 
export default Chatbot