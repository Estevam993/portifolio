import React from "react";

export default function MainContainer({children}: { children: React.ReactNode }) {
  return (
    <div
      className={' sm:w-[70vw] w-full min-h-[100vh] shadow-md mainContainer'}
      style={{
        padding: '1rem',
        background: '#3f4461'
      }}
    >
      {children}
    </div>
  )
}