import AddComments from "./AddComments";
import SingleComment from "./SingleComment";

const CommentsList = () => {
  return (
    <>
      <div className="comments-container scrollbar">
        <SingleComment />
        <SingleComment />
        <SingleComment />
      </div>
      <AddComments />
    </>
  );
};

export default CommentsList;
