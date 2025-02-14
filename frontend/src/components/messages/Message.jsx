import useConversation from "../../zustand/useConversation";
import { useAuthContext } from "../../context/AuthContext";
import { extractTime } from "../../utils/extractTime";

const Message = ({message}) => {
    const { authUser } = useAuthContext();
    const {selectedConversation} = useConversation();
    const fromMe = message.senderId === authUser._id;
    const chatClassName = fromMe ? "chat chat-end" : "chat chat-start";
    const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
    const chatBgColor = fromMe ? "bg-blue-500" : "";
    const time = extractTime(message.createdAt);

    const shakeClass = message.shouldShake ? "shake" : "";

    return (
    <div className={`${chatClassName}`}>
        <div className="chat-image avatar">
            <div className="w-10 rounded-full">
                <img src={profilePic} alt = "avatar" />
            </div>
        </div>
        <div className={`chat-bubble text-white ${chatBgColor} ${shakeClass}`}>
            {message.content}
        </div>
        <div className="chat-footer opacity-50 text-sx flex gap-1 items-center">
            {time}
        </div>
    </div>
  )
}

export default Message