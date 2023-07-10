import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpotify, faBandcamp, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
function Footer() {
    return (
        <section className="mt-40 bg border-solid border-t-2 border-black m-[2.5vh] p-5 min-h-[10vh] grid grid-cols-1 sm:grid-cols-5 text-center font-bold text-4xl content-center max-w-[800px] md:mx-auto">
            <a className="hover:scale-90 inline transition-all ease" href="https://www.youtube.com/@denderhale5756"><FontAwesomeIcon icon={faYoutube} /></a>
            <a className="hover:scale-90 inline transition-all ease" href="https://open.spotify.com/artist/3ckoZBhv3loAIC409aRlFE?si=f1xrNAaFSe6mwmUmT2d1Mw"><FontAwesomeIcon icon={faSpotify} /></a>
            <a className="hover:scale-90 inline transition-all ease" href="https://www.instagram.com/den.der.hale/"><FontAwesomeIcon icon={faInstagram} /></a>
            <a className="hover:scale-90 inline transition-all ease" href="https://denderhale.bandcamp.com"><FontAwesomeIcon icon={faBandcamp} /></a>
            <a className="hover:scale-90 inline transition-all ease" href="mailto:sierralejohn@gmail.com?subject=Hiya Den Der Hale"><FontAwesomeIcon icon={faEnvelope} /></a>
        </section>
    )
}

export default Footer;