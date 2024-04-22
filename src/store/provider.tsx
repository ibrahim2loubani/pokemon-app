'use client'

import { setupStore } from '@/store/store'
import { ReactNode } from 'react'
import { Provider } from 'react-redux'

const store = setupStore()

export const StoreProvider = ({
  children,
}: {
  children: ReactNode
}): ReactNode => {
  return <Provider store={store}>{children}</Provider>
}
