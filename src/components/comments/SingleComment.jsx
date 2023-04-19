import Rating from "../rating/Rating";

const SingleComment = () => {
  return (
    <div className="comments p-2 border rounded mb-2 me-2">
      <div className="border-primary border-1">
        <p className="m-0 p-0 ms-1 fw-bold">Jhon Deo</p>
        <Rating />
        <p className="text-muted m-0 mt-1 ms-1">2023-02-12</p>
        <p className="m-0 p-0 ms-1 mt-1">That is greate...</p>
      </div>
    </div>
  );
};

export default SingleComment;
