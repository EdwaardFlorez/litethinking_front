import { Link, Outlet } from 'react-router-dom';



export default function Menu() {



    return ( 
        <div className="bg-white  col-span-2 max-w-max">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 ">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the blog</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Learn how to grow your business with our expert advice.
          </p>
        </div>
        <Outlet/>
      </div>
    </div>
    );
}