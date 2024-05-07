"use client";
import VideoPlayer from "@/components/VideoPlayer";
import Controller from "@/components/Controller";
import BottomController from "@/components/BottomController";
import { useTheme } from "next-themes";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAppSelector } from "@/store";

export default function Home() {
    const { setTheme } = useTheme();
    useEffect(() => {
        setTheme("dark");
    }, []);

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24 relative">
            <VideoPlayer />
            <Controller />
            <BottomController />
        </main>
    );
}
