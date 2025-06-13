export default function ChatBox() {
    return (
        <div className="w-full max-w-2xl h-[80%] bg-white/40 backdrop-blur-lg shadow-2xl rounded-2xl p-6 flex flex-col">
            <div className="flex-1 overflow-y-auto space-y-4">
                {/* Example messages */}
                <div className="bg-white/80 rounded-lg px-4 py-2 self-start shadow-md">
                    Hi! I'm Neko 🐾 How can I support you today?
                </div>
                <div className="bg-blue-200 rounded-lg px-4 py-2 self-end shadow-md">
                    I feel a bit down today...
                </div>
            </div>

            <div className="mt-4 flex">
                <input
                    className="flex-1 p-3 rounded-l-lg border border-gray-300 focus:outline-none"
                    placeholder="Type your message..."
                />
                <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 rounded-r-lg">
                    Send
                </button>
            </div>
        </div>
    )
}
