import useFetch from "../hooks/useFetch"
import {Loading}  from "../components"

const History = () => {
    const [data] = useFetch("https://api.spacexdata.com/v4/history")

    return (
        <>
            {!data ? (
                <Loading />
            ) : (
                <section className="py-32 max-width">
                    <h1 className="heading text-center mb-10">History</h1>

                    <div className="max-width grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 px-5">
                        {data.map(
                            ({
                                id,
                                title,
                                details,
                                event_date_unix,
                                event_date_utc,
                                links,
                            }) => (
                                <article key={id} className="bg-stone-900 p-5 text-white">
                                    <h2 className="mb-3">
                                        {title}, <span className="opacity-75">{details}</span>
                                    </h2>

                                    <ul className="mb-3 opacity-75">
                                        <li className="mb-3">event_date_unix: {event_date_unix}</li>
                                        <li className="mb-3">
                                            event_date_utc: {event_date_utc}
                                        </li>
                                        <a
                                            href={links.article}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="btn"
                                        >
                                            Read Article
                                        </a>
                                    </ul>
                                </article>
                            )
                        )}
                    </div>
                </section>
            )}
        </>
    )
}

export default History