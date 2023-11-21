"use client";
import React from "react";
import { Form, FormControl, FormField, FormItem } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { SubmitHandler, useForm } from "react-hook-form";
import { Textarea } from "../ui/textarea";

type Props = {};
type Inputs = {
  title: string;
  imageName: string[];
  description: string;
};
const CreatePost = (props: Props) => {
  const form = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3 mb-6">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Title" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea placeholder="Description" {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        <div className="">
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </Form>
  );
};

export default CreatePost;
