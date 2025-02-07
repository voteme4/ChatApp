import Conversation from '../models/conversation.model.js';
import Message from '../models/message.model.js';
import mongoose from 'mongoose';

export const sendMessage = async (req, res) => {
try {
    const { content } =  req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;

    let conversation = await Conversation.findOne({
        members: { $all: [senderId, receiverId] }
    })

    if (!conversation) {
        conversation = await Conversation.create({
            members: [senderId, receiverId]
        });
    }

    const newMessage = new Message({
        content,
        senderId,
        receiverId,
    });

    // SOCKET IO for Realitime

    if (newMessage) {
        conversation.messages.push(newMessage._id);
    }

    await Promise.all([conversation.save(), newMessage.save()]);

    res.status(200).json(newMessage);
} catch (error) {
    console.log('Error in sendMessage method of message.controller.js:', error.message);
    res.status(500).json({ error: 'Internal server error' });
}
};

export const getMessages = async (req, res) => {
try {
    const { id:targetId } = req.params;
    const senderId = req.user._id;

    const conversation = await Conversation.findOne({ 
        members: { $all: [senderId, targetId] }
    }).populate("messages") // populates with message object

    if (!conversation) {
        return res.status(200).json({});
    }

    const messages = conversation.messages;

    res.status(200).json(conversation.messages);
} catch (error) {
    console.log('Error in getMessages method of message.controller.js:', error.message);
    res.status(500).json({ error: 'Internal server error' });
}};