import React, { createContext, useContext } from 'react'
import { useState } from 'react'
import { FC } from 'react'
import { MovieCardProps } from '../components/MovieCard/types'

interface FavoriteContextType {
    favoriteContextList: { [key: number]: MovieCardProps },
    setFavoriteContextList: React.Dispatch<React.SetStateAction<{
        [key: number]: MovieCardProps;
    }>>
}
export interface FavoriteProviderProps {
    value: FavoriteContextType;
}

export const FavoriteContext = createContext<FavoriteContextType | null>(null)

const FavoriteProvider: FC<FavoriteProviderProps> = ({ children, value }) => {
    const [favoriteContextList, setFavoriteContextList] = useState<{ [key: number]: MovieCardProps }>(value.favoriteContextList)
    return (
        <FavoriteContext.Provider value={{
            favoriteContextList,
            setFavoriteContextList
        }}>
            {children}
        </FavoriteContext.Provider>
    )
}

function useFavoriteContext() {
    const context = useContext(FavoriteContext)
    if (context === null) {
        throw new Error('useFavoriteContext must be used within a FavoriteProvider')
    }
    return context
}

export { FavoriteProvider, useFavoriteContext }
