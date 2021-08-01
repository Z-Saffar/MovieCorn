const useApp = () => {
  const favoriteList = localStorage.getItem('favoriteList')
  const watchList = localStorage.getItem('watchList')
  if (!favoriteList) {
    localStorage.setItem('favoriteList', JSON.stringify({}))
  }
  if (!watchList) {
    localStorage.setItem('watchList', JSON.stringify({}))
  }
  return {
    favoriteList,
    watchList,
  }
}
export default useApp
