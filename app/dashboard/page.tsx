import { UserButton } from "@clerk/nextjs";
import { ModeToggle } from "@/components/mode-toggle";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">MW</span>
              </div>
              <span className="text-xl font-semibold">MsgWhisper</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <ModeToggle />
              <UserButton />
            </div>
          </div>
        </div>
      </nav>
      
      {/* Main Content */}
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Welcome to MsgWhisper Dashboard
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Your messaging hub is ready! Start connecting with friends and family.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-card border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <span className="text-2xl">💬</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Start a Chat</h3>
                <p className="text-muted-foreground">Begin a new conversation with friends</p>
              </div>
              
              <div className="bg-card border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <span className="text-2xl">👥</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Create Group</h3>
                <p className="text-muted-foreground">Set up a group chat for your community</p>
              </div>
              
              <div className="bg-card border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <span className="text-2xl">⚙️</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Settings</h3>
                <p className="text-muted-foreground">Customize your messaging experience</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}