"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import FadeInSection from "./FadeInSection";

const formSchema = z.object({
  username: z
    .string()
    .min(2, { message: "Username must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  subject: z.string().min(1, { message: "Subject is required." }),
  message: z
    .string()
    .min(5, { message: "Message must be at least 5 characters." }),
});

export default function HomeContact() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    // Do something with the form values.
    console.log(values);
  };

  return (
    <FadeInSection>
      <div className="md:my-10">
        <div className="py-10 md:py-20 relative">
          <div
            className="absolute top-0 right-0 w-[50%] h-full opacity-50 bg-cover bg-center"
            style={{ backgroundImage: "url('/assets/images/city-scape.jpg')" }}
          />
          <div
            className="flex flex-col md:container relative z-10 lg:flex-row md:flex-col-reverse lg:space-x-10"
            style={{ alignItems: "flex-start" }}
          >
            {/* Contact Information */}
            <div className="contact flex flex-col space-y-5 mb-5 md:mt-8 lg:mt-0">
              <h2 className="text-orange-500 text-5xl lg:text-6xl font-bold leading-tight mb-3 md:mb-11">
                Liên hệ với chúng tôi
              </h2>
              <div>
                <h3 className="text-orange-500 text-xl font-bold">
                  Điện thoại
                </h3>
                <p>0942 250 117</p>
              </div>
              <div>
                <h3 className="text-orange-500 text-xl font-bold">Email</h3>
                <p>nangyeuthuong.org@gmail.com</p>
              </div>
              <div>
                <h3 className="text-orange-500 text-xl font-bold">Địa chỉ</h3>
                <p>Bệnh Viện Nhi Đồng 2, Nguyễn Du, Quận 1, TP HCM</p>
              </div>
            </div>

            {/* Map and Form Section */}
            <div className="flex flex-col md:flex-row w-full space-y-5 md:space-y-0">
              <div className="map flex-1 relative w-full">
                <div
                  className="absolute inset-0 z-0 bg-cover bg-center h-full w-full"
                  style={{
                    backgroundImage:
                      "url(https://nangyeuthuong.org/wp-content/uploads/2024/05/tower-img.jpg)",
                  }}
                />
                <iframe
                  loading="lazy"
                  className="h-[512px] w-full md:h-full relative z-10"
                  src="https://maps.google.com/maps?q=B%E1%BB%87nh%20Vi%E1%BB%87n%20Nhi%20%C4%90%E1%BB%93ng%202%2C%20Nguy%E1%BB%85n%20Du%2C%20Qu%E1%BA%ADn%201%20700000%20Qu%E1%BA%ADn%201&amp;t=m&amp;z=10&amp;output=embed&amp;iwloc=near"
                  title="Bệnh Viện Nhi Đồng 2, Nguyễn Du, Quận 1"
                  aria-label="Bệnh Viện Nhi Đồng 2, Nguyễn Du, Quận 1"
                />
              </div>
              <div className="form-contact flex-1 flex flex-col w-full">
                <Card className="bg-black rounded-none border-none w-full">
                  <CardHeader>
                    <CardTitle className="text-white">
                      Gửi chúng tôi thông tin của bạn
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Form {...form}>
                      <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-7"
                      >
                        <FormField
                          control={form.control}
                          name="username"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Input placeholder="Username" {...field} />
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
                              <FormControl>
                                <Input placeholder="Email" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="subject"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Input placeholder="Subject" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="message"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Textarea placeholder="Message" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <Button
                          type="submit"
                          className="bg-blue-700 text-white text-lg hover:bg-blue-900 mt-10 py-6 px-10 duration-300"
                        >
                          Submit
                        </Button>
                      </form>
                    </Form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FadeInSection>
  );
}
