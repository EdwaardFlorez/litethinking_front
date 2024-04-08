import { useEffect } from "react";
import api from "../../services/api/api";
import Menu from "../../components/Menu";

export default function HomePage() {
  useEffect(() => {
    api.get("/api/check-status", {
      headers: {
        "Content-Type": "application/json",
      },
      data: {}
    });
  });

  return (
    <div className="bg-white py-24 sm:py-32 ml-10">
      <div className=" grid max-w gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-sm">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Company & Product Hub</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          Welcome As a Admin, you have full control to add, edit, and manage everything related to your platform
          </p>
        </div>
        <Menu></Menu>
      </div>
    </div>
  );
}
