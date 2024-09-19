import listings from "../data/data.json"
import Listing from "./Listing"

function Main() {
    return (
        <main className="bg-lightCyanBg font-spartan px-5 py-16 flex flex-col gap-16">
            {listings.map(listing => (
                <Listing key={listing.id} listing={listing} />
            ))}
        </main>
    )
}

export default Main