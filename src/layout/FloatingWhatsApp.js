import React from 'react'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import logo from '../assets/logo.jpeg'

export default function App() {
    return (
        <FloatingWhatsApp
            avatar={logo}
            statusMessage=""
            chatMessage="Merhaba! 🤝 Nasıl yardımcı olabilirim?"
            phoneNumber="+905303604105"
            accountName="Hendese Otomotiv"
            placeholder="Bir mesaj yazın.."
            allowClickAway="true"
            notification="true"
            notificationDelay="5"
            notificationSound="true"
        />
    )
}