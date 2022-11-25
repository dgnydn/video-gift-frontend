import Image from "next/image";

export default async function Page() {
  const creators = await (
    await fetch(process.env.API_URL + "/creator", {
      cache: "no-store",
    })
  ).json();
  return (
    <div>
      <h1 className="font-bold text-4xl mb-10">All Creators</h1>
      <div>
        {creators.data.map((creator: any) => (
          <article
            className="rounded-xl border border-gray-700 bg-gray-800 p-4"
            key={creator.id}
          >
            <div className="flex items-center">
              <Image
                alt={creator.name}
                src={creator.avatar}
                width={100}
                height={100}
                className={`h-16 w-16 rounded-full object-cover border-4 ${
                  creator.isAvailable ? "border-green-500" : "border-red-500"
                }`}
              />

              <div className="ml-3">
                <h3 className="text-lg font-medium text-white">
                  {creator.name}
                </h3>
                <div className="flow-root">
                  <ul className="-m-1 flex flex-wrap">
                    <li className="p-1 leading-none">
                      <a
                        href={`mailto:${creator.email}`}
                        className="text-xs font-medium text-gray-300"
                      >
                        {" "}
                        {creator.email}{" "}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <ul className="mt-4 space-y-2">
              {creator.videos.map((video: any) => (
                <li key={video.id}>
                  <a
                    href={video.url}
                    className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600"
                  >
                    <strong className="font-medium text-white">
                      {video.title}
                    </strong>

                    <p className="mt-1 text-xs font-medium text-gray-300">
                      {video.published ? "Published" : "Unpublished"}
                    </p>
                  </a>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
}
