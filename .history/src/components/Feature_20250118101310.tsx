import React from 'react'
import { MeteorsDemo } from './MeteorsDemo'

export default function Feature() {
    return (
      <div className="flex items-center justify-center bg-[#0E0E10] h-[40rem] rounded-2xl w-full"></div>
    
      <div className="container mx-auto p-4 bg-dark-100">
  <div className="grid grid-cols-1 md:grid-cols-2  bg-dark-200">
              <div>
                  <MeteorsDemo/>
    </div>
              <div>
                  <MeteorsDemo/>
    </div>
  </div>
</div>
        <div/>
  )
}
