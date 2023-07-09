function Video() {
    return (
        <section className="h-screen mt-56">
            <video autoPlay loop src="videos/muddyfeet.mp4" typeof="video/mp4" className="object-cover filter grayscale w-[100vw] h-[70vh] opacity-20" />
        </section>
    )
}

export default Video;