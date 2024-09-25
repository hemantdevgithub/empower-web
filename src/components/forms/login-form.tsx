/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, Input, Button, Checkbox, Typography } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useLoginMutation } from "@/redux/features/auth/authApi";
import { logIn, selectToken } from "@/redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { loginValidationSchema } from "@/schemas/authValidationSchema";
import { TUser } from "@/types/global.type";
import { jwtDecode } from "jwt-decode";
import { Navigate, useNavigate } from "react-router-dom";
import { message } from "antd";

const { Text, Link } = Typography;

export function LoginForm() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [login] = useLoginMutation();
  const token = useAppSelector(selectToken);

  const { control, handleSubmit, reset } = useForm<z.infer<typeof loginValidationSchema>>({
    resolver: zodResolver(loginValidationSchema),
    defaultValues: {
      email: import.meta.env.VITE_LOGIN_EMAIL,
      password: import.meta.env.VITE_LOGIN_PASSWORD,
    },
  });

  if (token) {
    return <Navigate to="/" />;
  }

  const onSubmit = async (values: z.infer<typeof loginValidationSchema>) => {
    const hide = message.loading("Logging in...", 0);
    try {
      const response = await login(values).unwrap();
      const token = response?.data?.accessToken;
      if (token) {
        const user = jwtDecode(token) as TUser;
        dispatch(logIn({ token, user }));
        message.success("Logged in successfully.");
        navigate("/profile");
        reset();
      }
    } catch (error: any) {
      message.error(
        error?.status === 401 || error?.status === 403 ? "Email or password is incorrect." : "Failed to login."
      );
    } finally {
      hide();
    }
  };

  return (
    <Form onFinish={handleSubmit(onSubmit)} layout="vertical" style={{ width: "100%" }}>
      <Form.Item label={<span style={{ color: "white" }}>Email</span>}>
        <Controller
          name="email"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <>
              <Input
                {...field}
                prefix={<UserOutlined />}
                placeholder="Your Email"
                style={{ backgroundColor: "#333", borderColor: "#555", color: "white" }}
              />
              {error && <Text type="danger">{error.message}</Text>}
            </>
          )}
        />
      </Form.Item>
      <Form.Item label={<span style={{ color: "white" }}>Password</span>}>
        <Controller
          name="password"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <>
              <Input.Password
                {...field}
                prefix={<LockOutlined />}
                placeholder="Your Password"
                style={{ backgroundColor: "#333", borderColor: "#555", color: "white" }}
              />
              {error && <Text type="danger">{error.message}</Text>}
            </>
          )}
        />
      </Form.Item>
      <Form.Item>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Checkbox style={{ color: "white" }}>Remember Me</Checkbox>
          <Link href="#">Forgot Password?</Link>
        </div>
      </Form.Item>
      <Form.Item>
        <Button type="primary" className="w-full" htmlType="submit">
          Login
        </Button>
      </Form.Item>
    </Form>
  );
}
