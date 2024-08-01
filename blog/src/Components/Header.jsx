import React from "react";
import { useDisclosure } from "@chakra-ui/hooks";
import Logo from "../images/Logo";
import AddPostForm from "./AddPostForm";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <header className="bg-white dark:bg-gray-800 w-full px-5 py-1 shadow-md mx-auto">
        <div className="flex align-center justify-between mx-auto max-w-6xl">
          <div className="flex">
            <a href="/" title="Choc Home Page" className="flex items-center">
              <Logo />
            </a>
          </div>
          <div className="flex align-center">
            <a
              href="/posts"
              className="block text-gray-800 dark:text-white font-bold text-lg px-2 py-1 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              Posts
            </a>
            <button
              className="ml-10 bg-teal-500 hover:bg-teal-700 text-white font-bold py-1 px-4 rounded-sm text-sm"
              onClick={onOpen}
            >
              New Post
            </button>
          </div>
        </div>
      </header>

      <AddPostForm isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default Header;
