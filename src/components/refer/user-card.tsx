import { colors } from "@/constants/theme";
import { Avatar, Button, Card } from "antd";
import { FC } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

type TUserCard = {
  id: string;
  name: string;
  email: string;
  image: string;
};

const UserCard: FC<{ data: TUserCard }> = ({ data: { email, id, image, name } }) => {
  return (
    <Card>
      <div className="flex items-center justify-between">
        <>
          {image ? (
            <Avatar src={<img src={image} alt="avatar" />} size="large" gap={3} />
          ) : (
            <Avatar style={{ backgroundColor: colors.secondary[0], verticalAlign: "middle" }} size="large" gap={3}>
              {name.slice(0, 1)}
            </Avatar>
          )}
        </>

        <Button className="text-white" icon={<BsThreeDotsVertical />} ghost />
      </div>

      <h3 className="mt-4 text-lg">{name}</h3>
      <p>{email}</p>
    </Card>
  );
};

export default UserCard;
