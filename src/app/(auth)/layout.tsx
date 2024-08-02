import { PropsWithChildren } from "react";
import AuthHeader from "./_components/AuthHeader";

// className="w-full mx-auto md:px-12 sm:px-6"

const AuthLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="h-screen w-full flex flex-col">
      <AuthHeader />
      {children}
    </div>
  );
};

export default AuthLayout;
