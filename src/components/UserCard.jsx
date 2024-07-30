import React, { useState } from 'react'
import Image from 'next/image'
import LogoutModal from './modals/LogoutModal'
import UserDetailModal from './modals/UserDetailModal'

const UserCard = () => {
    const [showLogout, setShowLogout] = useState(false)
    const [showUserDetail, setShowUserDetail] = useState(false)

    const logoutModal = ()=>{
        setShowLogout(true)
    }

    const userDetailModal = ()=>{
        setShowUserDetail(true)
    }
  return (
   <>
    <div className='hidden md:flex justify-between w-28 border-black rounded-3xl p-3 border-2'>
        <Image onClick={userDetailModal} src="/user-icon-svg.svg" alt='user icon' width={0} height={0} className='w-6 h-6'/>
        <div className='w-0.5 h-auto border-2 border-black'></div>
        <Image onClick={logoutModal} src="/logout-svg.svg" alt='user icon' width={5} height={2} className='w-6 h-6'/>        
    </div>

    <LogoutModal show={showLogout} setShow={setShowLogout}/>
    <UserDetailModal open={showUserDetail} setOpen={setShowUserDetail}  />
   </>
  )
}

export default UserCard



