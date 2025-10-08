import OptionsButton from '@/compenents/OptionsButton'
import { NodeViewContent, NodeViewWrapper } from '@tiptap/react'
import { LucideGripVertical, LucidePlus, Trash2Icon } from 'lucide-react'


export const CustomParagraphComponent = () => {
  return (
    <NodeViewWrapper className="relative group  ">
      {/* Side buttons (shown only on hover) */}
      {/* <div className='hidden group-hover:block bg-red-200 z-50 group-focus-within:block'> */}
        <div className="flex absolute  -left-22 mx-1  ">
            <OptionsButton buttonImage={<Trash2Icon size={17} color='gray'/>}/>
            <OptionsButton buttonImage={<LucidePlus size={17} color='gray'/>}/>
            <OptionsButton buttonImage={<LucideGripVertical size={17} color='gray'/>}/>
        </div>
      {/* </div> */}

      {/* Paragraph content */}
      <NodeViewContent className="gap-y-2 " />
    </NodeViewWrapper>
  )
}

