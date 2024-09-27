import UserCard from "@/components/refer/user-card";
import { Input } from "antd";
import { SlMagnifier } from "react-icons/sl";

export default function ReferPage() {
  return (
    <div className="space-y-6">
      <h3 className="text-3xl font-medium">Whom do you want to refer?</h3>
      <div className="grid grid-cols-3 gap-6">
        <Input size="large" className="text-white" variant="outlined" placeholder="Search" prefix={<SlMagnifier />} />
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* make array of 9 length */}
        {Array.from({ length: 9 }).map((_item) => (
          <UserCard
            data={{
              email: "user@example.com",
              id: "1",
              image: "",
              name: "John Smith",
            }}
          />
        ))}
      </div>
    </div>
  );
}
