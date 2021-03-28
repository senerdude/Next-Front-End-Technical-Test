import './ScrollTop.scss'
import up from '../../../assets/up.svg'

export const ScrollTop = (props:any) => {

    const handleScroll = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return <button className="ScrollTop" onClick={handleScroll} {...props} style={{backgroundImage: `url(${up})`}}>{props.children}</button>
}