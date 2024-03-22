import {
  faHome,
  faMagicWandSparkles,
  faTasks,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="flex justify-between bg-nav p-4">
      <div className="flex items-center space-x-20">
        <div>
          <FontAwesomeIcon
            icon={faMagicWandSparkles}
            className="icon pl-5"
            width={74}
            height={21}
          />
          <p className="font-bold text-xl">Magic Task</p>
        </div>
        <Link href="/">
          <FontAwesomeIcon icon={faHome} className="icon" />
          <p>Home</p>
        </Link>
        <Link href="/TaskPage/new">
          <FontAwesomeIcon icon={faTasks} className="icon" />
          <p>Create Task</p>
        </Link>
      </div>
      <div>
        <p className=" text-default-text">tugbadoan@gmail.com</p>
      </div>
    </nav>
  );
};

export default Nav;
