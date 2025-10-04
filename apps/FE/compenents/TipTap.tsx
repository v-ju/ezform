'use client'

import { useEditor, EditorContent, } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { Placeholder } from '@tiptap/extensions/placeholder'
import OptionsButton from './OptionsButton'
import { LucideGripVertical, LucidePlus, Trash2Icon } from 'lucide-react'

const Tiptap = () => {
  const editor = useEditor({
    extensions: [StarterKit,
        Placeholder.configure({
            placeholder : 'Type "/" to insert block',
            showOnlyWhenEditable: true,
        })
    ],
    content:"",
    immediatelyRender: false,
    
  })

  return <EditorContent editor={editor} className='py-2 text-md bg-pink-600 leading-7 px-24 relative group'>
    <div className='hidden group-hover:block group-focus-within:block'>
      <div className="flex absolute left-3 mx-1 ">
          <OptionsButton buttonImage={<Trash2Icon size={17} color='gray'/>}/>
          <OptionsButton buttonImage={<LucidePlus size={17} color='gray'/>}/>
          <OptionsButton buttonImage={<LucideGripVertical size={17} color='gray'/>}/>
      </div>
    </div>
  </EditorContent>
}

export default Tiptap