import { useRouter } from "next/router";

function VoteById() {
  const router = useRouter();
  console.log(router);
  return <h1>VoteById</h1>;
}

export default VoteById;
