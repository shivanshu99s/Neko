import React from 'react';
import { FaUser } from 'react-icons/fa';

const Profile = () => {
    return (
        <div className="flex items-center gap-2 text-gray-800 font-medium">
            Shivanshu
            <FaUser className="text-purple-600" />
        </div>
    );
};

export default Profile;
