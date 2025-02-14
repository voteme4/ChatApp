import { toast } from "react-hot-toast"
import { useState } from "react"
import useConversation from "../zustand/useConversation"

const useSendMessage = () => {
    const [loading, setLoading] = useState(false)
    const {messages, setMessages, selectedConversation} = useConversation();

    const sendMessage = async (message) => {
        const content = message
        setLoading(true);
        //console.log(message)
        try {
            const res = await fetch(`/api/messages/send/${selectedConversation._id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    content
                })
            });
            const data = await res.json();
            //console.log(data)
            if(data.error){
                throw new Error(data.error);
            }
            setMessages([...messages, data]);
        }
        catch (error) {
            toast.error(error.message);
        }
        finally {
            setLoading(false);
        }
    }
    return {loading, sendMessage}
}

export default useSendMessage