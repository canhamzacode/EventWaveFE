import { IoMdClose } from 'react-icons/io';

interface QueryParamsProps {
  queryParams?: string[];
  onRemove: (index: number) => void;
  onClear: () => void;
}

const QueryParams = ({ queryParams, onRemove, onClear }: QueryParamsProps) => (
  <div className="flex w-full items-center gap-4">
    {queryParams?.map((param, index) => (
      <button className="flex items-center w-[149] rounded-lg px-4 py-3 border gap-4" key={index}>
        <p className="capitalize">{param}</p>
        <IoMdClose size={25} onClick={() => onRemove(index)} />
      </button>
    ))}
    {queryParams && queryParams?.length > 0 && (
      <button className="text-primary underline" onClick={onClear}>
        Clear all
      </button>
    )}
  </div>
);

export default QueryParams;
