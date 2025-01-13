import { UserButton } from '@civic/auth/react'

const Navbar = ()=>{
    return(
        <nav>
            <div style={{display:'flex',alignItems:'center',gap:10}}>
                <img src='/logo.avif' style={{width:30, height:30}}/>
                <h4 style={{fontSize:30,textTransform:'uppercase',letterSpacing:3}}>Civical</h4>
            </div>
            <UserButton className='btn'/>
        </nav>
    )
}

export default Navbar
