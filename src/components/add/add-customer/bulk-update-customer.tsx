import { FaFileWord } from "react-icons/fa6";
import { RiFileExcel2Line } from "react-icons/ri";

const BulkUpdateCustomer = () => {
  return (
    <div className="mx-auto w-[60%] space-y-5 rounded-xl bg-accent p-8">
      <h1 className="text-xl font-medium">Upload File</h1>
      <div className="flex h-[200px] flex-col items-center justify-center gap-2 rounded-xl border border-dashed">
        <FaFileWord size={60} />
        <span>Drag & drop file here or choose file</span>
      </div>
      <div className="flex items-center justify-between">
        <span>Supported Format: XLS, XLSX</span>
        <span>Maximum Size: 25MB</span>
      </div>
      <div className="flex items-center justify-between gap-8 rounded-xl bg-background p-5 text-center">
        <div className="flex flex-col items-center gap-2">
          <span className="flex items-center gap-3 text-lg">
            <RiFileExcel2Line size={30} />
            File Example
          </span>
          <p className="text-xs">
            You can download the attached example file and use them as a starting point for your own file.
          </p>
        </div>
        <button className="rounded-md bg-accent px-6 py-2 text-white">Download</button>
      </div>
      <div className="flex justify-center">
        <button className="rounded-md bg-secondary-dark px-10 py-2">Upload</button>
      </div>
    </div>
  );
};

export default BulkUpdateCustomer;
