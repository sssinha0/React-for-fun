import Logo from "./assets/Logo.svg";
function App() {
  return (
    <div className='max-w-[100%] h-[100vh] bg-cover bg-center bg-[url(https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/a449fabb-05e4-4c8a-b062-b0bec7d03085/IN-en-20240115-trifectadaily-perspective_alpha_website_small.jpg)]'>
      <div className="max-w-[100%] bg-[rgba(0,0,0,0.5)]">
        <section className="max-w-[1170px] mx-auto h-screen">
          <div className=" grid sm:grid-cols-2 grid-cols-[30%_auto]">
            <figure className="">
              <img src={Logo} alt="" className="sm:max-w-[148px]" />
            </figure>
            <div className="text-white flex gap-3 justify-end items-center px-2">
              <div className="relative">
                <svg className="absolute mt-3 ml-2" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="default-ltr-cache-4z3qvp e1svuwfo1" data-name="Languages" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.7668 5.33333L10.5038 5.99715L9.33974 8.9355L8.76866 10.377L7.33333 14H9.10751L9.83505 12.0326H13.4217L14.162 14H16L12.5665 5.33333H10.8278H10.7668ZM10.6186 9.93479L10.3839 10.5632H11.1036H12.8856L11.6348 7.2136L10.6186 9.93479ZM9.52722 4.84224C9.55393 4.77481 9.58574 4.71045 9.62211 4.64954H6.41909V2H4.926V4.64954H0.540802V5.99715H4.31466C3.35062 7.79015 1.75173 9.51463 0 10.4283C0.329184 10.7138 0.811203 11.2391 1.04633 11.5931C2.55118 10.6795 3.90318 9.22912 4.926 7.57316V12.6667H6.41909V7.51606C6.81951 8.15256 7.26748 8.76169 7.7521 9.32292L8.31996 7.88955C7.80191 7.29052 7.34631 6.64699 6.9834 5.99715H9.06968L9.52722 4.84224Z" fill="currentColor"></path></svg>
                <select name="" id="" className="bg-black px-6 rounded-lg border-gray-500 border-2 p-1">
                  <option value="" className="bg-white text-black">Hindi</option>
                  <option value="" className="bg-white text-black">English</option>
                </select>
              </div>
              <button className="bg-red-600 font-semibold text-white rounded-sm p-1 px-3"> Sign In</button>
            </div>
          </div>
          <div className="text-white text-center sm:py-[150px] py-[50px]">
            <h1 className="text-4xl font-bold">
              Unlimited movies, TV shows and more
            </h1>
            <h4 className="text-xl py-5">
              Watch anywhere. Cancel anytime.
            </h4>
            <p className="text-lg font-semi-bold">
              Ready to watch? Enter your email to create or restart your membership.
            </p>
            <div className="py-3 px-1 flex gap-3 justify-center">
              <input placeholder="Enter Email" className="sm:p-2 p-1 border-gray-400 border-3 bg-gray-300 rounded-lg hover:border-white"></input>
              <button className="bg-red-600 rounded-lg sm:p-3 p-1">Get Started &gt;</button>
            </div>
          </div>
        </section>
        <section className="max-w-[100%]  bg-black sm:py-16 py-10 border-t-4 border-t-[#ccc]">
          <div className="mx-auto max-w-[1170px] grid sm:grid-cols-2 items-center ">
            <div className=" text-white text-center">
              <h1 className="sm:text-6xl text-3xl font-bold">Enjoy on your TV</h1>
              <p className="py-6 px-2 sm:text-3xl text-xl font-semibold">Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
            </div>
            <div className="relative">
              <img className="z-[2] w-[100%] h-90" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" alt="" />
              <video autoPlay loop muted className="z-1 absolute top-[20.5%] w-[73%]  left-[13%] bottom-[0px]" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"></video>
            </div>
          </div>
        </section>
        <section className="max-w-[100%]  bg-black sm:py-16 py-10 border-t-4 border-t-[#ccc]">
          <div className="max-w-[1170px] mx-auto grid sm:grid-cols-2 items-center">
            <div className=" text-white text-center order-1 sm:order-2">
              <h1 className="sm:text-5xl text-3xl font-bold">Download your shows to watch offline</h1>
              <p className="py-6 px-2 sm:text-3xl text-xl font-semibold">Save your favourites easily and always have something to watch.</p>
            </div>
            <div className="relative sm:order-1 order-2">
              <img className="z-[2]" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" alt="" />
              <div className="bg-[black] sm:-translate-y-20 sm:-translate-x-6 text-white border-4 rounded-xl border-[#ccc] md:w-[55%] w-[80%] mx-auto">
                <div className="items-center grid grid-cols-2 grid-cols-[28%_auto]">
                  <div className="">
                    <img className="h-20 p-2" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png" alt="" />
                  </div>
                  <div className="items-center grid grid-cols-2 grid-cols-[70%_auto]">
                    <div className="">
                      <h2 className="font-semibold">Stranger Things</h2>
                      <a className="text-[blue]">Downloading...</a>
                    </div>
                    <div className="">
                      <img className="scale-[0.8]" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="  bg-black sm:py-16 py-10 border-t-4 border-t-[#ccc]">
          <div className="max-w-[1170px] mx-auto grid sm:grid-cols-2 items-center">
            <div className=" text-white text-center">
              <h1 className="sm:text-6xl text-3xl font-bold">Watch everywhere</h1>
              <p className="py-6 px-2 sm:text-3xl text-xl font-semibold">Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
            </div>
            <div className="relative">
              <video autoPlay loop muted className="absolute top-[10.5%] w-[61%] h-70  left-[18.8%] bottom-[0px] z-[1]" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v"></video>
              <img className="z-[2]" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png" alt="" />
            </div>
          </div>
        </section>

        <section className="max-w-[100%]  bg-black sm:py-16 py-10 border-t-4 border-t-[#ccc]">
          <div className="max-w-[1170px] mx-auto grid sm:grid-cols-2 items-center">
            <div className="relative sm:order-1 order-2">
              <img className="z-[2]" src="https://occ-0-4624-3647.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png?r=54d" alt="" />
            </div>
            <div className=" text-white text-center order-1 sm:order-2">
              <h1 className="sm:text-6xl text-3xl font-bold">Create profiles for kids</h1>
              <p className="py-6 px-2 sm:text-3xl text-xl font-semibold">Send children on adventures with their favourite characters in a space made just for them—free with your membership.</p>
            </div>
          </div>

        </section>

        <section className="max-w-[100%] bg-black sm:py-16 py-10 border-t-4 border-t-[#ccc]">
          <div className="max-w-[1170px] mx-auto">
            <div className=" text-white">
              <h1 className="sm:text-6xl text-3xl font-bold text-center">Frequently Asked Questions</h1>
            </div>
            <div className="pt-6">
              <div className="text-white">
                <h2 className="bg-[#201f1f] rounded-md px-2 py-4  text-2xl font-semibold text-white">What is Netflix? <span className="float-right text-4xl font-bold pr-5">+</span></h2>
                <p className="text-xl hidden bg-[#201f1f] px-7 py-2">Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.
                  <br></br>You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!</p>
              </div>
            </div>
            <div className="pt-1">
              <div className="text-white">
                <h2 className="bg-[#201f1f] rounded-md px-2 py-4  text-2xl font-semibold text-white">What is Netflix? <span className="float-right text-4xl font-bold pr-5">+</span></h2>
                <p className="text-xl hidden bg-[#201f1f] px-7 py-2">Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.
                  <br></br>You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!</p>
              </div>
            </div>
            <div className="pt-1">
              <div className="text-white">
                <h2 className="bg-[#201f1f] rounded-md px-2 py-4  text-2xl font-semibold text-white">What is Netflix? <span className="float-right text-4xl font-bold pr-5">+</span></h2>
                <p className="text-xl hidden bg-[#201f1f] px-7 py-2">Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.
                  <br></br>You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!</p>
              </div>
            </div>
            <div className="pt-1">
              <div className="text-white">
                <h2 className="bg-[#201f1f] rounded-md px-2 py-4  text-2xl font-semibold text-white">What is Netflix? <span className="float-right text-4xl font-bold pr-5">+</span></h2>
                <p className="text-xl hidden bg-[#201f1f] px-7 py-2">Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.
                  <br></br>You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!</p>
              </div>
            </div>
            <div className="pt-1">
              <div className="text-white">
                <h2 className="bg-[#201f1f] rounded-md px-2 py-4  text-2xl font-semibold text-white">What is Netflix? <span className="float-right text-4xl font-bold pr-5">+</span></h2>
                <p className="text-xl hidden bg-[#201f1f] px-7 py-2">Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.
                  <br></br>You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!</p>
              </div>
            </div>
            
            <p className="py-3 text-xl text-center text-lg font-semi-bold text-white">
              Ready to watch? Enter your email to create or restart your membership.
            </p>
            <div className="py-3 px-1 flex gap-3 justify-center">
              <input placeholder="Enter Email" className="sm:p-2 p-1 border-gray-400 border-3 bg-gray-300 rounded-lg hover:border-white"></input>
              <button className="bg-red-600 rounded-lg sm:p-3 p-1">Get Started &gt;</button>
            </div>
          </div>
        </section>

        <section className="max-w-[100%] bg-black sm:py-16 py-10 border-t-4 border-t-[#ccc]">
          <div className="mx-auto max-w-[1170px] p-3">
            <h3 className="text-[#ccc] text-xl">Questions? Call <a className="underline" src="tel">000-800-100-8343</a></h3>
            <div className="grid sm:grid-cols-4 grid-cols-1 text-[#ccc] underline">
              <ul>
                <li className="pt-2"><a>FAQ</a></li>
                <li className="pt-2"><a>Investor Relations</a></li>
                <li className="pt-2"><a>Privacy</a></li>
                <li className="pt-2"><a>Speed Test</a></li>
              </ul>
              <ul className="py-2">
                <li className="pt-2"><a>Help Centre</a></li>
                <li className="pt-2"><a>Jobs</a></li>
                <li className="pt-2"><a>Cookie Preferences</a></li>
                <li className="pt-2"><a>Legal Notices</a></li>
              </ul>
              <ul className="py-2">
                <li className="pt-2"><a>Account</a></li>
                <li className="pt-2"><a>Ways to Watch</a></li>
                <li className="pt-2"><a>Corporate Information</a></li>
                <li className="pt-2"><a>Only on Netflix</a></li>
              </ul>
              <ul>
                <li className="pt-2"><a>Media Centre</a></li>
                <li className="pt-2"><a>Terms of Use</a></li>
                <li className="pt-2"><a>Contact Us</a></li>
              </ul>
            </div>
            <div className="relative">
              <svg className="text-[#ccc] absolute mt-3 ml-2" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="default-ltr-cache-4z3qvp e1svuwfo1" data-name="Languages" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.7668 5.33333L10.5038 5.99715L9.33974 8.9355L8.76866 10.377L7.33333 14H9.10751L9.83505 12.0326H13.4217L14.162 14H16L12.5665 5.33333H10.8278H10.7668ZM10.6186 9.93479L10.3839 10.5632H11.1036H12.8856L11.6348 7.2136L10.6186 9.93479ZM9.52722 4.84224C9.55393 4.77481 9.58574 4.71045 9.62211 4.64954H6.41909V2H4.926V4.64954H0.540802V5.99715H4.31466C3.35062 7.79015 1.75173 9.51463 0 10.4283C0.329184 10.7138 0.811203 11.2391 1.04633 11.5931C2.55118 10.6795 3.90318 9.22912 4.926 7.57316V12.6667H6.41909V7.51606C6.81951 8.15256 7.26748 8.76169 7.7521 9.32292L8.31996 7.88955C7.80191 7.29052 7.34631 6.64699 6.9834 5.99715H9.06968L9.52722 4.84224Z" fill="currentColor"></path></svg>
              <select name="" id="" className="bg-black text-[#ccc] px-6 rounded-lg border-gray-500 border-2 p-1">
                <option value="" className="bg-white text-black">Hindi</option>
                <option value="" className="bg-white text-black">English</option>
              </select>
            </div>
            <div><p className="text-[#ccc] pt-3 text-lg">Netflix India</p></div>

          </div>
        </section>
      </div>


    </div>
  )
}

export default App
