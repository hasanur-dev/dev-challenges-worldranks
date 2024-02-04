const continents = [
    'Americas',
    'Antarctica',
    'Africa',
    'Asia',
    'Europe',
    'Oceania',
]
function Home() {
    return (
        <main className="bg-gray-very-dark p-6 sm:mx-7 transition-all relative -translate-y-10  border-l-transparent border-r-transparent border-t-gray-light/20 border-b-gray-light/20 border sm:border-gray-light/20 sm:rounded-lg grid gap-y-6 sm:grid-cols-2">
            <div className="flex items-center gap-2 flex-wrap justify-between gap-x-12 gap-y-2 col-span-2">
                <p className="text-gray-light font-semibold text-sm tracking-wide">
                    Found 234 countries
                </p>
                <div className="bg-gray-dark w-full max-w-72 relative overflow-hidden rounded-lg text-xs font-medium">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5 absolute top-1/2 -translate-y-1/2 left-2"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                        />
                    </svg>

                    <input
                        type="text"
                        placeholder="Search by Name, Region, Subregion"
                        className="bg-transparent w-full p-3 indent-6 tracking-wide placeholder:text-gray-light"
                    />
                </div>
            </div>
            <section className="grid gap-6 sm:grid-cols-2 items-start gap-x-10 ">
                <div className="grid gap-2">
                    <label
                        htmlFor="select"
                        className="text-xs text-gray-light font-medium"
                    >
                        Sort by
                    </label>

                    <select
                        name="select"
                        id="select"
                        className="bg-transparent border-2 border-gray-dark p-2 rounded-lg"
                    >
                        <option value="population" className="bg-gray-dark ">
                            Population
                        </option>
                        <option value="population" className="bg-gray-dark">
                            Population
                        </option>
                        <option value="population" className="bg-gray-dark">
                            Population
                        </option>
                    </select>
                </div>
                <div className="grid gap-2">
                    <label className="text-xs text-gray-light font-medium">
                        Region
                    </label>
                    <div className="flex flex-wrap gap-3">
                        {continents.map((c) => (
                            <button
                                key={c}
                                className="text-sm p-1 px-3 rounded-xl bg-gray-dark"
                            >
                                {c}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="grid gap-2 ">
                    <label className=" text-xs text-gray-light font-medium">
                        Status
                    </label>
                    <div>
                        <div className="flex items-center mb-4">
                            <input
                                id="member"
                                type="checkbox"
                                value=""
                                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label
                                htmlFor="member"
                                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                                Member of the United Nations
                            </label>
                        </div>
                        <div className="flex items-center mb-4 ">
                            <input
                                id="independent"
                                type="checkbox"
                                value=""
                                className="w-4 h-4 text-red-600 bg-gray-dark border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label
                                htmlFor="independent"
                                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                                Independent
                            </label>
                        </div>
                    </div>
                </div>
            </section>
            <section className="col-span-2">
                <div>
                    <div className="grid grid-cols-7 xl:grid-cols-9">
                        <p className="text-xs text-gray-light font-medium">
                            Flag
                        </p>
                        <p className="col-span-2 text-xs text-gray-light font-medium">
                            Name
                        </p>
                        <p className="col-span-2 text-xs text-gray-light font-medium">
                            Population
                        </p>
                        <p className="col-span-2 text-xs text-gray-light font-medium">
                            Area(km2)
                        </p>
                        <p className="col-span-2 text-xs text-gray-light font-medium hidden xl:block">
                            Region
                        </p>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Home
