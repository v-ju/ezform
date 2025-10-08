'use client'

import { useEditor, EditorContent, } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { Placeholder } from '@tiptap/extensions/placeholder'
import { CustomParagraph } from '@/extensions/componentExtended'
import { Document } from '@tiptap/extension-document'



const CustomDocument = Document.extend({
  content: 'custom-paragraph block*',
})


const Tiptap = () => {
  const editor = useEditor({
    extensions: [StarterKit.configure({ document: false, paragraph: false}),
      CustomDocument,
      CustomParagraph,
      Placeholder.configure({
          placeholder : ({ node }) => {
            if (node.type.name === 'custom-paragraph' && node.content.size === 0) {
              return 'Type "/" to insert block';
            }
            return '';
          },
          showOnlyWhenEditable: true,
      }),
        
    ],
    content:"",
    immediatelyRender: false,
    
  })

  return <EditorContent editor={editor} className='py-2 text-md leading-7 px-24 ' > 
    
  </EditorContent>

}

export default Tiptap