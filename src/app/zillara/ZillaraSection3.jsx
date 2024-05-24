import React from 'react'
import dynamic from 'next/dynamic';

const GoogleMapsComponent = dynamic(() => import('./GoogleMapsComponent'), {
  ssr: false
});

const ZillaraSection3 = () => {
  return (
    <div>
      <GoogleMapsComponent/>
    </div>
  )
}

export default ZillaraSection3