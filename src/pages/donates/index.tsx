import { Button } from "@/components/ui/button";
import React from "react";

export const DonatesPage = () => {
  const onCopy = () => 
    navigator.clipboard.writeText('TD6Vqp7pmSvMuWi8gB4hMBc9WfFBiADp1X')

  return (
    <div className="w-full">
      <h3 className="font-bold">Пожертвования</h3>
      <div className="mt-10 flex w-full flex-col gap-5">
        <img src="./donations.png" />
        <p>
          TD6Vqp7pmSvMuWi8gB4hMBc9WfFBiADp1X

        </p>
        <Button className="cursor-pointer" onClick={onCopy}>Копировать</Button>
      </div>
    </div>
  );
};
