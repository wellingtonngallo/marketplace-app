import React from 'react'

const Header = React.lazy(() => import('header/Header'))
const Cards = React.lazy(() => import('cards/ProductsList'))

export default function App() {

  return (
    <div>
      <React.Suspense fallback={<div>Loading Header...</div>}>
        <Header />
      </React.Suspense>
      <React.Suspense fallback={<div>Loading Cards...</div>}>
        <Cards  />
      </React.Suspense>
    </div>
  )
}



