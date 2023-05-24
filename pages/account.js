import { useRouter } from "next/router";
import React, { useEffect } from "react";
const Account = () => {
  const router = useRouter();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      router.push("/");
    }
  }, [router.query]);
  return <div>myaccount</div>;
};

export default Account;
