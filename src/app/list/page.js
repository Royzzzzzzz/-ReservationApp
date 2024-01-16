import { connectDB } from "../../util/database";

export default async function Home() {
  // const client = await connectDB;
  // const db = client.db("forum");
  // 위의 두 코드를 하나로 축약하기
  const db = (await connectDB).db("forum");
  // post컬렉션의 모든 document 가져오기
  let result = await db.collection("post").find().toArray();
  console.log(result);
  return (
    <>
      <div>
        <h1>디비 내용:</h1>
        {result.map((post, index) => (
          <p key={index}>{post.title}</p>
        ))}
      </div>
    </>
  );
}
