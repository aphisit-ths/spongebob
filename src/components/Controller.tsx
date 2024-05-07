"use client";
import React from "react";
import { Slider } from "@/components/ui/slider";
import { useAppSelector } from "@/store";
const Controller = () => {
    const selected = useAppSelector((state) => state.controller.selected);
    return (
        <div className="absolute">
            <p>Spongbob Season 2 Episode {selected.id + 1}</p>
        </div>
    );
};

export default Controller;
