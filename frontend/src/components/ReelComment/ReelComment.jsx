import ReelComment
  from "../ReelComment/ReelComment";

function ReelComments({
  comments,
}) {
  return (
    <div>
      <h3>
        Comments
      </h3>

      {comments?.map(
        (comment) => (
          <ReelComment
            key={
              comment.id
            }
            comment={
              comment
            }
          />
        )
      )}
    </div>
  );
}

export default ReelComments;