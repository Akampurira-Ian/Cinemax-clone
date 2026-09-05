import bgimg from "../assets/images (2).jpg";

const Nav = () => {
  return (
    <>
      <div
        className="px-20 py-4 bg-black text-white"
        style={{ backgroundImage: `url("${bgimg}")` }}
      >
        <div className="flex justify-between items-center ">
          <div className="text-3xl font-bold text-red-600 ">CINEMAX</div>
          <div className="flex gap-4 items-center">
            <div>
              <select className="pr-25 border p-1 mr-2 border-gray-700">
                <option className="text-black" value="English">
                  English
                </option>
                <option className="text-black" value="Spanish">
                  Spanish
                </option>
              </select>
            </div>
            <button className="bg-red-600 py-1 px-4 rounded">Sign in</button>
          </div>
        </div>
        <div className="py-30 flex flex-col items-center ">
          <div className="text-6xl font-bold w-150 text-center">
            Unlimited films, Series and more.
          </div>
          <div className="py-4 font-bold text-[18px]">
            Starts at $2.99/month. Cancel anytime.
          </div>
          <p>
            Ready to watch? Enter your email to create an account or start your
            subscription.
          </p>
          <div className="py-4">
            <input
              className="border p-2 border-gray-500 pr-30 mr-5 "
              type="text"
              placeholder="Enter your email"
            />
            <button className="bg-red-600 py-2 px-5 rounded">
              Get started
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
