import User from '../models/user.model.js';

export const getUsers = async(req, res) => {
    try {
        const userId = req.user._id;
        const allUsers = await User.find({_id: {$ne: userId}}).select('-password');

        res.status(200).json(allUsers);

    } catch (error) {
        console.log('Error in getUsers method of user.controller.js:', error.message);
        res.status(500).json({ error: 'Internal server error' });
    }
}