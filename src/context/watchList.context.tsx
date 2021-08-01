import React, { createContext, useContext, useState } from 'react'
import { FC } from 'react'
import { MovieCardProps } from '../components/MovieCard/types'

interface WatchlistContextType {
    watchListInContext: { [key: number]: MovieCardProps },
    setWatchListInContext: React.Dispatch<React.SetStateAction<{
        [key: number]: MovieCardProps;
    }>>
}
interface WatchListProviderProps {
    value: WatchlistContextType
}

export const WatchListContext = createContext<WatchlistContextType | null>(null)

const WatchListProvider: FC<WatchListProviderProps> = ({ children, value }) => {
    const [watchListInContext, setWatchListInContext] = useState<{ [key: number]: MovieCardProps }>(value.watchListInContext)

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
