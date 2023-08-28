import avatar from './img/call.png';
// import { FiGithub } from 'react-icons/fi';
import { FaLinkedinIn } from 'react-icons/fa6';
import { FaRegEnvelope } from 'react-icons/fa6';

function App() {
  return (
    <>
      <div className="svg-bg grid min-h-screen content-center p-4">
        {/* <nav>
            switch
          </nav> */}
        <header className="card-bg transform3d group mx-auto w-full rounded-2xl p-6 text-center text-[#1d1d1f] sm:min-h-[280px] sm:w-[500px]">
          <div className="mx-auto -mt-[105px] mb-8 grid h-36 w-36 place-content-center rounded-full">
            <div className="relative transition duration-500 ease-linear group-hover:scale-105">
              <img
                className="avatar animate-wiggle rounded-full drop-shadow-xl"
                src={avatar}
                alt="avatar"
              />
              <span className="absolute bottom-1 right-6 h-3.5 w-3.5 rounded-full border-2 border-white bg-green-400 dark:border-gray-800"></span>
            </div>
          </div>
          <div className="my-6">
            <h1 className="text-3xl font-extrabold tracking-tight">
              Dominik Kolarský
            </h1>
            <h2 className="mt-2 text-2xl font-bold">Web developer</h2>
          </div>
          <div className="mb-3">
            <ul className="flex justify-center space-x-1">
              <li>
                <a
                  href="mailto:kolarskydominik@gmail.com"
                  className="link grid place-content-center rounded-full p-2 text-3xl transition duration-300 ease-linear hover:scale-110 hover:bg-slate-900/10 hover:text-pink-700/70">
                  <FaRegEnvelope />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/kolarskydominik/"
                  className="link grid place-content-center rounded-full p-2 text-3xl transition duration-300 ease-linear hover:scale-110 hover:bg-slate-900/10 hover:text-blue-700">
                  <FaLinkedinIn />
                </a>
              </li>
              {/* <li className="link grid place-content-center rounded-full p-2 text-3xl hover:scale-90 hover:bg-slate-900/10 hover:text-blue-700">
                <a href="https://github.com/dominikkolarsky">
                  <FiGithub />
                </a>
              </li> */}
            </ul>
          </div>
        </header>
        <footer className="absolute bottom-5 left-[calc(50vw-110px)] w-[220px] px-8 text-center text-slate-300/30">
          <div className="mx-auto mb-3 h-1 w-24 rounded-full bg-gradient-to-r from-slate-600/20 to-gray-400/20"></div>
          <div className="text-xs">
            © 2023 Dominik Kolarský
            <br />
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
