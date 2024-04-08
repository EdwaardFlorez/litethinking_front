import { Link } from "react-router-dom";
import CompanyLogo from '../assets/banner_login.jpg'

export default function Operations() {
    return ( 
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <article key="1" className="flex max-w-xl flex-col items-start justify-between">
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime="{post.datetime}" className="text-gray-500">
                  admin option
                </time>
                <a
                  
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                  Company
                </a>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <Link to="/operation/create-company">
                        Create Company
                    </Link>

                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">Esta opción te permite crear una compañia desde cero</p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <img src={CompanyLogo} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                
              </div>
            </article>
            <article key="2" className="flex max-w-xl flex-col items-start justify-between">
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime="{post.datetime}" className="text-gray-500">
                  admin option
                </time>
                <a
                  
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                  Product
                </a>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">

                    <Link to="/operation/create-product">
                        Create Product
                    </Link>

                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">Esta opción te permite crear un producto desde cero</p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <img src={CompanyLogo} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                
              </div>
            </article>
            <article key="3" className="flex max-w-xl flex-col items-start justify-between">
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime="{post.datetime}" className="text-gray-500">
                  admin option
                </time>
                <a
                  
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                  Product
                </a>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                <Link to="/operation/list-products">
                        List Products
                    </Link>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">Esta opción te permite acceder a todos tus productos, eliminar, edítar</p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4 ">
                <img src={CompanyLogo} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
              </div>
            </article>
        </div>
    );
}

