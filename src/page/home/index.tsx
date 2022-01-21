import React from 'react'
import { Playlist } from '@components/playlist'
import './index.css'

import { byAppleMusic } from '@mock/home'

const Home = () => {
  return (
    <>
      <div className='main-page'>
        <Playlist 
          title="by Apple Music"
          list={byAppleMusic}
        />
      </div>
    </>
  )
}

export default Home