import React from 'react'
import "../style/authbanner.scss"

const AuthBanner = () => {

  const bannerImage = ["https://ik.imagekit.io/zzkwwuvz9/insta-ui-images/reN9rvYdLTB.png?updatedAt=1772012126512","https://ik.imagekit.io/zzkwwuvz9/insta-ui-images/nWfBjz-5_uf.png?updatedAt=1772012090762","https://ik.imagekit.io/zzkwwuvz9/insta-ui-images/pAv7hjq-51n.png?updatedAt=1772011889244"]

  let randomIndex = Math.floor(Math.random() * bannerImage.length);

  return (
    <div className='banner'>
        <img src={bannerImage[randomIndex]} alt="banner" />
    </div>
  )
}

export default AuthBanner