import Image from "next/image";
import { ImgHTMLAttributes, SyntheticEvent } from "react";
export function UserAvatar(options: { displayName: string; avatarUrl: string | null }) {
  const { displayName, avatarUrl } = options;
  return (
    <>
      <Image
        src={
          avatarUrl
            ? avatarUrl
            : `https://api.dicebear.com/5.x/initials/png?seed=${displayName}&radius=50&backgroundType=gradientLinear`
        }
        onError={(event: SyntheticEvent<HTMLImageElement, Event>) =>
          (event.currentTarget.src = `https://api.dicebear.com/5.x/initials/png?seed=${displayName}&radius=50&backgroundType=gradientLinear`)
        }
        alt={`${displayName}'s avatar`}
        width={30}
        height={30}
      />
    </>
  );
}
