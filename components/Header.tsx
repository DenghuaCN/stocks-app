import Image from "next/image";
import Link from "next/link";
import NavItems from "./NavItems";
import UserDropdown from "./UserDropdown";

const Header = () => {
  return (
    <header className="sticky top-0 header">
      <div className="container header-wrapper">
        <Link href="/" className="text-2xl font-bold">
          <Image
            src="/assets/icons/logo.svg"
            alt="Signalist logo"
            width={140}
            height={32}
            className="h-8 w-auto cursor-pointer"
          />
        </Link>

        {/* 导航组件 */}
        <nav className="hidden sm:block">
          <NavItems />
        </nav>

        {/* 下拉组件 */}
        <UserDropdown />

      </div>
    </header>
  );
};

export default Header;
