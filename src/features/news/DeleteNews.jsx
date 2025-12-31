import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import {  Trash2Icon } from "lucide-react"
import { useDeleteNewsMutation } from "./newsApi"
import toast from "react-hot-toast"
import { Spinner } from "@/components/ui/spinner"

export default function DeleteNews({id}) {
    const[removeNews,{isLoading}]=useDeleteNewsMutation();
    const handleRemove= async()=>{

        try {
            await removeNews(id).unwrap();
            toast.success("News Successfully Deleted");
        } catch (err) {
            toast.error(err.data);
            console.log(err);
            
        }

    }
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        {isLoading?<Button disabled variant="ghost" ><Spinner/></Button>
        :<Button  variant="ghost" ><Trash2Icon/></Button>
}

      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleRemove}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
