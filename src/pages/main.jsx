import { useEffect, useState } from "react";

function Unsplash() {
    const api = `https://gnews.io/api/v4/search?q=football&apikey=0881f1893c65bbc963ed149ac874771e`;
    const [image, setImage] = useState([]);
    const [search, setSearch] = useState("");

    const handleClick = async (e) => {
      e.preventDefault();
      const link = `https://gnews.io/api/v4/search?q=${search}&apikey=0881f1893c65bbc963ed149ac874771e`;
      const res1 = await fetch(link);
      const data1 = await res1.json();
      console.log(data1.articles);
      setImage(data1.articles);
    };
    useEffect(() => {
      async function splash() {
        const res = await fetch(api);
        const data = await res.json();
        console.log(data.articles);
      }
      splash();
    }, []);


  return (
    <>
      <div className="bg-blue-300 h-16 flex items-center">
        <div className="border-gray-300 bg-white py-2 px-3 mx-10 flex items-center rounded-md">
          <input
            placeholder="Search"
            className=" rounded-md px-2 outline-none "
            type="text"
            onChange={(e) => {
                setSearch(e.target.value);
            }}
          />
          <button onClick={handleClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="w-full flex flex-col pt-6">
        {image.length > 1 ? (
          image?.map((pack) => {
            const { id, image, name, content, description , source , title} = pack
         return (
        <>
          <div className="container mx-auto w-[80%] flex flex-col py-10 items-center space-x-5">
            <h1 className="text-3xl py-3 font-semibold">
             {title}
            </h1>
            <img
              src={image}
              alt=""
              className="w-1/2 rounded-[10px]"
            />
            <div className="text-center py-10">
              <h2 className="py-3">
               {description}
              </h2>
              <span className="font-bold  text-4xl">Content</span>
              <h1 className="py-5 px-36 text-2xl">
               {content}
              </h1>
            </div>
          </div>
          <hr />
        </>
        );
          })
        ) : (
          <center>
            <div>{search} Nothing Found Related This Search</div>
          </center>
        )}
      </div>
    </>
  );
}

export default Unsplash;
