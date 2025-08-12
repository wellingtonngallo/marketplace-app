import { Spinner } from 'flowbite-react'
import React from 'react'

const Header = React.lazy(() => import('header/Header'))
const Cards = React.lazy(() => import('cards/ProductsList'))

const HomePage = () => {
  return (
    <div>
      <React.Suspense fallback={
        <Spinner
          aria-label="Carregando"
          className="text-gray-200 fill-blue-600"
        />
      }>
        <Header />
      </React.Suspense>
      <React.Suspense fallback={
        <Spinner
          aria-label="Carregando"
          className="text-gray-200 fill-blue-600"
        />
      }>
        <Cards  />
      </React.Suspense>
    </div>
  )
}

export default HomePage