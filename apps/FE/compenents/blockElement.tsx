export default function BlockElement(){
    return (
        <div className="py-2 empty:before:content-[attr(data-placeholder)] before:text-gray-400 before:left-2 before:top-2 before:pointer-events-none empty:before:block outline-none bg-blue-300" contentEditable="true" data-placeholder="Type '/' to insert block" data-empty>
            
        </div>
    )
}