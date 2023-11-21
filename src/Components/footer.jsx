import { useContextGlobal } from "./utils/global.context"

const Footer = () => {
  const { state } = useContextGlobal ()

  return (
    <footer className={state.theme === 'dark' ? 'dark' : ''}>
        <p>Powered by Lucia Alves</p>
        <img src="public\images\DH.png" alt='DH-logo' />
    </footer>
  )
}

export default Footer