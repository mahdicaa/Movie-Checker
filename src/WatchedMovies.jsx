import { WatchedSummary } from "./WatchedSummary";

export const WatchedMovies = ({ watchedMoviesList }) => {
  return (
    <div className="w-full">
      <WatchedSummary />
      <div className="flex flex-col m-3 gap-2">
        {watchedMoviesList.map((item) => (
          <div className="flex">
            <img
              src={item.poster}
              alt={`photo of ${item.id}`}
              className="w-16 h-24 object-cover rounded"
            />
            <div className="text-white p-2">
              <div className="font-bold mt-2">{item.title}</div>
              <div className="flex gap-5 mt-2">
                <div className="flex">
                  <svg
                    fill="orange"
                    width="20px"
                    height="20px"
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 47.94 47.94"
                    xmlSpace="preserve"
                    className="ml-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757
  c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042
  c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685
  c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528
  c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956
  C22.602,0.567,25.338,0.567,26.285,2.486z"
                    />
                  </svg>
                  {item.rating}
                </div>
                <div className="">⏰ {item.runtime}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
