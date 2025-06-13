export default function Profile() {
    return (
        <div className="flex items-center gap-2 bg-white/30 backdrop-blur-md px-4 py-2 rounded-full shadow-md">
            <img
                src="https://api.dicebear.com/7.x/personas/svg?seed=Neko"
                alt="Profile"
                className="w-8 h-8 rounded-full"
            />
            <span className="text-sm font-semibold">Shivanshu</span>
        </div>
    )
}
