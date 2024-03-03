import MyButton from "../MyButton";
import MyInput from "../MyInput/MyInput";
import MyTextArea from "../MyTextArea/MyTextArea";
import { MyRating } from "../Rating";

export default function ReviewForm() {
  return (
    <div className="flex flex-col gap-8 flex-1 max-w-lg">
      <p className="text-gray-900 text-lg">Add a Review</p>
      <form action="" className="flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <label htmlFor="review" className="font-semibold text-gray-900">
            Your Rating
          </label>
          <MyRating readonly={false} value={0} />
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="review" className=" font-semibold text-gray-900">
            Your Rating
          </label>
          <MyTextArea label="Review" className="" />
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="review" className=" font-semibold text-gray-900">
            Name
          </label>
          <MyInput defaultProps={{ label: "Name" }} />
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="review" className=" font-semibold text-gray-900">
            Email
          </label>
          <MyInput defaultProps={{ label: "Email" }} />
        </div>
        <MyButton className="!py-4 w-fit" type="submit">
          Add Review
        </MyButton>
      </form>
    </div>
  );
}
