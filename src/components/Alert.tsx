import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogCancel,
  AlertDialogAction,
} from "./ui/alert-dialog";
import { AlertDialogHeader, AlertDialogFooter } from "./ui/alert-dialog";
import { Button } from "./ui/button";
type Props = {
  open: boolean;
  setOpen: (e: boolean) => void;
  desc?: string;
  action?: () => void;
  header?: string;
};
export function AlertModal(props: Props) {
  return (
    <AlertDialog
      open={props.open}
      defaultOpen={false}
      onOpenChange={props.setOpen}
    >
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{props.header}</AlertDialogTitle>
          <AlertDialogDescription>{props.desc}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={props.action}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
