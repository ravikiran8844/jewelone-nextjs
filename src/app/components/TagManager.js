"use client";
import React, { useEffect, useState, lazy, Suspense } from "react";

// Lazy load the GoogleTagManager component
const LazyGoogleTagManager = lazy(() =>
    import("@next/third-parties/google").then((mod) => ({ default: mod.GoogleTagManager }))
  );


const TagManager = () => {
   const [loadTagManager, setLoadTagManager] = useState(false);

  useEffect(() => {
    // Trigger lazy loading after the page has loaded
    setLoadTagManager(true);
  }, []);

  return (
    <div>
      {loadTagManager && (
        <Suspense fallback={<div></div>}>
          <LazyGoogleTagManager gtmId="GTM-KRZSB3WW" />
        </Suspense>
      )}
    </div>
  );
};

export default TagManager;
