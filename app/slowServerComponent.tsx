import { mockedApiCall } from "../sleep";

export const SlowServerComponent: React.FC = async () => {
  const res = await mockedApiCall(3000);
  return (
    <div>
      {res}
    </div>
  );
}
