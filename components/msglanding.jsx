"use client"

import { useEffect, useRef, useState } from "react"
import { useRouter } from "next/navigation"

const MsgWhisperLanding = () => {
  const [visibleCards, setVisibleCards] = useState(new Set())
  const cardRefs = useRef([])
  const observerRef = useRef(null)
  const router = useRouter()

  const handleStartChatting = () => {
    router.push('/sign-in')
  }

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardIndex = Number.parseInt(entry.target.dataset.cardIndex)
            setVisibleCards((prev) => new Set([...prev, cardIndex]))
          }
        })
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px",
      },
    )

    cardRefs.current.forEach((ref) => {
      if (ref) observerRef.current.observe(ref)
    })

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [])

  const setCardRef = (index) => (el) => {
    cardRefs.current[index] = el
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Navigation */}
      <nav className="relative z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">MW</span>
            </div>
            <span className="text-xl font-semibold">MsgWhisper</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-300 hover:text-white transition-colors">
              Features
            </a>
            <a href="#about" className="text-gray-300 hover:text-white transition-colors">
              About
            </a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
              Contact
            </a>
          </div>

          <button 
            onClick={handleStartChatting}
            className="bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors"
          >
            Start Chatting
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative px-6 py-20">
        <div className="max-w-7xl mx-auto text-center">
          {/* User Count Badge */}
          <div className="inline-flex items-center space-x-2 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-full px-4 py-2 mb-8">
            <span className="text-red-400">❤️</span>
            <span className="text-sm text-gray-300">Join 150,000+ happy users</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
            <span className="text-cyan-400">MsgWhisper:</span> Connect with
            <br />
            Friends Like Never Before
          </h1>

          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto text-pretty">
            Experience seamless messaging with friends and groups. Built with ReactJS and NodeJS for lightning-fast,
            secure conversations that bring people together.
          </p>

          <button 
            onClick={handleStartChatting}
            className="bg-white text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors mb-16"
          >
            Start Chatting
          </button>

          {/* Floating UI Elements */}
          <div className="relative">
            {/* Left Floating Card */}
            <div className="absolute -left-20 top-10 w-80 h-60 bg-gray-900/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 transform -rotate-12 hidden lg:block">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="text-sm text-gray-400 mb-2">Group Chat</div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
                  <div className="text-sm text-gray-300">Alex: Hey everyone! 👋</div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-green-500 rounded-full"></div>
                  <div className="text-sm text-gray-300">Sarah: Ready for tonight?</div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-purple-500 rounded-full"></div>
                  <div className="text-sm text-gray-300">Mike: 🎉</div>
                </div>
              </div>
              <div className="text-xs text-gray-500 mt-4">Real-time messaging</div>
            </div>

            {/* Right Floating Card */}
            <div className="absolute -right-20 top-20 w-80 h-60 bg-gray-900/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 transform rotate-12 hidden lg:block">
              <div className="text-sm text-gray-400 mb-4">Message Analytics</div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Messages Sent</span>
                  <span className="text-green-400 font-semibold">1.2k</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-green-400 h-2 rounded-full" style={{ width: "85%" }}></div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Active Chats</span>
                  <span className="text-cyan-400 font-semibold">12</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-cyan-400 h-2 rounded-full" style={{ width: "60%" }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Backed By Section */}
          <div className="mt-20">
            <p className="text-gray-400 mb-6">Powered by:</p>
            <div className="flex items-center justify-center space-x-8">
              <div className="flex items-center space-x-2 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-full px-4 py-2">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold text-white">R</span>
                </div>
                <span className="text-sm">ReactJS</span>
              </div>
              <div className="flex items-center space-x-2 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-full px-4 py-2">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold text-white">N</span>
                </div>
                <span className="text-sm">NodeJS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 mb-4">
              <span className="text-yellow-400">💡</span>
              <span className="text-sm text-gray-400 uppercase tracking-wider">Features</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Connect and Chat with Ease</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto text-pretty">
              More than just messaging. Create group chats, share media, and stay connected with friends through our
              intuitive and fast messaging platform.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div
              ref={setCardRef(0)}
              data-card-index="0"
              className={`bg-gray-900/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-gray-600 transition-all duration-700 group ${
                visibleCards.has(0) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "0ms" }}
            >
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-2xl">👥</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Group Chats Made Easy</h3>
              <p className="text-gray-400 text-pretty">
                Create unlimited group chats with friends, family, or colleagues. Share moments and stay connected with
                everyone that matters.
              </p>
            </div>

            {/* Feature 2 */}
            <div
              ref={setCardRef(1)}
              data-card-index="1"
              className={`bg-gray-900/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-gray-600 transition-all duration-700 group ${
                visibleCards.has(1) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "150ms" }}
            >
              <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Lightning Fast Messages</h3>
              <p className="text-gray-400 text-pretty">
                Experience instant message delivery with real-time notifications. Never miss a moment with
                lightning-fast performance.
              </p>
            </div>

            {/* Feature 3 */}
            <div
              ref={setCardRef(2)}
              data-card-index="2"
              className={`bg-gray-900/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-gray-600 transition-all duration-700 group ${
                visibleCards.has(2) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "300ms" }}
            >
              <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-2xl">📸</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Rich Media Sharing</h3>
              <p className="text-gray-400 text-pretty">
                Share photos, videos, documents, and more. Express yourself with emojis, stickers, and multimedia
                content seamlessly.
              </p>
            </div>

            {/* Feature 4 */}
            <div
              ref={setCardRef(3)}
              data-card-index="3"
              className={`bg-gray-900/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-gray-600 transition-all duration-700 group ${
                visibleCards.has(3) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "450ms" }}
            >
              <div className="w-12 h-12 bg-gradient-to-r from-red-400 to-pink-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Personalize Your Experience</h3>
              <p className="text-gray-400 text-pretty">
                Customize themes, chat backgrounds, and notification settings. Make MsgWhisper truly yours with
                personalized features.
              </p>
            </div>

            {/* Feature 5 */}
            <div
              ref={setCardRef(4)}
              data-card-index="4"
              className={`bg-gray-900/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-gray-600 transition-all duration-700 group ${
                visibleCards.has(4) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "600ms" }}
            >
              <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Private & Secure</h3>
              <p className="text-gray-400 text-pretty">
                Your conversations stay private with end-to-end encryption. We prioritize your privacy and never share
                your personal data.
              </p>
            </div>

            {/* Feature 6 */}
            <div
              ref={setCardRef(5)}
              data-card-index="5"
              className={`bg-gray-900/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-gray-600 transition-all duration-700 group ${
                visibleCards.has(5) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "750ms" }}
            >
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Cross-Platform Sync</h3>
              <p className="text-gray-400 text-pretty">
                Access your chats from any device. Seamless synchronization across mobile, desktop, and web keeps you
                connected everywhere.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Chat Demo Section */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 mb-4">
            <span className="text-yellow-400">⭐</span>
            <span className="text-sm text-gray-400 uppercase tracking-wider">Chat Experience</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            The Future of
            <br />
            Social Messaging
          </h2>

          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto text-pretty">
            MsgWhisper brings people together with intuitive design, powerful features, and seamless communication that
            feels natural and effortless.
          </p>

          {/* Demo Interface Mockup */}
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-3xl p-8 max-w-5xl mx-auto">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-sm text-gray-400 ml-4">MsgWhisper - Weekend Plans Group</span>
            </div>

            <div className="bg-black/50 rounded-2xl p-6 text-left">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-sm font-bold">
                    A
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-300">Hey everyone! Who's up for hiking this weekend? 🥾</p>
                    <span className="text-xs text-gray-500">2:34 PM</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-sm font-bold">
                    S
                  </div>
                  <div className="flex-1 bg-gray-800/50 rounded-lg p-4">
                    <p className="text-gray-300 mb-2">Count me in! I found this amazing trail 🏔️</p>
                    <div className="bg-gray-700/50 rounded-lg p-3 border-l-4 border-cyan-400">
                      <p className="text-sm text-gray-400">Shared: Mountain Trail Guide</p>
                      <p className="text-xs text-gray-500">Beautiful 5-mile scenic route with waterfalls</p>
                    </div>
                    <span className="text-xs text-gray-500">2:35 PM</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-sm font-bold">
                    M
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-300">Perfect! I'll bring snacks 🥪</p>
                    <span className="text-xs text-gray-500">2:36 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Ready to Connect with Your Friends?</h2>
          <p className="text-xl text-gray-300 mb-8 text-pretty">
            Join thousands of people already using MsgWhisper to stay connected with friends, family, and communities
            around the world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handleStartChatting}
              className="bg-white text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Start Chatting
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">MW</span>
              </div>
              <span className="text-xl font-semibold">MsgWhisper</span>
            </div>

            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Contact
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
            <p>&copy; 2025 MsgWhisper. All rights reserved. Connecting people through seamless messaging.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default MsgWhisperLanding
