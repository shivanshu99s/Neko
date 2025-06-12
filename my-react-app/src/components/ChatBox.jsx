import React, { useState } from 'react';

const ChatBox = () => {
    const [input, setInput] = useState('');

    const handleSend = () => {
        // Your send logic here
        console.log('Sent:', input);
        setInput('');
    };

    return (
        <div className="mt-auto pt-4 flex">
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Say something to Neko..."
                className="flex-1 p-2 rounded-l-lg border border-gray-300 focus:outline-none"
            />
            <button
                onClick={handleSend}
                className="px-4 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600"
            >
                Send
            </button>
        </div>
    );
};

export default ChatBox;
