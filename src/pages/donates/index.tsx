import { Button } from "@/components/ui/button";
import React from "react";

export const DonatesPage = () => {
  const onCopy = () => 
    navigator.clipboard.writeText('TD6Vqp7pmSvMuWi8gB4hMBc9WfFBiADp1X')

  return (
    <div className="w-full" id="donations">
      <h3 className="font-bold">Пожертвования</h3>
      <div className="mt-10 flex w-full flex-col gap-5">
       <div>
       <img width="200px" src="./donations.png" />
        <p className="break-all">
          TD6Vqp7pmSvMuWi8gB4hMBc9WfFBiADp1X

        </p>
       </div>
        <Button className="cursor-pointer" onClick={onCopy}>Копировать</Button>
      </div>
    </div>
  );
};
