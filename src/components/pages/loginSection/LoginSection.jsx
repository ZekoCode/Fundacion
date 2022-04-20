import Footer from '../../atoms/footer/Footer'
import ImageForm from '../../atoms/imageForm/ImageForm'
import LoginForm from '../../molecules/loginForm/LoginForm'
import './styles.css'


function LoginSection() {
    const imgUrl='http://www.eina.org.ec/wp-content/uploads/2017/03/cropped-icon-192x192.png'

  return (
    <div className='login--page'>
       <div className='login--container'>
          <ImageForm url={imgUrl} alt='Icono'/>
          <LoginForm/>
      </div>
      <Footer/>
    </div>
  )
}

export default LoginSection