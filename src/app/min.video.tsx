
const Watch = () => {

    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 my-10'>
            {/*            Watch later                */}
            <div className="w-[100vh] flex justify-center items-center mb-8">
                <iframe
                    width={560}
                    height={315}
                    src="https://www.youtube.com/embed/5QGUG6iG5U8?si=LaSwHmlAdezNRMen"
                    title="YouTube video player"
                    frameBorder={0}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen={true}
                />
            </div>
            <div className="w-[100vh] flex flex-col justify-center sm:items-center md:items-start lg:items-start mb-8">
                <h1 className='text-3xl text-white font-bold montsterrat text-center sm:text-start'>
                    WATCH OUR COURSES
                </h1>
                <h3 className='monterras text-2xl font-light text-white mt-8'>
                    Problems trying to resolve the conflict between<br />
                    the two major realms of Classical physics:<br />
                    Newtonian mechanics
                </h3>
            </div>
        </div>
    )
}

export default Watch