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
    }
}
function Listing({ listing }: Props) {
    return (
        <article className="bg-white shadow-xl flex flex-col relative rounded-lg">
            <img src={listing.logo} alt="PhotoSnap" className="w-16 h-16 absolute -top-8 left-[26px]" />

            <div className="p-5 pl-[26px] pt-12 flex flex-col gap-4 rounded-lg overflow-hidden relative">
                <div className="absolute top-0 left-0 w-[6px] h-full bg-desatDarkCyan"></div>

                <div className="flex items-center gap-6">
                    <h2 className="font-bold text-desatDarkCyan">{listing.company}</h2>

                    <div className='space-x-2'>
                        {listing.new && (
                            <span className="bg-desatDarkCyan pb-1.5 pt-2 px-3 font-bold rounded-full text-white">NEW!</span>
                        )}

                        {listing.featured && (
                            <span className="bg-darkerCyan pb-1.5 pt-2 px-3 font-bold rounded-full text-white">FEATURED</span>
                        )}
                    </div>
                </div>

                <h3 className="font-bold">{listing.position}</h3>

                <div className="flex items-center gap-2 -mt-1 font-semibold">
                    <span className="text-darkCyan">{listing.postedAt}</span>
                    <div className='bg-darkCyan h-1 w-1 rounded-full'></div>
                    <span className="text-darkCyan">{listing.contract}</span>
                    <div className='bg-darkCyan h-1 w-1 rounded-full'></div>
                    <span className="text-darkCyan">{listing.location}</span>
                </div>

                <hr className='border-darkCyan' />

                <div className="flex flex-wrap gap-4">
                    <span className='bg-lightCyanFilter text-desatDarkCyan pt-2 pb-1.5 px-3 rounded font-bold'>{listing.role}</span>
                    <span className='bg-lightCyanFilter text-desatDarkCyan pt-2 pb-1.5 px-3 rounded font-bold'>{listing.level}</span>

                    {listing.languages.map(language => (
                        <span key={`${listing.id}${language}`} className='bg-lightCyanFilter text-desatDarkCyan pt-2 pb-1.5 px-3 rounded font-bold'>{language}</span>
                    ))}

                    {listing.tools.map(tool => (
                        <span key={`${listing.id}${tool}`} className='bg-lightCyanFilter text-desatDarkCyan pt-2 pb-1.5 px-3 rounded font-bold'>{tool}</span>
                    ))}
                </div>
            </div>

        </article>
    )
}

export default Listing