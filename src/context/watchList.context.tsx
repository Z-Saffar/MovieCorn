import React, { createContext, useContext, useState } from 'react'
import { FC } from 'react'

interface WatchlistContextType {
    watchListInContext: number[],
    setWatchListInContext: React.Dispatch<React.SetStateAction<number[]>>
}
interface WatchListProviderProps {
    value: WatchlistContextType
}

export const WatchListContext = createContext<WatchlistContextType | null>(null)

const WatchListProvider: FC<WatchListProviderProps> = ({ children, value }) => {
    const [watchListInContext, setWatchListInContext] = useState<number[]>(value.watchListInContext)

    return (
        <WatchListContext.Provider value={{
            watchListInContext,
            setWatchListInContext
        }}>
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