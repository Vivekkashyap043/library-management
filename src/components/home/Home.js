import React from 'react'
import './Home.css'
function Home() {
  return (
    <div>         
      <div className="content rounded m-3 pb-4">
        <h2>Content</h2>
        <div className='d-flex justify-content-around'>
            <div className='border c1 rounded w-25 pb-3'>
                <h4>eBooks</h4>
                <img className='img-c w-50 rounded ' src="https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg" alt="" />
            </div>
            <div className='border c2 rounded w-25 pb-3'>
                <h4>Journals</h4>
                <img className='img-c w-50 rounded' src="https://www.aiche.org/sites/default/files/images/page/lead/IMG_5221-Version-2-full-574.jpg" alt="" />
            </div>
            <div className="border c3 rounded w-25 pb-3">
              <h4>Articles</h4>
              <img className='img-c w-50 rounded' src="https://miro.medium.com/v2/resize:fit:800/1*HuQO9q4V26CM9FE0omc6wg.png" alt="" />
            </div>
        </div>
      </div>
      {/* domains */}
      <div className="content rounded m-3 pb-4">
        <h2>Domains</h2>
        <div className='d-flex justify-content-around'>
            <div className='border c1 rounded w-25 pb-3'>
                <h4>Artificial Intelligence</h4>
                <img className='img-c w-50 rounded ' src="https://imageio.forbes.com/specials-images/imageserve/643016813686d8eafca00875/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds" alt="" />
            </div>
            <div className='border c2 rounded w-25 pb-3'>
                <h4>Data Science</h4>
                <img className='img-c w-50 rounded' src="https://www.ntu.edu.sg/images/default-source/hub-programmes/scse/msc_datasc2_web775x465.jpg?sfvrsn=4dba8fec_5" alt="" />
            </div>
            <div className="border c3 rounded w-25 pb-3">
              <h4>Cyber Security</h4>
              <img className='img-c w-50 rounded' src="https://img.freepik.com/free-photo/3d-internet-secuirty-badge_1048-18106.jpg?size=338&ext=jpg&ga=GA1.1.735520172.1710633600&semt=ais" alt="" />
            </div>            
        </div>
      </div>
      {/* useful links */}
      <div className="content rounded m-3 pb-4">
        <h2>Useful Links</h2>
        <div className='d-flex justify-content-around'>
            <div className='border c1 rounded w-25 pb-3 pt-2'>
                <h4>Research papers</h4>
                <img className='img-c w-50 rounded' src="https://1000logos.net/wp-content/uploads/2019/03/IEEE-Logo.jpg" alt="" />
                <a href="https://ieeexplore.ieee.org/Xplore/home.jsp">https://ieeexplore.ieee.org/Xplore/home.jsp</a>
            </div>
            <div className='border c2 rounded w-25 pb-3 pt-2'>
                <h4>Ted Talks</h4>
                <img className='img-c w-50 rounded' src="https://1000logos.net/wp-content/uploads/2020/09/TED-Logo.png" alt="" />
                <a href="https://youtu.be/XmbyeTj0zJ8">https://youtu.be/XmbyeTj0zJ8</a>
            </div>
            <div className="border c3 rounded w-25 pb-3 p-2">
              <h4>Infosys Springboard</h4>
              <img className='img-c w-50 rounded' src="https://www.infosys.com/content/dam/infosys-web/en/about/springboard/images/infosys-springboard.png" alt="" />
              <a href="https://infyspringboard.onwingspan.com/web/en/login">https://infyspringboard.onwingspan.com</a>
            </div>            
        </div>
      </div>
    </div>
  )
}

export default Home
