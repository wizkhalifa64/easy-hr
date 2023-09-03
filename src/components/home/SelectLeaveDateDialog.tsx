"use client";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogCancel,
  AlertDialogAction,
} from "../ui/alert-dialog";
import { AlertDialogHeader, AlertDialogFooter } from "../ui/alert-dialog";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Calendar as CalendarIcon, Link, LoaderIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Calendar } from "../ui/calendar";
import format from "date-fns/format";
import { cn } from "@/lib/utils";
import { Textarea } from "../ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
import { APPLY_LEAVE } from "@/utils/query";
import { useUserId } from "@nhost/nextjs";
import { toast } from "react-toastify";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { LEAVE } from "@/shared/data";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
type Props = {
  open: boolean;
  setOpen: (e: boolean) => void;
  action?: () => void;
};
const Inputs = z.object({
  leave_dates: z.date({ required_error: "Please select a date" }),
  leave_type: z.string({ required_error: "Please select leave type" }),
  leave_reason: z.string({ required_error: "Please type reason" }),
});
const SelectLeaveDateDialog = (props: Props) => {
  const id = useUserId();
  const form = useForm<z.infer<typeof Inputs>>({
    resolver: zodResolver(Inputs),
  });
  const [applyLeave, { loading, error, data }] = useMutation(APPLY_LEAVE);
  const onSubmit: SubmitHandler<z.infer<typeof Inputs>> = async (data) => {
    try {
      await applyLeave({
        variables: {
          userId: id,
          date: format(data.leave_dates, "yyyy-MM-dd"),
          reason: data.leave_reason,
          type: data.leave_type,
        },
      });
      toast.success("Leave applied successfully");
      form.reset();
      props.setOpen(false);
    } catch (err) {
      toast.error(error?.message);
    }
  };
  return (
    <AlertDialog
      open={props.open}
      defaultOpen={false}
      onOpenChange={props.setOpen}
    >
      <AlertDialogContent>
        <Form {...form}>
          <form className={"space-y-2"} onSubmit={form.handleSubmit(onSubmit)}>
            <AlertDialogHeader>
              <AlertDialogTitle>Apply Leave</AlertDialogTitle>
              <AlertDialogDescription></AlertDialogDescription>
            </AlertDialogHeader>

            <FormField
              control={form.control}
              name={"leave_dates"}
              render={({ field }) => (
                <FormItem>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        type={"button"}
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                      </Button>
                    </PopoverTrigger>

                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        defaultMonth={new Date()}
                        selected={field.value}
                        onSelect={field.onChange}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name={"leave_type"}
              render={({ field }) => (
                <FormItem>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select leave type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value={LEAVE.CASUAL}>Casual</SelectItem>
                      <SelectItem value={LEAVE.PAID}>Paid</SelectItem>
                      <SelectItem value={LEAVE.SICK}>Sick</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name={"leave_reason"}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      placeholder="Reason"
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <AlertDialogFooter>
              <AlertDialogCancel type="button">Cancel</AlertDialogCancel>
              <Button type="submit">
                {loading && <LoaderIcon className="h-4" />} Apply
              </Button>
            </AlertDialogFooter>
          </form>
        </Form>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default SelectLeaveDateDialog;
