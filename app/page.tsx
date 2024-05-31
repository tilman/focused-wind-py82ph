import { Suspense } from "react";
import { mockedApiCall } from "../sleep";
import SlowServerComponent from "./slowServerComponent";

/** Add your relevant code here for the issue to reproduce */
export default async function Home() {
  const res = await mockedApiCall();
  return (
    <div>
      {res}
      <br/>
      <Suspense fallback={"SlowServerComponent is loading..."}>
        <SlowServerComponent />
      </Suspense>
    </div>
  );
}
