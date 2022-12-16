import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { MainWrapper } from '../Shared/StyledComponentDashboard'
import { useSelector } from 'react-redux'

export const DashboardPage = () => {
  const data = useSelector((state) => state.login.login);
  const router = useRouter()

  const handleLogout = () => {
    localStorage.clear();
    router.push('/')
  }

  useEffect(() => {
    if (!localStorage.getItem("userName") && !localStorage.getItem("password")) {
      router.push('/')
    }
  }, []);

  return (
    <MainWrapper>
      <div className='topHeader'>{data?.username} <span onClick={handleLogout}>Logout</span></div>
      <div className='dashboard'>
        <div className='leftSide'>
          <ul>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>Project</a></li>
            <li><a href='#'>Profile</a></li>
            <li><a href='#'>About</a></li>
            <li onClick={handleLogout}><a href='#'>Logout</a></li>
          </ul>
        </div>
        <div className='Rightside'>
          <h2>Dashborad</h2>
          <img src='https://media.istockphoto.com/id/1384654894/photo/father-and-son-lying-on-sofa-at-home-and-reading-book-together.jpg?s=1024x1024&w=is&k=20&c=h-lxpMj5pAPxMQItQbw5sc_L-yUSFTDx__44LujBYjM='></img>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since</p>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since</p>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
      </div>
    </MainWrapper>
  )
}
