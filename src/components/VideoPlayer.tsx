"use client";
import { useState, useEffect, useRef } from "react";
import ReactPlayer from "react-player";
import { useAppSelector, useAppDispatch } from "@/store";
import { next } from "@/store/controller.slice";

const VideoPlayer = () => {
    const playerRef = useRef(null);
    const [hasWindow, setHasWindow] = useState(false);
    const play = useAppSelector((state) => state.controller.play);
    const episode = useAppSelector((state) => state.controller.selected);
    const [timeoutId, setTimeoutId] = useState(null);
    const dispatch = useAppDispatch();
    const handleVideoEnd = () => {
        dispatch(next());
    };
    const handleVideoStart = () => {
        if (playerRef.current) {
            playerRef.current.seekTo(45, "seconds");
        }
    };
    useEffect(() => {
        if (typeof window !== "undefined") {
            setHasWindow(true);
        }
    }, []);
    const handleUserActivity = () => {
        clearTimeout(timeoutId);
        const newTimeoutId = setTimeout(() => {
            if (playerRef.current) {
                playerRef.current.pause();
            }
        }, 2 * 60 * 60 * 1000);

        setTimeoutId(newTimeoutId);
    };
    return (
        <>
            {hasWindow && (
                <div className="mb-20px bg-grey-600 ">
                    <ReactPlayer
                        ref={playerRef}
                        width={900}
                        height={600}
                        url={episode.name}
                        playing={play}
                        onEnded={handleVideoEnd}
                        onStart={handleVideoStart}
                        onMouseMove={handleUserActivity}
                        onPlay={handleUserActivity}
                        onPause={handleUserActivity}
                        controls
                    />
                    <source src={episode.name} type="video/mp4" />
                </div>
            )}
        </>
    );
};

export default VideoPlayer;
