import { useNavigate } from "@tanstack/react-router";
import { FC, useEffect, useState } from "react";
import { newsRoute } from "./router";

export const News: FC = () => {
  const navigate = useNavigate({ from: newsRoute.fullPath });
  const { newsId } = newsRoute.useSearch();
  const [news, setNews] = useState<Record<string, unknown>>();

  setTimeout(() => {
    setNews({
        title: "News Title",
        content: "News Content",
        id: 1,
    });
  }, 1000);

  useEffect(() => {
    if (!newsId && news?.id) {
      console.log("useEffect after if:true");
      void navigate({
        search: (old) => ({
          ...old,
          newsId: news.id,
          title: news.title,
          content: news.content,
        }),
        params: true,
        replace: true,
      });
    }
  }, [navigate, news?.id, newsId]);

  return (
    <div>
      <h3>Welcome News!</h3>
    </div>
  );
};
