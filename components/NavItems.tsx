'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

import { NAV_ITEMS } from "@/lib/constants";

const NavItems = () => {
  const pathname = usePathname();

  /**
   * @description 判断当前路径是否为激活状态
   * @param path
   */
  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/'
    }

    return pathname.startsWith(path); // 其他路径使用 startsWith 判断
  }


  return (
    <ul className="flex flex-col sm:flex-row p-2 gap-3 sm:gap-10 font-medium ">
      {NAV_ITEMS.map((item) => {
        return (
          <li key={item.href}>
            <Link
              href={item.href}
              className={
                `hover:text-yellow-500 transition-colors
                  ${isActive(item.href) ? 'text-gray-100' : ''}
                `
              }
            >
              {item.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavItems;
