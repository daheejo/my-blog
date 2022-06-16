import './header.css'

export default function Header() {
  return (
    <>
    <header className='max-width'>
    <h1>
					<a href="./">
						<img src={require("../../assets/Logo.svg").default} alt="My Blog" />
					</a>
				</h1>
        
    </header>
    </>
  )
}
