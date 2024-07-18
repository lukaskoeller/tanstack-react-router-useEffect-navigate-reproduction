import { useNavigate } from "@tanstack/react-router";
import { FC, useEffect } from "react";
import { aboutRoute } from "./router";

export const About: FC = () => {
    const navigate = useNavigate({ from: aboutRoute.fullPath });

    useEffect(() => {
        console.log('useEffect')
        void navigate({
            search: (old) => ({
                ...old,
                id: 'a1337b00c99',
            }),
        })
    }, [navigate]);

  return (
    <div>
      <h3>Welcome About!</h3>
    </div>
  );
};
