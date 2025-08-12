import { Spinner } from 'flowbite-react'
import React from 'react'

const Header = React.lazy(() => import('header/Header'))
const Cards = React.lazy(() => import('cards/ProductsList'))

const HomePage = () => {
  const FallbackContent = (
    <div className="inline-flex items-center gap-2 px-2 py-1">
      <Spinner aria-label="Carregando" size="xs" className="text-gray-200 fill-blue-600" />
      <span className="text-xs text-gray-500">Carregando…</span>
    </div>
  )

  return (
    <div>
      <React.Suspense fallback={FallbackContent}>
        <Header />
      </React.Suspense>
      <React.Suspense fallback={FallbackContent}>
        <Cards />
      </React.Suspense>
    </div>
  )
}

export default HomePage