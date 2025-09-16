import React from 'react'
import { Link } from 'react-router-dom'

const CallToAction = () => {
  return (
    <div className=" bg-gradient-to-t from-[#19BDE880]/50 to-white py-16 text-center mb-20 mt-5 md:mt-25 px-4">
  <h2 className="text-2xl font-semibold mb-4 text-[#19BDE880]">Ready to Elevate Your Product?</h2>
  <p className="text-gray-700 mb-6">
    Discover how MABS can transform your operations with cutting-edge solutions tailored to your needs.
  </p>
  <Link to="/contact">
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginTop: '20px' }}>
            <button className="ui-btn"><span>Contact Us</span></button>
         </div>
</Link>
</div>

  )
}

export default CallToAction
