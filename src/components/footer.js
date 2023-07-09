import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpotify, faBandcamp, faTelegram } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <section className="mt-40 bg border-solid border-t-2 border-black m-[2.5vh] p-5 h-[10vh] grid grid-cols-3 text-center font-bold text-4xl content-center max-w-[800px] md:mx-auto">
            <a className="hover:scale-110 ease-in-out" href="https://open.spotify.com/artist/3ckoZBhv3loAIC409aRlFE?si=f1xrNAaFSe6mwmUmT2d1Mw"><FontAwesomeIcon icon={faSpotify} /></a>
            <a className="hover:scale-110 ease-in-out" href="https://denderhale.bandcamp.com"><FontAwesomeIcon icon={faBandcamp} /></a>
            <a className="hover:scale-110 ease-in-out" href="mailto:sierralejohn@gmail.com?subject=Hiya Den Der Hale"><FontAwesomeIcon icon={faTelegram} /></a>
        </section>
    )
}

export default Footer;