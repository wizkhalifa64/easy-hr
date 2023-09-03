"use client";
import { PlusIcon } from "@heroicons/react/24/solid";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import {
  FormField,
  FormItem,
  FormControl,
  FormMessage,
  Form,
} from "../ui/form";
import { useMutation, useQuery } from "@apollo/client";
import { ADD_EMPLOYEE, GET_ALL_USER, GET_DESIGNATION } from "@/utils/query";
import { LoaderIcon } from "lucide-react";
import { useUserDefaultRole, useUserRoles } from "@nhost/nextjs";
import { BLOOD_GROUP } from "@/shared/data";
import { toast } from "react-toastify";

type Inputs = {
  user_id: string;
  designation: string;
  blood_group: string;
  dob: string;
  reporting_maneger: string;
};

const TopBar = () => {
  const role = useUserDefaultRole();
  const { loading, data, error } = useQuery(GET_ALL_USER);
  const { data: designationList } = useQuery(GET_DESIGNATION);
  const [addEmployee, { loading: addEmLoading, error: addEmError }] =
    useMutation(ADD_EMPLOYEE);
  const form = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      await addEmployee({
        variables: {
          userId: data.user_id,
          bloodGroup: data.blood_group,
          designation: Number(data.designation),
        },
      });
    } catch (error) {
      toast("Employee already added or Invalid Request");
    }
  };
  return (
    <div className="flex items-center justify-end pb-5">
      <Dialog>
        {role === "HR" && (
          <DialogTrigger asChild>
            <Button>
              <PlusIcon className="h-4 mr-2" />
              Add Teammate
            </Button>
          </DialogTrigger>
        )}
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader className="py-3">
            <DialogTitle>Edit Team</DialogTitle>
            <DialogDescription>
              Make changes here. Click save when you`re done.
            </DialogDescription>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
              <FormField
                control={form.control}
                name="user_id"
                render={({ field }) => (
                  <FormItem>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="col-span-3">
                          <SelectValue placeholder="Select name" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {data?.users.map(
                          (item: {
                            id: string;
                            metadata: { firstName: string; lastName: string };
                          }) => (
                            <SelectItem value={item.id} key={item.id}>
                              {item.metadata.firstName +
                                " " +
                                item.metadata.lastName}
                            </SelectItem>
                          )
                        )}
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="designation"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="col-span-3">
                            <SelectValue placeholder="Select designation" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="overflow-y-auto h-60">
                          {designationList?.designation.map(
                            (item: { id: number; value: string }) => (
                              <SelectItem value={`${item.id}`} key={item.id}>
                                {item.value}
                              </SelectItem>
                            )
                          )}
                        </SelectContent>
                      </Select>
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="blood_group"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="col-span-3">
                            <SelectValue placeholder="Select Blood Group" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="overflow-y-auto h-60">
                          {BLOOD_GROUP.map((item) => (
                            <SelectItem value={item.value} key={item.id}>
                              {item.value}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormControl>
                  </FormItem>
                )}
              />
              <DialogFooter>
                <Button type="submit">
                  {addEmLoading && (
                    <LoaderIcon className="mr-2 h-4 w-4 animate-spin" />
                  )}
                  Save Details
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default TopBar;
