import DataTableComponent from "@/components/members/DataTableComponent";
import TopBar from "@/components/members/TopBar";
import { columns } from "@/components/members/columns";
type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};
type User = {
  userId: string;
  name: string;
  email: string;
  designation: string;
};
const payments: Payment[] = [
  {
    id: "728ed52f",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
  {
    id: "489e1d42",
    amount: 125,
    status: "processing",
    email: "example@gmail.com",
  },
  // ...
];

const Members = () => {
  return (
    <div className="container  pt-4">
      <TopBar />
      <DataTableComponent columns={columns} data={payments} />
    </div>
  );
};

export default Members;
