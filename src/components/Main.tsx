import { useEffect, useState } from "react"
import data from "../data/data.json"

import Listing from "./Listing"
import FilterBar from "./FilterBar"


function Main() {

    const [listings, setListings] = useState(data)

    const [roleFilter, setRoleFilter] = useState('')
    const [levelFilter, setLevelFilter] = useState('')
    const [languageFilter, setLanguageFilter] = useState<string[]>([])
    const [toolFilter, setToolFilter] = useState<string[]>([])

    useEffect(() => {
        if (roleFilter === '' || levelFilter === '' || languageFilter.length === 0 || toolFilter.length === 0) {
            setListings(data)
        }

        if (roleFilter !== '' || levelFilter !== '' || languageFilter.length > 0 || toolFilter.length > 0) {
            let filtered = [...listings]

            /* filter for role */
            filtered = filtered.filter(listing => {
                if (roleFilter !== '') {
                    return listing.role === roleFilter
                } else {
                    return listing
                }
            })

            /* filter for level */
            filtered = filtered.filter(listing => {
                if (levelFilter !== '') {
                    return listing.level === levelFilter
                } else {
                    return listing
                }
            })

            /* filter for language */
            filtered = filtered.filter(listing => {
                if (languageFilter.length > 0) {
                    return listing.languages.some(language => languageFilter.includes(language))
                } else {
                    return listing
                }
            })

            /* filter for tool */
            filtered = filtered.filter(listing => {
                if (toolFilter.length > 0) {
                    return listing.tools.some(tool => toolFilter.includes(tool))
                } else {
                    return listing
                }
            })

            setListings(filtered)
        }
    }, [roleFilter, levelFilter, languageFilter, toolFilter])

    return (
        <main className="grow bg-lightCyanBg font-spartan px-5 py-16 flex flex-col gap-16 relative">
            {/* Filter chamber lol... */}
            {(roleFilter !== '' || levelFilter !== '' || languageFilter.length > 0 || toolFilter.length > 0) && (
                <FilterBar roleFilter={roleFilter} levelFilter={levelFilter} languageFilter={languageFilter} toolFilter={toolFilter} setRoleFilter={setRoleFilter} setLevelFilter={setLevelFilter} setLanguageFilter={setLanguageFilter} setToolFilter={setToolFilter} />
            )}

            {/* List of listings */}
            {listings.map(listing => (
                <Listing key={listing.id} listing={listing} setRoleFilter={setRoleFilter} setLevelFilter={setLevelFilter} setLanguageFilter={setLanguageFilter} setToolFilter={setToolFilter} />
            ))}
        </main>
    )
}

export default Main