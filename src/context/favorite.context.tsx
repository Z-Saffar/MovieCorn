import { StoredData } from 'components/MovieCard/types'
import React, { createContext, FC, useContext, useState } from 'react'

interface FavoriteContextType {
  favoriteContextList: StoredData
  setFavoriteContextList: React.Dispatch<React.SetStateAction<StoredData>>
}
export interface FavoriteProviderProps {
  value?: FavoriteContextType
}

export const FavoriteContext = createContext<FavoriteContextType | null>(null)

const FavoriteProvider: FC<FavoriteProviderProps> = ({
  children,
  value = { favoriteContextList: {}, setFavoriteContextList: () => {} },
}) => {
  const [favoriteContextList, setFavoriteContextList] = useState<StoredData>(
    value.favoriteContextList
  )

  return (
    <FavoriteContext.Provider
      value={{
        favoriteContextList,
        setFavoriteContextList,
      }}
    >
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
