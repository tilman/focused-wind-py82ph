export default function Home() {
  return (
    <div>
      <ol>
        <li>While this page loads you should see first 'page is loading...' from the loading.tsx</li>
        <li>Then page.tsx returns from it's mocked api calls after 1s and is displaying 'Slept for 1000ms. Random digit X' </li>
        <li>Then SlowServerComponent inside of a suspense in page.tsx returns from it's mocked api calls after 3s and is displaying 'Slept for 3000ms. Random digit X' </li>
        <li>So far so good, everything of suspense logic works as expected so far</li>
      </ol>
      page is loading...
    </div>
  );
}
