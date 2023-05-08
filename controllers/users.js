import User from "../models/User";

export const getUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

export const getUserFreiends = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);

        const friends = await Promise.all(
            user.friends.map((id) => User.findById(id))
        );

        const formattedFriends = friends.map(
            ({ _id, firstName, lastName, occupation, location, picturePath }) => { _id, firstName, lastName, occupation, location, picturePath }
        );

        res.status(200).json(formattedFriends);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

export const addRemoveFriend = async (req, res) => {
    try {
        
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}