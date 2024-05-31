import { mockedSlowApiCall } from "../sleep";

/** Add your relevant code here for the issue to reproduce */
export default async function SlowServerComponent() {
  const res = await mockedSlowApiCall();
  return (
    <div>
      {res}
    </div>
  );
}
