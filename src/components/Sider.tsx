"use client";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { DoubleArrowDownIcon } from "@radix-ui/react-icons";
import { useAppSelector, useAppDispatch } from "@/store";
import { setSeletedEpisode } from "@/store/controller.slice";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

const Sider = () => {
    const episodes = useAppSelector((state) => state.controller.episodes);
    const selected = useAppSelector((state) => state.controller.selected);
    const dispatch = useAppDispatch();
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline">
                    Episode <DoubleArrowDownIcon></DoubleArrowDownIcon>
                </Button>
            </SheetTrigger>
            <SheetContent side="bottom">
                <SheetHeader>
                    <SheetTitle>Spongebob Season 2</SheetTitle>
                </SheetHeader>
                <div className="flex flex-row overflow-x-auto gap-2 w-full justify-center mt-9">
                    {episodes.map((ele, i) => (
                        <Button
                            onClick={() =>
                                dispatch(setSeletedEpisode(ele.name))
                            }
                            variant={i !== selected.id ? "outline" : "default"}
                            className="w-[30px] h-[30px] flex items-center justify-center"
                        >
                            <CardContent className="flex aspect-square items-center justify-center p-6">
                                <span className="text-md font-semibold">
                                    {i + 1}
                                </span>
                            </CardContent>
                        </Button>
                    ))}
                </div>
            </SheetContent>
        </Sheet>
    );
};

export default Sider;
