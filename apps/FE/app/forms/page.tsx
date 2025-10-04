
import OptionsButton from "@/compenents/OptionsButton";
import Tiptap from "@/compenents/TipTap";
import { Hexagon, LucidePanelTop, Palette } from "lucide-react";

export default function Form(){
    return (
        <div className="h-dvh overscroll-contain" >
            <div className="w-full h-12 ">
                
            </div>
            <div className="w-full h- h-full top-24 bg-blue-200">
                <div className="h-40 bg-amber-200">

                </div>
                <div className="w-full">                    
                    <div className="mx-auto w-225">
                        <div className="px-24">   
                                                    
                            <div className="pb-10 group bg-pink-100 text-5xl">                               
                                <div className="relative ">
                                    <div className="hidden group-hover:block absolute -top-7 "> 
                                        <div className="flex gap-2">
                                            <OptionsButton buttonImage={<Hexagon size={20} color='gray' />} text="Add Logo"/>
                                            <OptionsButton buttonImage={<LucidePanelTop size={18} color='gray'/>} text="Add Cover"/>
                                            <OptionsButton buttonImage={<Palette size={18} color='gray'/>} text="Customize"/>
                                        </div>
                                    </div> 
                                    <input placeholder="Form Title" className="border-0 outline-0 font-extrabold text-gray-600 w-full"/>                                     
                                </div>                                
                            </div>
                            
                        </div>
                        <div className="">
                            <Tiptap/>                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

