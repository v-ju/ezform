import { ReactNodeViewRenderer } from '@tiptap/react'
import { mergeAttributes, Node } from '@tiptap/core'
import { CustomParagraphComponent } from '@/custom/nodeComponents'


export const CustomParagraph = Node.create({
  name: 'custom-paragraph',
  group: 'block',
  content: 'inline*',

  addAttributes() {
    return {
      count: {
        default: 0,
      },
      
    }
  },

  parseHTML() {
    return [{ tag: 'p' }]
  },

  renderHTML({ HTMLAttributes }) {
    return ['p', mergeAttributes(HTMLAttributes), 0]
  },

  addNodeView() {
    return ReactNodeViewRenderer(CustomParagraphComponent)
  },

  
})