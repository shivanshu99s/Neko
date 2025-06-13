import ChatBox from './components/ChatBox'
import ChatHistory from './components/ChatHistory'
import Profile from './components/Profile'

export default function App() {
  return (
    <div className="flex h-screen">
      {/* Chat history sidebar */}
      <div className="w-1/5 bg-white/30 backdrop-blur-md shadow-xl p-4 border-r border-white/50">
        <ChatHistory />
      </div>

      {/* Main chat section */}
      <div className="flex-1 flex flex-col items-center justify-center relative">
        <div className="absolute top-4 right-4">
          <Profile />
        </div>
        <ChatBox />
      </div>
    </div>
  )
}
