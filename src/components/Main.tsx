import { useState } from "react"
import listings from "../data/data.json"
import Listing from "./Listing"
import FilterBar from "./FilterBar"


function Main() {

    const [roleFilter, setRoleFilter] = useState('')
    const [levelFilter, setLevelFilter] = useState('')
    const [languageFilter, setLanguageFilter] = useState<string[]>([])
    const [toolFilter, setToolFilter] = useState<string[]>([])

    return (
        <main className="bg-lightCyanBg font-spartan px-5 py-16 flex flex-col gap-16 relative">
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