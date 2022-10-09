import React from 'react'

const SearchItems = ({search,SetSearch}) => {
  return (
    <form className='searchForm'>
        <label htmlFor='search'>Search</label>
        <input
           id="search"
           type="text"
           role="searchbox"
           placeholder='Search items'
           value={search}
           onChange={(e)=>SetSearch(e.target.value)}
        />

    </form>
  )
}

export default SearchItems