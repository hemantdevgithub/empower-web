import { Input } from "antd";
import { FaFacebook, FaInstagram, FaRegCopy, FaTwitter, FaWhatsapp } from "react-icons/fa6";

const Invite = () => {
  return (
    <div className="mx-auto w-[70%] space-y-5 rounded-xl bg-accent p-8">
      <h1 className="text-xl font-medium">Invite </h1>
      <div className="space-y-2">
        <h3>Link</h3>
        <div className="flex h-[45px] gap-3">
          <Input className="h-full border border-white" placeholder="http//" />
          <button className="flex h-full w-[200px] items-center gap-3 rounded-md bg-background px-7 py-3 text-sm text-white">
            <FaRegCopy />
            <span>Copy Link</span>
          </button>
        </div>
      </div>
      <div className="space-y-2">
        <h3>Invite Email</h3>
        <div className="flex h-[45px] gap-3">
          <Input className="h-full border border-white" placeholder="Email" />
          <button className="h-full w-[200px] rounded-md bg-background px-7 py-3 text-sm text-white">
            Send Invite
          </button>
        </div>
      </div>
      <div className="space-y-2">
        {Array.from({ length: 3 }).map((_x, i) => (
          <div key={i} className="flex items-center justify-between rounded-md bg-background px-4 py-2">
            <div className="flex items-center gap-4">
              <span className="flex size-8 items-center justify-center rounded-full bg-black text-lg">E</span>
              <span>example@gmail.com</span>
            </div>
            <span>Invite sent</span>
          </div>
        ))}
      </div>
      <div className="space-y-2">
        <h1 className="text-xl font-medium">Share With</h1>
        <div className="flex gap-3 text-3xl">
          <FaWhatsapp />
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
        </div>
      </div>
    </div>
  );
};

export default Invite;
