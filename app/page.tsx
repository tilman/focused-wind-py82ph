import { Suspense } from "react";
import { mockedApiCall } from "../sleep";
import { SlowServerComponent } from "./slowServerComponent";
import { revalidatePath } from "next/cache";

/** Add your relevant code here for the issue to reproduce */
export default async function Home() {
  const res = await mockedApiCall(1000);
  return (
    <div>
      <ol>
        <li>While this page loads you should see first 'page is loading...' from the loading.tsx</li>
        <li>Then page.tsx returns from it's mocked api calls after 1s and is displaying 'Slept for 1000ms. Random digit X' </li>
        <li>Then SlowServerComponent inside of a suspense in page.tsx returns from it's mocked api calls after 3s and is displaying 'Slept for 3000ms. Random digit X' </li>
        <li>So far so good, everything of suspense logic works as expected so far</li>
      </ol>


      {res}
      <br />
      <Suspense fallback={<div>SlowServerComponent is loading...</div>}>
        <SlowServerComponent />
      </Suspense>

      <br />
      <ol>
        <li>Now run this server action. The behavior should be the same as previously in point 2. and 3. (no loading.tsx but suspense should work)</li>
        <form action={async () => {
          "use server"
          revalidatePath("/")
        }}>
          <button type="submit">run server action</button>
        </form>
        <li>Now run the server action again and watch how "Slept for <strong>1000ms</strong>. Random digit XX" and "Slept for <strong>3000ms</strong>. Random digit XX" are displayed at the same time (after 4000ms, after both (1000ms + 3000ms) have returned).</li>
        <li>The suspense is now "ignored". "Slept for <strong>1000ms</strong>. Random digit XX" should show up before "Slept for <strong>3000ms</strong>. Random digit XX" because of the suspense boundary.</li>
        <li>But it seems like the suspense boundary get's ignored if the page is refreshed via an server action for the second time.</li>
        <li>This bug results in bad user experience because long running API calls will block the whole page update and not only a small portion of the UI.</li>
      </ol>
      This behavior now persists for all upcoming form action calls until the page is hard reloaded via the browser navigation.
    </div>
  );
}
