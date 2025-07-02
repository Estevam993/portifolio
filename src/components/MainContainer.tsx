import React from "react";

export default function MainContainer({children}: { children: React.ReactNode }) {
  return (
    <div
      className={' sm:w-[70vw] w-full shadow-md mainContainer'}
      style={{
        padding: '1rem',
        background: '#3f4461',
        overflow: 'auto'
      }}
    >
      {children}
    </div>
  )
}