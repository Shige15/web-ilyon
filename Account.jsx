import Footer from "../Component/Footer"
import Navbar from "../Component/Navbar"

import "../Style/Account.css"
function Akun() {
  return (
    <div>
      <>
      <Navbar/>
      <div className="judul">
      <h1>ACCOUNT - TORAM ONLINE</h1>
      </div>
      <div className='text-container'>
        <h1 className='text'>Product</h1>
        <h4 className='text'>Here The account We Sell</h4>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px' }}>
        <div className="card" style={{ width: '18rem' }}>
          <img 
            src="https://scontent.fbdo9-1.fna.fbcdn.net/v/t39.30808-6/465721431_557974150161055_5139273757949191125_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGG3ZBteW5qM4KIaBFox9OuS6fksDXykjVLp-SwNfKSNTLurVdTj1hgdtm042Z9EfwAiICqCpjGObwTxaeaOzDh&_nc_ohc=MgMOGSxRLGYQ7kNvgGHmnzi&_nc_zt=23&_nc_ht=scontent.fbdo9-1.fna&_nc_gid=AjOEoOKcfLcj6qkUfTTZ82H&oh=00_AYC525IM8Ilj12jKlaO1HFM-Mibr0MEwSx9YiDy3DybACg&oe=6735DDAC" 
            className="card-img-top" 
            alt="Halloween Night" 
          />
          <div className="card-body">
            <h5 className="card-title">AKUN 1</h5>
            <p className="card-text"></p>
            <a href="https://www.facebook.com/share/p/19WqFDEqB9/" className="btn btn-primary" target="_blank" rel="noopener noreferrer">LIHAT</a>
          </div>
        </div>
        <div className="card" style={{ width: '18rem' }}>
          <img 
            src="https://img.freepik.com/premium-vector/grunge-sold-word-rubber-stamp-sold-sign-sticker-set-grunge-vintage-square-label-vector-illustration-isolated-white-background_192280-1167.jpg?w=740" 
            className="card-img-top" 
            alt="Flat Halloween Background" 
          />
          <div className="card-body">
            <h5 className="card-title">TORAM - ACCOUNT</h5>
            <p className="card-text"></p>
            <a href="" className="btn btn-primary" target="_blank" rel="noopener noreferrer">VIEW</a>
          </div>
        </div>
        <div className="card" style={{ width: '18rem' }}>
          <img 
            src="https://img.freepik.com/premium-vector/grunge-sold-word-rubber-stamp-sold-sign-sticker-set-grunge-vintage-square-label-vector-illustration-isolated-white-background_192280-1167.jpg?w=740" 
            className="card-img-top" 
            alt="Flat Halloween Background" 
          />
          <div className="card-body">
            <h5 className="card-title">TORAM - ACCOUNT</h5>
            <p className="card-text"></p>
            <a href="" className="btn btn-primary" target="_blank" rel="noopener noreferrer">VIEW</a>
          </div>
        </div>
        <div className="card" style={{ width: '18rem' }}>
          <img 
            src="https://img.freepik.com/premium-vector/grunge-sold-word-rubber-stamp-sold-sign-sticker-set-grunge-vintage-square-label-vector-illustration-isolated-white-background_192280-1167.jpg?w=740" 
            className="card-img-top" 
            alt="Flat Halloween Background" 
          />
          <div className="card-body">
            <h5 className="card-title">TORAM - ACCOUNT</h5>
            <p className="card-text"></p>
            <a href="" className="btn btn-primary" target="_blank" rel="noopener noreferrer">VIEW</a>
          </div>
        </div>
      </div>
      
      </>
      <Footer/>
    </div>
  )
}

export default Akun