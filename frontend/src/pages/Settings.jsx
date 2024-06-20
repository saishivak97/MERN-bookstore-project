import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import axios from "axios";

let backendUrl = "https://mern-bookstore-project.onrender.com"

const Settings = () => {
  const [ProfileData, setProfileData] = useState();
  const [Value, setValue] = useState({ address: "" });
  const change = (e) => {
    const { name, value } = e.target;
    setValue({ ...Value, [name]: value });
  };
  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
  };

  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get(
        `${backendUrl}/api/v1/getUserData`,
        { headers }
      );
      setProfileData(response.data);
      setValue({ address: response.data.address });
    };
    fetch();
  }, []);

  const updateAddress = async () => {
    const res = await axios.put(
      `${backendUrl}/api/v1/update-user-address`,
      Value,
      {
        headers,
      }
    );
    alert(res.data.message);
  };
  return (
    <>
      {" "}
      {!ProfileData && <Loader />}{" "}
      {ProfileData && (
        <div className="h-[100%] p-0 md:p-4 text-zinc-100 bg-violet-800 rounded-lg">
          <h1 className=" text-3xl md:text-5xl font-semibold text-zinc-200 mb-8">
            Settings
          </h1>
          <div className="flex gap-12">
            <div className="">
              <label htmlFor="" >Username</label>
              <p className="p-2 rounded bg-white mt-2 font-semibold text-violet-800">
                {ProfileData.username}
              </p>
            </div>
            <div className="">
              <label htmlFor="">Email</label>
              <p className="p-2 rounded bg-white mt-2 font-semibold text-violet-800">
                {ProfileData.email}
              </p>
            </div>
          </div>
          <div className="mt-4 flex flex-col ">
            <label htmlFor="">Address</label>
            <textarea
              className="p-2 rounded bg-white mt-2 font-semibold text-violet-800"
              rows="5"
              placeholder="Address"
              name="address"
              value={Value.address}
              onChange={change}
            />
          </div>
          <div className="mt-4 flex justify-end ">
            <button
              className="hover:bg-purple-500 hover:text-white font-semibold px-3 py-2 rounded bg-white text-violet-800 transition-all duration-300"
              onClick={updateAddress}
            >
              Update
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Settings;
