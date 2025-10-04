import React from 'react'

type ButtonProp = {
    buttonImage: React.ReactNode,
    text?:string;
    color?:string
}
export default function OptionsButton({buttonImage,text,color}:ButtonProp){
  return (
    <div>
      <button className='p-1 hover:cursor-pointer hover:bg-gray-400 hover:rounded-sm flex my-auto' >
        <div className=''>
          {buttonImage}
        </div>
        {text && <div className='text-sm hover:text-gray-800 font-medium text-gray-600'>
          <span className='px-1'>{text}</span>
        </div>}
      </button>
    </div>
  );
};
