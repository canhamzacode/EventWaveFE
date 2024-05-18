'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { CiSearch } from 'react-icons/ci';

const AppHeader = () => {
  const [showSearch, setShowSearch] = useState(false);
  const router = useRouter();
  const [search, setSearch] = useState('' as string);

  const handleSearch = () => {
    if (search.length < 3) return;
    router.push(`/search/${search}`);
  };

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  return (
    <section className="w-full sm:py-0 py-[18px] bg-white flex justify-between items-center relative">
      <div className="flex items-center sm:gap-20 gap-3 py-[18px]">
        <Link href="/">
          <div className="w-[133px] h-[16px]">
            <Image src="/eventWaveLogo.svg" alt="eventwave logo" width={133} height={16} />
          </div>
        </Link>
        <div
          className={`max-w-[380px] w-[80%] py-3 rounded-lg border border-darkGrey items-center gap-2 px-4 ${showSearch ? 'flex absolute top-[90px] w-full left-' : 'sm:flex hidden'}`}
        >
          <CiSearch className="text-darkGrey" size={25} />
          <input
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            className="w-full border-none outline-none"
            onKeyDown={handleSearch}
          />
        </div>
      </div>
      <div className="flex items-center sm:gap-4 gap-2 text-black font-semibold">
        <button onClick={toggleSearch} className="sm:hidden flex">
          <CiSearch className="text-darkGrey" size={25} />
        </button>
        <div className="w-[40px] h-[40px] bg-slate-200 rounded-[50%]"></div>
        <p>User’s Name</p>
      </div>
    </section>
  );
};
export default AppHeader;
