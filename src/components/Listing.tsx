type setString = React.Dispatch<React.SetStateAction<string>>
type setStringArray = React.Dispatch<React.SetStateAction<string[]>>

type Props = {
    listing: {
        id: number;
        company: string;
        logo: string;
        new: boolean;
        featured: boolean;
        position: string;
        role: string;
        level: string;
        postedAt: string;
        contract: string;
        location: string;
        languages: string[];
        tools: string[];
    },
    setRoleFilter: setString,
    setLevelFilter: setString,
    setLanguageFilter: setStringArray,
    setToolFilter: setStringArray,
}
function Listing({ listing, setRoleFilter, setLevelFilter, setLanguageFilter, setToolFilter }: Props) {
    return (
        <article className="bg-white shadow-xl flex flex-col relative rounded-lg lg:flex-row lg:items-center lg:p-8">
            <img src={listing.logo} alt="PhotoSnap" className="w-16 h-16 absolute -top-8 left-[26px] md:w-24 md:h-24 md:-top-12 md:left-8 lg:relative lg:inset-0" />

            <div className="p-5 px-[26px] pt-12 flex flex-col gap-4 rounded-lg overflow-hidden relative md:p-8 md:pt-16 lg:grow lg:p-8 lg:grid lg:grid-cols-[auto,_auto] lg:grid-rows-[auto,_auto,_auto] lg:absolute lg:top-0 lg:left-0 lg:w-full lg:h-full lg:pl-40 lg:pt-8 lg:gap-y-2">
                {listing.featured && (
                    <div className="absolute top-0 left-0 w-[6px] h-full bg-desatDarkCyan"></div>
                )}

                <div className="flex items-center gap-6">
                    <h2 className="font-bold text-desatDarkCyan md:text-lg">{listing.company}</h2>

                    <div className='space-x-2'>
                        {listing.new && (
                            <span className="bg-desatDarkCyan pb-1.5 pt-2 px-3 font-bold rounded-full text-white">NEW!</span>
                        )}

                        {listing.featured && (
                            <span className="bg-darkerCyan pb-1.5 pt-2 px-3 font-bold rounded-full text-white">FEATURED</span>
                        )}
                    </div>
                </div>

                <h3 className="font-bold md:text-lg hover:text-desatDarkCyan cursor-pointer transition-all">{listing.position}</h3>

                <div className="flex items-center gap-2 -mt-1 font-semibold md:text-lg">
                    <span className="text-darkCyan">{listing.postedAt}</span>
                    <div className='bg-darkCyan h-1 w-1 rounded-full'></div>
                    <span className="text-darkCyan">{listing.contract}</span>
                    <div className='bg-darkCyan h-1 w-1 rounded-full'></div>
                    <span className="text-darkCyan">{listing.location}</span>
                </div>

                <hr className='border-darkCyan lg:hidden' />

                <div className="flex flex-wrap gap-4 md:text-lg lg:row-span-full lg:col-start-2 lg:h-fit lg:place-self-center lg:justify-end lg:w-full">
                    <button
                        type="button"
                        className='bg-lightCyanFilter text-desatDarkCyan pt-2 pb-1.5 px-3 rounded font-bold hover:bg-desatDarkCyan hover:text-white transition-all'
                        onClick={() => setRoleFilter(listing.role)}
                    >
                        {listing.role}
                    </button>

                    <button
                        type="button"
                        className='bg-lightCyanFilter text-desatDarkCyan pt-2 pb-1.5 px-3 rounded font-bold hover:bg-desatDarkCyan hover:text-white transition-all'
                        onClick={() => setLevelFilter(listing.level)}
                    >
                        {listing.level}
                    </button>

                    {listing.languages.map(language => (
                        <button
                            key={`${listing.id}${language}`}
                            type="button"
                            className='bg-lightCyanFilter text-desatDarkCyan pt-2 pb-1.5 px-3 rounded font-bold hover:bg-desatDarkCyan hover:text-white transition-all'
                            onClick={() => setLanguageFilter(prev => [...prev, language])}
                        >
                            {language}
                        </button>
                    ))}

                    {listing.tools.map(tool => (
                        <button
                            key={`${listing.id}${tool}`}
                            type="button"
                            className='bg-lightCyanFilter text-desatDarkCyan pt-2 pb-1.5 px-3 rounded font-bold hover:bg-desatDarkCyan hover:text-white transition-all'
                            onClick={() => setToolFilter(prev => [...prev, tool])}
                        >
                            {tool}
                        </button>
                    ))}
                </div>
            </div>

        </article>
    )
}

export default Listing