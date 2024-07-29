import { useAuth } from "@/Providers/AuthProvider";
import useInititateKhaltiPayment from "@/api/hooks/checkout/useInititateKhaltiPayment";
import ErrorHandler from "@/components/ErrorHandler/ErrorHandler";
import MyButton from "@/components/MyButton";
import EsewaIcon from "@/public/esewa";
import KhaltiIcon from "@/public/khalti";
import { Alert, Typography } from "@material-tailwind/react";
import { useRouter } from "next-nprogress-bar";
import { useSearchParams } from "next/navigation";
import { AiFillInfoCircle } from "react-icons/ai";
import { IoCashOutline } from "react-icons/io5";

const Esewa = () => (
  <div className="flex flex-col gap-4 text-sm">
    <p>
      You will be redirected to your eSewa account to complete your payment:
    </p>
    <ol className="list-inside list-decimal">
      <li>Login to your eSewa account using your eSewa ID and your Password</li>
      <li>Ensure your eSewa account is active and has sufficient balance</li>
      <li>
        Enter OTP (one time password) sent to your registered mobile number
      </li>
    </ol>
    <p> ***Login with your eSewa mobile and PASSWORD (not MPin)***</p>
    <MyButton className="mt-6 w-fit !px-20 !py-4 text-sm">Pay Now</MyButton>
  </div>
);

const Khalti = () => {
  const router = useRouter();

  const mutation = useInititateKhaltiPayment();

  const searchParams = useSearchParams();
  const products = JSON.parse(
    decodeURIComponent(searchParams.get("products") as string),
  );

  const { user } = useAuth();

  const totalPrice = searchParams.get("totalPrice");

  const productBreakdown = products?.map((item: any) => ({
    identity: item._id,
    name: item.title,
    total_price: item.quantity * item.price * 100,
    quantity: item.quantity,
    unit_price: item.price * 100,
  }));
  const amountBreakdown = products?.map((item: any) => ({
    label: item.title,
    amount: item.quantity * (item.reducedPrice || item.price) * 100,
  }));

  const data = {
    customer: {
      name: user.username,
    },
    amount: parseInt(totalPrice || "") * 100, //in paisa,
    product_details: productBreakdown,
    amount_breakdown: amountBreakdown,
  };

  return (
    <div className="flex flex-col gap-4 text-sm">
      <p>
        You will be redirected to your Khalti account to complete your payment
      </p>
      <ol className="list-inside list-decimal">
        <li>Login to your Khalti account using your Khalti ID and your PIN.</li>
        <li>
          Ensure your Khalti account is active and has sufficient balance.
        </li>
        <li>
          Enter OTP (one time password) sent to your registered mobile number.
        </li>
      </ol>
      <p> ***Login with you Khalti mobile and PIN.***</p>
      <MyButton
        isLoading={mutation.isPending}
        onClick={() => {
          mutation.mutate(data, {
            onSuccess: (data) => {
              router.push(data.payment_url);
            },
            onError: (error) => ErrorHandler(error),
          });
        }}
        className="mt-6 w-fit !px-20 !py-4 text-sm"
      >
        Pay Now
      </MyButton>
    </div>
  );
};

const Cash = () => (
  <div className="flex flex-col gap-4">
    <p className="text-sm">
      You can pay in cash to our courier when you receive the goods at your
      doorstep.
    </p>
    <Alert
      variant="filled"
      className="bg-blue-50"
      icon={<AiFillInfoCircle size={20} className="text-blue-500" />}
    >
      <Typography className="text-sm font-medium text-blue-500">
        Cash Payment Fee of Rs. 10 applies only to Cash on Delivery payment
        method. There is no extra fee when using other payment methods.
      </Typography>
    </Alert>
    <MyButton className="mt-6 w-fit !px-20 !py-4 text-sm">
      Confirm Order
    </MyButton>
  </div>
);

export const headerData = [
  {
    id: 0,
    icon: <IoCashOutline size={90} />,
    title: "Cash On Delivery",
  },
  {
    id: 1,
    icon: <EsewaIcon />,
    title: "Esewa",
  },
  {
    id: 2,
    icon: <KhaltiIcon />,
    title: "Khalti",
  },
];

export const paymentMethodData = [
  {
    id: 0,
    component: <Cash />,
  },
  {
    id: 1,
    component: <Esewa />,
  },
  {
    id: 2,
    component: <Khalti />,
  },
];
