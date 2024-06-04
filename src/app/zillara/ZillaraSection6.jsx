import React from 'react'
import dynamic from 'next/dynamic';

const GoogleMapsComponent = dynamic(() => import('./GoogleMapsComponent'), {
  ssr: false
});

const ZillaraSection6 = () => {
  return (
    <div>
      {/* <GoogleMapsComponent/> */}
      hi
    </div>
  )
}

export default ZillaraSection6