"use client";

import { usePathname, useRouter } from "next/navigation";
import { animatePageOut } from "@/components/ui/transition";

interface Props {
  href: string;
  lebel: string;
}

const TransitionLink = ({ href, lebel }: Props) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = () => {
    if (pathname != href) {
      animatePageOut(href, router);
    }
  };

  return (
    <button
      className="text-lg hover:text-zinc-400" color="foreground"
      onClick={handleClick}
    >
      {lebel}
    </button>
  );
};

export default TransitionLink;
