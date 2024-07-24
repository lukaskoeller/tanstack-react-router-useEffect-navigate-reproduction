import { useNavigate } from "@tanstack/react-router";
import { FC, useEffect } from "react";

export const News: FC = () => {
  const navigate = useNavigate({ from: "/news" });

  useEffect(() => {
    void navigate({
      search: (old) => {
        console.log("%cnavigate:firstId", "color: green", {
          old,
          new: {
            ...old,
            firstId: 1337,
          },
        });

        return {
          ...old,
          firstId: 1337,
        };
      },
    });
  }, [navigate]);

  useEffect(() => {
    void navigate({
      search: (old) => {
        console.log("%cnavigate:secondId", "color: red", {
          old,
          new: {
            ...old,
            secondId: 42,
          },
        });

        return {
          ...old,
          secondId: 42,
        };
      },
    });
  }, [navigate]);

  return (
    <div>
      <h3>Welcome News!</h3>
    </div>
  );
};
