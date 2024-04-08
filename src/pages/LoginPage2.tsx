import { useMsal } from '@azure/msal-react';
import CompanyLogo from '../assets/Logo_Lite_Thinking.png'
import BannerLogin  from '../assets/banner_login.jpg'

export default function LoginPage2() {
    const { instance } = useMsal();

    const handleRedirect = () => {
        instance.loginRedirect();
    }

  return (
    <>
      {/* component */}
      <div className="bg-white ">
        <div className="flex justify-center h-screen">
          <div
            className="hidden bg-cover lg:block lg:w-2/3"
            style={{
              backgroundImage:
                "url("+ BannerLogin +")",
            }}
          >
            <div className="flex items-end h-full px-20 bg-gray-900 bg-opacity-40">
              <div className='mb-10'>
                <img src={CompanyLogo} width={200}/>
              </div>
            </div>
          </div>
          <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
            <div className="flex-1">
              <div className="text-center">
                <h2 className="text-4xl font-bold text-center text-gray-700 ">
                  Lite Thinking
                </h2>
                <p className="mt-3 text-gray-500 ">
                  Sign in to access your account
                </p>
              </div>
              <div className="mt-8">
                <form>
                  <div className="mt-6">
                    <button onClick={handleRedirect} className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-yellow-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                      Sign in
                    </button>
                  </div>
                </form>
                <p className="mt-6 text-sm text-center text-gray-400">
                  Don't have an account yet?{" "}
                  <a
                    href="#"
                    className="text-yellow-500 focus:outline-none focus:underline hover:underline"
                  >
                    Sign up
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
