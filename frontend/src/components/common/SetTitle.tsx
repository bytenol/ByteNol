import { useEffect } from "react";

interface SetTitleProps {
  title: string;
}

function SetTitle({ title }: SetTitleProps) {
  useEffect(() => {
    document.title = `ByteNol - ${title}`;
  }, [title]);

  return null;
}

export default SetTitle;