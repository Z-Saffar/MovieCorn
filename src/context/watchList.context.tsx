import { StoredData } from 'components/MovieCard/types'
import React, { createContext, FC, useContext, useState } from 'react'

interface WatchlistContextType {
  watchListInContext: StoredData
  setWatchListInContext: React.Dispatch<React.SetStateAction<StoredData>>
}
interface WatchListProviderProps {
  value?: WatchlistContextType
}

export const WatchListContext = createContext<WatchlistContextType | null>(null)

const WatchListProvider: FC<WatchListProviderProps> = ({
  children,
  value = {
    watchListInContext: {},
    setWatchListInContext: () => {},
  },
}) => {
  const [watchListInContext, setWatchListInContext] = useState<StoredData>(
    value.watchListInContext
  )

  return (
    <WatchListContext.Provider
      value={{
        watchListInContext,
        setWatchListInContext,
      }}
    >
      {children}
    </WatchListContext.Provider>
  )
}

function useWatchListContext() {
  const context = useContext(WatchListContext)
  if (context === null) {
    throw new Error('useWatchListContext must be used within a WatchListProvider')
  }
  return context
}

export { WatchListProvider, useWatchListContext }
