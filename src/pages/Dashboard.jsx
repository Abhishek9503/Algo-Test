import React from 'react'
import { Navbar } from '../components'
import SidePanel from '../components/Left-hand-side/SidePanel'
import ContentExplorer from '../components/Right-hand-side/ContentExplorer'

const Dashboard = () => {
  return (
    <div className='w-100 overflow-hidden flex gap-5'>
      <SidePanel/>
      <ContentExplorer/>
    </div>
  )
}

export default Dashboard
