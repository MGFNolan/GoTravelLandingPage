import { ReactElement } from "react";

interface PageProps {
    children: ReactElement;
}

export default function page(props: PageProps) {
  return <div>{props.children}</div>;
}
