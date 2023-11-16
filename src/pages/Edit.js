import { useNavigate, useSearchParams } from "react-router-dom";

const Edit = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get("id");
  const mode = searchParams.get("mode");

  const navigate = useNavigate();

  console.log("id: ", id);
  console.log("mode: ", mode);

  return (
    <div>
      <h1>Edit</h1>
      <p>이곳은 일기 수정페이지 입니다</p>
      <button onClick={() => setSearchParams({ who: "kiji" })}>
        QS 바꾸기
      </button>
      <button onClick={() => navigate("/home")}>HOME으로 가기</button>
      <button onClick={() => navigate(-1)}>뒤로가기</button>
    </div>
  );
};

export default Edit;
