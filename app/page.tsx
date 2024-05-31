import { Suspense } from "react";
import { mockedApiCall } from "../sleep";
import { SlowServerComponent } from "./slowServerComponent";
import { revalidateTag } from "next/cache";

/** Add your relevant code here for the issue to reproduce */
export default async function Home() {
  const res = await mockedApiCall(1000);
  return (
    <div>
      {res}
      <br />
      <Suspense fallback={"SlowServerComponent is loading..."}>
        <SlowServerComponent />
      </Suspense>

      <br />
      Now run this server action and watch how "Mocked Regular Response" and "Mocked Slow Response" are returning at the same time.
      I would await that "Mocked Regular Response" would return before "Mocked Slow Response" because of the suspense boundary,
      but it seems like the suspense boundary get's ignored if the page is refreshed via an server action.
      <form action={async () => {
        "use server"
        revalidateTag("example")
      }}>
        <button type="submit">run server action</button>
      </form>
    </div>
  );
}
