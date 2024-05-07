"use client";
import React from "react";
import { useAppDispatch } from "@/store";
import { next, prev } from "@/store/controller.slice";
import { Button } from "@/components/ui/button";
import { CarouselEpisode } from "./CarouselEpisode";

import Sider from "./Sider";
import {
    DoubleArrowRightIcon,
    DoubleArrowLeftIcon,
} from "@radix-ui/react-icons";

const BottomController = () => {
    const dispatch = useAppDispatch();
    return (
        <div className=" w-full flex flex-row justify-between mt-10 text-xl">
            <Button
                variant="outline"
                size="icon"
                onClick={() => dispatch(prev())}
            >
                {" "}
                <DoubleArrowLeftIcon className="" />
            </Button>
            <Sider />
            <Button
                variant="outline"
                size="icon"
                onClick={() => dispatch(next())}
            >
                <DoubleArrowRightIcon className="" />
            </Button>
        </div>
    );
};

export default BottomController;
