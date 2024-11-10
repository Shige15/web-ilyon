import Footer from "../Component/Footer"
import Navbar from "../Component/Navbar"

import "../Style/Account.css"
function Spina() {
  return (
    <div>
      <>
      <Navbar/>
      <div className="judul">
      <h1>SPINA - TORAM ONLINE</h1>
      </div>
      <div className='text-container'>
        <h1 className='text'>Product</h1>
        <h4 className='text'>Here The Spina We Sell</h4>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px' }}>
        <div className="card" style={{ width: '18rem' }}>
          <img 
            src="https://img.freepik.com/free-psd/realistic-lottery-symbol-isolated_23-2151177245.jpg?t=st=1731207160~exp=1731210760~hmac=46c9e39ffb8d46c9be896dfe18f456a7d0baee1ec110609abf138237ddf3afe5&w=740" 
            className="card-img-top" 
            alt="Halloween Night" 
          />
          <div className="card-body">
            <h5 className="card-title">Rp 10.000</h5>
            <p className="card-text"></p>
            <a href="https://wa.me/+6285162651533?text=Spina+10k+dapet+berapa?" className="btn btn-primary" target="_blank" rel="noopener noreferrer">VIEW</a>
          </div>
        </div>
        <div className="card" style={{ width: '18rem' }}>
          <img 
            src="https://img.freepik.com/free-psd/realistic-lottery-symbol-isolated_23-2151177245.jpg?t=st=1731207160~exp=1731210760~hmac=46c9e39ffb8d46c9be896dfe18f456a7d0baee1ec110609abf138237ddf3afe5&w=740" 
            className="card-img-top" 
            alt="Flat Halloween Background" 
          />
          <div className="card-body">
            <h5 className="card-title">Rp 50.000</h5>
            <p className="card-text"></p>
            <a href="https://wa.me/+6285162651533?text=Spina+50k+dapet+berapa?" className="btn btn-primary" target="_blank" rel="noopener noreferrer">VIEW</a>
          </div>
        </div>
        <div className="card" style={{ width: '18rem' }}>
          <img 
            src="https://img.freepik.com/free-psd/realistic-lottery-symbol-isolated_23-2151177245.jpg?t=st=1731207160~exp=1731210760~hmac=46c9e39ffb8d46c9be896dfe18f456a7d0baee1ec110609abf138237ddf3afe5&w=740" 
            className="card-img-top" 
            alt="Flat Halloween Background" 
          />
          <div className="card-body">
            <h5 className="card-title">Rp 100.000</h5>
            <p className="card-text"></p>
            <a href="https://wa.me/+6285162651533?text=Spina+100k+dapet+berapa?" className="btn btn-primary" target="_blank" rel="noopener noreferrer">VIEW</a>
          </div>
        </div>
        <div className="card" style={{ width: '18rem' }}>
          <img 
            src="https://img.freepik.com/free-psd/realistic-lottery-symbol-isolated_23-2151177245.jpg?t=st=1731207160~exp=1731210760~hmac=46c9e39ffb8d46c9be896dfe18f456a7d0baee1ec110609abf138237ddf3afe5&w=740" 
            className="card-img-top" 
            alt="Flat Halloween Background" 
          />
          <div className="card-body">
            <h5 className="card-title">Custom Amount</h5>
            <p className="card-text"></p>
            <a href="https://wa.me/+6285162651533?text=Beli+Spina+...K+dapet+berapa?" className="btn btn-primary" target="_blank" rel="noopener noreferrer">VIEW</a>
          </div>
        </div>
      </div>
      
      </>
      <Footer/>
    </div>
  )
}

export default Spina