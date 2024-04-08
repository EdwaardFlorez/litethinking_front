import { useState } from "react";
import api from "../services/api/api";

export default function CreeateProduct() {
  const INITIAL_STATE = {
    nitCompany: "",
    nameCompany: "",
    addressCompany: "",
    telephoneCompany: "",
  };
  const [form, setForm] = useState(INITIAL_STATE);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [event.target.id]: event.target.value,
    });
  };

  const createCompanySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(
      "submit: " + form.nitCompany,
      form.nameCompany,
      form.addressCompany,
      form.telephoneCompany
    );

    api.post("/api/company/create", JSON.stringify({
        "nit": form.nitCompany,
        "name" : form.nameCompany,
        "address" : form.addressCompany,
        "telephone" : form.telephoneCompany
    }))

    setForm(INITIAL_STATE);
  };

  return (
    <form onSubmit={createCompanySubmit}>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Company Information
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Nit company
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  name="nitCompany"
                  id="nitCompany"
                  value={form.nitCompany}
                  onChange={handleChange}
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="last-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Name company
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="nameCompany"
                  id="nameCompany"
                  value={form.nameCompany}
                  onChange={handleChange}
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="last-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Address Company
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="addressCompany"
                  id="addressCompany"
                  value={form.addressCompany}
                  onChange={handleChange}
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Telephone Company
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="telephoneCompany"
                  id="telephoneCompany"
                  value={form.telephoneCompany}
                  onChange={handleChange}
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="button"
          className="text-sm font-semibold leading-6 text-gray-900"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>
  );
}
