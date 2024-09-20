import removeIcon from "../assets/icon-remove.svg"

type setString = React.Dispatch<React.SetStateAction<string>>
type setStringArray = React.Dispatch<React.SetStateAction<string[]>>

type Props = {
    roleFilter: string,
    levelFilter: string,
    languageFilter: string[],
    toolFilter: string[],
    setRoleFilter: setString,
    setLevelFilter: setString,
    setLanguageFilter: setStringArray,
    setToolFilter: setStringArray,
}

function FilterBar({ roleFilter, levelFilter, languageFilter, toolFilter, setRoleFilter, setLevelFilter, setLanguageFilter, setToolFilter }: Props) {


    const removeLanguage = (language: string) => {
        const updated = languageFilter.filter(filter => {
            return filter !== language
        })

        setLanguageFilter(updated)
    }

    const removeTool = (tool: string) => {
        const updated = toolFilter.filter(filter => {
            return filter !== tool
        })

        setToolFilter(updated)
    }

    const clearAllFilters = () => {
        setRoleFilter('')
        setLevelFilter('')
        setLanguageFilter([])
        setToolFilter([])
    }

    return (
        <section className='bg-white rounded-lg shadow-xl p-5 -mt-24 flex justify-between items-center '>
            <div className='flex flex-wrap gap-4 grow'>
                {roleFilter && (
                    <div className='font-bold flex rounded overflow-hidden'>
                        <span className="px-3 pb-1.5 pt-2 bg-lightCyanFilter text-desatDarkCyan">{roleFilter}</span>
                        <button onClick={() => setRoleFilter('')} className='bg-desatDarkCyan text-white px-3'><img src={removeIcon} alt={`Remove ${roleFilter} filter`} /></button>
                    </div>
                )}

                {levelFilter && (
                    <div className='font-bold flex rounded overflow-hidden'>
                        <span className="px-3 pb-1.5 pt-2 bg-lightCyanFilter text-desatDarkCyan">{levelFilter}</span>
                        <button onClick={() => setLevelFilter('')} className='bg-desatDarkCyan text-white px-3'><img src={removeIcon} alt={`Remove ${levelFilter} filter`} /></button>
                    </div>
                )}

                {languageFilter.map(language => (
                    <div key={language} className='font-bold flex rounded overflow-hidden'>
                        <span className="px-3 pb-1.5 pt-2 bg-lightCyanFilter text-desatDarkCyan">{language}</span>
                        <button onClick={() => removeLanguage(language)} className='bg-desatDarkCyan text-white px-3'><img src={removeIcon} alt={`Remove ${language} filter`} /></button>
                    </div>
                ))}

                {toolFilter.map(tool => (
                    <div key={tool} className='font-bold flex rounded overflow-hidden'>
                        <span className="px-3 pb-1.5 pt-2 bg-lightCyanFilter text-desatDarkCyan">{tool}</span>
                        <button onClick={() => removeTool(tool)} className='bg-desatDarkCyan text-white px-3'><img src={removeIcon} alt={`Remove ${tool} filter`} /></button>
                    </div>
                ))}

            </div>

            <button onClick={clearAllFilters} className='text-darkCyan font-bold px-2'>Clear</button>
        </section>
    )
}

export default FilterBar