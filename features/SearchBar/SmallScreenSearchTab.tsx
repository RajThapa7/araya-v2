import { MotionDiv } from "@/components";
import useLocalStorage from "@/hooks/useLocalStorage";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next-nprogress-bar";
import { useSearchParams } from "next/navigation";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";

export const SmallScreenSearchTab = ({
  isOpen,
  setIsOpen,
  searchTabRef,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  searchTabRef: any;
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearchHistoryOpen, setIsSearchHistoryOpen] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const searchParams = useSearchParams();
  const urlSearchTerm = searchParams.get("query") || "";

  const [recentSearches, setRecentSearches, removeRecentSearches] =
    useLocalStorage<string>("recentSearch", "");

  useEffect(() => {
    setSearchTerm(urlSearchTerm);
  }, [urlSearchTerm]);

  useEffect(() => {
    isOpen && inputRef.current?.focus();
  }, [inputRef, isOpen]);

  useEffect(() => {
    !isOpen && setIsSearchHistoryOpen(false);
  }, [isOpen]);

  const router = useRouter();

  return (
    <MotionDiv
      ref={searchTabRef}
      transition={{ ease: "linear" }}
      animate={isOpen ? { y: 70 } : { y: -200 }}
      className={`absolute left-0 right-0 z-[999] w-full bg-gray-200 shadow-lg lg:hidden`}
    >
      <div className="relative flex flex-1 flex-col px-4 py-4">
        <input
          onFocus={() => setIsSearchHistoryOpen(true)}
          ref={inputRef}
          type={"text"}
          onChange={(e) => {
            setSearchTerm(e.target.value.replace(/s{2,}/g, " ").trimStart());
            if (e.target.value === "") {
              return setIsSearchHistoryOpen(false);
            }
            setIsSearchHistoryOpen(true);
          }}
          value={searchTerm}
          placeholder="Search in Araya Arts"
          className="w-full rounded-lg border-none px-8 py-2 text-gray-800 outline-none ring-1 ring-gray-300 focus:ring-accent"
          onKeyDown={(e) => {
            if (searchTerm === "") {
              return;
            }
            if (e.key === "Enter") {
              router.push(`/store/search?query=${searchTerm}`);
              setIsOpen(false);
              setRecentSearches((value) => {
                const arr = JSON.parse(value || "[]");
                if (!arr.includes(searchTerm.trim())) {
                  arr.unshift(searchTerm);
                }
                return JSON.stringify(arr);
              });
            }
          }}
        />
        <button
          className="transition-smooth absolute right-4 h-10 max-h-fit rounded-r-lg bg-accent px-3 hover:bg-accent-dark"
          onClick={(e) => {
            if (searchTerm === "") {
              return;
            }
            router.push(`/store/search?query=${searchTerm}`);
            setIsOpen(false);
          }}
        >
          <MagnifyingGlassIcon width={20} color="white" strokeWidth={20} />
        </button>
        {isSearchHistoryOpen && (
          <div className="absolute left-3 top-[59px] w-[calc(100%-24px)] rounded-md bg-white px-4 py-4 shadow-xl">
            {recentSearches !== null ? (
              <>
                <div className="flex flex-row justify-between px-5 items-center mb-1">
                  <p className="text-sm text-gray-600">search history</p>
                  <button
                    className="text-xs text-blue-600"
                    onClick={() => {
                      removeRecentSearches();
                      setIsSearchHistoryOpen(false);
                    }}
                  >
                    CLEAR
                  </button>
                </div>
                <table className="w-full border-collapse">
                  <tbody className="">
                    {JSON.parse(recentSearches || "[]")
                      ?.slice(0, 10)
                      ?.map((key: string) => (
                        <tr
                          key={key}
                          className="cursor-pointer border-b-2 border-gray-300 text-sm text-body last:border-none hover:bg-gray-200"
                        >
                          <td
                            onClick={() => {
                              router.push(`/store/search?query=${key}`);
                              setIsOpen(false);
                            }}
                            className="w-full break-words px-5 pb-2 pt-3 font-semibold"
                          >
                            {key}
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </>
            ) : (
              <p className="px-5 text-sm text-gray-600">
                your recent searches will appear here
              </p>
            )}
          </div>
        )}
      </div>
    </MotionDiv>
  );
};
