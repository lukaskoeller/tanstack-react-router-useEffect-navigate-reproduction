import { useSearch } from "@tanstack/react-router";
import { FC } from "react";

export const Repro3: FC = () => {
    const search = useSearch({ from: "/repro3" });
    console.log('search', search);
    
    return (
        <div>
        <h3>Welcome Repro3!</h3>
        </div>
    );
}