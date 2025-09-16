import React, { useState } from 'react'
import Subscribenow from './Subscribenow'

const CallToAction = () => {
  const [showSubscribe, setShowSubscribe] = useState(false)
  return (
    <>
      <div className="bg-gradient-to-t from-[#19BDE880]/50 to-white py-16 text-center mb-20 mt-5 md:mt-25 px-4">
        <h2 className="text-2xl font-semibold mb-4 text-[#19BDE880]">Stay Ahead.Stay Inspired.</h2>
        <p className="text-gray-700 mb-6">
          Join thousands of readers who trust Manvian to keep them in the loop with smart content, every week.
        </p>
        <p className="text-gray-700 mb-6">
          Get the latest blog posts, trends, and tips delivered straight to your inbox.
        </p>
        <button
          className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition cursor-pointer"
          onClick={() => setShowSubscribe(true)}
        >
          Subscribe Now
        </button>
      </div>
      {showSubscribe && <Subscribenow />}
    </>
  )
}

export default CallToAction
