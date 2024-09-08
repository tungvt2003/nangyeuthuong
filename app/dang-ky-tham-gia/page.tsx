"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@components/ui/button";
import { Input } from "@components/ui/input";
import { Textarea } from "@components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  ten: z.string().nonempty("Tên không được để trống"),
  email: z.string().email("Email không hợp lệ"),
  soDienThoai: z
    .string()
    .nonempty("Số điện thoại không được để trống")
    .regex(/^\d+$/, "Số điện thoại chỉ được chứa số"),
  diaChi: z.string().optional(),
  thoiGian: z.string().optional(),
  gioiThieu: z.string().optional(),
});

export default function RegisterVolunteerPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ten: "",
      email: "",
      soDienThoai: "",
      diaChi: "",
      thoiGian: "",
      gioiThieu: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    // Do something with the form values
    console.log(values);
  };

  return (
    <div>
      <div className="bg-signUp-image bg-cover bg-center min-h-[650px] flex items-center">
        <div className="container">
          <div className="flex flex-col justify-center md:w-1/2 text-white space-y-7">
            <h2 className="uppercase text-4xl md:text-5xl font-bold">
              Tình nguyện viên
            </h2>
            <p className="font-medium leading-7">
              Đồng hành cùng Nắng Yêu Thương để ươm mầm hạnh phúc cho các em nhỏ
              kém may mắn trên khắp miền đất Việt
            </p>
          </div>
        </div>
      </div>
      <div className="container mt-[-181px] py-[30px] px-[20px] md:p-[80px] lg:p-[115px] bg-[#C0C0C078] rounded-[50px] space-y-4">
        <h2 className="uppercase text-orange-500 text-2xl md:text-4xl lg:text-5xl font-bold">
          Đăng ký tình nguyện viên
        </h2>
        <p className="text-orange-500 text-lg md:text-xl font-medium">
          Thông tin đăng ký tình nguyện viên
        </p>
        <Card className="bg-transparent rounded-none border-none w-full outline-none ring-0 shadow-none">
          <CardContent className="p-0">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-7"
              >
                <FormField
                  control={form.control}
                  name="ten"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tên</FormLabel>
                      <FormControl>
                        <Input
                          className="border-none outline-none rounded-3xl focus-visible:ring-[#066aaa] duration-300"
                          placeholder="Họ và tên"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          className="border-none outline-none rounded-3xl focus-visible:ring-[#066aaa] duration-300"
                          placeholder="Email"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="soDienThoai"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Số điện thoại</FormLabel>
                      <FormControl>
                        <Input
                          className="border-none outline-none rounded-3xl focus-visible:ring-[#066aaa] duration-300"
                          placeholder="Số điện thoại"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="thoiGian"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Thời gian</FormLabel>
                      <FormControl>
                        <Input
                          className="border-none outline-none rounded-3xl focus-visible:ring-[#066aaa] duration-300"
                          placeholder="Thời gian"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="gioiThieu"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Giới thiệu</FormLabel>
                      <FormControl>
                        <Textarea
                          className="border-none outline-none rounded-md focus-visible:ring-[#066aaa] duration-300"
                          placeholder="Giới thiệu"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="bg-blue-700 text-white text-lg hover:bg-blue-900 mt-10 py-6 px-10 duration-300"
                >
                  Gửi Đăng Kí
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
