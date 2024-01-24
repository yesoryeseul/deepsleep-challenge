import fetchPassMobi from "../api/users/route";

const TestPage = async () => {
  const test = await fetchPassMobi();
  console.log(test);
  return <div>{test.map((item) => item.apply_name)}</div>;
};

export default TestPage;
