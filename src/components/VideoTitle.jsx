const VideoTitle = ({ original_title, overview }) => {
  console.log(original_title, overview);
  return (
    <div className="px-11 text-white relative z-10 pt-[24rem] bg-gradient-to-r from-black aspect-video space-y-10">
      <h1 className="font-bold text-6xl">{original_title}</h1>
      <p className="text-lg w-1/4">{overview}</p>
      <div className="my-4">
        <button className="bg-white px-8 py-4 font-extrabold text-black rounded-lg mx-2 min-w-44 hover:opacity-40">
          ⏵ Play
        </button>
        <button className="bg-gray-500 px-8 py-4 font-extrabold text-white rounded-lg mx-2 2 min-w-44 opacity-75 hover:opacity-40">
          <span className="text-sm border-solid border-white border-2 rounded-full py-1 px-3 mx-2 h-1">
            !
          </span>
          More info
        </button>
      </div>
    </div>
  );
};
export default VideoTitle;
