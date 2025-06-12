import React from 'react';

const ChatHistory = () => {
    const messages = [
        { from: 'You', text: 'Hi!' },
        { from: 'Neko', text: 'Hello there!' },
        { from: 'You', text: 'I feel a bit off today…' },
        { from: 'Neko', text: 'I’m here for you. 💙' },
    ];

    return (
        <div className="overflow-y-auto flex-1 mb-4 px-2">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">Chat History</h2>
            <div className="space-y-1">
                {messages.map((msg, idx) => (
                    <div key={idx} className="text-gray-800">
                        <strong>{msg.from}:</strong> {msg.text}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ChatHistory;
