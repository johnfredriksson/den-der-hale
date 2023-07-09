import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTicket } from '@fortawesome/free-solid-svg-icons';

function Events() {
    return (
        <section className="mt-56 min-h-[40vh] max-w-[800px] md:mx-[auto]">
            <h2 className="font-bold text-4xl text-right mx-[2.5vh] border-b-2 border-black">LIVE DATES</h2>
            <div className="mx-[2.5vh] text-right font-bold">
                <div>
                    <p className="inline font-light">BROGATAN, MALMÖ</p> <p className="inline">SE</p> <p className="inline font-light">27 JULY</p> <a href='https://www.ticketmaster.dk' target="_blank" rel="noreferrer noopener" className='text-red-600 ease-in-out hover:scale-110'><FontAwesomeIcon icon={faTicket} /></a>
                </div>
                <div>
                    <p className="inline font-light">RIKET, MALMÖ</p> <p className="inline">SE</p> <p className="inline font-light">28 JULY</p> <a href='https://www.ticketmaster.dk' target="_blank" rel="noreferrer noopener" className='text-red-600 ease-in-out hover:scale-110'><FontAwesomeIcon icon={faTicket} /></a>
                </div>
                <div>
                    <p className="inline font-light">RÖDA STEN, GÖTEBORG</p> <p className="inline">SE</p> <p className="inline font-light">1 AUGUST</p> <a href='https://www.ticketmaster.dk' target="_blank" rel="noreferrer noopener" className='text-red-600 ease-in-out hover:scale-110'><FontAwesomeIcon icon={faTicket} /></a>
                </div>
                <div>
                    <p className="inline font-light">BODEGA, KJØBENHAVN</p> <p className="inline">DK</p> <p className="inline font-light">17 AUGUST</p> <a href='https://www.ticketmaster.dk' target="_blank" rel="noreferrer noopener" className='text-red-600 ease-in-out hover:scale-110'><FontAwesomeIcon icon={faTicket} /></a>
                </div>
            </div>
        </section>
    )
}

export default Events;