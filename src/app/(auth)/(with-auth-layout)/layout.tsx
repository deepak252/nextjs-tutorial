import React from 'react'

export default function WithAuthLayout({
    children
}: {
    children: React.ReactNode
}) {
  return (
    <div>
        Login/Register Group Layout
        {children}
    </div>
  )
}
