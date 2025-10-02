import Link from "next/link";
import { LucidePanelsTopLeft, LucideFile, LucideNavigation, LucidePanelTop, CircleQuestionMark,LucideZap, LucideGitPullRequest,LucideDivide, LucideEyeOff,LucideAtSign, LucideDollarSign } from "lucide-react";



export default function FormBuilder(){
    return (
        <div className="h-dvh overscroll-contain" >
            <div className="w-full h-12 ">
                
            </div>
            <div className="w-full h- h-full top-24 bg-blue-200">
                <div className="h-40 bg-amber-200">

                </div>
                <div className="w-full">                    
                    <div className="mx-auto w-225">
                        <div className="px-24  h-dvh ">
                            <div className=" pb-10 bg-pink-100 text-5xl">
                                <div>
                                    <input placeholder="Form Title" className="border-0 outline-0 font-extrabold"></input>
                                </div>
                            </div>
                            <div className=" bg-pink-400 text-5xl h-full">
                                <div className="pt-2"> 
                                    <button className="flex text-sm hover:bg-gray-400 hover:cursor-pointer">
                                        <LucideFile size={17} />
                                        <span>Press Enter to start from scratch</span>
                                    </button> 
                                </div>
                                <div className=" pt-2"> 
                                    <button className="text-sm flex">
                                        <LucidePanelsTopLeft size={17} />
                                        <span>Use a template</span>
                                    </button> 
                                </div>
                                <div className="text-sm pt-2">EZform is a form builder that 
                                    <em className="font-bold text-white bg-blue-300 border-0 rounded-sm px-1">works like a doc</em>.
                                </div>
                                <div className="text-sm py-2">Just type 
                                    <em className="font-bold text-white bg-blue-300 border-0 rounded-sm px-1 ">/</em> to insert form blocks and 
                                    <em className="font-bold text-white bg-blue-300 border-0 rounded-sm px-1">@</em> to mention question answers.
                                </div>
                                <div className="flex ">
                                    <div className="w-1/2">
                                        <div className="text-sm font-bold">Get Started</div>
                                        <div className="flex pt-2">
                                            <LucideNavigation size={17}/>
                                            <Link href={""} className="text-sm">Create your first form</Link>
                                        </div>
                                        <div className="flex  pt-2">
                                            <LucidePanelsTopLeft size={17} />
                                            <Link href={""} className="text-sm">Get Started with templates</Link>
                                        </div>
                                        <div className="flex pt-2">
                                            <LucidePanelTop size={17} />
                                            <Link href={""} className="text-sm">Embed your form</Link>
                                        </div>
                                        <div className="flex pt-2 ">
                                            <CircleQuestionMark size={17}/>
                                            <Link href={""} className="text-sm">Help Center</Link>
                                        </div>
                                        <div className="flex pt-2">
                                            <LucideZap size={17}/>
                                            <Link href={""} className="text-sm">Learn about EZform Pro</Link>
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <div className="text-sm font-bold">How-to-guides</div>
                                        <div className="flex pt-2">
                                            <LucideGitPullRequest size={17}/>
                                            <Link href={""} className="text-sm">Conditional logic</Link>
                                        </div>
                                        <div className="flex pt-2">
                                            <LucideDivide size={17}/>
                                            <Link href={""} className="text-sm">Calculator</Link>
                                        </div>
                                        <div className="flex pt-2">
                                            <LucideEyeOff size={17}/>
                                            <Link href={""} className="text-sm">Hidden Fields</Link>
                                        </div>
                                        <div className="flex pt-2">
                                            <LucideAtSign size={17}/>
                                            <Link href={""} className="text-sm">Mentions</Link>
                                        </div>
                                        <div className="flex pt-2"> 
                                            <LucideDollarSign size={17}/>
                                            <Link href={""} className="text-sm">Collect Payments</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>   
                </div>
            </div>
        </div>
    )
}