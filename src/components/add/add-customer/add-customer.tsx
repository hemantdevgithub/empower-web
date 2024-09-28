import { Input, Radio } from "antd";

const AddCustomer = () => {
  return (
    <div className="space-y-5 rounded-xl bg-accent p-6">
      <h1 className="text-xl font-medium">Customer Details</h1>
      <div className="grid grid-cols-2 gap-5">
        <div className="space-y-2">
          <span>First Name*</span>
          <Input className="h-[45px] border border-white px-4" placeholder="Name" />
        </div>
        <div className="space-y-2">
          <span>Last Name*</span>
          <Input className="h-[45px] border border-white px-4" placeholder="Name" />
        </div>
        <div className="space-y-2">
          <span>Email*</span>
          <Input className="h-[45px] border border-white px-4" placeholder="Email" />
        </div>
        <div className="space-y-2">
          <span>Location*</span>
          <Input className="h-[45px] border border-white px-4" placeholder="Bangalore" />
        </div>
        <div className="space-y-2">
          <span>Designation*</span>
          <Input className="h-[45px] border border-white px-4" placeholder="HR" />
        </div>
        <div className="space-y-2">
          <span>Company Name*</span>
          <Input className="h-[45px] border border-white px-4" placeholder="HR" />
        </div>
        <div className="flex gap-5">
          <span>Leads*</span>
          <Radio.Group buttonStyle="outline" block>
            <Radio value={"free"}>Free</Radio>
            <Radio value={"paid"}>Paid</Radio>
          </Radio.Group>
        </div>
      </div>
      <div className="flex justify-center">
        <button className="mx-auto rounded-md bg-white px-8 py-2 text-accent">Upload</button>
      </div>
    </div>
  );
};

export default AddCustomer;
