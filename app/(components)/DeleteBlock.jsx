"use client";

import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import { API_URL } from "./config";

const DeleteBlock = ({ id }) => {
  const router = useRouter();

  const deleteTask = async () => {
    const res = await fetch(`${API_URL}/api/Tasks/${id}`, {
      method: "DELETE",
    });
    if (res.ok) {
      router.refresh();
    }
  };

  return (
    <FontAwesomeIcon
      icon={faX}
      className=" text-red-400 hover:cursor-pointer hover:text-red-200"
      onClick={deleteTask}
    />
  );
};

export default DeleteBlock;
